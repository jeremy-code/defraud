import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

import { ValidationRequestParams } from "@/lib/captcha";

export const env = createEnv({
  server: {
    // https://nextjs.org/docs/messages/non-standard-node-env
    NODE_ENV: z.enum(["development", "production", "test"]),
    CF_TURNSTILE_SECRET_KEY: ValidationRequestParams.shape.secret,
    DB_URL: z.string().url(),
    KV_URL: z.string().url(),
  },
  client: {
    NEXT_PUBLIC_CF_TURNSTILE_SITE_KEY: z.string().startsWith("0x").length(24),
  },
  /**
   * Due to how Next.js statically analyzes environment variables on the client,
   * to be included in the bundle, they must be manually passed to
   * `experimental__runtimeEnv`. Destructuring from `process.env` will not work.
   *
   * @see {@link https://env.t3.gg/docs/nextjs#create-your-schema}
   * @see {@link https://nextjs.org/docs/app/building-your-application/configuring/environment-variables}
   */
  experimental__runtimeEnv: {
    NEXT_PUBLIC_CF_TURNSTILE_SITE_KEY:
      process.env.NEXT_PUBLIC_CF_TURNSTILE_SITE_KEY,
  },
});
