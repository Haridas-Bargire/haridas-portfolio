export default function ProjectCard({ project }) {
  return (
    <article className="project">
      <header className="project__head">
        <h3>{project.title}</h3>
        <p className="project__meta">
          {[project.period, project.status].filter(Boolean).join(", ")}
        </p>
      </header>

      <ul className="bullets">
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <ul className="chips project__stack" aria-label="Technologies used">
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </article>
  );
}
