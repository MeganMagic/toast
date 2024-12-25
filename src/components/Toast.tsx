import { useState } from "react";
import { m } from "framer-motion";

import useTimeout from "@/hooks/useTimeout";
import { ToastProps } from "@/types/toast";
import { useToastContext } from "@/providers/ToastProvider";

import { ToastUI } from "./ToastUI";

const toastVariants = {
  enter: {
    opacity: 1,
    top: 0,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    top: -20,
    scale: 0.85,
    transition: {
      duration: 0.2,
    },
  },
};

export const Toast = ({ id, duration, ...props }: ToastProps) => {
  const [delay, setDelay] = useState<number | null>(duration);
  const { removeToast } = useToastContext();

  const onMouseEnter = () => setDelay(null);
  const onMouseLeave = () => setDelay(duration);

  useTimeout(() => {
    removeToast(id);
  }, delay);

  return (
    <m.div
      id={`toast-${id}`}
      className="relative"
      layout
      variants={toastVariants}
      initial="exit"
      animate="enter"
      exit="exit"
      onHoverStart={onMouseEnter}
      onHoverEnd={onMouseLeave}
    >
      <ToastUI {...props} />
    </m.div>
  );
};
