import { ReactNode } from 'react';
import { createClient } from '@utils/supabase/server';
import NavBar from './components/navbar/NavBar';
import MainHeader from './components/header/MainHeader';
import LogoutButton from './components/navbar/LogoutButton';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const supabase = createClient();
  const {
    data: { user }, 
  } = await supabase.auth.getUser();

  return (
    <>
      <header className="flex justify-center items-center p-5"><MainHeader /></header>

      <nav
        className="md:row-start-2 md:h-full text-white text-center md:text-left px-5"
        aria-label="Main navigation"
      >
        <NavBar />
      </nav>

      <main className="row-span-2 col-start-2 p-5 bg-white" aria-label="Main Content">{children}</main>

      <section className="hidden row-start-3 md:flex flex-col justify-end items-center m-5">
        <LogoutButton aria-label="Logout button"/>
        <small className="text-primary">{user ? user.email : 'null'}</small>
      </section>

      <footer className="row-start-3 col-start-2 flex items-center justify-center py-2 text-sm text-primary bg-white text-opacity-50 w-full">
        @moudy2024
      </footer>
    </>
  );
}
