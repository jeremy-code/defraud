"use client";

import {
  useRef,
  type ComponentPropsWithoutRef,
  type CSSProperties,
} from "react";

import { cn } from "@defraud/ui/utils";
import { Footer, Navbar } from "@/components/layout";
import { useMousePosition } from "@/hooks/useMousePosition";
import {
  calculateAngle,
  calculateElementCenter,
  RADIANS_IN_TURN,
} from "@/utils/math";

const Eyeball = ({ className, ...rest }: ComponentPropsWithoutRef<"div">) => {
  const ref = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();

  const angleInRadians =
    ref.current && mousePosition ?
      calculateAngle(calculateElementCenter(ref.current), mousePosition)
    : 0; // Default to 0 radians if mousePosition or ref is null

  return (
    <div ref={ref} className={cn("absolute inset-0", className)} {...rest}>
      <div
        // Using `offset-path` to animate the eyeball along an ellipse half the
        // size of its parent, based on the angle. Using transform properties
        // (e.g. `rotate()`) would be simpler, but has performance limitations
        // (and in my opinion, less understandable).
        className="h-16 w-28 rounded-[50%] bg-gray-900 [offset:ellipse(25%_25%)] dark:bg-gray-800"
        style={
          {
            offsetDistance: "calc(var(--turns) * 100%)", // Convert turns to percentage (1 turn = 100%)
            "--turns": angleInRadians / RADIANS_IN_TURN, // Convert radians to turns (2π radians = 1 turn)
          } as CSSProperties
        }
      />
    </div>
  );
};

const Page = () => {
  return (
    <>
      <Navbar />
      <main className="container py-4">
        <div className="grid size-full grid-cols-2 content-center">
          <div />
          <div className="size-[30rem] animate-float rounded-full bg-gray-900 dark:bg-gray-700">
            <div className="relative left-4 top-1/2 h-80 w-64 -translate-y-1/2 rounded-[50%] bg-white">
              <Eyeball />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
