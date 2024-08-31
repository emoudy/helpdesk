import { useState, useEffect } from 'react';
import { getSession } from '@utils/supabase/client';
import { Ticket } from '@interfaces/tickets';

export default function useHasPermission(ticket:Ticket) {
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await getSession();
      const sessionEmail = data.session.user.email;
      setHasPermission(sessionEmail === ticket?.user_email);
    }
    if (ticket) fetchSession();
  }, [ticket]);

  return hasPermission;
}
