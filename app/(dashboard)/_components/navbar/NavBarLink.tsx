import Link from 'next/link';

export default function NavBarLink({ linkName, isActive, href }) {
  return (
    <Link
      className="flex flex-col mb-3"
      href={href}
    >
      <div className={`bg-primaryDark px-4 py-2 hover:bg-primary rounded-md ${isActive ? 'active bg-primary' : ''}`}>
        {linkName}
      </div>
    </Link>
  );
}
