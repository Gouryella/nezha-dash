"use client";

import { ServerApi } from "@/app/types/nezha-api";
import { Loader } from "@/components/loading/Loader";
import { Card, CardContent } from "@/components/ui/card";
import { formatBytes, nezhaFetcher } from "@/lib/utils";
import useSWR from "swr";

export default function ServerOverviewClient() {
  const { data, error, isLoading } = useSWR<ServerApi>(
    "/api/server",
    nezhaFetcher,
  );

  if (error)
    return (
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm font-medium opacity-40">{error.message}</p>
        <p className="text-sm font-medium opacity-40">Please check your environment variables and review the server console</p>
      </div>
    );

  return (
    <>
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Card>
          <CardContent className="px-6 py-3">
            <section className="flex flex-col gap-1">
              <p className="text-sm font-medium md:text-base">
              Total servers
              </p>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                </span>
                {data?.result ? (
                  <div className="text-lg font-semibold">
                    {data?.result.length}
                  </div>
                ) : (
                  <div className="flex h-7 items-center">
                    <Loader visible={true} />
                  </div>
                )}
              </div>
            </section>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="px-6 py-3">
            <section className="flex flex-col gap-1">
              <p className="text-sm font-medium md:text-base">
              Online servers
              </p>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                {data?.result ? (
                  <div className="text-lg font-semibold">
                    {data?.live_servers}
                  </div>
                ) : (
                  <div className="flex h-7 items-center">
                    <Loader visible={true} />
                  </div>
                )}
              </div>
            </section>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="px-6 py-3">
            <section className="flex flex-col gap-1">
              <p className="text-sm font-medium md:text-base">
              Offline servers
              </p>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                </span>
                {data?.result ? (
                  <div className="text-lg font-semibold">
                    {data?.offline_servers}
                  </div>
                ) : (
                  <div className="flex h-7 items-center">
                    <Loader visible={true} />
                  </div>
                )}
              </div>
            </section>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="relative px-6 py-3">
            <section className="flex flex-col gap-1">
              <p className="text-sm font-medium md:text-base">
              Total bandwidth
              </p>
              {data?.result ? (
                <section className="flex pt-[4px] items-center gap-2">
                  <p className="text-[14px]  font-semibold">
                    ↑{formatBytes(data?.total_out_bandwidth)}
                  </p>
                  <p className="text-[14px]  font-semibold">
                    ↓{formatBytes(data?.total_in_bandwidth)}
                  </p>
                </section>
              ) : (
                <div className="flex h-7 items-center">
                  <Loader visible={true} />
                </div>
              )}
            </section>
          </CardContent>
        </Card>
      </section>
      {data?.result === undefined && !isLoading && (
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-medium opacity-40">Please check your environment variables and review the server console</p>
        </div>
      )}
    </>
  );
}