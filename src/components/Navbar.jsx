import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { DIRECTORY, LINKS, GROUP_PATH, slugOf } from "../data/content";
import { Icon, EASE } from "./ui";

const NAV_GROUPS = DIRECTORY.groups.slice(0, 5).map((g) => ({
  name: g.name,
  path: GROUP_PATH[g.name],
  items: g.items,
}));

const ROUTES = [
  ["Work", "/work"],
  ["Team", "/team"],
  ["Contact", "/contact"],
];

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAcc, setMobileAcc] = useState(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const openMenu = (name) => {
    clearTimeout(closeTimer.current);
    setActive(name);
  };

  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActive(null), 140);
  };

  return (
    <>
      <header className={`nav ${scrolled || active ? "scrolled" : ""} ${mobileOpen ? "open" : ""}`}>
        <div className="nav-inner">
          {/* Logo image removed; only the website name is shown. */}
          <Link className="brand" to="/" aria-label="Devowise home">
            <span className="wordmark">DEVOWISE</span>
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {NAV_GROUPS.map((g) => (
              <div
                key={g.name}
                className={`nav-item ${active === g.name ? "active" : ""}`}
                onMouseEnter={() => openMenu(g.name)}
                onMouseLeave={scheduleClose}
              >
                <button
                  className="nav-link"
                  aria-expanded={active === g.name}
                  onClick={() => (active === g.name ? setActive(null) : openMenu(g.name))}
                >
                  {g.name}
                  <span className="chev"><Icon name="chev" size={14} /></span>
                </button>

                <AnimatePresence>
                  {active === g.name && (
                    <motion.div
                      className="mega"
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: EASE }}
                    >
                      {g.items.map(([label, url]) => (
                        <Link
                          key={label}
                          to={`/${g.path}/${slugOf(url)}`}
                          onClick={() => setActive(null)}
                        >
                          <span className="dot" />
                          {label}
                        </Link>
                      ))}
                      <Link className="all-link" to={`/${g.path}`} onClick={() => setActive(null)}>
                        <Icon name="arrow" size={15} /> All {g.name}
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {ROUTES.map(([label, to]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `nav-link ${isActive ? "router-active" : ""}`}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={onToggleTheme}
              aria-label="Toggle dark / light mode"
              title="Toggle theme"
            >
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: EASE }}
                style={{ display: "grid", placeItems: "center" }}
              >
                <Icon name={theme === "dark" ? "sun" : "moon"} size={19} />
              </motion.span>
            </button>

            <a
              className="btn btn-solid"
              style={{ padding: "11px 22px" }}
              href={LINKS.calendly}
              target="_blank"
              rel="noreferrer"
            >
              Book a Call
            </a>

            <button
              className="hamburger"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 8 }}>
              <button
                className="hamburger"
                style={{ display: "grid" }}
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            {ROUTES.map(([label, to]) => (
              <div className="m-group" key={to}>
                <Link
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    padding: "16px 4px",
                    fontFamily: "var(--font-display)",
                    fontSize: 18,
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </Link>
              </div>
            ))}

            {NAV_GROUPS.map((g) => (
              <div className="m-group" key={g.name}>
                <button
                  className="m-head"
                  onClick={() => setMobileAcc(mobileAcc === g.name ? null : g.name)}
                >
                  {g.name}
                  <motion.span
                    animate={{ rotate: mobileAcc === g.name ? 45 : 0 }}
                    style={{ color: "var(--accent-text)", display: "grid" }}
                  >
                    <Icon name="plus" size={18} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {mobileAcc === g.name && (
                    <motion.div
                      className="m-items"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      style={{ overflow: "hidden" }}
                    >
                      {g.items.map(([label, url]) => (
                        <Link
                          key={label}
                          to={`/${g.path}/${slugOf(url)}`}
                          onClick={() => setMobileOpen(false)}
                        >
                          {label}
                        </Link>
                      ))}
                      <Link
                        to={`/${g.path}`}
                        style={{ color: "var(--accent-text)" }}
                        onClick={() => setMobileOpen(false)}
                      >
                        All {g.name} →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <a
              className="btn btn-solid"
              style={{ width: "100%", marginTop: 22 }}
              href={LINKS.calendly}
              target="_blank"
              rel="noreferrer"
            >
              Book a Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
