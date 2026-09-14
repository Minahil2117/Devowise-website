import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { CAPABILITIES, CERTS, WORK, LINKS } from "../data/content";
import { EASE, Icon, Reveal, SectionHead } from "./ui";

export function Capabilities({ num = "01" }) {
  return (
    <section id="capabilities">
      <div className="container">
        <SectionHead num={num} eyebrow="Capabilities" title="Everything needed to ship a serious product." />
        <div className="bento">
          {CAPABILITIES.map((c, i) => {
            const size = i < 2 ? "wide" : i < 5 ? "narrow" : "full";
            return (
            <Reveal key={c.title} delay={(i % 3) * 0.07} className={size}>
              <motion.div
                className="cap-card"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div className="cap-icon"><Icon name={c.icon} /></div>
                  <span className="idx">/ {String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </motion.div>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Certifications({ num = "02" }) {
  return (
    <section id="certifications">
      <div className="container">
        <SectionHead num={num} eyebrow={CERTS.eyebrow} title={CERTS.title} sub={CERTS.sub} />
        <div className="cert-grid">
          {CERTS.items.map((c, i) => (
            <motion.div
              className="cert-card"
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.06, ease: EASE }}
            >
              <span className="cert-idx">{String(i + 1).padStart(2, "0")}</span>
              <h3>{c.name}</h3>
              <p>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Work({ limit = 0, preview = true, num = "02" }) {
  const [hovered, setHovered] = useState(null);
  const [failed, setFailed] = useState({});
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 140, damping: 18, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 140, damping: 18, mass: 0.4 });
  const projects = limit ? WORK.projects.slice(0, limit) : WORK.projects;

  return (
    <section id="work">
      <div className="container">
        <div className="work-head">
          <SectionHead num={num} eyebrow={WORK.eyebrow} title={WORK.title} />
          <Reveal delay={0.1}>
            <Link className="btn" to="/contact">
              {WORK.cta} <span className="arr"><Icon name="arrow" size={16} /></span>
            </Link>
          </Reveal>
        </div>

        <div
          className="work-list"
          onMouseMove={(e) => { if (preview) { mx.set(e.clientX + 30); my.set(e.clientY - 110); } }}
          onMouseLeave={() => setHovered(null)}
        >
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={0.03 * i}>
              <a
                className="work-row"
                href={p.url}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => preview && setHovered(p)}
              >
                <span className="w-idx">/ {String(i + 1).padStart(2, "0")}</span>
                <span className="w-name">
                  {p.name}
                  <span className="w-tags">
                    {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                  </span>
                </span>
                <span className="w-desc">{p.desc}</span>
                <span className="w-arrow"><Icon name="arrow" size={26} /></span>
              </a>
            </Reveal>
          ))}

          <AnimatePresence>
            {preview && hovered && (
              <motion.div className="work-preview" style={{ x: sx, y: sy }} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.25, ease: EASE }}>
                {!failed[hovered.name] ? (
                  <img src={hovered.img} alt={hovered.name} onError={() => setFailed((f) => ({ ...f, [hovered.name]: true }))} />
                ) : (
                  <div className="fallback">{hovered.name.charAt(0)}</div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Reveal delay={0.1}>
          <div className="work-foot">
            {limit ? (
              <Link className="btn btn-solid" to="/work">
                View All Work <span className="arr"><Icon name="arrow" size={16} /></span>
              </Link>
            ) : (
              <a className="btn" href={LINKS.contra} target="_blank" rel="noreferrer">
                {WORK.contraCta} <span className="arr"><Icon name="arrow" size={16} /></span>
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
