# EFT Dojo: AI progress, feedback and promotions

AI ratings are a third source in Progress. The same radar, difficulty layers and
recent/all-history views use saved server assessments, without inserting AI
scores into human ratings. Before-feedback and after-feedback profiles stay
separate. A corrected attempt replaces earlier feedback for that item; an
unassessable correction cannot revive an older score. History uses paginated,
owner-filtered RLS queries. Only scores saved to AI history appear.

AI setup preserves its expanded state and focus when options change. The base
wording assessment costs one credit, speaking adds one, client voice adds up to one,
and delivery review adds three. Storage/transcript-review options are free.
The maximum total is labelled per attempt; cached voice replay is free. Costs
and the approved subscription/pack offer are unchanged.

Fifteen intervention skills have distinct vocal listening targets. Self-awareness
remains a reflection task without a vocal score. Feedback should locate an
audible phrase and offer one testable pause, pacing or emphasis adjustment,
without diagnosing authenticity or a client's reaction. Unverifiable quotation
anchors are removed; older v1 delivery results remain readable. Two synthetic
English clips tested the revised prompt: the measured clip drew observations
about emphasis/pauses, while the compressed clip drew a specific pace observation.
Eight bounded provider requests were used while refining this check. This is a
small calibration sample, not clinical validation; qualitative delivery remains
experimental and does not enter the radar. Human review of real consented English
and Norwegian clips remains the most useful next evaluation.

The app, manifest, legal pages, email templates, sender name, billing portal and
existing customer invoice footers use EFT Dojo. The legal seller is unchanged.
The opening screen identifies deliberate practice in emotion-focused therapy.
The icon is an original SVG open circle with paired conversation shapes, in the
existing teal/cream/clay palette, with 180/192/512 PNG derivatives. The mark lies
within the Android maskable safe area. Existing iPhone shortcuts may need to be
removed and re-added to pick up the new name/icon.

## Promotions

Subscription Checkout enables Stripe promotion codes. Manage discounts in the
Stripe Dashboard, linked from the app's promotion management section. Apply a
coupon to the Full access product and choose its percentage or NOK amount,
duration, redemption limits and expiry there. Customers enter the code at Stripe
Checkout, where the discounted total is visible before payment. No new live
discount or price is preconfigured by this release. Credit pack prices remain
fixed; discount codes are not enabled for top-up Checkout.

Signed-in accounts can redeem an AI credit code in Account. Promotion managers
can create, copy and disable gift codes with a credit amount, expiry, maximum
recipient count and optional recipient email. Codes are generated with strong
randomness and only their hashes/hints are stored. Save the new code when created;
the full code cannot be retrieved after a reload. Each account can redeem a code
once. Redemptions are atomic and retain an audit record. Invalid attempts are
limited to ten/hour/account and their technical records expire after 30 days.
Disabling or expiring a code stops new redemptions; credits already granted do
not expire. Gift credits are a distinct ledger source and do not unlock premium
cases or grant administrative permissions.

Promotion management uses a separate server-only permission. Only the explicitly
approved primary owner account receives that permission; Gmail stays free.
Giving another person AI access does not grant promotion management. API checks
use verified identity and current roles, not editable metadata. Code inventory,
recipient emails and grants are unavailable to browser database roles.

Validation: 152 Node tests and 18 isolated Postgres suites; production build,
public-content distribution check and both Edge bundles. EN/NO phone checks at
320/390 px verify options stay open, costs, AI radar source separation, spoken
practice/replay/resume, promo redemption replay, admin isolation, plain-text
labels, enlarged text and late code responses after sign-out. Real Stripe sandbox
Checkout exposes the promotion field. No live purchases or emails were sent.
