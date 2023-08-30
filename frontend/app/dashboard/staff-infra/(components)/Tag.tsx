"use client";
import { cn } from "@/lib/utils";
import { PropsWithChildren, useState } from "react";

type TagProps = PropsWithChildren & {
  variant: "success" | "warning" | "danger" | "risk" | "other";
  onChange?: (() => void) | null;
};

export default function Tag({ children, variant, onChange = null }: TagProps) {
  const [check, setCheck] = useState(false);
  let variants = {
    success: `border-b-green-500 ${check ? "bg-green-100" : ""}`,
    warning: `border-b-yellow-500 ${check ? "bg-yellow-100" : ""}`,
    danger: `border-b-red-500 ${check ? "bg-red-100" : ""}`,
    risk: `border-b-red-400 ${check ? "bg-red-100" : ""}`,
    other: `border-b-gray-500 ${check ? "bg-gray-200" : ""}`,
  };

  return (
    <button
      onClick={() => {
        setCheck((value) => !value);
        if (onChange) onChange();
      }}
      className={cn(
        "bg-white inline-flex items-center rounded border px-2.5 py-0.5 text-xs  font-semibold border-b-2",
        variants[variant]
      )}
    >
      {children}
    </button>
  );
}
