import Link from 'next/link';

export default function NavBarLink({ linkName, isActive, href }) {
  return (
    <Link
      className={`nav-link flex flex-col rounded-lg px-4 py-2 hover:bg-primaryDark ${isActive ? 'active bg-primaryDark' : ''}`}
      href={href}
    >
      {linkName}
    </Link>
  );
}
