import Link from 'next/link';

export default function NavBarLink({ linkName, isActive, href }) {
  return (
    <Link
      className={`nav-link flex flex-col my-5`}
      href={href}
    ><div className={`px-4 py-2 hover:bg-primaryDark rounded-lg ${isActive ? 'active bg-primaryDark' : ''}`}>
      {linkName}
    </div>
    </Link>
  );
}
