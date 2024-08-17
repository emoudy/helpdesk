import { Suspense } from 'react';
import TicketList from './TicketList';
import Loading from '../loading';
import Link from 'next/link';
import DashboardHeader from '../components/content/DashboardHeader';

export const metadata = {
  title: 'Helpdesk | Tickets',
  description: 'Page to manage tickets.',
};
/**
 * Wrapping the TicketList component in a Suspense component allows for the
 * page to be shown while the TicketList component is loading
 */
export default function Tickets() {
  return (
    <>
      <DashboardHeader headerTitle={"Ticket List"} />
      <Link href="/tickets/create">
        <button className="medium-btn btn-primary my-5 md:my-0">
          Create Ticket
        </button>
      </Link>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </>
  );
}
