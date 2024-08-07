"use client";

import type { ComponentPropsWithRef } from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "../utils";

export const SwitchRoot = ({
  className,
  ...props
}: ComponentPropsWithRef<typeof SwitchPrimitives.Root>) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className,
    )}
    {...props}
  />
);

export const SwitchThumb = ({
  className,
  ...props
}: ComponentPropsWithRef<typeof SwitchPrimitives.Thumb>) => (
  <SwitchPrimitives.Thumb
    className={cn(
      "pointer-events-none block size-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      className,
    )}
    {...props}
  />
);

export const Switch = (
  props: ComponentPropsWithRef<typeof SwitchPrimitives.Root>,
) => (
  <SwitchRoot {...props}>
    <SwitchThumb />
  </SwitchRoot>
);
