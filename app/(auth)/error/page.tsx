import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div className="text-center">
      <h2 className="text-3xl">There was a problem.</h2>
      <p>
        Go back to the <Link href="/login">Login Page</Link>
      </p>
    </div>
  );
}
