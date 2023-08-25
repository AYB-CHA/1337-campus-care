"use client";

import Button from "@/components/Button";
import Tag from "./Tag";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/DropDown";
export default function FilterBar() {
  return (
    <div className="flex gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="flat" icon={<ChevronDown size={15} />}>
            Sort By
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-60" side="right" sideOffset={5}>
          <DropdownMenuLabel>Sort by</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value="date">
            <DropdownMenuRadioItem value="date">
              Date (Ascending )
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="date-rev">
              Date (Descending)
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="w-px bg-gray-100"></div>
      <Tag variant="success">Fixed</Tag>
      <Tag variant="warning">On it</Tag>
      <Tag variant="danger">Wont fix</Tag>
      <Tag variant="risk">Duplicate</Tag>
      <Tag variant="other">Irrelevant</Tag>
    </div>
  );
}
