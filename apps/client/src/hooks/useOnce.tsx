"use client";

import { useRef } from "react";

/**
 * Using an (inferred) type predicate avoids error where TypeScript claims
 * `initialValue` is not callable since `T & Function` has no call signatures.
 *
 * @see {@link https://github.com/microsoft/TypeScript/issues/37663}
 */
const isFunction = (value: unknown) => typeof value === "function";

const UNINITIALIZED = Symbol("UNINITIALIZED");

/**
 * `useOnce` returns the `.current` property of a ref object that is initialized
 * only once with `initialValue` parameter (either a constant or a lazy
 * initializer) and then never updated.
 */
export const useOnce = <T,>(initialValue: T | (() => T)) => {
  const ref = useRef<T | typeof UNINITIALIZED>(UNINITIALIZED);

  if (ref.current === UNINITIALIZED) {
    ref.current = isFunction(initialValue) ? initialValue() : initialValue;
  }

  return ref.current;
};
