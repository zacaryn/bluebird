import { NextResponse } from 'next/server';
import type { ApiResponse } from '@/types';

interface LoginResponse extends ApiResponse {
  token?: string;
  challengeName?: string;
  session?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(`${process.env.API_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data: LoginResponse = await response.json();

    // Handle error responses
    if (!response.ok) {
      return NextResponse.json(
        { error: data.error || 'Authentication failed' },
        { status: response.status }
      );
    }

    // Handle NEW_PASSWORD_REQUIRED challenge
    if (data.challengeName === 'NEW_PASSWORD_REQUIRED') {
      return NextResponse.json({
        challengeName: data.challengeName,
        session: data.session,
        message: data.message || 'Please set a new password'
      });
    }

    // For successful login, verify token exists
    if (!data.token) {
      return NextResponse.json(
        { error: 'Invalid server response' },
        { status: 500 }
      );
    }

    // Set the token in an HTTP-only cookie
    const headers = new Headers();
    headers.append(
      'Set-Cookie',
      `auth-token=${data.token}; HttpOnly; Path=/; SameSite=Strict; ${
        process.env.NODE_ENV === 'production' ? 'Secure;' : ''
      }`
    );

    return NextResponse.json(data, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 