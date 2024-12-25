export type ToastStyle = "default" | "error" | "success";

export interface ToastOption {
  message: string;
  duration: number;
  variant: ToastStyle;
}

export type ToastProps = {
  id: string;
} & ToastOption;
