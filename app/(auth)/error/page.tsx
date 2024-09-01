import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center w-1/3">   
      <h2 className="text-3xl">There was a problem.</h2>
      <section className='w-96 mt-5'>
        <p className='mb-5'>
          This application is using the free version of supabase and only allows one user to be created per day.  To overcome this limitation, feel free to browser the application with the following credentials:
        </p>
        <ul>
          <li>email: peek@helpdesk.fake</li>
          <li>password: 123456789</li>
        </ul>
      </section>
      <p className='mt-5'>
        Go back to the <Link href="/login" className='text-primary'>Login Page</Link>
      </p>
    </div>
  );
}
