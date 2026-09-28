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

  if (!globalForPrisma.prisma) {
    try {
      const pool =
        globalForPrisma.pgPool ??
        new pg.Pool({
          connectionString,
          max: 10,
          idleTimeoutMillis: 30000,
          connectionTimeoutMillis: 5000,
        });

      if (process.env.NODE_ENV !== "production") {
        globalForPrisma.pgPool = pool;
      }

      const adapter = new PrismaPg(pool);
      const client = new PrismaClient({ adapter });

      if (process.env.NODE_ENV !== "production") {
        globalForPrisma.prisma = client;
      } else {
        return client;
      }
    } catch (err) {
      console.error("[RaO Database] Failed to initialize Prisma 7 PostgreSQL adapter:", err);
      return null;
    }
  }

  return globalForPrisma.prisma;
}
