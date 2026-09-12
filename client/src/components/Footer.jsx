import { navLinks, profile } from "../data/portfolio";
import Logo from "./Logo";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__brand">
          <a href="#home" className="nav__logo">
            <Logo size={34} />
            <span className="nav__word">shirza<span className="accent">.dev</span></span>
          </a>
          <p>
            MERN stack developer building responsive web applications, from the database up to the
            last detail of the interface.
          </p>
        </div>

        <nav className="footer__links">
          <h4>Quick links</h4>
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

        <div>
          <h4>Find me</h4>
          <ul className="socials">
            <li><a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /></a></li>
            <li><a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a></li>
            <li><a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a></li>
          </ul>
        </div>
      </div>

      <div className="wrap footer__bottom">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Built with React, Node.js, Express and MongoDB.
        </p>
      </div>
    </footer>
  );
}
