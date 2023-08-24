import { PropsWithChildren } from "react";
import { authGuard } from "../auth/utils";
import Sidebar from "./(components)/SideBar";

export default async function RootLayout({ children }: PropsWithChildren) {
  authGuard();
  return (
    <div className="h-screen flex">
      <Sidebar />
      <section className="h-screen overflow-auto flex flex-col w-full">
        {children}
      </section>
    </div>
  );
}
