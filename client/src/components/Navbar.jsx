import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/portfolio";

export default function Navbar() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  /* sticky style after a little scroll */
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* scroll spy: highlight the section in the middle of the viewport */
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    if (!sections.length) return;

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, []);

  return (
    <header className={`nav ${stuck ? "is-stuck" : ""}`}>
      <div className="container nav__inner">
        <a href="#home" className="nav__logo" aria-label="Home">
          <span className="nav__logo-mark">{profile.initials}</span>
          <span className="nav__logo-text">
            shirza<span className="accent">.dev</span>
          </span>
        </a>

        <nav>
          <ul className={`nav__links ${open ? "is-open" : ""}`} id="navLinks">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav__link ${active === link.id ? "is-active" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`nav__toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
