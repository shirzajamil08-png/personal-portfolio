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

          <TiltCard className="resume__sheet" max={12}>
            {/* a real preview of the CV — click it to open the PDF */}
            <a
              className="sheet"
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
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
