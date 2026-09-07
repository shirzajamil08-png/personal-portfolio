import { navLinks, profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home" className="nav__logo">
            <span className="nav__logo-mark">{profile.initials}</span>
            <span className="nav__logo-text">
              shirza<span className="accent">.dev</span>
            </span>
          </a>
          <p>MERN stack developer building fast, responsive and slightly over-engineered web experiences.</p>
        </div>

        <nav className="footer__links">
          <h4>Quick Links</h4>
          <ul>
            {navLinks
              .filter((l) => l.id !== "resume")
              .map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`}>{l.label}</a>
                </li>
              ))}
          </ul>
        </nav>

        <div className="footer__social">
          <h4>Find Me</h4>
          <ul className="socials">
            <li><a href={profile.socials.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href={`mailto:${profile.email}`}>Email</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, Node.js, Express, MongoDB &amp; Three.js.
        </p>
        <a href="#home" className="to-top" aria-label="Back to top">↑</a>
      </div>
    </footer>
  );
}
