# akshayvaghasiya.com

Personal portfolio and marketing site for **Akshay Vaghasiya** — Full Stack Commerce Engineer & Freelance eCommerce Consultant, Shopify Select Partner.

Live at [akshayvaghasiya.com](https://akshayvaghasiya.com).

## Tech stack

- [Next.js 15](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [GSAP](https://gsap.com) + [Lenis](https://lenis.darkroom.engineering) for scroll/motion
- [Three.js](https://threejs.org) for the hero canvas
- [Resend](https://resend.com) for transactional email (contact form)
- [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) for bot verification
- [Tawk.to](https://www.tawk.to) for live chat

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Environment variables

Copy `.env.local` (gitignored, not committed) and fill in:

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | sends contact form submissions via Resend |
| `CONTACT_FROM_EMAIL` | verified sender address for outgoing contact emails |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile widget (client-side) |
| `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile verification (server-side) |

The contact form works without the Turnstile keys (honeypot, rate limiting, and a fill-time check still apply) but skips the CAPTCHA-style verification step until they're set.

## Project structure

```
src/
├── app/            # routes (About, Projects, Services, Pricing, Blog, Contact, Legal) + API routes
├── components/      # layout, sections, ui, canvas, and graphics components
├── data/            # static content (projects, blog posts, etc.)
└── lib/             # site config, contact form constants, rate limiter, utilities
```

## Scripts

```bash
npm run dev      # start dev server (Turbopack)
npm run build     # production build
npm run start     # run the production build
npm run lint      # lint the project
```

## Deployment

Deployed on [Vercel](https://vercel.com). Pushing to `main` triggers a production deploy; make sure the environment variables above are set in the Vercel project settings first.

## License

© 2026 Akshay Vaghasiya ([akshayvaghasiya.com](https://akshayvaghasiya.com)). All rights reserved.
