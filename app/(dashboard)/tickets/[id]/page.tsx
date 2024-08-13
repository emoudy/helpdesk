import { createClient } from 'utils/supabase/server';
import { getTicket } from './helper/helper';

import DeleteTicketIcon from '../../components/content/DeleteTicketIcon';
import EditTicketIcon from '../../components/content/EditTicketIcon';
import SanatizeDescription from '../../components/content/SanatizeDescription';
import ContentHeader from '../../components/content/ContentHeader';

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

interface TicketDetailsProps {
  params: {
    id: string;
  }
}

const TicketDetails = async ({ params }: TicketDetailsProps) => {
  const ticket = await getTicket(params.id);

  const supabase = createClient();
  const { data } = await supabase.auth.getSession();

  if (!ticket) {
    return <h2 className="text-center">Ticket was not found</h2>;
  }

  return (
    <main>
      <ContentHeader headerTitle="Ticket Details" href="/tickets" nextPage="Ticket List" />
      <div className="card">
        <div className="card_header_item">
          <div className={`pill ${ticket.priority}`}>{ticket.priority}</div>
          <div className="card_title">
            <h3>{ticket.title}</h3>
            <small>By: {ticket.user_email}</small>
          </div>
          <div className="card_menu">
            {data.session.user.email === ticket.user_email ? (
              <div>
                <DeleteTicketIcon id={ticket.id} />
                <EditTicketIcon id={ticket.id} />
              </div>
            ) : (
              <small className="px-3 py-2 font-semibold text-red-600">
                Tickets can be modified by the ticket owner.
              </small>
            )}
          </div>
        </div>
        <div className="card_body">
          <SanatizeDescription description={ticket.description}/>
        </div>
      </div>
    </main>
  );
};

export default TicketDetails;
