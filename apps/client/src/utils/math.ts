export interface Point {
  x: number;
  y: number;
}

/**
 * Returns the angle (in radians) in [-π, π] between two points.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2}
 * @see {@link https://en.wikipedia.org/wiki/Atan2}
 */
export const calculateAngle = (startPoint: Point, endPoint: Point) => {
  const deltaY = endPoint.y - startPoint.y;
  const deltaX = endPoint.x - startPoint.x;

  return Math.atan2(deltaY, deltaX);
};

/**
 * Returns the center of the `Element` given by `getBoundingClientRect()` as a
 * `Point`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Range/getBoundingClientRect}
 */
export const calculateElementCenter = (element: Element): Point => {
  const domRect = element.getBoundingClientRect();

  return {
    x: (domRect.left + domRect.right) / 2,
    y: (domRect.top + domRect.bottom) / 2,
  };
};

// https://en.wikipedia.org/wiki/Turn_(angle)#Unit_conversion
export const RADIANS_IN_TURN = 2 * Math.PI; // 1 turn = 2π radians
