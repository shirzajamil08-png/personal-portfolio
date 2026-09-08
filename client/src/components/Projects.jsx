import { useEffect, useMemo, useState } from "react";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { getProjects } from "../api";
import { fallbackProjects } from "../data/portfolio";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "frontend", label: "Frontend" },
  { key: "react", label: "React" }
];

/* the decorative shape behind each card, keyed by project.thumb */
const THUMB_ART = {
  1: <><rect x="30" y="40" width="150" height="160" rx="12" /><rect x="200" y="40" width="170" height="70" rx="12" /><rect x="200" y="130" width="170" height="70" rx="12" /></>,
  2: <><rect x="40" y="50" width="100" height="140" rx="10" /><rect x="150" y="50" width="100" height="140" rx="10" /><rect x="260" y="50" width="100" height="140" rx="10" /></>,
  3: <><rect x="40" y="60" width="180" height="40" rx="20" /><rect x="180" y="115" width="180" height="40" rx="20" /><rect x="40" y="170" width="140" height="40" rx="20" /></>,
  4: <><rect x="50" y="45" width="300" height="24" rx="12" /><rect x="50" y="90" width="230" height="16" rx="8" /><rect x="50" y="125" width="270" height="16" rx="8" /><rect x="50" y="160" width="190" height="16" rx="8" /></>,
  5: <><circle cx="120" cy="120" r="60" /><rect x="210" y="70" width="150" height="30" rx="15" /><rect x="210" y="120" width="110" height="30" rx="15" /><rect x="210" y="170" width="140" height="30" rx="15" /></>,
  6: <polygon points="200,40 340,120 200,200 60,120" />
};

export default function Projects() {
  const [projects, setProjects] = useState(fallbackProjects);
  const [source, setSource] = useState("loading");
  const [filter, setFilter] = useState("all");

  /* Pull projects from MongoDB via the Express API.
     If the API or the database is unavailable we keep the bundled copy, so the
     page never looks broken while you are setting things up. */
  useEffect(() => {
    let cancelled = false;

    getProjects()
      .then((res) => {
        if (cancelled) return;

        if (res?.source === "mongodb" && res.data?.length) {
          setProjects(res.data);
          setSource("mongodb");
        } else {
          setSource("no-db"); // API answered, but it has no database behind it
        }
      })
      .catch(() => {
        if (!cancelled) setSource("offline");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const sourceLabel = {
    loading: "Loading projects…",
    mongodb: "● Loaded live from MongoDB",
    "no-db": "○ API online, no database connected — showing bundled data",
    offline: "○ API offline — showing bundled data"
  }[source];

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => (p.tags || []).includes(filter))),
    [projects, filter]
  );

  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal className="section__head" as="header">
          <p className="section__eyebrow">03 — Projects</p>
          <h2 className="section__title">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="section__sub">Full-stack builds where I owned both the API and the interface.</p>
          <p className="section__source">{sourceLabel}</p>
        </Reveal>

        <Reveal className="filters">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`filter ${filter === f.key ? "is-active" : ""}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="projects">
          {visible.map((p, i) => (
            <Reveal key={p._id || p.title} delay={Math.min(i, 5) * 0.08}>
              <TiltCard className="project" max={10} as="article">
                <div className={`project__thumb project__thumb--${p.thumb || 1} ${p.image ? "has-shot" : ""}`}>
                  {p.featured && <span className="project__badge">Featured</span>}

                  {p.image ? (
                    /* real screenshot of the live site */
                    <img
                      src={p.image}
                      alt={`Screenshot of ${p.title}`}
                      loading="lazy"
                      width="1280"
                      height="800"
                    />
                  ) : (
                    <>
                      <svg viewBox="0 0 400 240" aria-hidden="true">
                        {THUMB_ART[p.thumb] || THUMB_ART[1]}
                      </svg>
                      <span className="project__emoji" aria-hidden="true">{p.emoji}</span>
                    </>
                  )}
                </div>

                <div className="project__body">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>

                  <ul className="project__tech">
                    {(p.tech || []).map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>

                  <div className="project__links">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn--sm btn--ghost">
                        GitHub
                      </a>
                    )}
                    <a
                      href={p.demo || "#projects"}
                      target={p.demo ? "_blank" : undefined}
                      rel={p.demo ? "noopener noreferrer" : undefined}
                      className="btn btn--sm btn--primary"
                    >
                      {p.demo ? "Live Demo" : "Demo soon"}
                    </a>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
