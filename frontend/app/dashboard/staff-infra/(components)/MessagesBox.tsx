"use client";
import OtherMessage from "./OtherMessage";
import MyMessage from "./MyMessage";
import { Sheet, SheetContent } from "@/components/Sheet";

import { useEffect, useState } from "react";
import useSWR from "swr";
import { getUser } from "@/app/auth/auth-functions";
import { User } from "@/app/auth/types";

import { Socket, io } from "socket.io-client";
import MessageInput from "./MessageInput";

export type MessageType = {
  id: string;
  sender_id: string;
  ticket_id: string;
  message: string;
  created_at: Date;
  updated_at: Date;
};

type PropsType = {
  state?: boolean;
  ticketId: string;
  socket: Socket;
  onChange: (state: boolean) => void;
};

function formatMessages(messages: MessageType[]) {
  let messagesGroup: MessageType[][] = [];
  let group: MessageType[] = [];

  messages.forEach((message) => {
    if (!group.length) {
      group.push(message);
    } else {
      if (group[0].sender_id == message.sender_id) group.push(message);
      else {
        messagesGroup.push(group);
        group = [];
        group.push(message);
      }
    }
  });
  if (group.length != 0) messagesGroup.push(group);
  return messagesGroup;
}

export default function MessagesBox({
  state = false,
  onChange,
  ticketId,
  socket,
}: PropsType) {
  const [messages, setMessages] = useState<MessageType[]>([]);
  let { data } = useSWR<User>("/auth/me", getUser);

  function initMessages(data: MessageType[]) {
    setMessages(data);
  }
  function newMessage(data: MessageType) {
    if (data.ticket_id === ticketId)
      setMessages((oldData) => [...oldData, data]);
  }

  useEffect(() => {
    socket.emit("thread init", { ticket_id: ticketId });

    socket.on("thread init", initMessages);
    socket.on("new thread message", newMessage);

    return () => {
      socket.off("thread init", initMessages);
      socket.off("new thread message", initMessages);
    };
  }, []);

  function handleFormSubmit(message: string) {
    if (message.length)
      socket.emit("new thread message", { ticket_id: ticketId, message });
  }

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
              {formatMessages(messages).map(
                (messagesOfUser: MessageType[], id: number) => {
                  return messagesOfUser[0]?.sender_id === data?.id ? (
                    <MyMessage messages={messagesOfUser} key={id} />
                  ) : (
                    <OtherMessage messages={messagesOfUser} key={id} />
                  );
                }
              )}
            </div>
            <MessageInput handleFormSubmit={handleFormSubmit} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
