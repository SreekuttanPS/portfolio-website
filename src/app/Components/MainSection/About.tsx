import React, { Fragment } from "react";

import FuzzyText from "@/app/Components/Animations/FuzzyText";

import GithubIcon from "@/app/SVG/GithubIcon";
import InstagramIcon from "@/app/SVG/InstagramIcon";
import LinkedInIcon from "@/app/SVG/LinkedInIcon";

function About() {
  return (
    <section className="py-20 px-6 reveal bg-secondary-background" id="about">
      <div className="container mx-auto">
        <h2 className="section-title text-3xl font-bold text-primary-color">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-lg  h-full">
            <div className="flex flex-col items-center justify-center h-full bg-primary-background py-7 gap-2">
              <FuzzyText baseIntensity={0.1} hoverIntensity={0.5} enableHover fontSize={45}>
                CREATIVE
              </FuzzyText>
              <FuzzyText baseIntensity={0.1} hoverIntensity={0.7} enableHover fontSize={20}>
                thinking
              </FuzzyText>
            </div>
          </div>

          <div>
            <p className="text-lg mb-6 leading-relaxed text-primary-color">
              {"I am a dedicated Frontend Developer with 3 years of hands-on experience building responsive, accessible, and performant web applications using React and modern JavaScript frameworks. Based in Kochi, India, I hold a Bachelor's degree in Computer Science, which has provided me with a strong foundation in both software engineering principles and problem-solving."
                .split(" ")
                .map((word, idx) => (
                  <Fragment key={idx}>
                    <span className="inline-block transition-transform hover:scale-110 hover:transform">
                      {word}
                    </span>
                    &nbsp;
                  </Fragment>
                ))}
            </p>

            <p className="text-lg mb-6 leading-relaxed text-primary-color">
              {"My focus lies in crafting seamless user experiences through clean, maintainable code and thoughtful UI design. I take pride in writing scalable, performance, and collaborating closely with teams to deliver high-quality products."
                .split(" ")
                .map((word, idx) => (
                  <Fragment key={idx}>
                    <span className="inline-block transition-transform hover:scale-110 hover:transform">
                      {word}
                    </span>
                    &nbsp;
                  </Fragment>
                ))}
            </p>

            <p className="text-lg mb-8 leading-relaxed text-primary-color">
              {"I am continuously learning and evolving to stay current with industry best practices and emerging technologies in the frontend ecosystem."
                .split(" ")
                .map((word, idx) => (
                  <Fragment key={idx}>
                    <span className="inline-block transition-transform hover:scale-110 hover:transform">
                      {word}
                    </span>
                    &nbsp;
                  </Fragment>
                ))}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/sreekuttanPS"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full transition-colors bg-primary-background hover:scale-130 hover:transform"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/sreekuttan-p-s"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full transition-colors bg-primary-background hover:scale-130 hover:transform"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://www.instagram.com/zavian_._/"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full transition-colors bg-primary-background hover:scale-130 hover:transform"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
