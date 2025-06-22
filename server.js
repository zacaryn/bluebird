import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, QueryCommand, PutCommand, UpdateCommand, ScanCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb';
import { v4 as uuid } from 'uuid';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { CognitoIdentityProviderClient, InitiateAuthCommand, RespondToAuthChallengeCommand } from '@aws-sdk/client-cognito-identity-provider';

// Load environment variables from .env.local or .env
dotenv.config({ path: process.env.NODE_ENV === 'production' ? '.env' : '.env.local' });

// Get the directory path for ESM modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const isProduction = process.env.NODE_ENV === 'production';

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://10.0.0.53:3000',
    'https://bluebirdmortgage.com',
    'https://www.bluebirdmortgage.com'
  ],
  credentials: true
}));
app.use(express.json());

// Simple rate limiting middleware
const rateLimit = (windowMs = 60000, max = 100) => {
  const requests = new Map();
  
  return (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();
    const windowStart = now - windowMs;
    
    // Clean up old requests
    requests.forEach((timestamp, key) => {
      if (timestamp < windowStart) {
        requests.delete(key);
      }
    });
    
    // Count requests for this IP
    const requestTimes = requests.get(ip) || [];
    requestTimes.push(now);
    requests.set(ip, requestTimes.filter(time => time > windowStart));
    
    // Check rate limit
    if (requests.get(ip).length > max) {
      return res.status(429).json({ 
        error: 'Too many requests', 
        message: 'Please try again later' 
      });
    }
    
    next();
  };
};

// Apply rate limiting to API routes
app.use('/api', rateLimit(60000, 30)); // 30 requests per minute

// Logger middleware
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(
      `${new Date().toISOString()} - ${req.method} ${req.url} ${res.statusCode} ${duration}ms`
    );
  });
  next();
});

// Initialize the DynamoDB client with credentials from environment variables
const client = DynamoDBDocumentClient.from(
  new DynamoDBClient({
    region: process.env.AWS_REGION || 'us-east-1',
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
  })
);

// Initialize Cognito client
const cognitoClient = new CognitoIdentityProviderClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

// Log environment variable loading for debugging (only in non-production)
if (!isProduction) {
  console.log('AWS Access Key available:', !!process.env.AWS_ACCESS_KEY_ID);
  console.log('AWS Secret Key available:', !!process.env.AWS_SECRET_ACCESS_KEY);
}

// Constants for DynamoDB table
const INQUIRIES_TABLE = 'bluebirdmortgage-inquiries';

// JWT verification middleware
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Invalid token format' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

// Login endpoint
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password, newPassword, session } = req.body;
    console.log('Login attempt for:', email); // Log the email being used

    // If we have a session and new password, handle the password change
    if (session && newPassword) {
      console.log('Attempting password change with session');
      const challengeCommand = new RespondToAuthChallengeCommand({
        ChallengeName: 'NEW_PASSWORD_REQUIRED',
        ClientId: '47cqd1ogpsuicbd79aajigcl6',
        ChallengeResponses: {
          USERNAME: email,
          NEW_PASSWORD: newPassword
        },
        Session: session
      });

      const challengeResponse = await cognitoClient.send(challengeCommand);
      console.log('Challenge response:', JSON.stringify(challengeResponse, null, 2));
      
      if (!challengeResponse.AuthenticationResult) {
        throw new Error('No authentication result received after password change');
      }

      // Create our own JWT for subsequent requests
      const token = jwt.sign(
        { email },
        process.env.JWT_SECRET || 'temp_secret',
        { expiresIn: '1h' }
      );

      return res.json({ success: true, token });
    }

    // Regular login flow
    console.log('Attempting regular login');
    const command = new InitiateAuthCommand({
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: '47cqd1ogpsuicbd79aajigcl6',
      AuthParameters: {
        USERNAME: email,
        PASSWORD: password
      }
    });

    console.log('Sending auth command to Cognito');
    const response = await cognitoClient.send(command);
    console.log('Cognito response:', JSON.stringify(response, null, 2));

    // Handle NEW_PASSWORD_REQUIRED challenge
    if (response.ChallengeName === 'NEW_PASSWORD_REQUIRED') {
      console.log('New password required challenge received');
      return res.json({
        success: false,
        challengeName: 'NEW_PASSWORD_REQUIRED',
        session: response.Session
      });
    }

    if (!response.AuthenticationResult) {
      throw new Error('No authentication result received');
    }

    // Create our own JWT for subsequent requests
    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET || 'temp_secret',
      { expiresIn: '1h' }
    );

    return res.json({ success: true, token });
  } catch (error) {
    console.error('Login error details:', {
      name: error.name,
      message: error.message,
      code: error.code,
      statusCode: error.$metadata?.httpStatusCode,
      requestId: error.$metadata?.requestId,
      type: error.__type
    });
    return res.status(401).json({ 
      error: 'Authentication failed',
      message: isProduction ? 'Invalid credentials' : error.message,
      details: !isProduction ? {
        name: error.name,
        code: error.code,
        type: error.__type
      } : undefined
    });
  }
});

// Import our service
import { InquiriesDB, LeadsDB } from './src/lib/aws/db-service.js';

// API endpoint to get inquiries (protected for admin)
app.get('/api/inquiries', verifyToken, async (req, res) => {
  try {
    const inquiries = await InquiriesDB.getAll();
    return res.json({
      success: true,
      data: inquiries
    });
  } catch (error) {
    console.error('[Admin] Error fetching inquiries:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to fetch inquiries',
      details: error.message
    });
  }
});

// API endpoint to mark inquiry as read (protected for admin)
app.patch('/api/inquiries/:id', verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`[Admin] Marking inquiry ${id} as read`);

    const result = await InquiriesDB.markAsRead(id);
    console.log('[Admin] Update result:', result);

    if (!result) {
      return res.status(404).json({
        success: false,
        error: 'Inquiry not found'
      });
    }

    return res.json({
      success: true,
      message: 'Inquiry marked as read',
      data: result
    });

  } catch (error) {
    console.error('[Admin] Error marking inquiry as read:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to mark inquiry as read',
      details: error.message
    });
  }
});

// API endpoint to delete an inquiry (protected for admin)
app.delete('/api/inquiries/:id', verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`[Admin] Deleting inquiry ${id}`);

    await InquiriesDB.delete(id);
    console.log(`[Admin] Successfully deleted inquiry ${id}`);

    return res.json({
      success: true,
      message: 'Inquiry deleted successfully'
    });

  } catch (error) {
    console.error('[Admin] Error deleting inquiry:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to delete inquiry',
      details: error.message
    });
  }
});

// API endpoint to submit an inquiry (public)
app.post('/api/inquiries', async (req, res) => {
  try {
    const inquiry = req.body;
    const result = await InquiriesDB.add(inquiry);

    return res.json({
      success: true,
      message: 'Inquiry submitted successfully',
      data: result
    });
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to submit inquiry',
      details: error.message
    });
  }
});

// API endpoint to get leads (protected for admin)
app.get('/api/leads', verifyToken, async (req, res) => {
  try {
    const leads = await LeadsDB.getAll();
    return res.json({
      success: true,
      data: leads
    });
  } catch (error) {
    console.error('[Admin] Error fetching leads:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to fetch leads',
      details: error.message
    });
  }
});

// API endpoint to mark lead as read (protected for admin)
app.patch('/api/leads/:id', verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`[Admin] Marking lead ${id} as read`);

    const result = await LeadsDB.markAsRead(id);
    console.log('[Admin] Update result:', result);

    if (!result) {
      return res.status(404).json({
        success: false,
        error: 'Lead not found'
      });
    }

    return res.json({
      success: true,
      message: 'Lead marked as read',
      data: result
    });

  } catch (error) {
    console.error('[Admin] Error marking lead as read:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to mark lead as read',
      details: error.message
    });
  }
});

// API endpoint to delete a lead (protected for admin)
app.delete('/api/leads/:id', verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`[Admin] Deleting lead ${id}`);

    await LeadsDB.delete(id);
    console.log(`[Admin] Successfully deleted lead ${id}`);

    return res.json({
      success: true,
      message: 'Lead deleted successfully'
    });

  } catch (error) {
    console.error('[Admin] Error deleting lead:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to delete lead',
      details: error.message
    });
  }
});

// API endpoint to submit a lead (public)
app.post('/api/leads', async (req, res) => {
  try {
    const lead = req.body;
    const result = await LeadsDB.add(lead);

    return res.json({
      success: true,
      message: 'Lead submitted successfully',
      data: result
    });
  } catch (error) {
    console.error('Error submitting lead:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to submit lead',
      details: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: isProduction ? 'An unexpected error occurred' : err.message
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`AWS Service running in ${isProduction ? 'production' : 'development'} mode on port ${PORT}`);
  console.log(`Server accessible at:`);
  console.log(`  - http://localhost:${PORT}`);
  console.log(`  - http://10.0.0.53:${PORT} (or your local IP)`);
});

export default app; 