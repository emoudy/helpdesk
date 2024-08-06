import Link from "next/link";
import { createClient } from "utils/supabase/server";
import { NextResponse } from "next/server";
import DeleteTicketButton from "./[id]/DeleteTicketButton";

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
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.description.slice(0, 200)}...</p>
          </Link>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
          <div className="ml-auto">
            {data.session.user.email === ticket.user_email ? (
              <DeleteTicketButton id={ticket.id} />
            ) : null}
          </div>
        </div>
      ))}
    </>
  );
}
