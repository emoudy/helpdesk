import { createClient } from "utils/supabase/server";
import DeleteTicketIcon from "../../../components/DeleteTicketIcon";
import EditTicketIcon from "../../../components/EditTicketIcon";
import { getTicket } from "./helper/helper";

export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const supabase = createClient();
  const { data: ticket, error } = await supabase
    .from("Tickets")
    .select()
    .eq("id", params.id)
    .single();

  return {
    title: `Helpdesk | ${ticket?.title || "Ticket not found"}`,
    description: "Generated by create next app",
  };
}

const TicketDetails = async ({ params }) => {
  const ticket = await getTicket(params.id);

  const supabase = createClient();
  const { data } = await supabase.auth.getSession();

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <div className="card_status">
          <div className={`pill ${ticket.priority}`}>{ticket.priority}</div>
          {data.session.user.email === ticket.user_email ? (
            <div>
              <DeleteTicketIcon id={ticket.id} />
              <EditTicketIcon id={ticket.id} />
            </div>
          ) : null}
        </div>
        <div href={`/tickets/${ticket.id}`} className="card_summary">
          <h3>{ticket.title}</h3>
          <small>By: {ticket.user_email}</small>
          <div className="mt-5">
            <div dangerouslySetInnerHTML={{ __html: ticket.description }}></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TicketDetails;
