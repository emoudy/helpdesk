'use client';
 
import { Ticket } from '@interfaces/tickets';
import { formActions } from '@/constants';
import { useHasPermission } from './hooks/useHasPermission';

import EditTicketButton from './formButtons/EditTicketButton';
import DeleteTicketButton from './formButtons/DeleteTicketButton';
import SaveTicketButton from './formButtons/SaveTicketButton';
import Tooltip from './Tooltip';

interface TicketMenuProps {
  ticket: Ticket;
  actionState: { isLoading: boolean, error: boolean };
  actionType: string;
}

export default function TicketMenu({ ticket, actionState, actionType }: TicketMenuProps) {
  const { read, edit, create } = formActions;
  const hasPermission = useHasPermission(ticket);
  console.log('TicketMenu canMakeChanges', hasPermission);
  const message = "Additional permissions are needed to modify content."
  

  const saveBtn = 
    <div className="text-right">
      <SaveTicketButton actionState={actionState} hasPermission={hasPermission} />
    </div>;

  const readOptions = (
    <div className="flex flex-row justify-between">
      <DeleteTicketButton actionState={actionState} hasPermission={hasPermission} />
      <EditTicketButton ticketId={ticket.id} hasPermission={hasPermission} />
    </div>
  );

  const menuOptions = {
    [read]: readOptions,
    [edit]: saveBtn,
    [create]: saveBtn
  };

  return (
    <>
      {menuOptions[actionType]}
    </>
  )
}
