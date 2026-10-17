import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { WORK, LINKS, projectSlug, PROJECT_DETAILS } from "../data/content";
import { PageHero, Reveal, Icon, EASE, TechChip } from "./ui";
import { ByteCorpProcess } from "./ByteCorpProcess";
import { Cta } from "./Footer";

export default function ProjectDetail() {
  const { slug } = useParams();
  const idx = WORK.projects.findIndex((p) => projectSlug(p.name) === slug);
  const p = WORK.projects[idx];
  const [failed, setFailed] = useState(false);

  if (!p) {
    return (
      <div className="case-detail-page">
        <PageHero num="W" eyebrow="Case Studies" title="Products shipped, systems that scale." />
        <section className="case-study-section">
          <div className="container">
            <Link className="btn-byte-outline" to="/work">
              ← Back to all case studies
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const d = PROJECT_DETAILS[slug];
  const prev = WORK.projects[(idx - 1 + WORK.projects.length) % WORK.projects.length];
  const next = WORK.projects[(idx + 1) % WORK.projects.length];

  return (
    <div className="case-detail-page">
      <PageHero num="W" eyebrow="Selected Case Study" title={p.name} sub={d?.tagline || p.desc} />

      <section className="case-study-section">
        <div className="container case-container">
          <Reveal>
            <nav className="crumbs case-crumbs">
              <Link to="/">Home</Link>
              <span className="crumb-sep">/</span>
              <Link to="/work">Case Studies</Link>
              <span className="crumb-sep">/</span>
              <span className="crumb-current">{p.name}</span>
            </nav>
          </Reveal>

          {/* Large Media Showcase */}
          <Reveal delay={0.08}>
            <div className="case-media-hero">
              {!failed ? (
                <img src={p.img} alt={p.name} onError={() => setFailed(true)} />
              ) : (
                <div className="fallback">{p.name.charAt(0)}</div>
              )}
              <div className="case-media-badges">
                {p.tags.map((t) => (
                  <span className="byte-tag-pill" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Spacious Structured Case Study Content Grid */}
          <div className="case-content-grid">
            {/* Left Content Column: Overview, Challenge, Solution, Results */}
            <div className="case-main-body">
              <Reveal delay={0.12}>
                <div className="case-card">
                  <span className="case-card-label">01 · OVERVIEW</span>
                  <h3 className="case-card-title">Project Overview</h3>
                  <p className="case-card-text">{d?.overview || p.desc}</p>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="case-card">
                  <span className="case-card-label">02 · THE CONSTRAINT</span>
                  <h3 className="case-card-title">The Challenge</h3>
                  <p className="case-card-text">
                    {d?.challenge || "Scope, performance, and polish — engineered under strict production constraints."}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="case-card">
                  <span className="case-card-label">03 · ARCHITECTURE & EXECUTION</span>
                  <h3 className="case-card-title">Our Solution & Engineering</h3>
                  <p className="case-card-text">
                    {d?.solution || "Strategy, modular design systems, and cloud infrastructure engineered end-to-end."}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="case-card case-card-highlight">
                  <span className="case-card-label">04 · BUSINESS IMPACT</span>
                  <h3 className="case-card-title">Results & Deliverables</h3>
                  <p className="case-card-text">
                    {d?.results || "Shipped to production on time, fully tested, and ready to scale with zero friction."}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Sticky Sidebar: Tools, Deliverables, Scoping Call */}
            <aside className="case-sidebar">
              <div className="case-sidebar-box">
                <h4 className="case-side-heading">Technologies Deployed</h4>
                <div className="case-tools-wrap">
                  {(d?.tools || []).map((t) => (
                    <TechChip name={t} small key={t} />
                  ))}
                </div>

                <div className="case-side-divider" />

                <h4 className="case-side-heading">Engineering Standard</h4>
                <ul className="case-side-points">
                  <li>✓ 100% Senior Pod Execution</li>
                  <li>✓ Weekly Working Demos</li>
                  <li>✓ Full IP & Code Ownership</li>
                  <li>✓ Production Gate Testing</li>
                </ul>

                <div className="case-side-divider" />

                <div className="case-side-actions">
                  <a
                    className="btn-byte-primary"
                    href={LINKS.calendly}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Book a Call</span>
                    <Icon name="arrow" size={16} />
                  </a>
                  <Link className="btn-byte-outline" to="/contact">
                    <span>Inquire About Similar Project</span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {/* Project Navigation Footer (Prev / All / Next) */}
          <Reveal delay={0.1}>
            <div className="case-project-nav">
              <Link to={`/work/${projectSlug(prev.name)}`} className="case-nav-btn">
                <span>← Previous: {prev.name}</span>
              </Link>
              <Link to="/work" className="case-nav-all">
                <span>View All Case Studies</span>
              </Link>
              <Link to={`/work/${projectSlug(next.name)}`} className="case-nav-btn">
                <span>Next: {next.name} →</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Modern Pipeline & CTA */}
      <ByteCorpProcess />
      <Cta />
    </div>
  );
}
