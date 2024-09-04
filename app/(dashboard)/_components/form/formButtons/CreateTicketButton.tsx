'use client';

import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Tooltip from './Tooltip';

interface EditTicketIconProps {
  hasPermission: boolean;
}
export default function CreateTicketButton({ hasPermission }: EditTicketIconProps) {
  const router: AppRouterInstance  = useRouter();
  const path: string = `/tickets/create`;
  const message: string = "You must be logged in to create a ticket.";

  return (
    <Tooltip message={message} hasPermission={hasPermission}>
      <button type="button" onClick={() => router.push(path)} className="medium-btn btn-primary mb-5" disabled={!hasPermission}>
        Create Ticket
      </button>
    </Tooltip>
  );
}
