import cs from "./data.json";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(cs);
}

export async function POST(req: NextRequest) {
  const { title, description, level, link } = await req.json();
  return NextResponse.json(cs);
}
