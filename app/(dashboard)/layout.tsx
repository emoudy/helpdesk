import { ReactNode } from 'react';
import { createClient } from '../../utils/supabase/server';
import NavBar from './components/navbar/NavBar';

interface DashboardLayoutProps {
  children: ReactNode;
}

interface User {
  id: string;
  email: string;
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="help_desk_app grid h-screen grid-cols-[11rem_1fr] grid-rows-[1fr_auto] bg-white">
      <header className="row-span-2 flex h-full flex-col bg-primary p-4 text-white w-44">
        <NavBar user={user as User} />
      </header>
      <main className="m-10 mb-2 overflow-y-auto">{children}</main>
      <footer className="flex items-center justify-center py-2 text-center text-sm text-primary text-opacity-50">
        @moudy2024
      </footer>
    </div>
  );
}
