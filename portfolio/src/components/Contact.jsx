import Section from "./Section.jsx";
import Icon from "./Icons.jsx";
import { profile } from "../data/portfolio.js";
import "../styles/contact.css";

const channels = [
  { icon: "mail", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: "phone", label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { icon: "linkedin", label: "LinkedIn", value: "haridas-bargire", href: profile.linkedin, external: true },
  { icon: "github", label: "GitHub", value: "Haridas-Bargire", href: profile.github, external: true },
];

export default function Contact() {
  return (
    <Section id="contact" title="Contact" icon="mail" tone="dark">
      <p className="contact__lead">
        I am open to entry-level Java full stack roles. Send me a message and I will reply.
      </p>
      <div className="contact">
        {channels.map((c) => (
          <a
            key={c.label}
            className="contact__card"
            href={c.href}
            {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            <Icon name={c.icon} size={28} />
            <span className="contact__label">{c.label}</span>
            <span className="contact__value">{c.value}</span>
          </a>
        ))}
      </div>
    </Section>
  );
}
