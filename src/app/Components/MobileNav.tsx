"use client";
import React, { useEffect, useRef, useState } from "react";
import HamburgerIcon from "@/app/SVG/HamburgerIcon";
import Link from "next/link";

const MobileNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        className={`md:hidden w-10 h-10 flex items-center justify-center ${
          mobileMenuOpen ? "hidden" : ""
        }`}
        id="mobileMenuButton"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
      >
        <HamburgerIcon />
      </button>

      <nav
        className={`flex flex-col fixed space-y-1 md:hidden top-4 right-2 z-50 bg-tertiary-background border border-white ${
          !mobileMenuOpen ? "hidden" : ""
        }`}
        aria-label="Mobile Navigation"
        ref={ref}
      >
        <Link
          href="/"
          className="px-5 py-3 text-sm font-medium hover:text-primary transition-colors text-primary-color"
          aria-label="Home"
          onClick={() => setMobileMenuOpen(false)}
        >
          Home
        </Link>
        <a
          href="#about"
          className="px-5 py-3 text-sm font-medium hover:text-primary transition-colors text-primary-color"
          onClick={() => setMobileMenuOpen(false)}
          area-label="About"
        >
          About
        </a>
        <a
          href="#education"
          className="px-5 py-3 text-sm font-medium hover:text-primary transition-colors text-primary-color"
          onClick={() => setMobileMenuOpen(false)}
          area-label="Education"
        >
          Education
        </a>
        <a
          href="#projects"
          className="px-5 py-3 text-sm font-medium hover:text-primary transition-colors text-primary-color"
          onClick={() => setMobileMenuOpen(false)}
          area-label="Projects"
        >
          Projects
        </a>
        <a
          href="#skills"
          className="px-5 py-3 text-sm font-medium hover:text-primary transition-colors text-primary-color"
          onClick={() => setMobileMenuOpen(false)}
          area-label="Skills"
        >
          Skills
        </a>
      </nav>
    </>
  );
};

export default MobileNav;
