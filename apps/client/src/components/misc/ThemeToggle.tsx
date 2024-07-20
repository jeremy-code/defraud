"use client";

import type { ComponentPropsWithRef } from "react";
import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import { Moon, RefreshCcw, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { SwitchRoot, SwitchThumb } from "@defraud/ui/components/switch";
import { cn } from "@defraud/ui/utils";
import { useIsMounted } from "@/hooks/useIsMounted";

export type ThemeToggleProps = ComponentPropsWithRef<typeof SwitchRoot>;

export const ThemeToggle = (props: ThemeToggleProps) => {
  // Prevent hydration error and layout shift as theme must be resolved from
  // `localStorage`
  const isMounted = useIsMounted();
  const { setTheme, resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  const [ThemeIcon, themeIconLabel] =
    isMounted ?
      isLight ? [Sun, "Light Mode"]
      : [Moon, "Dark Mode"]
    : [RefreshCcw, "Loading"];

  return (
    <SwitchRoot
      // Light mode = checked, Dark mode or not mounted = unchecked
      checked={isMounted && isLight}
      onCheckedChange={(checked) => {
        setTheme(checked ? "light" : "dark");
      }}
      disabled={!isMounted}
      {...props}
    >
      <SwitchThumb className="grid place-content-center">
        <AccessibleIcon label={themeIconLabel}>
          <ThemeIcon className={cn("size-4", { "animate-spin": !isMounted })} />
        </AccessibleIcon>
      </SwitchThumb>
    </SwitchRoot>
  );
};
