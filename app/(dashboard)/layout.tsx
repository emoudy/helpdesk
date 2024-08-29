import { ReactNode } from 'react';
import { createClient } from '@utils/supabase/server';
import { sizes } from '@/constants';

import NavBar from '@dashboard/_components/navbar/NavBar';
import MainHeader from '@/_components/MainHeader';
import Footer from '@dashboard/_components/footer/Footer';
import Logout from '@dashboard/_components/navbar/Logout';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const { small } = sizes;
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="bg-gradient-to-b from-primary to-white bg-no-repeat md:h-screen md:grid md:grid-cols-[11rem_1fr] md:grid-rows-[auto_1fr_auto_auto]">
      <header>
        <MainHeader size={small} />
      </header>
      <nav className='md:row-start-2 md:h-full'>
        <NavBar />
      </nav>
      <main className="row-span-3 col-start-2 p-5 bg-white overflow-y-auto" aria-label="Main Content">{children}</main>
      <section className='hidden row-start-3 md:flex flex-col justify-end items-center'>
        <Logout user={user} />
      </section>
      <footer className="row-start-4 col-start-2 text-center py-2 text-sm text-primary bg-white">
        <Footer />
      </footer>
    </div>
  );
}
 