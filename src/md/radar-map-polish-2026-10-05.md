# Radar map and practice layout polish

The progress radar now gives each of the sixteen skills a fixed position at equal 22.5-degree intervals. Following is on the left, process guiding on the right, exploring above and supporting below. Four short English/Norwegian corner labels each use two lines and a 45-degree tilt. They scale with the chart so they fit phones and enlarged text. Boundary skills sit between regions; these positions organise the curriculum rather than measure therapist personality. Self-awareness sits near following/supporting as a foundation for the whole repertoire.

Changing rating source, difficulty, coverage or period never redistributes existing positions. Unrated skill labels and spokes remain omitted. Missing values stay gaps; only adjacent measured skills connect, and a filled profile requires measurements for the full map. The existing score aggregation, recent-evidence window and difficulty colours remain in use.

Individual focused and mastery practice show the client statement before the practice focus and reflection/help. Room return actions have spacing below the format picker. Focused practice counters show only the current item out of the total, as does the client in separate-device and shared mastery practice.

## Demonstration data

The four authorised test accounts now have different synthetic profiles: strong following, strong guiding, balanced intermediate performance, and uneven beginner performance with higher self-ratings. Each covers all sixteen skills at Easy, Moderate and Hard in both rating sources. Older self-rated rounds let the recent/all-history comparison demonstrate improvement.

The import contains 1,792 ratings, 448 per account. Ratings use the current five-point rubric and valid statements/criteria from the current focused banks, with four three-item checkpoints per round. Rating authors, source and round identities are separate. The old 1,314 demonstration records were backed up and replaced by their exact IDs; six recent practice records remain. Backup and demo manifests stay in the ignored local browser-output directory.

The hosted import's count and checksum match the prepared ratings, including scores, skills, difficulty, source, round/set identities and therapist/rater attribution. No schema or permission changes were made. Browser previews use synthetic fixtures matching this verified import, rather than exporting unrelated account history or creating further sign-in sessions.

An additive mastery import supplies 18 complete rounds per source per account: 576 checkpoint ratings across 144 rounds. It covers every current mastery exercise, all three difficulties and both languages. Scores follow the focused demo profiles with variation between sets and a modest reduction for switching skills. Self and observer ratings belong to separate round identities and retain the correct authors. Existing ratings were preserved.

The hosted mastery import has the same count and checksum as the prepared fixture. Every set's three scene IDs, skill IDs, case and difficulty match the hosted exercise catalog. All rounds have four checkpoints and twelve rated scenes. Local manifests identify exactly the inserted demo IDs.

## Verification

- 76 unit tests and 11 isolated SQL suites pass, including fixed-position coverage, shuffled-source association and missing values.
- Production build and bundled Supabase configuration verification pass.
- All four demo profiles pass at 320px and 390px in English and Norwegian, with both sources and all difficulty selections: 128 combinations. Labels stay within bounds without overlap, positions remain stable, and enlarged text fits the progress modal.
- All four diagonal corner labels have two lines, stay inside the chart and do not overlap skill labels. Every consecutive spoke, including the final-to-first interval, is separated by 22.5 degrees.
- English/Norwegian mastery histories for all four accounts show twelve recent complete rounds, four checkpoint scores and the correct source-specific round average, with no phone overflow.
- Room return spacing, individual statement order and the exact `9 of 12` / `9 av 12` counter pass on phones.
- Progress regression passes sparse/full profiles, no connections across missing regions, source separation, recency, history, focus handling, refresh errors and stale-request isolation.
- Six individual/shared-pair/shared-group combinations pass focused and complete mastery workflows at enlarged phone text, including 24 mastery checkpoints.
- Five-participant group regression passes the simplified client counter, role-specific preparation, pair self-assessment, observer control transfer, rotation, reconnect and Norwegian self-awareness.
- English/Norwegian radar screenshots were inspected directly.
