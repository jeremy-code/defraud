"use client";

import { cn } from "@defraud/ui/utils";
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

  const ThemeIcon = hydrated ? (isLight ? Sun : Moon) : RefreshCcw;

  // Styles taken from https://ui.shadcn.com/docs/components/switch
  return (
    <Switch.Root
      checked={hydrated && isLight}
      onCheckedChange={(checked) => {
        setTheme(checked ? "light" : "dark");
      }}
      disabled={!hydrated}
      className={cn(
        "focus-visible:ring-ring focus-visible:ring-offset-background data-[state=checked]:bg-primary data-[state=unchecked]:bg-input inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        props.className,
      )}
      {...props}
    >
      <Switch.Thumb className="bg-background pointer-events-none flex h-5 w-5 place-content-center items-center justify-center rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0">
        <ThemeIcon className={cn("h-4 w-4", { "animate-spin": !hydrated })} />
      </Switch.Thumb>
    </Switch.Root>
  );
};
