import cs from "../data.json";

import { NextRequest, NextResponse, NextFetchEvent, NextMiddleware } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  console.info(query);
  if (!query) {
    return NextResponse.json(cs);
  }

  const fc = cs.filter((c) => c.title.toLocaleLowerCase().includes(query?.toLocaleLowerCase()));
  return NextResponse.json(fc);
}
