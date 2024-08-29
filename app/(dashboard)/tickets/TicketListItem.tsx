import { Ticket } from '@interfaces/tickets';

interface TicketProps {
  ticket: Ticket;
};

export default function TicketListItem({ ticket }: TicketProps) {
  const priorityColors = {
    low: "lowPriority",
    medium: "mediumPriority",
    high: "highPriority",
  }

  return (
    <div className="flex overflow-hidden rounded-md bg-white bg-opacity-5 mb-5 hover:cursor-pointer hover:bg-primary hover:bg-opacity-10">
      <div 
        className={`flex w-16 items-center justify-center rounded-l-md text-center text-sm font-semibold ${priorityColors[ticket.priority]}`}
      >
        {ticket.priority}
      </div>
      <div className="flex-1 bg-primary bg-opacity-5 py-3 pl-5">
        <h3>{ticket.title}</h3>
        <small>By: {ticket.user_email}</small>
      </div>
    </div>
  )
}
