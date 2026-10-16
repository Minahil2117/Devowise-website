import { BYTECORP_WAVES, LINKS } from "../data/content";
import { Reveal } from "./ui";

export function ByteCorpWaves() {
  return (
    <section className="byte-waves-section">
      <div className="container">
        <div className="byte-waves-header">
          <span className="byte-section-eyebrow">{BYTECORP_WAVES.eyebrow}</span>
          <h2 className="byte-section-title">{BYTECORP_WAVES.title}</h2>
          <p className="byte-section-sub">{BYTECORP_WAVES.sub}</p>
        </div>

        <div className="byte-waves-grid">
          {BYTECORP_WAVES.stats.map((st, i) => (
            <Reveal key={st.label} delay={i * 0.08}>
              <div className="byte-wave-card">
                <div className="byte-wave-val">{st.value}</div>
                <h3 className="byte-wave-label">{st.label}</h3>
                <p className="byte-wave-sub">{st.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="byte-waves-banner">
          <div className="banner-left">
            <h4>Ready to engineer your next breakthrough product?</h4>
            <p>Our senior team is available for Q4 & Q1 engineering partnerships.</p>
          </div>
          <div className="banner-right">
            <a
              className="btn-byte-primary"
              href={LINKS.calendly}
              target="_blank"
              rel="noreferrer"
            >
              <span>Schedule Brainstorming Session</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
