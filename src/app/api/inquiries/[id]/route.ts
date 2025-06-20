import { NextRequest, NextResponse } from 'next/server';

const SERVICE_URL = process.env.NODE_ENV === 'production'
  ? process.env.AWS_SERVICE_URL || 'http://localhost:3001'
  : 'http://localhost:3001';

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Get the auth token from the cookie
    const authToken = req.headers.get('cookie')?.match(/auth-token=([^;]+)/)?.[1];

    if (!authToken) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = params;

    console.log(`[API] Deleting inquiry ${id}`);

    const response = await fetch(`${SERVICE_URL}/api/inquiries/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error(`[API] Delete failed:`, errorData);
      return NextResponse.json(
        { error: errorData.error || 'Failed to delete inquiry' },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log(`[API] Successfully deleted inquiry ${id}`);
    return NextResponse.json(data);
  } catch (error) {
    console.error('[API] Error deleting inquiry:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Get the auth token from the cookie
    const authToken = req.headers.get('cookie')?.match(/auth-token=([^;]+)/)?.[1];

    if (!authToken) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = params;
    const body = await req.json();

    console.log(`[API] Updating inquiry ${id}`);

    const response = await fetch(`${SERVICE_URL}/api/inquiries/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error(`[API] Update failed:`, errorData);
      return NextResponse.json(
        { error: errorData.error || 'Failed to update inquiry' },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log(`[API] Successfully updated inquiry ${id}`);
    return NextResponse.json(data);
  } catch (error) {
    console.error('[API] Error updating inquiry:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 