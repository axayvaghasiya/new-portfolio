export type AiProject = {
  slug: string;
  title: string;
  status: string;
  tagline: string;
  description: string;
  capabilities: string[];
  stack: string[];
  accent: "green" | "purple";
};

// Placeholder entries — real product details to be filled in later.
export const aiProjects: AiProject[] = [
  {
    slug: "agentic-commerce-copilot",
    title: "Agentic Commerce Copilot",
    status: "In private beta",
    tagline: "An AI operator for your storefront",
    description:
      "An agent that connects to a Shopify store over MCP and handles the operational workload, including catalogue hygiene, inventory anomalies, order exceptions, and merchandising suggestions. Every write passes through a human approval loop.",
    capabilities: [
      "Reads store state through MCP tools, never through raw database access",
      "Flags anomalies before they cost revenue",
      "Drafts merchandising and pricing actions for approval",
      "Full audit trail of every agent decision",
    ],
    stack: ["Claude API", "MCP", "Next.js", "Shopify Admin API"],
    accent: "green",
  },
  {
    slug: "ai-readiness-platform",
    title: "AI Readiness Platform",
    status: "In development",
    tagline: "Score and prepare your commerce stack for the agentic era",
    description:
      "A diagnostic platform that audits how discoverable, structured, and machine-actionable a brand's commerce stack is. It then generates a prioritised roadmap to prepare the stack for AI shopping agents and agentic checkout.",
    capabilities: [
      "Structured-data and feed quality scoring",
      "Agentic checkout compatibility audit",
      "Catalogue semantics and API surface review",
      "Actionable roadmap ranked by revenue impact",
    ],
    stack: ["LangChain", "Deep Agents", "TypeScript", "Storefront API"],
    accent: "purple",
  },
];
