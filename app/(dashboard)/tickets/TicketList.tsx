import Link from 'next/link';
import { createClient } from 'utils/supabase/server';
import { NextResponse } from 'next/server';

interface Ticket {
  id: string;
  title: string;
  user_email: string;
  priority: string;
}

async function getTickets(): Promise<Ticket[] | NextResponse> {
  const supabase = createClient();
  const { data, error } = await supabase.from('Tickets').select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return data || [];
}

export default async function TicketList() {
  const tickets = await getTickets();

  if (tickets instanceof NextResponse) {
    const errorData = await tickets.json();
    return <h3 className="text-center">{errorData.error}</h3>;
  }

  if (Array.isArray(tickets) && tickets.length === 0) {
    return <h3 className="text-center">There are no opened tickets</h3>;
  }

  return (
    <>
      {tickets.map(ticket => (
        <div key={ticket.id} className="card">
          <div className="card_header_list">
            <div className={`pill ${ticket.priority}`}>{ticket.priority}</div>
            <Link href={`/tickets/${ticket.id}`} className="card_title">
              <h3>{ticket.title}</h3>
              <small>By: {ticket.user_email}</small>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
