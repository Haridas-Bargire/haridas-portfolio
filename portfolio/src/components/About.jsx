import Section from "./Section.jsx";
import { profile } from "../data/portfolio.js";
import "../styles/about.css";

export default function About() {
  return (
    <Section id="about" title="About" icon="person">
      <div className="about">
        <div className="about__text">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className="about__facts">
          {profile.highlights.map((item) => (
            <li key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
