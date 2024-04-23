import type { ComponentProps } from "react";
import { cn } from "@defraud/ui/utils";

export const Footer = ({ className, ...rest }: ComponentProps<"footer">) => {
  return (
    <footer className={cn("border-t", className)} {...rest}>
      <div className="mx-auto flex max-w-screen-xl place-content-center p-4">
        <span>
          {"Made with ❤️ by "}
          <a
            className="text-primary font-medium underline underline-offset-4"
            href="https://jeremy.ng"
            target="_blank"
            rel="noreferrer"
          >
            Jeremy
          </a>
        </span>
      </div>
    </footer>
  );
};
