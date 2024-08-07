import Image from "next/image";
import Link from "next/link";
import picture from "../../public/sun.png";
import LogoutButton from "./logoutButton";

export default function NavBar({ user }) {
  return (
    <nav className="block">
      <div className="flex justify-between">
        <div>
          <Image
            src={picture}
            alt="splash logo"
            width={70}
            quality={100}
            placeholder="blur"
          />
          <h1>HelpDesk</h1>
        </div>
        <div className="flex flex-col items-end">
          <LogoutButton />
          <small className="mt-1">{user ? user.email : "null"}</small>
        </div>
      </div>
      <div className="mt-5 flex justify-between">
        <div>
          <Link className="mr-5" href="/">
            Dashboard
          </Link>
          <Link href="/tickets">Tickets</Link>
        </div>
      </div>
    </nav>
  );
}
