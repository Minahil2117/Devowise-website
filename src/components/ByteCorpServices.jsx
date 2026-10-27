import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BYTECORP_PILLARS, LINKS } from "../data/content";
import { Reveal, EASE } from "./ui";
import ServiceDiagram from "./ServiceDiagram";

export function ByteCorpServices({ isPage = false }) {
  const [activePillar, setActivePillar] = useState("ai-data");
  const selectedPillar = BYTECORP_PILLARS.find((p) => p.id === activePillar) || BYTECORP_PILLARS[0];

  return (
    <section id="expertise" className={`byte-services-section ${isPage ? "as-page" : ""}`}>
      <div className="container">
        {/* Section Header */}
        <div className="byte-services-header">
          <span className="byte-section-eyebrow">UNDER ONE ROOF</span>
          <h2 className="byte-services-title">
            AI Development, Product Design, and Software Engineering - under one roof
          </h2>
          <p className="byte-services-sub">
            From first sketch to live system at scale: product strategy, UX, full-stack
            engineering, and AI working as one team.
          </p>
          <div className="byte-header-actions">
            {!isPage && (
              <Link to="/services" className="btn-byte-outline sm">
                View all Services →
              </Link>
            )}
            <a
              href={LINKS.calendly}
              target="_blank"
              rel="noreferrer"
              className="btn-byte-primary sm"
            >
              Book a Call
            </a>
          </div>
        </div>

        {/* 3 Pillars Nav Pills (ByteCorp Style) */}
        <div className="byte-pillars-tabs">
          {BYTECORP_PILLARS.map((pillar) => {
            const isActive = activePillar === pillar.id;
            return (
              <button
                key={pillar.id}
                type="button"
                className={`byte-pillar-tab ${isActive ? "active" : ""}`}
                onClick={() => setActivePillar(pillar.id)}
                style={{
                  "--pillar-accent": pillar.color,
                }}
              >
                <span
                  className="byte-tab-indicator"
                  style={{ backgroundColor: pillar.color }}
                />
                <span className="byte-tab-text">{pillar.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Featured Display (ByteCorp Interactive Showcase) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPillar.id}
            className="byte-pillar-panel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
            style={{
              "--pillar-accent": selectedPillar.color,
            }}
          >
            <div className="byte-panel-grid">
              {/* Left Column: Headline, Description & Sub-services */}
              <div className="byte-panel-content">
                <div
                  className="byte-panel-tag"
                  style={{
                    borderColor: `${selectedPillar.color}55`,
                    color: selectedPillar.color,
                  }}
                >
                  <span
                    className="byte-tag-dot"
                    style={{
                      backgroundColor: selectedPillar.color,
                      boxShadow: `0 0 10px ${selectedPillar.color}`,
                    }}
                  />
                  <span>{selectedPillar.tag}</span>
                </div>

                <h3 className="byte-panel-headline">{selectedPillar.headline}</h3>
                <p className="byte-panel-desc">{selectedPillar.desc}</p>

                {/* Sub-services list with chevrons */}
                <div className="byte-panel-items">
                  {selectedPillar.items.map((item) => (
                    <Link
                      to={selectedPillar.slug}
                      key={item.num}
                      className="byte-item-row"
                    >
                      <span className="byte-item-num">{item.num}</span>
                      <div className="byte-item-texts">
                        <span className="byte-item-title">{item.title}</span>
                        <span className="byte-item-sub">{item.desc}</span>
                      </div>
                      <span className="byte-item-chev">›</span>
                    </Link>
                  ))}
                </div>

                <div className="byte-panel-cta-wrap">
                  <Link to={selectedPillar.slug} className="btn-byte-primary">
                    <span>Explore {selectedPillar.label}</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Right Column: Live Interactive Architecture Diagram */}
              <div className="byte-panel-visual">
                <div className="byte-visual-card">
                  <div className="byte-visual-head">
                    <span className="byte-v-badge" style={{ color: selectedPillar.color }}>
                      {selectedPillar.label} Architecture Node
                    </span>
                    <span className="byte-v-live">
                      <span
                        className="byte-live-dot"
                        style={{
                          backgroundColor: selectedPillar.color,
                          boxShadow: `0 0 8px ${selectedPillar.color}`,
                        }}
                      />
                      Active Pipeline
                    </span>
                  </div>
                  <div className="byte-visual-body">
                    <ServiceDiagram
                      type={
                        selectedPillar.id === "ai-data"
                          ? "pipeline"
                          : selectedPillar.id === "design"
                          ? "design"
                          : "system"
                      }
                      hovered={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 3-Cards Grid Below (All Pillars at a Glance) */}
        <div className="byte-pillars-overview-grid">
          {BYTECORP_PILLARS.map((pillar, i) => (
            <Reveal key={pillar.id} delay={i * 0.08}>
              <div
                className="byte-mini-card"
                onClick={() => setActivePillar(pillar.id)}
                style={{
                  "--pillar-accent": pillar.color,
                }}
              >
                <div className="mini-card-top">
                  <span
                    className="mini-card-indicator"
                    style={{
                      backgroundColor: pillar.color,
                      boxShadow: `0 0 8px ${pillar.color}`,
                    }}
                  />
                  <span className="mini-card-label">{pillar.label}</span>
                </div>
                <h4 className="mini-card-title">{pillar.headline}</h4>
                <ul className="mini-card-list">
                  {pillar.items.slice(0, 3).map((item) => (
                    <li key={item.num}>
                      <span className="num">{item.num}</span> {item.title}
                    </li>
                  ))}
                </ul>
                <div className="mini-card-footer">
                  <Link to={pillar.slug} className="mini-card-link">
                    Explore Capabilities <span>→</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
