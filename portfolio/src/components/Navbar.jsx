import { useState } from "react";
import Icon from "./Icons.jsx";
import { navLinks, profile } from "../data/portfolio.js";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand">
          {profile.name}
        </a>

        <button
          className="navbar__toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="main-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <Icon name={open ? "close" : "menu"} size={26} />
        </button>

        <nav id="main-menu" className={`navbar__menu ${open ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
