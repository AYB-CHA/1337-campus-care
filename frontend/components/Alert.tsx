export default function Alert({
  error,
  variant = "danger",
}: {
  error: string;
  variant?: "danger" | "success";
}) {
  let variants = {
    danger: "border-red-500 bg-red-50 text-red-500",
    success: "border-green-500 bg-green-50 text-green-500",
  };
  return (
    <div className={`text-sm border-l-2 rounded p-4 ${variants[variant]}`}>
      {error.charAt(0).toUpperCase() + error.slice(1)}
    </div>
  );
}
