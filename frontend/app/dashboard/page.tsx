import { Building, MonitorDot, Search, Store } from "lucide-react";
import Header from "./(components)/Header";
import { StartLink } from "./(components)/StartLink";
import Link from "next/link";

export default function dashboard() {
  return (
    <>
      <Header />
      <div className="grow flex">
        <div className="container pt-16">
          <h1 className="text-center text-2xl mb-16">Welcome, Ayoub Chaaoui</h1>
          <div className="grid grid-cols-4 gap-6">
            <Link href="/dashboard/staff-infra">
              <StartLink title="Staff infra">
                <MonitorDot size={40} />
              </StartLink>
            </Link>
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
