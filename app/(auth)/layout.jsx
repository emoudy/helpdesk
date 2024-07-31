import Link from "next/link";

export default function AuthLayouts({ children }) {
  return (
    <>
      <nav>
        <h1>Helpdesk</h1>
        <Link href="/login">Log In</Link>
      </nav>
      {children}
    </>
  );
}
