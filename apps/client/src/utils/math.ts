/**
 * A point in a 2D Cartesian coordinate system with `x` and `y` coordinates.
 */
export interface Point {
  /** The x-coordinate of a point. */
  x: number;
  /** The y-coordinate of a point. */
  y: number;
}

/**
 * Returns the angle (in radians) in [-π, π] between two {@link Point} objects.
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
 * Returns the center of an `Element` relative to the viewport as a
 * {@link Point} with `x` and `y` coordinates given by
 * {@link Element.getBoundingClientRect}.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect}
 */
export const calculateElementCenter = (element: Element): Point => {
  const { bottom, left, right, top } = element.getBoundingClientRect();

  return {
    x: (left + right) / 2,
    y: (top + bottom) / 2,
  };
};

/**
 * The number of radians in a turn. 1 turn = 2π (τ) radians.
 * @see {@link https://en.wikipedia.org/wiki/Turn_(angle)#Unit_conversion} Turn (angle) - Wikipedia
 */
export const RADIANS_IN_TURN = 2 * Math.PI;
