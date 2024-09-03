import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div className='flex flex-col items-center justify-center'>   
      <h2 className="text-3xl">There was a problem.</h2>
      <p className='mt-5'>
        Go back to the <Link href="/login" className='text-primary'>Login Page</Link>
      </p>
    </div>
  );
}
