import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "./schema";

declare global {
  /* eslint-disable-next-line no-var --
   * `let` and `const` will not work with `globalThis`, `var` is required.
   *
   * @see {@link https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#type-checking-for-globalthis}
   */
  var db: NodePgDatabase<typeof schema> | undefined;
}

if (!process.env.DB_URL) {
  throw new Error("DB_URL environment variable is not defined");
}

const drizzleSingleton = () =>
  drizzle(new Pool({ connectionString: process.env.DB_URL }), {
    logger: process.env.NODE_ENV === "development",
    schema,
  });

export const db = globalThis.db ?? drizzleSingleton();

if (process.env.NODE_ENV !== "production") {
  globalThis.db = db;
}
