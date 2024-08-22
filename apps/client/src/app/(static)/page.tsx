"use client";

import Link from "next/link";

import { Button } from "@defraud/ui/components";
import { Eyeball } from "./_components/Eyeball";

const Page = () => {
  return (
    <>
      <svg
        aria-hidden
        className="absolute -z-infinity size-full from-white stroke-foreground/10 [mask:radial-gradient(100%_100%_at_top_right,_var(--tw-gradient-stops))]"
      >
        <defs>
          <pattern
            id="gridPattern"
            width={200}
            height={200}
            x="50%"
            patternUnits="userSpaceOnUse"
          >
            <path d="M0.5 200V0.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          height="100%"
          width="100%"
          strokeWidth={0}
          fill="url(#gridPattern)"
        />
      </svg>

      <main className="container grid place-items-center gap-4 py-4 max-sm:grid-rows-[3fr_1fr] sm:grid-cols-2">
        <div className="flex flex-col justify-center gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="mb-2 text-5xl font-extrabold tracking-tight md:text-6xl">
              {"Protect "}
              <mark className="bg-gradient-to-tr from-primary-400 to-primary-600 bg-clip-text text-transparent">
                yourself
              </mark>
              {" from scams!"}
            </h1>
            <p className="max-w-[40ch] text-muted-foreground md:text-lg">
              {"Identify and stay away from those "}
              <em>pesky</em>
              {" scammers on the interwebs."}
            </p>
          </div>

          <div className="flex gap-2">
            <Link href="/signup">
              <Button>Sign up</Button>
            </Link>
            <Link href="/signin">
              <Button variant="ghost">Sign in</Button>
            </Link>
          </div>
        </div>

        {/* 0 -> sm: bottom right, positioned absolute, sm -> 2xl: second column, grid */}
        <div
          aria-hidden
          className="-z-10 w-full max-w-lg max-sm:fixed max-sm:top-full max-sm:-translate-y-3/4 max-sm:translate-x-1/3"
        >
          <div className="flex aspect-square animate-float items-center rounded-full bg-gray-900 dark:bg-gray-700">
            <div className="relative left-4 aspect-[4/5] w-1/2 rounded-1/2 bg-white">
              <Eyeball />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
