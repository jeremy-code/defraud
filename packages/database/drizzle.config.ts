import { cwd } from "node:process";
import { loadEnvConfig } from "@next/env";
import type { Config } from "drizzle-kit";

loadEnvConfig(cwd());

export default {
  dialect: "postgresql",
  out: "./src/migration",
  breakpoints: false,
  schema: "./src/schema.ts",
  dbCredentials: {
    url:
      process.env.DB_URL ??
      "postgres://postgres:N0T4R34LPA55W0RD@example.com:5432/db_name",
  },
} satisfies Config;
