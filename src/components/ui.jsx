import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

export function Reveal({ children, delay = 0, y = 28, className, once = true }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({ num, eyebrow, title, sub }) {
  return (
    <Reveal>
      <div className="s-head">
        {num && <span className="s-index">( {num} )</span>}
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <div className="s-title-row">
        <h2 className="section-title">{title}</h2>
        {sub && <p className="section-sub">{sub}</p>}
      </div>
    </Reveal>
  );
}

export function Counter({ value, suffix = "", pad = false, decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [txt, setTxt] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (v) => {
        let s = v.toFixed(decimals);
        if (pad) s = String(Math.round(v)).padStart(2, "0");
        setTxt(s);
      },
    });
    return () => controls.stop();
  }, [inView, value, pad, decimals]);

  return (
    <span ref={ref} className="num">
      {txt}
      {suffix && <sup>{suffix}</sup>}
    </span>
  );
}

export function PageHero({ num, eyebrow, title, sub }) {
  return (
    <div className="page-hero">
      <div className="ph-bg" />
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
          <div className="s-head">
            {num && <span className="s-index">( {num} )</span>}
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <div className="s-title-row">
            <h1 className="section-title">{title}</h1>
            {sub && <p className="section-sub">{sub}</p>}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function Icon({ name, size = 24 }) {
  const paths = {
    ai: (
      <>
        <rect x="7" y="7" width="10" height="10" rx="2.5" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M19.5 4.5l-2 2M6.5 17.5l-2 2" />
      </>
    ),
    saas: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2.5" />
        <path d="M3 9h18M7 21h10M12 18v3" />
      </>
    ),
    design: (
      <>
        <path d="M12 19l7-7-4-4-7 7-1.5 5.5L12 19z" />
        <path d="M15 8l1.5-1.5a2.1 2.1 0 013 3L18 11" />
      </>
    ),
    auto: <path d="M13 2L4.5 13.5H11L9.5 22 19 10h-6.5L13 2z" />,
    web: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.8 2.6 4 5.7 4 9s-1.2 6.4-4 9c-2.8-2.6-4-5.7-4-9s1.2-6.4 4-9z" />
      </>
    ),
    strategy: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4.5" />
        <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
      </>
    ),
    moon: <path d="M20.5 14.5A8.5 8.5 0 019.5 3.5a8.5 8.5 0 1011 11z" />,
    chev: <path d="M6 9l6 6 6-6" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    plus: <path d="M12 5v14M5 12h14" />,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
