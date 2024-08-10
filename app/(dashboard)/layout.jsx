import { createClient } from "../../utils/supabase/server";
import NavBar from "../components/NavBar";

export default async function DashboardLayout({ children }) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="help_desk_app">
      <NavBar user={user} />
      <div className="content">{children}</div>
      <footer className="footer">@moudy2024</footer>
    </div>
  );
}
