"use client";
import { PropsWithChildren, useState } from "react";

type TagProps = PropsWithChildren & {
  variant: "success" | "warning" | "danger" | "risk" | "other";
  onChange?: (() => void) | null;
};

export default function Tag({ children, variant, onChange = null }: TagProps) {
  const [check, setCheck] = useState(false);
  let variantClass = "";
  if (variant == "success")
    variantClass = "border-b-green-500 " + (check ? "bg-green-100" : "");
  if (variant == "warning")
    variantClass = "border-b-yellow-500 " + (check ? "bg-yellow-100" : "");
  if (variant == "danger")
    variantClass = "border-b-red-500 " + (check ? "bg-red-100" : "");
  if (variant == "risk")
    variantClass = "border-b-red-400 " + (check ? "bg-red-100" : "");
  if (variant == "other")
    variantClass = "border-b-gray-500 " + (check ? "bg-gray-200" : "");
  return (
    <button
      onClick={() => {
        setCheck((value) => !value);
        if (onChange) onChange();
      }}
      className={`inline-flex items-center rounded border px-2.5 py-0.5 text-xs bg-white font-semibold border-b-2 ${variantClass}`}
    >
      {children}
    </button>
  );
}
