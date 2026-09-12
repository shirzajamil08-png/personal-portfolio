import Reveal from "./Reveal";
import { capabilities, certificates, stackGroups } from "../data/portfolio";
import {
  iconFor,
  tintFor,
  FrontendIcon,
  DatabaseIcon,
  AiIcon,
  ToolsIcon,
  CertificateIcon,
  SparkIcon
} from "./techIcons";

const GROUP_MARKS = {
  frontend: FrontendIcon,
  backend: DatabaseIcon,
  ai: AiIcon,
  tools: ToolsIcon
};

export default function Skills() {
  return (
    <section className="band" id="skills">
      <div className="wrap">
        <Reveal className="head" as="header">
          <p className="eyebrow">Skills</p>
          <h2 className="h2">What I do and what I build it with</h2>
        </Reveal>

        <div className="skills-split">
          <div>
            {/* ---------- what I do ---------- */}
            <Reveal className="block">
              <h3 className="block__title">
                <SparkIcon className="block__spark" />
                Skills<span className="accent">.</span>
              </h3>
              <ul className="pills">
                {capabilities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Reveal>

            {/* ---------- the tools, grouped ---------- */}
            <Reveal className="block" delay={0.06}>
              <h3 className="block__title">
                <SparkIcon className="block__spark" />
                Stack<span className="accent">.</span>
              </h3>

              <div className="groups">
                {stackGroups.map((g) => {
                  const Mark = GROUP_MARKS[g.mark] || FrontendIcon;
                  return (
                    <article className="group" key={g.title} style={{ gridColumn: `span ${g.span || 12}` }}>
                      <header className="group__head">
                        <span className="group__mark"><Mark /></span>
                        <h4>{g.title}</h4>
                      </header>

                      <ul className="group__items" style={{ "--tile-min": `${g.tileMin || 84}px` }}>
                        {g.items.map((item) => {
                          const Icon = iconFor(item);
                          const tint = tintFor(item);
                          return (
                            <li key={item}>
                              <span className="group__icon" style={tint ? { color: tint } : undefined}>
                                <Icon />
                              </span>
                              <span className="group__label">{item}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </article>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* ---------- certificates ---------- */}
          <Reveal className="block" delay={0.1}>
            <h3 className="block__title">
              <SparkIcon className="block__spark" />
              Certificate<span className="accent">.</span>
            </h3>
            <ul className="certs">
              {certificates.map((c) => {
                const Tag = c.link ? "a" : "div";
                return (
                  <li key={c.title}>
                    <Tag
                      className="cert"
                      {...(c.link ? { href: c.link, target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      <span className="cert__logo">
                        {c.logo ? <img src={c.logo} alt="" /> : <CertificateIcon />}
                      </span>
                      <span>
                        <strong className="cert__title">{c.title}</strong>
                        <span className="cert__org">{c.org} · {c.date}</span>
                      </span>
                    </Tag>
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
