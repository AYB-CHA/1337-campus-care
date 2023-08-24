import {
  ArrowLeftFromLine,
  Building,
  LayoutDashboard,
  Menu,
  MonitorDot,
  Search,
  Store,
  UserX,
} from "lucide-react";
import MenuButton from "./MenuButton";

export default async function Sidebar() {
  return (
    <aside className="h-100 p-3 bg-gray-900 flex flex-col">
      <div>
        <MenuButton tooltip="Expand Menu">
          <Menu size={15} />
        </MenuButton>
      </div>
      <div className="grow flex flex-col justify-center gap-4">
        <MenuButton active tooltip="Dashboard">
          <LayoutDashboard size={15} />
        </MenuButton>
        <MenuButton tooltip="Staff infra">
          <MonitorDot size={15} />
        </MenuButton>
        <MenuButton tooltip="Staff building">
          <Building size={15} />
        </MenuButton>
        <MenuButton tooltip="Lost and Found">
          <Search size={15} />
        </MenuButton>
        <MenuButton tooltip="Marketplace">
          <Store size={15} />
        </MenuButton>
      </div>
      <div>
        <MenuButton tooltip="Logout">
          <UserX size={15} />
        </MenuButton>
      </div>
    </aside>
  );
}
