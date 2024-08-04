import Link from "next/link";

async function getTickets() {
  // imitate the delay of a real API call
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch("http://localhost:3000/api/tickets", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    next: {
      revalidate: 0, // use "0" to opt out of using cache
    },
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const tickets = await res.json();
  return tickets;
}

export default async function TicketList() {
  const tickets = await getTickets();

  if (!tickets || tickets.length === 0) {
    return <h3 className="text-center">There are no opened tickets</h3>;
  }

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.description.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
