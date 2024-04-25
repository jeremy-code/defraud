import type { ComponentProps } from "react";
import { cn } from "@defraud/ui/utils";

export const Footer = ({ className, ...rest }: ComponentProps<"footer">) => {
  return (
    <footer className={cn("border-t", className)} {...rest}>
      <div className="container my-4 flex place-content-center">
        <span>
          {"Made with ❤️ by "}
          <a
            className="font-medium text-primary underline underline-offset-4"
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
