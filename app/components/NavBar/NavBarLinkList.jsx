"use client";

import NavBarLink from "./NavBarLink";
import { usePathname } from "next/navigation";

export default function NavBarLinkList() {
  const dashboardLink = "/";
  const ticketsLink = "/tickets";

  const linkRoutes = [ticketsLink];
  const pathname = usePathname();
  const activeLink =
    linkRoutes.find((link) => pathname.includes(link)) || dashboardLink;

  return (
    <div className="navbar-middle">
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
