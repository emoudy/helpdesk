import React from 'react'
import DeleteTicketIcon from '@dashboard/_components/DeleteTicketIcon'
import EditTicketIcon from '@dashboard/_components/EditTicketIcon'

interface TicketMenuProps {
  id: string;
  ticketEmail: string;
  sessionEmail: string;
};

export default function TicketMenu({ id, ticketEmail, sessionEmail }: TicketMenuProps) {
  return (
    <div className="rounded-r-md bg-primary bg-opacity-5">
      {sessionEmail === ticketEmail ? (
        <div className="flex min-w-1.5">
          <DeleteTicketIcon id={id} />
          <EditTicketIcon id={id} />
        </div>
      ) : (
        <small className="px-3 py-2 font-semibold text-red-600">
          Tickets can be modified by the ticket owner.
        </small>
      )}
    </div>
  )
}
