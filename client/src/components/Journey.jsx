import Reveal from "./Reveal";
import { education, experience, languages } from "../data/portfolio";
import { CapIcon, BriefcaseIcon, CodeIcon, BankIcon, SchoolIcon, GlobeIcon } from "./techIcons";

/* one icon per row, in order */
const EXP_ICONS = [BriefcaseIcon, CodeIcon];
const EDU_ICONS = [CapIcon, BankIcon, SchoolIcon];

/* Experience and Education share a shape: a rail of dots down the left, a
   black headline, a red line under it, and the date off to the right. */
function Timeline({ rows }) {
  return (
    <ol className="tl">
      {rows.map((row) => {
        const Icon = row.icon;
        return (
          <li className="tl__row" key={row.head + row.date}>
            <span className="tl__mark" aria-hidden="true">
              <i className="tl__dot" />
              {row.logo ? (
                <img className="tl__logo" src={row.logo} alt="" />
              ) : (
                <Icon className="tl__ico" />
              )}
            </span>

            <div className="tl__body">
              <div className="tl__head">
                <h4>{row.head}</h4>
                <span className="tl__when">{row.date}</span>
              </div>
              <p className="tl__sub">{row.sub}</p>
              {row.text ? <p className="tl__text">{row.text}</p> : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default function Journey() {
  const eduRows = education.map((item, i) => ({
    head: item.org, // the institution, in black
    sub: item.title, // the programme, in red
    date: item.date,
    icon: EDU_ICONS[i] || CapIcon
  }));

  const expRows = experience.map((item, i) => ({
    head: item.title,
    sub: item.org,
    text: item.text,
    date: item.date,
    logo: item.logo,
    icon: EXP_ICONS[i] || BriefcaseIcon
  }));

  return (
    <section className="band" id="journey">
      <div className="wrap">
        <Reveal className="head" as="header">
          <p className="eyebrow">Journey</p>
          <h2 className="h2">Where I studied and worked</h2>
        </Reveal>

        <div className="jrn">
          {/* ---------- education ---------- */}
          <Reveal className="jcard">
            <header className="jcard__title">
              <h3>
                Education<span className="accent">.</span>
              </h3>
              <CapIcon className="jcard__mark" />
            </header>

            <Timeline rows={eduRows} />
          </Reveal>

          <div className="jrn__side">
            {/* ---------- experience ---------- */}
            <Reveal className="jcard" delay={0.08}>
              <header className="jcard__title">
                <h3>
                    Experience<span className="accent">.</span>
                </h3>
                <BriefcaseIcon className="jcard__mark" />
              </header>

              <Timeline rows={expRows} />
            </Reveal>

            {/* ---------- languages ---------- */}
            <Reveal className="jcard" delay={0.14}>
              <header className="jcard__title">
                <h3>
                    Languages<span className="accent">.</span>
                </h3>
                <GlobeIcon className="jcard__mark" />
              </header>

              <ul className="lang">
                {languages.map((l) => (
                  <li className="lang__row" key={l.name}>
                    <span className="lang__code">{l.code}</span>
                    <span className="lang__name">{l.name}</span>
                    <span className="lang__level">{l.level}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
