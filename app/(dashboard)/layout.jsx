import { createClient } from '../../utils/supabase/server';
import NavBar from '../components/NavBar/NavBar';

export default async function DashboardLayout({ children }) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="help_desk_app bg-white h-screen grid grid-rows-1 grid-cols-5">
      <header className="p-4 bg-primary text-white row-span-2 col-span-1 flex flex-col h-full">
        <NavBar user={user} />
      </header>
      <main className="m-10 col-span-4 overflow-y-auto">{children}</main>
      <footer className="col-span-4 text-center text-sm py-2 text-primary text-opacity-50 self-end">
        @moudy2024
      </footer>
    </div>
  );
}
