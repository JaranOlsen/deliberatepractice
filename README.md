# Deliberate Practice Lab

Standalone Vite app split from `JaranOlsen/Planet`.

## Local Development

```sh
npm install
npm run dev
```

## Checks

```sh
npm test
npm run build
```

## Deployment

Pushing to `main` deploys the built `dist/` folder to GitHub Pages with the workflow in `.github/workflows/deploy.yml`.

The optional Supabase-backed feedback and access-code features read these repository secrets during the Vite build when they are present:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

The generated runtime data is committed. The ignored `src/md/` source texts from the original parent repository are not included here.
