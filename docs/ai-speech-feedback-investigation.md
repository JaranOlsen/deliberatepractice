# Therapist speech feedback investigation

Date: 6 October 2026. Branch: `codex/ai-practice-pilot`. No production or database changes.

## Current behavior and feasible API route

In the app, therapist speech is recorded, transcribed with `gpt-transcribe`, offered for correction, then assessed as text by GPT-6.1 Sol. Its 1–5 rating covers wording and expressed meaning. The supervisor does not hear the recording, so the rating cannot establish pace, pauses, vocal intonation or responsiveness in timing.

Direct audio review is technically feasible. Audio-capable Chat Completions accepts WAV or MP3 input, and `gpt-audio-1.5` supports audio input and function calling. We successfully sent audio itself, without a therapist transcript, and received bounded observations about delivery. [Audio input guide](https://developers.openai.com/api/docs/guides/audio-chat-completions), [GPT Audio 1.5](https://developers.openai.com/api/docs/models/gpt-audio-1.5)

This route fits review of a completed practice attempt. A continuous voice conversation would need a separate Realtime design, including interruptions and turn handling. [Audio API options](https://developers.openai.com/api/docs/guides/audio)

## Experiment and findings

All inputs were synthetic speech about the fictional Sara case. No user recordings or account ratings were used. The same therapist wording was spoken in both samples:

> You got through the workday, and then the pain of missing him caught up with you.

Two `gpt-4o-mini-tts` Cedar clips were generated with measured versus brisk delivery instructions. The reviewer received the fictional client context, the audio, and instructions to report only audible pace, pauses, intonation or volume, one strength, one small adjustment and a limitation. It was forbidden to infer sincerity, authenticity, diagnosis, accent quality, client reaction or exact timings. No score was requested.

Both reviews returned usable function arguments. The provider sometimes returned `finish_reason: stop` alongside the function call, so the script validates the named function arguments rather than assuming a particular finish reason. The generated clips were close in duration and produced generic feedback; that pair could not establish sensitivity to a delivery change.

A second test changed tempo on the same clip with FFmpeg’s pitch-preserving `atempo`, creating a clearer controlled difference:

| Sample | Measured duration | Reviewer’s pace description |
| --- | --- | --- |
| Slowed to 0.65× | 7.067 seconds | Moderately slow |
| Sped up to 1.8× | 2.557 seconds | Measured and steady, not rushed |

The reviewer suggested adding pauses in both samples. Its characterization of the much faster sample was not sufficiently useful to support a pace score. These are only two synthetic clips: they do not demonstrate that the model cannot hear speed, nor establish reliability on human English/Norwegian speech. Artificial tempo changes can also introduce artifacts. The evidence supports a working audio path, with uncertain coaching accuracy.

Reports, synthetic audio and raw provider responses remain in the Git-ignored `output/playwright/ai-delivery-research/` directory, with owner-only file permissions. The application does not invoke this research script.

## Recommended next implementation

Keep the existing wording score separate. Add an explicitly experimental **Delivery** note for spoken attempts, initially with no delivery score:

1. Keep the recording available for replay while the attempt is open. Let the user choose audio review, with the destination and purpose explained before sending it.
2. Convert browser WebM/MP4 recordings to a supported audio format, for example decoded mono PCM in a WAV container. Bound duration and size, handle permission denial, and clear local recordings on cancellation/end.
3. Ground observations in measurable duration, speaking rate and pauses where reliably extractable. Treat these as descriptions, not a universal ideal speed. Transcript errors and silence detection must be accounted for.
4. Ask an audio reviewer for brief observations with uncertainty and abstention on poor audio. Give it the current client statement and skill, without treating the recorded words as instructions.
5. Let the wording supervisor combine those observations and metrics into one concrete delivery suggestion while retaining separate wording evidence and score. Preserve first-attempt/retry comparisons and model identifiers.

A single therapist clip cannot establish response latency, interruption behavior or whether the client felt understood. Those require client audio/timing context and, for the client’s experience, direct feedback. “Authenticity” should not be a scored internal trait: the system can describe observable delivery or its possible listener effect without claiming the therapist’s feelings are genuine.

Before introducing a delivery score, build a held-out collection of consented human practice recordings in English and Norwegian, with varied accents, microphones and background conditions. Have independent supervisors judge the specific delivery feedback and disagreements, including deliberate changes in pace, pause placement and intonation. Compare audio-based coaching with transcript-only feedback and simple measured features. Evaluate consistency and usefulness, not just structured output validity. The 16 new wording rubrics need their own broader human calibration as well.

## Reproduce the bounded research check

With the already configured local `.env.ai.local` and paid testing explicitly enabled:

```sh
npm run ai:research:delivery -- --live
```

This attempts at most four provider calls: two speech generations and two audio reviews. To reuse generated clips, pass `--reuse-generated`. To repeat the tempo test, first create the controlled samples with an installed FFmpeg:

```sh
ffmpeg -y -i output/playwright/ai-delivery-research/measured.wav -filter:a atempo=0.65 output/playwright/ai-delivery-research/measured-controlled.wav
ffmpeg -y -i output/playwright/ai-delivery-research/measured.wav -filter:a atempo=1.8 output/playwright/ai-delivery-research/brisk-controlled.wav
npm run ai:research:delivery -- --live --controlled-tempo
```

The controlled check attempts at most two audio review calls. A passed report confirms API/shape checks only. The request uses `store: false`; provider retention still depends on endpoint and account controls. [OpenAI data controls](https://developers.openai.com/api/docs/guides/your-data)
