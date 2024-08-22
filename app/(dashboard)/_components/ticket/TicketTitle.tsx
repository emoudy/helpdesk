import React from 'react'

interface TicketTitleProps {
  title: string,
  ticketEmail: string,
};

export default function TicketTitle({ title, ticketEmail }: TicketTitleProps) {
  return (
    <div className="flex-1 bg-primary bg-opacity-5 py-3 pl-5">
      <h3>{title}</h3>
      <small>By: {ticketEmail}</small>
    </div>
  )
}
