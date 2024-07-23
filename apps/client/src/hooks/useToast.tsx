"use client";

import type { ReactElement, ReactNode } from "react";
import { create } from "zustand";

import { ToastAction, type ToastProps } from "@defraud/ui/components/toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1_000_000;

type ToasterToast = ToastProps & {
  id: string;
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactElement<typeof ToastAction>;
};

type ToastState = {
  toasts: ToasterToast[];
  toastTimeouts: Map<string, NodeJS.Timeout>;
  addToast: (toast: ToasterToast) => void;
  updateToast: (
    toast: Partial<ToasterToast> & Pick<ToasterToast, "id">,
  ) => void;
  dismissToast: (toastId?: ToasterToast["id"]) => void;
  removeToast: (toastId?: ToasterToast["id"]) => void;
};

export const useToastStore = create<ToastState>((set, get) => ({
  toasts: [],
  toastTimeouts: new Map<string, ReturnType<typeof setTimeout>>(),
  addToast: (toast) =>
    set((state) => ({
      ...state,
      toasts: [toast, ...state.toasts].slice(0, TOAST_LIMIT),
    })),
  updateToast: (toast) =>
    set((state) => ({
      ...state,
      toasts: state.toasts.map((t) =>
        t.id === toast.id ? { ...t, ...toast } : t,
      ),
    })),
  dismissToast: (toastId) => {
    const { toasts, toastTimeouts, removeToast } = get();
    const queue = [...(toastId ? [toastId] : toasts.map((t) => t.id))];

    queue.forEach((id) => {
      if (toastTimeouts.has(id)) {
        return;
      }

      const timeout = setTimeout(() => {
        toastTimeouts.delete(id);
        removeToast(id);
      }, TOAST_REMOVE_DELAY);

      toastTimeouts.set(id, timeout);
    });

    set({
      toasts: toasts.map((t) =>
        t.id === toastId || toastId === undefined ? { ...t, open: false } : t,
      ),
    });
  },
  removeToast: (toastId) =>
    set((state) =>
      toastId === undefined ?
        { ...state, toasts: [] }
      : { ...state, toasts: state.toasts.filter((t) => t.id !== toastId) },
    ),
}));

export function toast({ ...props }: Omit<ToasterToast, "id">) {
  const id = crypto.randomUUID();
  const { addToast, updateToast, dismissToast } = useToastStore.getState();

  const update = (props: ToasterToast) => updateToast({ ...props, id });
  const dismiss = () => dismissToast(id);

  addToast({
    ...props,
    id,
    open: true,
    onOpenChange: (open) => {
      if (!open) {
        dismiss();
      }
    },
  });

  return { id, dismiss, update };
}
