import { NextRequest, NextResponse } from 'next/server';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// GET /api/auth/status - Check authentication status
export async function GET(request: NextRequest) {
  try {
    const authToken = request.cookies.get('authToken')?.value;
    return NextResponse.json({
      authenticated: authToken === 'authenticated'
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to check auth status' },
      { status: 500 }
    );
  }
}
