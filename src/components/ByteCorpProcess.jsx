import { Link } from "react-router-dom";
import { BYTECORP_PROCESS, LINKS } from "../data/content";
import { Reveal } from "./ui";

export function ByteCorpProcess() {
  return (
    <section id="process" className="byte-process-section">
      <div className="container">
        {/* Section Header */}
        <div className="byte-process-head-grid">
          <div className="byte-p-head-left">
            <span className="byte-section-eyebrow">{BYTECORP_PROCESS.eyebrow}</span>
            <h2 className="byte-section-title">{BYTECORP_PROCESS.title}</h2>
            <Link to="/work" className="btn-byte-primary mt-6 inline-flex">
              <span>See How We’ve Built for Others</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="byte-p-head-right">
            <p className="byte-p-subtext">{BYTECORP_PROCESS.sub}</p>
            <div className="byte-p-guarantee">
              <span className="byte-check-icon">✓</span>
              <span>100% Senior Principal Engineers. Weekly Working Software Demos.</span>
            </div>
          </div>
        </div>

        {/* 4 Process Step Cards */}
        <div className="byte-process-grid">
          {BYTECORP_PROCESS.steps.map((step, idx) => (
            <Reveal key={step.num} delay={idx * 0.08}>
              <div className="byte-step-card">
                <div className="byte-step-top">
                  <span className="byte-step-num">{step.num}</span>
                  <span className="byte-step-phase">{step.phase}</span>
                </div>

                <h3 className="byte-step-title">{step.title}</h3>
                <p className="byte-step-desc">{step.desc}</p>

                <div className="byte-step-deliverables">
                  <span className="byte-deliv-label">Phase Deliverables</span>
                  <ul className="byte-deliv-list">
                    {step.deliverables.map((d) => (
                      <li key={d}>
                        <span className="deliv-bullet">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
