import Link from "next/link";

export default function NavBarLink({ linkName, isActive, href }) {
  return (
    <Link className={`nav-link ${isActive ? "active" : ""}`} href={href}>
      {linkName}
    </Link>
  );
}
