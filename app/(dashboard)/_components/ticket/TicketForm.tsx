'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import ReactQuillEditor from '@dashboard/_components/editor/ReactQuillEditor';

interface TicketFormProps {
  ticket?: { id: string, title: string, description: string, priority: string },
  action: string,
}

interface FetchOptionsParams {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';
  body?: { id?: string; title: string; description: string; priority: string; };
}

const fetchOptions = ({ method, body }: FetchOptionsParams) => ({
  method,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

export default function TicketForm({ ticket, action }: TicketFormProps) {
  const router = useRouter();

  console.log('Ticket:', ticket);

  const [ticketState, setTicketState] = useState({ isLoading: false, error: false });
  const [newTicket, setNewTicket] = useState({
    title: ticket?.title || '',
    description: ticket?.description || '',
    priority: ticket?.priority || 'low',
  });
  console.log('State newTicket:', newTicket.priority, newTicket.title, newTicket.description);
  
  const editTicket = async () => {
    const editedTicket = { ...newTicket, id: ticket.id };
    console.log('Editing ticket', editedTicket);
    const res = await fetch(`http://localhost:3000/api/tickets/${ticket.id}`, fetchOptions({method: "PUT", body: editedTicket}));
    return res;
  };

  const createTicket = async () => {
    console.log('Creating ticket', newTicket);
    const res = await fetch('http://localhost:3000/api/tickets', fetchOptions({method: "POST", body: newTicket}));
    return res;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTicketState({ ...ticketState, error: false});
    setTicketState({ ...ticketState, isLoading: true});

    const res: Response = await (action === "Edit" ? editTicket() : createTicket());

    if (!res.ok) {
      setTicketState({ ...ticketState, error: true});
      setTicketState({ ...ticketState, isLoading: false});
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const response = await res.json();

    if (response.data) {
      router.push('/tickets');
      router.refresh();
    }
  };

  if (ticketState.error) {
    return (
      <div 
        id="form-error" 
        className='text-red-600 mb-5 w-full max-w-4xl' 
        role="alert" 
        aria-live="assertive">
      There was an error saving your ticket, please try again.
    </div>
  )}

  return (
    <div className='w-full max-w-4xl'>
      <form onSubmit={handleSubmit} aria-describedby="form-error">
        <div className="text-right">
          <button className="medium-btn btn-primary mb-5" disabled={ticketState.isLoading}>
            {ticketState.isLoading ? 'Saving...' : 'Save Ticket'}
          </button>
        </div>
        <div className="mb-7">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            className={"bg-primary bg-opacity-10 px-2"}
            required
            type="text"
            onChange={e => setNewTicket({ ...newTicket, title: e.target.value})}
            value={newTicket.title}
            aria-label="Ticket Title"
          />
        </div>
        <div className="mb-7">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            required
            className={"bg-primary bg-opacity-10 px-2"}
            onChange={e => setNewTicket({ ...newTicket, priority: e.target.value})}
            value={newTicket.priority}
            aria-label="Ticket Priority"
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
        </div>
        <div className="flex-grow overflow-hidden text-lg">
          <label htmlFor="description">Description</label>
          <ReactQuillEditor
            id="description"
            newTicket={newTicket}
            setNewTicket={setNewTicket}
            aria-label="Ticket Description"
          />
        </div>
      </form>
    </div>
  )
}
