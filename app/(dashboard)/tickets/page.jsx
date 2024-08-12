import { Suspense } from 'react';
import TicketList from './TicketList';
import Loading from '../loading';
import Link from 'next/link';

export const metadata = {
  title: 'Helpdesk | Tickets',
  description: 'Page to manage tickets.',
};
/**
 * Wrapping the TicketList component in a Suspense component allows for the
 * <nav> to be shown while the TicketList component is loading
 */
export default function Tickets() {
  return (
    <main>
      <nav className="ticket-list-header flex justify-between mb-10">
        <h1>Ticket List</h1>
        <Link href="/tickets/create">
          <button className="btn-primary">Create New Ticket</button>
        </Link>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
