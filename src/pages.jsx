import { Hero } from "./components/Hero";
import { Certifications } from "./components/Showcase";
import { Faq } from "./components/Studio";
import { Directory, Cta } from "./components/Footer";
import StudioAbout from "./components/Team";
import ContactSection from "./components/Contact";
import { ByteCorpServices } from "./components/ByteCorpServices";
import { ByteCorpProcess } from "./components/ByteCorpProcess";
import { ByteCorpWork } from "./components/ByteCorpWork";
import { ByteCorpWaves } from "./components/ByteCorpWaves";
import { ByteCorpStudio } from "./components/ByteCorpStudio";
import { ByteCorpTestimonials } from "./components/ByteCorpTestimonials";
import { ServicesShowcase } from "./components/ServicesShowcase";
import { PageHero } from "./components/ui";

export function Home() {
  return (
    <>
      <Hero />
      <ByteCorpServices />
      <ByteCorpProcess />
      <ByteCorpWork limit={6} />
      <ByteCorpWaves />
      <ByteCorpStudio />
      <ByteCorpTestimonials />
      <Cta />
    </>
  );
}

export function Services() {
  return (
    <>
      <PageHero
        num="S"
        eyebrow="Services & Capabilities"
        title="AI Development, Product Design, and Software Engineering"
        sub="Senior-led product engineering across AI systems, SaaS platforms, and digital product design."
      />
      <ByteCorpServices />
      <ServicesShowcase num="01" />
      <ByteCorpProcess />
      <Certifications num="02" />
      <Directory num="03" />
      <Cta />
    </>
  );
}

export function WorkPage() {
  return (
    <>
      <PageHero
        num="W"
        eyebrow="Case Studies"
        title="Products we’ve built and the results they delivered."
        sub="A curated selection of production systems, SaaS platforms, and AI applications shipped for our clients."
      />
      <ByteCorpWork limit={0} />
      <ByteCorpWaves />
      <Cta />
    </>
  );
}

export function TeamPage() {
  return (
    <>
      <StudioAbout num="01" />
      <ByteCorpWaves />
      <ByteCorpTestimonials />
      <Faq num="02" />
      <Cta />
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <PageHero
        num="C"
        eyebrow="Contact"
        title="Got a product to build?"
        sub="Book a 30-minute brainstorming session with our senior engineers."
      />
      <ContactSection />
    </>
  );
}
