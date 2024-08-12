'use client';

import { FaRegEdit } from 'react-icons/fa';
import Link from 'next/link';

export default function EditTicketIcon({ id }) {
  return (
    <Link href={`/tickets/${id}/edit`}>
      <FaRegEdit className="icon" />
    </Link>
  );
}
