import { TSc } from "@/lib/constants";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

type TProps = {
  data: TSc;
  isHighlighted: boolean;
};

export default function ScCard({ data: { label, handle, href, Icon }, isHighlighted }: TProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="group flex w-full items-center justify-start rounded-xl p-1"
      data-highlighted={isHighlighted ? true : undefined}
    >
      <div className="group-hover:bg-border group-active:bg-border relative flex w-full items-center gap-2 overflow-hidden rounded-lg px-3 py-3">
        <div className="group-data-highlighted:from-primary/30 from-border via-border to-border pointer-events-none absolute top-0 left-0 h-full w-full rounded-lg bg-linear-to-r via-20% p-px">
          <div className="group-hover:bg-border group-active:bg-border bg-background h-full w-full rounded-[calc(0.5rem-1px)]" />
        </div>
        <div className="from-primary/15 via-primary/5 to-primary/5 pointer-events-none absolute top-0 left-0 h-full w-full bg-linear-to-r via-40% opacity-0 group-data-highlighted:opacity-100" />
        <Icon className="relative size-6" />
        <p className="relative w-full overflow-hidden leading-tight font-bold tracking-tight">
          <span className="pr-[0.5ch]">{label}</span>
          <span className="text-muted-foreground bg-muted-foreground/12 rounded-sm px-1.25 py-0.75 font-mono text-xs font-semibold">
            @{handle}
          </span>
        </p>
        <ExternalLink className="relative size-4 shrink-0 -translate-x-1 -rotate-30 opacity-0 transition group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 group-active:translate-x-0 group-active:rotate-0 group-active:opacity-100" />
      </div>
    </Link>
  );
}
