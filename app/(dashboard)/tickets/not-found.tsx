// this file has to be named 'not-found.tsx' to be picked up by the router
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center">
      <h2 className="text-3xl">There was a problem.</h2>
      <p className="text-lg">The page you are looking for does not Exist</p>
      <p>
        Go back to the <Link href="/tickets">tickets</Link>
      </p>
    </div>
  );
}
