'use client';

import { formActions } from '@/constants';

import React from 'react'
import TicketMenu from './TicketMenu';

interface TicketFormHeaderProps {
  actionType: string;
  ticket: any;
  setNewTicket: any;
  actionState: { isLoading: boolean, error: boolean };
}

export default function TicketFormHeader({ actionType, ticket, setNewTicket, actionState }: TicketFormHeaderProps) {
  const { read }= formActions;

  return (
    <>
      <TicketMenu ticket={ticket} actionState={actionState} actionType={actionType} />
      <div className="mb-7">
        <label htmlFor="title">Title</label>
        {actionType === read ? <span>{`: ${ticket.title}`}</span> : 
          <input
            id="title"
            className={"bg-primary bg-opacity-10 px-2"}
            required
            type="text"
            onChange={e => setNewTicket({ ...ticket, title: e.target.value})}
            value={ticket.title}
            aria-label="Ticket Title"
          />
        }
      </div>
      <div className="mb-7">
        <label htmlFor="priority">Priority</label>
        {actionType === read ? <span>{`: ${ticket.priority}`}</span> : 
          <select
            disabled={actionType === read}
            id="priority"
            required
            className={"bg-primary bg-opacity-10 px-2"}
            onChange={e => setNewTicket({ ...ticket, priority: e.target.value})}
            value={ticket.priority}
            aria-label="Ticket Priority"
          >
            <option className="lowPriority" value="low">Low Priority</option>
            <option className="mediumPriority" value="medium">Medium Priority</option>
            <option className="highPriority" value="high">High Priority</option>
          </select>
        }
      </div>
    </>
  )
}
