import Image from 'next/image';
import picture from '../../../public/sun.png';
import LogoutButton from '../LogoutButton';
import NavBarLinkList from './NavBarLinkList';

export default function NavBar({ user }) {
  return (
    <nav
      className="navbar flex flex-col h-full text-white"
      aria-label="Main navigation"
    >
      <div className="navbar-top flex flex-col items-center border-white border-b-2">
        <Image
          src={picture}
          alt="HelpDesk logo"
          width={70}
          quality={100}
          placeholder="blur"
        />
        <h1 className="navbar-title mt-2 mb-4 text-xl font-semibold text-white">
          HelpDesk
        </h1>
        <small className="mb-4">{user ? user.email : 'null'}</small>
      </div>
      <NavBarLinkList />
      <LogoutButton />
    </nav>
  );
}
