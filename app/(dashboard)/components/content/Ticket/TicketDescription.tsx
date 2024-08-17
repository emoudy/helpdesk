import React from 'react'
import SanatizeDescription from '../SanatizeDescription'

interface TicketDescriptionProps {
  ticketDescription: string;
}

export default function TicketDescription({ ticketDescription }: TicketDescriptionProps) {
  return (
    <div className="px-20 py-10">
      <SanatizeDescription description={ticketDescription}/>
    </div>
  )
}
