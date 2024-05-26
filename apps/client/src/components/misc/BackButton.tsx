/**
 * @file Back button client component as a wrapper around `router.back()` (which
 * must be used in a client component)
 */
"use client";

import { useRouter } from "next/navigation";

import { Button, type ButtonProps } from "@defraud/ui/components/button";

export const BackButton = (props: ButtonProps) => {
  const router = useRouter();

  return <Button onClick={() => router.back()} {...props} />;
};
