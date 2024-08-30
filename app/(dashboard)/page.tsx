import Link from 'next/link';
import ContentHeader from '@dashboard/_components/header/ContentHeader';

export default function Home() {
  return (
    <div>
      <ContentHeader crumbs={[{name:"Welcome to the HelpDesk!", href:""}]} />
      <article className="mb-14">
        {/* <p className='mb-3'>This project that was started as a tutorial, <em>NextJS Materclass</em>, by NetNinja. The code for the tutorial can be found in NetNinja&apos;s <Link className="text-primary" target="_blank" href="https://github.com/iamshaunjp/nextjs-masterclass">GitHub</Link>.  
          The primary motivator for doing the tutorial was to learn NextJS with AppRouter structure.  After completing the tutorial, I have continued to add features and redesigned the application.</p> */}

        <p className='my-5'>The application has changed notably from the tutorial. Here are some additional features I implemented:</p>
        {/* <ul>
          <li>Switched from npm to pnpm</li>
          <li>Implemented Server-Side Auth using @supabase/supabase-js @supabase/ssr</li>
          <li>Added the ability to save ticket formatting by adding Quill to the project</li>
          <li>Updated the UI design to have a side navigation and be responsive</li>
          <li>Added quality of life items such as navigation crumbs and filtering for the tickets</li>
          <li>Implemented Typescript and SASS</li>
          <li>Added the feature to delete and edit ticket</li>
          <li>Deployed the application using Vercel</li>
          <li>Restructured the flow of the application</li>
        </ul> */}
      </article>

      <section>
        <h3 className='my-5 text-center'>Click the button to start exploring this application!</h3>
        <div className="my-8 flex justify-center">
          <Link href="/tickets">
            <button type="button" className="large-btn btn-primary">View Tickets</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
