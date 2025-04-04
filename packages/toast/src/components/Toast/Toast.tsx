import {
  ErrorIcon,
  InfoIcon,
  SuccessIcon,
  IconProps,
} from "@/components/icons";
import { ToastType } from "@/types";
import { useToast } from "@/provider/ToastProvider";
import useTimeout from "@/hooks/useTimeout";

export interface ToastOption {
  message: string;
  type: ToastType;
}

export interface ToastProps extends ToastOption {
  id: string;
}

export const Toast: React.FC<ToastProps> = ({ id, message, type }) => {
  const { removeToast } = useToast();

  useTimeout(() => {
    removeToast(id);
  }, 3000);

  const renderIcon: Record<ToastType, (options: IconProps) => JSX.Element> = {
    success: (options) => <SuccessIcon {...options} />,
    error: (options) => <ErrorIcon {...options} />,
    info: (options) => <InfoIcon {...options} />,
  };

  return (
    <div id={`toast-${id}`} className={`text-blue-600 bg-red-500`}>
      {renderIcon[type]({ size: 20 })}
      {message}
    </div>
  );
};
