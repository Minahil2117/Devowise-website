export const LINKS = {
  calendly: "https://calendly.com/nabeelfarooq1515/30min",
  email: "contact@devowise.com",
  site: "https://www.devowise.com",
  contra: "https://contra.com/devowise",
};

export const slugOf = (url) => url.split("/").filter(Boolean).pop();

export const GROUP_PATH = {
  Services: "services",
  Platforms: "platforms",
  Industries: "industries",
  Solutions: "solutions",
  Resources: "resources",
  "Blog Categories": "blog",
};

export const HERO = {
  eyebrow: "Because Your Success Is Our Story",
  title: "We design and build AI-powered digital products that scale businesses.",
  sub: "Devowise is a product and design studio crafting SaaS, AI systems, and high-performance web experiences.",
  ctaPrimary: "Free Brainstorming Session",
  ctaSecondary: "See How We Build",
  stats: [
    { value: 14, suffix: "+", label: "Products Shipped" },
    { value: 4, pad: true, label: "Projects Ongoing" },
    { value: 4.9, suffix: "/5", decimals: 1, label: "Client Satisfaction" },
    { value: 100, suffix: "%", label: "Senior Engineers" },
  ],
};


export const CAPABILITIES = [
  {
    icon: "ai",
    title: "AI Systems & AI Agents",
    desc: "Production-grade AI features and autonomous agents wired into your real workflows, with evals, guardrails, and observability, not weekend demos.",
  },
  {
    icon: "saas",
    title: "SaaS & Web Applications",
    desc: "End-to-end SaaS and web apps engineered for scale, from auth and billing to multi-tenant data models and edge performance that compounds as you grow.",
  },
  {
    icon: "design",
    title: "UX/UI & Design Systems",
    desc: "Product-led UX and reusable design systems that unify your surface area across web, mobile, and marketing, so every team ships faster with a consistent brand.",
  },
  {
    icon: "auto",
    title: "Automation & Integrations",
    desc: "Custom automations, internal tools, and API integrations that connect your stack end-to-end and remove repetitive ops work from your team's plate.",
  },
  {
    icon: "web",
    title: "Framer / Webflow Websites",
    desc: "Framer and Webflow builds for marketing sites, product pages, portfolios, storefronts, and content-heavy platforms, fast, CMS-driven, and easy for your team to own.",
  },
  {
    icon: "strategy",
    title: "Product Strategy",
    desc: "Discovery, scoping, and roadmapping sessions that sharpen your positioning and de-risk the build before a single line of code or pixel is committed.",
  },
];

export const STACK = {
  eyebrow: "Technology Stack",
  title: "Modern tools we ship with, every day.",
  sub: "A cross-section of the frameworks, platforms, and services powering our web, mobile, and AI builds.",
  tools: [
    "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "TanStack", "Remix", "Vite",
    "Vue", "Svelte", "Astro", "Tailwind CSS", "Sass", "Framer", "Webflow", "Figma",
    "LottieFiles", "GSAP", "Three.js", "Storybook", "shadcn", "Radix UI", "Prisma", "Supabase",
    "Firebase", "PostgreSQL", "MySQL", "MongoDB", "Redis", "PlanetScale", "Vercel", "Netlify",
    "Cloudflare", "AWS", "Google Cloud", "Docker", "Kubernetes", "GitHub", "GitLab", "Expo",
    "React Native", "Flutter", "Swift", "Kotlin", "Python", "Django", "FastAPI", "OpenAI",
    "Anthropic", "Hugging Face", "LangChain", "Pinecone", "Stripe", "Twilio", "Sentry", "PostHog",
    "Algolia", "Clerk", "Auth0", "Shopify",
  ],
};

export const CERTS = {
  eyebrow: "Certifications",
  title: "Officially certified across the tools we ship with.",
  sub: "Recognized partners and experts across leading product, design, and AI platforms.",
  items: [
    { name: "Framer Expert", desc: "Certified by Framer as highly skilled." },
    { name: "LottieFiles × Framer Expert", desc: "Certified by LottieFiles × Framer as highly skilled." },
    { name: "Kajabi Expert", desc: "Certified by Kajabi as highly skilled." },
    { name: "Ideogram Partner", desc: "Certified by Ideogram as highly skilled." },
    { name: "MagicPath Expert", desc: "Certified by MagicPath as highly skilled." },
    { name: "Kit Expert", desc: "Certified by Kit as highly skilled." },
    { name: "Anything Expert", desc: "Certified by Anything as highly skilled." },
    { name: "Lovart Expert", desc: "Certified by Lovart as highly skilled." },
    { name: "React Certified", desc: "Verified proficiency building production React applications." },
    { name: "Next.js Certified", desc: "Verified proficiency shipping Next.js apps at scale." },
    { name: "Node.js Certified", desc: "Verified proficiency with Node.js server runtimes and APIs." },
    { name: "TypeScript Certified", desc: "Verified proficiency across large TypeScript codebases." },
    { name: "Tailwind CSS Certified", desc: "Verified proficiency with Tailwind design systems." },
    { name: "Webflow Expert", desc: "Certified by Webflow for building production sites and CMS-driven experiences." },
    { name: "Shopify Partner", desc: "Recognized Shopify partner shipping storefronts and custom themes." },
    { name: "Vercel Certified", desc: "Verified proficiency deploying edge and serverless apps on Vercel." },
  ],
};

export const WORK = {
  eyebrow: "Selected Work",
  title: "Products shipped, systems that scale.",
  cta: "Start a project",
  contraCta: "View full portfolio on Contra",
  projects: [
    {
      name: "MindMesh", tags: ["AI", "Web"],
      desc: "AI-enhanced travel & lifestyle blog with editorial-grade UX.",
      img: "https://media.contra.com/image/upload/q_auto,w_1100/x5xlzdf4aw0pvv6x6jm2.avif",
      url: "https://www.devowise.com/blog/mindmesh-ai-travel-blog", hue: 0,
    },
    {
      name: "JobFit AI", tags: ["AI", "SaaS"],
      desc: "AI-powered recruitment platform matching talent to roles at scale.",
      img: "https://media.contra.com/image/upload/q_auto,w_1100/fhk5off99wsy4rtg6vms.avif",
      url: "https://www.devowise.com/blog/jobfit-ai-recruitment", hue: 1,
    },
    {
      name: "BatchQ", tags: ["AI", "Data"],
      desc: "Real-time AI data pipeline automation for modern engineering teams.",
      img: "https://media.contra.com/image/upload/q_auto,w_1100/pdzoosftnkoukdxpv2vw.avif",
      url: "https://www.devowise.com/blog/batchq-ai-data-pipeline", hue: 2,
    },
    {
      name: "PrismPay", tags: ["Fintech", "Product"],
      desc: "Designing a seamless payment interface for a next-gen fintech.",
      img: "https://media.contra.com/image/upload/q_auto,w_1100/dlrvk0otsfjri9rl4dge.avif",
      url: "https://www.devowise.com/blog/prismpay-payments-interface", hue: 3,
    },
    {
      name: "Clay", tags: ["Web", "Design"],
      desc: "Modern real estate website development with a refined design system.",
      img: "https://media.contra.com/image/upload/q_auto,w_1100/jlp1znzefqnqliegbqp6.avif",
      url: "https://www.devowise.com/blog/clay-real-estate", hue: 4,
    },
    {
      name: "VELTO", tags: ["E-commerce", "Web"],
      desc: "Fashion e-commerce landing built to convert premium shoppers.",
      img: "https://media.contra.com/image/upload/q_auto,w_1100/mzrsbth59bt0gxajcgpz.avif",
      url: "https://www.devowise.com/blog/velto-fashion-ecommerce", hue: 5,
    },
    {
      name: "Archon", tags: ["Web", "Framer"],
      desc: "Website development for a category-defining B2B brand.",
      img: "https://media.contra.com/image/upload/q_auto,w_1100/znlna13le5kwwwiinkz2.avif",
      url: "https://www.devowise.com/blog/archon-website", hue: 6,
    },
    {
      name: "GoPlay", tags: ["Mobile", "Product"],
      desc: "Outdoor sports booking application, mobile-first product design.",
      img: "https://media.contra.com/image/upload/q_auto,w_1100/mqv7xfz9jzeln20n2jnm.avif",
      url: "https://www.devowise.com/blog/goplay-sports-booking", hue: 7,
    },
    {
      name: "NOIREVE", tags: ["Brand", "E-commerce"],
      desc: "French luxury beauty & skincare brand experience.",
      img: "https://media.contra.com/image/upload/q_auto,w_1100/lfzbmz09gzhnj32ru1wx.avif",
      url: "https://www.devowise.com/blog/noireve-luxury-beauty", hue: 8,
    },
  ],
};

export const PROJECT_DETAILS = {
  mindmesh: {
    tagline: "An editorial-grade travel and lifestyle platform powered by AI for smarter discovery and personalization.",
    overview: "At Devowise Studios, we designed and developed MindMesh, a modern blogging platform created for a travel and lifestyle creator seeking a visually immersive and easy-to-manage publishing experience. The site combines engaging storytelling with high performance, letting readers explore content seamlessly while giving the client complete control over publishing through a headless CMS — elevated with AI-generated visuals, scroll-driven interactions, and lightweight animations.",
    challenge: "Modern blogs compete for attention in an increasingly visual digital landscape. The platform had to deliver an immersive reading experience, simplify content management for non-technical users, balance engaging animations with strong performance, improve discoverability, and build a scalable architecture for future growth.",
    solution: "We led the project from strategy through deployment: Discovery & UX Strategy (a journey of Discover, Read, Explore, Return), Information Architecture, editorial-inspired UI built with Next.js and Tailwind CSS, AI-powered storytelling with LovArts imagery and Lottie animation, and Sanity CMS integration with full performance, accessibility, and SEO optimization.",
    tools: ["Next.js", "TypeScript", "OpenAI", "Vercel", "Tailwind CSS", "Sanity"],
    results: "A refined reading experience that encourages deeper engagement, streamlined publishing through a flexible headless CMS, enhanced storytelling with AI-generated imagery and interactive animations, optimized performance, accessibility and SEO on every device, and a scalable platform ready for future content and experiences.",
  },
  "jobfit-ai": {
    tagline: "A recruitment platform that matches talent to roles at scale using LLM-based signals.",
    overview: "We developed JobFit AI, an intelligent recruitment platform that streamlines hiring by matching candidates to opportunities using AI-powered resume analysis, skills evaluation, and contextual fit scoring. The complete backend architecture was built on BuildShip — connecting resume ingestion, AI processing, structured candidate profiles, and recruiter dashboards into one seamless hiring experience.",
    challenge: "Traditional recruitment depends on manual reviews and keyword filtering, so strong candidates get overlooked when their experience is phrased differently from the job description, while recruiters burn hours on high application volumes.",
    solution: "The workflow follows Apply, Analyze, Match, Shortlist: automated resume ingestion and profile generation, GPT-powered parsing orchestrated by BuildShip, multidimensional fit scores based on skills, experience, qualifications and contextual relevance — plus recruiter dashboards with rankings, skill-gap analysis, and AI-generated recommendations over structured REST APIs.",
    tools: ["Next.js", "Node.js", "PostgreSQL", "OpenAI", "LangChain", "shadcn/ui"],
    results: "Reduced resume screening time through automated AI processing, improved matching accuracy via contextual analysis instead of keyword filtering, faster recruiter decisions with transparent fit scores, streamlined deployment with BuildShip automation, and a scalable architecture for high-volume hiring.",
  },
  batchq: {
    tagline: "Real-time AI data pipelines that let engineering teams orchestrate, monitor, and scale jobs.",
    overview: "We designed and developed a scalable backend automation pipeline for BatchQ that transforms large-scale competitor research into a fully automated, AI-powered workflow — continuously processing thousands of competitor URLs by retrieving data from Google Sheets, performing real-time web research through AI, and enriching each record with structured insights.",
    challenge: "Data teams must monitor competitors at scale while managing thousands of URLs, unreliable APIs, and rate-limited services. Manual research is slow and error-prone, and off-the-shelf automation breaks under volume or returns stale, generic answers from static model knowledge.",
    solution: "A structured progression of Import, Research, Enrich, Deliver: automated Google Sheets ingestion, a custom JavaScript/TypeScript node integrating the Perplexity API (Llama 3 Sonar Large) for live web research, controlled batch processing with intelligent throttling, and automatic write-back of cleaned, normalized insights — no manual intervention.",
    tools: ["React", "TypeScript", "Python", "Kafka", "ClickHouse", "Kubernetes"],
    results: "Fully automated competitor research with minimal human intervention, real-time intelligence powered by live AI research, reliable processing of thousands of records, stable performance under rate limits, a major reduction in operational workload, and a scalable backend ready for future automation.",
  },
  prismpay: {
    tagline: "A next-generation payment interface designed for clarity, trust, and speed.",
    overview: "We designed PrismPay, a modern fintech payment platform concept focused on making digital transactions simple, transparent, and effortless — combining intuitive UX, thoughtful information architecture, and a clean visual language that helps users complete transactions with confidence.",
    challenge: "Digital payments are essential, yet many financial products feel intimidating and cluttered. Users need to move money quickly, understand the status of every transaction at a glance, and trust that their information is safe — without wading through complex interfaces.",
    solution: "A user journey of Send, Confirm, Track, Complete: research-driven UX strategy, a clear information hierarchy for payments, history, balances and status, a reusable design system with card-based transaction patterns, clear visual feedback, and interactive prototyping validated across desktop, tablet, and mobile.",
    tools: ["Figma", "Framer", "React", "Stripe", "shadcn/ui"],
    results: "A modern visual identity that reinforces credibility, simplified payment workflows with reduced friction, improved transaction visibility through clear status updates, a consistent cross-device experience, and a scalable design foundation for future payment features.",
  },
  clay: {
    tagline: "A refined real estate website with a design system built to scale.",
    overview: "A modern real estate website concept built to simplify property discovery through structured user experiences, scalable design systems, and performance-focused development — enabling users to browse listings effortlessly while giving agencies a flexible foundation for growth.",
    challenge: "Real estate sites manage huge volumes of dynamic content, making clarity hard without overwhelming users. The platform had to simplify browsing across extensive inventories, present listings consistently, improve discoverability, deliver exceptional performance, and scale with constantly changing listings.",
    solution: "A journey of Search, Filter, Explore Listings, View Details, Make an Inquiry: scalable page templates for listing grids and property pages, a modular component system, clean grid-based UI with strong hierarchy, CMS integration for dynamic listings, and SEO-friendly page architecture on a modern frontend stack.",
    tools: ["Next.js", "Tailwind CSS", "Sanity", "Vercel"],
    results: "A structured browsing experience that simplifies property discovery, clear information architecture across large inventories, responsive performance on every device, SEO-friendly organization, and a modular design system supporting future expansion.",
  },
  velto: {
    tagline: "A premium landing page built to convert luxury fashion shoppers.",
    overview: "A modern fashion e-commerce landing concept blending editorial aesthetics with conversion-focused UX — a premium digital storefront where products become the hero, inspired by luxury fashion brands and editorial publications, with refined typography and thoughtful visual hierarchy.",
    challenge: "Fashion e-commerce competes for attention with crowded layouts, excessive promotions, and inconsistent hierarchy, making it difficult for products to stand out. The experience had to communicate premium identity instantly and guide visitors naturally toward purchase.",
    solution: "A flow of Discover, Explore Collections, View Featured Products, Build Purchase Intent: editorial-inspired layouts, minimal distraction-free product presentation, a neutral palette with restrained accents, strategically placed calls-to-action, and a reusable component system ready to evolve into a complete online store.",
    tools: ["Framer", "Figma", "Motion"],
    results: "A refined visual identity that communicates luxury instantly, enhanced product visibility through clean layouts, an intuitive browsing experience, responsive performance, stronger conversion potential through strategic content flow, and a scalable foundation for e-commerce expansion.",
  },
  archon: {
    tagline: "A category-defining B2B site with a modern engineering foundation.",
    overview: "A modern website concept for an architecture and interior design studio seeking a refined digital presence — a visually immersive experience where architectural projects take center stage, communicating professionalism, craftsmanship, and attention to detail.",
    challenge: "Architecture websites often struggle to present rich portfolios without overwhelming visitors. Dense galleries, inconsistent layouts, and weak hierarchy make it hard for potential clients to appreciate the firm's expertise or take the next step.",
    solution: "A journey of Discover, Explore Projects, Learn About the Studio, Build Trust, Start a Conversation: large-format project imagery, minimalist grid-based layouts with generous whitespace, sophisticated typography, a neutral palette complementing photography, and a component-based design system for long-term scalability.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    results: "A premium online presence aligned with the studio's architectural identity, improved project discoverability, stronger visual storytelling, a responsive experience on every device, strategic CTA placement supporting lead generation, and a scalable foundation for portfolio growth.",
  },
  goplay: {
    tagline: "A mobile-first outdoor sports booking product designed for daily use.",
    overview: "We designed GoPlay, a mobile application that makes discovering, booking, and participating in sports activities simple and accessible — connecting users with nearby venues, events, and communities while providing a seamless experience for organizing games and staying active.",
    challenge: "Finding local sports activities involves fragmented communication, inconsistent booking systems, and limited chances to connect with players of similar interests or skill levels — users juggle multiple platforms just to organize a single game.",
    solution: "A progression of Discover, Connect, Book, Play: streamlined venue discovery and reservation workflows, community engagement features, personalized recommendations from user behavior, card-based mobile UI for Android and iOS, and a scalable cloud architecture with ML-driven recommendations and Redis caching.",
    tools: ["React Native", "Expo", "Node.js", "PostgreSQL"],
    results: "A streamlined booking experience with reduced friction, personalized recommendations that increase engagement, intuitive navigation with consistent interaction patterns, scalable cloud infrastructure for growing communities, and a flexible foundation for new sports and social features.",
  },
  noireve: {
    tagline: "A brand experience for a French luxury beauty and skincare house.",
    overview: "We conceptualized and designed NOIRÈVE, a luxury French skincare brand exploring editorial-inspired web design, premium storytelling, and immersive digital experiences — guided by the visual language of European fashion houses, focusing on atmosphere, craftsmanship, and storytelling before products.",
    challenge: "Luxury beauty competes on perception as much as product quality. The experience had to communicate exclusivity and craftsmanship, showcase products through editorial presentation, and balance cinematic visuals with intuitive navigation.",
    solution: "A curated progression of Discover, Experience, Explore, Indulge: a continuous editorial journey through brand philosophy, rituals, collections, and ingredients; asymmetrical magazine-inspired layouts; dark neutrals with taupe, pearl, and gold accents; serif display typography; cinematic transitions; and AI-assisted visual production for a cohesive premium aesthetic.",
    tools: ["Framer", "Figma", "Motion"],
    results: "A refined visual identity strengthening premium perception, a storytelling-first experience driving emotional engagement, a consistent language across collections, enhanced creative efficiency through AI-assisted production, and a scalable foundation for future launches and campaigns.",
  },
};

export const PROCESS = {
  eyebrow: "Process",
  title: "A structured pipeline, not a pitch deck.",
  steps: [
    { n: "01", title: "Discover", desc: "Product strategy, technical scoping, and success metrics." },
    { n: "02", title: "Design", desc: "Design systems and interfaces engineered for scale." },
    { n: "03", title: "Build", desc: "Ship production software with modern, tested foundations." },
    { n: "04", title: "Scale", desc: "Iterate on data, optimize performance, growth, and revenue." },
  ],
};

export const ENGAGEMENTS = {
  eyebrow: "Engagements",
  title: "Three ways to engage, all senior, all shipping.",
  sub: "Pick the shape that matches your stage. Every engagement is principal-led with weekly demos and a shared board.",
  plans: [
    { name: "Sprint", time: "2–4 weeks", desc: "Focused build for a landing page, MVP feature, or AI prototype. Fixed scope, fast turnaround." },
    { name: "Partnership", time: "1–3 months", desc: "Full product engagements, design system, app build, launch. Weekly demos, shared Linear." },
    { name: "Retainer", time: "Ongoing", desc: "Embedded team for iteration, growth, and scaling. Dedicated capacity, senior only." },
  ],
};

export const ABOUT = {
  eyebrow: "About",
  p1: "Devowise is a small, senior team building AI and product systems for companies that take software seriously.",
  p2: "We focus on the intersection of engineering, design, and AI, shipping infrastructure, interfaces, and automation that hold up under real load. Every engagement is led by principals. No account managers, no ceremony.",
};

export const FAQ = {
  eyebrow: "FAQ",
  title: "Questions, answered.",
  items: [
    {
      q: "How long does a typical project take?",
      a: "Sprints ship in 2–4 weeks. Full product engagements run 4–12 weeks depending on scope. We share a milestone plan before kickoff.",
    },
    {
      q: "What does an engagement cost?",
      a: "Sprints start at $6k. Full builds typically range $15k–$60k. Retainers are monthly. We scope pricing after a discovery call.",
    },
    {
      q: "Do you work with early-stage startups?",
      a: "Yes, a good portion of our work is with pre-seed to Series A teams. We help sharpen scope so you spend the least amount to prove the most.",
    },
    {
      q: "Which stack do you build on?",
      a: "React / Next / TanStack, TypeScript, Postgres, edge runtimes, and modern AI infrastructure (OpenAI, Anthropic, vector DBs). Framer & Webflow for marketing sites.",
    },
    {
      q: "Do we own the code and IP?",
      a: "Yes. All source code, designs, and IP transfer to you at project close. We keep no rights beyond a portfolio credit unless you prefer otherwise.",
    },
    {
      q: "How do we get started?",
      a: "Book a 30-minute call. We'll align on the problem, scope, and next steps. If there's a fit, we send a proposal within 72 hours.",
    },
  ],
};

export const CLIENTS = [
  ["Al Ghurair", "alghurair.com"],
  ["Al Jouf", "aljouf.com"],
  ["Weatherbys", "weatherbys.com"],
  ["Bestseller", "bestseller.com"],
  ["fäm Master Agency", "fam.ae"],
  ["Interwood", "interwood.pk"],
  ["Nestlé", "nestle.com"],
  ["Under Armour", "underarmour.com"],
];

export const logoDev = (domain) =>
  `https://img.logo.dev/${domain}?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ&format=png&size=64&retina=true`;

export const BYTECORP_PILLARS = [
  {
    id: "ai-data",
    label: "AI & Data",
    color: "#dc3514",
    headline: "Production AI systems, built to ship.",
    desc: "From custom LLM architectures to high-throughput data lakes: we build deterministic AI pipelines with evals, guardrails, and real-time observability.",
    tag: "Verified & Audited",
    items: [
      { num: "01", title: "Applied Machine Learning", desc: "Fine-tuned models, autonomous agents, and inference routing built for speed and strict latency budgets." },
      { num: "02", title: "Data Engineering & Analytics", desc: "Real-time streaming pipelines, vector indexing, and scalable lakehouse architectures that never break." },
      { num: "03", title: "AI Consultancy & Strategy", desc: "Technical discovery, AI readiness audits, and proof-of-value scoping before spending months on engineering." }
    ],
    slug: "/services/mvp-doctor"
  },
  {
    id: "design",
    label: "Design",
    color: "#e86eac",
    headline: "Product Design users actually adopt.",
    desc: "Interfaces that build trust and turn every interaction into revenue. Tokenized design systems and UX flows crafted for production scale.",
    tag: "UX / UI & Systems",
    items: [
      { num: "01", title: "UX Design Consultancy", desc: "User research, cognitive journey mapping, and interactive wireframing that remove friction from complex workflows." },
      { num: "02", title: "UI Design & Design Systems", desc: "Figma design libraries, token handoffs, and pixel-perfect component architectures ready for production." },
      { num: "03", title: "Brand Design Consultancy", desc: "Visual identities, typography systems, and high-conversion brand experiences that command market authority." }
    ],
    slug: "/services/branding-ui-ux-web-development"
  },
  {
    id: "engineering",
    label: "Engineering",
    color: "#93e3ae",
    headline: "Web, Mobile, and SaaS, built to scale.",
    desc: "Full-stack cloud engineering on React 19, Next.js, and edge networks. Modular, tested codebases engineered for institutional-grade reliability.",
    tag: "Full-Stack & Cloud",
    items: [
      { num: "01", title: "Web & Mobile App Development", desc: "Cross-platform mobile apps and edge web platforms built for 60fps responsiveness and zero-downtime." },
      { num: "02", title: "MVP Design & Development", desc: "Rapid 4-to-6 week sprints from technical scoping to working software in the hands of real users." },
      { num: "03", title: "DevOps & Cloud Infrastructure", desc: "Kubernetes, Docker, automated CI/CD pipelines, and multi-region AWS/GCP clusters." },
      { num: "04", title: "QA & Automated Testing", desc: "End-to-end regression test suites, penetration testing, and continuous verification on every PR." }
    ],
    slug: "/services/saas-development"
  }
];

export const BYTECORP_PROCESS = {
  eyebrow: "Our Process",
  title: "A structured pipeline, not a pitch deck.",
  sub: "We think before we build — that's why our products ship. Every engagement starts with understanding the problem, not opening a text editor.",
  steps: [
    {
      num: "01",
      title: "Discovery",
      phase: "Phase 01 · Weeks 1–2",
      desc: "Define the problem before solving it. Business goals, user needs, and technical constraints mapped into a focused product brief.",
      deliverables: ["Product Requirements Document", "System Architecture Blueprint", "Technical Feasibility Study", "Sprint Roadmap"]
    },
    {
      num: "02",
      title: "Design",
      phase: "Phase 02 · Weeks 2–4",
      desc: "Architect the system before writing code. UX flows, system architecture, and data models worked out before the build phase begins.",
      deliverables: ["Figma Interactive Prototype", "Design System & Tokens", "Component Library", "User Journey Flowmaps"]
    },
    {
      num: "03",
      title: "Build",
      phase: "Phase 03 · Weeks 4–10",
      desc: "Ship working software, sprint by sprint. CI/CD, code review, and automated testing from day one. No slide decks — only software.",
      deliverables: ["Production-Grade Codebase", "API & Database Schema", "Automated E2E Test Suite", "Multi-Tenant Cloud Deploy"]
    },
    {
      num: "04",
      title: "Scale",
      phase: "Phase 04 · Continuous",
      desc: "Handed over ready for 10× growth. Performance hardening, security audits, observability, and documentation built in.",
      deliverables: ["Observability & Logging", "Cost Optimization Report", "Performance SLA Guarantee", "Dedicated Support"]
    }
  ]
};

export const BYTECORP_TESTIMONIALS = {
  eyebrow: "Client Stories & Trust",
  title: "Don't Take Our Word For It.",
  sub: "What founders, CTOs, and product directors say about working with our product engineering team.",
  items: [
    {
      quote: "Devowise engineered our entire AI data pipeline and recruitment matching engine from scratch. They shipped a production system in weeks that now processes tens of thousands of records flawlessly.",
      author: "Tariq Al-Mansoor",
      role: "Co-Founder & CTO",
      company: "JobFit AI",
      metric: "10x Faster Hiring Cycles"
    },
    {
      quote: "Unlike agencies that just build pretty mockups, Devowise engineers real systems that hold up under institutional load. Their design system and Next.js engineering elevated our product to Series A readiness.",
      author: "Elena Rostova",
      role: "VP of Product",
      company: "MindMesh Global",
      metric: "Seamless Q3 Launch"
    },
    {
      quote: "From day one, their senior engineers worked directly with our team with zero bureaucracy. They hardened our prototypes into production-grade financial software with bulletproof security.",
      author: "Marcus Chen",
      role: "Head of Engineering",
      company: "PrismPay Fintech",
      metric: "99.99% Uptime in Production"
    }
  ]
};

export const BYTECORP_STUDIO = {
  eyebrow: "From Our Studio",
  title: "Our ideas take shape in Our Studio as well.",
  sub: "When we are not building for clients, we engineer our own internal products, open-source AI tools, and digital ventures.",
  products: [
    {
      name: "BuildShip Automation",
      tag: "Venture Product",
      desc: "Low-code backend visual workflow builder powered by AI for rapid API orchestration and data jobs.",
      stats: "15k+ Active Builders"
    },
    {
      name: "Lumina AI Agent Engine",
      tag: "Open Source",
      desc: "Deterministic agent state machines with automatic guardrails, tool calls, and fallback execution.",
      stats: "3.2k GitHub Stars"
    },
    {
      name: "BatchQ Data Pipeline",
      tag: "SaaS Spinout",
      desc: "Real-time AI competitor intelligence and large-scale web research extraction engine.",
      stats: "1M+ Records Daily"
    }
  ]
};

export const BYTECORP_WAVES = {
  eyebrow: "Global Impact",
  title: "Always making Waves Globally.",
  sub: "Partnering with visionary founders and product teams worldwide.",
  stats: [
    { value: "14+", label: "Products Shipped", sub: "Production systems delivered on time" },
    { value: "100%", label: "Senior Engineers", sub: "Direct collaboration with principal builders" },
    { value: "99.8%", label: "On-Time SLA Delivery", sub: "Zero compromise on quality and commitments" },
    { value: "4.9 / 5", label: "Client Satisfaction", sub: "Across all verified client evaluations" }
  ]
};

export const SERVICE_DOMAINS = [
  {
    id: "data-ai",
    label: "Data & AI Systems",
    desc: "Autonomous agents, model evaluation pipelines, and production AI hardening.",
    icon: "ai",
  },
  {
    id: "saas-platforms",
    label: "Full-Stack SaaS & Platforms",
    desc: "High-concurrency React 19 / Next.js architectures, mobile apps, and edge infrastructure.",
    icon: "saas",
  },
  {
    id: "design-growth",
    label: "Product Design & Systems",
    desc: "Design tokens, conversion systems, modern CMS platforms, and ongoing maintenance.",
    icon: "design",
  },
];

export const SERVICES = [
  {
    icon: "pulse",
    slug: "mvp-doctor",
    title: "MVP Doctor",
    domain: "data-ai",
    domainLabel: "Data & AI",
    desc: "Free AI-powered readiness report for your startup.",
    tagline: "Audit performance, prompt stability, and architectural vulnerabilities before real users or investors find the gaps.",
    diagramType: "pipeline",
    tools: ["OpenAI", "Python", "LangChain", "Sentry", "PostgreSQL"],
    deliverables: ["Architecture Audit Report", "Prompt Benchmark Score", "Security & Guardrails Map", "Remediation Checklist"],
    capabilities: [
      {
        index: "01",
        title: "Architecture & Data Flow Audit",
        desc: "Comprehensive inspection of ingestion pipelines, rate limits, schema boundaries, and backend bottle-necks across your entire stack.",
      },
      {
        index: "02",
        title: "Prompt & LLM Reliability Scoring",
        desc: "Automated regression testing against hallucination benchmarks, token cost analysis, and timeout stress tests under burst traffic.",
      },
      {
        index: "03",
        title: "Security & Guardrails Review",
        desc: "Penetration tests for prompt injection, sensitive data leakage, and insecure tool execution before opening up to public users.",
      },
      {
        index: "04",
        title: "Executive Prioritization Roadmap",
        desc: "A prioritized action plan outlining the highest-leverage fixes to turn an experimental build into dependable, institutional software.",
      },
    ],
  },
  {
    icon: "shield",
    slug: "ai-prototype-hardening",
    title: "AI Prototype Hardening",
    domain: "data-ai",
    domainLabel: "Data & AI",
    desc: "Turn AI-generated MVPs into production-grade software. Scope and timeline are confirmed after a technical review.",
    tagline: "Transform fragile prototypes, v0 experiments, and wrapper scripts into resilient, scalable systems with deterministic guardrails.",
    diagramType: "agent",
    tools: ["Python", "FastAPI", "OpenAI", "Anthropic", "Pinecone", "Docker"],
    deliverables: ["Hardened Backend Service", "Evals & Test Suite", "Structured Output Schemas", "Production Deployment"],
    capabilities: [
      {
        index: "01",
        title: "Deterministic Guardrails & Fallbacks",
        desc: "Implement strict JSON schema enforcement, structured outputs, and tiered LLM fallback routing that prevent silent failures.",
      },
      {
        index: "02",
        title: "Vector Pipeline & RAG Optimization",
        desc: "Advanced chunking strategies, hybrid keyword/vector search, and low-latency cache layers with pgvector or Pinecone.",
      },
      {
        index: "03",
        title: "Automated Evaluation Framework",
        desc: "Continuous evals and regression benchmarks integrated directly into GitHub Actions to measure accuracy on every commit.",
      },
      {
        index: "04",
        title: "Production Containerization & Observability",
        desc: "Docker orchestration, structured logging, token usage tracking, and trace monitoring with OpenTelemetry and Sentry.",
      },
    ],
  },
  {
    icon: "chip",
    slug: "forward-deployed-ai-engineer",
    title: "Forward Deployed AI Engineer",
    domain: "data-ai",
    domainLabel: "Data & AI",
    desc: "Embed senior AI engineering into your production team, codebase, and delivery workflows.",
    tagline: "Accelerate your roadmap with senior AI engineers embedded directly in your GitHub, Slack, and sprint cycles.",
    diagramType: "agent",
    tools: ["TypeScript", "Python", "LangChain", "OpenAI", "Kubernetes", "GitHub"],
    deliverables: ["Weekly Shipped PRs", "Multi-Agent System", "Fine-Tuning Pipelines", "Internal Documentation"],
    capabilities: [
      {
        index: "01",
        title: "Direct Codebase Integration",
        desc: "Senior builders pushing reviewed, production-ready PRs directly to your repository with zero handoff friction.",
      },
      {
        index: "02",
        title: "Autonomous Agents & Tool Invocation",
        desc: "Designing multi-agent loops, state machines, and reliable external API execution with error recovery strategies.",
      },
      {
        index: "03",
        title: "Model Fine-Tuning & Context Distillation",
        desc: "Custom embeddings, prompt optimization, and dataset curation for domain-specific accuracy and reduced inference latency.",
      },
      {
        index: "04",
        title: "Team Upskilling & Architecture Playbooks",
        desc: "Best practices, code reviews, and architectural patterns shared with your full-time engineering team to compound velocity.",
      },
    ],
  },
  {
    icon: "cloud",
    slug: "elastic-infrastructure",
    title: "Elastic Infrastructure",
    domain: "data-ai",
    domainLabel: "Data & AI",
    desc: "Cost-optimized AWS/GCP ecosystems. Unit economics, not guesswork.",
    tagline: "High-throughput serverless architectures and auto-scaling compute tailored to AI workloads and spike traffic.",
    diagramType: "pipeline",
    tools: ["AWS", "Google Cloud", "Cloudflare", "Docker", "Kubernetes", "Redis"],
    deliverables: ["Infrastructure as Code", "Auto-scaling Clusters", "Cost Dashboard", "Multi-Region Redundancy"],
    capabilities: [
      {
        index: "01",
        title: "Serverless & Edge Compute Routing",
        desc: "Dynamic edge routing for low latency global distribution and minimal idle server costs across AWS, GCP, and Cloudflare.",
      },
      {
        index: "02",
        title: "Model Inference Throttling & Batching",
        desc: "Queue systems (Kafka/SQS) and rate-limit managers that protect against unexpected API surges and model quota exhaustion.",
      },
      {
        index: "03",
        title: "Multi-Cloud Cost Reduction",
        desc: "Optimizing data egress, caching static responses, and cutting cloud bills by up to 60% without sacrificing speed.",
      },
      {
        index: "04",
        title: "High-Availability Disaster Recovery",
        desc: "Multi-region failover, automated snapshots, and uptime SLAs engineered for mission-critical customer operations.",
      },
    ],
  },
  {
    icon: "saas",
    slug: "saas-development",
    title: "SaaS Development",
    domain: "saas-platforms",
    domainLabel: "SaaS & Platforms",
    desc: "Scalable SaaS platforms built for institutional-grade traffic and security.",
    tagline: "Complete cloud-native SaaS systems engineered with multi-tenant data models, billing, and rock-solid auth.",
    diagramType: "system",
    tools: ["React", "Next.js", "TypeScript", "PostgreSQL", "Stripe", "Prisma"],
    deliverables: ["Multi-Tenant Backend", "Stripe Billing Portal", "Admin Dashboard", "Security Architecture"],
    capabilities: [
      {
        index: "01",
        title: "Multi-Tenant Architecture",
        desc: "Isolated tenant data boundaries, permission matrices, and scalable database schemas ready for enterprise SOC2 compliance.",
      },
      {
        index: "02",
        title: "Subscription & Billing Engines",
        desc: "Complex Stripe billing, usage-based metering, invoices, tax handling, and tiered seat management built into the core.",
      },
      {
        index: "03",
        title: "High-Throughput REST & GraphQL APIs",
        desc: "Clean API endpoints with rate limiting, Swagger/OpenAPI docs, and webhook triggers for seamless customer integrations.",
      },
      {
        index: "04",
        title: "Telemetry & Product Analytics",
        desc: "Deep instrumentation with PostHog and Sentry for real-time customer behavioral insights and pro-active error resolution.",
      },
    ],
  },
  {
    icon: "code",
    slug: "next-js-platform-engineering",
    title: "Next.js Platform Engineering",
    domain: "saas-platforms",
    domainLabel: "SaaS & Platforms",
    desc: "High-concurrency web platforms and robust API orchestration.",
    tagline: "Engineered on modern React 19 and Next.js for sub-second page loads and seamless real-time data sync.",
    diagramType: "system",
    tools: ["Next.js", "React", "TypeScript", "Vercel", "Tailwind CSS", "Redis"],
    deliverables: ["Full-Stack Next.js App", "Edge API Layer", "Type-safe Schemas", "Vitals Optimization"],
    capabilities: [
      {
        index: "01",
        title: "Server Components & Edge Rendering",
        desc: "Harnessing React Server Components and ISR for near-instant Time to First Byte (TTFB) and optimal SEO performance.",
      },
      {
        index: "02",
        title: "Optimistic UI & Cache Orchestration",
        desc: "Zero-lag user feedback using TanStack Query, server actions, and distributed Redis caches across global edge regions.",
      },
      {
        index: "03",
        title: "Type-Safe Full-Stack Contracts",
        desc: "End-to-end type safety from database models to frontend components with TypeScript, eliminating runtime runtime bugs.",
      },
      {
        index: "04",
        title: "LCP & Core Web Vitals Optimization",
        desc: "Top-tier Core Web Vitals scores guaranteed on both mobile and desktop screens to boost ranking and conversions.",
      },
    ],
  },
  {
    icon: "mobile",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    domain: "saas-platforms",
    domainLabel: "SaaS & Platforms",
    desc: "Secure iOS/Android apps with production-grade AI features.",
    tagline: "Native-quality React Native & Expo applications delivered to both app stores with shared codebase velocity.",
    diagramType: "system",
    tools: ["React Native", "Expo", "TypeScript", "Firebase", "Supabase", "PostgreSQL"],
    deliverables: ["iOS & Android Apps", "Store Submission Support", "Offline Sync Layer", "Push Notification Setup"],
    capabilities: [
      {
        index: "01",
        title: "Cross-Platform Native Experience",
        desc: "60fps animations, intuitive gesture navigation, and native device hardware access built with modern Expo workflows.",
      },
      {
        index: "02",
        title: "Offline-First Sync & Local Storage",
        desc: "Seamless offline functionality with optimistic updates and robust background sync conflict resolution.",
      },
      {
        index: "03",
        title: "Push Notifications & Deep Linking",
        desc: "Targeted re-engagement loops with granular user preferences and universal links that deep-link straight into key screens.",
      },
      {
        index: "04",
        title: "App Store & Play Store Publishing",
        desc: "Automated CI/CD with EAS, handling certificates, review guidelines, and seamless over-the-air (OTA) updates.",
      },
    ],
  },
  {
    icon: "web",
    slug: "web-full-stack",
    title: "Web & Full-Stack",
    domain: "saas-platforms",
    domainLabel: "SaaS & Platforms",
    desc: "End-to-end web platforms, dashboards, Shopify commerce, and API-first architectures.",
    tagline: "Bespoke web applications, administrative command centers, and custom headless e-commerce systems.",
    diagramType: "system",
    tools: ["Next.js", "Node.js", "Shopify", "Tailwind CSS", "PostgreSQL", "PostHog"],
    deliverables: ["Custom Web Application", "Admin Command Center", "Database Schema", "CI/CD Setup"],
    capabilities: [
      {
        index: "01",
        title: "Custom Admin Dashboards",
        desc: "Data visualization, role-based controls, export pipelines, and administrative workflows that keep operations effortless.",
      },
      {
        index: "02",
        title: "Headless E-Commerce & Checkout",
        desc: "Shopify custom storefronts and lightning-fast modern checkout flows that maximize average order value.",
      },
      {
        index: "03",
        title: "Third-Party Stack Integrations",
        desc: "Bi-directional sync with CRMs, ERPs, payment processors, and external webhooks for a frictionless operating rhythm.",
      },
      {
        index: "04",
        title: "Security & Role-Based Access (RBAC)",
        desc: "Fine-grained permissions, encrypted secrets, and automated security scans protecting customer data at all times.",
      },
    ],
  },
  {
    icon: "design",
    slug: "branding-ui-ux-web-development",
    title: "Branding, UI/UX & Web Development",
    domain: "design-growth",
    domainLabel: "Product Design",
    desc: "Branding and logo design, UI/UX, website design and development, landing pages, and Framer / Webflow / Kajabi builds — one team from identity to launch.",
    tagline: "A unified studio process taking your product from identity and design tokens to high-converting production sites.",
    diagramType: "design",
    tools: ["Figma", "Framer", "Webflow", "React", "Storybook", "Tailwind CSS"],
    deliverables: ["Brand Identity Book", "Figma Design System", "High-Fidelity Prototypes", "Production CMS Site"],
    capabilities: [
      {
        index: "01",
        title: "Brand Identity & Visual Foundations",
        desc: "Logos, type scale, color theory, iconography, and comprehensive style guides that establish immediate market authority.",
      },
      {
        index: "02",
        title: "Product-Led UX & User Journeys",
        desc: "Wireframing, customer journey mapping, and usability testing to eliminate onboarding friction and guide intent.",
      },
      {
        index: "03",
        title: "Modular Design Systems in Figma",
        desc: "Atomic design component libraries, auto-layout variants, and token handoffs ensuring design and code remain in sync.",
      },
      {
        index: "04",
        title: "Pixel-Perfect Webflow & Framer Builds",
        desc: "Interactive marketing platforms, CMS-driven pages, and scroll-driven micro-interactions that your marketing team can manage.",
      },
    ],
  },
  {
    icon: "strategy",
    slug: "seo-conversion-optimisation",
    title: "SEO & Conversion Optimisation",
    domain: "design-growth",
    domainLabel: "Product Design",
    desc: "Search visibility and conversion rate optimisation, measured — not guessed.",
    tagline: "Engineer every page to attract high-intent organic visitors and systematically turn clicks into paying customers.",
    diagramType: "design",
    tools: ["PostHog", "Google Cloud", "Next.js", "Vercel", "Tailwind CSS", "Algolia"],
    deliverables: ["SEO Architecture Audit", "CRO Wireframes", "Schema Markup Implementation", "Conversion Tracking"],
    capabilities: [
      {
        index: "01",
        title: "Technical SEO & Schema Markup",
        desc: "Semantic HTML5, structured JSON-LD schemas, robots configuration, and crawl budget optimization for top search results.",
      },
      {
        index: "02",
        title: "Conversion Funnel & Dropoff Analysis",
        desc: "Heatmaps, session replays, and form completion tracking to uncover conversion leaks and improve signup velocity.",
      },
      {
        index: "03",
        title: "A/B Testing & Micro-Copy Iteration",
        desc: "Systematic testing of headlines, call-to-actions, and page structure to drive measurable lifts in customer acquisition.",
      },
      {
        index: "04",
        title: "Search Intent Keyword Architecture",
        desc: "Targeting high-intent enterprise keywords with high-ranking topic cluster pages that outpace competitors.",
      },
    ],
  },
  {
    icon: "auto",
    slug: "website-redesign-maintenance",
    title: "Website Redesign & Maintenance",
    domain: "design-growth",
    domainLabel: "Product Design",
    desc: "Redesigns, refreshes, and ongoing maintenance that keep your site fast, secure, and current.",
    tagline: "Re-architect legacy web experiences into sleek, high-performing flagships that stay up-to-date.",
    diagramType: "design",
    tools: ["Next.js", "Framer", "Webflow", "Cloudflare", "GitHub", "Vercel"],
    deliverables: ["Complete Site Redesign", "Zero-Downtime Migration", "Speed Optimization", "Monthly Retainer SLA"],
    capabilities: [
      {
        index: "01",
        title: "Legacy Code & UX Refactoring",
        desc: "Modernizing outdated frameworks, eliminating tech debt, and upgrading accessibility across all viewport sizes.",
      },
      {
        index: "02",
        title: "Continuous Speed & Security Audits",
        desc: "Proactive dependency patching, vulnerability scans, and performance tuning that guarantee high availability.",
      },
      {
        index: "03",
        title: "Content Architecture & CMS Migrations",
        desc: "Restructuring blog posts, case studies, and assets into manageable headless CMS collections with no broken URLs.",
      },
      {
        index: "04",
        title: "Dedicated Monthly SLA Support",
        desc: "Guaranteed rapid turnaround for new landing pages, feature tweaks, and growth experiments with a senior team.",
      },
    ],
  },
];


export const SITUATIONS = [
  { route: "Fix it", num: "01", quote: "“The MVP works, but I do not trust it.”", desc: "Get a free AI-powered readiness report before real users, scale, or diligence finds the gap.", start: "MVP Doctor", to: "/services/mvp-doctor", timing: "Start now" },
  { route: "Fix it", num: "02", quote: "“We built it with AI tools — now it needs to be production-grade.”", desc: "Scope and timeline are confirmed after a technical review, then we harden it for real traffic.", start: "AI Prototype Hardening", to: "/services/ai-prototype-hardening", timing: "Review first" },
  { route: "Build it right", num: "03", quote: "“We are starting a new product.”", desc: "Scoping, architecture and design decisions made while they are still inexpensive to change.", start: "SaaS Development", to: "/services/saas-development", timing: "Before implementation" },
  { route: "Build it right", num: "04", quote: "“Traffic is growing and the platform is creaking.”", desc: "High-concurrency web platforms and robust API orchestration that hold up past the demo.", start: "Next.js Platform Engineering", to: "/services/next-js-platform-engineering", timing: "Before scale" },
  { route: "Keep shipping", num: "05", quote: "“Senior review is the delivery bottleneck.”", desc: "Embed senior AI engineering into your production team, codebase, and delivery workflows.", start: "Forward Deployed AI Engineer", to: "/services/forward-deployed-ai-engineer", timing: "Ongoing continuity" },
  { route: "Keep shipping", num: "06", quote: "“Cloud costs are eating the margin.”", desc: "Cost-optimized AWS/GCP ecosystems. Unit economics, not guesswork.", start: "Elastic Infrastructure", to: "/services/elastic-infrastructure", timing: "Monthly engagement" },
];

const d = (slug) => `https://www.devowise.com/${slug}`;

export const DIRECTORY = {
  eyebrow: "Explore Devowise",
  title: "Every service, platform, industry, and guide.",
  sub: "A full directory of what we do and who we build for. Jump straight to a page.",
  groups: [
    {
      name: "Services", all: d("services"),
      items: SERVICES.map((s) => [s.title, d(`services/${s.slug}`)]),
    },
    {
      name: "Platforms", all: d("platforms"),
      items: [
        ["Framer Agency", d("platforms/framer-agency")],
        ["Webflow Agency", d("platforms/webflow-agency")],
        ["Shopify Agency", d("platforms/shopify-agency")],
        ["Kajabi Experts", d("platforms/kajabi-experts")],
        ["WordPress Development", d("platforms/wordpress-development")],
        ["Figma Design", d("platforms/figma-design")],
      ],
    },
    {
      name: "Industries", all: d("industries"),
      items: [
        ["SaaS", d("industries/saas")],
        ["AI Startups", d("industries/ai-startups")],
        ["Healthcare", d("industries/healthcare")],
        ["Real Estate", d("industries/real-estate")],
        ["Restaurants", d("industries/restaurants")],
        ["Law Firms", d("industries/law-firms")],
        ["Finance", d("industries/finance")],
        ["E-commerce", d("industries/ecommerce")],
        ["Education", d("industries/education")],
        ["Travel", d("industries/travel")],
        ["Marketing Agencies", d("industries/marketing-agencies")],
        ["Construction", d("industries/construction")],
        ["Interior Design", d("industries/interior-design")],
        ["Coaches & Consultants", d("industries/coaches-consultants")],
      ],
    },
    {
      name: "Solutions", all: d("solutions"),
      items: [
        ["Website Not Converting?", d("solutions/website-not-converting")],
        ["Website Redesign Services", d("solutions/website-redesign")],
        ["Slow Website Optimisation", d("solutions/slow-website-optimisation")],
        ["Startup Website Design", d("solutions/startup-website-design")],
        ["MVP Design Services", d("solutions/mvp-design")],
        ["Improve Website Conversion", d("solutions/improve-conversion")],
        ["Build a Brand From Scratch", d("solutions/build-brand-scratch")],
        ["Modern Website Design", d("solutions/modern-website-design")],
        ["Mobile Responsive Website", d("solutions/mobile-responsive-website")],
        ["Custom Business Website", d("solutions/custom-business-website")],
      ],
    },
    {
      name: "Resources", all: d("resources"),
      items: [
        ["Framer vs Webflow: An Honest Comparison", d("resources/framer-vs-webflow")],
        ["Shopify vs WooCommerce: Which Should You Choose?", d("resources/shopify-vs-woocommerce")],
        ["Website Cost Guide 2026", d("resources/website-cost-guide")],
        ["Branding Checklist: Everything a Real Brand Needs", d("resources/branding-checklist")],
        ["Website Launch Checklist", d("resources/website-launch-checklist")],
        ["UX Best Practices for Product Teams", d("resources/ux-best-practices")],
        ["Website SEO Checklist", d("resources/website-seo-checklist")],
      ],
    },
    {
      name: "Blog Categories", all: d("blog"),
      items: [
        ["Branding", d("blog/category/branding")],
        ["UI/UX", d("blog/category/ui-ux")],
        ["Web Design", d("blog/category/web-design")],
        ["Development", d("blog/category/development")],
        ["Framer", d("blog/category/framer")],
        ["Webflow", d("blog/category/webflow")],
        ["Shopify", d("blog/category/shopify")],
        ["Kajabi", d("blog/category/kajabi")],
        ["SEO", d("blog/category/seo")],
        ["CRO", d("blog/category/cro")],
        ["AI", d("blog/category/ai")],
        ["Startups", d("blog/category/startups")],
        ["Marketing", d("blog/category/marketing")],
      ],
    },
  ],
};

export const STUDIO = {
  eyebrow: "About the studio",
  lines: ["Small team.", "Senior only.", "No ceremony."],
  p: "We are a small, senior team building AI and product systems for companies that take software seriously. We focus on the intersection of engineering, design and AI — shipping infrastructure, interfaces and automation that hold up under real load.",
  points: [
    "100% senior talent — no juniors learning on your budget",
    "Every engagement led by a principal, start to finish",
    "Working software demoed to you every single week",
    "All code, designs and IP transfer to you at close",
    "No account managers. No ceremony. Direct line to the builders.",
  ],
  img: "/team/studio.jpg",
};

export const DECISION_AID = {
  popup: {
    title: "Before you commit to another build sprint…",
    sub: "Get a senior view of the constraint, the evidence you have, and the next decision that removes the most risk.",
    primary: "Choose your starting point",
    secondary: "Book a technical review",
    note: "No email required for this decision aid. Dismiss once and this popup stays closed for the session.",
  },
  eyebrow: "Free decision aid",
  title: "The decision checks",
  sub: "Four signals behind a sound next decision",
  checks: [
    { t: "A clear outcome", d: "Make this visible before choosing the delivery path." },
    { t: "Known critical path", d: "Make this visible before choosing the delivery path." },
    { t: "Evidence you can inspect", d: "Make this visible before choosing the delivery path." },
    { t: "An ownership and handoff plan", d: "Make this visible before choosing the delivery path." },
  ],
  note: "The right next step may be a focused review, not the largest engagement.",
  quizTitle: "Where to start",
  quizSub: "Which situation sounds most like today?",
  situations: [
    {
      q: "We need a landing page, MVP feature, or AI prototype — fast.",
      rec: "Sprint",
      detail: "A 2–4 week focused build. Fixed scope, fast turnaround.",
    },
    {
      q: "We're building a full product — design system, app build, launch.",
      rec: "Partnership",
      detail: "1–3 months of principal-led engagement. Weekly demos, shared Linear.",
    },
    {
      q: "We have a live product that needs iteration, growth, and scaling.",
      rec: "Retainer",
      detail: "Ongoing embedded team. Dedicated capacity, senior only.",
    },
    {
      q: "We're not sure what the real constraint is yet.",
      rec: "Technical review",
      detail: "A 30-minute senior review — get the evidence before committing to a path.",
    },
  ],
};

export const projectSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export const CTA = {
  title: "Let's build something exceptional.",
  sub: "Have an idea or product? We help turn it into a scalable digital system.",
  call: "Book a Call",
};

export const FOOTER_LINKS = [
  ["Case Studies", d("case-studies")],
  ["Blog", d("blog")],
  ["All Services", d("services")],
  ["All Platforms", d("platforms")],
  ["All Industries", d("industries")],
  ["All Solutions", d("solutions")],
  ["All Resources", d("resources")],
];
