import { ReactNode } from 'react';
import MainHeader from '@/(dashboard)/components/header/MainHeader';
import Footer from '@/(dashboard)/components/content/footer/Footer';

interface AuthLayoutsProps {
  children: ReactNode;
}

export default function AuthLayouts({ children }: AuthLayoutsProps) {
  return (
    <div className='md:flex flex-col justify-center bg-white'>
      <header>
        <MainHeader />
      </header>
      <main aria-label="Main Content">{children}</main>
      <footer className="z-0 row-start-4 col-start-2 text-center py-2 text-sm text-primary bg-white text-opacity-50">
        <Footer />
      </footer>
    </div>);
}
