import Section from "./Section.jsx";
import Icon from "./Icons.jsx";
import { skillGroups } from "../data/portfolio.js";
import "../styles/skills.css";

export default function Skills() {
  return (
    <Section id="skills" title="Technical skills" icon="code" tone="tint">
      <div className="skills">
        {skillGroups.map((group) => (
          <article key={group.title} className="skill-group">
            <h3>
              <Icon name={group.icon} size={20} />
              {group.title}
            </h3>
            <ul className="chips">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
