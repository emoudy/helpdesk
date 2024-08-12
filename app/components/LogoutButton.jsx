'use client';

import { useRouter } from 'next/navigation';
import { createClient } from '../../utils/supabase/client';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.push('/login');
    } else {
      console.log('error', error);
    }
  };

  return (
    <button className="btn-secondary navbar-logout" onClick={handleLogout}>
      Logout
    </button>
  );
}
