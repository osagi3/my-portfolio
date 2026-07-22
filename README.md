# Personal Portfolio

A personal portfolio site built with Next.js, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## What to edit

Everything is placeholder content — search for "Your Name" / "your-username" / "you@example.com" and swap in your own details.

- **Name, title, bio, social links** — [app/components/Navbar.tsx](app/components/Navbar.tsx), [app/components/Hero.tsx](app/components/Hero.tsx), [app/components/About.tsx](app/components/About.tsx), [app/components/Contact.tsx](app/components/Contact.tsx)
- **Skills** — the `skillGroups` array in [app/components/Skills.tsx](app/components/Skills.tsx)
- **Projects** — the `projects` array at the top of [app/components/Projects.tsx](app/components/Projects.tsx). Add/remove entries; each becomes a card. Optionally set `image` to a path in `public/` for a preview thumbnail.
- **Resume** — drop a `resume.pdf` into `public/` (the Hero download link already points at `/resume.pdf`).
- **Page title/description** — [app/layout.tsx](app/layout.tsx)

## Deploy

The easiest way to deploy is [Vercel](https://vercel.com/new).
