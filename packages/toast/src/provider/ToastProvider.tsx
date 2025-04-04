import { createContext, useState, PropsWithChildren, useContext } from "react";
import { Toast, ToastOption, ToastProps } from "../components/Toast";
import Portal from "@/components/Portal";

interface ToastContextType {
  toasts: ToastProps[];
  addToast: (options: Partial<ToastOption>) => void;
  removeToast: (targetId: string) => void;
}

const initialContextState: ToastContextType = {
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
};

export const ToastContext =
  createContext<ToastContextType>(initialContextState);

const DEFAULT_MESSAGE = "Toast is delicious!";
const createToast = (options: Partial<ToastOption>): ToastProps => {
  const id = String(Date.now());
  const { message, type } = options;

  return {
    id,
    message: message || DEFAULT_MESSAGE,
    type: type || "info",
  };
};

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (options: Partial<ToastOption>) => {
    const newToast = createToast(options);
    setToasts((prev) => [...prev, newToast]);
  };

  const removeToast = (targetId: string) => {
    setToasts((prev) => {
      return prev.filter((toast) => toast.id !== targetId);
    });
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children} 
      {toasts.length > 0 && (
        <Portal selector="toast-container">
          <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none flex flex-col-reverse items-center gap-5">
            {toasts.map((toast) => (
              <Toast key={`toast-${toast.id}`} {...toast} />
            ))}
          </div>
        </Portal>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
