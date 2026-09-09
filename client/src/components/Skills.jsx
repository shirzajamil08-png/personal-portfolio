import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { chips, cubeFaces, skills } from "../data/portfolio";
import {
  ReactIcon,
  NodeIcon,
  MongoIcon,
  ExpressIcon,
  JsIcon,
  CssIcon,
  iconFor
} from "./techIcons";

/* each cube face carries its own mark and its brand tint */
const FACE_ICONS = {
  front: ReactIcon,
  back: NodeIcon,
  right: MongoIcon,
  left: ExpressIcon,
  top: JsIcon,
  bottom: CssIcon
};

/** The draggable MERN cube. Spins on its own until you grab it. */
function Cube() {
  const ref = useRef(null);
  const drag = useRef({ active: false, x: 0, y: 0, rx: -22, ry: 0 });
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const point = (e) => (e.touches ? e.touches[0] : e);

    const onMove = (e) => {
      const d = drag.current;
      if (!d.active || !ref.current) return;

      const p = point(e);
      d.ry += (p.clientX - d.x) * 0.6;
      d.rx = Math.max(-90, Math.min(90, d.rx - (p.clientY - d.y) * 0.6));
      d.x = p.clientX;
      d.y = p.clientY;

      ref.current.style.transform = `rotateX(${d.rx}deg) rotateY(${d.ry}deg)`;
    };

    const onUp = () => {
      drag.current.active = false;
      setDragging(false);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  const onDown = (e) => {
    const p = e.touches ? e.touches[0] : e;
    drag.current = { ...drag.current, active: true, x: p.clientX, y: p.clientY };
    setDragging(true);
  };

  return (
    <div
      className={`cube ${dragging ? "is-dragging" : ""}`}
      ref={ref}
      onMouseDown={onDown}
      onTouchStart={onDown}
    >
      {Object.entries(cubeFaces).map(([face, label]) => {
        const Icon = FACE_ICONS[face];
        return (
          <div key={face} className={`cube__face cube__face--${face}`}>
            <Icon className="cube__icon" />
            <span className="cube__label">{label}</span>
          </div>
        );
      })}
    </div>
  );
}

/** One progress bar, filled when it scrolls into view. */
function SkillBar({ name, level, index }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShown(true), index * 120);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  const Icon = iconFor(name);

  return (
    <div className="skill" ref={ref}>
      <div className="skill__top">
        <span>
          <Icon className="skill__icon" />
          {name}
        </span>
        <em>{level}%</em>
      </div>
      <div className="bar">
        <i style={{ width: shown ? `${level}%` : 0 }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <Reveal className="section__head" as="header">
          <p className="section__eyebrow">02 / Skills</p>
          <h2 className="section__title">
            My <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="section__sub">The stack I reach for, plus the fundamentals underneath it.</p>
        </Reveal>

        <div className="skills">
          <Reveal className="skills__cube-wrap">
            {/* the stage reserves room for the cube's corners as it spins,
                so it can never overlap the caption below */}
            <div className="skills__cube-stage">
              <Cube />
            </div>
            <p className="skills__cube-cap">The MERN cube. Drag it around.</p>
          </Reveal>

          <Reveal className="skills__bars" delay={0.1}>
            {skills.map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
            ))}
          </Reveal>
        </div>

        <Reveal className="chips">
          {chips.map((c) => {
            const Icon = iconFor(c);
            return (
              <span key={c}>
                <Icon className="chip__icon" />
                {c}
              </span>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
