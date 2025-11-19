import ScCard from "@/components/sc-card";
import { description, displayName, scLinks } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground font-sans">
      <main className="flex min-h-screen px-2 w-full max-w-3xl flex-col justify-center items-center pt-8 pb-[calc(2rem+10vh)]">
        {/* Avatar section */}
        <div className="w-full flex flex-col items-center gap-1">
          <div className="w-full flex items-center justify-center gap-2">
            <Image
              className="w-8 rounded-full border"
              src="/avatar.png"
              alt="Avatar"
              width={486}
              height={486}
              sizes="32px"
            />
            <p className="font-bold text-lg shrink min-w-0 overflow-hidden overflow-ellipsis">
              {displayName}
            </p>
          </div>
          <p className="text-muted-foreground text-sm text-center w-full">
            {description}
          </p>
        </div>
        {/* Links */}
        <div className="w-full flex flex-col items-center pt-5">
          {scLinks.map((data) => (
            <ScCard data={data} key={data.href} />
          ))}
        </div>
      </main>
    </div>
  );
}
