/**
 * @file Using router.back() requires its own client component, and using
 * window.history.back() is inconsistent
 */
"use client";

import { useRouter } from "next/navigation";
import { Button, ButtonProps } from "@defraud/ui/components/button";

export const BackButton = (props: ButtonProps) => {
  const router = useRouter();

  return <Button onClick={() => router.back()} {...props} />;
};
