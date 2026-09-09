import Reveal from "./Reveal";
import { aboutCards, profile } from "../data/portfolio";

export default function About() {
  return (
    <section className="band" id="about">
      <div className="wrap">
        <Reveal className="head" as="header">
          <p className="eyebrow">About</p>
          <h2 className="h2">
            A developer who likes owning<br />the whole product
          </h2>
        </Reveal>

        <div className="about">
          <Reveal className="about__text">
            <p>
              I&rsquo;m a MERN stack web developer who enjoys the whole journey of a product: sketching
              the interface, modelling the data, writing the API, and polishing the last detail. I
              started with plain <strong>HTML, CSS and JavaScript</strong>, fell for{" "}
              <strong>React</strong>, and now spend most of my time building full-stack apps with{" "}
              <strong>Node.js, Express and MongoDB</strong>.
            </p>
            <p>
              I care about the details users actually feel: fast loads, layouts that don&rsquo;t break
              on a phone, forms that explain themselves, and interfaces that are pleasant to look at.
              Outside of client work I&rsquo;m usually rebuilding something I&rsquo;ve already built,
              just better.
            </p>

            <div className="pillars">
              {aboutCards.map((card, i) => (
                <article className="pillar" key={card.title}>
                  <span className="pillar__num">0{i + 1}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="facts">
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
                <dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd>
              </div>
              <div>
                <dt>Freelance</dt>
                <dd className="accent">Available</dd>
              </div>
            </dl>

            <div className="cv__actions">
              <a href={profile.resume} className="btn btn--dark" download>Download CV</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
