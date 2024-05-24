import "@defraud/ui/globals.css";

import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";

import { Analytics, AppProvider } from "@/components/misc";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export const metadata: Metadata = {
  metadataBase: new URL("https://defraud.io"),
  title: { default: "Defraud", template: "%s | Defraud" },
  description: "Defraud is a tool to help you identify and avoid scams",
  applicationName: "Defraud",
  authors: { name: "Jeremy Nguyen", url: "https://jeremy.ng" },
  keywords: ["defraud", "scams", "fraud", "security", "privacy"],
  creator: "Jeremy Nguyen",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    /**
     * @remarks
     * `suppressHydrationWarning` is necessary since html element is updated by
     * `next-themes` for dark mode — property only applies one level deep, so
     * hydration warnings won't be blocked on children elements
     */
    <html lang="en" className={lexend.className} suppressHydrationWarning>
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
