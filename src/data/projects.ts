export type ProjectResult = { value: string; label: string };

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  summary: string;
  problem: string;
  solution: string;
  results: ProjectResult[];
  stack: string[];
  accent: "green" | "purple" | "gold";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "enterprise-b2b-replatform",
    title: "Enterprise B2B Replatform",
    category: "B2B Commerce",
    year: "2024",
    client: "US wholesale distributor · $40M GMV",
    summary:
      "Migrated a 15-year-old ERP-driven wholesale operation to Shopify Plus B2B, covering company accounts, net terms, contract pricing, and 40,000 SKUs, with zero order downtime.",
    problem:
      "Sales representatives keyed orders by phone and fax into a legacy ERP. Catalogue updates took days, pricing lived in spreadsheets, and the business could not onboard new dealers without adding headcount.",
    solution:
      "Designed a phased migration to Shopify Plus B2B. The build included company accounts with location-level pricing, a custom quick-order pad for repeat buyers, real-time ERP synchronisation over a middleware layer I built on Node.js and BullMQ, and a sales dashboard for quote-to-order conversion.",
    results: [
      { value: "68%", label: "faster order entry" },
      { value: "99.98%", label: "sync uptime" },
      { value: "0", label: "orders lost in cutover" },
      { value: "3×", label: "dealer onboarding speed" },
    ],
    stack: ["Shopify Plus B2B", "Node.js", "BullMQ", "PostgreSQL", "GraphQL Admin API"],
    accent: "green",
    featured: true,
  },
  {
    slug: "d2c-performance-overhaul",
    title: "D2C Performance Overhaul",
    category: "Headless / Performance",
    year: "2023",
    client: "EU beauty brand · 8-figure revenue",
    summary:
      "Rebuilt a bloated multi-app theme into a lean Hydrogen storefront. Largest Contentful Paint fell from 4.2s to 1.1s, and conversion followed the improvement in speed.",
    problem:
      "Six years of app installations left the theme shipping 2.8MB of JavaScript. Mobile LCP sat at 4.2s, the bounce rate was climbing, and every CRO test was fighting the platform rather than the customer.",
    solution:
      "Replatformed to Hydrogen and Oxygen with a design-token component system, edge-cached product data, third-party scripts deferred behind consent, and image pipelines tuned per breakpoint. Checkout remained native to preserve Shop Pay conversion.",
    results: [
      { value: "1.1s", label: "mobile LCP (from 4.2s)" },
      { value: "+34%", label: "conversion rate" },
      { value: "+28%", label: "revenue per session" },
      { value: "98", label: "Lighthouse performance" },
    ],
    stack: ["Hydrogen", "Remix", "Oxygen", "Tailwind CSS", "Storefront API"],
    accent: "purple",
    featured: true,
  },
  {
    slug: "unified-commerce-ops",
    title: "Unified CRM · OMS · IMS Platform",
    category: "Commerce Operations",
    year: "2024",
    client: "IN omnichannel retailer · 6 warehouses",
    summary:
      "Replaced five disconnected tools with a single custom operations platform. Customers, orders, and inventory now sit in one real-time system of record.",
    problem:
      "Orders flowed through Shopify, a marketplace panel, WhatsApp, and two spreadsheets. Stock counts were wrong daily, the support team could not see order history, and month-end reconciliation took a full week.",
    solution:
      "Built a unified platform on Next.js and PostgreSQL. It provides event-driven order ingestion from every channel, warehouse-aware inventory with reservation logic, a support console with full customer timelines, and finance exports that reconcile themselves.",
    results: [
      { value: "5→1", label: "tools consolidated" },
      { value: "22h", label: "saved per week" },
      { value: "−91%", label: "inventory errors" },
      { value: "4d", label: "faster month-end close" },
    ],
    stack: ["Next.js", "PostgreSQL", "Redis", "tRPC", "Shopify Webhooks"],
    accent: "gold",
    featured: true,
  },
  {
    slug: "subscription-commerce-engine",
    title: "Subscription Commerce Engine",
    category: "Retention / LTV",
    year: "2022",
    client: "US wellness brand · 40k subscribers",
    summary:
      "Designed a subscription experience that customers manage themselves, including swaps, skips, and gifting. The result lifted lifetime value without a reliance on discounting.",
    problem:
      "Churn was hidden inside a rigid subscription app. Customers cancelled because they could not skip a month or swap flavours, and the support team spent hours making these changes manually.",
    solution:
      "Built a custom customer portal on the Subscription Contracts API. It offers one-tap skip, swap, and pause, dunning flows that recover failed payments gracefully, and lifecycle email triggers wired to genuine contract events.",
    results: [
      { value: "+41%", label: "subscriber LTV" },
      { value: "−27%", label: "voluntary churn" },
      { value: "63%", label: "failed payments recovered" },
      { value: "−80%", label: "subscription tickets" },
    ],
    stack: ["Shopify Functions", "Subscription Contracts API", "React", "Klaviyo API"],
    accent: "green",
  },
  {
    slug: "global-markets-expansion",
    title: "Global Markets Expansion",
    category: "Internationalisation",
    year: "2023",
    client: "UK apparel brand → 12 markets",
    summary:
      "Took a single-market UK store global across 12 markets and 9 currencies, with localised catalogues and duties, and without forking the codebase.",
    problem:
      "International customers converted at a third of the UK rate. Prices displayed in GBP, duties surprised buyers on delivery, and translated content lived in a fragile third-party app.",
    solution:
      "Rolled out Shopify Markets with market-specific pricing and catalogues, native content translation workflows, duties collected at checkout, and localised payment methods per region. Market-level analytics were automated throughout.",
    results: [
      { value: "12", label: "markets live" },
      { value: "+57%", label: "international revenue" },
      { value: "2.4×", label: "intl. conversion rate" },
      { value: "−90%", label: "duty-related refunds" },
    ],
    stack: ["Shopify Markets", "Markets Pro", "Liquid", "GeoIP", "Translate & Adapt"],
    accent: "purple",
  },
  {
    slug: "checkout-cro-program",
    title: "Checkout & CRO Programme",
    category: "Conversion Optimisation",
    year: "2025",
    client: "AU electronics retailer",
    summary:
      "A nine-month experimentation programme across the product page, cart, and checkout. Every change shipped behind a test, and every win compounded.",
    problem:
      "Traffic was expensive and growing, yet checkout completion had flatlined. The team shipped redesigns on instinct and could not say which changes made money.",
    solution:
      "Established a testing pipeline with server-side experiments, checkout UI extensions for trust signalling and delivery clarity, one-page checkout optimisation, and a metrics layer tying every variant to contribution margin rather than clicks alone.",
    results: [
      { value: "+19%", label: "checkout completion" },
      { value: "+11%", label: "AOV via smart upsells" },
      { value: "38", label: "experiments shipped" },
      { value: "5.2×", label: "programme ROI" },
    ],
    stack: ["Checkout UI Extensions", "Shopify Functions", "GrowthBook", "BigQuery"],
    accent: "gold",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
