import ScrollReveal from "./ScrollReveal";

// Images live in public/images/. BASE_URL makes the path work even though
// your site runs under /Portfolio/ (Vite "base" setting).
const img = (name) => `${import.meta.env.BASE_URL}images/${name}`;

// Fill in real links. Leave a link as "" and its button is hidden,
// so you never show a button that leads to a broken page.
const projects = [
  {
    number: "01",
    title: "Portfolio Website",
    category: "Frontend Development",
    description:
      "A responsive personal portfolio built with React, designed to showcase my frontend development skills, projects and experience.",
    technologies: ["React", "JavaScript", "CSS", "Vite"],
    image: img("project1.png"),
    github: "", // e.g. "https://github.com/your-username/CodeOrbit_Portfolio"
    live: "",   // e.g. "https://your-portfolio.vercel.app"
  },
  {
    number: "02",
    title: "Maison Vela Handbags",
    category: "Responsive Landing Page",
    description:
      "A luxury handbag landing page with a collections showcase, a filterable shop and a slide-in shopping bag, built with Flexbox and Grid.",
    technologies: ["React", "Vite", "CSS Grid", "Flexbox"],
    image: img("project2.png"),
    github: "", // e.g. "https://github.com/your-username/CodeOrbit_HandbagUniverse"
    live: "",
  },
  {
    number: "03",
    title: "Task Dashboard",
    category: "Interactive To-Do App",
    description:
      "A to-do dashboard where tasks can be added, completed and deleted. Tasks are saved in localStorage, with live counters for active and overdue tasks.",
    technologies: ["React", "JavaScript", "localStorage", "CSS"],
    image: img("project3.png"),
    github: "", // e.g. "https://github.com/your-username/CodeOrbit_TodoApp"
    live: "",
  },
];

function Projects() {
  return (
    <ScrollReveal>
      <section className="projects section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>
            My Projects<span>.</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className="project-card project-reveal"
              key={project.number}
              style={{ "--delay": `${index * 150}ms` }}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    // If the image file is missing, hide the broken icon
                    e.currentTarget.style.display = "none";
                  }}
                />
                <span className="project-number">{project.number}</span>
              </div>

              <div className="project-info">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="technology-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                {(project.github || project.live) && (
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        GitHub ↗
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Projects;