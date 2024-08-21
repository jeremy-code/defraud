"use client";

import type { ComponentPropsWithRef } from "react";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@defraud/ui/components/toast";
import { useToastStore } from "@/hooks/useToast";

export const Toaster = (props: ComponentPropsWithRef<typeof ToastProvider>) => {
  const toasts = useToastStore((state) => state.toasts);

  return (
    <ToastProvider {...props}>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className="flex flex-col gap-1">
            {!!title && <ToastTitle>{title}</ToastTitle>}
            {!!description && (
              <ToastDescription>{description}</ToastDescription>
            )}
          </div>
          {action}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
};
