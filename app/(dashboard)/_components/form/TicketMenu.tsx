'use client';
 
import { Ticket } from '@interfaces/tickets';
import { formActions } from '@/constants';

import useHasPermission from './hooks/useHasPermission';
import EditTicketButton from '@dashboard/_components/form/formButtons/EditTicketButton';
import DeleteTicketButton from '@dashboard/_components/form/formButtons/DeleteTicketButton';
import SaveTicketButton from '@dashboard/_components/form/formButtons/SaveTicketButton';

interface TicketMenuProps {
  ticket: Ticket;
  actionState: { isLoading: boolean, error: boolean };
  actionType: string;
}

export default function TicketMenu({ ticket, actionState, actionType }: TicketMenuProps) {
  const { read, edit, create } = formActions;
  const hasPermission = useHasPermission(ticket);
  
  const saveBtn = 
    <div className="text-right">
      <SaveTicketButton actionState={actionState} />
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
