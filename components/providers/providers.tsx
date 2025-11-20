import ScHighlightProvider from "@/components/providers/sc-highlight-provider";
import { ReactNode } from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";

type TProps = {
  children: ReactNode;
};

export default function Providers({ children }: TProps) {
  return (
    <NuqsAdapter>
      <ScHighlightProvider>{children}</ScHighlightProvider>
    </NuqsAdapter>
  );
}
