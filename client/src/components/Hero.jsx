import Reveal from "./Reveal";
import useTypewriter from "../hooks/useTypewriter";
import { profile, roles } from "../data/portfolio";

/* Copy on the left, the grayscale portrait on the right, standing on the page
   background. */
export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section className="hero" id="home">
      <div className="wrap hero__inner">
        <div className="hero__copy">
          <Reveal>
            <p className="hero__status">
              <span className="dot-live" /> Available for internships and freelance work
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="display hero__title">Hi, I&rsquo;m {profile.name}</h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="hero__role">
              {typed}
              <span className="caret">|</span>
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="lead hero__lead">
              I build full-stack web apps with React, Node and MongoDB.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="hero__cta">
              <a href="#projects" className="btn btn--dark">View My Work</a>
              <a href="#contact" className="btn btn--ghost">Let&rsquo;s Talk</a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="hero__media">
          <img src="/assets/hero-portrait.webp" alt={profile.name} width="1200" height="1490" />
        </Reveal>
      </div>
    </section>
  );
}
