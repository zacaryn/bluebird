import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, GetCommand, ScanCommand, DeleteCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { v4 as uuid } from 'uuid';
import dotenv from 'dotenv';

// Load environment variables from .env.local or .env
dotenv.config({ path: process.env.NODE_ENV === 'production' ? '.env' : '.env.local' });

console.log('Loading db-service.js...');

// Initialize DynamoDB client
const client = new DynamoDBClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

const documentClient = DynamoDBDocumentClient.from(client);

// Table names
const INQUIRIES_TABLE = 'bluebirdmortgage-inquiries';
const LEADS_TABLE = 'bluebirdmortgage-leads';

// Inquiries Database Service
export const InquiriesDB = {
  // Get all inquiries (requires auth)
  async getAll() {
    try {
      const command = new ScanCommand({
        TableName: INQUIRIES_TABLE
      });
      
      const result = await documentClient.send(command);
      return result.Items;
    } catch (error) {
      console.error('[DynamoDB] Error getting all inquiries:', error);
      throw error;
    }
  },
  
  // Get a single inquiry by ID (requires auth)
  async getById(id) {
    try {
      const command = new GetCommand({
        TableName: INQUIRIES_TABLE,
        Key: { id }
      });
      
      const result = await documentClient.send(command);
      return result.Item;
    } catch (error) {
      console.error('[DynamoDB] Error getting inquiry by ID:', error);
      throw error;
    }
  },
  
  // Add a new inquiry (public)
  async add(inquiry) {
    try {
      const timestamp = new Date().toISOString();
      const item = {
        id: uuid(),
        ...inquiry,
        createdAt: timestamp
      };

      const command = new PutCommand({
        TableName: INQUIRIES_TABLE,
        Item: item
      });
      
      await documentClient.send(command);
      return item;
    } catch (error) {
      console.error('[DynamoDB] Error adding inquiry:', error);
      throw error;
    }
  },
  
  // Mark an inquiry as read (requires auth)
  async markAsRead(id) {
    try {
      const command = new UpdateCommand({
        TableName: INQUIRIES_TABLE,
        Key: { id },
        UpdateExpression: 'SET isRead = :isRead',
        ExpressionAttributeValues: {
          ':isRead': true
        },
        ReturnValues: 'ALL_NEW'
      });
      
      const result = await documentClient.send(command);
      return result.Attributes;
    } catch (error) {
      console.error('[DynamoDB] Error marking inquiry as read:', {
        id,
        errorMessage: error.message,
        errorCode: error.code,
        statusCode: error.$metadata?.httpStatusCode
      });
      throw error;
    }
  },

  // Delete an inquiry (requires auth)
  async delete(id) {
    try {
      const command = new DeleteCommand({
        TableName: INQUIRIES_TABLE,
        Key: { id }
      });
      
      await documentClient.send(command);
      return true;
    } catch (error) {
      console.error('[DynamoDB] Error deleting inquiry:', {
        id,
        errorMessage: error.message,
        errorCode: error.code,
        statusCode: error.$metadata?.httpStatusCode
      });
      throw error;
    }
  }
};

// Leads Database Service (following same pattern as InquiriesDB)
export const LeadsDB = {
  // Get all leads (requires auth)
  async getAll() {
    try {
      const command = new ScanCommand({
        TableName: LEADS_TABLE
      });
      
      const result = await documentClient.send(command);
      return result.Items;
    } catch (error) {
      console.error('[DynamoDB] Error getting all leads:', error);
      throw error;
    }
  },
  
  // Get a single lead by ID (requires auth)
  async getById(id) {
    try {
      const command = new GetCommand({
        TableName: LEADS_TABLE,
        Key: { id }
      });
      
      const result = await documentClient.send(command);
      return result.Item;
    } catch (error) {
      console.error('[DynamoDB] Error getting lead by ID:', error);
      throw error;
    }
  },
  
  // Add a new lead (public)
  async add(lead) {
    try {
      const timestamp = new Date().toISOString();
      const item = {
        id: uuid(),
        ...lead,
        createdAt: timestamp
      };

      const command = new PutCommand({
        TableName: LEADS_TABLE,
        Item: item
      });
      
      await documentClient.send(command);
      return item;
    } catch (error) {
      console.error('[DynamoDB] Error adding lead:', error);
      throw error;
    }
  },
  
  // Mark a lead as read (requires auth)
  async markAsRead(id) {
    try {
      const command = new UpdateCommand({
        TableName: LEADS_TABLE,
        Key: { id },
        UpdateExpression: 'SET isRead = :isRead',
        ExpressionAttributeValues: {
          ':isRead': true
        },
        ReturnValues: 'ALL_NEW'
      });
      
      const result = await documentClient.send(command);
      return result.Attributes;
    } catch (error) {
      console.error('[DynamoDB] Error marking lead as read:', {
        id,
        errorMessage: error.message,
        errorCode: error.code,
        statusCode: error.$metadata?.httpStatusCode
      });
      throw error;
    }
  },

  // Delete a lead (requires auth)
  async delete(id) {
    try {
      const command = new DeleteCommand({
        TableName: LEADS_TABLE,
        Key: { id }
      });
      
      await documentClient.send(command);
      return true;
    } catch (error) {
      console.error('[DynamoDB] Error deleting lead:', {
        id,
        errorMessage: error.message,
        errorCode: error.code,
        statusCode: error.$metadata?.httpStatusCode
      });
      throw error;
    }
  }
};

export default {
  InquiriesDB,
  LeadsDB
}; 