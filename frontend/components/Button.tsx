import { ReactNode } from "react";

type buttonProps = {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "flat";
};

export default function Button({ children, icon, variant }: buttonProps) {
  variant ??= "primary";
  let classes = "";

  if (variant == "primary")
    classes = "bg-primary text-white hover:bg-primary-600";
  else if (variant == "flat")
    classes = "bg-white text-gray-900 hover:bg-gay-100 border border+gray-200";
  if (variant)
    return (
      <button
        className={`inline-flex items-center justify-center rounded
     ring-offset-background transition-colors
    focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50
    px-4 py-2.5 cursor-pointer text-sm select-none ${classes}`}
      >
        {children}
        {icon ? (
          <>
            <span className="ml-2"> {icon}</span>
          </>
        ) : (
          ""
        )}
      </button>
    );
}
