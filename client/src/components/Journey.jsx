import Reveal from "./Reveal";
import { education, experience } from "../data/portfolio";
import { CapIcon, BriefcaseIcon } from "./techIcons";

function Timeline({ icon: Icon, label, caption, items, tint }) {
  return (
    <Reveal className="timeline__col">
      <header className={`tl__header tl__header--${tint}`}>
        <span className="tl__badge">
          <Icon />
        </span>
        <span className="tl__headtext">
          <strong>{label}</strong>
          <em>{caption}</em>
        </span>
      </header>

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
          <p className="section__eyebrow">04 / Journey</p>
          <h2 className="section__title">
            Education &amp; <span className="gradient-text">Experience</span>
          </h2>
          <p className="section__sub">Where I studied, what I&rsquo;ve earned, and where I&rsquo;ve worked.</p>
        </Reveal>

        <div className="timeline">
          <Timeline
            icon={CapIcon}
            label="Education"
            caption={`${education.length} qualifications`}
            items={education}
            tint="violet"
          />
          <Timeline
            icon={BriefcaseIcon}
            label="Experience"
            caption="Internship and personal work"
            items={experience}
            tint="cyan"
          />
        </div>
      </div>
    </section>
  );
}
