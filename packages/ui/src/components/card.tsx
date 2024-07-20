import type { ComponentPropsWithRef } from "react";

import { cn } from "../utils";

export const Card = ({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<"div">) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow-sm",
      className,
    )}
    {...props}
  />
);

export const CardHeader = ({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<"div">) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
);

export const CardTitle = ({
  className,
  ref,
  children,
  ...props
}: ComponentPropsWithRef<"h3">) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  >
    {children}
  </h3>
);

export const CardDescription = ({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<"p">) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
);

export const CardContent = ({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<"div">) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
);

export const CardFooter = ({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<"div">) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
);
