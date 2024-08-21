import { Suspense } from 'react';
import TicketList from './TicketList';
import Loading from '../loading';
import Link from 'next/link';
import DashboardHeader from '../components/content/DashboardHeader';
import ContentHeader from '../components/content/ContentHeader';

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
    <article className='flex flex-col'>
      <ContentHeader crumbs={[{name:"Ticket List", href:""}]} />
      <Link href="/tickets/create" className='my-3'>
        <button className="medium-btn btn-primary float-end">
          Create Ticket
        </button>
      </Link>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </article>
  );
}
