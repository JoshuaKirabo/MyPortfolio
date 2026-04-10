import { NextResponse } from "next/server";

export async function POST() {
  return new NextResponse("Thanks! Your message has been received.", {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
