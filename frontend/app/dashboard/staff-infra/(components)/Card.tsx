import Tag from "./Tag";
import { TicketType } from "../page";
import moment from "moment";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/DropDown";
import axios from "@/lib/axios";

type CardProps = {
  data: TicketType;
  mutator: any;
};

export default function Card({ data, mutator }: CardProps) {
  async function handelDeleteClick() {
    try {
      await axios.delete("staff-infra/" + data.id);
      mutator();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="cursor-pointer relative group">
      <div className="absolute left-full -translate-x-1/2 -translate-y-1/2 p-2 bg-white border rounded-full z-50 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <MoreVertical size={10} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuLabel>Ticket options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem disabled>
              <Pencil className="mr-2 h-4 w-4" />
              <span>Edit status</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              // todo: disable this button if the user id dose not match the ticket owner id.
              // disabled={}
              className="cursor-pointer text-red-500"
              onClick={handelDeleteClick}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="border rounded bg-white text-sm overflow-hidden">
        <div className="border-b p-4">
          <div className="flex justify-between items-center mb-2">
            <span className=" font-medium">@{data.User.username}</span>
            <span className="text-gray-500 text-xs">
              Posted {moment(data.created_at).fromNow()}
            </span>
          </div>
          <h3 className="text-gray-600">{data.title}.</h3>
        </div>
        <div className="aspect-[14/9] relative overflow-hidden">
          <img
            className="h-full w-full absolute object-cover group-hover:scale-105 transition-transform"
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
          <div className="px-2 bg-gradient-to-t bg-grad from-50% from-zinc-950/40 to-transparent absolute bottom-0 w-full h-16 flex items-center text-sm text-gray-100">
            {data.description}.
          </div>
        </div>
      </div>
    </div>
  );
}
