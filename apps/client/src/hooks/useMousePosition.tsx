import { useEffect, useState } from "react";

import type { Point } from "@/utils/math";

/**
 * Returns the current mouse position relative to the viewport, either as a
 * `Point` with `x` and `y` properties or `null` if no `mousemove` event has
 * occurred (such as on a touchscreen device).
 */
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<Point | null>(null);

  useEffect(() => {
    // TODO: Wrap in `useEffectEvent`. Currently, it throws error `TypeError:
    // react__WEBPACK_IMPORTED_MODULE_1__.experimental_useEffectEvent is not a
    // function`
    const onMouseMove = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return mousePosition;
};
