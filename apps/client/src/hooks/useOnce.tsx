"use client";

import { useRef } from "react";

const UNINITIALIZED = Symbol("UNINITIALIZED");

/**
 * `useOnce` returns the `.current` property of a ref object that is only
 * initialized once with `initialValue` (either a constant or a lazy
 * initializer) and then never updated.
 */
export const useOnce = <T,>(initialValue: T | (() => T)) => {
  const ref = useRef<T | typeof UNINITIALIZED>(UNINITIALIZED);

  if (ref.current === UNINITIALIZED) {
    ref.current = typeof initialValue === "function" ?
        /**
         * Casting as () => T as otherwise, TypeScript errors with "type 'T &
         * Function' has no call signatures."
         * @see {@link https://github.com/microsoft/TypeScript/issues/37663}
         */
        (initialValue as () => T)()
      : initialValue;
  }

  return ref.current;
};
