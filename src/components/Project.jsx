import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { WORK, LINKS, projectSlug, PROJECT_DETAILS } from "../data/content";
import { PageHero, Reveal, Icon, EASE, TechChip } from "./ui";
import { Process, Engagements } from "./Studio";
import { Cta } from "./Footer";

export default function ProjectDetail() {
  const { slug } = useParams();
  const idx = WORK.projects.findIndex((p) => projectSlug(p.name) === slug);
  const p = WORK.projects[idx];
  const [failed, setFailed] = useState(false);
  if (!p) {
    return (
      <>
        <PageHero num="W" eyebrow="Selected Work" title="Products shipped, systems that scale." />
        <section><div className="container"><Link className="btn" to="/work">← Back to all work</Link></div></section>
      </>
    );
  }
  const d = PROJECT_DETAILS[slug];
  const prev = WORK.projects[(idx - 1 + WORK.projects.length) % WORK.projects.length];
  const next = WORK.projects[(idx + 1) % WORK.projects.length];

  return (
    <>
      <PageHero num="W" eyebrow="Selected Work" title={p.name} />
      <section>
        <div className="container">
          <Reveal>
            <nav className="crumbs">
              <Link to="/work">Work</Link>
              <span>✦</span>
              <span className="here">{p.name}</span>
            </nav>
          </Reveal>
          <div className="proj-grid">
            <Reveal>
              <motion.div className="proj-media" whileHover={{ scale: 1.015 }} transition={{ duration: 0.4, ease: EASE }}>
                {!failed ? (
                  <img src={p.img} alt={p.name} onError={() => setFailed(true)} />
                ) : (
                  <div className="fallback">{p.name.charAt(0)}</div>
                )}
                <div className="proj-tags">
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </motion.div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="proj-body">
                <p className="lead">{d?.tagline || p.desc}</p>

                <h4 className="case-h">Project overview</h4>
                <p>{d?.overview || p.desc}</p>

                <h4 className="case-h">The challenge</h4>
                <p>{d?.challenge || "Scope, performance, and polish — under real-world constraints."}</p>

                <h4 className="case-h">Our solution & process</h4>
                <p>{d?.solution || "Strategy, design system, and production build — principal-led end to end."}</p>

                <h4 className="case-h">Results</h4>
                <p>{d?.results || "Shipped, scalable, and ready to grow."}</p>

                <div className="proj-stack">
                  <span className="k">Tools used</span>
                  <div className="proj-chips">
                    {(d?.tools || []).map((t) => <TechChip name={t} small key={t} />)}
                  </div>
                </div>
                <div className="hero-ctas">
                  <a className="btn btn-solid" href={LINKS.calendly} target="_blank" rel="noreferrer">
                    Book a Call <span className="arr"><Icon name="arrow" size={16} /></span>
                  </a>
                  <Link className="btn" to="/contact">Start a project</Link>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="proj-nav">
              <Link to={`/work/${projectSlug(prev.name)}`}>← {prev.name}</Link>
              <Link to="/work" className="all">All Work</Link>
              <Link to={`/work/${projectSlug(next.name)}`}>{next.name} →</Link>
            </div>
          </Reveal>
        </div>
      </section>
      <Process num="02" />
      <Engagements num="03" />
      <Cta num={null} />
    </>
  );
}
