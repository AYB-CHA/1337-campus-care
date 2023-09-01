import Button from "@/components/Button";
import { MessageType } from "./MessagesBox";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/HoverCard";

export default function OtherMessage({
  messages,
}: {
  messages: MessageType[];
}) {
  return (
    <div className="flex">
      <div className="pt-2">
        <HoverCard>
          <HoverCardTrigger>
            <div className="flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
              <img
                className="aspect-square h-full w-full cursor-pointer"
                src={messages[0]?.Sender.avatar}
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent align="start" className="text-sm">
            <div className="flex gap-3 mb-3">
              <div className="flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <img
                  className="aspect-square h-full w-full cursor-pointer"
                  src={messages[0]?.Sender.avatar}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium mt-px mb-1">
                  @{messages[0]?.Sender.username}
                </span>
                <div className="text-xs">
                  <span>Ayoub</span> <span>Chaaoui</span>
                </div>
              </div>
            </div>
            <div>
              <Button className="w-full text-xs py-1" variant="flat">
                Send a DM
              </Button>
            </div>
          </HoverCardContent>
        </HoverCard>
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
