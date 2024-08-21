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
      router.push('/tickets');
      router.refresh();
    }
  };

  if (error) {
    return <div id="form-error" className='text-red-600 mb-5 w-full max-w-4xl' role="alert" aria-live="assertive">"There was an error saving your ticket, please try again."</div>
  }

  return (
    <div className='w-full max-w-4xl'>
      <form onSubmit={handleSubmit} aria-describedby="form-error">
        <div className="text-right">
          <button className="medium-btn btn-primary mb-5" disabled={isLoading}>
            {isLoading ? 'Saving...' : 'Save Ticket'}
          </button>
        </div>
        <div className="mb-7">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            className={"bg-primary bg-opacity-10 px-2"}
            required
            type="text"
            onChange={e => setTitle(e.target.value)}
            value={title}
            aria-label="Ticket Title"
          />
        </div>
        <div className="mb-7">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            className={"bg-primary bg-opacity-10 px-2"}
            onChange={e => setPriority(e.target.value)}
            value={priority}
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
            description={description}
            setDescription={setDescription}
            aria-label="Ticket Description"
          />
        </div>
      </form>
    </div>
  )
}
