"use client";
import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";

function Footer() {
  const [loadingIndex, setLoadingIndex] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const links = [
    { label: "Rent Now", href: "/Explore" },
    { label: "Favourites", href: "/favourites" },
    { label: "Home", href: "/" },
    { label: "Toyota", href: "/brands/toyota" },
    { label: "BMW", href: "/brands/bmw" },
    { label: "Mercedes", href: "/brands/mercedes" },
    { label: "Hyundai", href: "/brands/hyundai" },
    { label: "Mazda", href: "/brands/mazda" },
    { label: "Chevrolet", href: "/brands/chevrolet" },
    { label: "Ford", href: "/brands/ford" },
    { label: "Honda", href: "/brands/honda" },
  ];

  const handleLinkClick = (e, idx, href) => {
    e.preventDefault();
    setLoadingIndex(idx);
    setTimeout(() => {
      window.location.href = href;
    }, 1000);
  };

  const year = new Date().getFullYear();
  return (
    <div className="px-2 md:px-10 h-auto">
      <div className="bg-[#dcf3c9] h-full w-full rounded-4xl p-4 flex flex-col items-start justify-between gap-5 px-10">
        <div className="w-full flex items-center justify-between  ">
          <span>
          <span className="text-2xl md:text-4xl text-gray-800 font-bold">C</span>
          <span className="text-2xl md:text-4xl text-gray-400 font-bold">r.</span>
          </span>
          <span className="text-xs text-gray-500 mt-2 ml-4">&copy; All rights reserved {year}</span>
        </div>
        <div className="w-full h-0.5 mt-1 mb-4 bg-gradient-to-r from-transparent via-gray-400/70 to-transparent rounded-full" />

        <div className="grid grid-cols-2 md:flex md:flex-row items-start md:items-center md:justify-center w-full gap-2 flex-wrap">
          {links.map((link, idx) => (
            <span
              key={link.label}
              onClick={e => handleLinkClick(e, idx, link.href)}
              className="text-gray-800 text-xs px-2 py-1 rounded cursor-pointer hover:underline transition flex items-center gap-1"
              style={{ minWidth: 60 }}
            >
              {mounted && loadingIndex === idx ? (
                <>
                  <LoaderCircle className="animate-spin w-3 h-3" />
                  Loading...
                </>
              ) : (
                link.label
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;