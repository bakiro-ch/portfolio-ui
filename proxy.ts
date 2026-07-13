import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // 1. Get the token from the cookies
  const token = request.cookies.get('token')?.value;

  // 2. If there is no token, redirect to the login page
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 3. If the token exists, allow the user to proceed to the page
  return NextResponse.next();
}

// 4. Configure which routes this middleware should run on
export const config = {
  matcher: [
    // Protect all routes starting with /admin
    '/admin/:path*',
  ],
};