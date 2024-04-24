import Link from "next/link";
import { Button } from "@defraud/ui/components/button";
import { ChevronLeft } from "lucide-react";

import { NotFound_Dark, NotFound_Light } from "@/assets";
import { Footer, Navbar } from "@/components/layout";
import { BackButton, ThemeImage } from "@/components/misc";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <main className="mx-auto grid w-full max-w-screen-xl place-content-center gap-4 p-4 md:grid-cols-2">
        <div className="flex h-full flex-col place-content-center gap-6">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            404 Page Not Found
          </h1>
          <p className="text-muted-foreground">
            Could not find requested resource. Check that you typed the address
            correctly or that the link you followed is correct.
          </p>

          <div className="mt-4 flex gap-2">
            <BackButton>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Go Back
            </BackButton>

            <Button asChild variant="ghost">
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>

        <div className="hidden md:block">
          {/* ensures height of image is never too large, adding scrollbars */}
          <div className="mx-auto max-w-md">
            <ThemeImage
              srcDark={NotFound_Dark}
              srcLight={NotFound_Light}
              alt="404 Page Not Found"
              sizes="(min-width: 1020px) 448px, calc(37.27vw + 75px)"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
