import ScrollReveal from "./ScrollReveal";

const experience = [
  {
    year: "2026",
    title: "Frontend Development Intern",
    company: "CodeOrbit Tech",
    description:
      "Currently working on assigned frontend development tasks as part of a one-month virtual internship."
  },

  {
    year: "2026",
    title: "Frontend Projects",
    company: "Personal Development",
    description:
      "Built responsive web projects using React, JavaScript, HTML and CSS while exploring modern UI and UX practices."
  }
];

function Experience() {
  return (
    <ScrollReveal>

      <section
        className="experience section"
        id="experience"
      >

        <div className="section-heading">
          <p className="eyebrow">MY JOURNEY</p>
          <h2>Experience<span>.</span></h2>
        </div>

        <div className="timeline">

          {experience.map((item) => (

            <div
              className="timeline-item"
              key={item.title}
            >

              <div className="timeline-year">
                {item.year}
              </div>

              <div className="timeline-content">

                <h3>{item.title}</h3>

                <p className="company">
                  {item.company}
                </p>

                <p>
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

    </ScrollReveal>
  );
}

export default Experience;