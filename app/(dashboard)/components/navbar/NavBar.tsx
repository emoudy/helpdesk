import Image from 'next/image';
import picture from '@public/sun_small.png';
import LogoutButton from './LogoutButton';
import NavBarLinkList from './NavBarLinkList';

interface NavBarProps {
  user: { email: string };
}

export default function NavBar({ user }: NavBarProps) {
  const LogoSection = () =>
    <div className="text-center md:text-left">
      <Image
        src={picture}
        alt="HelpDesk logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h3 className="md:mb-4 md:mt-2 font-semibold text-inherit">
        HelpDesk
      </h3>
    </div>;

  const DesktopChildren = () =>
    <div className="flex flex-col h-full">
      <div className="flex flex-col items-center justify-between border-b-2 border-white">
        <LogoSection />
        <small className="pb-4">{user ? user.email : 'null'}</small>
      </div>
      <NavBarLinkList />
      <LogoutButton />
    </div>;

  const MobileChildren = () =>
    <>
      <div className="flex justify-between items-center">
        <LogoSection />
        <LogoutButton />
      </div>
      <NavBarLinkList />
    </>;

  return (
    <nav className="h-full text-white" aria-label="Main navigation">
      <div className="hidden md:block h-full">
        <DesktopChildren />
      </div>
      <div className='md:hidden'>
        <MobileChildren />
      </div>
    </nav>
  );
}
