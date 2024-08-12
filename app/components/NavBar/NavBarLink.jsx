"use client";

import Link from "next/link";

export default function NavBarLink({ linkName, href, active, handleClick }) {
  return (
    <Link
      className={`nav-link ${active ? "active" : ""}`}
      onClick={() => handleClick(linkName)}
      href={href}
    >
      {linkName}
    </Link>
  );
}
