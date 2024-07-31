import { createClient } from "../../utils/supabase/server";
import NavBar from "../components/NavBar";

export default async function DashboardLayout({ children }) {
  const supabase = createClient();
  const { data } = await supabase.auth.api.getUser();

  return (
    <>
      <NavBar user_email={data ? data.user.email : null} />
      {children}
    </>
  );
}
