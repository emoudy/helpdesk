export const handleDeleteTicket = async ({ id }: { id: string }) => {
  const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  return await res.json();
};
