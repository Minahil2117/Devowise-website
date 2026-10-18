import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BYTECORP_PROCESS } from "../data/content";

export function ByteCorpProcess() {
  const [activeStep, setActiveStep] = useState(1); // Default to Design (index 1) to match screenshot
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance through steps smoothly, pausing when user hovers or interacts
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % BYTECORP_PROCESS.steps.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      id="process"
      className="byte-process-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        {/* Top Header Row with Button */}
        <div className="byte-process-topbar">
          <div className="byte-process-headline-wrap">
            <span className="byte-section-eyebrow">{BYTECORP_PROCESS.eyebrow}</span>
            <h2 className="byte-section-title">{BYTECORP_PROCESS.title}</h2>
          </div>
          <Link to="/work" className="btn-byte-primary byte-process-cta-btn">
            <span>See How We’ve Built for Others</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* 2-Column Interactive Process Architecture */}
        <div className="byte-process-interactive-grid">
          {/* Left Column: Interactive Stepper Timeline */}
          <div className="byte-process-timeline">
            <div className="byte-timeline-track" />
            
            {BYTECORP_PROCESS.steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.title}
                  className={`byte-timeline-step ${isActive ? "active" : ""}`}
                  onClick={() => setActiveStep(idx)}
                >
                  {/* Step Dot on Track */}
                  <div className={`byte-timeline-dot ${isActive ? "active-dot" : ""}`}>
                    {isActive && <span className="byte-timeline-dot-pulse" />}
                  </div>

                  {/* Step Text Content */}
                  <div className="byte-timeline-content">
                    <h3 className="byte-timeline-title">
                      {step.title}
                    </h3>
                    <p className="byte-timeline-desc">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Animated Interactive Circuit Radar Diagram */}
          <div className="byte-process-visualizer">
            <div className="byte-vis-grid-bg" aria-hidden="true" />

            {/* SVG Circuits & Animated Signal Beams */}
            <svg
              className="byte-vis-svg"
              viewBox="0 0 540 370"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <filter id="radarGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="limeBeamGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a3e635" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#a3e635" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Wire 1: Card 01 bottom to Radar Center */}
              <path
                d="M 120 102 L 120 178"
                className="byte-circuit-wire"
              />

              {/* Wire 2: Radar Center to Junction */}
              <path
                d="M 142 205 L 235 205"
                className="byte-circuit-wire"
              />

              {/* Wire 3: Junction to Card 02 (Top Right) */}
              <path
                d="M 235 205 L 235 78 Q 235 68 245 68 L 335 68"
                className="byte-circuit-wire"
              />

              {/* Wire 4: Junction to Card 03 (Bottom Right) */}
              <path
                d="M 235 205 L 235 300 Q 235 310 245 310 L 325 310"
                className="byte-circuit-wire"
              />

              {/* Glowing Active Lit Path (Highlighting Circuit based on Stage) */}
              {activeStep === 1 && (
                <>
                  <path
                    d="M 235 205 L 235 300 Q 235 310 245 310 L 325 310"
                    stroke="#a3e635"
                    strokeWidth="2.2"
                    fill="none"
                    filter="url(#limeBeamGlow)"
                    className="byte-active-circuit-glow"
                  />
                  <circle r="4" fill="#a3e635" filter="url(#radarGlow)">
                    <animateMotion
                      path="M 142 205 L 235 205 L 235 300 Q 235 310 245 310 L 325 310"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </>
              )}

              {activeStep === 0 && (
                <>
                  <path
                    d="M 120 102 L 120 178"
                    stroke="#a3e635"
                    strokeWidth="2.2"
                    fill="none"
                    filter="url(#limeBeamGlow)"
                  />
                  <circle r="4" fill="#a3e635" filter="url(#radarGlow)">
                    <animateMotion
                      path="M 120 102 L 120 178"
                      dur="1.8s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </>
              )}

              {activeStep === 2 && (
                <>
                  <path
                    d="M 142 205 L 235 205 L 235 78 Q 235 68 245 68 L 335 68"
                    stroke="#ffffff"
                    strokeWidth="2.2"
                    fill="none"
                    filter="url(#limeBeamGlow)"
                  />
                  <circle r="4" fill="#ffffff" filter="url(#radarGlow)">
                    <animateMotion
                      path="M 142 205 L 235 205 L 235 78 Q 235 68 245 68 L 335 68"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </>
              )}

              {activeStep === 3 && (
                <>
                  <path
                    d="M 235 205 L 235 300 Q 235 310 245 310 L 325 310"
                    stroke="#a78bfa"
                    strokeWidth="2.2"
                    fill="none"
                    filter="url(#limeBeamGlow)"
                  />
                  <circle r="4" fill="#a78bfa" filter="url(#radarGlow)">
                    <animateMotion
                      path="M 235 205 L 235 300 Q 235 310 245 310 L 325 310"
                      dur="2.2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </>
              )}
            </svg>

            {/* Card 01 (Top Left) */}
            <div
              className={`byte-arch-card card-01 ${activeStep === 0 ? "arch-card-active" : ""}`}
              onClick={() => setActiveStep(0)}
            >
              <div className="arch-card-header">01</div>
              <div className="arch-card-row">
                <div className="arch-icon-badge badge-lime">
                  <span>✱</span>
                </div>
                <div className="arch-skeleton-bars">
                  <div className="skeleton-bar bar-long" />
                  <div className="skeleton-bar bar-short" />
                </div>
              </div>
            </div>

            {/* Central Concentric Radar / Sonar Pulse Node */}
            <div
              className={`byte-radar-node-wrap ${activeStep === 1 ? "radar-active" : ""}`}
              onClick={() => setActiveStep(1)}
            >
              <div className="radar-wave wave-1" />
              <div className="radar-wave wave-2" />
              <div className="radar-wave wave-3" />
              <div className="radar-wave wave-4" />
              <div className="radar-center-target">
                <span className="radar-inner-dot" />
              </div>
            </div>

            {/* Card 02 (Top Right) */}
            <div
              className={`byte-arch-card card-02 ${activeStep === 2 ? "arch-card-active" : ""}`}
              onClick={() => setActiveStep(2)}
            >
              <div className="arch-card-header">02</div>
              <div className="arch-card-row">
                <div className="arch-icon-badge badge-dark">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="arch-skeleton-bars">
                  <div className="skeleton-bar bar-long" />
                  <div className="skeleton-bar bar-short" />
                </div>
              </div>
            </div>

            {/* Card 03 (Bottom Right) */}
            <div
              className={`byte-arch-card card-03 ${activeStep === 3 ? "arch-card-active" : ""}`}
              onClick={() => setActiveStep(3)}
            >
              <div className="arch-card-header">03</div>
              <div className="arch-card-row">
                <div className="arch-icon-badge badge-lilac">
                  <span>✦</span>
                </div>
                <div className="arch-skeleton-bars">
                  <div className="skeleton-bar bar-long" />
                  <div className="skeleton-bar bar-short" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
