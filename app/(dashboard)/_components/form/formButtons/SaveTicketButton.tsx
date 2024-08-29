'use client';

import LoadingIcon from "../../icons/loadingIcon";
import Tooltip from "../Tooltip";

interface SaveTicketButtonProps {
  actionState: { isLoading: boolean, error: boolean };
  hasPermission: boolean;
}
export const SaveTicketButton = ({ actionState, hasPermission }: SaveTicketButtonProps) => {
  const saveDisabledMsg: string = "Additional permissions are needed to save content."

  return (
    <Tooltip message={saveDisabledMsg} hasPermission={hasPermission}>
      <button type="submit" className="medium-btn btn-primary mb-5" disabled={actionState.isLoading || !hasPermission}>
        {actionState.isLoading ? (
            <div className="flex flex-row justify-center items-center">
              <LoadingIcon />
              Saving...
            </div>
          ) : (
            'Save Ticket'
          )}
      </button>
    </Tooltip>
  )
}

export default SaveTicketButton;
