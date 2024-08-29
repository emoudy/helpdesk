import { NextResponse } from 'next/server';
import { Tickets } from '@interfaces/tickets';

import Link from 'next/link';
import TicketListItem from './TicketListItem';

export default async function TicketList({tickets}: Tickets) {
  if (tickets instanceof NextResponse) {
    return <h3 className='errorMessage'>There awas an error with the request</h3>;
  }

  if (Array.isArray(tickets) && tickets.length === 0) {
    return <h3>There are no tickets to display</h3>;
  }
 
  return (
    <div>
      {tickets.map(ticket => (
        <Link key={ticket.id} href={`/tickets/${ticket.id}`}>
          <TicketListItem ticket={ticket} />
        </Link>
      ))}
    </div>
  );
}
