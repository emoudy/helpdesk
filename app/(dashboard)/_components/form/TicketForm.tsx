'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { formActions } from '@/constants';
import { Ticket } from '@interfaces/tickets';
import { createTicket, editTicket, deleteTicket } from '@/(dashboard)/_components/form/_helperFunctions/fetchOptions';

import ReactQuillEditor from '@dashboard/_components/form/editor/ReactQuillEditor';
import useTicketFormState from './hooks/useTicketFormState';
import useTicket from './hooks/useTicket';
import TicketMenu from './TicketMenu';


interface TicketFormProps {
  ticket?: Ticket,
  actionType: string,
}
export default function TicketForm({ ticket, actionType }: TicketFormProps) {
  const router = useRouter();
  const { read, edit, create } = formActions;
  const {newTicket, setNewTicket} = useTicket(ticket);
  const {actionState, startLoading, stopLoading, setError} = useTicketFormState();

  const actions = {
    [read]: () => deleteTicket(ticket.id),
    [edit]: () => editTicket({...newTicket}),
    [create]: () => createTicket({title: newTicket.title, description: newTicket.description, priority: newTicket.priority}),
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startLoading();

    try {
      const res: Response = await actions[actionType]();
      const response = await res.json();
      console.log("response", response);

      if (response.data || actionType === read) {
        router.push('/tickets');
        router.refresh();
      }
    } catch (error) {
      setError();
    } finally {
      stopLoading();
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
        There was an error processsing your request, please try again.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} aria-describedby="form-error" className='form w-full max-w-4xl '>
      <TicketMenu ticket={newTicket} actionState={actionState} actionType={actionType} />
      <fieldset className='bg-primary rounded-2xl bg-opacity-10 p-10'>
        <div className="mb-2">
          <label htmlFor="title">Title</label>
          {/* {actionType === read ? <span>{newTicket.title}</span> :  */}
            <input
              id="title"
              className={"bg-white px-2"}
              required
              type="text"
              onChange={e => setNewTicket({ ...newTicket, title: e.target.value})}
              value={newTicket.title}
              aria-label="Ticket Title"
              disabled={actionType === read}
            />
          {/* } */}
        </div>
        <div className="mb-2">
          <label htmlFor="priority">Priority</label>
          {/* {actionType === read ? <span>{newTicket.priority}</span> :  */}
            <select
              disabled={actionType === read}
              id="priority"
              required
              className={"bg-white px-2"}
              onChange={e => setNewTicket({ ...newTicket, priority: e.target.value})}
              value={newTicket.priority}
              aria-label="Ticket Priority"
            >
              <option className="lowPriority" value="low">Low Priority</option>
              <option className="mediumPriority" value="medium">Medium Priority</option>
              <option className="highPriority" value="high">High Priority</option>
            </select>
          {/* } */}
        </div>
        <div className="flex-grow overflow-hidden text-lg mb-2">
          <label htmlFor="description">Description</label>
          <ReactQuillEditor
            actionType={actionType}
            id="description"
            newTicket={newTicket}
            setNewTicket={setNewTicket}
            aria-label="Ticket Description"
          />
        </div>
      </fieldset>
    </form>
  )
}