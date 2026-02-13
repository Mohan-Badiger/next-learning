import { NextResponse } from "next/server";

export function proxy(request) {
  const isLoggedIn = request.cookies.get("isLoggedIn");
  const { pathname } = request.nextUrl;

  // ✅ Allow auth routes
  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/signup")
  ) {
    return NextResponse.next();
  }

  // ❌ Redirect if not logged in
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"],
};
