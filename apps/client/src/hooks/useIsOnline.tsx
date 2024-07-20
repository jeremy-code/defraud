import { useSyncExternalStore } from "react";

const subscribe = (onStoreChange: () => void) => {
  window.addEventListener("online", onStoreChange);
  window.addEventListener("offline", onStoreChange);

  return () => {
    window.removeEventListener("online", onStoreChange);
    window.removeEventListener("offline", onStoreChange);
  };
};

const getSnapshot = () => navigator.onLine;

/**
 * Returns whether the client is online (i.e. connected to the Internet) or
 * offline based on `online` and `offline` {@link Window} events.
 */
export const useIsOnline = () => {
  return useSyncExternalStore(subscribe, getSnapshot);
};
