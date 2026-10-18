import ScrollReveal from "./ScrollReveal";

const skills = [
  {
    number: "01",
    title: "Frontend",
    items: "React.js · JavaScript · HTML5 · CSS3"
  },
  {
    number: "02",
    title: "UI / UX",
    items: "Responsive Design · Figma · Prototyping"
  },
  {
    number: "03",
    title: "Development",
    items: "Component Design · REST APIs · Responsive Layouts"
  },
  {
    number: "04",
    title: "Tools",
    items: "Git · GitHub · VS Code · Vite"
  }
];

function Skills() {
  return (
    <ScrollReveal>
      <section className="skills section" id="skills">

        <div className="section-heading">
          <p className="eyebrow">WHAT I WORK WITH</p>
          <h2>My Skills<span>.</span></h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.number}>

              <span className="skill-number">
                {skill.number}
              </span>

              <h3>{skill.title}</h3>

              <p>{skill.items}</p>

            </div>
          ))}
        </div>

      </section>
    </ScrollReveal>
  );
}

export default Skills;