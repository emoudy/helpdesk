import Image from "next/image";
import Link from "next/link";
import picture from "../../public/sun.png";
import LogoutButton from "./LogoutButton";

export default function NavBar({ user }) {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <Image
          src={picture}
          alt="splash logo"
          width={70}
          quality={100}
          placeholder="blur"
        />
        <h1 className="navbar-title">HelpDesk</h1>
        <small>{user ? user.email : "null"}</small>
      </div>
      <div className="navbar-middle">
        <Link className="nav-link" href="/">
          Dashboard
        </Link>
        <Link className="nav-link" href="/tickets">
          Tickets
        </Link>
      </div>
      <LogoutButton />
    </nav>
  );
}
