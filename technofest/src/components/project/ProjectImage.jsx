import { ImageOff } from "lucide-react";

export default function ProjectImage({
  src,
  alt,
  className = "",
}) {
  if (!src) {
    return (
      <div
        className={`flex items-center justify-center bg-beige-100 text-maroon-700 ${className}`}
      >
        <ImageOff size={32} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || "Project image"}
      className={`object-cover ${className}`}
    />
  );
}