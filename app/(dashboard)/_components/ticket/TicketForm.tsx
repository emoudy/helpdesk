'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import ReactQuillEditor from '@dashboard/_components/editor/ReactQuillEditor';
import { fetchOptions } from '@dashboard/_components/ticket/_helperFunctions/fetchOptions';

interface TicketFormProps {
  ticket?: { id: string, title: string, description: string, priority: string },
  action: string,
}

export default function TicketForm({ ticket, action }: TicketFormProps) {
  const router = useRouter();

  const [ticketState, setTicketState] = useState({ isLoading: false, error: false });
  const [newTicket, setNewTicket] = useState({
    title: ticket?.title || '',
    description: ticket?.description || '',
    priority: ticket?.priority || 'low',
  });
  
  const editTicket = async () => {
    const editedTicket = { ...newTicket, id: ticket.id };
    const res = await fetch(`http://localhost:3000/api/tickets/${ticket.id}`, fetchOptions({method: "PUT", body: editedTicket}));
    return res;
  };

  const createTicket = async () => {
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
        className='errorMessage mb-5 w-full max-w-4xl' 
        role="alert" 
        aria-live="assertive">
      There was an error saving your ticket, please try again.
    </div>
  )}

  return (
    <div className='w-full max-w-4xl'>
      <form onSubmit={handleSubmit} aria-describedby="form-error">
        <div className="text-right">
          <button type="submit" className="medium-btn btn-primary mb-5" disabled={ticketState.isLoading}>
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
            <option className="lowPriority" value="low">Low Priority</option>
            <option className="mediumPriority" value="medium">Medium Priority</option>
            <option className="highPriority" value="high">High Priority</option>
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
