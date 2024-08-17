import Link from 'next/link';
import { createClient } from 'utils/supabase/server';
import { NextResponse } from 'next/server';
import Ticket from '../components/content/Ticket/Ticket';

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
        <Link key={ticket.id} href={`/tickets/${ticket.id}`}>
          <Ticket ticket={ticket} />
        </Link>
      ))}
    </>
  );
}
