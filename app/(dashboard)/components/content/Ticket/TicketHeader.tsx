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

  const priorityColor = {
    high: "bg-red-300 text-red-600",
    medium: "bg-yellow-300 text-yellow-600",
    low: "bg-emerald-300 text-emerald-600",
  }

  return (
    <div className="flex my-5 overflow-hidden rounded-md bg-white bg-opacity-5 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:bg-primary hover:bg-opacity-10">
      <div className={`flex w-16 items-center justify-center rounded-l-md text-center text-xs font-semibold ${priorityColor[priority]}`}>{priority}</div>
      <TicketTitle title={title} ticketEmail={ticketEmail} />
      {displayMenu? <TicketMenu id={id} ticketEmail={ticketEmail} sessionEmail={sessionEmail}/> : null}
    </div>
  )
}
