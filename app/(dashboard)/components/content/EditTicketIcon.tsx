'use client';

import { FaRegEdit } from 'react-icons/fa';
import Link from 'next/link';

interface EditTicketIconProps {
  id: string;
}

export default function EditTicketIcon({ id }: EditTicketIconProps) {
  return (
    <Link href={`/tickets/${id}/edit`}>
      <FaRegEdit className="icon" />
    </Link>
  );
}
