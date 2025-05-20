import React from "react";

function Projects() {
  return (
    <section className="py-20 px-6 reveal bg-secondary-background" id="projects">
      <div className="container mx-auto">
        <h2 className="section-title text-3xl font-bold text-primary-color">Projects</h2>

        <div className="grid grid-flow-col gap-4">
          <div className="max-w-100 bg-white/5 hover:bg-white/20 hover:shadow-lg/50 px-3 rounded-lg shadow-sm/50">
            <div className="project-overlay"></div>
            <h3 className="text-xl font-semibold mb-2 text-white text-center mt-2 text-tertiary-color">Movie Hunter</h3>
            <p className="text-sm text-gray-300 mb-4 text-center text-tertiary-color">
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
            <div className="flex justify-center gap-4 mb-4">
              <a
                href="https://master--deft-rabanadas-fe321a.netlify.app/"
                className="px-4 py-2 text-white text-sm bg-blue-500 hover:bg-blue-700 hover:shadow-lg/50 px-3 rounded-lg shadow-sm/50"
                aria-label="View Demo"
                rel="noopener noreferrer"
                target="_blank"
              >
                View Demo
              </a>
              <a
                href="https://github.com/SreekuttanPS/omdb-movie-search"
                className="px-4 py-2 text-white text-sm bg-sky-500/50 hover:bg-sky-500/70 hover:shadow-lg/50 px-3 rounded-lg shadow-sm/50"
                aria-label="View Code"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
