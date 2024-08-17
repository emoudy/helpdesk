import { ReactNode } from 'react';
import MainHeader from '@/(dashboard)/components/header/MainHeader';

interface AuthLayoutsProps {
  children: ReactNode;
}

export default function AuthLayouts({ children }: AuthLayoutsProps) {
  return (
    <div>
      <header className='md:mt-10'>
        <MainHeader />
      </header>
      <main aria-label="Main Content">{children}</main>
    </div>);
}
