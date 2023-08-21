import { authGuard } from "../auth/utils";

export default function dashboard() {
  authGuard();
  return <div>dashboard</div>;
}
