"use client";

import { ScEnum, TScEnum } from "@/lib/constants";
import { parseAsArrayOf, parseAsStringEnum, useQueryState } from "nuqs";
import { createContext, ReactNode, useContext, useMemo } from "react";

type TScHighlightContext = {
  highlightedIds: TScEnum[] | null;
  orderedIds: TScEnum[] | null;
};

const ScHighlightContext = createContext<TScHighlightContext | null>(null);
export const scHighlightKey = "highlight";
export const scOrderKey = "order";

export const ScHighlightProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [highlightedIds] = useQueryState(
    scHighlightKey,
    parseAsArrayOf(parseAsStringEnum(ScEnum.options)),
  );
  const [orderedIds] = useQueryState(scOrderKey, parseAsArrayOf(parseAsStringEnum(ScEnum.options)));

  const value: TScHighlightContext = useMemo(
    () => ({
      highlightedIds,
      orderedIds,
    }),
    [highlightedIds],
  );

  return <ScHighlightContext.Provider value={value}>{children}</ScHighlightContext.Provider>;
};

export const useScHighlight = () => {
  const context = useContext(ScHighlightContext);
  if (!context) {
    throw new Error("useScHighlight must be used within an ScHighlightProvider");
  }
  return context;
};

export default ScHighlightProvider;
