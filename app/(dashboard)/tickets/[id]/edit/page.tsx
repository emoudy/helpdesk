import { Suspense } from 'react';
import { createClient } from 'utils/supabase/server';
import { getTicket } from '../helper/helper';

import Loading from '../../../loading';
import ContentHeader from '../../../components/content/ContentHeader';
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
  const supabase = createClient();
  const { data } = await supabase.auth.getSession();
  return (
    <main>
      <ContentHeader headerTitle="Edit Ticket" href={`/tickets/${ticket.id}`} nextPage="Ticket Details" />
      <Suspense fallback={<Loading />}>
        {data.session.user.email === ticket.user_email ? (
          <EditForm ticket={ticket} />
        ) : null}
      </Suspense>
    </main>
  );
};
