interface FetchOptionsParams {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: { id?: string; title: string; description: string; priority: string; };
}

export const fetchOptions = ({ method, body }: FetchOptionsParams) => ({
  method,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});