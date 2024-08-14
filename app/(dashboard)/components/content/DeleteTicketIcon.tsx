'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { handleDeleteTicket } from './helpers';
import { TbTrashFilled } from 'react-icons/tb';

interface DeleteTicketIconProps {
  id: string;
}

export default function DeleteTicketIcon({ id }: DeleteTicketIconProps) {
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
    <TbTrashFilled
      className="icon"
      onClick={handleDelete}
    />
  );
}
