import dynamic from "next/dynamic";
const ThemeSwitch = dynamic(() => import("@/app/Components/ThemeSwitch"));

import MobileNav from "./MobileNav";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-opacity-95 backdrop-blur-sm z-50 transition-colors duration-300 bg-primary-background">
      <div className="mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-['Pacifico'] text-primary text-primary-color">
          Sreekuttan
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-sm font-medium hover:text-primary transition-colors text-primary-color"
            aria-label="About"
          >
            About
          </a>
          <a
            href="#education"
            className="text-sm font-medium hover:text-primary transition-colors text-primary-color"
            aria-label="Education"
          >
            Education
          </a>
          <a
            href="#projects"
            className="text-sm font-medium hover:text-primary transition-colors text-primary-color"
            aria-label="Projects"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-sm font-medium hover:text-primary transition-colors text-primary-color"
            aria-label="Skills"
          >
            Skills
          </a>
        </nav>
        <div className="flex items-center space-x-4 pt-2">
          <ThemeSwitch />
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
