import Section from "./Section.jsx";
import { education } from "../data/portfolio.js";
import "../styles/education.css";

export default function Education() {
  return (
    <Section id="education" title="Education" icon="school">
      <div className="education">
        {education.map((item) => (
          <article key={item.level} className="education__item">
            <div>
              <h3>{item.level}</h3>
              <p className="education__school">{item.institution}</p>
            </div>
            <div className="education__side">
              <p className="education__score">{item.score}</p>
              <p className="education__period">{item.period}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
