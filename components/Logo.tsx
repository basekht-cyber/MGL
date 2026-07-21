import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.svg"
      alt="Meta Growth Labs"
      width={844}
      height={362}
      priority
      className={`h-10 w-auto ${className}`}
    />
  );
}
