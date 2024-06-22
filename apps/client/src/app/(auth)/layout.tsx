import type { ReactNode } from "react";

import { Navbar } from "@/components/layout";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default AuthLayout;
