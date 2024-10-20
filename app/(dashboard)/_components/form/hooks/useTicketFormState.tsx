import { useState } from 'react';

export default function useTicketFormState() {
  const [actionState, setActionState] = useState({ isLoading: false, error: false });

  const startLoading = () => setActionState({ isLoading: true, error: false });
  const stopLoading = () => setActionState({ isLoading: false, error: false });
  const setError = () => setActionState({ isLoading: false, error: true });

  return { actionState, startLoading, stopLoading, setError };
};
