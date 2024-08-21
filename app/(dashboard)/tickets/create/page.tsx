import { Suspense } from 'react';

import CreateForm from './CreateForm';
import ContentHeader from '@components/content/ContentHeader';
import Loading from '../../loading';

export default function CreateTicket() {
  const crumbs = [{name:"Ticket List", href:"/tickets"}, {name:"Create Ticket", href:""}];
  return (
    <main>
      <header>
        <ContentHeader crumbs={crumbs} />
      </header>
      <main className='flex flex-col items-center'>
        <Suspense fallback={<Loading />}>
          <CreateForm />
        </Suspense>
      </main>
    </main>
  );
}
