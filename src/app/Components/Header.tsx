import ThemeSwitch from "@/app/Components/ThemeSwitch";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-opacity-95 backdrop-blur-sm z-50 transition-colors duration-300 bg-primary-background">
      <div className="container mx-auto px-1 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-['Pacifico'] text-primary text-primary-color">
          Sreekuttan
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-sm font-medium hover:text-primary transition-colors text-primary-color"
          >
            About
          </a>
          <a
            href="#education"
            className="text-sm font-medium hover:text-primary transition-colors text-primary-color"
          >
            Education
          </a>
          <a
            href="#projects"
            className="text-sm font-medium hover:text-primary transition-colors text-primary-color"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-sm font-medium hover:text-primary transition-colors text-primary-color"
          >
            Skills
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeSwitch />
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
