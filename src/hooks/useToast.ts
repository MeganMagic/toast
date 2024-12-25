import { useCallback } from "react";

import { useToastContext } from "@/providers/ToastProvider";
import { ToastOption } from "@/types/toast";

export const useToast = (defaultOption?: Partial<ToastOption>) => {
  const { addToast } = useToastContext();

  return useCallback(
    (option: Partial<ToastOption>) => {
      const mergedOption = { ...defaultOption, ...option };
      addToast(mergedOption);
    },
    [addToast, defaultOption]
  );
};
