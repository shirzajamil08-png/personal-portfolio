import Reveal from "./Reveal";
import { profile } from "../data/portfolio";

export default function Resume() {
  return (
    <section className="band band--panel" id="resume">
      <div className="wrap">
        <div className="cv">
          <Reveal>
            <p className="eyebrow">Resume</p>
            <h2 className="h2">Everything on one page</h2>
            <p className="lead">
              My skills, education, internship and projects in a single PDF. Read it in the browser
              or keep a copy.
            </p>
            <div className="cv__actions">
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                View Resume
              </a>
              <a href={profile.resume} className="btn btn--light" download>
                Download PDF
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="cv__sheet-wrap">
            <a
              className="cv__sheet"
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the resume PDF"
            >
              <img
                src="/assets/resume-preview.jpg"
                alt={`First page of ${profile.name}'s resume`}
                loading="lazy"
                width="794"
                height="1123"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
