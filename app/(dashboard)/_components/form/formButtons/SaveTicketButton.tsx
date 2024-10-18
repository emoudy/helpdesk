'use client';

import { LoadingIcon } from "@dashboard/_components/icons/LoadingIcon";

interface SaveTicketButtonProps {
  actionState: { isLoading: boolean, error: boolean };
}
export default function SaveTicketButton({ actionState }: SaveTicketButtonProps) {
  return (
      <button type="submit" className="medium-btn btn-primary mb-5" disabled={actionState.isLoading}>
        {actionState.isLoading ? (
            <div className="flex flex-row justify-center items-center">
              <LoadingIcon />&nbsp; Saving...
            </div>
          ) : (
            'Save Ticket'
          )}
      </button>
  )
}