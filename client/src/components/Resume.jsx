import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { profile } from "../data/portfolio";

export default function Resume() {
  return (
    <section className="section" id="resume">
      <div className="container">
        <Reveal className="resume glass">
          <div className="resume__copy">
            <p className="section__eyebrow">05 — Resume</p>
            <h2 className="section__title">
              Grab my <span className="gradient-text">CV</span>
            </h2>
            <p>
              Full breakdown of my skills, education, projects and experience in a single page. View it in the
              browser or download the PDF.
            </p>
            <div className="resume__actions">
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                View Resume
              </a>
              <a href={profile.resume} className="btn btn--primary" download>
                Download PDF
              </a>
            </div>
          </div>

          <TiltCard className="resume__sheet" max={12} aria-hidden="true">
            <div className="sheet">
              <span className="sheet__line sheet__line--title" />
              <span className="sheet__line" style={{ width: "60%" }} />
              <span className="sheet__line" style={{ width: "85%" }} />
              <span className="sheet__line" style={{ width: "75%" }} />
              <span className="sheet__line" style={{ width: "90%" }} />
              <span className="sheet__line" style={{ width: "50%" }} />
              <span className="sheet__line" style={{ width: "80%" }} />
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
