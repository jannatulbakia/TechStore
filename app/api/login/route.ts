import { NextRequest, NextResponse } from 'next/server';

// POST /api/login - User authentication
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Mock authentication (hardcoded credentials)
    if (email === 'admin@example.com' && password === 'password123') {
      const response = NextResponse.json({
        success: true,
        message: 'Login successful'
      });

      // Set cookie
      response.cookies.set('authToken', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 86400, // 24 hours in seconds
        path: '/'
      });

      return response;
    } else {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process login' },
      { status: 500 }
    );
  }
}
