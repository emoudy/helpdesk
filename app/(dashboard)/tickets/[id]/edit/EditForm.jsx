"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import ReactQuillEditor from "../../../../components/ReactQuillEditor";

export default function EditForm({ ticket }) {
  const router = useRouter();

  const [id, setId] = useState(ticket.id);
  const [title, setTitle] = useState(ticket.title);
  const [description, setDescription] = useState(ticket.description);
  const [priority, setPriority] = useState(ticket.priority);
  const [isLoading, setIsLoading] = useState(false);

  if (!ticket) {
    return <h3 className="text-center">Ticket was not found</h3>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const updatedTicket = {
      id,
      title,
      description,
      priority,
    };

    const res = await fetch(`http://localhost:3000/api/tickets/${ticket.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTicket),
    });

    const response = await res.json();

    if (response.error) {
      console.error("Error updating ticket:", response.error);
    }

    if (response.data) {
      router.push("/tickets");
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button className="btn-primary" disabled={isLoading}>
        {isLoading ? "Saving..." : "Save"}
      </button>
      <div>
        <h3>Title</h3>
        <input
          required
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div>
        <h3>Priority</h3>
        <select onChange={(e) => setPriority(e.target.value)} value={priority}>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </div>
      <div>
        <h3>Description</h3>
        <ReactQuillEditor
          description={description}
          setDescription={setDescription}
        />
      </div>
    </form>
  );
}
