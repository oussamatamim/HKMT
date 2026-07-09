import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createIntlMiddleware(routing);

function isAuthorized(request: NextRequest): boolean {
  const user = process.env.BASIC_AUTH_USER;
  const password = process.env.BASIC_AUTH_PASSWORD;

  if (!user || !password) {
    return true;
  }

  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Basic ")) {
    return false;
  }

  const decoded = atob(authHeader.slice(6));
  const separatorIndex = decoded.indexOf(":");
  const providedUser = decoded.slice(0, separatorIndex);
  const providedPassword = decoded.slice(separatorIndex + 1);

  return providedUser === user && providedPassword === password;
}

export default function middleware(request: NextRequest) {
  if (!isAuthorized(request)) {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="HKMT Solutions"' },
    });
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
