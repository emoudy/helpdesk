'use client';

import NavBarLink from './NavBarLink';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const dashboardLink = '/';
  const ticketsLink = '/tickets';

  const linkRoutes = [ticketsLink];
  const pathname = usePathname();
  const activeLink =
    linkRoutes.find(link => pathname.includes(link)) || dashboardLink;

  return (
    <div className="text-white text-center md:text-left px-5" aria-label="Main navigation">
      <NavBarLink
        linkName="Dashboard"
        isActive={activeLink === dashboardLink}
        href={dashboardLink}
      />
      <NavBarLink
        linkName="Tickets"
        isActive={activeLink === ticketsLink}
        href={ticketsLink}
      />
    </div>
  );
}
