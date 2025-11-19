import { TSc } from "@/lib/constants";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

type TProps = {
  data: TSc;
};

export default function ScCard({ data: { label, handle, href, Icon } }: TProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="group flex w-full max-w-lg items-center justify-start p-1"
    >
      <div className="group-hover:bg-border group-active:bg-border flex w-full items-center gap-2 overflow-hidden rounded-lg border px-3 py-3">
        <Icon className="size-6" />
        <p className="w-full overflow-hidden leading-tight font-bold">
          {label}{" "}
          <span className="text-muted-foreground font-mono text-sm font-semibold">
            <span className="text-muted-more-foreground font-normal">(</span>@{handle}
            <span className="text-muted-more-foreground font-normal">)</span>
          </span>
        </p>
        <ExternalLink className="size-4 shrink-0 -translate-x-1 -rotate-30 opacity-0 transition group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 group-active:translate-x-0 group-active:rotate-0 group-active:opacity-100" />
      </div>
    </Link>
  );
}
