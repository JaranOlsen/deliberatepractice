# AI practice pilot

Branch: `codex/ai-practice-pilot`. This pilot is not deployed to production. The entry is enabled during local development, and disabled in ordinary release builds. An explicitly enabled private build can use `VITE_AI_PRACTICE_ENABLED=true`, but the supplied API server is loopback-only.

Choose **Individual → AI guided practice · pilot**, then a skill, case and available difficulty level. All 16 skills and 12 client identities are now represented in English and Norwegian, using the same authored statements, backgrounds and examples as regular practice. The pilot follows the existing curated case availability: 170 case/skill combinations, giving 238 twelve-item rounds and 2,856 statements per language when available difficulty levels are counted. It does not invent missing case/skill combinations. Mastery sequences are not yet part of AI practice.

## Try the interface without an API key

Start Vite:

```sh
npm run dev
```

Open the local app, choose a skill and case, then **Begin practice**. With no connected service, the round uses scripted preview mode. With a connected service, **Try a scripted preview** is an optional alternative on the preparation screen. No OpenAI calls occur in preview mode. The supervisor text is a fixed illustration of the workflow, explicitly labelled as such; responses receive no scores. Voice preview uses the device’s speech synthesis, whose voices depend on the operating system. It does not demonstrate the quality or stable identities of the OpenAI voices. Speech transcription is available only in connected mode.

The loop is client statement → therapist response → supervisor feedback → retry → next item. The client line stays above the response/feedback. Speech recordings have a manual end control, a 90-second cap and cancellation. A corrected transcript is what is sent for assessment. Examples remain optional and are unavailable before the first attempt.

Home offers pause or end. Pause preserves the round and typed draft in memory while this page remains open. Reloading clears it. At the end, the user can give an optional self-assessment and explicitly download the round as JSON. This pilot writes nothing to account progress or the Supabase database.

## Connect a model later

Copy `server/ai.env.example` to the repository-root `.env.ai.local`, which Git ignores. Set `OPENAI_API_KEY` there and set `AI_PRACTICE_LIVE_ENABLED=true` only when paid testing is intended. A key alone does not enable calls. Never put the key in a `VITE_` variable or a browser field.

In another terminal:

```sh
npm run ai:server
```

The Node 24 server binds to `127.0.0.1:5555`. Vite proxies `/api/ai-practice` to it. The server permits only the configured localhost origins, validates incoming material against the canonical catalog, bounds recordings and enforces a shared hourly call limit. If Vite uses a different port, update `AI_PRACTICE_ORIGINS` and restart the server. Changing the server port also requires updating the Vite proxy target.

The default supervisor is GPT-6.1 Sol using low reasoning effort and structured output. Recorded speech uses `gpt-transcribe`. Speech generation uses `gpt-4o-mini-tts`; each client has a fixed voice assignment and the supervisor uses Cedar. The live API paths and typed responses through the app were verified on 6 October 2026; voice quality, physical-device microphone behavior and scoring calibration still need human testing. [GPT-6.1 Sol](https://developers.openai.com/api/docs/models/gpt-6.1-sol), [file transcription](https://developers.openai.com/api/docs/guides/speech-to-text), [text to speech](https://developers.openai.com/api/docs/guides/text-to-speech)

### Client identity and mood

`src/data/aiPracticeVoices.js` assigns voice identity by canonical case ID, independently of skill, language, difficulty and mood:

| Client | Voice | Client | Voice |
| --- | --- | --- | --- |
| Sara | marin | Michael | ash |
| Jason | echo | Laura | coral |
| Carlos | onyx | Nina | sage |
| Aisha | nova | David | ballad |
| Marcus | fable | Leo | verse |
| Mia | shimmer | Nora | alloy |

Sara keeps the original pilot voice. Leo retains the internal `case-arne` ID. The supervisor uses `cedar`, separately from all clients.

The canonical bracketed cue, such as `[Guarded]`, now joins the case’s baseline style in the speech instructions. The cue guides intonation, pace and intensity; it is removed from the spoken words and does not change the voice ID. This corrects the first pilot, which removed the cue but did not pass it to speech generation. Browser-supplied voice or mood overrides are ignored. A fixed voice parameter is not a guarantee of identical delivery between generations. English and Norwegian pronunciation and cue adherence need listening review; the API voices are optimized for English. [Speech instructions and voices](https://developers.openai.com/api/docs/guides/text-to-speech)

With the live server running, check the integration using:

```sh
npm run ai:check:live -- --live
```

This makes at most five provider requests: English/Norwegian assessment, client/supervisor speech and transcription. It stops at the first failure, records only synthetic case responses, and saves a report and two audio clips under the ignored `output/playwright/ai-live/` folder. It is excluded from ordinary tests and requires the explicit `--live` flag. Request attempts are counted, not billed charges. Key, access, model and billing errors return fixed error codes; provider error messages and credentials are never exposed.

For expanded curriculum coverage, `npm run ai:check:live -- --live --expanded` makes at most four provider requests: English alliance repair with David at hard difficulty, Norwegian focusing with Leo at hard difficulty, and client speech for both. Results are saved under `output/playwright/ai-expanded-live/`. Both assessments passed with score 4 and valid evidence; both audio requests returned playable formats. A live English focusing attempt in the actual app also passed. These checks establish integration, not clinical validity of the new anchors or listening quality across all clients.

If the API reports a billing/quota error, check available credits and organization/project limits before retrying. Repeated retries cannot resolve a billing rejection. [OpenAI error guidance](https://developers.openai.com/api/docs/guides/error-codes#api-errors)

The first funded live check passed all five requests. Assessment took 7.02 seconds in English and 13.60 seconds in Norwegian; speech generation took 1.92/2.48 seconds, and transcription took 1.45 seconds. Both assessment scores were 4 with valid quotations from the attempts, and the transcription matched the authored client line. These are single samples, not latency benchmarks or evidence of rating validity. A subsequent actual app response also reached supervisor feedback successfully. The key was verified absent from the browser build. Audio clips, the API report and the UI screenshot are kept only in the ignored local output folder.

The local service is a development adapter, not a hosted production API. Hosted access would need authenticated users, per-user authorization and durable spending limits. This branch does not provision Supabase Edge Functions, alter the live database or expose an API key in a public client.

## Assessment behavior

AI scores assess wording and expressed meaning, using the separate `wording-coaching-v2` rubric and `supervisor-wording-v2` prompt with anchors for all 16 skills. They do not claim to establish warmth, pacing, pauses, nonverbal responsiveness or internal therapist reactions. Each result includes a nullable 1–5 score, exact evidence from the response, one strength, one adjustment and an optional limitation. Invalid evidence, refusals and incomplete outputs produce no assessment. Schema validity does not establish the quality of an assessment. [Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs)

Difficulty describes the client material; it does not add or subtract score points. Self-awareness requests a reflection rather than a spoken intervention, allows privacy and an absence of a noticeable reaction, and does not claim access to internal truth. Chairwork anchors assess marker recognition and invitation, not execution of an entire task. Focusing allows correction, uncertainty, private words and stopping; a bodily sensation or emotional shift is not required. Examples remain optional after the first attempt.

Each live feedback screen shows a 1–5 AI rating with the same scale labels as self-assessment. Spoken supervisor feedback includes that rating. On a retry, the first-attempt score remains visible for comparison. Unassessable responses show “Not rated”; scripted previews never show a rating. The AI rubric still assesses wording and expressed meaning only. The round summary separates first-attempt scores from coached-retry scores. Passed items, demo output and unassessable attempts are excluded. Self-assessment stays separate. Round exports retain item, language, content revision, rubric/model and attempt identities, as well as responses and feedback, for explicit review.

Open **AI details** at the bottom of a live pilot screen to see the feedback, speech and transcription models and the client/supervisor voice assignments. Before an assessment, the feedback model is the server configuration; after feedback, it is the model identifier returned by that assessment. The completed-round details list the models used for the round’s assessments. The status endpoint exposes only model names and connection mode, never the API key.

The server shares pending and completed requests by attempt ID for 15 minutes. Reusing an ID with different text is rejected. Failed requests can be retried. Keys, prompts, recordings and provider error bodies are not written to application logs. Audio is not stored by this app; recent assessment results remain in server memory temporarily for retries. Provider retention remains governed by the API endpoint and account controls; `store:false` does not itself guarantee zero retention. [OpenAI data controls](https://developers.openai.com/api/docs/guides/your-data)

## Speech feedback investigation

The app still sends a corrected transcript to the wording supervisor. It does not yet assess therapist audio directly. A separate bounded experiment confirms that `gpt-audio-1.5` can consume a WAV recording and return qualitative delivery observations, but a controlled fast/slow test produced questionable pace feedback. No delivery score was added. See [the investigation and proposed pipeline](ai-speech-feedback-investigation.md) for the experiment, limitations and reproducible commands.

## Calibration and verification

`calibration/aiPracticeCases.js` contains 28 synthetic examples across two skills and two languages: dismissive, interpretive/stacked, partial, strong, alternative strong, unrelated and instruction-injection responses. The score ranges are provisional author labels, **not independent human ratings**.

Validate the collection offline:

```sh
npm run ai:evaluate
```

After configuring a key and explicitly enabling paid requests, `npm run ai:evaluate -- --live` can assess the collection. It reports agreement with the provisional ranges and abstention on unrelated/injection examples. Have human reviewers judge the examples and feedback independently, and add held-out examples from other items before treating this as a useful scoring benchmark.

`tests/aiPractice.test.js` checks server-only activation, all canonical case/skill/level material, case/level mismatch rejection before provider calls, stable voices, canonical mood instructions, evidence validation, idempotency, rate limits, language-preserving transcription, sanitized errors and demo behavior. `scripts/check-ai-practice-flows.js` runs through the local Playwright CLI with all provider requests mocked, checking phone layouts, enlarged text, preparation, recording/correction, denial fallback, pause/resume, retries, completed rounds and downloads. `scripts/check-ai-practice-library.js` checks all skill/case selectors and available levels in both languages, with 32 representative item/feedback flows and phone/text-enlargement coverage. `scripts/check-ai-practice-recovery.js` checks that late responses cannot advance a resumed round and that an existing ordinary round remains untouched. These checks do not establish pronunciation or microphone behavior on physical iPhones/Android devices; those are next-stage live checks. The existing 28-example calibration set has not yet been expanded to the other 14 skills.
