import { useEffect } from "react";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

import type { Point } from "@/utils/math";

type MouseEventState = {
  mouseEvent: MouseEvent | null;
  setMouseEvent: (mouseEvent: MouseEvent) => void;
};

const useMouseEventStore = create<MouseEventState>((set) => ({
  mouseEvent: null,
  setMouseEvent: (mouseEvent) => set(() => ({ mouseEvent })),
}));

/**
 * Returns the current mouse position relative to the viewport, either as a
 * `Point` with `x` and `y` properties or `null` if no `mousemove` event has
 * occurred (such as on a touchscreen device).
 */
export const useMousePosition = () => {
  const mousePosition = useMouseEventStore<Point | null>(
    useShallow(
      ({ mouseEvent }) =>
        mouseEvent && { x: mouseEvent.clientX, y: mouseEvent.clientY },
    ),
  );

  useEffect(() => {
    // TODO: Wrap in `useEffectEvent` when it is no longer experimental.
    const onMouseMove = (ev: MouseEvent) => {
      useMouseEventStore.getState().setMouseEvent(ev);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return mousePosition;
};
