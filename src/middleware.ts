import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(
  request: NextRequest
): Promise<NextResponse | undefined> {
  const requestHeaders = new Headers(request.headers)

  requestHeaders.set('x-pathname', request.nextUrl.pathname)

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
