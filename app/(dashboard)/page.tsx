import Link from 'next/link';
import ContentHeader from '@dashboard/_components/header/ContentHeader';

export default function Home() {
  return (
    <div>
      <ContentHeader crumbs={[{name:"Dashboard", href:""}]} />
      <article>
        <h2 className='my-5'>Welcome to the HelpDesk!</h2>
        <p className='mb-3'>This small project that was started as a tutorial of, &quote;NextJS Materclass&quote; by NetNinja. The code for the tutorial can be found in https://github.com/iamshaunjp/nextjs-masterclass.  
          The primary motivator for doing the tutorial was to learn NextJS with AppRouter structure and Tailwind.  After completing the tutorial, I have continued to add features and improve the UX design.</p>

        <h3 className='my-5'>Here are some of the major items that I implemented which were not part of the tutorial:</h3>
        <ul>
          <li>Switched from npm to pnpm</li>
          <li>Implemented Server-Side Auth using @supabase/supabase-js @supabase/ssr</li>
          <li>Added the ability to save ticket formatting by adding Quill to the project</li>
          <li>Updated the UI design to have a side bar and made it responsive</li>
          <li>Added the feature to delete and Edit ticket</li>
          <li>Added quality of life items such as crumbs for navigation and filtering for the tickets</li>
          <li>Implemented Typescript and SASS</li>
          <li>Added the feature to delete and Edit ticket</li>
          <li>Added the feature to delete and Edit ticket</li>
          <li>Deployed the application using Vercel</li>
        </ul>
      </article>

      <section>
        <h3 className='my-5 text-center'>Click the button below to get started exploring this application!</h3>
        <div className="my-8 flex justify-center">
          <Link href="/tickets">
            <button type="button" className="large-btn btn-primary">View Tickets</button>
          </Link>
        </div>
      </section>

      <article>
        <h2>Company Updates</h2>
        <section>
          <div className="mb-5">
            <h2>New member of the web dev team...</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at
              quam. Dolores omnis possimus quam soluta rerum illo laborum ullam
              pariatur molestiae, modi beatae corrupti.
            </p>
          </div>
        </section>

        <section className="mb-5">
          <h2>New website live!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at
            quam. Dolores omnis possimus quam soluta rerum illo laborum ullam
            pariatur molestiae, modi beatae corrupti, assumenda distinctio
            adipisci, cupiditate minima eum vitae? Similique dicta est facilis
            debitis, autem temporibus quo repellat illum unde id iste veritatis
            eveniet, aspernatur enim quas.
          </p>
        </section>
      </article>
    </div>
  );
}
