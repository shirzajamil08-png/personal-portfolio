import { useState } from "react";
import Reveal from "./Reveal";
import { sendMessage } from "../api";
import { profile } from "../data/portfolio";

const EMPTY = { name: "", email: "", subject: "", message: "" };

/* Client-side rules. The same checks exist in the Mongoose schema, so bad data
   is rejected on the server too. The browser copy is just faster feedback. */
const RULES = {
  name: (v) => (v.trim().length >= 2 ? "" : "Please enter at least 2 characters."),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Enter a valid email address."),
  subject: (v) => (v.trim().length >= 3 ? "" : "Subject must be at least 3 characters."),
  message: (v) => (v.trim().length >= 10 ? "" : "Message should be at least 10 characters.")
};

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ text: "", kind: "" });
  const [sending, setSending] = useState(false);

  const validateField = (name, value) => RULES[name](value);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const onBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const next = {};
    for (const key of Object.keys(RULES)) next[key] = validateField(key, form[key]);
    setErrors(next);

    if (Object.values(next).some(Boolean)) {
      setStatus({ text: "Please fix the highlighted fields.", kind: "bad" });
      return;
    }

    setSending(true);
    setStatus({ text: "Sending…", kind: "" });

    try {
      const res = await sendMessage(form);
      setStatus({ text: res.message || "Message sent. Thank you!", kind: "ok" });
      setForm(EMPTY);
      setErrors({});
    } catch (err) {
      // server-side validation errors come back keyed by field
      if (err.errors) setErrors(err.errors);
      setStatus({
        text: err.message || "Could not reach the server. Please try again.",
        kind: "bad"
      });
    } finally {
      setSending(false);
      setTimeout(() => setStatus({ text: "", kind: "" }), 7000);
    }
  };

  const field = (name, label, placeholder, type = "text") => (
    <div className={`field ${errors[name] ? "has-error" : ""}`}>
      <label htmlFor={name}>{label}</label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows="5"
          placeholder={placeholder}
          value={form[name]}
          onChange={onChange}
          onBlur={onBlur}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={form[name]}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
      <small className="error">{errors[name] || ""}</small>
    </div>
  );

  return (
    <section className="section section--alt" id="contact">
      <div className="container">
        <Reveal className="section__head" as="header">
          <p className="section__eyebrow">06 / Contact</p>
          <h2 className="section__title">
            Let&rsquo;s <span className="gradient-text">Build</span> Something
          </h2>
          <p className="section__sub">Got a project, a role, or just a question? Drop me a message.</p>
        </Reveal>

        <div className="contact">
          <Reveal className="contact__info">
            <a className="info glass" href={`mailto:${profile.email}`}>
              <span className="info__icon">✉️</span>
              <span>
                <strong>Email</strong>
                {profile.email}
              </span>
            </a>
            <a className="info glass" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              <span className="info__icon">📞</span>
              <span>
                <strong>Phone</strong>
                {profile.phone}
              </span>
            </a>
            <div className="info glass">
              <span className="info__icon">📍</span>
              <span>
                <strong>Location</strong>
                {profile.location}
              </span>
            </div>
            <ul className="socials">
              <li><a href={profile.socials.github} target="_blank" rel="noopener noreferrer">GH</a></li>
              <li><a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">IN</a></li>
              <li><a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer">X</a></li>
              <li><a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer">IG</a></li>
            </ul>
          </Reveal>

          <Reveal className="contact__form-wrap" delay={0.1}>
            <form className="contact__form glass" onSubmit={onSubmit} noValidate>
              {field("name", "Your Name", "Jane Doe")}
              {field("email", "Email Address", "jane@example.com", "email")}
              {field("subject", "Subject", "Project enquiry")}
              {field("message", "Message", "Tell me about your idea…", "textarea")}

              <button type="submit" className="btn btn--primary btn--block" disabled={sending}>
                {sending ? "Sending…" : "Send Message"}
              </button>

              <p className={`form-status ${status.kind}`} role="status" aria-live="polite">
                {status.text}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
