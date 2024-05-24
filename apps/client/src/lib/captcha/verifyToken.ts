"use server";

import ky from "ky";

import { env } from "@/utils/env";
import { ValidationRequestParams, ValidationResponse } from "./schema";

export const verifyToken = async (token: FormDataEntryValue) => {
  const params = ValidationRequestParams.parse({
    secret: env.CF_TURNSTILE_SECRET_KEY,
    response: token,
    idempotency_key: crypto.randomUUID(),
  });

  const response = ValidationResponse.parse(
    await ky
      .post("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        json: params,
      })
      .json(),
  );

  if (!response.success) {
    throw new AggregateError(response["error-codes"].map((e) => new Error(e)));
  }

  return response;
};
