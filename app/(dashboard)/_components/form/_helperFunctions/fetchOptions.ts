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

export const editTicket = async (newTicket: Ticket) => {
  const res = await fetch(`/api/tickets/${newTicket.id}`, fetchOptions({method: "PUT", body: newTicket}));
  return res;
};

export const createTicket = async (newTicket: Ticket) => {
  const res = await fetch(`/api/tickets`, fetchOptions({method: "POST", body: newTicket}));
  return res;
};

export const deleteTicket = async (id: string) => {
  const res = await fetch(`/api/tickets/${id}`, fetchOptions({ method: 'DELETE' }));
  return res;
};