# Inter IIIT Hackathon · Mission Control

A retro-futuristic Next.js control center for the Inter IIIT Hackathon. The experience fuses neon aesthetics with actionable dashboards so organisers, mentors, and participants can stay perfectly in sync.

## ✨ Highlights

- **Landing Mission Hub** – Hero dashboard with live round context, announcements, and help-desk relays.
- **Institute Directories** – Dedicated page for every participating IIIT with coordinator & SPOC profiles plus team dossiers.
- **Competitive Intelligence** – Leaderboards across three rounds, project showcases, and hackathon-wide metrics.
- **Participant Coverage** – Four flagship teams per IIIT with quick dossiers for projects and members.
- **Operational Logistics** – Registration timelines, sponsor grid, and institute dossiers with SPOC support details.
- **Responsive & Performant** – Tailwind-powered design tuned for mobile, tablet, and widescreen mission consoles.

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/) with the App Router
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) for the retro-futuristic styling system

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Lint the project
npm run lint

# Build for production
npm run build
```

> **Note:** If npm registry access is restricted in your environment, configure your proxy/registry mirrors before running `npm install`.

## 👀 Viewing the Experience

1. Ensure you have **Node.js 18 or newer** installed. The project targets the active LTS release line used by Next.js 14.
2. Install dependencies and start the dev server with `npm install && npm run dev`.
3. Open [`http://localhost:3000`](http://localhost:3000) in your browser to explore the landing mission control.
4. Navigate to the institute directory via the "All IIITs" link in the top navigation, or jump directly to a dossier such as [`http://localhost:3000/institutes/iiit-delhi`](http://localhost:3000/institutes/iiit-delhi).
5. When you're ready to ship, build a production bundle with `npm run build` and serve it using `npm run start` on your hosting platform of choice.

If you hit dependency download issues (e.g., corporate network restrictions), configure npm to use an allowed registry mirror or run the commands from an unrestricted environment.

## 📁 Project Structure

```
.
├── app
│   ├── layout.tsx           # Root layout, fonts, and global shell
│   ├── globals.css          # Tailwind layers and theme tokens
│   └── (site)
│       ├── layout.tsx       # Shared navigation + footer for content pages
│       ├── page.tsx         # Landing hub with hero + quick module links
│       ├── dashboard        # Live announcements dashboard
│       ├── hackathon        # Mission overview + hackathon metrics
│       ├── sponsors         # Sponsor grid
│       ├── all-iiits        # Institute directory (links to dossiers)
│       ├── leaderboards     # Round standings
│       ├── projects         # Project showcase highlights
│       ├── registration     # Registration timeline
│       ├── teams            # Featured squads per institute
│       └── institutes       # Dynamic `[slug]` dossier pages + redirect
├── components               # Reusable UI widgets (nav, cards, sections)
├── data                     # Structured content for institutes, leaderboards, sponsors, etc.
├── public                   # Static assets (add institute logos here if available)
└── tailwind.config.ts       # Tailwind theme with neon palette extensions
```

## 📣 Content Updates

All institute and hackathon data lives inside the `data/` folder. Update these TypeScript files to tweak coordinators, SPOCs, teams, or scheduling windows. Every change automatically cascades across the dashboard and institute pages.

## 🧪 Testing

Run `npm run lint` to ensure code quality. Add integration or component tests as required for your deployment pipeline.
