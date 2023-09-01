import { Send } from "lucide-react";
import React, { useState } from "react";

export default function MessageInput({
  handleFormSubmit,
}: {
  handleFormSubmit: (message: string) => void;
}) {
  let [message, setMessage] = useState("");
  return (
    <form
      className="bg-white p-2 flex items-center gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        handleFormSubmit(message.trim());
        setMessage("");
      }}
    >
      <input
        className="text-sm w-full focus:outline-none"
        type="text"
        placeholder="Type..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="rounded-full flex justify-center items-center h-10 w-10 text-gray-500 cursor-pointer hover:text-primary">
        <Send size={18} />
      </div>
    </form>
  );
}
