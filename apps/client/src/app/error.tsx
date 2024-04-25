"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@defraud/ui/components/button";

import { errorDark, errorLight } from "@/assets";
import { Footer, Navbar } from "@/components/layout";
import { ThemeImage } from "@/components/misc";

type ErrorProps = {
  error: Error & { digest: string };
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }
  }, [error]);

  return (
    <>
      <Navbar />
      <main className="container flex flex-col-reverse items-center justify-center gap-12 py-4 lg:flex-row">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">Id: {error.digest}</p>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            An Error Occurred
          </h1>
          <p className="mt-2 text-muted-foreground">
            Unfortunately, an error has occurred while trying to load the page.
          </p>

          <div className="mt-4 flex gap-2">
            <Button
              onClick={() => {
                reset();
              }}
            >
              Try Again
            </Button>

            <Button asChild variant="ghost">
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>

        <ThemeImage
          srcDark={errorDark}
          srcLight={errorLight}
          alt="An Error Occurred"
          sizes="(min-width: 640px) 448px, 320px"
          className="mx-auto max-w-xs sm:max-w-md"
        />
      </main>
      <Footer />
    </>
  );
};

export default Error;
