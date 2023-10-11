"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsPersonLinesFill } from "react-icons/bs";

export default function NavBar() {
  const currentPath = usePathname();

  const Links = [
    { label: "Dashboard", href: "/" },
    { label: "issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-3 border-b mb-5 px-5 h-14 items-center">
      <Link href={"/"}>
        <BsPersonLinesFill />
      </Link>
      <ul className="flex space-x-3">
        {Links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              link.href === currentPath ? "text-blue-400" : "text-zinc-500"
            } hover:text-zinc-500 transition-colors`}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
