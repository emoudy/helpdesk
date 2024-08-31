'use client';

import { LoadingIcon } from "@dashboard/_components/icons/LoadingIcon";
import Tooltip from "./Tooltip";

interface DeleteTicketIconProps {
  actionState: { isLoading: boolean; error: boolean };
  hasPermission?: boolean;
}
export default function DeleteTicketButton({ actionState, hasPermission }: DeleteTicketIconProps) {
  const message: string = "Only ticket owners can delete their tickets.";

  return (
    <Tooltip message={message} hasPermission={hasPermission}>
      <button type="submit" className="medium-btn btn-primary mb-5" disabled={actionState.isLoading || !hasPermission}>
        {actionState.isLoading ? (
            <div className="flex flex-row justify-center items-center">
              <LoadingIcon />
              Deleting...
            </div>
          ) : (
            'Delete Ticket'
          )}
      </button>
    </Tooltip>
  );
}
