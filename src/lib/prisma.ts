import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
  pgPool: pg.Pool | undefined;
};

export function getPrismaClient(): PrismaClient | null {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    return null;
  }

  // Reuse existing connection pool and PrismaClient across warm serverless invocations
  if (!globalForPrisma.prisma) {
    try {
      const pool =
        globalForPrisma.pgPool ??
        new pg.Pool({
          connectionString,
          max: 3, // Conservative pool limit per Vercel serverless function instance
          idleTimeoutMillis: 10000,
          connectionTimeoutMillis: 5000,
        });

      globalForPrisma.pgPool = pool;
      const adapter = new PrismaPg(pool);
      const client = new PrismaClient({ adapter });

      globalForPrisma.prisma = client;
    } catch (err) {
      console.error("[RaO Database] Failed to initialize Prisma 7 PostgreSQL adapter:", err);
      return null;
    }
  }

  return globalForPrisma.prisma;
}
