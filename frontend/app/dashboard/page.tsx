import { Building, MonitorDot, Search, Store } from "lucide-react";
import { authGuard } from "../auth/utils";
import Header from "./(components)/Header";
import { StartLink } from "./(components)/StartLink";

export default function dashboard() {
  return (
    <>
      <Header />
      <div className="grow bg-green-50 flex">
        <div className="container pt-16">
          <h1 className="text-center text-2xl mb-16">Welcome, Ayoub Chaaoui</h1>
          <div className="grid grid-cols-4 gap-6">
            <StartLink title="Staff infra">
              <MonitorDot size={40} />
            </StartLink>
            <StartLink title="Staff building">
              <Building size={40} />
            </StartLink>
            <StartLink title="Lost and found">
              <Search size={40} />
            </StartLink>
            <StartLink title="Marketplace">
              <Store size={40} />
            </StartLink>
          </div>
        </div>
      </div>
    </>
  );
}
