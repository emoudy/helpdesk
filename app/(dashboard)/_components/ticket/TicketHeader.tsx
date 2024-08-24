import React from 'react'
import TicketMenu from './TicketMenu';
import TicketTitle from './TicketTitle';
import { Ticket as TicketInterface } from '@interfaces/tickets';

interface TicketHeaderProps {
  ticket: TicketInterface;
  displayMenu: boolean;
  sessionEmail: string;
};

export default function TicketHeader({ ticket, displayMenu, sessionEmail }: TicketHeaderProps) {
  const id = ticket.id;
  const priority= ticket.priority;
  const title= ticket.title;
  const ticketEmail = ticket.user_email;

  const priorityColors = {
    low: "lowPriority",
    medium: "mediumPriority",
    high: "highPriority",
  }

  return (
    <div className="flex overflow-hidden rounded-md bg-white bg-opacity-5 mb-5 hover:cursor-pointer hover:bg-primary hover:bg-opacity-10">
      <div className={`flex w-16 items-center justify-center rounded-l-md text-center text-sm font-semibold ${priorityColors[priority]}`}>{priority}</div>
      <TicketTitle title={title} ticketEmail={ticketEmail} />
      {displayMenu? <TicketMenu id={id} ticketEmail={ticketEmail} sessionEmail={sessionEmail}/> : null}
    </div>
  )
}
