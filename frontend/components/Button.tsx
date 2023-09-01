"use client";
import { LegacyRef, ReactNode, forwardRef } from "react";

type buttonProps = {
  children: ReactNode;
  loading?: boolean;
  icon?: ReactNode;
  variant?: "primary" | "flat";
  className: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default forwardRef(function (
  {
    children,
    loading = false,
    icon,
    variant,
    className,
    ...props
  }: buttonProps,
  forwardedRef: LegacyRef<HTMLButtonElement>
) {
  variant ??= "primary";
  let classes = "";

  if (variant == "primary")
    classes = "bg-primary text-white hover:bg-primary-600 border-primary-500";
  else if (variant == "flat")
    classes = "bg-white text-gray-900 hover:bg-gray-100 border-gray-200";
  if (variant)
    return (
      <button
        className={`inline-flex items-center justify-center rounded
    ring-offset-background transition-colors
    disabled:pointer-events-none disabled:opacity-50
    px-4 py-[9px] cursor-pointer text-sm select-none border focus:border-primary-200 focus:outline-none ${classes} relative ${className}`}
        ref={forwardedRef}
        {...props}
      >
        {children}
        {icon && <span className="ml-2"> {icon}</span>}
        {loading && (
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary-600 flex justify-center items-center">
            <div className="loading-spinner"></div>
          </div>
        )}
      </button>
    );
});
