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
  console.log("editTicket", newTicket);
  const res = await fetch(`http://localhost:3000/api/tickets/${newTicket.id}`, fetchOptions({method: "PUT", body: newTicket}));
  return res;
};

export const createTicket = async (newTicket: Ticket) => {
  console.log("createTicket", newTicket);
  const res = await fetch('http://localhost:3000/api/tickets', fetchOptions({method: "POST", body: newTicket}));
  return res;
};

export const deleteTicket = async (id: string) => {
  console.log("deleteTicket id", id);
  const res = await fetch(`http://localhost:3000/api/tickets/${id}`, fetchOptions({ method: 'DELETE' }));
  return res;
};