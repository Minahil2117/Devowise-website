import { Link } from "react-router-dom";
import { WORK, projectSlug } from "../data/content";
import { Reveal } from "./ui";

export function ByteCorpWork({ limit = 6, isPage = false }) {
  const projects = limit ? WORK.projects.slice(0, limit) : WORK.projects;

  return (
    <section id="work" className={`byte-work-section ${isPage ? "as-page" : ""}`}>
      <div className="container">
        {/* Section Header */}
        <div className="byte-work-header">
          <span className="byte-section-eyebrow">CASE STUDIES & IMPACT</span>
          <h2 className="byte-section-title">
            Products we’ve built and the results they delivered.
          </h2>
          <p className="byte-section-sub">
            A curated selection of production systems, SaaS platforms, and AI applications shipped for our clients.
          </p>
          {!isPage && (
            <div className="byte-work-actions">
              <Link to="/work" className="btn-byte-outline sm">
                <span>See All Case Studies</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          )}
        </div>

        {/* Case Studies Grid */}
        <div className="byte-work-grid">
          {projects.map((proj, idx) => (
            <Reveal key={proj.name} delay={idx * 0.07}>
              <Link
                to={`/work/${projectSlug(proj.name)}`}
                className="byte-work-card"
              >
                {/* Media Image with dark overlay */}
                <div className="byte-card-media">
                  <img
                    src={proj.img}
                    alt={proj.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="byte-media-badges">
                    {proj.tags.map((t) => (
                      <span key={t} className="byte-tag-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Content */}
                <div className="byte-card-body">
                  <div className="byte-card-title-row">
                    <h3 className="byte-card-title">{proj.name}</h3>
                    <span className="byte-card-arrow">↗</span>
                  </div>
                  <p className="byte-card-desc">{proj.desc}</p>
                  <div className="byte-card-meta">
                    <span className="byte-verified-badge">
                      <span className="dot" /> Shipped to Production
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
