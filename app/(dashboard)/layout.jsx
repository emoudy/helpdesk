import { createClient } from "../../utils/supabase/server";
import NavBar from "../components/NavBar";

export default async function DashboardLayout({ children }) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <NavBar user={user} />
      {children}
    </>
  );
}
