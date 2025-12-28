"use client";

import ScIcon from "@/components/icons/sc/sc-icon";
import { Button } from "@/components/ui/button";
import { scLinks, TScEnum } from "@/lib/constants";
import { CheckCircleIcon, HomeIcon, LoaderIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type TProps = {
  platform: TScEnum;
};

export default function PlatformPage({ platform }: TProps) {
  const [isRedirected, setIsRedirected] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const platformObject = scLinks.find((link) => link.id === platform);

  useEffect(() => {
    if (platformObject) {
      window.location.href = platformObject.href;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      timeoutRef.current = setTimeout(() => {
        setIsRedirected(true);
      }, 2000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [platformObject]);

  if (!platformObject) {
    return (
      <Wrapper>
        <h1 className="text-muted-foreground w-full text-center text-lg leading-relaxed font-medium">
          Can't redirect
          <br />
          <span className="text-foreground text-3xl font-bold">
            <ScIcon platform={platform} className="mr-[0.25ch] mb-1 inline-block size-10" />
            Unknown Platform
          </span>
        </h1>
        <HomeButton />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {!isRedirected ? (
        <LoaderIcon className="text-muted-foreground size-10 animate-spin" />
      ) : (
        <CheckCircleIcon className="text-muted-foreground size-10" />
      )}
      <h1 className="text-muted-foreground w-full text-center text-lg leading-relaxed font-medium">
        {!isRedirected ? "Redirecting to" : "Redirected to"}
        <br />
        <span className="text-foreground text-3xl font-bold">
          <ScIcon platform={platform} className="mr-[0.25ch] mb-1 inline-block size-10" />
          {platformObject.label}
        </span>
      </h1>
      {isRedirected && <HomeButton />}
    </Wrapper>
  );
}

function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="my-auto flex w-full flex-col items-center gap-1 pb-[6vh]">{children}</div>;
}

function HomeButton() {
  return (
    <Button asChild className="mt-2 font-bold">
      <Link href="/">
        <HomeIcon className="-ml-0.5 size-4 shrink-0" />
        <span className="min-w-0 shrink">Go Home</span>
      </Link>
    </Button>
  );
}
