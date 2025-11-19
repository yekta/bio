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
      className="group flex w-full max-w-lg items-center justify-start rounded-xl p-1"
    >
      <div className="group-hover:bg-border group-active:bg-border flex w-full items-center gap-2 overflow-hidden rounded-lg border px-3 py-3">
        <Icon className="size-6" />
        <p className="w-full overflow-hidden leading-tight font-bold">
          <span className="pr-[0.5ch]">{label}</span>
          <span className="text-muted-foreground bg-muted-foreground/12 rounded-sm px-1.25 py-0.75 font-mono text-sm font-semibold">
            @{handle}
          </span>
        </p>
        <ExternalLink className="size-4 shrink-0 -translate-x-1 -rotate-30 opacity-0 transition group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 group-active:translate-x-0 group-active:rotate-0 group-active:opacity-100" />
      </div>
    </Link>
  );
}
