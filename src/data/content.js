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
  stats: [
    { value: 14, suffix: "+", label: "Products Shipped" },
    { value: 4, pad: true, label: "Projects Ongoing" },
    { value: 4.9, suffix: "/5", decimals: 1, label: "Client Satisfaction" },
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

const d = (slug) => `https://www.devowise.com/${slug}`;

export const DIRECTORY = {
  eyebrow: "Explore Devowise",
  title: "Every service, platform, industry, and guide.",
  sub: "A full directory of what we do and who we build for. Jump straight to a page.",
  groups: [
    {
      name: "Services", all: d("services"),
      items: [
        ["Branding Services", d("services/branding-services")],
        ["Brand Identity Design", d("services/brand-identity-design")],
        ["Logo Design", d("services/logo-design")],
        ["UI/UX Design", d("services/ui-ux-design")],
        ["Website Design", d("services/website-design")],
        ["Website Development", d("services/website-development")],
        ["Framer Development", d("services/framer-development")],
        ["Webflow Development", d("services/webflow-development")],
        ["Shopify Development", d("services/shopify-development")],
        ["Kajabi Development", d("services/kajabi-development")],
        ["Landing Page Design", d("services/landing-page-design")],
        ["Website Redesign", d("services/website-redesign")],
        ["Website Maintenance", d("services/website-maintenance")],
        ["SEO Services", d("services/seo-services")],
        ["Conversion Rate Optimisation", d("services/conversion-rate-optimisation")],
      ],
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
  p: "Devowise is a small, senior team building AI and product systems for companies that take software seriously. We focus on the intersection of engineering, design and AI — shipping infrastructure, interfaces and automation that hold up under real load.",
  points: [
    "100% senior talent — no juniors learning on your budget",
    "Every engagement led by a principal, start to finish",
    "Working software demoed to you every single week",
    "All code, designs and IP transfer to you at close",
    "No account managers. No ceremony. Direct line to the builders.",
  ],
  img: "/team/studio.jpg",
};

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
