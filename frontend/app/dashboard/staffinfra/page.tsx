import Button from "@/components/Button";
import Header from "../(components)/Header";
import { ChevronDown, MessageSquare, Send } from "lucide-react";
import Link from "next/link";
import Card from "./(components)/Card";
import Tag from "./(components)/tag";
import MessagesBox from "./(components)/MessagesBox";

export default function page() {
  return (
    <div className="flex flex-col grow overflow-hidden">
      <div>
        <Header />
        <div className="bg-white">
          <div className="p-8">
            <div className="flex justify-between border-b pb-4 mb-4">
              <div className="w-64">
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block p-2.5 w-full"
                  type="text"
                  placeholder="Search"
                />
              </div>
              <div>
                <Button>Add new ticket</Button>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="flat" icon={<ChevronDown size={15} />}>
                Sort By
              </Button>
              <div className="w-px bg-gray-100"></div>
              <Tag variant="success">Fixed</Tag>
              <Tag variant="warning">On it</Tag>
              <Tag variant="danger">Wont fix</Tag>
              <Tag variant="risk">Duplicate</Tag>
              <Tag variant="other">Irrelevant</Tag>
            </div>
          </div>
        </div>
      </div>
      <div className="flex grow overflow-hidden">
        <div className="h-full grow p-8 overflow-auto">
          <div className="grid grid-cols-4 gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="h-full w-1/4 overflow-hidden flex flex-col border-l">
          <MessagesBox />
        </div>
      </div>
    </div>
  );
}
