import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";

/**
 * Wrapping the TicketList component in a Suspense component allows for the
 * <nav> to be shown while the TicketList component is loading
 */
export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets Page</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
      </nav>

      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
