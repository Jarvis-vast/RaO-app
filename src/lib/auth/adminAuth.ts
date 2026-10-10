import { NextRequest, NextResponse } from "next/server";

export interface AuthResult {
  isSuccess: boolean;
  response?: NextResponse;
}

/**
 * Shared Fail-Closed Authentication Helper for RaO Admin Pages and Operations API Endpoints.
 * Ensures identical security policy across /admin and GET /api/trips/request.
 */
export function authenticateAdminRequest(request: NextRequest): AuthResult {
  const requiredUser = process.env.ADMIN_USER;
  const requiredPass = process.env.ADMIN_PASS;

  // Fail-closed: If credentials are missing in production environment, return 500 Configuration Error.
  // NEVER expose customer records or admin views without explicit authentication credentials configured.
  if (!requiredUser || !requiredPass) {
    return {
      isSuccess: false,
      response: new NextResponse(
        JSON.stringify({ error: "Server Configuration Error: Admin authentication is not configured." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      ),
    };
  }

  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return {
      isSuccess: false,
      response: new NextResponse(
        JSON.stringify({ error: "Authentication required for RaO Operations." }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
            "WWW-Authenticate": 'Basic realm="RaO Admin Operations", charset="UTF-8"',
          },
        }
      ),
    };
  }

  try {
    const base64Credentials = authHeader.split(" ")[1];
    const decoded = atob(base64Credentials);
    const [user, pass] = decoded.split(":");

    if (user !== requiredUser || pass !== requiredPass) {
      return {
        isSuccess: false,
        response: new NextResponse(
          JSON.stringify({ error: "Invalid admin credentials." }),
          {
            status: 401,
            headers: {
              "Content-Type": "application/json",
              "WWW-Authenticate": 'Basic realm="RaO Admin Operations", charset="UTF-8"',
            },
          }
        ),
      };
    }
  } catch {
    return {
      isSuccess: false,
      response: new NextResponse(
        JSON.stringify({ error: "Authentication failed." }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
            "WWW-Authenticate": 'Basic realm="RaO Admin Operations", charset="UTF-8"',
          },
        }
      ),
    };
  }

  return { isSuccess: true };
}
