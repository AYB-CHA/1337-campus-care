import Tag from "./Tag";
import { TicketType } from "../page";

type CardProps = {
  data: TicketType;
};

export default function Card({ data }: CardProps) {
  return (
    <div className="cursor-pointer">
      <div className="border rounded bg-white text-sm overflow-hidden hover:-translate-y-1 transition-transform">
        <div className="border-b p-4">
          <div className="flex justify-between items-center mb-2">
            <span className=" font-medium">@{data.User.username}</span>
            <span className="text-gray-500 text-xs">Posted 42 minus ago</span>
          </div>
          <h3 className="text-gray-600">{data.title}.</h3>
        </div>
        <div className="aspect-[14/9] relative">
          <img
            className="h-full w-full absolute"
            src={
              data.image
                ? process.env["NEXT_PUBLIC_BACKEND_BASEURL"] +
                  "/upload/" +
                  data.image
                : "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
            }
          />
          <div className="absolute top-2 left-2">
            <Tag variant="success">New</Tag>
          </div>
          <div className="px-2 bg-gradient-to-t from-white to-transparent absolute bottom-0 w-full h-16 flex items-center text-sm text-gray-700">
            {data.description}.
          </div>
        </div>
      </div>
    </div>
  );
}
