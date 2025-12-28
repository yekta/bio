import ScHighlightProvider from "@/components/providers/sc-highlight-provider";
import { ReactNode } from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { PostHogProvider } from "@/components/providers/posthog";

type TProps = {
  children: ReactNode;
};

export default function Providers({ children }: TProps) {
  return (
    <NuqsAdapter>
      <PostHogProvider>{children}</PostHogProvider>
    </NuqsAdapter>
  );
}
