import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { capabilities, skills, stackGroups } from "../data/portfolio";
import { iconFor, ReactIcon, NodeIcon, MongoIcon, GitIcon } from "./techIcons";

const GROUP_MARKS = {
  react: ReactIcon,
  node: NodeIcon,
  mongo: MongoIcon,
  git: GitIcon
};

function SkillBar({ name, level, index }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  const Icon = iconFor(name);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShown(true), index * 80);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div ref={ref}>
      <div className="bar__top">
        <span className="bar__name">
          <Icon className="bar__icon" />
          {name}
        </span>
        <span className="bar__pct">{level}%</span>
      </div>
      <div className="bar__track">
        <i className="bar__fill" style={{ width: shown ? `${level}%` : 0 }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="band band--panel" id="skills">
      <div className="wrap">
        <Reveal className="head" as="header">
          <p className="eyebrow">Skills</p>
          <h2 className="h2">What I do and what I build it with</h2>
        </Reveal>

        {/* ---------- what I do ---------- */}
        <Reveal className="block">
          <h3 className="block__title">
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
            Stack<span className="accent">.</span>
          </h3>

          <div className="groups">
            {stackGroups.map((g) => {
              const Mark = GROUP_MARKS[g.mark] || ReactIcon;
              return (
                <article className="group" key={g.title}>
                  <header className="group__head">
                    <span className="group__mark"><Mark /></span>
                    <h4>{g.title}</h4>
                  </header>

                  <ul className="group__items">
                    {g.items.map((item) => {
                      const Icon = iconFor(item);
                      return (
                        <li key={item}>
                          <span className="group__icon"><Icon /></span>
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

        {/* ---------- proficiency ---------- */}
        <Reveal className="block" delay={0.1}>
          <h3 className="block__title">
            Level<span className="accent">.</span>
          </h3>
          <div className="bars bars--split">
            {skills.map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
