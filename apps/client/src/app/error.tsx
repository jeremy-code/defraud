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
      <main className="mx-auto flex w-full max-w-screen-xl flex-col-reverse place-content-center items-center gap-12 p-4 lg:flex-row">
        <div className="flex flex-col place-content-center gap-2">
          <p className="text-muted-foreground text-sm ">Id: {error.digest}</p>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            An Error Occurred
          </h1>
          <p className="text-muted-foreground mt-2">
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

        <div>
          <ThemeImage
            srcDark={errorDark}
            srcLight={errorLight}
            alt="An Error Occurred"
            sizes="448px"
            className="mx-auto max-w-md"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Error;
