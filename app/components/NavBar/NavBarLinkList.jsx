"use client";

import { useState } from "react";
import NavBarLink from "./NavBarLink";

export default function NavBarLinkList() {
  const dashboardName = "Dashboard";
  const ticketsName = "Tickets";
  const [activeLink, setActiveLink] = useState(dashboardName);

  const handleClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <div className="navbar-middle">
      <NavBarLink
        linkName={dashboardName}
        href="/"
        active={activeLink === dashboardName}
        handleClick={handleClick}
      />
      <NavBarLink
        linkName={ticketsName}
        href="/tickets"
        active={activeLink === ticketsName}
        handleClick={handleClick}
      />
    </div>
  );
}
