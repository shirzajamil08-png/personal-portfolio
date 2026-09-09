import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import useTypewriter from "../hooks/useTypewriter";
import useCountUp from "../hooks/useCountUp";
import { profile, roles, stats } from "../data/portfolio";

function Stat({ value, label, active }) {
  const n = useCountUp(value, active);
  return (
    <li>
      <strong>{n}+</strong>
      <span>{label}</span>
    </li>
  );
}

export default function Hero() {
  const typed = useTypewriter(roles);
  const statsRef = useRef(null);
  const [counting, setCounting] = useState(false);
  const [hasPhoto, setHasPhoto] = useState(true);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCounting(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero__panel">
        <Reveal>
          <div className="hero__status">
            <span className="dot-live" /> Available for internships and freelance work
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="hero__avatar">
            {hasPhoto ? (
              <img
                src="/assets/profile.jpg"
                alt={profile.name}
                onError={() => setHasPhoto(false)}
              />
            ) : (
              <span className="hero__avatar-fallback">{profile.initials}</span>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="display hero__title">
            Hi, I&rsquo;m {profile.name}
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="hero__role">
            {typed}
            <span className="caret">|</span>
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="lead hero__lead">
            I build responsive web applications with the MERN stack: MongoDB, Express.js, React and
            Node.js. From REST APIs and database models to clean, mobile-friendly interfaces.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="hero__cta">
            <a href="#projects" className="btn btn--light">View My Work</a>
            <a href={profile.resume} className="btn btn--ghost" download>Download Resume</a>
            <a href="#contact" className="btn btn--ghost">Let&rsquo;s Talk</a>
          </div>
        </Reveal>
      </div>

      <div className="wrap">
        <ul className="stats" ref={statsRef}>
          {stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} active={counting} />
          ))}
        </ul>
      </div>
    </section>
  );
}
