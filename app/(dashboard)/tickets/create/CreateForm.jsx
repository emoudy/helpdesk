"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import ReactQuillEditor from "../../../components/ReactQuillEditor";

export default function CreateForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newTicket = {
      title,
      description,
      priority,
    };

    const res = await fetch("http://localhost:3000/api/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTicket),
    });

    const response = await res.json();

    if (response.error) {
      console.error("Error adding ticket:", response.error);
    }

    if (response.data) {
      router.push("/tickets");
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button className="btn-primary" disabled={isLoading}>
        {isLoading ? "Adding..." : "Add Ticket"}
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
