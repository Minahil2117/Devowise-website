import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { SERVICES, SERVICE_DOMAINS, LINKS } from "../data/content";
import { Reveal, Icon } from "./ui";
import { ByteCorpProcess } from "./ByteCorpProcess";
import { Cta } from "./Footer";
import ServiceDiagram from "./ServiceDiagram";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug) || SERVICES[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  // Find other services for related exploration
  const relatedServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const domain = SERVICE_DOMAINS.find((d) => d.id === service.domain);

  return (
    <div className="blu-service-page">
      {/* 1. HERO SECTION */}
      <section className="blu-service-hero">
        <div className="container">
          <Reveal>
            <nav className="blu-crumbs">
              <Link to="/services">Services</Link>
              <span className="crumb-sep">/</span>
              <span className="crumb-domain">{service.domainLabel}</span>
              <span className="crumb-sep">/</span>
              <span className="crumb-current">{service.title}</span>
            </nav>

            <div className="blu-hero-content">
              <div className="blu-hero-tag">
                <Icon name={service.icon} size={16} />
                <span>{service.domainLabel}</span>
              </div>
              <h1 className="blu-hero-title">{service.title}</h1>
              <p className="blu-hero-lead">{service.tagline}</p>
              <p className="blu-hero-sub">{service.desc}</p>

              <div className="blu-hero-actions">
                <a
                  className="btn-byte-primary"
                  href={LINKS.calendly}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Book Technical Scoping</span>
                  <span className="arr"><Icon name="arrow" size={16} /></span>
                </a>
                <a className="btn-byte-outline" href="#capabilities">
                  <span>Explore Architecture ↓</span>
                </a>
              </div>

              {/* Tools & Deliverables bar */}
              <div className="blu-hero-meta-bar">
                <div className="blu-meta-col">
                  <span className="meta-lbl">Core Technologies</span>
                  <div className="meta-chips">
                    {service.tools.map((t) => (
                      <span key={t} className="meta-chip">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="blu-meta-col">
                  <span className="meta-lbl">Key Deliverables</span>
                  <div className="meta-chips">
                    {service.deliverables.map((d) => (
                      <span key={d} className="meta-chip-alt">✓ {d}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. ARCHITECTURE & CAPABILITIES PIPELINE SECTION */}
      <section id="capabilities" className="blu-capabilities-section">
        <div className="container">
          <div className="byte-section-head">
            <span className="byte-section-eyebrow">ARCHITECTURE & CAPABILITIES</span>
            <h2 className="byte-section-title">How the system operates.</h2>
            <p className="byte-section-sub">
              A disciplined engineering pipeline from discovery through automated verification and continuous scale.
            </p>
          </div>

          <div className="blu-al-rows">
            {service.capabilities.map((cap, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={cap.index}
                  className={`blu-al-row ${isEven ? "layout-box-left" : "layout-box-right"}`}
                >
                  {/* Left Column */}
                  <div className="blu-al-col blu-al-col-left">
                    <Reveal delay={0.08}>
                      {isEven ? (
                        <div className="blu-al-box">
                          <div className="blu-al-box-head">
                            <span className="blu-al-dot" />
                            <span>Active System Pipeline · Stage {cap.index}</span>
                          </div>
                          <div className="blu-al-box-inner">
                            <ServiceDiagram
                              type={service.diagramType}
                              hovered={true}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="blu-al-content">
                          <span className="blu-al-idx">0{cap.index}</span>
                          <h3 className="blu-al-title">{cap.title}</h3>
                          <p className="blu-al-desc">{cap.desc}</p>
                          <div className="blu-al-badge">
                            <span>Stage {cap.index} Pipeline Verification</span>
                          </div>
                        </div>
                      )}
                    </Reveal>
                  </div>

                  {/* Right Column */}
                  <div className="blu-al-col blu-al-col-right">
                    <Reveal delay={0.16}>
                      {isEven ? (
                        <div className="blu-al-content">
                          <span className="blu-al-idx">0{cap.index}</span>
                          <h3 className="blu-al-title">{cap.title}</h3>
                          <p className="blu-al-desc">{cap.desc}</p>
                          <div className="blu-al-badge">
                            <span>Stage {cap.index} Pipeline Verification</span>
                          </div>
                        </div>
                      ) : (
                        <div className="blu-al-box">
                          <div className="blu-al-box-head">
                            <span className="blu-al-dot" />
                            <span>Active System Pipeline · Stage {cap.index}</span>
                          </div>
                          <div className="blu-al-box-inner">
                            <ServiceDiagram
                              type={service.diagramType}
                              hovered={true}
                            />
                          </div>
                        </div>
                      )}
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. RELATED SERVICES CAROUSEL */}
      <section className="blu-related-section">
        <div className="container">
          <div className="byte-section-head">
            <span className="byte-section-eyebrow">EXPLORE FURTHER</span>
            <h2 className="byte-section-title">Related services & capabilities.</h2>
            <p className="byte-section-sub">
              Combine AI systems with SaaS engineering and design systems to cover your entire digital surface area.
            </p>
          </div>

          <div className="blu-related-grid">
            {relatedServices.map((rel) => (
              <Reveal key={rel.slug} delay={0.05}>
                <Link to={`/services/${rel.slug}`} className="blu-related-card">
                  <div className="rel-top">
                    <span className="rel-tag">
                      <Icon name={rel.icon} size={14} />
                      {rel.domainLabel}
                    </span>
                    <span className="rel-arr"><Icon name="arrow" size={16} /></span>
                  </div>
                  <h4>{rel.title}</h4>
                  <p>{rel.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS & CTA */}
      <ByteCorpProcess />
      <Cta />
    </div>
  );
}
