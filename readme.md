## Agency Portfolio — Build Success Cooperation

A modern, responsive portfolio for a development agency. Built with React, Vite, Tailwind CSS, and Framer Motion, and deployed on Netlify with serverless functions to fetch GitHub contributions.

### Table of Contents

1. [Tech Stack](#tech-stack)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Environment Variables](#environment-variables)
6. [Development](#development)
7. [Build](#build)
8. [Deployment (Netlify)](#deployment-netlify)
9. [Customization](#customization)
10. [Contributing](#contributing)

## Tech Stack

- **Framework**: React 18 + Vite 3
- **Styling**: Tailwind CSS (JIT), custom theme in `tailwind.config.cjs`
- **Animation**: Framer Motion
- **Icons**: React Icons
- **Lottie**: react-lottie-player
- **HTTP**: Axios
- **Utilities**: smoothscroll-polyfill
- **Serverless**: Netlify Functions (`netlify/functions`)

## Features

- **Hero, About, Services**: `Navbar`, `Hero`, `AboutUs`, `RemoteProviders`, `Opportunity`, `WatchAbility`, `Footer`
- **Loading Transition**: Animated skeleton/loader with `AnimatePresence`
- **Config-Driven Content**: All data comes from `src/constants/index.js` (about, nav, projects, achievements, experience, blogs, stats, socials)
- **Open Source Contributions**: Netlify function hits GitHub GraphQL API to fetch PRs across selected repos
- **Responsive Design**: Tailwind breakpoints configured (`xs` → `xl`)

## Project Structure

- `src/App.jsx`: Composes sections and page transitions
- `src/components/`: Reusable UI sections and layout
- `src/constants/index.js`: Central content and configuration
- `src/assets/` + `src/assets/index.js`: Images and exports
- `netlify/functions/fetchContributions.js`: Serverless function for GitHub PRs
- `tailwind.config.cjs`: Theme, colors, fonts, screens
- `vite.config.js`: Dev server config
- `netlify.toml`: Build + redirects (`/api/*` → `/.netlify/functions/:splat`)

## Getting Started

```bash
npm install
npm run dev
```

- App runs by default on `http://localhost:5173/`.
- If accessing from LAN, dev server is configured to listen on host; adjust `vite.config.js` HMR host as needed.

## Environment Variables

- The Open Source Contributions feature requires a GitHub Personal Access Token (classic) with `repo:status`, `public_repo`, `read:org`, `read:project` scopes.
- Create `.env` in the project root and set:

```bash
VITE_GH_TOKEN=YOUR_GITHUB_TOKEN
```

Used by `netlify/functions/fetchContributions.js` to authorize GitHub GraphQL requests.

## Development

- Entry: `index.html` (title and favicon)
  - Title is set to “Build Success Cooperation”
  - Favicon: `/src/assets/parth.svg` (change as needed)
- App bootstrap: `src/main.jsx`
- Smooth scrolling enabled via `smoothscroll-polyfill`

## Build

```bash
npm run build
npm run preview
```

- Output goes to `dist/` (as configured in `netlify.toml`).

## Deployment (Netlify)

- Netlify config (`netlify.toml`):
  - `publish = "dist"`
  - `functions = "netlify/functions"`
  - `command = "npm run build"`
  - Redirects: `/api/*` → `/.netlify/functions/:splat`
- In Netlify UI, add the environment variable `VITE_GH_TOKEN`.
- Optional local testing with Netlify CLI:

```bash
npx netlify dev --yes
```

This will proxy function routes and run the Vite dev server.

## Customization

- **Content**: Edit `src/constants/index.js` (e.g., `aboutMe`, `navLinks`, `projects`, `experiences`, `achievements`, `blogPosts`, `stats`, `socialMedia`).
- **Assets**: Place images in `src/assets/` and export them via `src/assets/index.js`.
- **Branding**: Update title and favicon in `index.html`.
- **Theme**: Modify colors, fonts, and breakpoints in `tailwind.config.cjs`.

## Contributing

PRs and issues are welcome. Please follow conventional commit messages where possible and ensure the app builds locally before submitting.
