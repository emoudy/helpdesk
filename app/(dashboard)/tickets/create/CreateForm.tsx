'use client';

import ContentHeader from '../../components/content/ContentHeader';
import TicketForm from '../../components/content/TicketForm';

export default function CreateForm() {
  return (
    <>
      <ContentHeader headerTitle="Create Ticket" href="/tickets" nextPage="Ticket List" />
      <TicketForm ticket={null} action="Create" />
    </>
  );
}
