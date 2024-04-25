import type { ComponentProps } from "react";
import Link from "next/link";
import { Button } from "@defraud/ui/components/button";
import { cn } from "@defraud/ui/utils";

import { Logo, ThemeToggle } from "@/components/misc";

export const Navbar = ({ className, ...rest }: ComponentProps<"header">) => {
  return (
    <header className={cn("border-b", className)} {...rest}>
      <div className="container flex justify-between py-4">
        <Link className="flex items-center gap-2" href="/">
          {/* 24px = 1.5rem, aligns with line height */}
          <Logo width="1lh" />
          <span className="font-semibold">Defraud</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Button variant="secondary">
            <Link href="/login">Login</Link>
          </Button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};
