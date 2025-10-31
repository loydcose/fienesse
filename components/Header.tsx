"use client"

import { Menu } from "lucide-react";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-[58px] bg-[#F5EEE6] z-50">
        <div className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-4 md:px-6">
          <div className="flex-1" />
          <div className="flex items-center justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F7fa38736e667400c9d40b6448b1875cb%2F50ebc3e606fa41988504638884499e14?format=webp&width=800"
              alt="Maison de Fienesse"
              className="h-[50px] object-contain"
            />
          </div>
          <div className="flex-1 flex justify-end">
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
