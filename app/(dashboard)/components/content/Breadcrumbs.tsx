import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";

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
            <IoIosArrowForward />
          )}
          {index === crumbs.length - 1 && <span className='text-gray-700'>{crumb.name}</span>}
        </div>
      ))}
    </div>
  ) : <div />;
}
