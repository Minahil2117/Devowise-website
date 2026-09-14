import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { DIRECTORY, CTA, LINKS, GROUP_PATH, slugOf } from "../data/content";
import { EASE, Icon, Reveal, SectionHead } from "./ui";

const PAGES = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Work", "/work"],
  ["Team", "/team"],
  ["Contact", "/contact"],
];

const COMPANY = [
  ["Case Studies", "https://www.devowise.com/case-studies"],
  ["Blog", "https://www.devowise.com/blog"],
  ["All Services", "/services"],
  ["All Platforms", "/platforms"],
  ["All Industries", "/industries"],
  ["All Solutions", "/solutions"],
  ["All Resources", "/resources"],
];

export function Directory({ num = "04" }) {
  return (
    <section id="directory">
      <div className="container">
        <SectionHead num={num} eyebrow={DIRECTORY.eyebrow} title={DIRECTORY.title} sub={DIRECTORY.sub} />
        <div className="dir-grid">
          {DIRECTORY.groups.map((g, i) => (
            <Reveal key={g.name} delay={(i % 3) * 0.07}>
              <div className="dir-col">
                <h3>
                  {g.name}
                  <Link to={`/${GROUP_PATH[g.name]}`}>All →</Link>
                </h3>
                <ul>
                  {g.items.map(([label, url]) => (
                    <li key={label}>
                      <Link to={`/${GROUP_PATH[g.name]}/${slugOf(url)}`}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Cta({ num = "05" }) {
  const lead = CTA.title.replace("exceptional.", "");
  return (
    <section id="contact">
      <div className="container cta-box">
        <Reveal>
          <div className="s-head">
            {num && <span className="s-index">( {num} )</span>}
            <span className="eyebrow">Contact</span>
          </div>
        </Reveal>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          {lead}
          <span className="outline">exceptional.</span>
        </motion.h2>
        <Reveal delay={0.15}>
          <p>{CTA.sub}</p>
          <div className="hero-ctas">
            <a className="btn btn-solid" href={LINKS.calendly} target="_blank" rel="noreferrer">
              {CTA.call} <span className="arr"><Icon name="arrow" size={16} /></span>
            </a>
            <a className="btn" href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <img src="/logo.png" alt="Devowise logo" />
            <div className="tag-line">We Build what others imagine</div>
            <div className="motto">Because Your Success Is Our Story</div>
          </div>
          <div className="foot-col">
            <h4>Pages</h4>
            <ul>
              {PAGES.map(([label, to]) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <ul>
              {COMPANY.map(([label, url]) => (
                <li key={label}>
                  {url.startsWith("http") ? (
                    <a href={url} target="_blank" rel="noreferrer">{label}</a>
                  ) : (
                    <Link to={url}>{label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="foot-col">
            <h4>Get in touch</h4>
            <ul>
              <li><a href={`mailto:${LINKS.email}`}>{LINKS.email}</a></li>
              <li><a href={LINKS.calendly} target="_blank" rel="noreferrer">Book a Call</a></li>
              <li><a href={LINKS.contra} target="_blank" rel="noreferrer">Portfolio on Contra</a></li>
              <li><a href={LINKS.site} target="_blank" rel="noreferrer">devowise.com</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Devowise. All rights reserved.</span>
          <span>Devowise — We Build what others imagine</span>
        </div>
      </div>
      <div className="foot-giant" aria-hidden="true">Devowise</div>
    </footer>
  );
}
