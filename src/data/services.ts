export type Service = {
  number: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  accent: "green" | "purple" | "gold";
};

export type PricingTier = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  accent: "green" | "purple" | "gold";
};

export const services: Service[] = [
  {
    number: "01",
    slug: "shopify-plus-engineering",
    title: "Shopify Plus Engineering",
    tagline: "Storefronts built like products, not templates",
    description:
      "Custom theme architecture, checkout extensibility, and Plus-tier features, engineered for brands that have outgrown off-the-shelf solutions. Every build ships fast, accessible, and maintainable.",
    deliverables: [
      "Custom theme & component architecture",
      "Checkout UI extensions & Shopify Functions",
      "App integrations without the bloat",
    ],
    accent: "green",
  },
  {
    number: "02",
    slug: "headless-performance",
    title: "Headless & Performance",
    tagline: "Sub-second storefronts on Hydrogen",
    description:
      "Hydrogen and Next.js storefronts with edge caching, tuned media pipelines, and Core Web Vitals treated as a revenue metric. Speed is the most cost-effective conversion lever available, and the most frequently overlooked.",
    deliverables: [
      "Hydrogen / Next.js headless builds",
      "Core Web Vitals remediation (LCP < 1.5s)",
      "Edge caching & image pipeline strategy",
    ],
    accent: "purple",
  },
  {
    number: "03",
    slug: "b2b-wholesale",
    title: "B2B & Wholesale Commerce",
    tagline: "Replatform the fax machine",
    description:
      "Company accounts, contract pricing, net terms, quick-order flows, and ERP synchronisation. Wholesale operations moved onto Shopify Plus B2B without losing a single order during the cutover.",
    deliverables: [
      "Shopify Plus B2B implementation",
      "ERP / middleware integration",
      "Sales dashboards & quote-to-order flows",
    ],
    accent: "gold",
  },
  {
    number: "04",
    slug: "commerce-operations",
    title: "Commerce Operations Systems",
    tagline: "One system of record, not five tabs",
    description:
      "Custom CRM, OMS, and IMS platforms that unify orders, customers, and inventory across every channel. Each system is event-driven, warehouse-aware, and built to reconcile itself.",
    deliverables: [
      "Unified CRM / OMS / IMS platforms",
      "Multi-channel order ingestion",
      "Real-time inventory with reservation logic",
    ],
    accent: "green",
  },
  {
    number: "05",
    slug: "ai-agentic-commerce",
    title: "AI & Agentic Commerce",
    tagline: "Make your store legible to machines",
    description:
      "AI readiness audits, MCP-connected storefronts, and agent workflows with human approval loops. When AI agents begin shopping, the brands they can read will win.",
    deliverables: [
      "AI readiness & agentic checkout audit",
      "MCP server design for commerce stacks",
      "Agent workflows with approval loops",
    ],
    accent: "purple",
  },
  {
    number: "06",
    slug: "cro-growth",
    title: "CRO & Growth Engineering",
    tagline: "Every change behind a test",
    description:
      "Structured experimentation programmes across the product page, cart, and checkout, with server-side testing and metrics tied to contribution margin rather than vanity clicks.",
    deliverables: [
      "Experimentation pipeline setup",
      "Checkout & funnel optimisation",
      "Margin-tied analytics & reporting",
    ],
    accent: "gold",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Audit Sprint",
    price: "$2,900",
    period: "one-time · 2 weeks",
    description:
      "A thorough technical and conversion audit of your storefront, delivered with a prioritised, engineering-ready roadmap.",
    features: [
      "Full performance & Core Web Vitals audit",
      "Conversion & checkout friction review",
      "AI readiness score for your stack",
      "Prioritised roadmap ranked by revenue impact",
      "60-min walkthrough call + written report",
    ],
    cta: "Book an audit",
    accent: "green",
  },
  {
    name: "Project Build",
    price: "$9,500",
    period: "from · fixed scope",
    description:
      "A complete build, whether a replatform, headless storefront, B2B rollout, or operations platform, delivered from end to end.",
    features: [
      "Architecture & scoping workshop",
      "Design system & component library",
      "Weekly demos, staging previews",
      "QA, performance budget & launch plan",
      "30 days of post-launch support",
    ],
    cta: "Start a project",
    highlight: true,
    accent: "purple",
  },
  {
    name: "Growth Partner",
    price: "$4,800",
    period: "per month · retainer",
    description:
      "Ongoing senior engineering for brands that ship every week. Experiments, features, and integrations are available on demand.",
    features: [
      "Dedicated senior engineering hours",
      "Experimentation programme management",
      "Priority support & same-week turnaround",
      "Monthly performance & CRO reporting",
      "Pause or cancel at any time",
    ],
    cta: "Become a partner",
    accent: "gold",
  },
];
