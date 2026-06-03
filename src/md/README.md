# Source Map

This directory is editorial/reference material, not runtime app data. The app imports from `src/data`; build scripts read only the files noted below.

## Required Build Source

- `EFT_Exercises_Extracted.md`: required by `scripts/build-content-artifacts.mjs`. This is the benchmark source for the 12 production skills and should be treated as the gold standard for marker fit, skill boundaries, difficulty progression, and sample response behavior. The artifact builder strips known OCR/page-footer/footnote debris when generating `src/data/benchmarkBank.js`.

## Editorial Sources To Keep

- `instructions.md`: validation index and skill-boundary audit.
- `instructions/1.md` through `instructions/12.md`: curated instruction notes aligned to Goldman Exercises 1-12.
- `instructions/13.md`: local note for the experimental `empathic-refocusing` skill. This skill is not in the production benchmark order.
- `dossiers.md`: case formulation and voice source. Use this when revising `src/data/cases.js`, `src/data/caseBibles.js`, and case-specific statements/translations.

## Secondary References

- `Deliberate Practice in Emotion-Focused Therapy.txt`: raw restored reference/OCR text. It is not imported or parsed by the app. Use it only to check extraction errors or locate context that is missing from `EFT_Exercises_Extracted.md`.
- `interventions.md`: older intervention guide. It overlaps with `instructions/` and `src/data/skills.js`; use it as a secondary wording source only, not as the authority for production skill boundaries.
- `concepts.md`: broad EFT/CAMS theory note. It contains OCR artifacts and should be cleaned before being used as an authoritative source.

## Editing Rule

For content quality work, stabilize the English marker first, then the suggested response, then the Norwegian localization. Regenerate artifacts with `npm run build:content` and validate with `npm test`.
