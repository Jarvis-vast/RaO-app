import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Protect all /admin routes
  if (pathname.startsWith("/admin")) {
    const requiredUser = process.env.ADMIN_USER;
    const requiredPass = process.env.ADMIN_PASS;

    // Fail closed: If credentials are not configured on server, block access with 500 error
    if (!requiredUser || !requiredPass) {
      return new NextResponse("Server Configuration Error: Admin authentication is not configured.", {
        status: 500,
      });
    }

    const authHeader = request.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Basic ")) {
      return new NextResponse("Authentication required for RaO Operations", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="RaO Admin Operations", charset="UTF-8"',
        },
      });
    }

    try {
      const base64Credentials = authHeader.split(" ")[1];
      const decoded = atob(base64Credentials);
      const [user, pass] = decoded.split(":");

      if (user !== requiredUser || pass !== requiredPass) {
        return new NextResponse("Invalid credentials", {
          status: 401,
          headers: {
            "WWW-Authenticate": 'Basic realm="RaO Admin Operations", charset="UTF-8"',
          },
        });
      }
    } catch {
      return new NextResponse("Authentication failed", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="RaO Admin Operations", charset="UTF-8"',
        },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/admin"],
};
