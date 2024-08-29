interface DashboardHeaderProps {
  headerTitle: string;
};

export default function DashboardHeader({ headerTitle }:DashboardHeaderProps) {
  return (
    <h1 className="my-5">{headerTitle}</h1>
  )
}
