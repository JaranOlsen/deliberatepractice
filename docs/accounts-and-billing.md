# Accounts and subscription rollout

## Behavior

Sign-in and account creation share one email flow. Email verification uses an email code (the current project sends eight digits; legacy six-digit codes are also accepted) in the browser that opened the app. The legacy link mode remains available during rollout. Wrong/expired codes, resend cooldown, change-email and expired callback recovery are localized in English and Norwegian. Signing out affects this device.

Library access belongs to the verified account. Existing AI beta grants were preserved and backfilled as full-content grants. AI eligibility remains independent of buying a subscription. License codes now attach to the signed-in account; people with an old browser-only unlock must sign in and redeem their existing code once.

Premium statement and mastery banks are served by `account-services`, rather than included in the public web build. The curriculum source and its history already exist in a public repository: this protects hosted delivery, not the secrecy of previously published material.

A room can use a paid participant as its sponsor. Free members get only that room's selected material. Starting a new premium round requires a current sponsor; an authorized round can finish through its room lease if the sponsor leaves or access expires. The lease is bounded by the room expiry and one day. Independent premium practice remains locked for those guests.

## Current configuration

- Full access: NOK 99/month or NOK 799/year, fixed server-selected prices.
- Stripe **test mode only**, available to the existing AI beta accounts. No live key or live-payments flag is enabled.
- Checkout uses Norwegian or English according to the app language. Currency stays NOK; international card payments are supported by hosted Checkout.
- Prices have inclusive tax behavior in the test catalog. Automatic tax is off pending the actual tax treatment and business setup.
- The portal supports invoices, payment-method updates and cancellation at the end of the paid period.
- The production database migrations and `account-services` function are deployed. Stripe test key and webhook signing secret are server secrets; the nonsecret price/portal IDs are in `app_public_config`.
- Custom SMTP is already enabled through Resend, with a 60-second per-user interval matching the app's resend cooldown.

## Deployment and email activation

1. Deploy the frontend while `app_public_config.email_mode = 'link'`. This keeps the existing email template usable during the code rollout.
2. Save `supabase/auth-templates/email-code.html` as both the Magic link/OTP and Confirm signup email bodies. Set their subjects to `Din innloggingskode / Your sign-in code`. The app link contains no verification credential.
3. Set `app_public_config.email_mode = 'code'`, reload the app, and verify real delivery and sign-in in the originating browser.
4. Existing link emails can still complete through Supabase's callback. Users on an older open tab should refresh before requesting a new email.

Keep custom SMTP configured for delivery to ordinary users; the default Supabase sender is unsuitable for public production sign-up. Verify the authenticated sender/domain and mail-provider limits in the dashboard. Do not put SMTP, Stripe or OpenAI secrets in the public frontend or repository.

## Local development

Ignored `.env.billing.local` follows `server/billing.env.example`. The local adapter hard-disables live payments.

```sh
npm run accounts:server
npm run dev
npm run billing:setup:test
node --env-file-if-exists=.env.billing.local scripts/setup-stripe-webhook-test.mjs --test-setup
npm run accounts:build:edge
```

Deploy all files under `supabase/functions/account-services`, including generated dependencies and `deno.json`. The gateway JWT check is disabled for public status and Stripe webhooks; account actions verify the user with Supabase Auth, and webhooks verify the exact raw-body signature.

## Billing policy

Only a paid, current **live** subscription grants purchased access. A success URL never grants access. Test payments cannot unlock production access for ordinary accounts. Cancellation retains the paid period; a failed renewal does not extend it. Manual grants remain independent.

Events are deduplicated, and each event retrieves current provider state before changing account access. Full refunds and disputes place a hold on the customer's app subscriptions. Won/closed-warning disputes clear their hold; a new paid period can clear a refund hold. This conservative customer-level policy needs review before live sales, particularly refunds of old invoices after a later renewal.

Checkout attempts are bounded and serialized per customer. Repeated requests reuse the open checkout. A plan change expires its predecessor. The backend also checks Stripe for existing active/unresolved subscriptions before creating another.

## Checks completed

- Content validation, Node tests and 14 isolated Postgres suites, including grants, expiry, webhook replay, checkout leases, room sponsorship and role isolation.
- English/Norwegian phone flows at 320px and 390px, also with enlarged text: verification focus, wrong codes, pasted codes, resend cooldown, expired callbacks, forged browser unlock denial and plan selection.
- AI practice regression with mocked model/audio calls: both languages, demo/live UI, ratings, recording fallback and export; no paid AI calls.
- Four-device room regression against isolated Postgres: four sets, readiness, competing roles, reconnect/replay, host transfer and pair self-assessment.
- Hosted protected-content authorization and real Stripe test checkout creation: concurrent attempts, retry reuse, monthly/yearly switch and portal creation.
- A real Stripe **test** subscription payment and cancellation generated provider webhooks and updated account access. The test subscription is scheduled to end at its paid-period boundary. No real payment was made. Payment completion was tested through Stripe's test API; the hosted form was inspected and filled with fictitious details.

## Before accepting real payments

Confirm the business's tax treatment, seller identity, support contact, cancellation/refund terms, privacy disclosures and required consumer consent. Create separate live prices/portal/webhook and install their server secrets. Set the public billing mode and the server live-payments flag only after reviewing a complete live configuration. The beta AI feature is not included as an unlimited subscription benefit.

Primary references: [Supabase email OTP](https://supabase.com/docs/guides/auth/auth-email-passwordless), [email templates](https://supabase.com/docs/guides/auth/auth-email-templates), [custom SMTP](https://supabase.com/docs/guides/auth/auth-smtp), [Stripe Checkout](https://docs.stripe.com/api/checkout/sessions), [subscription webhooks](https://docs.stripe.com/billing/subscriptions/webhooks), [Stripe test payment methods](https://docs.stripe.com/testing).
