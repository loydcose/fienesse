"use client"

import { X } from "lucide-react";
import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/80">
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70 overflow-y-auto">
        <div className="min-h-screen px-8 py-12 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white hover:opacity-70"
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>

          <nav className="text-white space-y-8 mt-8">
            <div>
              <h2 className="font-lato text-xl font-bold mb-3">Menu</h2>
              <ul className="space-y-2 font-lato text-sm font-semibold">
                <li>
                  <a href="#" className="hover:opacity-70">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-70">
                    Over ons
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-70">
                    Diensten
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-70">
                    Galerie
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-lato text-xl font-bold mb-3">
                Behandelingen
              </h2>
              <ul className="space-y-2 font-lato text-sm font-semibold">
                <li>
                  <a href="#" className="hover:opacity-70">
                    Laserontharing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-70">
                    HiFu
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-70">
                    Pigmentatie
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-70">
                    Peeling
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-lato text-xl font-bold mb-3">Contact</h2>
              <ul className="space-y-2 font-lato text-sm font-semibold">
                <li>
                  <a href="tel:0471337390" className="hover:opacity-70">
                    041 33 73 90
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sofie@maisondefienesse.be"
                    className="hover:opacity-70"
                  >
                    sofie@maisondefienesse.be
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-lato text-xl font-bold mb-3">Meer info</h2>
              <ul className="space-y-2 font-lato text-sm font-semibold">
                <li>
                  <a href="#" className="hover:opacity-70">
                    Openingstijden
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-70">
                    Locatie
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-70">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
