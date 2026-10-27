import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { DIRECTORY, GROUP_PATH, slugOf, CAPABILITIES, CERTS, ABOUT, LINKS } from "../data/content";
import { Reveal, Icon } from "./ui";
import { ByteCorpProcess } from "./ByteCorpProcess";
import { Cta } from "./Footer";

const groupByPath = (p) => DIRECTORY.groups.find((g) => GROUP_PATH[g.name] === p);

/* Real Devowise copy, matched to a page by keyword — no invented content */
function excerptsFor(path, label) {
  const t = label.toLowerCase();
  const cap = (i) => CAPABILITIES[i];
  const cert = (name) => CERTS.items.find((c) => c.name.startsWith(name));
  const out = [];
  const has = (...ws) => ws.some((w) => t.includes(w));

  if (has("framer")) { out.push(cap(4).desc); const c = cert("Framer Expert"); if (c) out.push(c.desc); }
  if (has("webflow")) { out.push(cap(4).desc); const c = cert("Webflow Expert"); if (c) out.push(c.desc); }
  if (has("shopify")) { const c = cert("Shopify Partner"); if (c) out.push(c.desc); out.push(cap(4).desc); }
  if (has("kajabi")) { const c = cert("Kajabi Expert"); if (c) out.push(c.desc); }
  if (has("brand", "logo")) { out.push(cap(2).desc); }
  if (has("ui/ux", "ui-ux", "design")) { out.push(cap(2).desc); }
  if (has("development", "website", "landing", "redesign", "maintenance", "responsive", "custom", "modern", "wordpress")) {
    out.push(cap(1).desc);
  }
  if (has("seo", "conversion", "optimisation")) { out.push(cap(5).desc); }
  if (has("ai")) { out.push(cap(0).desc); }
  if (has("startup", "mvp", "doctor")) { out.push(cap(5).desc); }
  if (has("hardening", "prototype")) { out.push(cap(0).desc); }
  if (has("mobile")) { out.push(cap(1).desc); }
  if (has("platform", "next")) { out.push(cap(1).desc); }
  if (has("saas")) { out.push(cap(1).desc); }
  if (has("full-stack", "full stack", "web &")) { out.push(cap(1).desc); }
  if (has("infrastructure", "elastic")) { out.push(cap(3).desc); }
  if (has("forward", "deployed", "engineer")) { out.push(cap(0).desc); }

  const clean = out.filter(Boolean);
  if (!clean.length) { out.push(ABOUT.p1, ABOUT.p2); }
  else out.push(ABOUT.p2);
  return [...new Set(out.filter(Boolean))].slice(0, 3);
}

export function GroupIndexPage({ groupPath }) {
  const group = groupByPath(groupPath);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [groupPath]);

  if (!group) return null;

  return (
    <div className="directory-group-page">
      {/* Hero Header */}
      <section className="dir-group-hero">
        <div className="container">
          <Reveal>
            <nav className="dir-crumbs">
              <Link to="/">Home</Link>
              <span className="crumb-sep">/</span>
              <span className="crumb-current">{group.name}</span>
            </nav>
            <span className="byte-section-eyebrow">{group.name} CATALOG</span>
            <h1 className="dir-hero-title">All {group.name}</h1>
            <p className="dir-hero-sub">{DIRECTORY.sub}</p>
          </Reveal>
        </div>
      </section>

      {/* Grid of Cards */}
      <section className="dir-group-content">
        <div className="container">
          <div className="dir-cards-grid">
            {group.items.map(([label, url], i) => (
              <Reveal key={label} delay={(i % 3) * 0.06}>
                <Link className="dir-item-card" to={`/${groupPath}/${slugOf(url)}`}>
                  <div className="dir-card-top">
                    <span className="dir-item-num">0{i + 1}</span>
                    <span className="dir-item-arrow">→</span>
                  </div>
                  <h3 className="dir-card-title">{label}</h3>
                  <p className="dir-card-desc">
                    Senior engineering and design capabilities tailored for {label} deployments.
                  </p>
                  <span className="dir-card-action">View Specifications ↗</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ByteCorpProcess />
      <Cta />
    </div>
  );
}

export function DetailPage({ groupPath }) {
  const { slug } = useParams();
  const group = groupByPath(groupPath);
  const item = group?.items.find(([label, url]) => slugOf(url) === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!group || !item) return <GroupIndexPage groupPath={groupPath} />;
  const [label, url] = item;
  const paras = excerptsFor(groupPath, label);
  const related = group.items.filter(([l]) => l !== label).slice(0, 6);

  return (
    <div className="custom-detail-page">
      {/* 1. HERO SECTION */}
      <section className="detail-hero-section">
        <div className="container">
          <Reveal>
            <nav className="detail-crumbs">
              <Link to={`/${groupPath}`}>{group.name}</Link>
              <span className="crumb-sep">/</span>
              <span className="crumb-current">{label}</span>
            </nav>

            <div className="detail-hero-header">
              <span className="detail-badge">
                <span className="detail-badge-dot" />
                {group.name} Capability Spec
              </span>
              <h1 className="detail-title">{label}</h1>
              {paras[0] && <p className="detail-lead">{paras[0]}</p>}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. MAIN 2-COLUMN STRUCTURED CONTENT & SIDEBAR */}
      <section className="detail-main-section">
        <div className="container detail-container-grid">
          {/* Left Column: Structured Cards & Deep Specifications */}
          <div className="detail-body-col">
            <Reveal delay={0.06}>
              <div className="detail-card">
                <span className="detail-card-label">01 · OVERVIEW & SPECIALIZATION</span>
                <h3 className="detail-card-title">Production Delivery for {label}</h3>
                <p className="detail-card-text">
                  {paras[1] || paras[0]}
                </p>
              </div>
            </Reveal>

            {paras[2] && (
              <Reveal delay={0.1}>
                <div className="detail-card">
                  <span className="detail-card-label">02 · ARCHITECTURAL EXECUTION</span>
                  <h3 className="detail-card-title">Engineering Standards & Resilience</h3>
                  <p className="detail-card-text">
                    {paras[2]}
                  </p>
                </div>
              </Reveal>
            )}

            {/* Standard Guarantees */}
            <Reveal delay={0.14}>
              <div className="detail-card detail-card-features">
                <span className="detail-card-label">03 · PRODUCTION STANDARDS</span>
                <h3 className="detail-card-title">What You Receive</h3>
                <div className="detail-checklist">
                  <div className="checklist-item">
                    <span className="check-dot">✓</span>
                    <div>
                      <strong>Production-Grade Codebase</strong>
                      <p>Clean TypeScript/React or modern framework implementation, tested and ready to deploy.</p>
                    </div>
                  </div>
                  <div className="checklist-item">
                    <span className="check-dot">✓</span>
                    <div>
                      <strong>100% IP & Asset Ownership</strong>
                      <p>Full copyright, repository access, and Figma tokens handed over on completion.</p>
                    </div>
                  </div>
                  <div className="checklist-item">
                    <span className="check-dot">✓</span>
                    <div>
                      <strong>Senior Pod Execution</strong>
                      <p>Direct collaboration with principal engineers and designers with zero middle management.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Action Buttons */}
            <Reveal delay={0.18}>
              <div className="detail-actions-row">
                <a
                  className="btn-byte-primary"
                  href={LINKS.calendly}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Book Technical Scoping</span>
                  <Icon name="arrow" size={16} />
                </a>
                <Link className="btn-byte-outline" to="/contact">
                  <span>Inquire About {label}</span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Sticky Sidebar with Related Capabilities & Guarantees */}
          <aside className="detail-sidebar-col">
            <div className="detail-sticky-sidebar">
              <div className="detail-side-box">
                <h4 className="detail-side-heading">Related {group.name}</h4>
                <div className="detail-related-nav">
                  {related.map(([l, u]) => (
                    <Link
                      key={l}
                      to={`/${groupPath}/${slugOf(u)}`}
                      className="detail-related-link"
                    >
                      <span>{l}</span>
                      <span className="arrow">→</span>
                    </Link>
                  ))}
                </div>

                <div className="detail-side-divider" />

                <Link to={`/${groupPath}`} className="detail-view-all">
                  <span>View All {group.name}</span>
                  <span>↗</span>
                </Link>
              </div>

              {/* Scoping Call Box */}
              <div className="detail-advisory-box">
                <div className="advisory-icon">✦</div>
                <h5>Ready to build?</h5>
                <p>Have our senior technical team review your architecture and roadmap in a 30-minute scoping session.</p>
                <a
                  href={LINKS.calendly}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-byte-primary sm full-width"
                >
                  Book Discovery Call
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Modern Pipeline & CTA */}
      <ByteCorpProcess />
      <Cta />
    </div>
  );
}
