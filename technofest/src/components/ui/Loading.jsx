import Spinner from "./Spinner";

export default function Loading({
  message = "Loading...",
  fullPage = false,
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 ${
        fullPage ? "min-h-[60vh]" : "py-12"
      }`}
    >
      <Spinner size="lg" />

      <p className="text-sm text-gray-500">{message}</p>
    </div>
  );
}