import ScrollReveal from "./ScrollReveal";

function Contact() {
  return (
    <ScrollReveal>

      <section className="contact section" id="contact">

        <div className="contact-box">

          <p className="eyebrow">
            HAVE A PROJECT IN MIND?
          </p>

          <h2>
            Let's create
            <br />
            something <span>beautiful.</span>
          </h2>

          <p className="contact-description">
            I'm open to frontend development opportunities,
            collaborations and interesting projects.
          </p>

          <a
            href="mailto:sal.sivani2004@gmail.com"
            className="button primary"
          >
            Get In Touch →
          </a>

          <div className="social-links">

            <a
              href="https://github.com/Sivani1224"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sal-sivani"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:sal.sivani2004@gmail.com">
              Email
            </a>

          </div>

        </div>

      </section>

    </ScrollReveal>
  );
}

export default Contact;