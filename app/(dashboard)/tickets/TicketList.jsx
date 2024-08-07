import Link from "next/link";
import { createClient } from "utils/supabase/server";
import { NextResponse } from "next/server";

async function getTickets() {
  const supabase = createClient();
  const { data, error } = await supabase.from("Tickets").select();
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return data;
}

export default async function TicketList() {
  const tickets = await getTickets();
  const supabase = createClient();
  const { data } = await supabase.auth.getSession();

  if (!tickets || tickets.length === 0) {
    return <h3 className="text-center">There are no opened tickets</h3>;
  }

  return (
    <div>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card">
          <div className="card_status">
            <div className={`pill mb-3 ${ticket.priority}`}>
              {ticket.priority}
            </div>
          </div>
          <Link href={`/tickets/${ticket.id}`} className="card_summary">
            <h3>{ticket.title}</h3>
            <small>By: {ticket.user_email}</small>
          </Link>
        </div>
      ))}
    </div>
  );
}
