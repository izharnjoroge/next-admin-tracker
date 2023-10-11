import Link from "next/link";
import React from "react";
import { BsPersonLinesFill } from "react-icons/bs";

export default function NavBar() {
  const Links = [
    { label: "Dashboard", href: "/" },
    { label: "issues", href: "/Issues" },
  ];

  return (
    <nav className="flex space-x-3 border-b mb-5 px-5 h-14 items-center">
      <Link href={"/"}>
        <BsPersonLinesFill />
      </Link>
      <ul className="flex space-x-3">
        {Links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
