"use client";

import { cn } from "@defraud/ui/utils";
import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import * as Switch from "@radix-ui/react-switch";
import { Moon, RefreshCcw, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { useHydrated } from "@/hooks/useHydrated";

export type ThemeToggleProps = Switch.SwitchProps &
  React.RefAttributes<HTMLButtonElement>;

export const ThemeToggle = (props: ThemeToggleProps) => {
  // Prevent hydration error and layout shift.
  // Necessary as SSR doesn't have access to localStorage
  const hydrated = useHydrated();
  const { resolvedTheme, setTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  const ThemeIcon =
    hydrated ?
      isLight ? Sun
      : Moon
    : RefreshCcw;

  // Styles taken from https://ui.shadcn.com/docs/components/switch
  return (
    <Switch.Root
      checked={hydrated && isLight}
      onCheckedChange={(checked) => {
        setTheme(checked ? "light" : "dark");
      }}
      disabled={!hydrated}
      className={cn(
        "inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        props.className,
      )}
      {...props}
    >
      <Switch.Thumb className="pointer-events-none flex size-5 place-content-center items-center justify-center rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0">
        <AccessibleIcon
          label={
            hydrated ?
              isLight ?
                "Light Mode"
              : "Dark Mode"
            : "Loading"
          }
        >
          <ThemeIcon className={cn("size-4", { "animate-spin": !hydrated })} />
        </AccessibleIcon>
      </Switch.Thumb>
    </Switch.Root>
  );
};
