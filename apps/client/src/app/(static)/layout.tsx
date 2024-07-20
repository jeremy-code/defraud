import type { ReactNode } from "react";

import { Footer, Navbar } from "@/components/layout";

const StaticLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar className="border-b-0" />
      {children}
      <Footer className="border-white/20 bg-background/20 backdrop-blur-[2px]" />
    </>
  );
};

export default StaticLayout;
