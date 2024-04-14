import "./globals.css";

import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import { Analytics, AppProvider } from "#components/misc/index.ts";

const cabin = Cabin({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://defraud.io"),
  title: { default: "defraud", template: "%s | defraud" },
  description: "Defraud is a tool to help you identify and avoid scams",
  applicationName: "defraud",
  authors: { name: "Jeremy Nguyen", url: "https://jeremy.ng" },
  keywords: ["defraud", "scams", "fraud", "security", "privacy"],
  creator: "Jeremy Nguyen",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    /**
     * @remarks
     * `suppressHydrationWarning` is necessary since html element is updated by
     * next-themes for dark mode -- property only applies one level deep, so
     * hydration warnings won't be blocked on children elements
     */
    <html lang="en" className={cabin.className} suppressHydrationWarning>
      <body>
        <AppProvider>
          {children}
          <Analytics />
        </AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
