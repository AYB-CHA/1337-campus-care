"use client";
import { MessageSquare, Send } from "lucide-react";
import OtherMessage from "./OtherMessage";
import MyMessage from "./MyMessage";
import { Sheet, SheetContent } from "@/components/Sheet";
import Cookies from "js-cookie";

import { useEffect, useState } from "react";
import useSWR from "swr";
import { getUser } from "@/app/auth/auth-functions";
import { User } from "@/app/auth/types";

import { io } from "socket.io-client";

export type MessageType = {
  id: string;
  sender_id: string;
  receiver_id: string;
  ticket_id: string;
  message: string;
  type: string;
  created_at: Date;
  updated_at: Date;
};

type PropsType = {
  state?: boolean;
  ticketId: string;
  onChange: (state: boolean) => void;
};

const socket = io("http://localhost:4000", {
  extraHeaders: {
    Authorization: "Bearer " + Cookies.get("access_token") ?? "",
  },
});

export default function MessagesBox({
  state = false,
  onChange,
  ticketId,
}: PropsType) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<MessageType[]>([]);
  let { data } = useSWR<User>("/auth/me", getUser);

  useEffect(() => {
    socket.emit("thread init", { ticket_id: ticketId });
    socket.on("thread init", (data: MessageType[]) => {
      setMessages(data);
    });
  }, []);

  function handleFormSubmit() {
    socket.emit(
      "new thread message",
      { ticket_id: ticketId, message },
      (message: MessageType) => {
        setMessages([...messages, message]);
      }
    );

    setMessage("");
  }

  let messagesGroup: MessageType[][] = [];
  let oneUserMessages: MessageType[] = [];
  let lastUserId = "";
  messages.forEach((message) => {
    if (lastUserId === message.sender_id) {
      oneUserMessages.push(message);
    } else {
      messagesGroup.push(oneUserMessages);
      oneUserMessages.length = 0;
      lastUserId = message.sender_id;
      oneUserMessages.push(message);
    }
  });

  return (
    <div>
      <Sheet open={state} onOpenChange={onChange}>
        <SheetContent className="w-full sm:max-w-full sm:w-[700px] p-0">
          <div className="flex flex-col h-full">
            <div className="p-4 text-gray-900 border-b flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-primary-500 mr-2"></div>
                <span>Double boost activation</span>
              </div>
            </div>
            <div className="grow border-b p-4 flex flex-col gap-4 bg-gray-50 overflow-auto">
              {}
              {messagesGroup.map((messages: MessageType[], id: number) => {
                return <MyMessage messages={messages} key={id} />;
              })}
            </div>
            <form
              className="bg-white p-2 flex items-center gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                handleFormSubmit();
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
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
