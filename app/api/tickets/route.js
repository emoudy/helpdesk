import { NextResponse } from "next/server";

/**
 * This forces all the route handlers to be dynamic.  They are static by default.
 * By setting this to "force-dynamic", they will be dynamic and fetch anytime a request is made.
 */
export const dynamic = "force-dynamic";

export async function GET() {
  const res = await fetch("http://localhost:4000/tickets")
  const tickets = await res.json();

  return NextResponse.json(tickets, {
    status: 200,
  });
}