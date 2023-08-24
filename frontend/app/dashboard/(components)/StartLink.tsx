import { PropsWithChildren } from "react";

export function StartLink(props: PropsWithChildren & { title: string }) {
  return (
    <div className="p-8 border rounded-lg bg-white flex flex-col justify-center items-center text-gray-900 cursor-pointer">
      <div className="mb-6">{props.children}</div>
      <span>{props.title}</span>
    </div>
  );
}
