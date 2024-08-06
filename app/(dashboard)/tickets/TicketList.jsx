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

async function deleteTicket(id) {
  console.log("deleteTicket", id);
  const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    console.log(`Error status: ${res.status}`);
  }

  return await res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();

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
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
