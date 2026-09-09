import { useEffect, useMemo, useState } from "react";
import Reveal from "./Reveal";
import { getProjects } from "../api";
import { fallbackProjects } from "../data/portfolio";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "frontend", label: "Frontend" },
  { key: "react", label: "React" }
];

export default function Projects() {
  const [projects, setProjects] = useState(fallbackProjects);
  const [source, setSource] = useState("loading");
  const [filter, setFilter] = useState("all");

  /* Projects come from MongoDB through the Express API. If either is
     unavailable the bundled copy stays, so the page never looks broken. */
  useEffect(() => {
    let cancelled = false;

    getProjects()
      .then((res) => {
        if (cancelled) return;
        if (res?.source === "mongodb" && res.data?.length) {
          setProjects(res.data);
          setSource("mongodb");
        } else {
          setSource("no-db");
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
    loading: "Loading projects",
    mongodb: "Loaded live from MongoDB",
    "no-db": "API online, no database connected",
    offline: "API offline, showing bundled data"
  }[source];

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => (p.tags || []).includes(filter))),
    [projects, filter]
  );

  return (
    <section className="band" id="projects">
      <div className="wrap">
        <Reveal className="head" as="header">
          <p className="eyebrow">Selected work</p>
          <h2 className="h2">Projects I designed, built and deployed</h2>
          <p className="lead">Every one of these is live, with its own repository.</p>
          <p className="source" style={{ marginTop: ".9rem" }}>{sourceLabel}</p>
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

        <div className="work">
          {visible.map((p, i) => (
            <Reveal key={p._id || p.title} delay={Math.min(i, 4) * 0.07}>
              <article className="work__card">
                <div className="work__media">
                  {p.featured && <span className="work__flag">Featured</span>}
                  {p.image ? (
                    <img src={p.image} alt={`Screenshot of ${p.title}`} loading="lazy" width="1280" height="800" />
                  ) : (
                    <div className="work__placeholder">{p.emoji || "\u{1F4BB}"}</div>
                  )}
                </div>

                <div className="work__body">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>

                  <ul className="work__tech">
                    {(p.tech || []).map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>

                  <div className="work__links">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--sm">
                        GitHub
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn--dark btn--sm">
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
