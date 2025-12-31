"use client";

import { useEffect } from "react";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
      person_profiles: "always",
      defaults: "2025-11-30",
    });
    const posthogId = posthog.get_distinct_id();
    if (posthogId) {
      posthog.identify(posthogId, { original_posthog_id: posthogId });
    }
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
