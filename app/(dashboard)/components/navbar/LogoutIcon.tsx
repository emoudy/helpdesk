'use client';

import { useRouter } from 'next/navigation';
import { createClient } from '@utils/supabase/client';
import { IoMdLogOut } from "react-icons/io";

export default function LogoutIcon() {
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
    <IoMdLogOut className="md:hidden icon text-white" onClick={handleLogout} />
  );
}
