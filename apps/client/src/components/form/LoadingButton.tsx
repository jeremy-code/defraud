"use client";

import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import { LoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";

import {
  Button,
  buttonVariants,
  type ButtonProps,
} from "@defraud/ui/components";
import { cn } from "@defraud/ui/utils";

export type LoadingButtonProps = ButtonProps;

export const LoadingButton = ({ children, ...props }: LoadingButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button aria-busy={pending} disabled={pending} {...props}>
      {pending && (
        <AccessibleIcon label="Loading">
          <LoaderCircle className="absolute animate-spin" />
        </AccessibleIcon>
      )}

      <div
        aria-hidden={pending}
        className={cn(buttonVariants({ variant: null, size: null }), {
          invisible: pending,
        })}
      >
        {children}
      </div>
    </Button>
  );
};
