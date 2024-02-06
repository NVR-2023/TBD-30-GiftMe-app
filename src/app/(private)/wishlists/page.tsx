import React, { FC } from "react";
import Navbar from "@/sections/navbar/navbar";
import Link from "next/link";

const Wishlists: FC = () => {
  return (
    <div className=" w-screen h-screen bg-blue-800">
      <div className=" h-full w-full py-3 px-3 grid grid-cols-12 grid-rows-12 gap-x-1 gap-y-1">
        <header className="bg-red-500 col-span-12 row-span-1"><Navbar/></header>
        <div className="bg-green-500 col-span-2 row-span-1">Sidebar navbar</div>
        <div className="bg-yellow-500 col-span-10 row-span-1">Content navbar</div>
        <div className="bg-orange-500 col-span-2 row-span-10 overflow-y-auto rounded-md">
          Sidebar Content Sidebar Content Sidebar Content Sidebar Content Sidebar Content Sidebar
          Content Sidebar Content Sidebar Content Sidebar Content Sidebar Content Sidebar Content
          Sidebar Content Sidebar Content Sidebar Content Sidebar Content Sidebar Content Sidebar
          Content Sidebar Content Sidebar Content Sidebar Content
        </div>
        <div className="bg-purple-500 col-span-10 row-span-10 overflow-y-auto">
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
        </div>
      </div>
    </div>
  );
};

export default Wishlists;
