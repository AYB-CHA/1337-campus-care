"use client";
import Header from "../(components)/Header";
import Card from "./(components)/Card";
import MessagesBox from "./(components)/MessagesBox";
import FilterBar from "./(components)/FilterBar";
import NewTicket from "./(components)/NewTicket";
import Input from "@/components/Input";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import useSWR from "swr";

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

async function getTickets(endpoint: string) {
  let response = await axios.get<TicketType[]>(endpoint);
  return response.data;
}

export default function page() {
  const { data: tickets, isLoading } = useSWR("/staff-infra", getTickets);

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
          <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-6 gap-6">
            {isLoading
              ? "loading..."
              : tickets?.map((ticket, index) => (
                  <Card key={index} data={ticket} />
                ))}
          </div>
        </div>
        <MessagesBox />
      </div>
    </div>
  );
}
