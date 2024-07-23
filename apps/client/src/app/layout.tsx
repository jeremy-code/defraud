import "@defraud/ui/globals.css";

import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Lexend } from "next/font/google";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Analytics, AppProvider, Toaster } from "@/components/misc";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export const metadata: Metadata = {
  metadataBase: new URL("https://defraud.io"),
  title: { default: "Defraud", template: "%s | Defraud" },
  description: "Defraud is a tool to help you identify and avoid scams",
  applicationName: "Defraud",
  authors: { name: "Jeremy Nguyen", url: "https://jeremy.ng" },
  keywords: ["defraud", "scams", "fraud", "security", "privacy"],
  referrer: "origin-when-cross-origin",
  creator: "Jeremy Nguyen",
  publisher: "Defraud",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "hsl(20 14.3% 4.1%)" },
  ],
  colorScheme: "dark light",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    /**
     * @remarks
     * `suppressHydrationWarning` is necessary since `<html>` element is updated by
     * `next-themes` for dark mode — property only applies one level deep, so
     * hydration warnings won't be blocked on children elements
     */
    <html lang="en" className={lexend.variable} suppressHydrationWarning>
      <body>
        <AppProvider>
          {children}
          <Analytics />
          <Toaster />
          <ReactQueryDevtools />
        </AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
