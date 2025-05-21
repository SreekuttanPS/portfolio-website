import React from "react";

import PixelCard from "@/app/Components/Animations/PixelCard";
import ShinyText from "@/app/Components/Animations/ShinyText";

function Projects() {
  return (
    <section className="py-20 px-6 reveal bg-secondary-background" id="projects">
      <div className="container mx-auto">
        <h2 className="section-title text-3xl font-bold text-primary-color">Projects</h2>
        <div className="grid grid-flow-col gap-4">
          <div className="w-fit hover:scale-102 hover:transform hover:shadow-lg rounded-3xl">
            <PixelCard>
              <div className="absolute">
                <h3 className="text-xl font-semibold mb-2 text-white text-center mt-2 text-primary-color">
                  Movie Hunter
                </h3>
                <p className="text-sm text-gray-300 mb-4 text-center text-primary-color">
                  A simple website to search and know the details and ratings of movies.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <span className="px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-200 rounded-full text-primary-color">
                    React
                  </span>
                  <span className="px-2 py-1 text-xs font-medium bg-green-500/20 text-green-200 rounded-full text-primary-color">
                    Redux
                  </span>
                  <span className="px-2 py-1 text-xs font-medium bg-purple-500/20 text-purple-200 rounded-full text-primary-color">
                    Redux Persist
                  </span>
                </div>
                <div className="container px-14">
                  <div className="flex flex-col items-center justify-center gap-4 mb-4">
                    <a
                      href="https://master--deft-rabanadas-fe321a.netlify.app/"
                      className="shiny-button hover:transform hover:scale-105 w-full text-center"
                      aria-label="View Demo"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <ShinyText text="View Demo" speed={3} className="custom-class" />
                    </a>
                    <a
                      href="https://github.com/SreekuttanPS/omdb-movie-search"
                      className="shiny-button hover:transform hover:scale-105 w-full text-center"
                      aria-label="View Code"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <ShinyText text="GitHub" speed={3} className="custom-class" />
                    </a>
                  </div>
                </div>
              </div>
            </PixelCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
