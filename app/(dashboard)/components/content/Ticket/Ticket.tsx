import React from 'react'
import TicketHeader from './TicketHeader'
import TicketDescription from './TicketDescription'

interface TicketProps {
  ticket: {
    id: string;
    priority: string;
    title: string;
    user_email: string;
    description?: string;
  };
  sessionEmail?: string;
  displayDescription?: boolean;
  displayMenu?: boolean;
};

export default function Ticket({ ticket, displayDescription = false, displayMenu = false, sessionEmail="" }: TicketProps) {
  return (
    <>
      <TicketHeader ticket={ticket} sessionEmail={sessionEmail} displayMenu={displayMenu} />
      {displayDescription ? <TicketDescription ticketDescription={ticket.description} /> : null}
    </>
  )
}
