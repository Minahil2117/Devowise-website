import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SITUATIONS, SERVICES } from "../data/content";
import { SectionHead, Reveal, Icon, EASE } from "./ui";

export function Situations({ num = "01" }) {
  const [sel, setSel] = useState(0);
  const cur = SITUATIONS[sel];
  return (
    <section id="situations">
      <div className="container">
        <SectionHead
          num={num}
          eyebrow="Where to start"
          title="Which situation sounds most like today?"
          sub="Pick the line that hurts — the recommended route and its smallest useful next step update instantly."
        />
        <div className="situ-wrap">
          <div className="situ-list" role="tablist" aria-label="Situations">
            {SITUATIONS.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.05}>
                <button
                  role="tab"
                  aria-selected={sel === i}
                  className={`situ-row ${sel === i ? "on" : ""}`}
                  onClick={() => setSel(i)}
                >
                  <span className="situ-route">{s.route}</span>
                  <span className="situ-quote">{s.quote}</span>
                  <span className="situ-idx">{s.num}</span>
                </button>
              </Reveal>
            ))}
          </div>
          <div className="situ-side">
            <AnimatePresence mode="wait">
              <motion.div
                key={sel}
                className="rec-panel"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <span className="route-tag">Recommended route · {cur.route}</span>
                <h3>{cur.quote}</h3>
                <p>{cur.desc}</p>
                <div className="situ-meta-row">
                  <span className="situ-meta">Start with <strong>{cur.start}</strong></span>
                  <span className="situ-meta">Timing <strong>{cur.timing}</strong></span>
                </div>
                <div className="hero-ctas">
                  <Link className="btn btn-solid" to={cur.to}>
                    Open the recommended route <span className="arr"><Icon name="arrow" size={16} /></span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
            <p className="situ-note">
              <strong>Not sure?</strong> Pick the closest one — the route can change after the first review. Or take the 60-second quiz below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesGrid({ num = "02" }) {
  return (
    <section id="services-grid">
      <div className="container">
        <SectionHead
          num={num}
          eyebrow="Services"
          title="Everything we ship."
          sub="Senior-led product engineering across web, mobile, and AI — pick a lane or combine them."
        />
        <div className="srv-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.06}>
              <Link className="srv-row" to={`/services/${s.slug}`}>
                <span className="srv-ico"><Icon name={s.icon} size={22} /></span>
                <span className="srv-txt">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </span>
                <span className="go"><Icon name="arrow" size={18} /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
