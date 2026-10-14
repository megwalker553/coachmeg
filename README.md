# Coach Meg Walker

A responsive personal brand website foundation for Coach Meg Walker, Rodeo Performance Coach. Built with Next.js App Router, TypeScript, and Tailwind CSS. Content is intentionally provisional: credentials, testimonials, program details, and contact information must be supplied and approved before publication.

## Development

Use Node.js 24 LTS and npm 11.

```sh
npm ci
npm run dev -- --hostname 0.0.0.0
```

Open http://localhost:3000 in your browser. In a cloud editor, forward port 3000 through its Ports panel to preview. Edit `src/app/page.tsx` to update the homepage; global styles and theme colors live in `src/app/globals.css`.

## Validation and production

```sh
npm run lint
npm run typecheck
npm run build
npm start -- --hostname 0.0.0.0
```

The production server uses port 3000 by default. No credentials, database, external fonts, or image service are required.

## Structure

- `src/app/layout.tsx`: root layout, language, and site metadata.
- `src/app/page.tsx`: homepage with philosophy, background, athlete stories, and future coaching sections.
- `src/app/globals.css`: Tailwind import, responsive theme, and decorative landscape.
- `public/`: static assets.

The homepage uses working in-page navigation and has no unimplemented contact forms or booking actions. Add approved copy and additional routes in future work.
