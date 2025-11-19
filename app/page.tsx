import ScCard from "@/components/sc-card";
import { description, displayName, scLinks } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background text-foreground flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-2 pt-8 pb-[calc(2rem+10vh)]">
        {/* Avatar section */}
        <div className="flex w-full flex-col items-center gap-1">
          <div className="flex w-full items-center justify-center gap-2">
            <Image
              className="w-8 rounded-full border"
              src="/avatar.png"
              alt="Avatar"
              width={486}
              height={486}
              sizes="32px"
            />
            <p className="min-w-0 shrink overflow-hidden text-lg font-bold overflow-ellipsis">
              {displayName}
            </p>
          </div>
          <p className="text-muted-foreground w-full text-center text-sm">{description}</p>
        </div>
        {/* Links */}
        <div className="flex w-full flex-col items-center pt-5">
          {scLinks.map((data) => (
            <ScCard data={data} key={data.href} />
          ))}
        </div>
      </main>
    </div>
  );
}
