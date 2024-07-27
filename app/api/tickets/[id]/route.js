import { NextResponse } from "next/server";

/**
 * This forces all the route handlers to be dynamic.  They are static by default.
 * By setting this to "force-dynamic", they will be dynamic and fetch anytime a request is made.
 */
export const dynamic = "force-dynamic";

export async function GET(_, { params }) {
  const id = params.id;
  const res = await fetch(`http://localhost:4000/tickets/${id}`);
  const ticket = await res.json();

  if (!res.ok) {
    return NextResponse.json({error: "Ticket not found"}, { status: 404 });
  }

  return NextResponse.json(ticket, {
    status: 200,
  });
}
