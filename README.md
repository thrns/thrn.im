# Portfolio (Next.js)

Next.js 14 App Router + TypeScript port of the Portfolio design. Every section is its own route. No Tailwind or UI library.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000. Build with `npm run build && npm start`.

Put your resume PDF at `public/resume.pdf`.

## Routes

- `/` Home
- `/work`
- `/projects`
- `/case-studies`
- `/case-studies/[slug]`: berribot, hyr, pocketlink, rkgt, tekkscope, thirdslate, tracebox
- `/stack`
- `/resume`

## Structure

```
app/
  layout.tsx                    root layout, mounts AppShell
  globals.css                   tokens, typography, page styles, keyframes
  page.tsx, work/, projects/, case-studies/, case-studies/[slug]/, stack/, resume/
components/
  layout/
    AppShell.tsx                persistent frame (header, chat, dialogs, cursor)
    ChromeContext.tsx           shared UI state: theme, chat, dialogs, cursor prefs, shortcuts
    Header.tsx, CursorPanel.tsx, ChatPanel.tsx, Dialogs.tsx, Modal.tsx
    PageMain.tsx, Footer.tsx    <main> + footer used by every page
  common/
    PageHeading.tsx             title, intro, "sorted" note, PageSection
    DataTable.tsx               ruled table, rows, row link
    StatusPill.tsx, Tag.tsx (Tag, KeyCap), TextLink.tsx
  pages/                        HomePage, WorkPage, ProjectsPage, CaseStudiesPage, StackPage, ResumePage
  case-studies/                 article content per study + registry.ts
  CaseStudy.tsx                 case-study shell (rail, reveal, Mermaid, 1-5 keys)
  ui.tsx                        Button, IconButton, Kbd, Switch, Separator, Spinner, Message, NavBar, Icon
hooks/
  useCustomCursor.ts, useScrollRail.ts
lib/
  data.ts                       site copy (roles, projects, stack, cases, chat answers)
  chrome.ts                     nav paths, shortcuts, cursor options, helpers
  case-studies/                 diagram sources, section lists, page CSS
  icon-data.ts, css.ts
```

Edit content in `lib/data.ts`. Edit colors in `app/globals.css`.
Keyboard: H W P T S R go to a page, ? shows all shortcuts.
