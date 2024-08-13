import Link from 'next/link';

export default function NavBarLink({ linkName, isActive, href }) {
  return (
    <Link
      className={`nav-link flex flex-col my-2`}
      href={href}
    ><h2 className={`text-white px-4 py-2 hover:bg-primaryDark rounded-lg ${isActive ? 'active bg-primaryDark' : ''}`}>
      {linkName}
    </h2>
    </Link>
  );
}
