import React from "react";

function Projects() {
  return (
    <section
      className="py-20 px-6 reveal bg-secondary-background"
      id="projects"
    >
      <div className="container mx-auto">
        <h2 className="section-title text-3xl font-bold text-primary-color">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="project-card">
            {/* <img
              src="https://readdy.ai/api/search-image?query=modern%20fintech%20dashboard%20interface%20with%20clean%20design%2C%20data%20visualizations%2C%20financial%20charts%2C%20user-friendly%20layout%2C%20professional%20color%20scheme%2C%20showing%20investment%20portfolio%20tracking&width=600&height=400&seq=3&orientation=landscape"
              alt="FinTrack Dashboard"
              className="w-full h-64 object-cover object-top"
            /> */}
            <div className="project-overlay"></div>
            <h3 className="text-xl font-semibold mb-2 text-white">FinTrack Dashboard</h3>
            <p className="text-sm text-gray-300 mb-4 text-center">
              A comprehensive financial tracking application with real-time data visualization and
              predictive analytics.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <span className="px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-200 rounded-full">
                React
              </span>
              <span className="px-2 py-1 text-xs font-medium bg-green-500/20 text-green-200 rounded-full">
                Node.js
              </span>
              <span className="px-2 py-1 text-xs font-medium bg-purple-500/20 text-purple-200 rounded-full">
                D3.js
              </span>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="px-4 py-2 bg-white/10 text-white text-sm font-medium !rounded-button whitespace-nowrap hover:bg-white/20 transition-colors"
              >
                View Demo
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-primary text-white text-sm font-medium !rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors"
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
