import ScrollReveal from "./ScrollReveal";

function About() {
  return (
    <ScrollReveal>
      <section className="about section" id="about">

        <div className="section-heading">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2>About Me<span>.</span></h2>
        </div>

        <div className="about-content">

          <p className="large-text">
            I'm a frontend developer interested in creating
            responsive, accessible and visually engaging
            web experiences.
          </p>

          <p>
            I enjoy transforming ideas and designs into
            functional websites using technologies such as
            React, JavaScript, HTML and CSS.
          </p>

          <p>
            I focus on clean code, responsive layouts,
            intuitive user experiences and thoughtful
            interactions.
          </p>

          <p>
            Through my frontend development internship,
            I'm building practical projects and strengthening
            my skills by working on real-world development tasks.
          </p>

          <a href="#contact" className="text-link">
            Let's connect →
          </a>

        </div>

      </section>
    </ScrollReveal>
  );
}

export default About;