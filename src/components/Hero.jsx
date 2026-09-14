import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HERO, LINKS, STACK, CERTS } from "../data/content";
import { Counter, EASE, Icon, Reveal, SectionHead } from "./ui";

const EMPHASIS = new Set(["AI-powered", "digital", "products"]);
const MotionLink = motion(Link);

export function Hero() {
  const words = HERO.title.split(" ");
  return (
    <section className="hero" id="top">
      <div className="hero-video-wrap" aria-hidden="true">
        <video autoPlay muted loop playsInline src="/hero.mp4" />
        <div className="hero-grid" />
      </div>
      <div className="container">
        <div className="hero-inner">
          <div>
            <motion.span
              className="hero-badge"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <span className="pulse" />
              {HERO.eyebrow}
            </motion.span>

            <h1 aria-label={HERO.title}>
              {words.map((w, i) => (
                <span key={`${w}-${i}`}>
                  <span className="mask">
                    <motion.span
                      className={`word ${EMPHASIS.has(w) ? "grad-text" : ""}`}
                      initial={{ y: "112%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.75, delay: 0.25 + i * 0.055, ease: EASE }}
                    >
                      {w}
                    </motion.span>
                  </span>{" "}
                </span>
              ))}
            </h1>

            <motion.p
              className="sub"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
            >
              {HERO.sub}
            </motion.p>

            <motion.div
              className="hero-ctas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.05, ease: EASE }}
            >
              <a className="btn btn-solid" href={LINKS.calendly} target="_blank" rel="noreferrer">
                Book a Call <span className="arr"><Icon name="arrow" size={16} /></span>
              </a>
              <Link className="btn" to="/work">View Work</Link>
            </motion.div>
          </div>

          <div className="hero-side">
            <MotionLink
              className="spin-badge"
              to="/work"
              aria-label="View technology stack and work"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
            >
              <svg viewBox="0 0 200 200">
                <defs>
                  <path id="circ" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
                </defs>
                <text>
                  <textPath href="#circ">We Build What Others Imagine • Devowise •&#160;</textPath>
                </text>
              </svg>
              <span className="core"><Icon name="arrow" size={26} /></span>
            </MotionLink>
          </div>
        </div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
        >
          {HERO.stats.map((s) => (
            <div className="stat" key={s.label}>
              <Counter value={s.value} suffix={s.suffix || ""} pad={s.pad} decimals={s.decimals || 0} />
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* Devsinc-style moving logo strip (certifications & partners) */
export function LogoBar() {
  const items = CERTS.items.map((c) => c.name);
  const doubled = [...items, ...items];
  return (
    <div className="logo-bar" aria-hidden="true">
      <div className="logo-bar-track">
        {doubled.map((name, i) => (
          <span className="logo-item" key={`${name}-${i}`}>
            <span className="mark" />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

function MarqueeRow({ tools, rev }) {
  const doubled = [...tools, ...tools];
  return (
    <div className={`marquee ${rev ? "rev" : ""}`}>
      <div className="marquee-track">
        {doubled.map((t, i) => (
          <span className="chip" key={`${t}-${i}`}>
            <span className="dot" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Stack({ num = "01" }) {
  const half = Math.ceil(STACK.tools.length / 2);
  return (
    <section id="stack">
      <div className="container">
        <SectionHead num={num} eyebrow={STACK.eyebrow} title={STACK.title} sub={STACK.sub} />
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
