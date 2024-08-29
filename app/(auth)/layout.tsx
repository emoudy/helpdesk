import { ReactNode } from 'react';
import { sizes } from '@/constants';

import MainHeader from '@/_components/MainHeader';

interface AuthLayoutsProps {
  children: ReactNode;
}

export default function AuthLayouts({ children }: AuthLayoutsProps) {
  const { large } = sizes;
  return (
    <>
      <header>
        <MainHeader size={large} />
      </header>
      <main aria-label="Main Content">{children}</main>
    </>
  );
}
