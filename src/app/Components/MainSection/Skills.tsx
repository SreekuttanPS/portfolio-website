import React from "react";

function Skills() {
  return (
    <section className="py-20 px-6 reveal bg-tertiary-background" id="skills">
      <div className="container mx-auto">
        <h2 className="section-title text-3xl font-bold text-primary-color">
          Skills
        </h2>
        <div className="space-y-12">
          <div>
            <div className="flex flex-wrap gap-3">
              <div
                className="px-4 py-2 rounded-lg flex items-center gap-2 transition-transform hover:transform hover:scale-105  w-auto theme-switch-color"
              >
                <span>JavaScript</span>
              </div>
              <div
                className="px-4 py-2 rounded-lg flex items-center gap-2 transition-transform hover:transform hover:scale-105 w-auto theme-switch-color"
              >
                <span>TypeScript</span>
              </div>
              <div
                className="px-4 py-2 rounded-lg flex items-center gap-2 transition-transform hover:transform hover:scale-105 w-auto theme-switch-color"
              >
                <span>React</span>
              </div>
              <div
                className="px-4 py-2 rounded-lg flex items-center gap-2 transition-transform hover:transform hover:scale-105 w-auto theme-switch-color"
              >
                <span>Next.js</span>
              </div>
              <div
                className="px-4 py-2 rounded-lg flex items-center gap-2 transition-transform hover:transform hover:scale-105 w-auto theme-switch-color"
              >
                <span>HTML5</span>
              </div>
              <div
                className="px-4 py-2 rounded-lg flex items-center gap-2 transition-transform hover:transform hover:scale-105 w-auto theme-switch-color"
              >
                <span>CSS</span>
              </div>
              <div
                className="px-4 py-2 rounded-lg flex items-center gap-2 transition-transform hover:transform hover:scale-105 w-auto theme-switch-color"
              >
                <span>Responsive Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
