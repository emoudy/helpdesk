import { ReactNode } from 'react';
import { createClient } from '@utils/supabase/server';
import NavBar from './components/navbar/NavBar';
import MainHeader from './components/header/MainHeader';
import Footer from './components/content/footer/Footer';
import Logout from './components/navbar/Logout';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const supabase = createClient();
  const {
    data: { user }, 
  } = await supabase.auth.getUser();

  return (
    <div className="bg-gradient-to-b from-primary to-white bg-no-repeat md:h-screen md:grid md:grid-cols-[11rem_1fr] md:grid-rows-[auto_1fr_auto_auto]">
      <header>
        <MainHeader small />
      </header>
      <nav className='md:row-start-2 md:h-full'>
        <NavBar />
      </nav>
      <main className="row-span-3 col-start-2 p-5 bg-white" aria-label="Main Content">{children}</main>
      <section>
        <Logout user={user} />
      </section>
      <footer className="row-start-4 col-start-2 text-center py-2 text-sm text-primary bg-white opacity-50">
        <Footer />
      </footer>
    </div>
  );
}
 