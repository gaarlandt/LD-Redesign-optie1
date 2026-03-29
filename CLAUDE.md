# Let's Dog — Marketing Website

## Project Overview
Marketing website for Let's Dog, a puppy training platform. Built as a static Next.js site deployed on Firebase Hosting.

## Tech Stack
- **Framework**: Next.js 16 (static export via `output: "export"`)
- **React**: 19
- **Styling**: Tailwind CSS v4 (utility-first, no CSS modules)
- **Animations**: Framer Motion
- **Icons**: Lucide React + inline SVGs (WhatsApp, TikTok)
- **Fonts**: National2 (headings, local OTF), DM Sans (body, Google Fonts)
- **Deployment**: Firebase Hosting (project: `website-f396e`)

## Key Commands
```bash
npm run dev       # Start dev server (Turbopack, port 3000)
npm run build     # Static export to ./out
npm run lint      # ESLint
```

## Dev Server / Preview
Use `preview_start("letsdog-website")` to start the dev server via the preview tool. The launch.json config is at `.claude/launch.json`.

The preview sandbox requires Node v20 (not v24) — the launch.json uses the absolute path `/Users/jurriaan/.nvm/versions/node/v20.19.5/bin/node`. If Node versions change, update this path.

**Always verify changes visually** after modifying UI components — use the preview verification workflow (snapshot, inspect, screenshot).

## Project Structure
```
.
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (navbar, footer, WhatsApp button)
│   ├── page.tsx            # Homepage
│   ├── contact/            # Contact page
│   ├── hondenkeuze/        # Breed selector quiz (iframe to keuzehulp.letsdog.nl)
│   ├── over-ons/           # About page
│   ├── prijzen/            # Pricing page
│   ├── puppyagenda/        # Puppy agenda page
│   └── veelgestelde-vragen/ # FAQ page
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Homepage sections (hero, problem, hope, etc.)
│   └── shared/             # Reusable (WhatsApp button, reveal, section-wrapper)
├── lib/utils.ts            # Asset path helper
├── public/                 # Static assets (images, fonts)
├── docs/                   # Documentation & brand images
├── firebase.json           # Firebase Hosting config
├── .firebaserc             # Firebase project alias
└── .github/workflows/      # CI/CD
    ├── deploy-production.yml  # Push to main → Firebase live
    └── deploy-staging.yml     # Push to branch → Firebase preview channel
```

## Styling Conventions
- **Colors**: Brand green `#75876D`, Beige `#EFE8E4`, Black `#141414`, Peach `#FFA580`, Dark green `#162A0E`
- **Approach**: Inline Tailwind classes, no CSS modules or external stylesheets
- **Responsive**: Mobile-first, `md:` and `lg:` breakpoints
- **Nav hover**: Brand green underline animates on hover via `after:` pseudo-element

## Navigation Order
```
Over ons | Hondenkeuze | Puppyagenda | Prijzen | FAQ | Contact
```
Defined in `components/layout/navbar.tsx` (desktop + mobile) and `components/layout/footer.tsx`.

## Deployment
- **Production**: Push to `main` → auto-deploys to Firebase live
- **Staging**: Push to any other branch → creates temporary Firebase preview URL (expires in 7 days)
- **Secret required**: `FIREBASE_SERVICE_ACCOUNT` in GitHub repo settings

## Feature Development Workflow
Use the `/new-feature` skill for all new features. This handles branch creation, implementation, and PR workflow.

## Important Notes
- Static export: no server-side features (no API routes, no SSR)
- Images are unoptimized (required for static export)
- The `asset()` helper in `lib/utils.ts` prepends the base path to image URLs
- Hondenkeuze page embeds an iframe from `keuzehulp.letsdog.nl`
