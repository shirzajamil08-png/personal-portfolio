import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import useTypewriter from "../hooks/useTypewriter";
import useCountUp from "../hooks/useCountUp";
import { profile, roles, stats } from "../data/portfolio";
import { GithubIcon, LinkedinIcon, MailIcon, XIcon, DownloadIcon } from "./icons";

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
  const [scrolled, setScrolled] = useState(false);

  /* the scroll hint fades away as soon as the visitor takes the hint */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <div className="container hero__inner">
        <Reveal className="hero__copy">
          <p className="hero__eyebrow">
            <span className="pulse" /> Available for internships &amp; freelance work
          </p>

          <h1 className="hero__title">
            Hi, I&rsquo;m <span className="gradient-text">{profile.name}</span>
          </h1>

          <h2 className="hero__role">
            <span className="typed">{typed}</span>
            <span className="caret" aria-hidden="true">|</span>
          </h2>

          <p className="hero__bio">
            I build fast, responsive web applications with the <strong>MERN stack</strong>:
            MongoDB, Express.js, React and Node.js. From REST APIs and database models to
            clean, mobile-friendly interfaces in React and Bootstrap, I like owning a product
            end to end.
          </p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              View My Work <span aria-hidden="true">→</span>
            </a>
            <a href={profile.resume} className="btn btn--ghost" download>
              <DownloadIcon /> Download Resume
            </a>
            <a href="#contact" className="btn btn--link">Let&rsquo;s talk</a>
          </div>

          <ul className="hero__stats" ref={statsRef}>
            {stats.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} active={counting} />
            ))}
          </ul>

          <ul className="socials hero__socials">
            <li>
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon />
              </a>
            </li>
            <li>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <MailIcon />
              </a>
            </li>
            <li>
              <a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="X">
                <XIcon />
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal className="hero__visual" delay={0.15}>
          <TiltCard className="hero__card" max={14}>
            <div className="hero__card-glow" aria-hidden="true" />

            <div className="hero__avatar">
              {/* Swap for your own photo: <img src="/assets/profile.jpg" alt={profile.name} /> */}
              <svg viewBox="0 0 200 200" role="img" aria-label="Profile illustration">
                <defs>
                  <linearGradient id="av" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#7c5cff" />
                    <stop offset="55%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#f472b6" />
                  </linearGradient>
                  {/* keeps the figure inside the circle, the way a photo would be cropped */}
                  <clipPath id="avClip">
                    <circle cx="100" cy="100" r="96" />
                  </clipPath>
                </defs>

                <circle cx="100" cy="100" r="96" fill="url(#av)" opacity=".18" />

                <g clipPath="url(#avClip)">
                  <circle cx="100" cy="80" r="32" fill="url(#av)" />
                  <ellipse cx="100" cy="190" rx="58" ry="52" fill="url(#av)" />
                </g>
              </svg>
            </div>

            <p className="hero__card-name">{profile.name}</p>
            <p className="hero__card-role">{profile.role}</p>

            <div className="hero__card-tags">
              <span>MongoDB</span>
              <span>Express</span>
              <span>React</span>
              <span>Node.js</span>
            </div>

            <div className="hero__code" aria-hidden="true">
              <pre>
                <code>
                  <span className="c-key">const</span> dev = {"{"}
                  {"\n  stack: "}<span className="c-str">&apos;MERN&apos;</span>,
                  {"\n  loves: ["}<span className="c-str">&apos;clean UI&apos;</span>, <span className="c-str">&apos;APIs&apos;</span>{"],"}
                  {"\n  status: "}<span className="c-str">&apos;shipping&apos;</span>
                  {"\n}"}
                </code>
              </pre>
            </div>
          </TiltCard>
        </Reveal>
      </div>

      {/* pinned to the viewport, not to the end of the hero, so it is visible
          straight away however tall the hero content grows */}
      <a
        href="#about"
        className={`scroll-hint ${scrolled ? "is-gone" : ""}`}
        aria-label="Scroll to About"
      >
        <span className="mouse"><span /></span>
        <em>scroll</em>
      </a>
    </section>
  );
}
