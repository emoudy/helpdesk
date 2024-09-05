import { createClient } from '@utils/supabase/server';
import { Ticket } from '@interfaces/tickets';

interface GetTicketsProps {
  priority: string;
  user_email: string;
};

export async function getTickets({ priority = "all", user_email = "" }:GetTicketsProps): Promise<Ticket[]> {
  const supabase = createClient();
  let query = supabase.from('Tickets').select();
  console.log("getTickets", priority, user_email);
  if (priority !== 'all') query = query.eq('priority', priority);
  if (user_email.trim() !== "") query = query.eq('user_email', user_email);

  const { data, error } = await query;
  console.log("getTickets data", data);
  console.log("getTickets error", error);

  if (error) {
    throw new Error("Error fetching tickets");
  }
  
  return data || [];
}