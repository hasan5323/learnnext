import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL('/home', request.url))
}
export function middleware(request) {
    if (request.nextUrl.pathname.startsWith('/about')) {
      return NextResponse.rewrite(new URL('/about-2', request.url))
    }
   
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
      return NextResponse.rewrite(new URL('/dashboard/user', request.url))
    }
  }
 
// See "Matching Paths" below to learn more
export const config = {
//   matcher: '/about/:path*',
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}


