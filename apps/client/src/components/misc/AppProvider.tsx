"use client";

import type { ReactNode } from "react";
import ky, { type KyInstance } from "ky";
import { ThemeProvider } from "next-themes";
import { SWRConfig, type State } from "swr";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SWRConfig
      value={{
        fetcher: (...params: Parameters<KyInstance>) => ky(...params).json(),
        // TODO: Switch from caching in-memory to caching in Redis.
        provider: () => new Map<string, State>(),
        suspense: true,
      }}
    >
      <ThemeProvider>{children}</ThemeProvider>
    </SWRConfig>
  );
};
