# Streamlined AI options and room entry

Supervisor feedback is text only: neither wording nor delivery review generates
supervisor speech. This removes one credit from each assessed response. With
client audio, transcription and delivery review, a new spoken item uses up to
six credits; a retry that reuses its client audio uses five. Written feedback
starts at one credit. Individual action prices are unchanged.

Transcript review defaults on, including a one-time upgrade of the previous
automatic-feedback default. Users can opt out, and the opt-out persists. Client
voice defaults off for Write and on for Speak; explicit choices are remembered
independently for each mode and account. The requested evocative-delivery cue
and replay-cost sentence are removed. The home subtitle deliberately breaks
before the therapy method in English and Norwegian.

Create room immediately creates and opens the room. A signed-out host goes
through sign-in and then automatically continues creation. The host initially
occupies Therapist and can choose another role inside the room. Creation uses
the existing stable request UUID, with a retry shown only after an error.
Leaving before asynchronous configuration completes cancels creation.

The role dropdown sends its selection immediately. It stays disabled while a
request is uncertain or the connection is stale. An occupied/rejected choice
returns to the confirmed role, and uncertain requests retain their original
command UUID for retry. Server role uniqueness and readiness checks are
unchanged. The extra Change role button is removed.

Validation: 154 unit/protocol tests, 18 isolated SQL suites, production build;
English/Norwegian AI flows at 320/390px; home subtitle at 320/390/1280px and
doubled text; actual isolated four-person SQL room flows with simultaneous role
claims, missing roles, four ratings, pair behavior and host transfer; SDK
sign-in followed by room creation, lost creation/role responses and cancelled
configuration. No live AI calls, emails, payments or production data writes
were needed for these changes.

Existing Edge endpoints remain compatible with older open clients. This release
changes the client UI only and needs no database migration or billing setup.
