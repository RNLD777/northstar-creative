# Northstar Creative

A concept website for an independent creative agency. Built with Next.js, TypeScript, CSS and Framer Motion. This is a fictional portfolio project, not a real agency or commissioned client website.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run typecheck
npm run build
```

The production site is exported to `out/` as a static website.

## Deploy to Cloudflare Pages

1. Push this repository to GitHub.
2. In Cloudflare, open **Workers & Pages → Create application → Pages → Connect to Git**.
3. Select this repository.
4. Use these build settings:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
5. Deploy.

Cloudflare's current guide: https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/

## Before presenting as a live agency

Replace the fictional project case studies, contact details and claims with real, permissioned work. The enquiry form currently opens the visitor's email client; connect a form service or API if you need submissions stored centrally.
