import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export function gustGuard() {
  const cookieStore = cookies();
  if (!cookieStore.has("access_token")) return;
  redirect("/dashboard");
}

export function authGuard() {
  const cookieStore = cookies();
  if (cookieStore.has("access_token")) return;
  redirect("/");
}
