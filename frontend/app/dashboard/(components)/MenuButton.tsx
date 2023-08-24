import { PropsWithChildren } from "react";

export default function MenuButton(
  props: { active?: boolean; tooltip: string } & PropsWithChildren
) {
  return (
    <div
      className={`p-3 border border-gray-800 rounded-lg cursor-pointer text-white transition-colors relative group ${
        props.active
          ? "bg-primary-500"
          : "hover:bg-gray-100 hover:text-gray-900"
      }`}
    >
      {props.children}
      <div className="absolute top-1/2 z-50 -translate-y-1/2 left-14  scale-0 opacity-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 group-hover:opacity-100 cursor-default whitespace-nowrap">
        {props.tooltip}
      </div>
    </div>
  );
}
