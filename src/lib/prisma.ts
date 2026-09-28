import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export function getPrismaClient(): PrismaClient | null {
  if (!process.env.DATABASE_URL) {
    return null;
  }
  
  if (!globalForPrisma.prisma) {
    try {
      globalForPrisma.prisma = new PrismaClient();
    } catch (err) {
      console.error("Failed to initialize PrismaClient:", err);
      return null;
    }
  }

  return globalForPrisma.prisma;
}
