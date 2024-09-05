import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div className='flex flex-col items-center justify-center'>   
      <h2 className="text-3xl">There was a problem.</h2>
      <div className='w-1/3 text-center mt-5'>
        <p className='mb-5'>This might be due to the limitation of supabase&apos;s free tier regarding the number of users that can be created at one time.</p>
        <p className='mb-5'>An alernative way to use the application is to use the generic login located at the bottom of the login page.</p>
      </div>
      <p className='mt-5'>
        Go back to the <Link href="/login" className='text-primary'>Login Page</Link>
      </p>
    </div>
  );
}
