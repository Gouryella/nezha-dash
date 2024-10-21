"use client";

import { NetworkChartClient } from "@/app/(main)/ClientComponents/NetworkChart";
import ServerDetailChartClient from "@/app/(main)/ClientComponents/ServerDetailChartClient";
import ServerDetailClient from "@/app/(main)/ClientComponents/ServerDetailClient";
import TabSwitch from "@/components/TabSwitch";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const tabs = ["Detail", "Network"];
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  return (
    <div className="mx-auto grid w-full max-w-5xl gap-2">
      <ServerDetailClient server_id={Number(params.id)} />
      <section className="flex items-center my-2 w-full">
        <Separator className="flex-1" />
        <div className="flex justify-center w-full max-w-[200px]">
          <TabSwitch
            tabs={tabs}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
        </div>
        <Separator className="flex-1" />
      </section>
      {currentTab === tabs[0] && (
        <ServerDetailChartClient server_id={Number(params.id)} show={true} />
      )}
      {currentTab === tabs[1] && (
        <NetworkChartClient server_id={Number(params.id)} show={true} />
      )}
    </div>
  );
}