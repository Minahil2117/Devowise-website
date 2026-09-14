import { useState } from "react";
import { motion } from "framer-motion";
import { LINKS } from "../data/content";
import { EASE, Icon, Reveal } from "./ui";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name || "your website"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`;
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
              <div className="contact-card">
                <span className="k">Portfolio</span>
                <a className="v" href={LINKS.contra} target="_blank" rel="noreferrer">contra.com/devowise</a>
              </div>
              <div className="contact-card">
                <span className="k">Website</span>
                <a className="v" href={LINKS.site} target="_blank" rel="noreferrer">www.devowise.com</a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
