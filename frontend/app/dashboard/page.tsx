import { authGuard } from "../auth/utils";
import Header from "./(components)/Header";

export default function dashboard() {
  return (
    <>
      <Header />
      <div className="grow bg-green-50"></div>
    </>
  );
}
