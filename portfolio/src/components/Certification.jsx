import Section from "./Section.jsx";
import Icon from "./Icons.jsx";
import { certifications } from "../data/portfolio.js";
import "../styles/certification.css";

export default function Certification() {
  return (
    <Section id="certification" title="Certification" icon="award" tone="tint">
      <ul className="certs">
        {certifications.map((cert) => (
          <li key={cert.title} className="cert">
            <Icon name="award" size={28} className="cert__icon" />
            <div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
