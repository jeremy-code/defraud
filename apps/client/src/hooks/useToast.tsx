"use client";

import type { ComponentProps, ReactElement, ReactNode } from "react";
import { create } from "zustand";

import { ToastAction, type ToastProps } from "@defraud/ui/components/toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1_000_000;

type ToasterToast = ToastProps & {
  id: string;
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactElement<ComponentProps<typeof ToastAction>, typeof ToastAction>;
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

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  toastTimeouts: new Map<string, ReturnType<typeof setTimeout>>(),
  addToast: (toast) =>
    set((state) => ({
      toasts: [toast, ...state.toasts].slice(0, TOAST_LIMIT),
    })),
  updateToast: (toast) =>
    set((state) => ({
      toasts: state.toasts.map((t) =>
        t.id === toast.id ? { ...t, ...toast } : t,
      ),
    })),
  dismissToast: (toastId) =>
    set((state) => {
      const toastIds = toastId ? [toastId] : state.toasts.map((t) => t.id);

      toastIds.forEach((id) => {
        if (!state.toastTimeouts.has(id)) {
          const timeout = setTimeout(() => {
            state.toastTimeouts.delete(id);
            state.removeToast(id);
          }, TOAST_REMOVE_DELAY);

          state.toastTimeouts.set(id, timeout);
        }
      });

      return {
        toasts: state.toasts.map((t) =>
          toastId === undefined || t.id === toastId ? { ...t, open: false } : t,
        ),
      };
    }),
  removeToast: (toastId) =>
    set((state) => ({
      toasts:
        toastId === undefined ?
          []
        : state.toasts.filter((t) => t.id !== toastId),
    })),
}));

export const toast = (props: Omit<ToasterToast, "id">) => {
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
};
