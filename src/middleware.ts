import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authenticateAdminRequest } from "@/lib/auth/adminAuth";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Protect all /admin routes with fail-closed authentication
  if (pathname.startsWith("/admin")) {
    const auth = authenticateAdminRequest(request);
    if (!auth.isSuccess && auth.response) {
      return auth.response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/admin"],
};
