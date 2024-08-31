'use client';

import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Tooltip from './Tooltip';

interface EditTicketIconProps {
  ticketId: string;
  hasPermission: boolean;
}
export default function EditTicketButton({ ticketId, hasPermission }: EditTicketIconProps) {
  const router: AppRouterInstance  = useRouter();
  const path: string = `/tickets/${ticketId}/edit`;
  const message: string = "Only ticket owners can edit their tickets.";

  return (
    <Tooltip message={message} hasPermission={hasPermission}>
      <button type="button" onClick={() => router.push(path)} className="medium-btn btn-primary mb-5" disabled={!hasPermission}>
        Edit Ticket
      </button>
    </Tooltip>
  );
}
