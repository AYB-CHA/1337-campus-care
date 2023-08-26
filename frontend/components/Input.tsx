type InputProps = {
  placeholder: string;
  type: string;
};
export default function Input({ placeholder, type }: InputProps) {
  const classes =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block p-2.5 w-full";
  if (type == "textarea") {
    return (
      <textarea
        className={classes}
        placeholder={placeholder}
        rows={6}
      ></textarea>
    );
  }
  return <input className={classes} type={type} placeholder={placeholder} />;
}
