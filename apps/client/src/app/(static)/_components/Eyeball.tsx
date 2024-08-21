"use client";

import {
  useState,
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
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  const mousePosition = useMousePosition();
  const [angleInRadians, setAngleInRadians] = useState(0);

  return (
    <div
      ref={(node) => {
        if (node !== null && mousePosition !== null) {
          setAngleInRadians(
            calculateAngle(calculateElementCenter(node), mousePosition),
          );
        }
      }}
      className={cn("size-full", className)}
      {...props}
    >
      <div
        // Set `offset` to animate the eyeball along an ellipse half the size of
        // its parent based on the angle toward the mouse position. Using CSS
        // transform functions would be simpler, but has performance limitations
        // (and in my opinion, is less understandable).
        className="aspect-video w-1/2 rounded-1/2 bg-gray-900 [offset:ellipse(25%_25%)_calc(var(--turns)*100%)] dark:bg-gray-800"
        style={
          {
            "--turns": (angleInRadians / RADIANS_IN_TURN).toFixed(2), // Convert radians to turns (2π radians = 1 turn)
          } as CSSProperties
        }
      />
    </div>
  );
};
