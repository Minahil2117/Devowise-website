# Devowise — Redesigned

A professional redesign of [devowise.com](https://www.devowise.com/), restyled after the
[Devsinc](https://www.devsinc.com/) experience: mega-menu navbar, single cohesive theme with a
dark/light toggler, and Framer Motion animations throughout.

All original Devowise copy is preserved verbatim (hero, stats, capabilities, tech stack,
certifications, selected work, process, engagements, about, FAQ, full directory, CTA).

## Run in VS Code (your own computer)

1. **Install prerequisites (one time)**
   - Node.js LTS (v18 or newer) from <https://nodejs.org> — this also installs `npm`.
   - VS Code from <https://code.visualstudio.com>.
   - Check install: open a terminal and run `node -v` and `npm -v`.

2. **Get the project** — download the `devowise` folder from this workspace and unzip it
   anywhere (e.g. `~/Documents/devowise`). Note: `node_modules` is not included on purpose.

3. **Open in VS Code** — `File → Open Folder…` and select the `devowise` folder.

4. **Open the integrated terminal** — `` Ctrl + ` `` (macOS: `` Cmd + ` ``) or
   `Terminal → New Terminal`. It opens inside the project folder.

5. **Install & run**

   ```bash
   npm install     # downloads dependencies (react, framer-motion, vite)
   npm run dev     # starts the dev server
   ```

6. **Open the site** — Vite prints `http://localhost:5173/`. Ctrl/Cmd-click it, or paste it
   into your browser. Edits you make in VS Code hot-reload instantly in the browser.

### Useful extras

- Production build: `npm run build`, then `npm run preview` to view the optimized build.
- Recommended VS Code extensions: *Prettier – Code formatter*, *ES7+ React/Redux Snippets*,
  *Auto Rename Tag*.
- Troubleshooting: if `npm` is "not recognized", restart the terminal after installing Node,
  or reinstall Node LTS. If port 5173 is busy, Vite picks the next free port and prints it.

## Run (quick reference)

```bash
npm install
npm run dev      # dev server on :5173
npm run build    # production build
```

## Highlights

- **Navbar with mega dropdowns** (Services / Platforms / Industries / Solutions / Resources)
  mirroring Devsinc's navigation, linking to the live devowise.com pages.
- **Dark / Light theme toggler** — one unified design system via CSS variables, persisted in
  `localStorage`, logo auto-inverts per theme.
- **Framer Motion animations** — staggered hero reveal, animated stat counters, scroll reveals,
  animated dropdowns & FAQ accordions, hover lifts, floating gradient orbs.
- **Tech-stack marquee** (two counter-scrolling rows, pause on hover).
- **Selected Work** grid with graceful gradient fallbacks if remote thumbnails fail.
- Official contact: [contactdevowise@gmail.com](mailto:contactdevowise@gmail.com) ·
  [Book a Call](https://calendly.com/nabeelfarooq1515/30min)

## Structure

```
src/
  data/content.js        # every string of Devowise content, verbatim
  components/
    Navbar.jsx           # mega-menu navbar + theme toggle + mobile menu
    Hero.jsx             # hero + animated counters + tech marquee
    Showcase.jsx         # capabilities, certifications, selected work
    Studio.jsx           # process, engagements, about, faq
    Footer.jsx           # directory, CTA, footer
    ui.jsx               # reveal/section-head/counter/icon helpers
  index.css              # full theme system (dark + light)
```
