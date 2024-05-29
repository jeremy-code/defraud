import type { ComponentPropsWithRef } from "react";

import { cn } from "../utils";

export const Skeleton = ({
  className,
  ...props
}: ComponentPropsWithRef<"div">) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-foreground/10", className)}
      {...props}
    />
  );
};
