import Image from "next/image";
import Link from "next/link";
import picture from "../../public/sun.png";
import LogoutButton from "./logoutButton";

export default function NavBar({ user }) {
  return (
    <nav>
      <Image
        src={picture}
        alt="splash logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>HelpDesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/tickets/create" className="mr-auto">
        Create Ticket
      </Link>

      {user ? <span>{user.email}</span> : null}
      <LogoutButton />
    </nav>
  );
}
