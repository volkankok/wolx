import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation";

export default function Root() {
  return (
    <>
      <MainNavigation />
      <main className="pt-24">
        <Outlet />
      </main>
    </>
  );
}
