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
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    connectionString: process.env.DB_URL!,
  },
} satisfies Config;
