# Portfolio (Next.js)

Next.js 14 App Router + TypeScript port of the Portfolio design. No Tailwind or UI library.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Resume

Put your PDF at `public/resume.pdf`. The Resume page embeds it when it exists.

## Files

- `app/globals.css`: design tokens (light/dark), typography, page styles, keyframes, hover rules
- `app/layout.tsx`, `app/page.tsx`: shell
- `components/Portfolio.tsx`: whole site (pages via `#hash`, chat, dialogs, shortcuts, custom cursor, theme)
- `components/ui.tsx`: Button, IconButton, Kbd, Switch, Separator, Spinner, Message, NavBar, Icon
- `lib/data.ts`: all copy (roles, projects, stack, case studies, chat answers)
- `lib/icon-data.ts`: the icons used
- `lib/css.ts`: turns inline CSS strings into React style objects

Edit content in `lib/data.ts`. Edit colors in `app/globals.css`.
