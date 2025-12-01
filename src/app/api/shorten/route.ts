import { NextResponse } from "next/server";

/**
 * Server Action: cleanuri API
 */
export async function POST(req: Request) {
  const { url } = await req.json();

  const res = await fetch("https://cleanuri.com/api/v1/shorten", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ url }),
  });

  const data = await res.json();

  return NextResponse.json(data);
}
