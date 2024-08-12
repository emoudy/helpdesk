import { createClient } from '../../utils/supabase/server';
import NavBar from '../components/NavBar/NavBar';

export default async function DashboardLayout({ children }) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="help_desk_app">
      <header>
        <NavBar user={user} />
      </header>
      <main>{children}</main>
      <footer>@moudy2024</footer>
    </div>
  );
}
