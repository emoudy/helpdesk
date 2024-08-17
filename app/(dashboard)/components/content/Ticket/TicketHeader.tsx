import React from 'react'
import TicketMenu from './TicketMenu';
import TicketTitle from './TicketTitle';

interface TicketHeaderProps {
  ticket: {
    id: string;
    priority: string;
    title: string;
    user_email: string;
  };
  displayMenu: boolean;
  sessionEmail: string;
};

export default function TicketHeader({ ticket, displayMenu, sessionEmail }: TicketHeaderProps) {
  const id = ticket.id;
  const priority= ticket.priority;
  const title= ticket.title;
  const ticketEmail = ticket.user_email;

  return (
    <div className="flex my-5 overflow-hidden rounded-md bg-white bg-opacity-5 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:bg-primary hover:bg-opacity-10">
      <div className={`pill ${priority}`}>{priority}</div>
      <TicketTitle title={title} ticketEmail={ticketEmail} />
      {displayMenu? <TicketMenu id={id} ticketEmail={ticketEmail} sessionEmail={sessionEmail}/> : null}
    </div>
  )
}
