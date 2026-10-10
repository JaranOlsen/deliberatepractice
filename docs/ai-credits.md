# AI credits

Approved 10 October 2026: monthly and annual Full access subscriptions include
120 credits each subscription month. Included credits expire at the next monthly
anniversary without rollover. Purchased packs carry over indefinitely, remain
usable without a subscription, and are consumed after included credits:

| Pack | Price (NOK, total) |
| --- | --- |
| 120 credits | 59 |
| 360 credits | 149 |

An unused pack can be refunded within 14 days through support@eftdojo.no.
Existing admin AI access remains separate and does not consume credits. No admin
permission is granted by subscribing or purchasing a pack. Credits do not unlock
premium cases. Subscription and group/library pricing remains 99/month, 799/year.
The seller's existing VAT-exempt configuration is retained.

## Usage

| Action | Credits |
| --- | --- |
| Wording feedback for one response | 1 |
| Transcription of one recording | 1 |
| Vocal delivery feedback | 3 |
| Generate client or supervisor voice clip | 1 |

A spoken response with both voices and delivery feedback uses 7 credits; a typed
response without generated voices uses 1. Each new response/retry is a new
assessment. Replaying a cached voice or recovering the same request is free.
Action costs appear before submitting, with the balance in Account and AI
practice. Exhaustion preserves the draft. Original recordings are never stored.

## Cost basis

Current models remain GPT-6.1 Sol (wording), GPT Transcribe, GPT Audio 1.5
(delivery) and GPT-4o mini TTS. [Official pricing](https://developers.openai.com/api/docs/pricing),
checked 10 October 2026, gives wording input/output $2/$10 per million tokens,
audio input $32 per million tokens and transcription $0.0045/minute. Costs depend
on length; the allowance and fixed units are deliberately independent of tokens.
The 90-second recording limit and bounded outputs constrain exposure. Do not
silently increase action costs when provider rates change.

These are fixed purchases of application features, not a monetary wallet or
postpaid usage invoices. Stripe Checkout handles one-time packs alongside the
existing subscriptions. The app ledger authorizes access and prevents overspend;
no additional usage-invoicing service is needed for this initial offer.

## Reliability and security

A service-only Postgres transaction locks the user's wallet, reserves credits
from available lots, and issues a lease. Completion stores an immutable debit
receipt and a temporary replay result. Failure or an expired lease releases the
reservation exactly once. Replaying a completed request never debits again; an
expired result cannot regenerate secretly. Content permissions are checked
before a provider call. Browser balances and payment-return URLs cannot grant
credits. Monthly grants use the paid invoice period start, clamped calendar
anniversaries and unique source keys; missed months do not accumulate.

Stripe fulfillment re-fetches the session and price, validates amount, currency,
mode, quantity and the app-owned checkout/customer relationship, and grants only
confirmed paid sessions. Completed and asynchronous success events can both
arrive; the purchase source key and event receipt deduplicate them. Refunds remove
proportional credits from the affected purchase. Disputes suspend only its lot;
multiple disputes remain independent. Risk events arriving before fulfillment
are retained and applied when the purchase is recorded. Subscription payment
holds disable included credits, preserving separately purchased credits.

Feedback, transcripts and synthetic voice clips have a 15-minute replay lifetime;
a scheduled job removes expired payloads. Permanent debit/payment receipts contain
no practice text or original recordings. Existing progress ratings are untouched.

## Deployment

1. Apply `20261010150508_ai_credits.sql` (feature defaults off).
2. Build/deploy both Edge services with `deno.json` and generated dependencies.
3. Configure approved Stripe one-time pack IDs in `ai_credit_packs`. Keep sandbox
   and live IDs separate. Existing webhook events cover the new payment flow.
4. Deploy the matching app and legal pages; the new front end supplies stable
   request IDs for transcription and voice generation.
5. Verify wallet grants, permissions, costs, Stripe prices and unpaid checkout,
   then set `app_public_config.ai_credits_enabled=true` and enable the packs.

No new API secret is required. Use the already configured Stripe/OpenAI server
keys. Existing paid subscriptions need their canonical paid invoice start filled
before enabling; the new snapshot RPC stores it on subsequent events. Do not
infer a new allowance from a payment success page.

Validation: `npm test`, production build, generated Edge imports, plus isolated
English/Norwegian phone UI checks at 320/390 px using
`scripts/check-ai-credits-flows.js`. Original auth, subscription, room and content
checks remain in place. Provider failures, exhaustion, cross-instance replay,
refunds and account separation are covered without real payments or emails.
