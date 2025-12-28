"use client";

import ScIcon from "@/components/icons/sc/sc-icon";
import { Button } from "@/components/ui/button";
import { scLinks, TScEnum } from "@/lib/constants";
import { LoaderIcon } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

type TProps = {
  platform: TScEnum;
};

export default function PlatformPage({ platform }: TProps) {
  const platformObject = scLinks.find((link) => link.id === platform);

  useEffect(() => {
    if (platformObject) {
      window.location.href = platformObject.href;
    }
  }, [platformObject]);

  if (!platformObject) {
    return (
      <div className="my-auto flex w-full flex-col items-center gap-2 pb-[4vh]">
        <h1 className="text-muted-foreground w-full text-center text-xl leading-relaxed font-medium">
          Can't Redirect
          <br />
          <span className="text-foreground text-3xl font-bold">Unknown Platform</span>
        </h1>
        <Button asChild className="mt-2 font-bold">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="my-auto flex w-full flex-col items-center gap-2 pb-[4vh]">
      <LoaderIcon className="text-muted-foreground size-8 animate-spin" />
      <h1 className="text-muted-foreground w-full text-center text-xl leading-relaxed font-medium">
        Redirecting to
        <br />
        <span className="text-foreground text-3xl font-bold">
          <ScIcon platform={platform} className="mr-[0.25ch] mb-1 inline-block size-10" />
          {platformObject.label}
        </span>
      </h1>
    </div>
  );
}
