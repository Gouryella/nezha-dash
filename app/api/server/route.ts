import { ServerApi } from "@/app/types/nezha-api";
import { auth } from "@/auth";
import getEnv from "@/lib/env-entry";
import { GetNezhaData } from "@/lib/serverFetch";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";


export const dynamic = "force-dynamic";

export const runtime = "edge";

interface NezhaDataResponse {
  error?: string;
  data?: ServerApi;
}

export const GET = auth(async function GET(req) {
  if (!req.auth && getEnv("SitePassword")) {
    redirect("/api/auth/signin");
  }

  const response = (await GetNezhaData()) as NezhaDataResponse;
  if (response.error) {
    console.log(response.error);
    return NextResponse.json({ error: response.error }, { status: 400 });
  }
  return NextResponse.json(response, { status: 200 });
});