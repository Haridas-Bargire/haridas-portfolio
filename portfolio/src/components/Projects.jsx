import Section from "./Section.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/portfolio.js";
import "../styles/projects.css";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" icon="folder">
      <div className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
