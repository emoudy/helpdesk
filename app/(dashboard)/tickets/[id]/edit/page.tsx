import { Suspense } from 'react';
import { createClient, getSession } from '@utils/supabase/server';
import { getTicket } from '@dashboard/tickets/_helperFunctions/getTicket';

import Loading from '../../loading';
import ContentHeader from '@dashboard/_components/header/ContentHeader';
import EditForm from './EditForm';

export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const supabase = createClient();
  const { data: ticket, error } = await supabase
    .from('Tickets')
    .select()
    .eq('id', params.id)
    .single();

  return {
    title: `Helpdesk | ${ticket?.title || 'Ticket not found'}`,
    description: 'Generated by create next app',
  };
}

interface EditTicketProps {
  params: {
    id: string
  }
}

export default async function EditTicket({ params }: EditTicketProps) {
  const ticket = await getTicket(params.id);
  const crumbs = [{name:"Ticket List", href:"/tickets"}, {name:"Ticket Details", href:`/tickets/${params.id}`}, {name:"Edit Ticket", href:""}];
  const { data } = await getSession();
  return (
    <>
      <header>
        <ContentHeader crumbs={crumbs} />
      </header>
      <article className='flex flex-col items-center'>
        <Suspense fallback={<Loading />}>
          {data.session.user.email === ticket.user_email ? (
            <EditForm ticket={ticket} />
          ) : null}
        </Suspense>
      </article>
    </>
  );
};
