'use client';

import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { formActions } from '@/constants';
import { Ticket } from '@interfaces/tickets';
import { createTicket, editTicket, deleteTicket } from '@/(dashboard)/_components/form/_helperFunctions/fetchOptions';

import ReactQuillEditor from '@dashboard/_components/form/editor/ReactQuillEditor';
import TicketFormHeader from './TicketFormHeader';


interface TicketFormProps {
  ticket?: Ticket,
  actionType: string,
}
export default function TicketForm({ ticket, actionType }: TicketFormProps) {
  const router = useRouter();
  const { read, edit, create } = formActions;
  
  const [actionState, setActionState] = useState({ isLoading: false, error: false });
  const [newTicket, setNewTicket] = useState({
    title: ticket?.title || '',
    description: ticket?.description || '',
    priority: ticket?.priority || 'low',
  });
  const sendTicket = {
    [read]: ticket,
    [edit]: {...newTicket, id: ticket.id, user_email: ticket.user_email},
    [create]: newTicket,
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setActionState({ ...actionState, error: false});
    setActionState({ ...actionState, isLoading: true});

    const takeAction = {
      [create]: createTicket({newTicket}),
      [edit]: editTicket({newTicket, id: ticket.id}),
      [read]: deleteTicket({id: ticket.id}),
    };
    const res: Response = await takeAction[actionType];

    if (!res.ok) {
      setActionState({ ...actionState, error: true});
      setActionState({ ...actionState, isLoading: false});
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const response = await res.json();

    if (response.data) {
      router.push('/tickets');
      router.refresh();
    }
  };

  if (actionState.error) {
    return (
      <div 
        id="form-error" 
        className='errorMessage mb-5 w-full max-w-4xl' 
        role="alert" 
        aria-live="assertive"
      >
        There was an error saving your ticket, please try again.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} aria-describedby="form-error" className='w-full max-w-4xl'>
      <TicketFormHeader
        actionType={actionType}
        ticket={sendTicket[actionType]}
        setNewTicket={setNewTicket}
        actionState={actionState}
      />
      <div className="flex-grow overflow-hidden text-lg">
        <label htmlFor="description">Description</label>
        <ReactQuillEditor
          actionType={actionType}
          id="description"
          newTicket={newTicket}
          setNewTicket={setNewTicket}
          aria-label="Ticket Description"
        />
      </div>
    </form>
  )
}
