import { BYTECORP_TESTIMONIALS } from "../data/content";
import { Reveal } from "./ui";

export function ByteCorpTestimonials() {
  return (
    <section className="byte-testimonials-section">
      <div className="container">
        <div className="byte-test-head">
          <span className="byte-section-eyebrow">{BYTECORP_TESTIMONIALS.eyebrow}</span>
          <h2 className="byte-section-title">{BYTECORP_TESTIMONIALS.title}</h2>
          <p className="byte-section-sub">{BYTECORP_TESTIMONIALS.sub}</p>
        </div>

        <div className="byte-test-grid">
          {BYTECORP_TESTIMONIALS.items.map((item, i) => (
            <Reveal key={item.author} delay={i * 0.08}>
              <div className="byte-test-card">
                <div className="test-metric-badge">
                  <span>✦ {item.metric}</span>
                </div>

                <div className="test-stars">★★★★★</div>

                <p className="test-quote">“{item.quote}”</p>

                <div className="test-author-row">
                  <div className="author-avatar">
                    {item.author.charAt(0)}
                  </div>
                  <div className="author-info">
                    <span className="author-name">{item.author}</span>
                    <span className="author-role">{item.role} · {item.company}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
