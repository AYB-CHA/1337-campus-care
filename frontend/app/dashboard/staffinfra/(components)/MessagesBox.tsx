import { MessageSquare, Send } from "lucide-react";
import OtherMessage from "./OtherMessage";
import MyMessage from "./MyMessage";

export default function MessagesBox() {
  return (
    <>
      <div className="bg-white border-y p-2 py-3 text-gray-700 flex items-center">
        <MessageSquare className="mr-4" size={20} />
        Double boost activation
      </div>
      <div className="grow border-b p-4 flex flex-col gap-4 bg-white">
        <OtherMessage />
        <MyMessage />
        <MyMessage />
        <OtherMessage />
      </div>
      <div className="bg-white flex items-center p-2 gap-2">
        <input
          className="p-2 w-full focus:outline-none"
          type="text"
          placeholder="Type..."
        />
        <div className="rounded-full flex justify-center items-center h-10 w-10 text-gray-500">
          <Send size={18} />
        </div>
      </div>
    </>
  );
}
