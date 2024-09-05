import Link from 'next/link';
import ContentHeader from '@dashboard/_components/header/ContentHeader';

export default function Home() {
  return (
    <div>
      <ContentHeader crumbs={[{name:"Welcome to the HelpDesk!", href:""}]} />
      <article className="mb-14">
        <p className='mb-3'>This project that was started as a tutorial, <em>NextJS Materclass</em>, by NetNinja. The code for the tutorial can be found in <Link className="text-primary" target="_blank" href="https://github.com/iamshaunjp/nextjs-masterclass">GitHub</Link>.  
          The primary motivator for doing the tutorial was to learn NextJS with AppRouter structure.  After completing the tutorial, I have continued to add features and redesigned the application.</p>

        <p className='my-5'>The application has changed notably from the tutorial. Here are some additional features I implemented:</p>
        <ul>
          <li>Switched from npm to pnpm</li>
          <li>Setting up Server-Side Auth for Next.js using @supabase/supabase-js @supabase/ssr</li>
          <li>Adding the library Quill to display the structure of the tickets</li>
          <li>Updated the UI design to have a side navigation and be responsive</li>
          <li>Added quality of life items such as navigation crumbs and filtering for the tickets</li>
          <li>Implemented Typescript and SASS</li>
          <li>Added the feature to delete and edit ticket</li>
          <li>Deployed the application using Vercel</li>
          <li>Restructured the flow of the application</li>
          <li>Added Accessibility by following the 2018: WCAG 2.1 guidelines</li>
          <li>Added fake login information to faciliate exploration of the app</li>
        </ul>
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
