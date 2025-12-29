import BuyMeACoffeeIcon from "@/components/icons/sc/buymeacoffee-icon";
import GithubIcon from "@/components/icons/sc/github-icon";
import KofiIcon from "@/components/icons/sc/kofi-icon";
import MakerWorldIcon from "@/components/icons/sc/makerworld-icon";
import PatreonIcon from "@/components/icons/sc/patreon-icon";
import XIcon from "@/components/icons/sc/x-icon";
import { TScEnum } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { BanIcon } from "lucide-react";
import { ComponentProps } from "react";

type TProps = {
  scId: TScEnum;
} & ComponentProps<"svg">;

export default function ScIcon({ scId, className, style }: TProps) {
  if (scId === "github") return <GithubIcon className={className} style={style} />;
  if (scId === "buymeacoffee") return <BuyMeACoffeeIcon className={className} style={style} />;
  if (scId === "kofi") return <KofiIcon className={className} style={style} />;
  if (scId === "makerworld") return <MakerWorldIcon className={className} style={style} />;
  if (scId === "patreon") return <PatreonIcon className={className} style={style} />;
  if (scId === "x") return <XIcon className={className} style={style} />;
  return <BanIcon className={cn("scale-80", className)} style={style} />;
}
