import { z } from "zod";

// https://developers.cloudflare.com/turnstile/get-started/server-side-validation/#accepted-parameters
export const ValidationRequestParams = z.object({
  secret: z.union([
    z.string().startsWith("0x").length(35),
    // Valid secret keys for testing
    // https://developers.cloudflare.com/turnstile/reference/testing/
    z.enum([
      "1x0000000000000000000000000000000AA",
      "2x0000000000000000000000000000000AA",
      "3x0000000000000000000000000000000AA",
    ]),
  ]),
  response: z.string().max(2048),
  remoteip: z.string().ip().optional(),
  idemptotency_key: z.string().uuid().optional(),
});
export type ValidationRequestParams = z.infer<typeof ValidationRequestParams>;

// https://developers.cloudflare.com/turnstile/get-started/server-side-validation/#error-codes
const ERROR_CODES = [
  "missing-input-secret",
  "invalid-input-secret",
  "missing-input-response",
  "invalid-input-response",
  "bad-request",
  "timeout-or-duplicate",
  "internal-error",
] as const;

export const ValidationResponse = z.discriminatedUnion("success", [
  z.object({
    success: z.literal(true),
    challenge_ts: z.string().datetime(),
    hostname: z.string(),
    "error-codes": z.array(z.enum(ERROR_CODES)),
    action: z.string(),
    cdata: z.string(),
  }),
  z.object({
    success: z.literal(false),
    "error-codes": z.array(z.enum(ERROR_CODES)).nonempty(),
  }),
]);
export type ValidationResponse = z.infer<typeof ValidationResponse>;
