import DashboardHeader from './DashboardHeader';
import Breadcrumbs from './Breadcrumbs';

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
