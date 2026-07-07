export const site = {
  name: "Akshay Vaghasiya",
  firstName: "Akshay",
  lastName: "Vaghasiya",
  role: "Full Stack Commerce Engineer",
  subRole: "Freelance eCommerce Consultant · Shopify Select Partner",
  intro:
    "I architect, build, and scale commerce systems for ambitious brands. My work spans enterprise B2B replatforms through to AI-powered storefronts that continue to sell around the clock.",
  email: "info@akshayvaghasiya.com",
  location: "London & India · working with brands worldwide",
  availability: "Available for work",
  url: "https://akshayvaghasiya.com",
} as const;

// WhatsApp click-to-chat. Free, no third-party service or branding — it deep
// links straight into WhatsApp with a pre-filled message.
export const whatsapp = {
  // Replace with your full international number, DIGITS ONLY.
  // No +, spaces, dashes or brackets. Include the country code.
  //   UK  +44 7911 123456  ->  "447911123456"
  //   IN  +91 98765 43210  ->  "919876543210"
  number: "919999999999",
  // Pre-filled first message the visitor can edit before sending.
  message:
    "Hi Akshay, I found your portfolio and would like to discuss a project.",
} as const;

export const nav = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/axayvaghasiya" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/akshayvaghasiya/" },
  {
    label: "Shopify Partner",
    href: "https://www.shopify.com/partners/directory/partner/nipunyax",
  },
] as const;

// Public storefronts shipped for real clients — each link is live and
// verifiable. Screenshots captured from the production sites (in /public/work).
// Enterprise case-study clients remain under NDA.
export const clientBrands = [
  {
    name: "MAKANI",
    href: "https://makani-germany.de/",
    domain: "makani-germany.de",
    image: "/work/makani.jpg",
  },
  {
    name: "BAHÉ",
    href: "https://bahe.co/",
    domain: "bahe.co",
    image: "/work/bahe.jpg",
  },
  {
    name: "ONWARD",
    href: "https://drinkonward.com/",
    domain: "drinkonward.com",
    image: "/work/onward.jpg",
  },
  {
    name: "FOCL",
    href: "https://focl.com/",
    domain: "focl.com",
    image: "/work/focl.jpg",
  },
  {
    name: "SUNNY WITHIN",
    href: "https://sunnywithin.com/",
    domain: "sunnywithin.com",
    image: "/work/sunny-within.jpg",
  },
  {
    name: "TAN & LOOM",
    href: "https://www.tanandloom.com/",
    domain: "tanandloom.com",
    image: "/work/tan-and-loom.jpg",
  },
] as const;

export const heroStats = [
  { value: 300, suffix: "+", label: "Brands shipped" },
  { value: 8, suffix: "+", label: "Years engineering" },
  { value: 12, suffix: "", label: "Global markets" },
  { value: 2, suffix: "", label: "AI products" },
] as const;

export const legalLinks = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms & Conditions", href: "/legal/terms" },
  { label: "Refund Policy", href: "/legal/refund-policy" },
] as const;
