'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';

export default function FilterMenu({ children}) {
  const router = useRouter();
  const [ filter, setFilter ] = useState({ priority: 'all', user_email: '' });

  const handleFilterChange = useCallback(() => {
    const query = new URLSearchParams();
    if (filter.priority !== 'all') query.set('priority', filter.priority);
    if (filter.user_email.trim() !== '') query.set('user_email', filter.user_email);
    
    router.push(`/tickets?${query.toString()}`);
  }, [filter, router]);

    useEffect(() => {
      const handler = setTimeout(() => {
        handleFilterChange();
      }, 500);
  
      return () => {
        clearTimeout(handler);
      };
    }, [filter, handleFilterChange]);

  return (
    <div className='flex flex-col'>
      <h4 className='mb-4'>Filter by</h4>
      <div className='flex flex-row justify-between'>
        <div className='mr-10'>
          <input
            type="email"
            value={filter.user_email}
            onChange={(e) => setFilter({ ...filter, user_email: e.target.value})}
            placeholder="Email Search"
            aria-label="Email Search"
            className='px-3 md:w-96 bg-primary bg-opacity-10 mb-5 md:mr-10'
          />
          <select
            id="ticketPriority"
            required
            className="bg-primary px-3 w-44 text-black bg-opacity-10 mb-9"
            onChange={e => setFilter({...filter, priority: e.target.value})}
            value={filter.priority}
            aria-label="Ticket Priority"
          >
            <option className="rounded-none" value="all">any priority</option>
            <option className="rounded-none" value="low">low priority</option>
            <option className="rounded-none" value="medium">medium priority</option>
            <option className="rounded-none" value="high">high priority</option>
          </select>
        </div>
        <div className='mb-5 float-right'>
          {children}
        </div>
      </div>
    </div>
  )
}
