import { MessageType } from "./MessagesBox";

export default function MyMessage({ messages }: { messages: MessageType[] }) {
  return (
    <div className="flex justify-end">
      <div className="mr-2 text-end">
        <div className="mb-1">
          <span className="text-xs text-gray-600">
            @{messages[0]?.Sender.username}
          </span>
        </div>
        <div className="flex gap-1 flex-col text-sm items-end">
          {messages.map((message, id) => {
            return (
              <div
                className="bg-primary-500 text-white rounded-lg rounded-tr-none p-2 w-fit"
                key={id}
              >
                {message.message}
              </div>
            );
          })}
        </div>
      </div>
      <div className="pt-2">
        <div className="flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <img
            className="aspect-square h-full w-full cursor-pointer"
            src={messages[0]?.Sender.avatar}
          />
        </div>
      </div>
    </div>
  );
}
