import Reveal from "./Reveal";
import { education, experience } from "../data/portfolio";
import { CapIcon, BriefcaseIcon, CodeIcon, BankIcon, SchoolIcon } from "./techIcons";

/* one icon per experience row, in order */
const EXP_ICONS = [BriefcaseIcon, CodeIcon];
/* one icon per education row, in order */
const EDU_ICONS = [CapIcon, BankIcon, SchoolIcon];

export default function Journey() {
  return (
    <section className="band" id="journey">
      <div className="wrap">
        <Reveal className="head" as="header">
          <p className="eyebrow">Journey</p>
          <h2 className="h2">Where I studied and worked</h2>
        </Reveal>

        <div className="jrn">
          {/* ---------- experience, with a rail down the left ---------- */}
          <Reveal className="jrn__card jrn__card--wide">
            <header className="jrn__title">
              <h3>Experience<span className="accent">.</span></h3>
              <BriefcaseIcon className="jrn__mark" />
            </header>

            <ol className="rail">
              {experience.map((item, i) => {
                const Icon = EXP_ICONS[i] || BriefcaseIcon;
                return (
                  <li className="rail__row" key={item.title + item.date}>
                    <span className="rail__node">
                      <Icon />
                    </span>

                    <div className="rail__body">
                      <div className="rail__top">
                        <h4>{item.title}</h4>
                        <span className="chip">{item.date}</span>
                      </div>
                      <p className="rail__org">{item.org}</p>
                      <p className="rail__text">{item.text}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </Reveal>

          {/* ---------- education ---------- */}
          <Reveal className="jrn__card" delay={0.08}>
            <header className="jrn__title">
              <h3>Education<span className="accent">.</span></h3>
              <CapIcon className="jrn__mark" />
            </header>

            <ul className="edu">
              {education.map((item, i) => {
                const Icon = EDU_ICONS[i] || CapIcon;
                return (
                  <li className="edu__row" key={item.title + item.date}>
                    <span className="edu__icon">
                      <Icon />
                    </span>

                    <div className="edu__body">
                      <p className="edu__org">{item.org}</p>
                      <p className="edu__title">{item.title}</p>
                    </div>

                    <span className="edu__when">{item.date}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
