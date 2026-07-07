// Shared between the client form (ContactForm.tsx) and the server handler
// (api/contact/route.ts) so both sides agree on what's an acceptable submission.

export const budgetOptions = [
  "Under $3,000",
  "$3,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000+",
  "Monthly retainer",
] as const;

export const contactFieldLimits = {
  name: 100,
  email: 254,
  company: 150,
  message: 5000,
} as const;

// Real visitors take at least a couple of seconds to read the form and type
// something; bots that submit immediately on page load get silently dropped.
export const MIN_FILL_TIME_MS = 2000;
