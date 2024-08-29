import { useState, useEffect } from 'react';
import { getSession } from '@utils/supabase/client';
import { Ticket } from '@interfaces/tickets';

export function useHasPermission(ticket:Ticket) {
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await getSession();
      const sessionEmail = data.session.user.email;
      console.log('useHasPermission', sessionEmail, ticket?.user_email);
      setHasPermission(sessionEmail === ticket?.user_email);
    }
    if (ticket) fetchSession();
  }, [ticket]);

  return hasPermission;
}
