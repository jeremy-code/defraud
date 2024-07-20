import { cwd } from "node:process";
import { loadEnvConfig } from "@next/env";
import { defineConfig } from "drizzle-kit";

loadEnvConfig(cwd());

export default defineConfig({
  dialect: "postgresql",
  out: "./src/migration",
  schema: "./src/schema.ts",
  dbCredentials:
    process.env.DB_URL ?
      {
        url: process.env.DB_URL,
      }
    : {
        host: process.env.DB_HOST ?? "localhost",
        port:
          process.env.DB_HOST === undefined ?
            Number(process.env.DB_HOST)
          : undefined,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME ?? "defraud",
      },
});
