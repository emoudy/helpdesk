import { Suspense } from 'react';
import TicketList from './TicketList';
import Loading from './loading';
import Link from 'next/link';
import ContentHeader from '@dashboard/_components/header/ContentHeader';
import { getTickets } from '@dashboard/tickets/_helperFunctions/getTickets';
import { createClient } from '@utils/supabase/server';

export const metadata = {
  title: 'Helpdesk | Tickets',
  description: 'Page to manage tickets.',
};
/**
 * Wrapping the TicketList component in a Suspense component allows for the
 * page to be shown while the TicketList component is loading
 */
export default async function Tickets() {
  let tickets = [];
  let errorOccured = false;
  
  try {
    tickets = await getTickets();
  } catch (error) {
    errorOccured = true;
  }

  if (errorOccured) {
    return (
      <>
        <header>
          <ContentHeader crumbs={[{ name: "Ticket List", href: "" }]} />
        </header>
        <div>
          <div>There was an error retrieving the tickets</div>
        </div>
      </>
    );
  }

  const supabase = createClient();
  const { data } = await supabase.auth.getSession();
  const user = data.session.user.email;

  const userTickets = tickets.filter(ticket => ticket.user_email === user);
  const disableTicketCreation = userTickets.length > 2;

  // To avoid potential abuse by a bad actor, we disable the "Create" button if the user has more than 3 tickets
  return (
    <>
      <header>
        <ContentHeader crumbs={[{name:"Ticket List", href:""}]} />
      </header>
      <article className='flex flex-col items-center'>
        <div className='flex flex-col w-full max-w-4xl'>
          {disableTicketCreation && (
            <div className="text-center mb-3">
              <p className='text-sm m-auto font-semibold text-red-600'>You have reached the maximum number of tickets allowed to be created by a single user.</p>
              <p className='text-sm m-auto font-semibold text-red-600'>To create a new ticket, please delete one of your tickets.</p>
            </div>
          )}
          <Link href="/tickets/create" className="mb-10 ml-auto">
            <button className="medium-btn btn-primary float-right" disabled={disableTicketCreation}>
              Create Ticket
            </button>
          </Link>
          <Suspense fallback={<Loading />}>
            <TicketList />
          </Suspense>
        </div>
      </article>
    </>
  );
}
