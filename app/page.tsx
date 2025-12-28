import ScHighlightProvider from "@/components/providers/sc-highlight-provider";
import ScCards, { ScCardsSkeleton } from "@/components/sc-cards";
import { description, displayName } from "@/lib/constants";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="text-foreground relative flex min-h-svh w-full items-center justify-center overflow-hidden font-sans">
      <main className="relative flex w-full max-w-3xl flex-col items-center justify-center px-2 pt-8 pb-[calc(1rem+10vh)]">
        <div className="relative flex max-w-full flex-col items-center">
          {/* Avatar section */}
          <div className="relative flex w-full max-w-md flex-col items-center gap-0.5 px-4">
            <div className="flex w-full items-center justify-start gap-1.5">
              <Image
                className="w-6.5 rounded-full border"
                src="/avatar.png"
                alt="Avatar"
                width={486}
                height={486}
                sizes="26px"
              />
              <p className="min-w-0 shrink overflow-hidden font-mono text-lg font-extrabold tracking-tight overflow-ellipsis">
                {displayName}
              </p>
            </div>
            <p className="text-muted-foreground text w-full px-0.5 text-sm">{description}</p>
          </div>
          <Suspense fallback={<ScCardsSkeleton className="relative pt-4" />}>
            <ScHighlightProvider>
              <ScCards className="relative pt-4" />
            </ScHighlightProvider>
          </Suspense>
        </div>
      </main>
    </div>
  );
}
