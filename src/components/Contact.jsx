import { useState } from "react";
import { motion } from "framer-motion";
import { LINKS } from "../data/content";
import { EASE, Icon, Reveal } from "./ui";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const mailto = () => {
    const subject = encodeURIComponent(`Project inquiry from ${form.name || "your website"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    return `mailto:${LINKS.email}?subject=${subject}&body=${body}`;
  };

  const submit = (e) => {
    e.preventDefault();
    window.location.href = mailto();
    setSent(true);
  };

  const copyMsg = async () => {
    try {
      await navigator.clipboard.writeText(`${form.message}\n\n— ${form.name}\n${form.email}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* clipboard unavailable */ }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-grid">
          <Reveal>
            <form className="contact-form" onSubmit={submit}>
              <div className="field">
                <label htmlFor="cf-name">Full Name</label>
                <input id="cf-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" />
              </div>
              <div className="field">
                <label htmlFor="cf-msg">Project Details</label>
                <textarea id="cf-msg" rows={6} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about the problem, scope, and timeline…" />
              </div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn btn-solid" type="submit">
                Send Message <span className="arr"><Icon name="arrow" size={16} /></span>
              </motion.button>
              {sent && (
                <div className="sent-note">
                  <p>
                    <strong>Almost there.</strong> Your email app should have opened with everything pre-filled.
                    If it didn't, send it directly to <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a> or copy your message below.
                  </p>
                  <div className="hero-ctas">
                    <a className="btn" href={mailto()}>Open email app</a>
                    <button className="btn" type="button" onClick={copyMsg}>{copied ? "Copied ✓" : "Copy message"}</button>
                  </div>
                </div>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="contact-cards">
              <div className="contact-card">
                <span className="k">Email</span>
                <a className="v" href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
              </div>
              <div className="contact-card">
                <span className="k">Book a Call</span>
                <a className="v" href={LINKS.calendly} target="_blank" rel="noreferrer">calendly.com/devowise — 30 min</a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
