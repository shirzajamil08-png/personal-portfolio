import { useEffect, useState } from "react";
import { navLinks } from "../data/portfolio";
import Logo from "./Logo";

export default function Navbar() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* stop the page scrolling behind the open mobile menu */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* scroll spy: the active link is the last section (navLinks are in page
     order) whose top has passed a line a third of the way down the screen.
     Sections are looked up on every scroll rather than once on mount, so a
     re-rendered section can't leave the spy watching a node that's gone. */
  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight / 3;
      let current = navLinks[0].id;
      for (const { id } of navLinks) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      /* the last section can be too short to ever reach the line */
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      setActive(atBottom ? navLinks[navLinks.length - 1].id : current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${stuck ? "is-stuck" : ""}`}>
      <div className="wrap nav__inner">
        <a href="#home" className="nav__logo" aria-label="Home">
          <Logo size={34} id="logo-nav" />
          <span className="nav__word">shirza<span className="accent">.dev</span></span>
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

        <a href="#contact" className="btn btn--dark btn--sm nav__cta">Hire Me</a>

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
