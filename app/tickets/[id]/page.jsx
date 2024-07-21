import { notFound } from "next/navigation";

// If this value is set to 'false', it will render a 404 page for pages that haven't been pre-rendered
// Leaving this as 'True' is the default and it will try to fetch the data and create the page at runtime
export const dynamicParams = true;

export async function generateStaticParams() {
  // Get all the ids so NextJS can make a page for each ticket
  // This will speedup the application because NextJS will be able to generate all the pages at build time
  const res = await fetch("http://localhost:4000/tickets");
  const tickets = await res.json();
  const ids = tickets.map((ticket) => ({ id: ticket.id }));
  return ids;
}

async function getTicket(id) {
  const res = await fetch("http://localhost:4000/tickets/" + id, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <p>{ticket.body}</p>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
