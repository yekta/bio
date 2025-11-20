"use client";

import { useScHighlight } from "@/components/providers/sc-highlight-provider";
import ScCard from "@/components/sc-card";
import { scLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

type TProps = {
  className?: string;
};

export default function ScCards({ className }: TProps) {
  const { highlightedIds, orderedIds } = useScHighlight();
  const orderedScLinks = scLinks.slice().sort((a, b) => {
    const aIndex = orderedIds?.indexOf(a.id) === undefined ? -1 : orderedIds.indexOf(a.id);
    const bIndex = orderedIds?.indexOf(b.id) === undefined ? -1 : orderedIds.indexOf(b.id);
    if (aIndex !== -1 && bIndex === -1) return -1;
    if (aIndex === -1 && bIndex !== -1) return 1;
    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
    return 0;
  });

  return (
    <div className={cn("flex w-md max-w-full flex-col items-center", className)}>
      {orderedScLinks.map((data) => (
        <ScCard
          data={data}
          key={data.href}
          isHighlighted={highlightedIds ? highlightedIds.includes(data.id) : false}
        />
      ))}
    </div>
  );
}
