import { ReactNode } from 'react';
import MainHeader from '@/(dashboard)/components/header/MainHeader';
import Footer from '@/(dashboard)/components/content/footer/Footer';

interface AuthLayoutsProps {
  children: ReactNode;
}

export default function AuthLayouts({ children }: AuthLayoutsProps) {
  return (
    <>
      <header>
        <MainHeader />
      </header>
      <main aria-label="Main Content">{children}</main>
    </>);
}
