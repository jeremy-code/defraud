import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { Button } from "@defraud/ui/components/button";
import { notFoundGraphic } from "@/assets";
import { Footer, Navbar } from "@/components/layout";
import { BackButton, ThemeImage } from "@/components/misc";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <main className="container flex flex-col-reverse items-center justify-center gap-12 py-4 lg:flex-row">
        <div className="flex flex-col gap-2">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            404 Page Not Found
          </h1>
          <p className="mt-2 text-muted-foreground">
            Could not find requested resource. Please check the URL and try
            again.
          </p>

          <div className="mt-4 flex gap-2">
            <BackButton>
              <ChevronLeft className="mr-2 size-4" />
              Go Back
            </BackButton>

            <Button asChild variant="ghost">
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>

        <ThemeImage
          src={notFoundGraphic}
          alt="404 Page Not Found"
          sizes="(min-width: 1040px) 448px, 320px"
          // since image is tall, shrink down on smaller screens
          className="mx-auto max-w-xs lg:max-w-md"
        />
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
