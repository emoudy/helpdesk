'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { handleDeleteTicket } from './helpers';

interface DeleteTicketButtonProps {
  id: string;
}

export default function DeleteTicketButton({ id }: DeleteTicketButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    const { error } = await handleDeleteTicket({ id });

    if (error) {
      console.error('Error deleting ticket:', error);
      setIsLoading(false);
    } else {
      router.push('/tickets');
      router.refresh();
    }
  };

  return (
    <button className="small-btn btn-primary" onClick={handleDelete} disabled={isLoading}>
      {isLoading ? 'Deleting...' : 'Delete Ticket'}
    </button>
  );
}
