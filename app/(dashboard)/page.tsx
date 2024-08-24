import Link from 'next/link';
import ContentHeader from '@dashboard/_components/header/ContentHeader';

export default function Home() {
  return (
    <div>
      <ContentHeader crumbs={[{name:"Dashboard", href:""}]} />
      <section>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
          repellendus tempore, exercitationem odit, quasi doloremque possimus
          recusandae alias sequi totam soluta natus iure eius, obcaecati sint
          dolores blanditiis aspernatur quo officia iusto ut. Et, aliquid sed
          voluptates iste cum totam, facere explicabo, fugit suscipit ratione
          aspernatur consequuntur ex mollitia quaerat?
        </p>
      </section>

      <div className="my-8 flex justify-center">
        <Link href="/tickets">
          <button type="button" className="large-btn btn-primary">View Tickets</button>
        </Link>
      </div>

      <article>
        <h1>Company Updates</h1>
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
