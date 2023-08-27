"use client";
import { MessageSquare, Send } from "lucide-react";
import OtherMessage from "./OtherMessage";
import MyMessage from "./MyMessage";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/Sheet";
import Button from "@/components/Button";
import { Label } from "@radix-ui/react-dropdown-menu";

export default function MessagesBox() {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button>Open</Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-full sm:w-[700px] p-0">
          <div className="flex flex-col h-full">
            <div className="p-4 text-gray-900 border-b flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-primary-500 mr-2"></div>
                <span>Double boost activation</span>
              </div>
            </div>
            <div className="grow border-b p-4 flex flex-col gap-4 bg-gray-50 overflow-auto">
              <OtherMessage />
              <MyMessage />
            </div>
            <div className="bg-white p-2 flex items-center gap-2">
              <input
                className="text-sm w-full focus:outline-none"
                type="text"
                placeholder="Type..."
              />
              <div className="rounded-full flex justify-center items-center h-10 w-10 text-gray-500 cursor-pointer hover:text-primary">
                <Send size={18} />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
