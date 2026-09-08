import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { aboutCards, profile } from "../data/portfolio";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal className="section__head" as="header">
          <p className="section__eyebrow">01 — About</p>
          <h2 className="section__title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section__sub">A quick look at who I am, what I&rsquo;m aiming for, and how I work.</p>
        </Reveal>

        <div className="about">
          <Reveal className="about__main">
            <p>
              I&rsquo;m a MERN stack web developer who enjoys the whole journey of a product — sketching the
              interface, modelling the data, writing the API, and polishing the last animation. I started with
              plain <strong>HTML, CSS and JavaScript</strong>, fell for <strong>React</strong>, and now spend
              most of my time building full-stack apps with <strong>Node.js, Express and MongoDB</strong>.
            </p>
            <p>
              I care about the details users actually feel: fast loads, layouts that don&rsquo;t break on a
              phone, forms that explain themselves, and interfaces that are pleasant to look at. Outside of
              client work I&rsquo;m usually rebuilding something I&rsquo;ve already built — just better.
            </p>

            <div className="about__grid">
              {aboutCards.map((card) => (
                <TiltCard key={card.title} className="glass" max={8} as="article">
                  <span className="about__icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </TiltCard>
              ))}
            </div>
          </Reveal>

          <Reveal className="about__side" as="aside" delay={0.1}>
            <div className="glass about__facts">
              <h3>Quick facts</h3>
              <dl>
                <div>
                  <dt>Name</dt>
                  <dd>{profile.name}</dd>
                </div>
                <div>
                  <dt>Role</dt>
                  <dd>{profile.role}</dd>
                </div>
                <div>
                  <dt>Studying</dt>
                  <dd>MS Artificial Intelligence</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>{profile.location}</dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>Freelance</dt>
                  <dd>
                    <span className="badge">Available</span>
                  </dd>
                </div>
              </dl>
              <a href={profile.resume} className="btn btn--primary btn--block" download>
                Download CV
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
