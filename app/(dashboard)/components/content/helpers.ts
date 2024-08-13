export const handleDeleteTicket = async ({ id }: { id: string }) => {
  const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  return await res.json();
};

interface FetchOptionsParams {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';
  body?: { id?: string; title: string; description: string; priority: string; };
}

export const fetchOptions = ({ method, body }: FetchOptionsParams) => ({
  method,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});
