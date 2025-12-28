import PlatformPage from "@/app/[platform]/components/platform-page";
import { TScEnum } from "@/lib/constants";

type TProps = {
  params: Promise<{
    platform: TScEnum;
  }>;
};

export default async function Page({ params }: TProps) {
  const { platform } = await params;
  return (
    <div className="flex min-h-svh w-full flex-col items-center px-6 py-4">
      <PlatformPage platform={platform} />
    </div>
  );
}
