import Button from "@/components/Button";
import Header from "../(components)/Header";
import { ChevronDown } from "lucide-react";

export default function page() {
  return (
    <div className="flex flex-col grow">
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
              <button className="inline-flex items-center rounded border px-2.5 py-0.5 text-xs font-semibold">
                Fixed
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex grow">
        <div className="h-full grow p-8">
          <div className="grid grid-cols-6 gap-6">
            <div className="border rounded bg-white text-sm overflow-hidden">
              <div className="border-b p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className=" font-medium">@achaaoui</span>
                  <span className="text-gray-500 text-xs">
                    Posted 42 minus ago
                  </span>
                </div>
                <h3 className="text-gray-600">Double boost activation.</h3>
              </div>
              <div className="aspect-[14/9] relative">
                <img
                  className="h-full w-full absolute"
                  src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
                />
                <div className="px-2 bg-gradient-to-t from-white to-transparent absolute bottom-0 w-full h-16 flex items-center">
                  Hehehe
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-0 bg-slate-500">ok</div>
      </div>
    </div>
  );
}
