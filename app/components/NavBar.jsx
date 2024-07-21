import Image from "next/image";
import Link from "next/link";
import picture from "../../public/sun.png";

import React from "react";

export default function NavBar() {
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
    </nav>
  );
}
