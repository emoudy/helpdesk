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
    <div className="help_desk_app grid h-screen grid-cols-5 grid-rows-1 bg-white">
      <header className="col-span-1 row-span-2 flex h-full flex-col bg-primary p-4 text-white">
        <NavBar user={user as User} />
      </header>
      <main className="col-span-4 m-10 overflow-y-auto">{children}</main>
      <footer className="col-span-4 self-end py-2 text-center text-sm text-primary text-opacity-50">
        @moudy2024
      </footer>
    </div>
  );
}
