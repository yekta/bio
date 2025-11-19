import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export default function MakerWorldIcon({ className, style }: ComponentProps<"svg">) {
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
        d="m21.49 3.915-4.598-1.8L16.6 2l-.295.115-4.306 1.684-4.305-1.684L7.4 2l-.293.115-4.599 1.8-.509.2v15.77l.51.2 4.598 1.8.293.115.293-.115L12 20.201l4.306 1.684.293.115.293-.115 4.599-1.8.509-.2V4.116zM16.6 2.86l4.599 1.801v6.507l-4.599-1.8zm-4.306 9.053 4.306-1.684 4.307 1.684.219.086-.22.086-4.306 1.684-4.306-1.684-.22-.086zM7.4 2.86 12 4.66v6.507l-4.599-1.8zm-4.306 9.053 4.306-1.684 4.307 1.684.219.086-.22.086-4.306 1.684-4.306-1.684-.22-.086zm-.291 7.425v-6.51l4.599 1.8v6.507zm9.198 0v-6.51l4.599 1.8v6.507z"
      />
    </svg>
  );
}
