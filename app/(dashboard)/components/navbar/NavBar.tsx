import Image from 'next/image';
import picture from '../../../../public/sun_small.png';
import LogoutButton from './LogoutButton';
import NavBarLinkList from './NavBarLinkList';

interface NavBarProps {
  user: { email: string };
}

export default function NavBar({ user }: NavBarProps) {
  return (
    <>
      {/* DESKTOP */}
      <nav
        className="navbar collapse md:visible flex h-full flex-col text-white"
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
          <h3 className="navbar-title mb-4 mt-2 font-semibold text-inherit">
            HelpDesk
          </h3>
          <small className="mb-4">{user ? user.email : 'null'}</small>
        </div>
        <NavBarLinkList />
        <LogoutButton />
      </nav>

      {/* MOBILE */}
      <nav
        className="navbar md:hidden text-white mt-5"
        aria-label="Main navigation"
      >
        <div className="navbar-top relative flex items-center justify-center py-4 mb-5">
          <div className='absolute left-4'>
            <Image
              src={picture}
              alt="HelpDesk logo"
              width={70}
              quality={100}
              placeholder="blur"
            />
            <h3 className="navbar-title text-center font-semibold text-inherit">
              HelpDesk
            </h3>
          </div>
          <div className="absolute right-4">
            <LogoutButton />
          </div>
        </div>
        <NavBarLinkList />
      </nav>
    </>
  );
}
