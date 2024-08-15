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
    <>
      <nav className="ticket-list-header mb-10 flex justify-between">
        <h1 className="whitespace-nowrap">Ticket List</h1>
        <Link href="/tickets/create">
          <button className="medium-btn btn-primary">
            {/* The span elements are used to style the text differently on different screen sizes */}
            <span className="block md:inline">Create</span>{' '}
            <span className="block md:inline">Ticket</span>
          </button>
        </Link>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </>
  );
}
