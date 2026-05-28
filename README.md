# Deliberate Practice Lab

Standalone Vite app split from `JaranOlsen/Planet`.

## Local Development

```sh
npm install
npm run dev
```

Optional Supabase-backed feedback and access-code features are enabled at build time when these variables are present. For local branch testing, put them in `.env.local`:

```sh
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
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

GitHub secrets are scoped to a repository. If this app was split out or moved, recreate those secrets in `JaranOlsen/deliberatepractice`; secrets from the old parent repository are not inherited. Branches do not deploy through the current workflow unless run manually, so branch builds need local `.env.local` values when testing Supabase behavior.

The deploy workflow now fails before building if either required Supabase secret is missing, so `main` cannot silently publish a build where access-code unlock and statement flagging are disabled.

Supabase expectations:

- `feedback` allows anon inserts for statement flags.
- `entitlements` allows anon selects by `access_code` and returns `access_level` plus optional `expires_at`.
- `access_code_usage` allows anon inserts for unlock attempts.

The generated runtime data and restored `src/md/` source/reference texts are committed.
