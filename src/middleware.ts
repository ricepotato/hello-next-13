import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

const DEFAULT_LOCALE = "ko";
const locales = [DEFAULT_LOCALE, "en"];

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: DEFAULT_LOCALE,
});

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return intlMiddleware(request);
  }

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return Response.redirect(request.nextUrl);
}

function getLocale(request: NextRequest) {
  return "ko";
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|static).*)",
  ],
};
