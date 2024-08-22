"use client";

import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import { LoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";

import { Button, type ButtonProps } from "@defraud/ui/components";

export type LoadingButtonProps = ButtonProps;

export const LoadingButton = ({ children, ...props }: LoadingButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button aria-busy={pending} disabled={pending} {...props}>
      {pending ?
        <AccessibleIcon label="Loading">
          <LoaderCircle className="absolute animate-spin" />
        </AccessibleIcon>
      : children}
    </Button>
  );
};
