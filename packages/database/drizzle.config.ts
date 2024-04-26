import { cwd } from "node:process";
import { loadEnvConfig } from "@next/env";
import type { Config } from "drizzle-kit";

loadEnvConfig(cwd());

export default {
  out: "./src/migration",
  schema: "./src/schema.ts",
  breakpoints: false,
  driver: "pg",
  dbCredentials: {
    connectionString:
      process.env.DB_URL ??
      "postgres://postgres:N0T4R34LPA55W0RD@example.com:5432/db_name",
  },
} satisfies Config;
