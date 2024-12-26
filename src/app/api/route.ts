import { NextResponse } from "next/server";
import { isValid } from "@telegram-apps/init-data-node";

export const runtime='edge'
export async function GET() {
    const ddd=""
  return NextResponse.json({ ddd });
}
