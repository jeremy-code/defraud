import type { ComponentProps } from "react";
import { cn } from "@defraud/ui/utils";

import { ThemeToggle } from "@/components/misc";

export const Navbar = ({ className, ...rest }: ComponentProps<"header">) => {
  return (
    <header className={cn("", className)} {...rest}>
      <ThemeToggle />
    </header>
  );
};
