-- Correct only the new server catalog introduced by sponsored_room_content.
-- These are the unchanged tiers in origin/main's curriculum manifest.
-- Read-only audit: all 22 existing rooms are expired; no current room is affected.
-- No grants, subscriptions, membership, ratings, or existing lease values change.
update dp_private.content_cases set premium=case_id in
 ('case-laura','case-carlos','case-nina','case-aisha','case-david','case-marcus');
