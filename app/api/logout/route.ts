import { NextResponse } from 'next/server';

// POST /api/logout - User logout
export async function POST() {
  const response = NextResponse.json({
    success: true,
    message: 'Logout successful'
  });

  // Clear cookie
  response.cookies.set('authToken', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
        maxAge: 0,
    path: '/'
  });

  return response;
}
