import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { ToastOption, ToastProps } from "../types/toast";
import { nanoid } from "nanoid";
import Portal from "@/components/Portal";
import { AnimatePresence, LazyMotion } from "framer-motion";
import { Toast } from "@/components/Toast";

interface ToastState {
  toasts: ToastProps[];
  setToasts: Dispatch<SetStateAction<ToastProps[]>>;
}
const initialState: ToastState = {
  toasts: [],
  setToasts: () => {},
};

const ToastContext = createContext<ToastState>(initialState);

const DEFAULT_MESSAGE = "Toast는 맛있어";
const DEFAULT_DURATION = 5000;
const loadFeatures = () =>
  import("@/utils/motionFeatures").then((res) => res.default.domMax);

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toasts, setToasts] = useState(initialState.toasts);

  return (
    <ToastContext.Provider value={{ toasts, setToasts }}>
      {children}
      <Portal selector="toast-portal">
        <div className="w-full fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none flex flex-col-reverse items-center gap-5">
          <LazyMotion features={loadFeatures}>
            <AnimatePresence initial={false}>
              {toasts.map((toast) => (
                <Toast key={`toast-${toast.id}`} {...toast} />
              ))}
            </AnimatePresence>
          </LazyMotion>
        </div>
      </Portal>
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("[ERROR] useToast must be called within ToastProvider.");
  }

  const { setToasts } = context;

  const addToast = (options: Partial<ToastOption>) => {
    setToasts((prev) => {
      const newToast: ToastProps = {
        id: nanoid(),
        message: DEFAULT_MESSAGE,
        duration: DEFAULT_DURATION,
        variant: "default",
        ...options,
      };
      return [...prev, newToast];
    });
  };

  const removeToast = (targetId: string) => {
    setToasts((prev) => {
      return prev.filter((toast) => toast.id !== targetId);
    });
  };

  return {
    addToast,
    removeToast,
  };
};
