import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import type { CommonProviderOptions, Provider } from "next-auth/providers";
import Discord from "next-auth/providers/discord";
import GitHub from "next-auth/providers/github";
import Sendgrid from "next-auth/providers/sendgrid";

import { db } from "@defraud/database";

const providers: Provider[] = [
  Sendgrid({
    from: "no-reply@defraud.io",
  }),
  GitHub,
  Discord,
];

export type ProviderDetail = CommonProviderOptions;

export const providerDetails = providers.map<ProviderDetail>((provider) => {
  const { id, name, type } =
    typeof provider === "function" ? provider() : provider;
  return { id, name, type };
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers,
  pages: {
    signIn: "/signin", // file://./../app/(auth)/signin/page.tsx
    signOut: "/signout", // file://./../app/(auth)/signup/page.tsx
    error: "/error", // file://./../app/error.tsx
    verifyRequest: "/verify-request", // file://./../app/(auth)/verify-request/page.tsx
  },
});
