'use client';

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation';
import ReactQuillEditor from './Quill/ReactQuillEditor'
import { fetchOptions } from './helpers';

interface TicketFormProps {
  ticket?: { id: string, title: string, description: string, priority: string },
  action: string,
}

export default function TicketForm({ ticket, action }: TicketFormProps) {
  const router = useRouter();

  const [title, setTitle] = useState(ticket?.title || '');
  const [description, setDescription] = useState(ticket?.description || '');
  const [priority, setPriority] = useState(ticket?.priority || 'low');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const newTicket = {
    title,
    description,
    priority,
  };
  
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
    setError(false);
    setIsLoading(true);

    const res: Response = await (action === "Edit" ? editTicket() : createTicket());

    if (!res.ok) {
      setError(true);
      setIsLoading(false);
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const response = await res.json();

    if (response.data) {
      console.log("response", response);
      router.push('/tickets');
      router.refresh();
    }
  };

  return (
    <section>
      <p id="form-error" className='text-red-600 mb-5' role="alert" aria-live="assertive">{error ? "There was an error saving your ticket, please try again." : ""}</p>
      <form onSubmit={handleSubmit} aria-describedby="form-error">
        <button className="medium-btn btn-primary" disabled={isLoading}>
          {isLoading ? 'Saving...' : 'Save Ticket'}
        </button>
        <>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            required
            type="text"
            onChange={e => setTitle(e.target.value)}
            value={title}
            aria-label="Ticket Title"
          />
        </>
        <>
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            onChange={e => setPriority(e.target.value)}
            value={priority}
            className="bg-white"
            aria-label="Ticket Priority"
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
        </>
        <div className="form-description">
          <label htmlFor="description">Description</label>
          <ReactQuillEditor
            id="description"
            description={description}
            setDescription={setDescription}
            aria-label="Ticket Description"
          />
        </div>
      </form>
    </>
  )
}
