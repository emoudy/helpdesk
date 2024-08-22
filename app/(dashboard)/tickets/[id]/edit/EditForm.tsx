'use client';

import TicketForm from '@(dashboard)/_components/ticket/TicketForm';

export default function EditForm({ ticket }) {

  if (!ticket) {
    return <h3 className="text-center">Ticket was not found</h3>;
  }

  return (
    <TicketForm ticket={ticket} action="Edit" />
  );
}
