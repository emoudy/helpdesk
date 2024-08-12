import { createClient } from 'utils/supabase/server';
import { getTicket } from '../helper/helper';
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

const EditTicket = async ({ params }) => {
  const ticket = await getTicket(params.id);
  const supabase = createClient();
  const { data } = await supabase.auth.getSession();
  return (
    <main>
      {data.session.user.email === ticket.user_email ? (
        <EditForm ticket={ticket} />
      ) : null}
    </main>
  );
};

export default EditTicket;
