# AI practice pilot

Branch: `codex/ai-practice-pilot`. This pilot is not deployed to production. The entry is enabled during local development, and disabled in ordinary release builds. An explicitly enabled private build can use `VITE_AI_PRACTICE_ENABLED=true`, but the supplied API server is loopback-only.

Choose **Individual → AI guided practice · pilot**. Sara’s easy case is available for **Empathic Understanding** and **Exploratory Questions**, in English and Norwegian, with the same 12 authored statements, case background and examples as regular practice.

## Try the interface without an API key

Start Vite:

```sh
npm run dev
```

Open the local app and choose **Try a scripted preview** under either skill. No OpenAI calls occur in this mode. The supervisor text is a fixed illustration of the workflow, explicitly labelled as such; responses receive no scores. Voice preview uses the device’s speech synthesis, whose voices depend on the operating system. It does not demonstrate the quality of the eventual OpenAI voices. Speech transcription is available only in connected mode.

The loop is client statement → therapist response → supervisor feedback → retry → next item. The client line stays above the response/feedback. Speech recordings have a manual end control, a 90-second cap and cancellation. A corrected transcript is what is sent for assessment. Examples remain optional and are unavailable before the first attempt.

Home offers pause or end. Pause preserves the round and typed draft in memory while this page remains open. Reloading clears it. At the end, the user can give an optional self-assessment and explicitly download the round as JSON. This pilot writes nothing to account progress or the Supabase database.

## Connect a model later

Copy `server/ai.env.example` to the repository-root `.env.ai.local`, which Git ignores. Set `OPENAI_API_KEY` there and set `AI_PRACTICE_LIVE_ENABLED=true` only when paid testing is intended. A key alone does not enable calls. Never put the key in a `VITE_` variable or a browser field.

In another terminal:

```sh
npm run ai:server
```

The Node 24 server binds to `127.0.0.1:5555`. Vite proxies `/api/ai-practice` to it. The server permits only the configured localhost origins, validates incoming material against the canonical catalog, bounds recordings and enforces a shared hourly call limit. If Vite uses a different port, update `AI_PRACTICE_ORIGINS` and restart the server. Changing the server port also requires updating the Vite proxy target.

The default supervisor is GPT-6.1 Sol using low reasoning effort and structured output. Recorded speech uses `gpt-transcribe`. Client speech uses Marin, and supervisor speech uses Cedar through `gpt-4o-mini-tts`. These API paths are implemented and tested with mocked provider responses; actual account availability, voice quality, latency and model feedback have not yet been tested. [GPT-6.1 Sol](https://developers.openai.com/api/docs/models/gpt-6.1-sol), [file transcription](https://developers.openai.com/api/docs/guides/speech-to-text), [text to speech](https://developers.openai.com/api/docs/guides/text-to-speech)

The local service is a development adapter, not a hosted production API. Hosted access would need authenticated users, per-user authorization and durable spending limits. This branch does not provision Supabase Edge Functions, alter the live database or expose an API key in a public client.

## Assessment behavior

AI scores assess wording and expressed meaning, using a separate versioned pilot rubric. They do not claim to establish warmth, pacing, pauses, nonverbal responsiveness or internal therapist reactions. Each result includes a nullable 1–5 score, exact evidence from the response, one strength, one adjustment and an optional limitation. Invalid evidence, refusals and incomplete outputs produce no assessment. Schema validity does not establish the quality of an assessment. [Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs)

No numerical score interrupts the item sequence. The round summary separates first-attempt scores from coached-retry scores. Passed items, demo output and unassessable attempts are excluded. Self-assessment stays separate. Round exports retain item, language, content revision, rubric/model and attempt identities, as well as responses and feedback, for explicit review.

The server shares pending and completed requests by attempt ID for 15 minutes. Reusing an ID with different text is rejected. Failed requests can be retried. Keys, prompts, recordings and provider error bodies are not written to application logs. Audio is not stored by this app; recent assessment results remain in server memory temporarily for retries. Provider retention remains governed by the API endpoint and account controls; `store:false` does not itself guarantee zero retention. [OpenAI data controls](https://developers.openai.com/api/docs/guides/your-data)

## Calibration and verification

`calibration/aiPracticeCases.js` contains 28 synthetic examples across two skills and two languages: dismissive, interpretive/stacked, partial, strong, alternative strong, unrelated and instruction-injection responses. The score ranges are provisional author labels, **not independent human ratings**.

Validate the collection offline:

```sh
npm run ai:evaluate
```

After configuring a key and explicitly enabling paid requests, `npm run ai:evaluate -- --live` can assess the collection. It reports agreement with the provisional ranges and abstention on unrelated/injection examples. Have human reviewers judge the examples and feedback independently, and add held-out examples from other items before treating this as a useful scoring benchmark.

`tests/aiPractice.test.js` checks server-only activation, canonical material, evidence validation, idempotency, rate limits, language-preserving transcription, two voice requests, sanitized errors and demo behavior. `scripts/check-ai-practice-flows.js` runs through the local Playwright CLI with all provider requests mocked, checking phone layouts, enlarged text, preparation, recording/correction, denial fallback, pause/resume, retries, completed rounds and downloads. `scripts/check-ai-practice-recovery.js` checks that late responses cannot advance a resumed round and that an existing ordinary round remains untouched. These checks do not establish pronunciation or microphone behavior on physical iPhones/Android devices; those are next-stage live checks.
