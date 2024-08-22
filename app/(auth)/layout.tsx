import { ReactNode } from 'react';
import MainHeader from '@dashboard/_components/navbar/MainHeader';

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
