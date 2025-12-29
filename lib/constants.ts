import { z } from "zod";

export const displayName = "yekta";
export const description = "I design and build digital & physical open-source products.";

export const ScEnum = z.enum(["github", "makerworld", "x", "patreon", "kofi", "buymeacoffee"]);

export type TScEnum = z.infer<typeof ScEnum>;

export const scLinks: TScObject[] = [
  {
    id: "github",
    label: "GitHub",
    handle: "yekta",
    href: "https://github.com/yekta",
  },
  {
    id: "makerworld",
    label: "MakerWorld",
    handle: "yekta",
    href: "https://makerworld.com/en/@yekta/upload",
  },
  {
    id: "x",
    label: "X (Twitter)",
    handle: "yektagg",
    href: "https://x.com/yektagg",
  },
  {
    id: "patreon",
    label: "Patreon",
    handle: "yektagg",
    href: "https://patreon.com/cw/yektagg/membership",
  },
  {
    id: "kofi",
    label: "Ko-fi",
    handle: "yekta",
    href: "https://ko-fi.com/yekta",
  },
  {
    id: "buymeacoffee",
    label: "Buy me a Coffee",
    handle: "yekta",
    href: "https://buymeacoffee.com/yekta",
  },
];

export type TScObject = {
  id: TScEnum;
  label: string;
  handle: string;
  href: string;
};
