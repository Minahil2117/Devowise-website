import { motion } from "framer-motion";
import { STUDIO } from "../data/content";
import { EASE, Icon, Reveal } from "./ui";

export default function StudioAbout({ num = "01" }) {
  return (
    <section className="studio" id="team">
      <div className="container studio-grid">
        <div className="studio-left">
          <Reveal>
            <div className="s-head">
              <span className="s-index">( {num} )</span>
              <span className="eyebrow">{STUDIO.eyebrow}</span>
            </div>
          </Reveal>

          <h2 className="studio-lines" aria-label={STUDIO.lines.join(" ")}>
            {STUDIO.lines.map((line, i) => (
              <span className="mask" key={line}>
                <motion.span
                  className={`line ${i === 1 ? "grad-text" : ""}`}
                  initial={{ y: "110%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: EASE }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h2>

          <Reveal delay={0.25}>
            <p className="studio-p">{STUDIO.p}</p>
          </Reveal>

          <ul className="studio-list">
            {STUDIO.points.map((pt, i) => (
              <motion.li
                key={pt}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: 0.35 + i * 0.09, ease: EASE }}
              >
                <span className="li-mark" />
                {pt}
              </motion.li>
            ))}
          </ul>
        </div>

        <Reveal delay={0.15} className="studio-right">
          <motion.figure
            className="studio-photo"
            whileHover={{ scale: 1.02, rotate: 0.4 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <img src={STUDIO.img} alt="The Devowise team working together in the studio" />
            <figcaption className="studio-chip">
              <Icon name="ai" size={16} />
              Engineering × Design × AI
            </figcaption>
          </motion.figure>
        </Reveal>
      </div>
    </section>
  );
}
