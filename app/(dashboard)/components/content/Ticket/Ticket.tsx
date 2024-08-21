import React from 'react'
import TicketHeader from './TicketHeader'
import TicketDescription from './TicketDescription'
import { Ticket as TicketInterface } from '@interfaces/tickets';

interface TicketProps {
  ticket: TicketInterface;
  sessionEmail?: string;
  displayDescription?: boolean;
  displayMenu?: boolean;
};

export default function Ticket({ ticket, displayDescription = false, displayMenu = false, sessionEmail="" }: TicketProps) {
  return (
    <div className='w-full mb-5'>
      <TicketHeader ticket={ticket} sessionEmail={sessionEmail} displayMenu={displayMenu} />
      {displayDescription ? <TicketDescription ticketDescription={ticket.description}/> : null}
    </div>
  )
}
