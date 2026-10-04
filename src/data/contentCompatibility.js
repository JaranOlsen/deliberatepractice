import {CANONICAL_SKILL_ORDER} from './contentMeta.js';
// The core bank is byte-for-byte equivalent (apart from revision) to v3.
// A regression digest guards this exception. Remove it when any of these items change.
export const FOCUSED_CONTENT_COMPATIBILITY = {'2026-10-04-v3': CANONICAL_SKILL_ORDER};
export const V3_CORE_RUNTIME_DIGEST = 'fb363e19f01db9f27f8233753dd144ca2033ed8eb789b93457c3981ecee06b9a';
