export default function Alert({
  error,
  variant = "danger",
}: {
  error: string;
  variant?: "danger" | "success";
}) {
  let variantClasses = "";
  if (variant === "danger")
    variantClasses = "border-red-500  bg-red-50 text-red-500";
  if (variant === "success")
    variantClasses = "border-green-500  bg-green-50 text-green-500";
  return (
    <div className="text-sm border-l-2 rounded p-4">
      {error.charAt(0).toUpperCase() + error.slice(1)}
    </div>
  );
}
