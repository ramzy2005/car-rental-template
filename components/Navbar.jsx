"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="px-2 lg:px-12 sticky top-2 z-50">
      <Card className="px-10 md:p-4 md:px-40 flex flex-row items-center justify-between w-full border-0 shadow-none bg-backdrop-blur bg-white/80 backdrop-blur-md rounded-4xl">
        {/* Left: Back Arrow (only show when not on home) + Logo */}
        <div className="flex flex-row items-center gap-2">
          {!isHome && (
            <Link href="/" className="relative right-32">
              <img
                src="/left.svg"
                alt="Back to Home"
                className="size-10 cursor-pointer opacity-70 hover:opacity-90 transition duration-200 ease-in-out"
              />
            </Link>
          )}

          {/* Logo with link to home */}
          <Link href="/">
            <div className="cursor-pointer transition duration-200 ease-in-out hover:opacity-80">
              <span className="text-3xl text-gray-800 font-bold">C</span>
              <span className="text-3xl text-gray-400 font-bold">r.</span>
            </div>
          </Link>
        </div>

        {/* Center: Search Bar */}
        <div className="relative hidden w-64 mx-auto flex-1 justify-center">
          <span className="relative left-10 top-8 -translate-y-1/2">
            <img
              src="/search-ic.svg"
              alt="search"
              className="w-5 h-5 opacity-70 transition duration-200 ease-in-out hover:opacity-90"
            />
          </span>
          <Input
            type="text"
            placeholder="Search"
            className="pl-14 py-5 w-1/2 rounded-4xl bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Right: Favourites */}
        <div className="flex gap-8 items-center">
          <div className="flex flex-col items-center transition duration-200 ease-in-out hover:opacity-80 cursor-pointer">
            <img src="/fav.svg" alt="favourites" className="w-6 h-6 mb-1" />
            <span className="text-xs text-gray-700">Favourites</span>
          </div>
          <div className="flex flex-col items-center gap-1 transition duration-200 ease-in-out hover:opacity-80 cursor-pointer">
            <img src="/cart.svg" alt="cart" className="size-6" />
            <span className="text-xs text-gray-700">Favourites</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
