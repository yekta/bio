import ScCards from "@/components/sc-cards";
import { description, displayName } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-foreground relative flex min-h-svh w-full items-center justify-center overflow-hidden font-sans">
      <main className="relative flex w-full max-w-3xl flex-col items-center justify-center px-2 pt-8 pb-[calc(1rem+10vh)]">
        <div className="relative flex max-w-full flex-col items-center">
          <div className="relative w-full flex-col items-center gap-1.5">
            <div className="flex w-full items-center justify-center gap-1.5">
              <Image
                className="bg-border w-7 rounded-full border"
                src="/avatar.png"
                alt="Avatar"
                width={486}
                height={486}
                sizes="28px"
              />
              <p className="min-w-0 shrink overflow-hidden font-mono text-lg font-extrabold tracking-tight overflow-ellipsis">
                {displayName}
              </p>
            </div>
            <p className="text-muted-foreground text w-full text-center text-sm">{description}</p>
          </div>
          <ScCards className="relative pt-5" />
        </div>
      </main>
    </div>
  );
}
