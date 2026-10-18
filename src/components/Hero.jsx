import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { HERO, CLIENTS, logoDev, LINKS } from "../data/content";
import { Counter, EASE, Icon } from "./ui";

function InteractiveHeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const particleCount = Math.min(width > 768 ? 55 : 25, 60);
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.5 + 1,
      });
    }

    let mouse = { x: -1000, y: -1000 };
    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handlePointerMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Subtle reaction to mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        if (distToMouse < 140) {
          p.x -= dx * 0.015;
          p.y -= dy * 0.015;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = distToMouse < 140 ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0.25)";
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handlePointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="byte-hero-canvas" aria-hidden="true" />;
}

export function Hero() {
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 30 });

  const handleHeroMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotlightPos({ x, y });
  };

  return (
    <section className="byte-hero" id="top" onMouseMove={handleHeroMouseMove}>
      {/* Interactive mouse spotlight & particle network */}
      <div
        className="byte-hero-spotlight"
        style={{
          background: `radial-gradient(ellipse 800px 450px at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(255, 255, 255, 0.08) 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />
      <div className="byte-hero-grid" aria-hidden="true" />
      <InteractiveHeroCanvas />

      <div className="container byte-hero-container">
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
