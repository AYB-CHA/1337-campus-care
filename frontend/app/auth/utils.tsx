import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { User } from "./types";
// import { serverAxios } from "@/lib/axios";
import { isAxiosError } from "axios";

export function gustGuard() {
  const cookieStore = cookies();
  if (!cookieStore.has("access_token")) return;
  redirect("/dashboard");
}

// export async function authGuard() {
//   try {
//     let user = await serverAxios.get<User>("auth/me");
//     return user;
//   } catch (error) {
//     if (isAxiosError(error) && error.response?.status == 401)
//       redirect("/auth/logout");
//     throw error;
//   }
// }
