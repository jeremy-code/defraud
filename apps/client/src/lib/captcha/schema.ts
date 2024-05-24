import { z } from "zod";

export const TurnstileSecret = z.union([
  z.string().startsWith("0x").length(35),
  // Valid secret keys for testing
  // https://developers.cloudflare.com/turnstile/reference/testing/
  z.enum([
    "1x0000000000000000000000000000000AA",
    "2x0000000000000000000000000000000AA",
    "3x0000000000000000000000000000000AA",
  ]),
]);
export type TurnstileSecret = z.infer<typeof TurnstileSecret>;

export const TurnstileResponse = z.string();
export type TurnstileResponse = z.infer<typeof TurnstileResponse>;

export const ValidationRequestParams = z.object({
  secret: TurnstileSecret,
  response: TurnstileResponse,
  remoteip: z.string().ip().optional(),
  idemptotency_key: z.string().uuid().optional(),
});
export type ValidationRequestParams = z.infer<typeof ValidationRequestParams>;

// https://developers.cloudflare.com/turnstile/get-started/server-side-validation/#error-codes
const ErrorCode = z.enum([
  "missing-input-secret",
  "invalid-input-secret",
  "missing-input-response",
  "invalid-input-response",
  "invalid-widget-id",
  "invalid-parsed-secret",
  "bad-request",
  "timeout-or-duplicate",
  "internal-error",
]);
export type ErrorCode = z.infer<typeof ErrorCode>;

export const ValidationResponse = z.discriminatedUnion("success", [
  z.object({
    success: z.literal(true),
    challenge_ts: z.string().datetime().array(),
    hostname: z.string(),
    "error-codes": z.array(ErrorCode),
    action: z.string(),
    cdata: z.string(),
  }),
  z.object({
    success: z.literal(false),
    "error-codes": z.array(ErrorCode),
  }),
]);
export type ValidationResponse = z.infer<typeof ValidationResponse>;
