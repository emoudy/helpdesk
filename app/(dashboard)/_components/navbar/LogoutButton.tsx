'use client';

import { useRouter } from 'next/navigation';
import { createClient } from '@utils/supabase/client';

export default function LogoutButton() {
  const router = useRouter();
  let hasLogoutError = false;

  const handleLogout = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();

    if (!error) router.push('/login');
    else hasLogoutError = true;
  };

  return (
    <div className='text-center'>
      { hasLogoutError ? <p className='errorMessage text-sm mb-2'>There was an error logging out.</p> : null}
      <button className="small-btn btn-primary_alt mb-2" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
