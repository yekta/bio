import { TSc } from "@/lib/constants";
import Link from "next/link";

type TProps = {
  data: TSc;
};

export default function ScCard({ data: { label, href, Icon } }: TProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="w-full max-w-lg flex items-center justify-start p-1 group"
    >
      <div className="w-full overflow-hidden pl-3 pr-5 py-3 flex gap-2 border rounded-lg group-hover:bg-border group-active:bg-border">
        <Icon className="size-6" />
        <p className="w-full font-bold overflow-hidden">{label}</p>
      </div>
    </Link>
  );
}
