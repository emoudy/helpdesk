import React from 'react'
import SanatizeDescription from '@dashboard/_components/SanatizeDescription'

interface TicketDescriptionProps {
  ticketDescription: string;
}

export default function TicketDescription({ ticketDescription }: TicketDescriptionProps) {
  return (
    <div className="md:px-20 md:py-10 pt-5">
      <SanatizeDescription description={ticketDescription}/>
    </div>
  )
}
