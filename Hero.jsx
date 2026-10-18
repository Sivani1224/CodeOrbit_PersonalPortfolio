function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-text">

        <p className="eyebrow">FRONTEND DEVELOPER</p>

        <h1>
          Sivani
          <br />
          <span>Sukamanchi.</span>
        </h1>

        <p className="hero-description">
          I build clean, responsive and interactive web experiences
          using modern frontend technologies.
        </p>

        <div className="hero-tech">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="button primary">
            View My Work
          </a>

          <a href="#contact" className="button secondary">
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;