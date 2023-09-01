import { MessageType } from "./MessagesBox";

export default function OtherMessage({
  messages,
}: {
  messages: MessageType[];
}) {
  return (
    <div className="flex">
      <div className="pt-2">
        <div className="flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <img
            className="aspect-square h-full w-full cursor-pointer"
            src={messages[0]?.Sender.avatar}
          />
        </div>
      </div>
      <div className="ml-2">
        <div className="mb-1">
          <span className="text-xs text-gray-600">
            @{messages[0]?.Sender.username}
          </span>
        </div>
        <div className="flex gap-1 flex-col text-sm">
          {messages.map((message: MessageType, id: number) => {
            return (
              <div
                className="bg-white rounded-lg rounded-tl-none border p-2 w-fit"
                key={id}
              >
                {message.message}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
