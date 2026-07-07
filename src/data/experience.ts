export type Milestone = {
  year: string;
  title: string;
  description: string;
  tags: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  year: string;
};

export const milestones: Milestone[] = [
  {
    year: "2018",
    title: "First line of commerce code",
    description:
      "Started as a full stack developer, building custom Shopify themes and apps for local D2C brands. I learned early that speed, clarity, and checkout trust decide who gets paid.",
    tags: ["Shopify", "Liquid", "JavaScript"],
  },
  {
    year: "2020",
    title: "Enterprise builds and the first 100 brands",
    description:
      "Crossed 100 shipped storefronts and delivered my first Shopify Plus migration. I moved from themes into systems: ERP integrations, middleware, and the data pipelines that keep commerce honest.",
    tags: ["Shopify Plus", "Node.js", "ERP Integration"],
  },
  {
    year: "2022",
    title: "Shopify Select Partner",
    description:
      "Recognised in Shopify's Select partner tier. I specialised in B2B commerce, headless builds, and performance engineering for brands turning over seven to nine figures.",
    tags: ["Select Partner", "B2B", "Headless"],
  },
  {
    year: "2024",
    title: "300+ brands, 12 markets",
    description:
      "The portfolio crossed 300 brands across 12 international markets. I built unified CRM, OMS, and IMS platforms and led global expansion programmes from end to end.",
    tags: ["Internationalisation", "Commerce Ops", "CRO"],
  },
  {
    year: "2026",
    title: "Agentic Commerce & AI Readiness Advisor",
    description:
      "Now helping brands prepare for AI-driven shopping: agentic checkout, MCP-connected storefronts, and two AI products in active development. Google-certified AI professional.",
    tags: ["AI Agents", "MCP", "Agentic Checkout"],
  },
];

export const certifications: Certification[] = [
  {
    title: "Professional AI Certification",
    issuer: "Google",
    year: "2025",
  },
  {
    title: "Model Context Protocol (MCP)",
    issuer: "Anthropic",
    year: "2025",
  },
  {
    title: "Deep Agents with LangGraph",
    issuer: "LangChain",
    year: "2025",
  },
];
