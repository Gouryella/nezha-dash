"use client";

import { Card, CardContent } from "@/components/ui/card";
import useSWR from "swr";
import { Loader } from "@/components/loading/Loader";
import { formatBytes, nezhaFetcher } from "@/lib/utils";
import { ServerApi } from "@/app/types/nezha-api";

export default function ServerOverviewClient() {
  const { data } = useSWR<ServerApi>("/api/server", nezhaFetcher);
  return (
    <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
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
              {data ? (
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
              {data ? (
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
              Online servers
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
              </span>
              {data ? (
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
            {data ? (
              <p className="text-lg font-semibold">
                {formatBytes(data?.total_bandwidth)}
              </p>
            ) : (
              <div className="flex h-7 items-center">
                <Loader visible={true} />
              </div>
            )}
          </section>
        </CardContent>
      </Card>
    </section>
  );
}
