import type { ReactNode } from "react";

import { Footer, Navbar } from "@/components/layout";

const StaticLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default StaticLayout;
