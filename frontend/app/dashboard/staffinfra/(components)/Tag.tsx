import { PropsWithChildren } from "react";

type TagProps = PropsWithChildren & {
  variant: "success" | "warning" | "danger" | "risk" | "other";
};

export default function Tag({ children, variant }: TagProps) {
  let variantClass = "";
  if (variant == "success") variantClass = "border-b-green-500";
  if (variant == "warning") variantClass = "border-b-yellow-500";
  if (variant == "danger") variantClass = "border-b-red-500";
  if (variant == "risk") variantClass = "border-b-red-400";
  if (variant == "other") variantClass = "border-b-gray-500";
  return (
    <button
      className={`inline-flex items-center rounded border px-2.5 py-0.5 text-xs font-semibold border-b-2 ${variantClass}`}
    >
      {children}
    </button>
  );
}
