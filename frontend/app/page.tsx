import Button from "@/components/Button";
import { gustGuard } from "./auth/utils";

export default async function Home() {
  gustGuard();
  return <a href={`${process.env["BACKEND_BASEURL"]}auth/login`}>Login</a>;
}
