"use client";

import type { ComponentProps } from "react";
import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import * as Switch from "@radix-ui/react-switch";
import { Moon, RefreshCcw, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@defraud/ui/utils";
import { useMounted } from "@/hooks/useMounted";

export type ThemeToggleProps = ComponentProps<typeof Switch.Root>;

export const ThemeToggle = (props: ThemeToggleProps) => {
  // Prevent hydration error and layout shift as theme must be resolved from
  // `localStorage`
  const mounted = useMounted();
  const { resolvedTheme, setTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  const [ThemeIcon, themeIconLabel] =
    mounted ?
      isLight ? [Sun, "Light Mode"]
      : [Moon, "Dark Mode"]
    : [RefreshCcw, "Loading"];

  // Styles taken from https://ui.shadcn.com/docs/components/switch
  return (
    <Switch.Root
      // light mode = checked, dark mode or not mounted = unchecked
      checked={mounted && isLight}
      onCheckedChange={(checked) => {
        setTheme(checked ? "light" : "dark");
      }}
      disabled={!mounted}
      className={cn(
        "inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        props.className,
      )}
      {...props}
    >
      <Switch.Thumb className="pointer-events-none flex size-5 place-content-center items-center justify-center rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0">
        <AccessibleIcon label={themeIconLabel}>
          <ThemeIcon className={cn("size-4", { "animate-spin": !mounted })} />
        </AccessibleIcon>
      </Switch.Thumb>
    </Switch.Root>
  );
};
