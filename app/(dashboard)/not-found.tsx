// this file has to be named 'not-found.tsx' to be picked up by the router

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center">
      <h2 className="text-3xl">There was a problem.</h2>
      <p>
        Go back to the <Link href="/">Dashboard</Link>
      </p>
    </div>
  );
}
