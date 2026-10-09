import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, SERVICE_DOMAINS, LINKS } from "../data/content";
import { SectionHead, Reveal, Icon, TechChip, EASE } from "./ui";
import ServiceDiagram from "./ServiceDiagram";

export function ServicesShowcase({ num = "02", title, sub, limit = null }) {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredSlug, setHoveredSlug] = useState(null);

  const filteredServices = SERVICES.filter((s) => {
    if (activeTab === "all") return true;
    return s.domain === activeTab;
  });

  const displayedServices = limit ? filteredServices.slice(0, limit) : filteredServices;

  return (
    <section id="services-showcase" className="services-showcase-section">
      <div className="container">
        <SectionHead
          num={num}
          eyebrow="Services & Capabilities"
          title={title || "Engineered for institutional scale."}
          sub={
            sub ||
            "Senior-led product engineering across AI systems, SaaS platforms, and digital product design — explore how each service operates."
          }
        />

        {/* Domain Filter Tabs */}
        <div className="blu-tabs-wrap">
          <div className="blu-tabs" role="tablist" aria-label="Service Domains">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "all"}
              className={`blu-tab ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              <span>All Services</span>
              <span className="blu-tab-count">{SERVICES.length}</span>
            </button>
            {SERVICE_DOMAINS.map((dom) => {
              const count = SERVICES.filter((s) => s.domain === dom.id).length;
              return (
                <button
                  key={dom.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === dom.id}
                  className={`blu-tab ${activeTab === dom.id ? "active" : ""}`}
                  onClick={() => setActiveTab(dom.id)}
                >
                  <span className="blu-tab-ico">
                    <Icon name={dom.icon} size={15} />
                  </span>
                  <span>{dom.label}</span>
                  <span className="blu-tab-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Blutech-style Interactive Service Cards Grid */}
        <motion.div layout className="blu-cards-grid">
          <AnimatePresence mode="popLayout">
            {displayedServices.map((srv, idx) => {
              const isHovered = hoveredSlug === srv.slug;
              return (
                <motion.div
                  key={srv.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: idx * 0.04, ease: EASE }}
                  className="blu-card-col"
                  onMouseEnter={() => setHoveredSlug(srv.slug)}
                  onMouseLeave={() => setHoveredSlug(null)}
                >
                  <Link
                    to={`/services/${srv.slug}`}
                    className={`blu-card ${isHovered ? "hovered" : ""}`}
                  >
                    {/* Top Row: Domain Tag & Index */}
                    <div className="blu-card-top">
                      <span className="blu-card-badge">
                        <Icon name={srv.icon} size={13} />
                        {srv.domainLabel}
                      </span>
                      <span className="blu-card-idx">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Header Row: Title & Blutech Signature Dashed Arrow */}
                    <div className="blu-card-header">
                      <h3 className="blu-card-title">{srv.title}</h3>
                      <div className="blu-card-arrow" aria-hidden="true">
                        <Icon name="arrow" size={20} />
                      </div>
                    </div>

                    {/* Value Description */}
                    <p className="blu-card-desc">{srv.desc}</p>

                    {/* Architecture Visual Diagram */}
                    <div className="blu-card-visual" aria-hidden="true">
                      <ServiceDiagram
                        type={srv.diagramType}
                        hovered={isHovered}
                      />
                    </div>

                    {/* Tech & Deliverables Footer */}
                    <div className="blu-card-footer">
                      <div className="blu-card-tools">
                        {srv.tools.slice(0, 4).map((tool) => (
                          <span key={tool} className="blu-tool-chip">
                            {tool}
                          </span>
                        ))}
                      </div>
                      <span className="blu-card-explore">
                        Inspect Architecture <span>→</span>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner */}
        <div className="blu-showcase-cta">
          <div className="blu-showcase-text">
            <h4>Not sure which service fits your roadmap best?</h4>
            <p>
              Book a 30-minute scoping session with a principal engineer. We will review
              your architecture and suggest the highest-leverage next step.
            </p>
          </div>
          <div className="blu-showcase-actions">
            <a
              className="btn btn-solid"
              href={LINKS.calendly}
              target="_blank"
              rel="noreferrer"
            >
              Book a Technical Review <span className="arr"><Icon name="arrow" size={16} /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
