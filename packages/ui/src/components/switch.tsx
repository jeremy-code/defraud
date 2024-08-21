"use client";

import type { ComponentPropsWithRef } from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

type SwitchVariants = {
  size: {
    default: string;
    sm: string;
    lg: string;
  };
};

const switchRootVariants = cva<SwitchVariants>(
  [
    "inline-flex shrink-0 cursor-pointer items-center rounded-full p-0.5 transition-[background-color,box-shadow,opacity]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "radix-state-checked:bg-primary",
    "radix-state-unchecked:bg-input",
  ],
  {
    variants: {
      size: {
        default: "h-6 w-11",
        sm: "h-4 w-8",
        lg: "h-7 w-14",
      },
    },
    defaultVariants: { size: "default" },
  },
);

export const SwitchRoot = ({
  className,
  size,
  ...props
}: ComponentPropsWithRef<typeof SwitchPrimitives.Root> &
  VariantProps<typeof switchRootVariants>) => (
  <SwitchPrimitives.Root
    className={twMerge(switchRootVariants({ className, size }))}
    {...props}
  />
);

const switchThumbVariants = cva<SwitchVariants>(
  [
    "rounded-[inherit] bg-background transition-transform will-change-transform",
    "radix-state-unchecked:translate-x-0",
  ],
  {
    variants: {
      size: {
        default: "size-5 radix-state-checked:translate-x-5",
        sm: "size-3 radix-state-checked:translate-x-4",
        lg: "size-6 radix-state-checked:translate-x-7",
      },
    },
    defaultVariants: { size: "default" },
  },
);

export const SwitchThumb = ({
  className,
  size,
  ...props
}: ComponentPropsWithRef<typeof SwitchPrimitives.Thumb> &
  VariantProps<typeof switchThumbVariants>) => (
  <SwitchPrimitives.Thumb
    className={twMerge(switchThumbVariants({ className, size }))}
    {...props}
  />
);

export const Switch = ({
  size,
  ...props
}: ComponentPropsWithRef<typeof SwitchRoot>) => (
  <SwitchRoot size={size} {...props}>
    <SwitchThumb size={size} />
  </SwitchRoot>
);
