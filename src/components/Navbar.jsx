import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LINKS } from "../data/content";
import { LOGO_SRC } from "../logoData";
import logoImg from "../assets/logo.png";
import { EASE } from "./ui";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAcc, setMobileAcc] = useState(null);
  const location = useLocation();
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
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

  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = (name) => {
    clearTimeout(closeTimer.current);
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const isServicesActive = location.pathname.startsWith("/services");
  const isAboutActive = location.pathname === "/team";
  const isWorkActive = location.pathname.startsWith("/work");
  const isProductsActive = location.pathname.startsWith("/platforms");

  return (
    <>
      <header className={`byte-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="byte-nav-inner">
          {/* Logo */}
          <Link className="byte-brand" to="/" aria-label="Home">
            <img
              src={logoImg || LOGO_SRC}
              alt="Logo"
              className="byte-logo-img"
              onError={(e) => {
                e.currentTarget.src = LOGO_SRC;
              }}
            />
          </Link>

          {/* Center Navigation (ByteCorp Menu) */}
          <nav className="byte-nav-links" aria-label="Main Navigation">
            <Link
              to="/"
              className={`byte-nav-link ${location.pathname === "/" ? "active" : ""}`}
            >
              Home
            </Link>

            <Link
              to="/team"
              className={`byte-nav-link ${isAboutActive ? "active" : ""}`}
            >
              About Us
            </Link>

            {/* Services Dropdown (ByteCorp 4 Pillars) */}
            <div
              className="byte-nav-item"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`byte-nav-link byte-dropdown-trigger ${isServicesActive ? "active" : ""}`}
                aria-expanded={openDropdown === "services"}
                onClick={() =>
                  setOpenDropdown(openDropdown === "services" ? null : "services")
                }
              >
                <span>Services</span>
                <svg
                  className={`byte-chev ${openDropdown === "services" ? "rotated" : ""}`}
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <AnimatePresence>
                {openDropdown === "services" && (
                  <motion.div
                    className="byte-dropdown-menu"
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: EASE }}
                    onMouseEnter={() => handleMouseEnter("services")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to="/services/mvp-doctor"
                      className="byte-dropdown-item"
                      onClick={() => setOpenDropdown(null)}
                    >
                      <span className="byte-item-dot dot-ai" />
                      <span>AI & Data</span>
                    </Link>
                    <Link
                      to="/services/branding-ui-ux-web-development"
                      className="byte-dropdown-item"
                      onClick={() => setOpenDropdown(null)}
                    >
                      <span className="byte-item-dot dot-design" />
                      <span>Design</span>
                    </Link>
                    <Link
                      to="/services/saas-development"
                      className="byte-dropdown-item"
                      onClick={() => setOpenDropdown(null)}
                    >
                      <span className="byte-item-dot dot-eng" />
                      <span>Engineering</span>
                    </Link>
                    <Link
                      to="/services/elastic-infrastructure"
                      className="byte-dropdown-item"
                      onClick={() => setOpenDropdown(null)}
                    >
                      <span className="byte-item-dot dot-sec" />
                      <span>Security</span>
                    </Link>
                    <div className="byte-dropdown-divider" />
                    <Link
                      to="/services"
                      className="byte-dropdown-item-all"
                      onClick={() => setOpenDropdown(null)}
                    >
                      <span>View All Services</span>
                      <span>→</span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


            <Link
              to="/work"
              className={`byte-nav-link ${isWorkActive ? "active" : ""}`}
            >
              Case Studies
            </Link>

            <Link
              to="/platforms"
              className={`byte-nav-link ${isProductsActive ? "active" : ""}`}
            >
              Products
            </Link>

            {/* Media Dropdown */}
            <div
              className="byte-nav-item"
              onMouseEnter={() => handleMouseEnter("media")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className="byte-nav-link byte-dropdown-trigger"
                aria-expanded={openDropdown === "media"}
                onClick={() =>
                  setOpenDropdown(openDropdown === "media" ? null : "media")
                }
              >
                <span>Media</span>
                <svg
                  className={`byte-chev ${openDropdown === "media" ? "rotated" : ""}`}
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <AnimatePresence>
                {openDropdown === "media" && (
                  <motion.div
                    className="byte-dropdown-menu"
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: EASE }}
                    onMouseEnter={() => handleMouseEnter("media")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to="/resources"
                      className="byte-dropdown-item"
                      onClick={() => setOpenDropdown(null)}
                    >
                      Blog & Resources
                    </Link>
                    <Link
                      to="/#studio"
                      className="byte-dropdown-item"
                      onClick={() => setOpenDropdown(null)}
                    >
                      Studio Ventures
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Action: Free Brainstorming Session */}
          <div className="byte-nav-actions">
            <a
              className="btn-brainstorm"
              href={LINKS.calendly}
              target="_blank"
              rel="noreferrer"
            >
              Free Brainstorming Session
            </a>

            <button
              className="byte-hamburger"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileOpen(true)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="byte-mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.28, ease: EASE }}
          >
            <div className="byte-mobile-header">
              <img src={logoImg || LOGO_SRC} alt="Logo" style={{ height: "36px", width: "auto" }} />
              <button
                className="byte-close-btn"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="byte-mobile-links">
              <Link to="/" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <Link to="/team" onClick={() => setMobileOpen(false)}>
                About Us
              </Link>

              {/* Mobile Services Accordion */}
              <div className="byte-mobile-accordion">
                <button
                  type="button"
                  className="byte-mobile-acc-btn"
                  onClick={() =>
                    setMobileAcc(mobileAcc === "services" ? null : "services")
                  }
                >
                  <span>Services</span>
                  <span className={`byte-acc-icon ${mobileAcc === "services" ? "open" : ""}`}>
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {mobileAcc === "services" && (
                    <motion.div
                      className="byte-mobile-subitems"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Link to="/services/mvp-doctor" onClick={() => setMobileOpen(false)}>
                        <span className="byte-item-dot dot-ai" /> AI & Data
                      </Link>
                      <Link to="/services/branding-ui-ux-web-development" onClick={() => setMobileOpen(false)}>
                        <span className="byte-item-dot dot-design" /> Design
                      </Link>
                      <Link to="/services/saas-development" onClick={() => setMobileOpen(false)}>
                        <span className="byte-item-dot dot-eng" /> Engineering
                      </Link>
                      <Link to="/services/elastic-infrastructure" onClick={() => setMobileOpen(false)}>
                        <span className="byte-item-dot dot-sec" /> Security
                      </Link>
                      <Link to="/services" style={{ color: "#fff", fontWeight: 600 }} onClick={() => setMobileOpen(false)}>
                        All Services →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/work" onClick={() => setMobileOpen(false)}>
                Case Studies
              </Link>
              <Link to="/platforms" onClick={() => setMobileOpen(false)}>
                Products
              </Link>
              <Link to="/resources" onClick={() => setMobileOpen(false)}>
                Media & Blog
              </Link>
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
            </div>

            <div className="byte-mobile-cta">
              <a
                className="btn-byte-primary"
                href={LINKS.calendly}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
              >
                Free Brainstorming Session →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}