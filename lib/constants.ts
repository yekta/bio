import BuyMeACoffeeIcon from "@/components/icons/sc/buymeacoffee-icon";
import GithubIcon from "@/components/icons/sc/github-icon";
import KofiIcon from "@/components/icons/sc/kofi-icon";
import MakerWorldIcon from "@/components/icons/sc/makerworld-icon";
import PatreonIcon from "@/components/icons/sc/patreon-icon";
import XIcon from "@/components/icons/sc/x-icon";
import { ComponentProps, JSX } from "react";

export const displayName = "yekta";
export const description = "I design and build digital & physical open-source products.";

export const scLinks: TSc[] = [
  {
    label: "GitHub",
    handle: "yekta",
    href: "https://github.com/yekta",
    Icon: GithubIcon,
  },
  {
    label: "MakerWorld",
    handle: "yekta",
    href: "https://makerworld.com/en/@yekta/upload",
    Icon: MakerWorldIcon,
  },
  {
    label: "X (Twitter)",
    handle: "yektagg",
    href: "https://x.com/yektagg",
    Icon: XIcon,
  },
  {
    label: "Patreon",
    handle: "yektagg",
    href: "https://patreon.com/yektagg",
    Icon: PatreonIcon,
  },
  {
    label: "Ko-fi",
    handle: "yekta",
    href: "https://ko-fi.com/yekta",
    Icon: KofiIcon,
  },
  {
    label: "Buy me a Coffee",
    handle: "yekta",
    href: "https://buymeacoffee.com/yekta",
    Icon: BuyMeACoffeeIcon,
  },
];

export type TSc = {
  label: string;
  handle: string;
  href: string;
  Icon: (props: ComponentProps<"svg">) => JSX.Element;
};
