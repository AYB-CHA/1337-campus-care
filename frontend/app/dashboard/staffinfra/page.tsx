import Button from "@/components/Button";
import Header from "../(components)/Header";
import Card from "./(components)/Card";
import MessagesBox from "./(components)/MessagesBox";
import FilterBar from "./(components)/FilterBar";
import NewTicket from "./(components)/NewTicket";
import Input from "@/components/Input";

export default function page() {
  return (
    <div className="flex flex-col grow overflow-hidden">
      <div>
        <Header />
        <div className="bg-white border-b">
          <div className="p-8">
            <div className="flex justify-between border-b pb-4 mb-4">
              <div className="w-64">
                <Input placeholder="Search" type="text" />
              </div>
              <div>
                <NewTicket />
              </div>
            </div>
            <FilterBar />
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
