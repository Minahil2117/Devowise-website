import { Hero, Stack } from "./components/Hero";
import { Capabilities, Certifications, Work } from "./components/Showcase";
import { Process, Engagements, Faq } from "./components/Studio";
import { Directory, Cta } from "./components/Footer";
import StudioAbout from "./components/Team";
import ContactSection from "./components/Contact";
import { AidSection } from "./components/DecisionAid";
import { PageHero, Reveal, Icon, SectionHead } from "./components/ui";
import { DIRECTORY, GROUP_PATH, slugOf } from "./data/content";
import { Link } from "react-router-dom";

function ResourcesTeaser({ num = "05" }) {
  const res = DIRECTORY.groups.find((g) => g.name === "Resources");
  return (
    <section id="resources-teaser">
      <div className="container">
        <SectionHead
          num={num}
          eyebrow="Resources"
          title="Free guides & checklists"
          sub="The same comparisons and checklists we use on real engagements — free to read, no email required."
        />
        <div className="index-grid">
          {res.items.map(([label, url], i) => (
            <Reveal key={label} delay={(i % 3) * 0.06}>
              <Link className="index-card" to={`/${GROUP_PATH[res.name]}/${slugOf(url)}`}>
                <span className="idx">/{String(i + 1).padStart(2, "0")}</span>
                <h3>{label}</h3>
                <span className="go"><Icon name="arrow" size={18} /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <>
      <Hero />
      <Capabilities num="01" />
      <Stack num="02" />
      <Work num="03" limit={4} preview={false} />
      <Process num="04" />
      <ResourcesTeaser num="05" />
      <AidSection />
      <Cta num={null} />
    </>
  );
}

export function Services() {
  return (
    <>
      <PageHero
        num="S"
        eyebrow="Services"
        title="Everything needed to ship a serious product."
        sub="Certified across the tools we ship with, every day."
      />
      <Capabilities num="01" />
      <Certifications num="02" />
      <Engagements num="03" />
      <Directory num="04" />
    </>
  );
}

export function WorkPage() {
  return (
    <>
      <PageHero
        num="W"
        eyebrow="Selected Work"
        title="Products shipped, systems that scale."
      />
      <Stack num="01" />
      <Work num="02" />
    </>
  );
}

export function TeamPage() {
  return (
    <>
      <StudioAbout num="01" />
      <Faq num="02" />
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <PageHero
        num="C"
        eyebrow="Contact"
        title="Let's build something exceptional."
        sub="Have an idea or product? We help turn it into a scalable digital system."
      />
      <ContactSection />
    </>
  );
}
