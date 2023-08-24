"use client";

import { User } from "@/app/auth/types";
import Logo from "./Logo";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import useSWR from "swr";
import axios from "@/lib/axios";
import { AxiosError } from "axios";

async function getUser(endpoint: string) {
  let response = await axios.get<User>(endpoint);
  return response.data;
}

function logOut() {
  Cookies.remove("access_token");
  redirect("/");
}

export default function Header() {
  let { data, error } = useSWR<User, AxiosError>("/auth/me", getUser);

  if (error?.response?.status == 401) logOut();
  else if (error) redirect("/error");

  return (
    <div className="px-4 py-2 flex justify-between border-b items-center">
      <Logo />
      <div>
        <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <img
            className="aspect-square h-full w-full cursor-pointer"
            src={data?.avatar}
          />
        </div>
      </div>
    </div>
  );
}
