import type { ComponentProps } from "react";
import Link from "next/link";

import { Button } from "@defraud/ui/components/button";
import { cn } from "@defraud/ui/utils";
import { Logo, ThemeToggle } from "@/components/misc";

export const Navbar = ({ className, ...rest }: ComponentProps<"header">) => {
  return (
    <header className={cn("border-b", className)} {...rest}>
      <div className="container flex justify-between py-4">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          {/* sizes.6 = 1.5rem (24px) aligns with line height */}
          <Logo className="size-[1lh]" />
          Defraud
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/signin" className="max-sm:hidden">
            <Button variant="ghost">Sign in</Button>
          </Link>
          <Link href="/signup">
            <Button variant="secondary">Sign up</Button>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};
