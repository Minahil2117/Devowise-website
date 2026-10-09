import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, SERVICE_DOMAINS, DIRECTORY, GROUP_PATH, slugOf, LINKS } from "../data/content";
import { LOGO_SRC } from "../logoData";
import logoImg from "../assets/logo.png";
import { Icon, EASE } from "./ui";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAcc, setMobileAcc] = useState(null);
  const location = useLocation();
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close menus on page route changes
  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [location.pathname]);

  const handleOpen = (menu) => {
    clearTimeout(closeTimer.current);
    setActiveMenu(menu);
  };

  const handleScheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  // Group services by domain
  const servicesByDomain = SERVICE_DOMAINS.map((dom) => ({
    ...dom,
    services: SERVICES.filter((s) => s.domain === dom.id),
  }));

  const isServicesActive = location.pathname.startsWith("/services");

  // Secondary groups for 'More' dropdown
  const secondaryGroups = DIRECTORY.groups.filter((g) => g.name !== "Services");

  return (
    <>
      <header className={`nav ${scrolled || activeMenu ? "scrolled" : ""} ${mobileOpen ? "open" : ""}`}>
        <div className="nav-inner">
          <Link className="brand" to="/" aria-label="Devowise home">
            <img
              src={logoImg || LOGO_SRC}
              alt="Devowise logo"
              onError={(e) => {
                e.currentTarget.src = LOGO_SRC;
              }}
            />
          </Link>

          <nav className="nav-links" aria-label="Primary">
            <Link
              to="/"
              className={`nav-link ${location.pathname === "/" ? "router-active" : ""}`}
            >
              Home
            </Link>

            {/* Blutech Consulting Services Mega-Menu Trigger */}
            <div
              className={`nav-item ${activeMenu === "services" ? "active" : ""}`}
              onMouseEnter={() => handleOpen("services")}
              onMouseLeave={handleScheduleClose}
            >
              <button
                type="button"
                className={`nav-link nav-trigger ${isServicesActive ? "router-active" : ""}`}
                aria-haspopup="true"
                aria-expanded={activeMenu === "services"}
                onClick={() =>
                  setActiveMenu(activeMenu === "services" ? null : "services")
                }
              >
                Services
                <span className={`chev ${activeMenu === "services" ? "rotated" : ""}`}>
                  <Icon name="chev" size={14} />
                </span>
              </button>

              <AnimatePresence>
                {activeMenu === "services" && (
                  <motion.div
                    className="blu-mega-panel"
                    initial={{ opacity: 0, y: 12, scale: 0.985 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.985 }}
                    transition={{ duration: 0.24, ease: EASE }}
                    onMouseEnter={() => handleOpen("services")}
                    onMouseLeave={handleScheduleClose}
                  >
                    <div className="blu-mega-grid">
                      {servicesByDomain.map((domain) => (
                        <div key={domain.id} className="blu-mega-col">
                          <div className="blu-col-header">
                            <span className="blu-col-icon">
                              <Icon name={domain.icon} size={16} />
                            </span>
                            <span className="blu-col-title">{domain.label}</span>
                          </div>
                          <p className="blu-col-desc">{domain.desc}</p>
                          <div className="blu-col-links">
                            {domain.services.map((srv) => (
                              <Link
                                key={srv.slug}
                                to={`/services/${srv.slug}`}
                                className={`blu-service-link ${location.pathname === `/services/${srv.slug}` ? "active" : ""}`}
                                onClick={() => setActiveMenu(null)}
                              >
                                <span className="blu-srv-icon">
                                  <Icon name={srv.icon} size={18} />
                                </span>
                                <div className="blu-srv-info">
                                  <span className="blu-srv-name">{srv.title}</span>
                                  <span className="blu-srv-sub">{srv.desc}</span>
                                </div>
                                <span className="blu-srv-arr">
                                  <Icon name="arrow" size={14} />
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="blu-mega-footer">
                      <Link
                        to="/services"
                        className="blu-footer-all"
                        onClick={() => setActiveMenu(null)}
                      >
                        <span className="blu-sparkle">✦</span>
                        <span>Explore All Services & Capabilities</span>
                        <Icon name="arrow" size={15} />
                      </Link>
                      <div className="blu-footer-right">
                        <span className="blu-footer-hint">Need a custom scope?</span>
                        <a
                          href={LINKS.calendly}
                          target="_blank"
                          rel="noreferrer"
                          className="blu-footer-cta"
                        >
                          Book 30-min Technical Scoping →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* More / Directory Groups Dropdown */}
            <div
              className={`nav-item ${activeMenu === "more" ? "active" : ""}`}
              onMouseEnter={() => handleOpen("more")}
              onMouseLeave={handleScheduleClose}
            >
              <button
                type="button"
                className="nav-link nav-trigger"
                aria-haspopup="true"
                aria-expanded={activeMenu === "more"}
                onClick={() => setActiveMenu(activeMenu === "more" ? null : "more")}
              >
                Directory
                <span className={`chev ${activeMenu === "more" ? "rotated" : ""}`}>
                  <Icon name="chev" size={14} />
                </span>
              </button>

              <AnimatePresence>
                {activeMenu === "more" && (
                  <motion.div
                    className="mega blu-dir-mega"
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: EASE }}
                    onMouseEnter={() => handleOpen("more")}
                    onMouseLeave={handleScheduleClose}
                  >
                    {secondaryGroups.slice(0, 4).map((g) => (
                      <div key={g.name} className="dir-menu-col">
                        <div className="dir-menu-title">
                          <Link
                            to={`/${GROUP_PATH[g.name]}`}
                            onClick={() => setActiveMenu(null)}
                          >
                            {g.name} →
                          </Link>
                        </div>
                        <div className="dir-menu-items">
                          {g.items.slice(0, 5).map(([label, url]) => (
                            <Link
                              key={label}
                              to={`/${GROUP_PATH[g.name]}/${slugOf(url)}`}
                              onClick={() => setActiveMenu(null)}
                            >
                              <span className="dot" />
                              {label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/work"
              className={`nav-link ${location.pathname === "/work" ? "router-active" : ""}`}
            >
              Work
            </Link>
            <Link
              to="/team"
              className={`nav-link ${location.pathname === "/team" ? "router-active" : ""}`}
            >
              Team
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${location.pathname === "/contact" ? "router-active" : ""}`}
            >
              Contact
            </Link>
          </nav>

          <div className="nav-actions">
            <a
              className="btn btn-solid nav-cta"
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
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="m-group">
              <Link
                to="/"
                className="m-head"
                style={{ textDecoration: "none" }}
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
            </div>

            {/* Services Accordion in Mobile */}
            <div className="m-group">
              <button
                className="m-head"
                onClick={() =>
                  setMobileAcc(mobileAcc === "Services" ? null : "Services")
                }
              >
                <span>Services</span>
                <motion.span
                  animate={{ rotate: mobileAcc === "Services" ? 45 : 0 }}
                  style={{ color: "var(--accent-text)", display: "grid" }}
                >
                  <Icon name="plus" size={18} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {mobileAcc === "Services" && (
                  <motion.div
                    className="m-items blu-m-services"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    style={{ overflow: "hidden" }}
                  >
                    <Link
                      to="/services"
                      style={{
                        fontWeight: 700,
                        color: "var(--accent-text)",
                        marginBottom: 6,
                      }}
                      onClick={() => setMobileOpen(false)}
                    >
                      ✦ All Services Overview →
                    </Link>
                    {servicesByDomain.map((domain) => (
                      <div key={domain.id} className="blu-m-domain-group">
                        <span className="blu-m-domain-title">{domain.label}</span>
                        {domain.services.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            className="blu-m-srv-item"
                            onClick={() => setMobileOpen(false)}
                          >
                            <span className="m-ico">
                              <Icon name={s.icon} size={16} />
                            </span>
                            <span>{s.title}</span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Directory Groups */}
            {secondaryGroups.slice(0, 3).map((g) => (
              <div className="m-group" key={g.name}>
                <button
                  className="m-head"
                  onClick={() =>
                    setMobileAcc(mobileAcc === g.name ? null : g.name)
                  }
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
                          to={`/${GROUP_PATH[g.name]}/${slugOf(url)}`}
                          onClick={() => setMobileOpen(false)}
                        >
                          {label}
                        </Link>
                      ))}
                      <Link
                        to={`/${GROUP_PATH[g.name]}`}
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

            <div className="m-group m-routes">
              <Link to="/work" onClick={() => setMobileOpen(false)}>
                Work
              </Link>
              <Link to="/team" onClick={() => setMobileOpen(false)}>
                Team
              </Link>
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
            </div>

            <a
              className="btn btn-solid"
              href={LINKS.calendly}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
            >
              Book a Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}