# Victryena

Marketing site for Victryena, a certified personal trainer and online coach. The homepage is a single-page landing with gender-affirming training info, packages, testimonials, and a waitlist signup.

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Description |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

## Project structure

```
app/                 # App Router layout, homepage, global styles
components/
  layout/            # Header, footer, nav, site shell
  sections/          # Homepage sections
  pricing/           # Package cards, discounts, in-person rates
  ui/                # Shared buttons, lists, layout helpers
lib/content.ts       # Copy, pricing, nav, social links, CTAs
```

Most site copy lives in `lib/content.ts` (headlines, packages, testimonials, contact details, waitlist form URL). The homepage composition is in `app/page.tsx`.

## Deploy

The usual path is [Vercel](https://vercel.com/new). See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other hosts.
