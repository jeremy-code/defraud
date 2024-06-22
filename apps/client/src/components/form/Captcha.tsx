"use client";

import { useRef, type ComponentPropsWithoutRef } from "react";
import Script, { type ScriptProps } from "next/script";

import { Skeleton } from "@defraud/ui/components/skeleton";
import { cn } from "@defraud/ui/utils";
import { env } from "@/utils/env";

const CF_TURNSTILE_URL = `https://challenges.cloudflare.com/turnstile/v0/api.js?${new URLSearchParams(
  { render: "explicit" }, // Disable implicit rendering to render using `next/script`
).toString()}`;

export type CaptchaProps = {
  params?: Omit<Turnstile.RenderParameters, "sitekey">;
} & ComponentPropsWithoutRef<"div">;

export const Captcha = ({ params, className, ...rest }: CaptchaProps) => {
  const captchaRef = useRef<HTMLDivElement>(null);

  const onLoadHandler: ScriptProps["onLoad"] = () => {
    if (!captchaRef.current || !turnstile) return;

    turnstile.render(captchaRef.current, {
      // Must be prefixed with NEXT_PUBLIC_ to be exposed to the client
      sitekey: env.NEXT_PUBLIC_CF_TURNSTILE_SITE_KEY,
      ...params,
    });
  };

  return (
    <>
      <Script src={CF_TURNSTILE_URL} onLoad={onLoadHandler} />
      <div
        ref={captchaRef}
        // Dimensions from https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/#widget-size
        className={cn(
          "relative h-[65px] w-[300px]",
          {
            "h-[50px] w-[250px]": params?.size === "compact",
            "h-0 w-0": params?.size === "invisible",
          },
          className,
        )}
        {...rest}
      >
        <Skeleton className="absolute inset-0 rounded-none" />
      </div>
    </>
  );
};
