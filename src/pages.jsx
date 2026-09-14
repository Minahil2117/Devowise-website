import { Hero, LogoBar, Stack } from "./components/Hero";
import { Capabilities, Certifications, Work } from "./components/Showcase";
import { Process, Engagements, Faq } from "./components/Studio";
import { Directory, Cta } from "./components/Footer";
import StudioAbout from "./components/Team";
import ContactSection from "./components/Contact";
import { PageHero } from "./components/ui";

export function Home() {
  return (
    <>
      <Hero />
      <LogoBar />
      <Capabilities num="01" />
      <Work num="02" limit={4} preview={false} />
      <Process num="03" />
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
