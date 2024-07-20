"use client";

import {
  useRef,
  type ComponentPropsWithoutRef,
  type CSSProperties,
} from "react";

import { cn } from "@defraud/ui/utils";
import { useMousePosition } from "@/hooks/useMousePosition";
import {
  calculateAngle,
  calculateElementCenter,
  RADIANS_IN_TURN,
} from "@/utils/math";

export const Eyeball = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<"div">) => {
  const ref = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();

  const angleInRadians =
    ref.current && mousePosition ?
      calculateAngle(calculateElementCenter(ref.current), mousePosition)
    : 0; // Default to 0 radians if ref or mousePosition is null

  return (
    <div ref={ref} className={cn("size-full", className)} {...rest}>
      <div
        // Using `offset-path` to animate the eyeball along an ellipse half the
        // size of its parent, based on the angle. Using transform properties
        // (e.g. `rotate()`) would be simpler, but has performance limitations
        // (and in my opinion, is less understandable).
        className="aspect-[2] w-1/2 rounded-[50%] bg-gray-900 [offset:ellipse(25%_25%)_calc(var(--turns)*100%)] dark:bg-gray-800"
        style={{ "--turns": angleInRadians / RADIANS_IN_TURN } as CSSProperties} // Convert radians to turns (2π radians = 1 turn)
      />
    </div>
  );
};
