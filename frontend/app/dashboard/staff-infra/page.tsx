"use client";
import Header from "../(components)/Header";
import Card from "./(components)/Card";
import MessagesBox from "./(components)/MessagesBox";
import FilterBar from "./(components)/FilterBar";
import NewTicket from "./(components)/NewTicket";
import Input from "@/components/Input";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "@/lib/axios";
import useSWR from "swr";
import { debounce } from "lodash";

export type TicketType = {
  id: string;
  description: string;
  image: string | null;
  title: string;
  created_at: string;
  User: {
    username: string;
    id: string;
  };
};

type TicketRequestType = {
  endpoint: string;
  sort: string;
  search: string;
};

async function getTickets(options: TicketRequestType) {
  let response = await axios.get<TicketType[]>(
    options.endpoint + "?sort=" + options.sort + "&search=" + options.search
  );
  return response.data;
}

export default function page() {
  const [sort, setSort] = useState<string>("desc");
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: tickets,
    isLoading,
    mutate,
  } = useSWR(
    { endpoint: "staff-infra", sort, search: searchQuery },
    getTickets
  );

  return (
    <div className="flex flex-col grow overflow-hidden">
      <div>
        <Header />
        <div className="bg-white border-b">
          <div className="p-8">
            <div className="flex justify-between border-b pb-4 mb-4">
              <div className="w-64">
                <Input
                  placeholder="Search"
                  type="text"
                  onChange={debounce((e: ChangeEvent<HTMLInputElement>) => {
                    setSearchQuery(e.target.value);
                  }, 300)}
                />
              </div>
              <div>
                <NewTicket mutator={mutate} />
              </div>
            </div>
            <FilterBar sort={sort} setSort={setSort} />
          </div>
        </div>
      </div>
      <div className="flex grow overflow-hidden">
        {isLoading ? (
          <div className="min-h-full w-full flex justify-center items-center">
            <span>Loading...</span>
          </div>
        ) : (
          <div className="grow p-8 overflow-auto h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-6 gap-6">
              {tickets?.map((ticket, index) => (
                <Card key={index} data={ticket} mutator={mutate} />
              ))}
            </div>
          </div>
        )}
        <MessagesBox />
      </div>
    </div>
  );
}
