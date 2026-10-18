import Icon from "./Icons.jsx";
import { profile } from "../data/portfolio.js";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__layout">
        <div className="hero__content">
          <p className="hero__role">{profile.role}</p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#contact">
              <Icon name="mail" size={18} /> Contact me
            </a>
            <a className="btn btn--ghost" href={profile.resume} download>
              <Icon name="download" size={18} /> Download resume
            </a>
          </div>

          <div className="hero__social">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Icon name="github" size={24} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Icon name="linkedin" size={24} />
            </a>
          </div>
        </div>

        <div className="hero__photo">
          <img src={profile.photo} alt={`Portrait of ${profile.name}`} width="450" height="465" />
        </div>
      </div>
    </section>
  );
}
