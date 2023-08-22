// import { serverAxios } from "@/lib/axios";
import { isAxiosError } from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";
// import { authGuard } from "../auth/utils";

export default async function RootLayout({ children }: PropsWithChildren) {
  // let user = await authGuard();

  return <div>{/* hey {user.data.username} {children} */}</div>;
}
