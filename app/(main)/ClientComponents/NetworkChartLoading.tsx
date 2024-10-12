import { BackIcon } from "@/components/Icon";
import { Loader } from "@/components/loading/Loader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function NetworkChartLoading() {
  const router = useRouter();

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5">
          <CardTitle
            onClick={() => {
              router.push(`/`);
            }}
            className="flex items-center cursor-pointer gap-0.5 text-xl"
          >
            <BackIcon />
            <div className="aspect-auto h-[20px] w-24 bg-muted"></div>
          </CardTitle>
          <div className="mt-[2px] aspect-auto h-[14px] w-32 bg-muted"></div>
        </div>
        <div className="hidden pr-4 pt-4 sm:block">
          <Loader visible={true} />
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <div className="aspect-auto h-[250px] w-full"></div>
      </CardContent>
    </Card>
  );
}
