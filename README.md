# Deliberate Practice Lab

Standalone Vite app split from `JaranOlsen/Planet`.

## Local Development

```sh
npm install
npm run dev
```

Optional Supabase-backed feedback, access-code, auth, pairing, and rating features are enabled at build time when these variables are present. For local branch testing, put them in `.env.local`:

```sh
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

For local/admin feedback triage, also add a Supabase Secret API key. Never prefix this with `VITE_`, never add it to GitHub Pages secrets, and never commit it:

```sh
SUPABASE_SECRET_KEY=your-secret-api-key
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

The deploy workflow now fails if either required Supabase secret is missing or if the built JavaScript assets do not contain the configured values, so `main` cannot silently publish a build where access-code unlock and statement flagging are disabled.

Supabase expectations:

- `feedback` allows anon inserts for statement flags.
- Optional: run `supabase/feedback-review.sql` to add `status`, `resolved_at`, and `resolution_note` columns so fixed feedback can be marked instead of deleted.
- `redeem_access_code(input_code text)` allows anon access-code redemption without exposing the `entitlements` table.
- `entitlements` should not allow direct anon selects.
- `access_code_usage` allows anon inserts for unlock attempts with `success`, `invalid`, or `error` status.
- Auth, profiles, partner pairing, and practice ratings require `supabase/auth-pairing-practice.sql`.
- Supabase Auth email Magic Link needs redirect URLs for local testing and production, for example `http://localhost:5173/deliberatepractice/` and `https://jaranolsen.github.io/deliberatepractice/`.

Run `supabase/access-code-security.sql` in the Supabase SQL editor to create the access-code RPC, lock direct entitlement reads, and configure access-code usage logging.
Run `supabase/auth-pairing-practice.sql` in the Supabase SQL editor to create profile, pairing, partnership, and practice-rating tables and RPCs.

The generated runtime data and restored `src/md/` source/reference texts are committed.

## Content Improvement Workflow

Each content pass starts with live feedback before general corpus work:

1. Check open Supabase feedback:

```sh
npm run feedback:list
```

2. Fix flagged source content first. For translation flags, update `src/data/translations.js`; for English/source issues, update `src/data/statements.js` and then localize the changed item.
3. Regenerate and validate:

```sh
npm run build:content
npm test
npm run build
git diff --check
```

4. Clear the handled feedback row. Prefer marking it fixed if `supabase/feedback-review.sql` has been run:

```sh
npm run feedback:resolve -- --statement-id dp_example --created-at "2026-06-08T15:20:15.35+00:00" --note "Fixed translation in commit <sha>"
```

If review columns are not installed yet, delete the exact handled row instead:

```sh
npm run feedback:delete -- --statement-id dp_example --created-at "2026-06-08T15:20:15.35+00:00"
```

When there are no open feedback rows, continue the normal bounded improvement loop using `src/md/gold-standard-content-comparison.md`, `src/md/content-quality-audit-2026-06-05.md`, and `src/md/EFT_Exercises_Extracted.md`.
