import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

const DEFAULT_LOCALE = "ko";
const locales = [DEFAULT_LOCALE, "en"];
const loginPathname = "/auth/login";
const nextAuthLoginPathname = "/api/auth/signin";
const nextAuthCookieName = "next-auth.csrf-token";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: DEFAULT_LOCALE,
});

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.includes(loginPathname)) {
    // cookie 에 nextAuthCookieName 없는 경우 nextAuthLoginPathname 으로 redirect 해서 next auth csrf token 발급
    const nextAuthCookieValue = request.cookies.get(nextAuthCookieName);
    if (nextAuthCookieValue === undefined) {
      console.debug("next auth cookie not found. redirect to next auth login.");
      request.nextUrl.pathname = nextAuthLoginPathname;
      return Response.redirect(request.nextUrl);
    }
  }

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
