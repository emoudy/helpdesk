'use client';

import ContentHeader from '../../../components/content/ContentHeader';
import TicketForm from '../../../components/content/TicketForm';

export default function EditForm({ ticket }) {

  if (!ticket) {
    return <h3 className="text-center">Ticket was not found</h3>;
  }

  return (
    <>
      <ContentHeader headerTitle="Edit Ticket" href={`/tickets/${ticket.id}`} nextPage="Ticket Details" />
      <TicketForm ticket={ticket} action="Edit" />
    </>
  );
}
