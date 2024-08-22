import { createClient } from 'utils/supabase/server';
import { Ticket } from '@interfaces/tickets';

export async function getTickets(): Promise<Ticket[]> {
  const supabase = createClient();
  const { data, error } = await supabase.from('Tickets').select();

  if (error) {
    throw new Error("Error fetching tickets");
  }
  
  return data || [];
}