"use client";

import Image from "next/image";
import Link from "next/link";
import { useDarkModeContext } from "@/contexts/darkmode-context";

export default function Home() {
  const { darkMode, setDarkMode } = useDarkModeContext();

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <main className={darkMode ? "dark" : ""}>
      <div className="bg-white text-black dark:bg-black dark:text-white">
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
          {<div>{darkMode ? "Dark mode On" : "Dark mode Off"}</div>}
          <div>
            <button onClick={handleToggleDarkMode}>Toggle Darkmode</button>
          </div>
        </div>
      </div>
    </main>
  );
}
