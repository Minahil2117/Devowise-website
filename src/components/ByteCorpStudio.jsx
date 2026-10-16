import { BYTECORP_STUDIO, LINKS } from "../data/content";
import { Reveal } from "./ui";

export function ByteCorpStudio() {
  return (
    <section id="studio" className="byte-studio-section">
      <div className="container">
        <div className="byte-studio-header">
          <div>
            <span className="byte-section-eyebrow">{BYTECORP_STUDIO.eyebrow}</span>
            <h2 className="byte-section-title">{BYTECORP_STUDIO.title}</h2>
            <p className="byte-section-sub">{BYTECORP_STUDIO.sub}</p>
          </div>
          <div>
            <a
              className="btn-byte-outline"
              href={LINKS.calendly}
              target="_blank"
              rel="noreferrer"
            >
              <span>Partner With Our Studio</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="byte-studio-grid">
          {BYTECORP_STUDIO.products.map((prod, i) => (
            <Reveal key={prod.name} delay={i * 0.08}>
              <div className="byte-studio-card">
                <div className="studio-card-top">
                  <span className="studio-tag">{prod.tag}</span>
                  <span className="studio-stats">{prod.stats}</span>
                </div>
                <h3 className="studio-title">{prod.name}</h3>
                <p className="studio-desc">{prod.desc}</p>
                <div className="studio-card-foot">
                  <span className="studio-indicator">
                    <span className="dot pulse" /> Live in Ecosystem
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
