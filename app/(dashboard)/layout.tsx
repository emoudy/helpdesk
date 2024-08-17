import { ReactNode } from 'react';
import { createClient } from '@utils/supabase/server';
import NavBar from './components/navbar/NavBar';
import MainHeader from './components/header/MainHeader';

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
    <>
      <header className="md:col-span-2 flex justify-between p-6 pl-10"><MainHeader user={user as User} /></header>
      <nav className="md:row-start-2 md:row-span-2 md:h-full text-white text-center md:text-left px-6 pb-3" aria-label="Main navigation"><NavBar /></nav>
      <main className="md:row-start-2 md:col-start-2 p-6 bg-white" aria-label="Main Content">{children}</main>
      <footer className="md:row-start-3 md:col-start-2 flex items-center justify-center py-2 text-sm text-primary bg-white text-opacity-50 w-full">
        @moudy2024
      </footer>
    </>
  );
}
