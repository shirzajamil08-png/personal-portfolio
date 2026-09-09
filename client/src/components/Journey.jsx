import Reveal from "./Reveal";
import { education, experience } from "../data/portfolio";
import { CapIcon, BriefcaseIcon } from "./techIcons";

function Track({ icon: Icon, label, caption, items }) {
  return (
    <Reveal>
      <header className="journey__head">
        <span className="journey__icon"><Icon /></span>
        <span>
          <strong>{label}</strong>
          <em>{caption}</em>
        </span>
      </header>

      <ol className="path">
        {items.map((item) => (
          <li className="path__item" key={item.title + item.date}>
            <span className="path__when">{item.date}</span>
            <h4>{item.title}</h4>
            <p className="path__org">{item.org}</p>
            <p>{item.text}</p>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

export default function Journey() {
  return (
    <section className="band" id="journey">
      <div className="wrap">
        <Reveal className="head" as="header">
          <p className="eyebrow">Journey</p>
          <h2 className="h2">Education and experience</h2>
        </Reveal>

        <div className="journey">
          <Track icon={CapIcon} label="Education" caption={`${education.length} qualifications`} items={education} />
          <Track icon={BriefcaseIcon} label="Experience" caption="Internship and personal work" items={experience} />
        </div>
      </div>
    </section>
  );
}
