// import React, { createContext, useContext, useState, useCallback } from "react";
// import { Toast } from "./components/Toast";

// interface ToastContextType {
//   showToast: (message: string, type?: "success" | "error" | "info") => void;
// }

// const ToastContext = createContext<ToastContextType | undefined>(undefined);

// export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [toasts, setToasts] = useState<
//     Array<{ id: number; message: string; type: "success" | "error" | "info" }>
//   >([]);

//   const showToast = useCallback(
//     (message: string, type: "success" | "error" | "info" = "info") => {
//       const id = Date.now();
//       setToasts((prev) => [...prev, { id, message, type }]);
//       setTimeout(() => {
//         setToasts((prev) => prev.filter((toast) => toast.id !== id));
//       }, 3000);
//     },
//     []
//   );

//   return (
//     <ToastContext.Provider value={{ showToast }}>
//       {children}
//       {toasts.map((toast) => (
//         <Toast
//           key={toast.id}
//           id={toast.id}
//           message={toast.message}
//           type={toast.type}
//         />
//       ))}
//     </ToastContext.Provider>
//   );
// };

// export const useToast = () => {
//   const context = useContext(ToastContext);
//   if (!context) {
//     throw new Error("useToast must be used within a ToastProvider");
//   }
//   return context;
// };
import "./index.css";

export { ToastProvider, useToast } from "./provider/ToastProvider";
