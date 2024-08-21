import Link from 'next/link';

interface Breadcrumb {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  crumbs: Breadcrumb[];
}

export default function Breadcrumbs({ crumbs }: BreadcrumbsProps) { 
  return (crumbs?.length || 0) > 1 ? (
    <div className="flex flex-row mb-5 md:mb-10">
      {crumbs.map((crumb, index) => (
        <div key={crumb.name} className="flex flex-row justify-center items-center">
          {index < crumbs.length - 1 && (
            <>
              <Link href={crumb.href} className='mr-2'>
                <span className='text-primary font-bold'>{crumb.name}</span>
              </Link>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#CC9A33" className="size-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>    
            </>
          )}
          {index === crumbs.length - 1 && <div className='text-gray-700'>{crumb.name}</div>}
        </div>
      ))}
    </div>
  ) : <div className='h-6'/>;
}
