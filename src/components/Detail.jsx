import { Link, useParams } from "react-router-dom";
import { DIRECTORY, GROUP_PATH, slugOf, CAPABILITIES, CERTS, ABOUT, LINKS } from "../data/content";
import { PageHero, Reveal, Icon } from "./ui";
import { Process, Engagements } from "./Studio";
import { Cta } from "./Footer";

const groupByPath = (p) => DIRECTORY.groups.find((g) => GROUP_PATH[g.name] === p);

/* Real Devowise copy, matched to a page by keyword — no invented content */
function excerptsFor(path, label) {
  const t = label.toLowerCase();
  const cap = (i) => CAPABILITIES[i];
  const cert = (name) => CERTS.items.find((c) => c.name.startsWith(name));
  const out = [];
  const has = (...ws) => ws.some((w) => t.includes(w));

  if (has("framer")) { out.push(cap(4).desc); const c = cert("Framer Expert"); if (c) out.push(c.desc); }
  if (has("webflow")) { out.push(cap(4).desc); const c = cert("Webflow Expert"); if (c) out.push(c.desc); }
  if (has("shopify")) { const c = cert("Shopify Partner"); if (c) out.push(c.desc); out.push(cap(4).desc); }
  if (has("kajabi")) { const c = cert("Kajabi Expert"); if (c) out.push(c.desc); }
  if (has("brand", "logo")) { out.push(cap(2).desc); }
  if (has("ui/ux", "ui-ux", "design")) { out.push(cap(2).desc); }
  if (has("development", "website", "landing", "redesign", "maintenance", "responsive", "custom", "modern", "wordpress")) {
    out.push(cap(1).desc);
  }
  if (has("seo", "conversion", "optimisation")) { out.push(cap(5).desc); }
  if (has("ai")) { out.push(cap(0).desc); }
  if (has("startup", "mvp")) { out.push(cap(5).desc); }

  const clean = out.filter(Boolean);
  if (!clean.length) { out.push(ABOUT.p1, ABOUT.p2); }
  else out.push(ABOUT.p2);
  return [...new Set(out.filter(Boolean))].slice(0, 3);
}

export function GroupIndexPage({ groupPath }) {
  const group = groupByPath(groupPath);
  if (!group) return null;
  return (
    <>
      <PageHero num={groupPath[0].toUpperCase()} eyebrow={group.name} title={`All ${group.name}`} sub={DIRECTORY.sub} />
      <section>
        <div className="container">
          <div className="index-grid">
            {group.items.map(([label, url], i) => (
              <Reveal key={label} delay={(i % 3) * 0.06}>
                <Link className="index-card" to={`/${groupPath}/${slugOf(url)}`}>
                  <span className="idx">/{String(i + 1).padStart(2, "0")}</span>
                  <h3>{label}</h3>
                  <span className="go"><Icon name="arrow" size={18} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="work-foot">
              <a className="btn" href={group.all} target="_blank" rel="noreferrer">
                View original on devowise.com <span className="arr"><Icon name="arrow" size={16} /></span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      <Cta num={null} />
    </>
  );
}

export function DetailPage({ groupPath }) {
  const { slug } = useParams();
  const group = groupByPath(groupPath);
  const item = group?.items.find(([label, url]) => slugOf(url) === slug);
  if (!group || !item) return <GroupIndexPage groupPath={groupPath} />;
  const [label, url] = item;
  const paras = excerptsFor(groupPath, label);
  const related = group.items.filter(([l]) => l !== label).slice(0, 5);

  return (
    <>
      <PageHero num={groupPath[0].toUpperCase()} eyebrow={group.name} title={label} />
      <section>
        <div className="container detail-grid">
          <Reveal>
            <div className="detail-body">
              <nav className="crumbs">
                <Link to={`/${groupPath}`}>{group.name}</Link>
                <span>✦</span>
                <span className="here">{label}</span>
              </nav>
              {paras.map((p, i) => (
                <p key={i} className={i === 0 ? "lead" : ""}>{p}</p>
              ))}
              <div className="hero-ctas">
                <a className="btn btn-solid" href={LINKS.calendly} target="_blank" rel="noreferrer">
                  Book a Call <span className="arr"><Icon name="arrow" size={16} /></span>
                </a>
                <a className="btn" href={url} target="_blank" rel="noreferrer">
                  View live original page
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <aside className="detail-side">
              <h4>More {group.name}</h4>
              <ul>
                {related.map(([l, u]) => (
                  <li key={l}>
                    <Link to={`/${groupPath}/${slugOf(u)}`}>{l}</Link>
                  </li>
                ))}
                <li>
                  <Link className="all" to={`/${groupPath}`}>All {group.name} →</Link>
                </li>
              </ul>
            </aside>
          </Reveal>
        </div>
      </section>
      <Process num="02" />
      <Engagements num="03" />
      <Cta num={null} />
    </>
  );
}
