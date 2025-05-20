import InstagramIcon from "@/app/SVG/InstagramIcon";
import LinkedInIcon from "@/app/SVG/LinkedInIcon";
import GithubIcon from "@/app/SVG/GithubIcon";

export default function Footer() {
  const currentDate = new Date();
  const year = currentDate?.getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-color">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0 text-secondary-color">
            © {year} Sreekuttan P S. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <a
              href="https://github.com/sreekuttanPS"
              target="_blank"
              className="w-8 h-8 flex items-center justify-center rounded-full transition-colors bg-secondary-background"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/sreekuttan-p-s"
              target="_blank"
              className="w-8 h-8 flex items-center justify-center transition-colors"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://www.instagram.com/zavian_._/"
              target="_blank"
              className="w-8 h-8 flex items-center justify-center rounded-full transition-colors"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
