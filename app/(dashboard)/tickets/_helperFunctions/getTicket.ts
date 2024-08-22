import { notFound } from 'next/navigation';
import { createClient } from '@utils/supabase/server';
import { Ticket } from '@interfaces/tickets';

export async function getTicket(id: string): Promise<Ticket> {
  const supabase = createClient();
  const { data: ticket, error } = await supabase
    .from('Tickets')
    .select()
    .eq('id', id)
    .single();

  if (!ticket || error) {
    notFound();
  }

  return ticket;
}
