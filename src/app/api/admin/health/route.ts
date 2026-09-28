import { NextRequest, NextResponse } from "next/server";
import { getPrismaClient } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  // Check basic authentication for admin health diagnostics
  const requiredUser = process.env.ADMIN_USER;
  const requiredPass = process.env.ADMIN_PASS;

  if (!requiredUser || !requiredPass) {
    return NextResponse.json(
      { status: "UNCONFIGURED", message: "Admin authentication environment variables missing." },
      { status: 500 }
    );
  }

  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const base64Credentials = authHeader.split(" ")[1];
    const decoded = Buffer.from(base64Credentials, "base64").toString("utf-8");
    const [user, pass] = decoded.split(":");

    if (user !== requiredUser || pass !== requiredPass) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }
  } catch {
    return NextResponse.json({ error: "Authentication failed" }, { status: 401 });
  }

  const prisma = getPrismaClient();
  const dbConfigured = !!process.env.DATABASE_URL;

  if (!dbConfigured || !prisma) {
    return NextResponse.json(
      {
        status: "DEGRADED",
        dbConfigured: false,
        dbConnected: false,
        message: "PostgreSQL DATABASE_URL is not set.",
      },
      { status: 200 }
    );
  }

  try {
    const leadCount = await prisma.customerLeadRequest.count();
    return NextResponse.json(
      {
        status: "HEALTHY",
        dbConfigured: true,
        dbConnected: true,
        totalLeadsCount: leadCount,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        status: "ERROR",
        dbConfigured: true,
        dbConnected: false,
        error: err.message || "Database connection test failed.",
      },
      { status: 500 }
    );
  }
}
