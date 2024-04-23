import { Button } from "@defraud/ui/components/button";

import { Footer, Navbar } from "@/components/layout";

const Page = () => {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-screen-xl p-4">
        <Button>Test</Button>
        <div>Test test test</div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
