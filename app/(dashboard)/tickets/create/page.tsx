import { Suspense } from 'react';

import CreateForm from './CreateForm';
import ContentHeader from '@dashboard/_components/header/ContentHeader';
import Loading from '../loading';

export default function CreateTicket() {
  const crumbs = [{name:"Ticket List", href:"/tickets"}, {name:"Create Ticket", href:""}];
  return (
    <>
      <header>
        <ContentHeader crumbs={crumbs} />
      </header>
      <article className='flex flex-col items-center'>
        <Suspense fallback={<Loading />}>
          <CreateForm />
        </Suspense>
      </article>
    </>
  );
}
