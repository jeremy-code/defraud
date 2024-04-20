import type { ComponentProps } from "react";
import { cn } from "@defraud/ui/utils";

export const Footer = ({ className, ...rest }: ComponentProps<"footer">) => {
  return (
    <footer className={cn("", className)} {...rest}>
      Made with ❤️ by Defraud
    </footer>
  );
};
