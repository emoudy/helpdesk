import Image from 'next/image';
import picture from '../../../../public/sun_small.png';
import LogoutButton from './LogoutButton';
import NavBarLinkList from './NavBarLinkList';

export default function NavBar({ user }) {
  return (
    <nav
      className="navbar flex h-full flex-col text-white"
      aria-label="Main navigation"
    >
      <div className="navbar-top flex flex-col items-center border-b-2 border-white">
        <Image
          src={picture}
          alt="HelpDesk logo"
          width={70}
          quality={100}
          placeholder="blur"
        />
        <h1 className="navbar-title mb-4 mt-2 text-xl font-semibold text-white">
          HelpDesk
        </h1>
        <small className="mb-4">{user ? user.email : 'null'}</small>
      </div>
      <NavBarLinkList />
      <LogoutButton />
    </nav>
  );
}
