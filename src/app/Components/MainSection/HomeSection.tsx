const HomeSection = () => (
  <section
    className="bg-[url('/images/portfolio-image-2.webp')] bg-contain bg-no-repeat bg-cover relative min-h-screen flex items-center py-20 px-6"
    id="hero"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-white/70 to-white/70 dark:from-black/30 dark:to-black/30"></div>
    <div className="container mx-auto relative z-10">
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary-color">Sreekuttan P S</h1>
        <h2 className="text-xl md:text-2xl font-medium mb-8 text-secondary-color">
          Software Developer
        </h2>
        <p className="text-lg mb-10 leading-relaxed text-primary-color">
          I&apos;m a passionate React Developer and Frontend Web Developer who builds clean,
          responsive, and high-performance web applications. I specialize in modern JavaScript,
          React, and component-based architectures to deliver seamless user experiences.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-white font-medium !rounded-button whitespace-nowrap transition-transform hover:transform hover:scale-105"
            aria-label="View My Work"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border font-medium !rounded-button whitespace-nowrap transition-transform hover:transform hover:scale-105 text-primary-color border-color"
            aria-label="Get In Touch"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HomeSection;
