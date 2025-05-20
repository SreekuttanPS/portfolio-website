const HomeSection = () => (
  <section
    className="relative min-h-screen flex items-center py-20 px-6"
    id="hero"
    style={{
      backgroundImage:
        "url('https://readdy.ai/api/search-image?query=minimalist%20abstract%20background%20with%20subtle%20geometric%20shapes%2C%20clean%20design%2C%20soft%20gradients%2C%20professional%20portfolio%20aesthetic%2C%20light%20and%20airy%20feel%2C%20elegant%20and%20sophisticated&width=1920&height=1080&seq=1&orientation=landscape')",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/50 dark:from-black/90 dark:to-black/50"></div>
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
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border font-medium !rounded-button whitespace-nowrap transition-transform hover:transform hover:scale-105 text-primary-color border-color"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HomeSection;
