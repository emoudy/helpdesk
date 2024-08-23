import { ReactNode } from 'react';
import MainHeader from '@/_components/MainHeader';
import { sizes } from '@/constants';

interface AuthLayoutsProps {
  children: ReactNode;
}

export default function AuthLayouts({ children }: AuthLayoutsProps) {
  return (
    <>
      <header>
        <MainHeader size={sizes.large} />
      </header>
      <main aria-label="Main Content">{children}</main>
    </>);
}
