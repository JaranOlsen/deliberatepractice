// Fixed customer-facing units, independent of provider token accounting.
export const AI_CREDITS_PROTOCOL = 'practice-ai-credits-v1';
export const AI_MONTHLY_CREDITS = 120;
export const AI_CREDIT_COSTS = Object.freeze({assess:1, transcribe:1, delivery:3, speech_client:1, speech_supervisor:1});
export const AI_CREDIT_PACKS = Object.freeze({small:{credits:120,amount:5900},large:{credits:360,amount:14900}});
