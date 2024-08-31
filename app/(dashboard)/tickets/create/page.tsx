import { Suspense } from 'react';
import { formActions } from '@/constants';

import ContentHeader from '@dashboard/_components/header/ContentHeader';
import Loading from '../loading';
import TicketForm from '@dashboard/_components/form/TicketForm';

export default function CreateTicket() {
  const { create } = formActions;
  const crumbs = [{name:"Ticket List", href:"/tickets"}, {name:"Create Ticket", href:""}];
  return (
    <>
      <header>
        <ContentHeader crumbs={crumbs} />
      </header>
      <article className='flex flex-col items-center'>
        <Suspense fallback={<Loading />}>
          <TicketForm ticket={null} actionType={create} />
        </Suspense>
      </article>
    </>
  );
}
