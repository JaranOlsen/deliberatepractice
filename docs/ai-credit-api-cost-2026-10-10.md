# Estimated API cost of 100 app credits

10 October 2026. Credits are fixed application units, so there is no single API
cost per credit. This estimate keeps the approved prices and 120-credit allowance
unchanged. API usage only; it excludes hosting, payment fees, foreign exchange
charges and any tax on the provider invoice. NOK conversions use a deliberately
rounded planning assumption of NOK 10 per USD.

| Usage pattern for 100 credits | Estimated API cost |
| --- | --- |
| Ordinary text feedback | NOK 3–6 |
| Typical speech, delivery feedback and generated voices | NOK 4–10 |
| Planning allowance with headroom | NOK 10–15 |

Longer responses and slower generated voices can exceed these typical ranges.
For example, 100 generated one-minute voice clips are roughly NOK 15 under the
synthesis estimate below; two-minute clips would be roughly NOK 30.

## Measured samples

A small controlled sample used only authored fictional Sara material. No account
ratings, histories, payments or human recordings were involved. Six provider
calls in total were made: two standalone text assessments, then synthetic speech,
a wording assessment, an audio review and transcription of that synthetic clip.

| Sample | Provider-reported usage | Computed USD cost |
| --- | --- | --- |
| English text assessment | 970 input, 162 output tokens | 0.003560 |
| Norwegian text assessment | 1,091 input, 108 output tokens | 0.003262 |
| Synthetic clip delivery review | 798 text input, 44 audio input, 138 text output tokens; clip 4.45 s | 0.004783 |
| Synthetic clip transcription | 5 billed seconds | 0.000375 |

The two text assessments average USD 0.003411 each: about NOK 3.41 per 100
one-credit text assessments. This sample is too small to establish an average
across all sixteen skills or all response lengths. Output usage includes the
provider-reported reasoning tokens; they have not been omitted from cost.

## Rates and modeled speech scenarios

[Official OpenAI pricing](https://developers.openai.com/api/docs/pricing), checked
10 October 2026:

- GPT-6.1 Sol wording: USD 2/million input and USD 10/million output tokens;
  cached input USD 0.10/million. The measured text samples had no cache discount.
- GPT Audio 1.5: USD 32/million audio input, USD 2.50/million text input and
  USD 10/million text output tokens for the text-only review used here.
- GPT Transcribe: USD 0.0045/minute.
- GPT-4o mini TTS: USD 0.60/million input text and USD 12/million output audio
  tokens. Its binary speech response does not report per-request token usage.

The measured audio input used about ten tokens per second. Keeping its text
context/output size constant gives approximately USD 0.012975 for a 30-second
review, or USD 0.032175 for a 90-second review. Delivery review uses three app
credits, so 100 credits used entirely that way are roughly NOK 4.33 or NOK 10.73,
respectively. These are modeled duration changes, not additional measured calls.

For synthesis, the operational estimate uses roughly USD 0.015 per generated
minute and about 900 spoken characters/minute. This is an estimate, not an exact
provider meter; mood, voice and pacing change duration. A normal full spoken
attempt uses seven credits: one wording, one transcription, three delivery and
two voice clips. A coached retry generally uses six because the client clip is
replayed. With short-to-moderate recordings and roughly half-to-one minute of
combined generated speech, that puts ordinary mixed speech use near NOK 4–10
per 100 credits.

The new server telemetry records exact returned token/duration usage where it
exists and flags synthesis estimates. Revisit these ranges using a larger sample
of real, consented training usage. Existing OpenAI project spending settings are
not changed by this release.
