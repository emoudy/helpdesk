import Link from 'next/link';

export default function NavBarLink({ linkName, isActive, href }) {
  return (
    <Link
      className={`nav-link py-2 px-4 flex flex-col rounded-lg hover:bg-primaryDark ${isActive ? 'active bg-primaryDark' : ''}`}
      href={href}
    >
      {linkName}
    </Link>
  );
}
