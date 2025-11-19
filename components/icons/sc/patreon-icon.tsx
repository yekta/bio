import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export default function PatreonIcon({ className, style }: ComponentProps<"svg">) {
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
        d="M21 8.066c-.004-2.517-1.964-4.58-4.264-5.325-2.857-.924-6.624-.79-9.351.496-3.306 1.56-4.344 4.977-4.383 8.385-.032 2.802.248 10.182 4.41 10.235 3.093.038 3.554-3.946 4.984-5.866 1.019-1.365 2.33-1.751 3.944-2.15 2.773-.687 4.664-2.876 4.66-5.775"
      />
    </svg>
  );
}
