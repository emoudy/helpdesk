import { Suspense } from 'react';
import { getSession } from '@utils/supabase/server';
import { getTickets } from '@dashboard/tickets/_helperFunctions/getTickets';

import Link from 'next/link';
import ContentHeader from '@dashboard/_components/header/ContentHeader';
import Loading from './loading';
import FilterMenu from './create/_components/FilterMenu';
import TicketList from './TicketList';

export const metadata = {
  title: 'Helpdesk | Tickets',
  description: 'Page to manage tickets.',
};

interface TicketsProps {
  searchParams?: {
    priority?: string;
    user_email?: string;
  };
}

export default async function Tickets({ searchParams }:TicketsProps) {
  const ticketsFilter = {
    priority: searchParams.priority || "all",
    user_email: searchParams.user_email || "",
  };

  const tickets = await getTickets(ticketsFilter); 
  const { data } = await getSession();
  const user = data.session.user.email;
  const userTickets = tickets.filter(ticket => ticket.user_email === user);
  
  // To avoid potential abuse by a bad actor, we disable the "Create" button if the user has more than 3 tickets
  const disableTicketCreation = userTickets.length > 2;

  return (
    <>
      <header>
        <ContentHeader crumbs={[{name:"Ticket List", href:""}]} />
      </header>
      <article className='flex flex-col items-center'>
        <div className='flex flex-col w-full max-w-4xl'>
          {disableTicketCreation && (
            <div className="text-center mb-3">
              <p className='text-sm m-auto errorMessage'>You have reached the maximum number of tickets allowed to be created by a single user.</p>
              <p className='text-sm m-auto errorMessage'>To create a new ticket, please delete one of your tickets.</p>
            </div>
          )}
          <div className='md:mb-16 mb-5'>
            <FilterMenu>
              <Link href="/tickets/create">
                <button type="button" className="medium-btn btn-primary" disabled={disableTicketCreation}>
                  Create Ticket
                </button>
              </Link>
            </FilterMenu>
          </div>
          <Suspense fallback={<Loading />}>
            <TicketList tickets={tickets}/>
          </Suspense>
        </div>
      </article>
    </>
  );
}
