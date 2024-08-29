import { Ticket } from "@interfaces/tickets";

interface FetchOptionsParams {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: { id?: string; title: string; description: string; priority: string; };
}
const fetchOptions = ({ method, body }: FetchOptionsParams) => ({
  method,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});


interface EditTicketProps {
  newTicket: Ticket,
  id: string,
}
export const editTicket = async ({newTicket, id}: EditTicketProps) => {
  const editedTicket = { ...newTicket, id };
  const res = await fetch(`http://localhost:3000/api/tickets/${id}`, fetchOptions({method: "PUT", body: editedTicket}));
  return res;
};


interface CreateTicketProps {
  newTicket: Ticket,
}
export const createTicket = async ({newTicket}: CreateTicketProps) => {
  const res = await fetch('http://localhost:3000/api/tickets', fetchOptions({method: "POST", body: newTicket}));
  return res;
};


interface DeleteTicketIconProps {
  id: string;
}
export const deleteTicket = async ({ id }: DeleteTicketIconProps) => {
  const res = await fetch(`http://localhost:3000/api/tickets/${id}`, fetchOptions({ method: 'DELETE' }));
  return await res.json();
};