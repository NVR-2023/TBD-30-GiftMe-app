"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/sections/navbar/navbar";
import { useDarkmodeContext } from "@/contexts/darkmode-context";

export default function Home() {
  const { darkmode, setDarkmode } = useDarkmodeContext();

  const handleToggleDarkmode = () => {
    setDarkmode(!darkmode);
  }
  return (
    <main
      className={`transition ${
        darkmode ? "dark" : ""
      } dark:bg-black dark:text-white bg-white text-black p-4`}>
      <Navbar />
      GitftMe app under construction
      <div className="block">
        <div>
          <Link href="/register">Register</Link>
        </div>
        <div>
          <Link href="/signin">Sign in</Link>
        </div>
        <div>
          <Link href="/wishlists">Wishlists</Link>
        </div>
        <div>
          <Link href="/groups">Groups</Link>
        </div>
        <div>
          <Link href="/notifications">Notifications</Link>
        </div>

        {<div>{darkmode ? "Dark mode On" : "Dark mode Off"}</div>}
        <div>
          <button onClick={handleToggleDarkmode}>Toggle Darkmode</button>
        </div>
      </div>
    </main>
  );
}
