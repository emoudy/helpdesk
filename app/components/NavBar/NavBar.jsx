import Image from "next/image";
import picture from "../../../public/sun.png";
import LogoutButton from "../LogoutButton";
import NavBarLinkList from "./NavBarLinkList";

export default function NavBar({ user }) {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-top">
        <Image
          src={picture}
          alt="HelpDesk logo"
          width={70}
          quality={100}
          placeholder="blur"
        />
        <h1 className="navbar-title">HelpDesk</h1>
        <small>{user ? user.email : "null"}</small>
      </div>
      <NavBarLinkList />
      <LogoutButton />
    </nav>
  );
}
