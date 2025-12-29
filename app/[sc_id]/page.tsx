import ScPage from "@/app/[sc_id]/components/sc-page";
import { ScEnum, TScEnum } from "@/lib/constants";

type TProps = {
  params: Promise<{
    sc_id: TScEnum;
  }>;
};

export default async function Page({ params }: TProps) {
  const { sc_id } = await params;
  return (
    <div className="flex min-h-svh w-full flex-col items-center px-6 py-4">
      <ScPage scId={sc_id} />
    </div>
  );
}

export function generateStaticParams(): Awaited<TProps["params"]>[] {
  return ScEnum.options.map((scId) => ({ sc_id: scId }));
}
