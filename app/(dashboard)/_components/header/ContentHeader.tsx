import Breadcrumbs from './Breadcrumbs';
import DashboardHeader from './DashboardHeader';

interface Breadcrumb {
  name: string;
  href: string;
}

interface ContentHeaderProps {
  crumbs: Breadcrumb[],
}

export default function ContentHeader({ crumbs }: ContentHeaderProps) {
  const lastCrumb = crumbs[crumbs.length-1];
  return (
    <>
      <DashboardHeader headerTitle={lastCrumb.name} />
      <Breadcrumbs crumbs={crumbs} />
    </>
  )
}
