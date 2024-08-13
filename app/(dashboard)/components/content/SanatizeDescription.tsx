'use client';

import DOMPurify from 'dompurify';

interface SanatizeDescriptionProps {
  description: string;
}

export default function SanatizeDescription({ description }: SanatizeDescriptionProps) {

  const ticketDescription = DOMPurify.sanitize(description || '')

  return (
    <div dangerouslySetInnerHTML={{ __html: ticketDescription }}></div>
  )
}
