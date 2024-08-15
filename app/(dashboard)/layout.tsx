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
    <div className="help_desk_app min-h-screen bg-white md:grid md:grid-cols-[11rem_1fr] md:grid-rows-[1fr_auto]">
      <header className="row-span-2 flex flex-col bg-primary p-4 text-white md:w-44 h-full">
        <NavBar user={user as User} />
      </header>
      <main className="md:m-10 m-5 mb-2 overflow-y-auto md:row-start-1 md:col-start-2">{children}</main>
      <footer className="flex items-center justify-center py-2 text-center text-sm text-primary text-opacity-50 md:row-start-2 md:col-start-2 w-full">
        @moudy2024
      </footer>
    </div>
  );
}
