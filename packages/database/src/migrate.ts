import { join } from "node:path";
import { cwd } from "node:process";
import { loadEnvConfig } from "@next/env";
import { MigrationConfig } from "drizzle-orm/migrator";
import { drizzle } from "drizzle-orm/node-postgres/driver";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Pool } from "pg";

loadEnvConfig(cwd());

const { DB_URL } = process.env;
if (!DB_URL) throw new Error("DB_URL environment variable is not set");

const db = drizzle(new Pool({ connectionString: DB_URL }), { logger: true });

const migrationConfig: MigrationConfig = {
  migrationsFolder: join(__dirname, "migration"),
  migrationsTable: "_migrations",
};

async function main() {
  try {
    console.log("⏳ Migration started...");

    await migrate(db, migrationConfig);

    console.log("✅ Migration finished");
  } catch (error) {
    console.error("❌ Migration failed:", error);
  }
}

void main();
