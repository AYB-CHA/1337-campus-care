import Button from "@/components/Button";
import Header from "../(components)/Header";
import { ChevronDown, MessageSquare, Send } from "lucide-react";
import Link from "next/link";
import Card from "./(components)/Card";

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
              <button className="inline-flex items-center rounded border px-2.5 py-0.5 text-xs font-semibold border-b-2 border-b-green-500">
                Fixed
              </button>
              <button className="inline-flex items-center rounded border px-2.5 py-0.5 text-xs font-semibold border-b-2 border-b-yellow-500">
                On it
              </button>
              <button className="inline-flex items-center rounded border px-2.5 py-0.5 text-xs font-semibold border-b-2 border-b-red-500">
                Wont fix
              </button>
              <button className="inline-flex items-center rounded border px-2.5 py-0.5 text-xs font-semibold border-b-2 border-b-red-400">
                Duplicate
              </button>
              <button className="inline-flex items-center rounded border px-2.5 py-0.5 text-xs font-semibold border-b-2 border-b-gray-500">
                Irrelevant
              </button>
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
          <div className="bg-white border-y p-2 py-3 text-gray-700 flex items-center">
            <MessageSquare className="mr-4" size={20} />
            Double boost activation
          </div>
          <div className="grow border-b p-4 flex flex-col gap-4 bg-white">
            <div className="flex">
              <div className="pt-2">
                <div className="flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <img
                    className="aspect-square h-full w-full cursor-pointer"
                    src="https://avatars.githubusercontent.com/u/124599?v=4"
                  />
                </div>
              </div>
              <div className="ml-2">
                <div className="mb-1">
                  <span className="text-xs text-gray-600">@achaaoui</span>
                </div>
                <div className="flex gap-2 flex-col text-sm">
                  <div className="bg-white rounded-lg rounded-tl-none border p-2 w-fit">
                    Hello 1337
                  </div>
                  <div className="bg-white rounded-lg rounded-tl-none border p-2  w-fit">
                    this is another message that is going to be
                  </div>
                  <div className="bg-white rounded-lg rounded-tl-none border p-2  w-fit">
                    followed by this long message that is just a filling, let's
                    see how its going to do on line break. well that looks cool
                    tbh.
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex">
              <div className="mr-2 text-end">
                <div className="mb-1">
                  <span className="text-xs text-gray-600">@achaaoui</span>
                </div>
                <div className="flex gap-2 flex-col text-sm items-end">
                  <div className="bg-primary-500 text-white rounded-lg rounded-tr-none border p-2 w-fit">
                    Hello 1337
                  </div>
                  <div className="bg-primary-500 text-white rounded-lg rounded-tr-none border p-2  w-fit">
                    this is another message that is going to be
                  </div>
                  <div className="bg-primary-500 text-white rounded-lg rounded-tr-none border p-2  w-fit">
                    followed by this long message that is just a filling, let's
                    see how its going to do on line break. well that looks cool
                    tbh.
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <div className="flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <img
                    className="aspect-square h-full w-full cursor-pointer"
                    src="https://avatars.githubusercontent.com/u/124599?v=4"
                  />
                </div>
              </div>
            </div>
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
        </div>
      </div>
    </div>
  );
}
