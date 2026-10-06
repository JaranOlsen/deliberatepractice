# Admin AI practice

AI practice is available in production only to signed-in users with server-verified admin access. Browser content entitlements and user-editable metadata cannot grant this permission. The four dedicated test accounts have this access.

Choose **Individual → AI guided practice · pilot**, then a skill, case and difficulty. The library includes all 16 skills and 12 client identities in English and Norwegian, following the authored case availability: 170 case/skill combinations, 238 twelve-item rounds and 2,856 statements per language. Mastery sequences are not part of AI practice.

The sequence is client statement → therapist response → feedback → retry → next item. Speak or type a response. Spoken attempts are transcribed and can be corrected before assessment. Recordings have a manual end control, cancellation and a 90-second limit. Examples stay optional and become available after the first attempt. Home offers pause or end; the round and draft remain in page memory, and reload clears them.

## Wording score and optional delivery review

GPT-6.1 Sol assesses the corrected wording and expressed meaning using `wording-coaching-v2` and `supervisor-wording-v2`. Each response has a nullable 1–5 score, exact evidence from the response, a strength, one adjustment and an optional limitation. The retry has its own score; the round keeps first attempts and coached attempts separate. Invalid evidence, incomplete responses and refusals produce no assessment. Difficulty describes the client material, not a score bonus. The broader skill anchors still need independent human calibration. [Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs)

After a spoken attempt, **Hear your recording** replays the original clip. **Review delivery** optionally sends its audio to GPT Audio 1.5. The browser converts WebM/MP4 to bounded mono PCM16 WAV at 16 kHz. The server derives duration from the actual bytes and estimates speaking rate using the corrected transcript. That estimate includes silence and is not an ideal-speed target.

The experimental delivery note contains brief audible observations, a strength, one adjustment and uncertainty. It never changes the wording score or supplies a separate delivery score. It cannot establish sincerity, authenticity, the client’s reaction or response latency. Poor audio can receive no useful observation. Therapist self-awareness exercises offer replay but no delivery review because they concern internal reflection. Optional observations can join the supervisor’s spoken feedback. [Audio input](https://developers.openai.com/api/docs/guides/audio-chat-completions)

The [speech investigation](ai-speech-feedback-investigation.md) records the controlled synthetic tests and their limitations. Measured duration/rate now ground the prompt, but integration checks do not establish coaching accuracy. Physical iPhone/Android recording behavior and consented human English/Norwegian speech are next-stage checks.

## Voices and model details

Transcription uses `gpt-transcribe`; speech generation uses `gpt-4o-mini-tts`. Client voice identity is assigned by canonical case ID across skills, languages, difficulty and mood:

| Client | Voice | Client | Voice |
| --- | --- | --- | --- |
| Sara | marin | Michael | ash |
| Jason | echo | Laura | coral |
| Carlos | onyx | Nina | sage |
| Aisha | nova | David | ballad |
| Marcus | fable | Leo | verse |
| Mia | shimmer | Nora | alloy |

Leo retains the internal `case-arne` ID. The supervisor uses `cedar`. Bracketed cues such as `[Guarded]` join the case’s baseline style in the speech instructions, guide delivery and are removed from the spoken words. They never change voice identity. Browser voice/mood overrides are ignored. Voice parameters do not guarantee identical delivery between generations; pronunciation and mood adherence need listening review. [Speech instructions and voices](https://developers.openai.com/api/docs/guides/text-to-speech)

**AI details** shows configured feedback, transcription, speech and delivery models plus both voices. After an assessment/review it shows the actual responding model. Completed rounds retain the assessment model identifiers.

## Production service and access

The Supabase Edge Function `ai-practice` requires a valid JWT, verifies the current user through Auth, then reads `get_ai_access()` through the user’s RLS. Every endpoint is protected, including status. Current permission is checked for each request. Admins can read only their own permission row and cannot grant access, read cached feedback, or invoke service-only budgeting/cache RPCs.

`ai_admin_access` is independent of free/pro/all content access. Grant or revoke it only through trusted database administration. The hosted API lives at `/functions/v1/ai-practice`; the OpenAI key stays in **Supabase Edge Function Secrets** as `OPENAI_API_KEY`. No key belongs in a `VITE_` variable or GitHub Pages secret. Set `AI_PRACTICE_LIVE_ENABLED=false` on the function to disable paid calls. Optional model overrides are `AI_PRACTICE_MODEL` and `AI_TRANSCRIPTION_MODEL`.

Provider request caps are atomic and durable: 120/hour and 200/day per admin; 300/hour and 600/day across the service. These are request limits, not dollar budgets. Configure project spending controls separately in OpenAI. Completed assessments and delivery reviews replay without another model request. Reusing an attempt ID with different wording/audio fails; concurrent requests use leases and cannot overwrite each other.

Structured feedback is cached per owner for 15 minutes so later function processes can produce supervisor speech and safely retry. A five-minute Cron job physically removes expired cache rows, old usage buckets and this job’s old run history. Cache rows contain feedback/evidence snippets and content hashes, not full therapist responses or audio. Service-only tables intentionally have RLS with no client policies/grants.

The app holds the original recording only in page memory while its attempt is open, clearing it on retry, next item, pause, cancellation, account change or end. Explicit JSON downloads contain responses and optional observations, never recordings. AI rounds do not write regular account progress ratings. OpenAI receives text and optional recordings for the requested operation; `store:false` does not guarantee zero provider retention. [OpenAI data controls](https://developers.openai.com/api/docs/guides/your-data)

## Local development and deployment

Use `.env.local` for the existing Supabase public URL/key. Copy `server/ai.env.example` to ignored `.env.ai.local`, set `OPENAI_API_KEY` and `AI_PRACTICE_LIVE_ENABLED=true`. Existing admin sign-in is required locally too.

```sh
npm run dev
npm run ai:server
```

The Node 24 adapter binds to `127.0.0.1:5555` and Vite proxies `/api/ai-practice`. It verifies admin access and accepts only configured loopback origins. Its cache/budget is in process memory; production uses the database. Without a configured provider, admins can try an explicitly labelled scripted preview with no scores or paid calls. Device speech synthesis in preview does not demonstrate the live client voices.

For an Edge release, run `npm run ai:build:edge`, deploy `supabase/functions/ai-practice` with JWT verification enabled, and apply the checked-in migrations before publishing the frontend. The generated bundle compresses the static authored curriculum and is ignored by Git. Curriculum/server changes require redeploying the Edge Function as well as the frontend; the Pages workflow deploys only the frontend.

## Verification

`npm test` validates content, runs 113 unit/protocol tests and 12 isolated SQL suites. AI tests cover canonical material, stable voices/mood, score/evidence validation, WAV bounds, audio result validation, account isolation, current admin authorization, idempotency, pending leases and durable request limits. SQL checks prove users cannot grant themselves admin access or call the service-only RPCs, and revocation takes effect without token refresh. The isolated database executes the registered cleanup command; production Cron registration is checked separately.

Playwright CLI harnesses `check-ai-practice-flows.js`, `check-ai-practice-library.js`, `check-ai-practice-recovery.js` and `check-ai-delivery-flows.js` mock external calls. They cover both languages, phone widths 320/390, doubled text, preparation, recording/correction, replay, real WAV conversion, failed review retry, exports, cancellation and anonymous/non-admin gating even with forged metadata. Mocks establish workflow behavior, not live quality.

Bounded live checks use only the explicitly authorized dedicated test accounts, generated sign-in credentials retained in memory, and fictional responses. They never print links, JWTs or keys:

```sh
npm run ai:check:live -- --live
npm run ai:check:live -- --live --expanded
npm run ai:check:admin -- --live
```

The first makes at most five provider calls, expanded makes four, and admin makes seven using existing synthetic controlled speech clips. Reports/audio remain under ignored `output/playwright/`. Set `AI_PRACTICE_SMOKE_BASE=https://kpzmjnwwbxweevloiqiy.supabase.co/functions/v1/ai-practice` to target the deployed service. These checks are excluded from ordinary tests. Offline `npm run ai:evaluate` validates 28 provisional calibration examples; paid `--live` compares model output with author-labelled ranges, not independent clinical ratings.
