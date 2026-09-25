import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HERO, LINKS, STACK } from "../data/content";
import { Counter, EASE, Icon, Reveal, SectionHead, TechChip } from "./ui";

const EMPHASIS = new Set(["AI-powered", "digital", "products"]);

const PILLS = [
  ["Services", "/services"],
  ["Work", "/work"],
  ["Team", "/team"],
  ["Contact", "/contact"],
];

const CODE_LINES = [
  { type: "cmd", text: "$ devowise verify --production" },
  { type: "ok", text: "✓ AI agents & evals ......... passed" },
  { type: "ok", text: "✓ auth, billing, tenants .... passed" },
  { type: "ok", text: "✓ edge performance .......... 98/100" },
  { type: "ok", text: "✓ design system coverage .... 100%" },
  { type: "out", text: "→ ship approved. zero ceremony." },
];

export function Hero() {
  const words = HERO.title.split(" ");
  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true">
        <span className="glow g1" />
        <span className="glow g2" />
        <span className="glow g3" />
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
                      transition={{ duration: 0.75, delay: 0.25 + i * 0.05, ease: EASE }}
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
              transition={{ duration: 0.7, delay: 0.8, ease: EASE }}
            >
              {HERO.sub}
            </motion.p>

            <motion.div
              className="route-pills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.95, ease: EASE }}
            >
              {PILLS.map(([label, to]) => (
                <motion.span key={to} whileHover={{ y: -3, scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <Link className="pill" to={to}>{label}</Link>
                </motion.span>
              ))}
              <motion.span whileHover={{ y: -3, scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <a className="pill solid" href={LINKS.calendly} target="_blank" rel="noreferrer">
                  Book a Call
                </a>
              </motion.span>
            </motion.div>
          </div>

          <motion.div
            className="code-panel"
            initial={{ opacity: 0, y: 26, rotate: 1.5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
          >
            <div className="code-head">
              <span className="cdot c1" /><span className="cdot c2" /><span className="cdot c3" />
              <span className="code-title">devowise — production check</span>
              <span className="live"><span className="pulse" /> live</span>
            </div>
            <div className="code-body">
              {CODE_LINES.map((l, i) => (
                <motion.span
                  key={l.text}
                  className={`code-line ${l.type}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 + i * 0.45, ease: EASE }}
                >
                  {l.text}
                </motion.span>
              ))}
              <motion.span
                className="code-line caret"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 + CODE_LINES.length * 0.45 }}
              >
                $ <span className="blink">▍</span>
              </motion.span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
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
