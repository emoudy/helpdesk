import { useState } from 'react';
import { Ticket } from '@interfaces/tickets';

export default function useTicket(initialTicket: Ticket) {
  const [newTicket, setNewTicket] = useState<Ticket>({
    id: initialTicket?.id || null,
    title: initialTicket?.title || "",
    description: initialTicket?.description || "",
    priority: initialTicket?.priority || 'low',
    user_email: initialTicket?.user_email || null,
  });

  return {newTicket, setNewTicket};
}