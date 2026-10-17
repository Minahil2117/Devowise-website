import { motion } from "framer-motion";
import { HERO, STACK, CLIENTS, logoDev, LINKS } from "../data/content";
import { Counter, EASE, Icon, Reveal, TechChip } from "./ui";

export function Hero() {
  return (
    <section className="byte-hero" id="top">
      {/* Ambient background glow & grid lines */}
      <div className="byte-hero-spotlight" aria-hidden="true" />
      <div className="byte-hero-grid" aria-hidden="true" />

      <div className="container byte-hero-container">
        {/* Top Eyebrow Pill */}
        <motion.div
          className="byte-hero-badge-wrap"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span className="byte-hero-badge">
            <span className="byte-badge-dot" />
            {HERO.eyebrow}
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="byte-hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: EASE }}
        >
          {HERO.title}
        </motion.h1>

        {/* Subhead */}
        <motion.p
          className="byte-hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
        >
          {HERO.sub}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="byte-hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
        >
          <a
            className="btn-byte-primary"
            href={LINKS.calendly}
            target="_blank"
            rel="noreferrer"
          >
            <span>{HERO.ctaPrimary}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a className="btn-byte-outline" href="#expertise">
            <span>{HERO.ctaSecondary}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>

        {/* Metrics Bar */}
        <motion.div
          className="byte-hero-stats"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
        >
          {HERO.stats.map((s) => (
            <div className="byte-stat-cell" key={s.label}>
              <div className="byte-stat-value">
                {s.prefix && <span>{s.prefix}</span>}
                <Counter value={s.value} suffix={s.suffix || ""} decimals={s.decimals || 0} />
              </div>
              <div className="byte-stat-label">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Partner Logos Marquee (ByteCorp Minimalist Slider) */}
      <div className="byte-logo-marquee-wrap">
        <div className="byte-marquee-track">
          {[...CLIENTS, ...CLIENTS, ...CLIENTS].map(([name, dom], i) => (
            <div className="byte-logo-item" key={`${name}-${i}`}>
              <img
                src={logoDev(dom)}
                alt={name}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextSibling.style.display = "inline-block";
                }}
              />
              <span className="byte-logo-fallback">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarqueeRow({ tools, rev }) {
  const doubled = [...tools, ...tools];
  return (
    <div className={`marquee ${rev ? "rev" : ""}`}>
      <div className="marquee-track">
        {doubled.map((t, i) => (
          <TechChip name={t} key={`${t}-${i}`} />
        ))}
      </div>
    </div>
  );
}

export function Stack({ num = "01" }) {
  const half = Math.ceil(STACK.tools.length / 2);
  return (
    <section id="stack" className="byte-stack-section">
      <div className="container">
        <div className="byte-section-head">
          <span className="byte-section-eyebrow">TECHNOLOGY & STACK</span>
          <h2 className="byte-section-title">{STACK.title}</h2>
          <p className="byte-section-sub">{STACK.sub}</p>
        </div>
        <Reveal delay={0.15}>
          <div className="marquee-wrap">
            <MarqueeRow tools={STACK.tools.slice(0, half)} />
            <MarqueeRow tools={STACK.tools.slice(half)} rev />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
