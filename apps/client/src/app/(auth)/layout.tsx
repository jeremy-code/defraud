import type { ReactNode } from "react";
import type { Metadata } from "next";

import { Navbar } from "@/components/layout";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default AuthLayout;
