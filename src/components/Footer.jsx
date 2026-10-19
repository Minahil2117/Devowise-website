import { Link } from "react-router-dom";
import { DIRECTORY, LINKS, GROUP_PATH, slugOf } from "../data/content";
import { LOGO_SRC } from "../logoData";
import logoImg from "../assets/logo.png";
import { Reveal } from "./ui";

export function Directory({ num = "04" }) {
  return (
    <section id="directory" className="byte-directory-section">
      <div className="container">
        <div className="byte-section-head">
          <span className="byte-section-eyebrow">SITE DIRECTORY</span>
          <h2 className="byte-section-title">{DIRECTORY.title}</h2>
          <p className="byte-section-sub">{DIRECTORY.sub}</p>
        </div>
        <div className="byte-dir-grid">
          {DIRECTORY.groups.map((g, i) => (
            <Reveal key={g.name} delay={(i % 3) * 0.07}>
              <div className="byte-dir-col">
                <h3>
                  {g.name}
                  <Link to={`/${GROUP_PATH[g.name]}`}>All →</Link>
                </h3>
                <ul>
                  {g.items.map(([label, url]) => (
                    <li key={label}>
                      <Link to={`/${GROUP_PATH[g.name]}/${slugOf(url)}`}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Cta() {
  return (
    <section id="contact" className="byte-cta-section">
      <div className="container">
        <div className="byte-cta-card">
          <div className="byte-cta-spotlight" aria-hidden="true" />
          <div className="byte-cta-content">
            <span className="byte-cta-badge">✦ GET IN TOUCH</span>
            <h2 className="byte-cta-title">
              Got a product to build? <br />
              <span className="byte-title-accent">Let’s engineer something that scales.</span>
            </h2>
            <p className="byte-cta-sub">
              Book a 30-minute brainstorming session with our principal engineers. We’ll
              analyze your architecture, pinpoint risks, and provide a concrete action plan.
            </p>

            <div className="byte-cta-actions">
              <a
                className="btn-byte-primary"
                href={LINKS.calendly}
                target="_blank"
                rel="noreferrer"
              >
                <span>Free Brainstorming Session</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a className="btn-byte-outline" href={`mailto:${LINKS.email}`}>
                <span>{LINKS.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="byte-footer">
      <div className="container">
        <div className="byte-foot-grid">
          {/* Brand Column */}
          <div className="byte-foot-brand">
            <Link to="/" className="byte-foot-logo" aria-label="Home">
              <img
                src={logoImg || LOGO_SRC}
                alt="Logo"
                onError={(e) => {
                  e.currentTarget.src = LOGO_SRC;
                }}
              />
            </Link>
            <p className="byte-foot-tagline">
              We design and build AI-powered digital products that scale businesses.
            </p>
            <p className="byte-foot-motto">
              A product and design studio crafting SaaS, AI systems, and high-performance web experiences.
            </p>

            <div className="byte-foot-locations">
              <span className="loc-badge">London</span>
              <span className="loc-badge">Dubai</span>
              <span className="loc-badge">San Francisco</span>
              <span className="loc-badge">Singapore</span>
            </div>
          </div>

          {/* Services Column */}
          <div className="byte-foot-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services/mvp-doctor">Applied Machine Learning</Link></li>
              <li><Link to="/services/ai-prototype-hardening">Data Engineering & Analytics</Link></li>
              <li><Link to="/services/forward-deployed-ai-engineer">AI Consultancy & Agents</Link></li>
              <li><Link to="/services/saas-development">SaaS & Full-Stack Engineering</Link></li>
              <li><Link to="/services/branding-ui-ux-web-development">Product UX/UI Design</Link></li>
              <li><Link to="/services/elastic-infrastructure">Cloud & DevOps Infrastructure</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="byte-foot-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/team">About Us</Link></li>
              <li><Link to="/work">Case Studies</Link></li>
              <li><Link to="/#process">Our Process</Link></li>
              <li><Link to="/#studio">Venture Studio</Link></li>
              <li><Link to="/contact">Contact & Scoping</Link></li>
              <li><a href={LINKS.calendly} target="_blank" rel="noreferrer">Book Discovery Call</a></li>
            </ul>
          </div>

          {/* Directory & Resources Column */}
          <div className="byte-foot-col">
            <h4>Directory</h4>
            <ul>
              <li><Link to="/platforms">Platforms & Stacks</Link></li>
              <li><Link to="/industries">Industries Served</Link></li>
              <li><Link to="/solutions">Digital Solutions</Link></li>
              <li><Link to="/resources">Guides & Checklists</Link></li>
              <li><a href={LINKS.contra} target="_blank" rel="noreferrer">Contra Portfolio</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="byte-foot-bottom">
          <div className="byte-foot-copy">
            © {new Date().getFullYear()} Studio Technologies. All rights reserved.
          </div>
          <div className="byte-foot-links">
            <span>Privacy Policy</span>
            <span className="sep">•</span>
            <span>Terms of Service</span>
            <span className="sep">•</span>
            <span>Security & Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
