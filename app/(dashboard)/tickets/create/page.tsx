import { Suspense } from 'react';

import CreateForm from './CreateForm';
import ContentHeader from '@components/content/ContentHeader';
import Loading from '../../loading';

export default function CreateTicket() {
  return (
    <main>
      <ContentHeader headerTitle="Create Ticket" href="/tickets" nextPage="Ticket List" />
      <Suspense fallback={<Loading />}>
        <CreateForm />
      </Suspense>
    </main>
  );
}
