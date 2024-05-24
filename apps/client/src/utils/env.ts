import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

import { TurnstileSecret } from "@/lib/captcha";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
    CF_TURNSTILE_SECRET_KEY: TurnstileSecret,
    DB_URL: z.string().url(),
    KV_URL: z.string().url(),
  },
  client: {
    NEXT_PUBLIC_CF_TURNSTILE_SITE_KEY: z.string().startsWith("0x").length(24),
  },
  /**
   * Due to how Next.js bundles environment variables on Edge and Client, to
   * include them in the bundle, they must be manually passed to `runtimeEnv`.
   * Destructuring from `process.env` will not work.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    CF_TURNSTILE_SECRET_KEY: process.env.CF_TURNSTILE_SECRET_KEY,
    DB_URL: process.env.DB_URL,
    KV_URL: process.env.KV_URL,
    NEXT_PUBLIC_CF_TURNSTILE_SITE_KEY:
      process.env.NEXT_PUBLIC_CF_TURNSTILE_SITE_KEY,
  },
});
