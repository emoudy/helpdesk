import Link from 'next/link';
import { NextResponse } from 'next/server';
import Ticket from '@dashboard/_components/ticket/Ticket';
import { getTickets } from '@dashboard/tickets/_helperFunctions/getTickets';

interface Ticket {
  id: string;
  title: string;
  user_email: string;
  priority: string;
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
    <div>
      {tickets.map(ticket => (
        <Link key={ticket.id} href={`/tickets/${ticket.id}`}>
          <Ticket ticket={ticket} />
        </Link>
      ))}
    </div>
  );
}
