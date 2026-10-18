import Section from "./Section.jsx";
import { experience } from "../data/portfolio.js";
import "../styles/experience.css";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" icon="briefcase" tone="tint">
      <div className="timeline">
        {experience.map((job) => (
          <article key={job.role + job.company} className="timeline__item">
            <header className="timeline__head">
              <h3>{job.role}</h3>
              <p className="timeline__company">{job.company}</p>
              <p className="timeline__period">{job.period}</p>
            </header>
            <ul className="bullets">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
