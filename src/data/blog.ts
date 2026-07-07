export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tag: string;
  accent: "green" | "purple" | "gold";
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "agentic-commerce-is-coming-for-your-checkout",
    title: "Agentic commerce is coming for your checkout",
    excerpt:
      "AI shopping agents do not scroll, do not feel urgency, and pay no attention to your hero banner. This article explains how to make your store legible to the buyers that are software.",
    date: "2026-06-12",
    readingTime: "7 min read",
    tag: "AI Commerce",
    accent: "green",
    content: `The next customer to arrive at your store might not have eyes. It will be an agent, a piece of software sent by a human to find the best oat milk, the correct size of hiking boot, or a replacement part for a five-year-old appliance. It will read your catalogue the way a compiler reads code: literally, structurally, and without patience for ambiguity.

## Agents do not convert like humans

Everything we have learned about conversion optimisation assumes a human on the other side. Social proof, urgency timers, and lifestyle photography leave an agent unmoved. What an agent evaluates is machine-legible truth, namely structured product data, accurate availability, transparent pricing that includes shipping and duties, and an API surface it can transact against.

If your best-selling product's size chart lives inside a JPEG, an agent cannot read it. If your shipping cost appears only after three checkout steps, an agent may score you as "price unknown" and move on. The brands that win agentic traffic will be those whose stores are as clear to machines as they are to people.

## The new ranking factors

In an agentic session, there is no scroll depth, no session duration, and no retargeting pixel. There is a query, a set of candidate products, and a decision. The factors that matter are these:

- Structured data completeness: schema.org markup, product feeds, and metafields that genuinely describe the product
- Price transparency, with the landed cost visible without ceremony
- Inventory truthfulness, because agents remember being misled about stock
- Checkout compatibility, meaning whether a delegated agent can complete a purchase with the protocols your platform supports
- Policy clarity, with returns and warranties in parseable text rather than a scanned PDF

## What to do this quarter

You do not need to rebuild your stack. Start with an audit. Crawl your own store with the metadata reduced to what an agent sees, and score every product page for machine legibility. Fix the feeds first, as they are the least expensive wins. Then turn to your checkout. Agentic checkout protocols are arriving across the ecosystem, and platforms such as Shopify are already positioning for delegated purchasing.

The uncomfortable truth is that agentic commerce compresses differentiation. When a machine strips away your brand storytelling, what remains is product, price, availability, and trust. Ensure that those four things are impeccable, and machine-readable, before your competitors manage it.`,
  },
  {
    slug: "core-web-vitals-shopify-what-moves-the-needle",
    title: "Core Web Vitals on Shopify: what genuinely moves the needle",
    excerpt:
      "After remediating dozens of storefronts, the pattern is clear. Three fixes deliver roughly 80% of the gain, and none of them involves installing a speed app.",
    date: "2026-04-03",
    readingTime: "9 min read",
    tag: "Performance",
    accent: "purple",
    content: `Every slow Shopify store I have audited believed its problem was unique. It never was. After years of performance remediation across themes, apps, and headless builds, the same three culprits appear in nearly every waterfall, and addressing them delivers most of the win.

## 1. The app tax

The average established store runs more than 20 apps, and most inject JavaScript into every page whether it is used there or not. A review widget loads on your policy pages. A quiz app loads in your checkout. Each one is a render-blocking tax on every session.

The fix is unglamorous and effective. Audit every script tag, map it to genuine revenue, and remove or defer everything that cannot justify itself. On one eight-figure beauty brand, this alone reduced the JavaScript payload from 2.8MB to 900KB. There was no redesign and no replatform, only subtraction.

## 2. Images that fight the layout

LCP on commerce sites is almost always a product or hero image. The failures are predictable: images served at twice the rendered size, no priority hints on the LCP element, carousels that lazy-load the first slide, and layout shift from containers without aspect ratios.

Shopify's image CDN is excellent, yet most themes do not use it well. Serve the exact rendered size per breakpoint, preload the LCP image, set explicit dimensions everywhere, and never lazy-load above the fold.

## 3. Fonts and the flash of nothing

Custom fonts loaded from third-party origins block text paint. Self-host through Shopify's CDN, or use next/font on headless builds, subset aggressively, and apply font-display: swap with metric-compatible fallbacks so that the swap does not shift the layout.

## Treat speed as a revenue metric

The reason performance work stalls is not technical but organisational. Nobody owns the milliseconds. The programmes that succeed set a performance budget (170KB of JavaScript on the critical path is a sensible start), enforce it in CI, and report speed alongside revenue in the same dashboard. When LCP appears beside conversion rate, it stops being an engineering vanity metric and becomes what it always was, which is money.`,
  },
  {
    slug: "b2b-on-shopify-plus-lessons-from-a-40m-migration",
    title: "B2B on Shopify Plus: lessons from a $40M migration",
    excerpt:
      "Wholesale buyers do not want a consumer storefront with a login wall. These are field notes from moving a fax-and-phone distributor onto Shopify Plus B2B.",
    date: "2026-02-18",
    readingTime: "8 min read",
    tag: "B2B",
    accent: "gold",
    content: `Last year I moved a $40M wholesale distributor from a 15-year-old ERP-driven workflow of phone orders, faxed purchase orders, and emailed spreadsheets onto Shopify Plus B2B. Nothing about it resembled a D2C build. Here is what I would tell anyone starting a similar migration.

## B2B buyers optimise for speed, not discovery

A dealer ordering the same 60 SKUs every month does not want your mega-menu. They want a quick-order pad: paste the SKUs, see the contract prices, and submit. We built exactly that, and it became the single most-used page on the store, some 68% faster than the phone workflow it replaced.

Browsing and discovery still matter for new product lines, but the core flow should be designed around repeat purchasing. Your best B2B customers should be able to reorder in under a minute.

## Pricing is the real migration

The storefront was the straightforward part. The difficult part was fifteen years of pricing logic: customer-specific contracts, volume breaks, regional lists, and handshake deals living in a sales representative's memory. Budget more time for pricing archaeology than for development. We spent six weeks simply reconciling what customers were genuinely paying against what the ERP said they should pay, and found six figures of margin leakage in the process.

## The ERP will not meet you halfway

Legacy ERPs speak in nightly batch files, not webhooks. We built a middleware layer on Node.js, BullMQ, and PostgreSQL that translated between Shopify's real-time events and the ERP's batch world, with idempotent writes and a reconciliation loop that catches drift before the finance team does. That layer ran at 99.98% uptime and, critically, lost no orders during the cutover.

## Cut over in phases, and keep the fax machine on

We ran both systems in parallel for eight weeks, moving dealers across in cohorts and starting with the friendliest accounts. The fax machine stayed plugged in until the final cohort had migrated. No one's fourth quarter is worth a big-bang cutover.

The result was order entry 68% faster, dealer onboarding three times quicker, and sales representatives working on account growth instead of data entry. B2B commerce is not glamorous; it is simply where the money is.`,
  },
  {
    slug: "mcp-for-commerce-engineers",
    title: "MCP for commerce engineers: connecting AI to your stack safely",
    excerpt:
      "The Model Context Protocol is becoming the universal connector for AI-to-commerce integration. Here is how to expose your store to agents without handing them the keys.",
    date: "2026-05-21",
    readingTime: "6 min read",
    tag: "AI Engineering",
    accent: "green",
    content: `Every commerce AI demo starts the same way: someone pastes an API key into a prompt and hopes. That is not architecture; it is a liability. The Model Context Protocol (MCP) offers a genuine answer, namely a standard way to expose tools, data, and actions to AI models with the same rigour we would apply to any API surface.

## Why MCP instead of raw API access

Give a model your Admin API token and you have granted it everything the token can do, permanently, with no audit trail to distinguish the agent's actions from your own. An MCP server inverts this. You define exactly which operations exist, what their inputs look like, and what they return. The model sees capabilities, not credentials.

For commerce, that distinction is everything. "Read product catalogue" and "issue refund" should not sit behind the same permission.

## Design tools around intents, not endpoints

The mistake I see in early commerce MCP servers is mirroring the platform API one to one, as a thin wrapper over every REST endpoint. Models work far better with intent-level tools such as get_slow_moving_inventory, draft_price_change, and summarise_customer_history. The result is fewer tools with richer semantics, each one mapping to something a merchandiser would genuinely ask for.

## Writes need approval loops

My rule for production agents is simple: reads are free, and writes are drafts. An agent can read anything its tools expose, but every mutation, whether a price change, an inventory adjustment, or a customer refund, lands in an approval queue with the agent's reasoning attached. A human approves it. The agent receives feedback. Over time you loosen the loop for action types with a proven record, with spend and blast-radius limits enforced in the server rather than the prompt.

## Start with the unglamorous wins

The highest-return agent work in commerce at present is not a chatbot on your storefront. It is operations: catalogue hygiene, anomaly detection on inventory and pricing, order exception triage, and report drafting. This work is repetitive, high in volume, and low in risk, which makes it ideal agent territory. Expose those capabilities over MCP, add an approval loop, and you will save genuine hours while your competitors are still debating chat widgets.`,
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
