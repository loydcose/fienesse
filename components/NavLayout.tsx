import Link from "next/link";
import React, { ReactNode } from "react";

export default function NavLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <nav className="bg-amber-200/20 font-sans">
        <div className="w-11/12 mx-auto max-w-6xl px-4 py-6 flex gap-2 justify-between items-center">
          <Link href={"/"}>
            <h1 className="font-medium font-serif text-xl md:text-2xl">
              Fienesse
            </h1>
          </Link>
          <ul className="flex items-center gap-5">
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/price"}>Pricing</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      {children}
    </div>
  );
}
