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
      <ByteCorpServices isPage={true} />
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
      <ByteCorpWork limit={0} isPage={true} />
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
        eyebrow="Contact & Technical Scoping"
        title="Got a product to build?"
        sub="Book a 30-minute scoping session with our senior engineers, or submit your project details below."
      />
      <ContactSection />
    </>
  );
}
