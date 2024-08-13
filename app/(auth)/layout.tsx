import { ReactNode } from 'react';

interface AuthLayoutsProps {
  children: ReactNode;
}

export default function AuthLayouts({ children }: AuthLayoutsProps) {
  return <>{children}</>;
}
