"use client";
import React, { useState } from "react";
import HamburgerIcon from "@/app/SVG/HamburgerIcon";

const MobileNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <button
        className={`md:hidden w-10 h-10 flex items-center justify-center ${mobileMenuOpen ? 'hidden' : ''}`}
        id="mobileMenuButton"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
      >
        <HamburgerIcon />
      </button>

      <nav className={`flex flex-col fixed space-y-1 md:hidden top-4 right-2 z-50 bg-tertiary-background ${!mobileMenuOpen ? 'hidden' : ''}`}>
        <a
          href="#about"
          className="px-5 py-3 text-sm font-medium hover:text-primary transition-colors border border-white text-primary-color"
          onClick={() => setMobileMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#education"
          className="px-5 py-3 text-sm font-medium hover:text-primary transition-colors border border-white text-primary-color"
          onClick={() => setMobileMenuOpen(false)}
        >
          Education
        </a>
        <a
          href="#projects"
          className="px-5 py-3 text-sm font-medium hover:text-primary transition-colors border border-white text-primary-color"
          onClick={() => setMobileMenuOpen(false)}
        >
          Projects
        </a>
        <a
          href="#skills"
          className="px-5 py-3 text-sm font-medium hover:text-primary transition-colors border border-white text-primary-color"
          onClick={() => setMobileMenuOpen(false)}
        >
          Skills
        </a>
      </nav>
    </>
  );
};

export default MobileNav;
