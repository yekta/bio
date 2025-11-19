import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export default function XIcon({ className, style }: ComponentProps<"svg">) {
  return (
    <svg
      className={cn("size-5 shrink-0", className)}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m17.753 2.963-5.052 5.775-4.368-5.775h-6.33l7.562 9.885-7.166 8.19h3.068l5.53-6.32 4.834 6.32h6.17l-7.88-10.42 6.698-7.655zm-1.076 16.24L5.586 4.7h1.823l10.967 14.5z"
      />
    </svg>
  );
}
