import Link from 'next/link';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import DashboardHeader from './DashboardHeader';

interface ContentHeaderProps {
  headerTitle: string,
  href: string,
  nextPage: string,
}

export default function ContentHeader({ headerTitle, href, nextPage}: ContentHeaderProps) {
  return (
    <>
      <DashboardHeader headerTitle={headerTitle} />
      <Link href={href} className='hidden md:block'>
        <button className="small-btn btn-primary md:mb-20 flex items-center">
          <MdOutlineKeyboardBackspace />
          &nbsp; Back to {nextPage}
        </button>
      </Link>
    </>
  )
}
