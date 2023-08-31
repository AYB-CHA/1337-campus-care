import axios from "@/lib/axios";
import { User } from "./types";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";

export async function getUser(endpoint: string) {
  let response = await axios.get<User>(endpoint);
  return response.data;
}

export function logOut() {
  Cookies.remove("access_token");
  redirect("/");
}
