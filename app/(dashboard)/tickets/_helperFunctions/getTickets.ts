import { createClient } from '@utils/supabase/server';
import { Ticket } from '@interfaces/tickets';

interface GetTicketsProps {
  priority: string;
  user_email: string;
};

export async function getTickets({ priority = "all", user_email = "" }:GetTicketsProps): Promise<Ticket[]> {
  const supabase = createClient();
  let query = supabase.from('Tickets').select();
  if (priority !== 'all') query = query.eq('priority', priority);
  if (user_email.trim() !== "") query = query.eq('user_email', user_email);

  const { data, error } = await query;

  if (error) {
    throw new Error("Error fetching tickets");
  }
  
  return data || [];
}