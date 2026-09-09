import { useState } from "react";
import Reveal from "./Reveal";
import { sendMessage } from "../api";
import { profile } from "../data/portfolio";
import { GithubIcon, LinkedinIcon, MailIcon, XIcon } from "./icons";
import { PhoneIcon, PinIcon } from "./techIcons";

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
    setStatus({ text: "Sending", kind: "" });

    try {
      const res = await sendMessage(form);
      setStatus({ text: res.message || "Message sent. Thank you!", kind: "ok" });
      setForm(EMPTY);
      setErrors({});
    } catch (err) {
      if (err.errors) setErrors(err.errors);
      setStatus({ text: err.message || "Could not reach the server. Please try again.", kind: "bad" });
    } finally {
      setSending(false);
      setTimeout(() => setStatus({ text: "", kind: "" }), 7000);
    }
  };

  const field = (name, label, placeholder, type = "text") => (
    <div className={`field ${errors[name] ? "has-error" : ""}`}>
      <label htmlFor={name}>{label}</label>
      {type === "textarea" ? (
        <textarea id={name} name={name} rows="5" placeholder={placeholder} value={form[name]} onChange={onChange} onBlur={onBlur} />
      ) : (
        <input type={type} id={name} name={name} placeholder={placeholder} value={form[name]} onChange={onChange} onBlur={onBlur} />
      )}
      <small className="error">{errors[name] || ""}</small>
    </div>
  );

  return (
    <section className="band" id="contact">
      <div className="wrap">
        <Reveal className="head" as="header">
          <p className="eyebrow">Contact</p>
          <h2 className="h2">Let&rsquo;s build something</h2>
          <p className="lead">Got a project, a role, or just a question? Drop me a message.</p>
        </Reveal>

        <div className="contact">
          <Reveal>
            <div className="contact__list">
              <a className="contact__row" href={`mailto:${profile.email}`}>
                <MailIcon className="contact__icon" />
                <span>
                  <strong>Email</strong>
                  <em>{profile.email}</em>
                </span>
              </a>
              <a className="contact__row" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                <PhoneIcon className="contact__icon" />
                <span>
                  <strong>Phone</strong>
                  <em>{profile.phone}</em>
                </span>
              </a>
              <div className="contact__row">
                <PinIcon className="contact__icon" />
                <span>
                  <strong>Location</strong>
                  <em>{profile.location}</em>
                </span>
              </div>
            </div>

            <ul className="socials">
              <li><a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /></a></li>
              <li><a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a></li>
              <li><a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a></li>
              <li><a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="X"><XIcon /></a></li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="form" onSubmit={onSubmit} noValidate>
              {field("name", "Your name", "Jane Doe")}
              {field("email", "Email address", "jane@example.com", "email")}
              {field("subject", "Subject", "Project enquiry")}
              {field("message", "Message", "Tell me about your idea", "textarea")}

              <button type="submit" className="btn btn--dark btn--block" disabled={sending}>
                {sending ? "Sending" : "Send Message"}
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
