import { TextareaHTMLAttributes } from "react";

type InputProps = {
  placeholder: string;
  type: string;
} & React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export default function Input({ placeholder, type, ...props }: InputProps) {
  const classes =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block p-2.5 w-full disabled:text-gray-500 disabled:bg-gray-200";
  if (type == "textarea") {
    return (
      <textarea
        {...props}
        className={classes}
        placeholder={placeholder}
        rows={6}
      ></textarea>
    );
  }
  return (
    <input
      className={classes}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  );
}
