import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "./schema";

declare global {
  /**
   * `let` and `const` will not work with globalThis, `var` is required.
   * {@link https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#type-checking-for-globalthis}
   */
  // eslint-disable-next-line no-var
  var db: NodePgDatabase<typeof schema> | undefined;
}

// Not using `src/utils/env.ts` as migration script is not run in the same
// context (Next.js)
const { DB_URL, NODE_ENV } = process.env;
if (!DB_URL) throw new Error("DB_URL environment variable is not set");

const drizzleSingleton = () =>
  drizzle(new Pool({ connectionString: DB_URL }), {
    schema,
    logger: NODE_ENV === "development",
  });

export const db = globalThis.db ?? drizzleSingleton();

if (NODE_ENV !== "production") globalThis.db = db;
