import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { chips, skills } from "../data/portfolio";
import { iconFor } from "./techIcons";

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
          setTimeout(() => setShown(true), index * 90);
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
          <h2 className="h2">The tools I reach for every day</h2>
        </Reveal>

        <div className="skills">
          <Reveal className="bars">
            {skills.map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <p className="lead" style={{ marginBottom: "1.5rem" }}>
              Everything below is something I have actually shipped with, not just read about.
            </p>
            <div className="stack">
              {chips.map((c) => {
                const Icon = iconFor(c);
                return (
                  <span key={c}>
                    <Icon className="stack__icon" />
                    {c}
                  </span>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
