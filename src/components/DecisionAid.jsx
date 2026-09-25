import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { DECISION_AID, LINKS } from "../data/content";
import { EASE, Icon, Reveal, SectionHead } from "./ui";

const KEY = "dw-aid-dismissed";

export function AidPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try { dismissed = sessionStorage.getItem(KEY) === "1"; } catch { /* ignore */ }
    if (!dismissed) {
      const t = setTimeout(() => setOpen(true), 1400);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = () => {
    setOpen(false);
    try { sessionStorage.setItem(KEY, "1"); } catch { /* ignore */ }
  };

  const goSection = () => {
    dismiss();
    window.location.hash = "";
    const el = document.getElementById("decision-aid");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="aid-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={dismiss}
        >
          <motion.div
            className="aid-modal"
            initial={{ opacity: 0, y: 34, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.4, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button className="aid-close" onClick={dismiss} aria-label="Dismiss">
              <Icon name="plus" size={16} />
            </button>
            <span className="eyebrow">{DECISION_AID.eyebrow}</span>
            <h3>{DECISION_AID.popup.title}</h3>
            <p>{DECISION_AID.popup.sub}</p>
            <div className="hero-ctas">
              <button className="btn btn-solid" onClick={goSection}>
                {DECISION_AID.popup.primary} <span className="arr"><Icon name="arrow" size={16} /></span>
              </button>
              <a className="btn" href={LINKS.calendly} target="_blank" rel="noreferrer">
                {DECISION_AID.popup.secondary}
              </a>
            </div>
            <small>{DECISION_AID.popup.note}</small>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function AidSection() {
  const [picked, setPicked] = useState(null);

  return (
    <section id="decision-aid">
      <div className="container">
        <SectionHead num="✦" eyebrow={DECISION_AID.eyebrow} title={DECISION_AID.title} sub={DECISION_AID.sub} />

        <div className="aid-cards">
          {DECISION_AID.checks.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.07}>
              <motion.div className="aid-card" whileHover={{ y: -4 }} transition={{ duration: 0.3, ease: EASE }}>
                <span className="aid-idx">/{String(i + 1).padStart(2, "0")}</span>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="aid-note">
            <Icon name="ai" size={18} /> {DECISION_AID.note}
          </p>
        </Reveal>

        <div className="quiz">
          <Reveal>
            <h3 className="quiz-title">{DECISION_AID.quizTitle}</h3>
            <p className="quiz-sub">{DECISION_AID.quizSub}</p>
          </Reveal>
          <div className="quiz-grid">
            {DECISION_AID.situations.map((s, i) => (
              <Reveal key={s.rec} delay={i * 0.06}>
                <button
                  className={`quiz-opt ${picked === i ? "on" : ""}`}
                  onClick={() => setPicked(picked === i ? null : i)}
                >
                  <span className="q-dot" />
                  {s.q}
                </button>
              </Reveal>
            ))}
          </div>
          <AnimatePresence>
            {picked !== null && (
              <motion.div
                className="quiz-result"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <div>
                  <span className="rec-label">Recommended starting point</span>
                  <h4>{DECISION_AID.situations[picked].rec}</h4>
                  <p>{DECISION_AID.situations[picked].detail}</p>
                </div>
                <div className="hero-ctas">
                  <LinkBtn />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function LinkBtn() {
  return (
    <>
      <Link className="btn btn-solid" to="/contact">
        Choose your starting point <span className="arr"><Icon name="arrow" size={16} /></span>
      </Link>
      <a className="btn" href={LINKS.calendly} target="_blank" rel="noreferrer">
        Book a technical review
      </a>
    </>
  );
}
