import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROCESS, ENGAGEMENTS, ABOUT, FAQ } from "../data/content";
import { EASE, Icon, Reveal, SectionHead } from "./ui";

export function Process({ num = "03" }) {
  return (
    <section id="process">
      <div className="container">
        <SectionHead num={num} eyebrow={PROCESS.eyebrow} title={PROCESS.title} />
        <div className="process-stack">
          {PROCESS.steps.map((s, i) => (
            <div className="step" key={s.n} style={{ top: `calc(var(--nav-h) + ${20 + i * 22}px)` }}>
              <div className="n">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Engagements({ num = "04" }) {
  return (
    <section id="engagements">
      <div className="container">
        <SectionHead num={num} eyebrow={ENGAGEMENTS.eyebrow} title={ENGAGEMENTS.title} sub={ENGAGEMENTS.sub} />
        <div className="plan-grid">
          {ENGAGEMENTS.plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <motion.div
                className={`plan ${i === 1 ? "featured" : ""}`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <span className="time">{p.time}</span>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About({ num = "01" }) {
  return (
    <section id="about">
      <div className="container about-grid">
        <Reveal>
          <div className="about-visual">
            <motion.div
              className="frame"
              initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <img className="logo-ink" src="/logo.png" alt="Devowise mark" />
            </motion.div>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="about-text">
            <div className="s-head">
              <span className="s-index">( {num} )</span>
              <span className="eyebrow">{ABOUT.eyebrow}</span>
            </div>
            <h2 className="section-title">{ABOUT.p1}</h2>
            <p>{ABOUT.p2}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Faq({ num = "03" }) {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq">
      <div className="container">
        <SectionHead num={num} eyebrow={FAQ.eyebrow} title={FAQ.title} />
        <div className="faq-list">
          {FAQ.items.map((f, i) => (
            <div className={`faq-item ${open === i ? "open" : ""}`} key={f.q}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                <span>
                  <span className="q-idx">/{String(i + 1).padStart(2, "0")}</span>
                  {f.q}
                </span>
                <span className="fx"><Icon name="plus" size={16} /></span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="faq-a">{f.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
