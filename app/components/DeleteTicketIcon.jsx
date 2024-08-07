"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { handleDeleteTicket } from "./helpers/helpers";
import { TbTrashX, TbTrashFilled } from "react-icons/tb";

export default function DeleteTicketButton({ id }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    const { error } = await handleDeleteTicket({ id });

    if (error) {
      console.error("Error deleting ticket:", error);
      setIsLoading(false);
    } else {
      router.refresh();
    }
  };

  return (
    <TbTrashFilled
      className="ml-5 icon"
      onClick={handleDelete}
      disabled={isLoading}
    />
  );
}
