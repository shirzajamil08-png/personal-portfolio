import Reveal from "./Reveal";
import { aboutCards } from "../data/portfolio";

/* Two columns: the story on the left, closing on a single line, and the
   four About cards on the right. */
export default function About() {
  return (
    <section className="band" id="about">
      <div className="wrap">
        <Reveal className="head" as="header">
          <p className="eyebrow">About</p>
          <h2 className="h2">Who I am</h2>
        </Reveal>

        <div className="story">
          <Reveal>
            <div className="story__text">
              <p>
                I&rsquo;m a <span className="story__mark">MERN stack web developer</span> who enjoys
                the whole journey of a product: sketching the interface, modelling the data, writing
                the API, and polishing the last detail. I started with plain{" "}
                <strong>HTML, CSS and JavaScript</strong>, fell for <strong>React</strong>, and now
                spend most of my time building full-stack apps with{" "}
                <strong>Node.js, Express and MongoDB</strong>.
              </p>
              <p>
                I care about the details users actually feel: fast loads, layouts that don&rsquo;t
                break on a phone, forms that explain themselves, and interfaces that are pleasant to
                look at. In my spare time I&rsquo;m usually rebuilding something I&rsquo;ve already
                built, just better.
              </p>
            </div>

            <p className="story__close">Build it properly. Then make it better.</p>
          </Reveal>

          <Reveal delay={0.1}>
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
        </div>
      </div>
    </section>
  );
}
