import { getSession } from '@utils/supabase/server';
import { getTickets } from '@dashboard/tickets/_helperFunctions/getTickets';

import ContentHeader from '@dashboard/_components/header/ContentHeader';
import FilterMenu from './create/_components/FilterMenu';
import TicketList from './TicketList';
import CreateTicketButton from '../_components/form/formButtons/CreateTicketButton';

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
  const user = data?.session?.user ? data.session.user.email : "";
  // To avoid potential abuse by a bad actor, we disable the "Create" button if the user has more than 3 tickets
  const userTickets = user ? tickets.filter(ticket => ticket.user_email === user) : tickets;
  
  const hasMaxTickets = userTickets.length > 2;
  const hasPermission = !!user;

  return (
    <>
      <header>
        <ContentHeader crumbs={[{name:"Ticket List", href:""}]} />
      </header>
      <article className='flex flex-col items-center'>
        <div className='flex flex-col w-full max-w-4xl'>
          {hasMaxTickets ? (
            <div className="text-center mb-3">
              <p className='text-sm m-auto errorMessage'>You have created the maximum number of tickets allowed by a single user.</p>
              <p className='text-sm m-auto errorMessage'>To create a new ticket, please delete one of your tickets.</p>
            </div>
          ): null}
          <div className='md:mb-10 mb-5'>
            <FilterMenu>
              <CreateTicketButton hasPermission={hasPermission} />
            </FilterMenu>
          </div>
          <TicketList tickets={tickets}/>
        </div>
      </article>
    </>
  );
}
