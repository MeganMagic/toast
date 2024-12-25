import { useMemo } from "react";
import { CheckCircle, Info, XCircle } from "react-feather";

import type { ToastStyle } from "../types/toast";
import classNames from "classnames";

type ToastUIProps = {
  message: string;
  variant?: ToastStyle;
};

export const ToastUI = ({ message, variant = "default" }: ToastUIProps) => {
  const icon = useMemo(() => {
    switch (variant) {
      case "default":
        return <Info className="text-slate-500" size="20" />;
      case "error":
        return <XCircle className="text-red-500" size="20" />;
      case "success":
        return <CheckCircle className="text-blue-500" size="20" />;
    }
  }, [variant]);

  return (
    <div
      className={classNames(
        variant === "default" && "bg-slate-100",
        variant === "error" && "bg-red-50",
        variant === "success" && "bg-blue-50",
        "w-fit px-5 py-3 rounded-lg shadow-md flex gap-2 items-center max-w-72 sm:max-w-none"
      )}
    >
      <div className="toast-icon">{icon}</div>
      <p className="text-slate-700 font-medium text-base">{message}</p>
    </div>
  );
};
