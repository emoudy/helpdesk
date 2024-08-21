import Link from 'next/link';

interface Breadcrumb {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  crumbs: Breadcrumb[];
}

export default function Breadcrumbs({ crumbs }: BreadcrumbsProps) { 
  return (crumbs?.length || 0) > 0 ? (
    <div className="flex flex-row border-b-2 border-primary mb-5 p-3">
      {crumbs.map((crumb, index) => (
        <div key={crumb.name} className="flex flex-row justify-center items-center">
          <Link href={crumb.href}>
            {index < crumbs.length - 1 && <span className='text-primary font-bold'>{crumb.name}</span>}
          </Link>
          &nbsp;
          {index < crumbs.length - 1 && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>    
          )}
          {index === crumbs.length - 1 && <span className='text-gray-700'>{crumb.name}</span>}
        </div>
      ))}
    </div>
  ) : <div />;
}
