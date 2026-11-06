# Her Legacy Agric

Responsive marketing website for Her Legacy Agric, built with React, TypeScript, and Vite.

## Project structure

```text
public/
  favicon.png
  her-legacy-logo.png
src/
  App.tsx       Page content, navigation, and form interactions
  main.tsx      React entry point
  styles.css    Brand tokens, layout, and responsive styles
index.html      SEO and social metadata
```

The site includes Home, About, What We Grow and Make, Our Roadmap, Invest and
Partner, and Contact pages. Contact details and the WhatsApp number remain
placeholders. Both forms currently validate in the browser only; they do not
send or store submissions. Connect a backend or form provider before launch.

## Run locally

```bash
npm install
npm run dev
```

For a production build, run `npm run build`; preview it locally with `npm run preview`.

## Deploy

1. Run `npm run build`.
2. Deploy the generated `dist/` directory to a static host.
3. Configure the host to serve `index.html` for the site routes (`/about`,
   `/what-we-grow-and-make`, `/our-roadmap`, `/invest-and-partner`, and
   `/contact`) so direct links and refreshes work.
4. Before launch, replace the contact and WhatsApp placeholders and connect
   both forms to a submission service. Set the production domain and verify
   Open Graph metadata and image previews on that domain.

For example, Vercel and Netlify can host the Vite build as a static site; add
an SPA rewrite/fallback to `index.html` in the host's configuration.
