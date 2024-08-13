'use client';

import { useRouter } from 'next/navigation';
import { createClient } from '../../../../utils/supabase/client';

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
    <button className="small-btn btn-primary_alt navbar-logout mb-5" onClick={handleLogout}>
      Logout
    </button>
  );
}
