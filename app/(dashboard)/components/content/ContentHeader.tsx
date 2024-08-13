import Link from 'next/link';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';

export default function ContentHeader({ headerTitle, href, nextPage}) {
  return (
    <nav>
      <h1 className="mb-5">{headerTitle}</h1>
      <Link href={href}>
        <button className="small-btn btn-primary mb-20 flex items-center">
          <MdOutlineKeyboardBackspace />
          &nbsp; Back to {nextPage}
        </button>
      </Link>
    </nav>
  )
}
