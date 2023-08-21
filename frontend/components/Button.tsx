import { ReactNode } from "react";

type buttonProps = {
  children: ReactNode;
};

export default function Button({ children }: buttonProps) {
  return (
    <button
      className="inline-flex items-center justify-center rounded-lg
    text ring-offset-background transition-colors
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
    disabled:pointer-events-none disabled:opacity-50
    bg-primary text-white
    hover:bg-primary-600
    px-6 py-3 cursor-pointer"
    >
      {children}
    </button>
  );
}
