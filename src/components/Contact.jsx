import { useState } from "react";
import { LINKS } from "../data/content";
import { Reveal } from "./ui";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const mailto = () => {
    const subject = encodeURIComponent(`Project Scoping Inquiry: ${form.name || "New Build"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nProject Scope & Architecture Details:\n${form.message}`
    );
    return `mailto:${LINKS.email}?subject=${subject}&body=${body}`;
  };

  const submit = (e) => {
    e.preventDefault();
    window.location.href = mailto();
    setSent(true);
  };

  const copyMsg = async () => {
    try {
      await navigator.clipboard.writeText(
        `Name: ${form.name}\nEmail: ${form.email}\n\nScope:\n${form.message}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard fallback */
    }
  };

  return (
    <section id="contact" className="byte-contact-section">
      <div className="container">
        <div className="byte-contact-grid">
          {/* Left Column: Direct Message / Project Scoping Form */}
          <Reveal>
            <div className="contact-form-box">
              <div className="contact-box-header">
                <span className="contact-badge">
                  <span className="contact-dot" />
                  Direct Technical Inquiry
                </span>
                <h3 className="contact-box-title">Send Us Your Scope</h3>
                <p className="contact-box-desc">
                  Tell us about your product, roadmap, or architecture bottlenecks. A principal engineer will review and reply within 4 business hours.
                </p>
              </div>

              <form className="byte-contact-form" onSubmit={submit}>
                <div className="form-group">
                  <label htmlFor="cf-name" className="form-label">
                    Full Name <span className="req">*</span>
                  </label>
                  <input
                    id="cf-name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cf-email" className="form-label">
                    Work Email <span className="req">*</span>
                  </label>
                  <input
                    id="cf-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cf-msg" className="form-label">
                    Project Details & Technical Scope <span className="req">*</span>
                  </label>
                  <textarea
                    id="cf-msg"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about the problem, stack requirements, target launch date, and budget…"
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn-byte-primary full-width contact-submit-btn">
                  <span>Send Technical Scope</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

                <p className="form-privacy-note">
                  🔒 No sales spam or intermediaries. All inquiries are covered under our mutual NDA policy.
                </p>

                {sent && (
                  <div className="contact-sent-card">
                    <div className="sent-head">
                      <span className="sent-check">✓</span>
                      <div>
                        <strong>Inquiry Prepared</strong>
                        <p>Your default mail client should have opened. If not, click below or copy message.</p>
                      </div>
                    </div>
                    <div className="sent-actions">
                      <a className="btn-byte-outline sm" href={mailto()}>
                        Open Mail App ↗
                      </a>
                      <button className="btn-byte-outline sm" type="button" onClick={copyMsg}>
                        {copied ? "Copied ✓" : "Copy Details"}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </Reveal>

          {/* Right Column: Fast-Track Scoping Call & Direct Contact Info */}
          <div className="contact-info-col">
            {/* Scoping Call Card (Primary) */}
            <Reveal delay={0.08}>
              <div className="contact-card primary-card">
                <div className="card-top-badge">
                  <span className="live-pulse-dot" />
                  FAST-TRACK DISCOVERY
                </div>
                <h4 className="card-title">Book a 30-Min Scoping Session</h4>
                <p className="card-desc">
                  Prefer to talk live? Schedule a direct 30-minute technical session with our principal engineers. We review your architecture, evaluate feasibility, and provide sprint estimates.
                </p>
                <div className="card-meta">
                  <div className="meta-item">
                    <span className="meta-icon">✓</span>
                    <span>Direct engineering review (no sales reps)</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">✓</span>
                    <span>High-level roadmap & feasibility estimate</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">✓</span>
                    <span>Strict confidentiality / NDA protected</span>
                  </div>
                </div>
                <a
                  href={LINKS.calendly}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-byte-primary full-width"
                >
                  <span>Schedule on Calendly</span>
                  <span className="duration-tag">30 min</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </Reveal>

            {/* Direct Email Card */}
            <Reveal delay={0.14}>
              <div className="contact-card sub-card">
                <div className="sub-card-header">
                  <div className="icon-wrap">✉</div>
                  <div>
                    <span className="sub-label">DIRECT INBOX</span>
                    <h5 className="sub-title">Engineering & RFP</h5>
                  </div>
                </div>
                <p className="sub-desc">
                  Have an existing RFP, Figma file, or architectural document? Send it directly to our team.
                </p>
                <a className="contact-link-row" href={`mailto:${LINKS.email}`}>
                  <span className="link-val">{LINKS.email}</span>
                  <span className="link-arrow">↗</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
