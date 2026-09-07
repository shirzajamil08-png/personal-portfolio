import Reveal from "./Reveal";
import { education, experience } from "../data/portfolio";

function Timeline({ heading, items }) {
  return (
    <Reveal className="timeline__col">
      <h3 className="timeline__heading">{heading}</h3>
      <ol className="tl">
        {items.map((item) => (
          <li className="tl__item" key={item.title + item.date}>
            <span className="tl__dot" />
            <span className="tl__date">{item.date}</span>
            <h4>{item.title}</h4>
            <p className="tl__org">{item.org}</p>
            <p>{item.text}</p>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

export default function Journey() {
  return (
    <section className="section section--alt" id="journey">
      <div className="container">
        <Reveal className="section__head" as="header">
          <p className="section__eyebrow">04 — Journey</p>
          <h2 className="section__title">
            Education &amp; <span className="gradient-text">Experience</span>
          </h2>
          <p className="section__sub">Where I studied, what I&rsquo;ve earned, and where I&rsquo;ve worked.</p>
        </Reveal>

        <div className="timeline">
          <Timeline heading="🎓 Education" items={education} />
          <Timeline heading="💼 Experience" items={experience} />
        </div>
      </div>
    </section>
  );
}
