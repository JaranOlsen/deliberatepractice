"use strict";

import {collectRatingPages} from './ratingHistoryPages.js';

import {buildAuthRedirect} from './roomInvite.js';

// Anonymous feedback/access-code calls still use direct REST so their current
// behavior and RLS assumptions do not change.
const SUPABASE_URL = normalizeSupabaseUrl(import.meta.env.VITE_SUPABASE_URL ?? "");
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";
let supabaseClient = null;
let supabaseClientPromise = null;
let historyColumnsAvailable = true;
let historyRatingRpcAvailable = true;

function normalizeSupabaseUrl(value) {
  return String(value ?? "").trim().replace(/\/+$/, "");
}

function hasSupabaseConfig() {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
}

async function getSupabaseClient() {
  if (!hasSupabaseConfig()) {
    throw new Error("Missing Supabase configuration");
  }
  if (!supabaseClient) {
    if (!supabaseClientPromise) {
      supabaseClientPromise = import("@supabase/supabase-js").then(({ createClient }) => {
        supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
          auth: {
            autoRefreshToken: true,
            detectSessionInUrl: true,
            persistSession: true
          }
        });
        return supabaseClient;
      });
    }
    return supabaseClientPromise;
  }
  return supabaseClient;
}

function getLoadedSupabaseClient() {
  if (!supabaseClient) {
    throw new Error("Supabase client has not been loaded");
  }
  return supabaseClient;
}

function getAuthRedirectTo() {
  if (typeof window === "undefined") return undefined;
  let storage;
  try { storage = window.localStorage; } catch { /* Private browser settings may block storage. */ }
  return buildAuthRedirect(window.location.href, storage);
}

function normalizeSupabaseError(error) {
  if (!error) return null;
  console.warn("Supabase request failed", {
    code: error.code ?? null,
    message: error.message ?? null,
    details: error.details ?? null,
    hint: error.hint ?? null
  });
  const detail = error.details || error.hint;
  const message = detail ? `${error.message}: ${detail}` : error.message;
  return new Error(message ?? "Supabase request failed");
}

export async function getAuthSession() {
  const supabase = await getSupabaseClient();
  const { data, error } = await supabase.auth.getSession();
  if (error) throw normalizeSupabaseError(error);
  return data?.session ?? null;
}

export async function getAiAccess() {
  try {
    const supabase=await getSupabaseClient();
    const {data,error}=await supabase.rpc('get_ai_access');
    return !error && data===true;
  } catch {return false;}
}

export function aiApiOptions() {
  return {base:import.meta.env.DEV?'/api/ai-practice':`${SUPABASE_URL}/functions/v1/ai-practice`,
    publishableKey:SUPABASE_ANON_KEY,getAccessToken:async()=> (await getAuthSession())?.access_token ?? null};
}

export function onAuthStateChange(callback) {
  const supabase = getLoadedSupabaseClient();
  const { data } = supabase.auth.onAuthStateChange((_event, session) => {
    callback(session ?? null);
  });
  return () => data?.subscription?.unsubscribe?.();
}

export async function signInWithMagicLink(email) {
  const supabase = await getSupabaseClient();
  const normalizedEmail = String(email ?? "").trim().toLowerCase();
  const { error } = await supabase.auth.signInWithOtp({
    email: normalizedEmail,
    options: {
      emailRedirectTo: getAuthRedirectTo()
    }
  });
  if (error) throw normalizeSupabaseError(error);
  return true;
}

export async function signOut() {
  const supabase = await getSupabaseClient();
  const { error } = await supabase.auth.signOut();
  if (error) throw normalizeSupabaseError(error);
  return true;
}

export async function ensureUserProfile(displayName = null) {
  const supabase = await getSupabaseClient();
  const { data, error } = await supabase.rpc("ensure_user_profile", {
    input_display_name: displayName
  });
  if (error) throw normalizeSupabaseError(error);
  return Array.isArray(data) ? data[0] ?? null : data ?? null;
}

export async function updateUserProfile({ displayName }) {
  const supabase = await getSupabaseClient();
  const { data, error } = await supabase.rpc("ensure_user_profile", {
    input_display_name: displayName
  });
  if (error) throw normalizeSupabaseError(error);
  return Array.isArray(data) ? data[0] ?? null : data ?? null;
}

export async function listPracticeTargets() {
  const supabase = await getSupabaseClient();
  const { data, error } = await supabase.rpc("list_practice_targets");
  if (error) throw normalizeSupabaseError(error);
  return Array.isArray(data) ? data : [];
}

export async function submitPracticeRating(payload) {
  const supabase = await getSupabaseClient();
  const args = {
    input_therapist_user_id: payload.therapistUserId,
    input_source: payload.source,
    input_language_id: payload.languageId,
    input_skill_id: payload.skillId,
    input_case_id: payload.caseId,
    input_statement_id: payload.statementId,
    input_statement_index: payload.statementIndex,
    input_difficulty: payload.difficulty,
    input_score: payload.score,
    input_criteria_tags: payload.criteriaTags,
    input_content_revision: payload.contentRevision,
    input_rating_scope: payload.ratingScope ?? "statement",
    input_completed_statement_ids: payload.completedStatementIds ?? [],
    input_item_count: payload.itemCount ?? null,
    input_client_round_id: payload.roundId ?? null,
    input_practice_mode: payload.practiceMode ?? null,
    input_rating_rubric: payload.ratingRubric ?? null,
    input_parent_round_id: payload.parentRoundId ?? null,
    input_set_number: payload.setNumber ?? null
  };
  let result = await supabase.rpc(historyRatingRpcAvailable ? 'record_practice_rating_with_history' : 'record_practice_rating',
    historyRatingRpcAvailable ? args : Object.fromEntries(Object.entries(args).filter(([key]) => !['input_parent_round_id','input_set_number'].includes(key))));
  // A preview can use the existing database before its additive migration is approved.
  // Retry only a missing RPC, never an authorization or data-validation rejection.
  if (result.error?.code === 'PGRST202' && result.error.message?.includes('record_practice_rating_with_history')) {
    historyRatingRpcAvailable = false;
    const {input_parent_round_id, input_set_number, ...legacyArgs} = args;
    result = await supabase.rpc('record_practice_rating', legacyArgs);
  }
  const {data,error} = result;
  if (error) throw normalizeSupabaseError(error);
  return Array.isArray(data) ? data[0] ?? null : data ?? null;
}

export async function listPracticeRatings({source = 'self'} = {}) {
  if (!['self','observer'].includes(source)) throw new Error('Unknown rating source');
  const supabase = await getSupabaseClient();
  const {data:{user}, error:authError} = await supabase.auth.getUser();
  if (authError) throw new Error('Unable to load ratings');
  if (!user) return [];
  return collectRatingPages(async cursor => {
    const readPage = async withMetadata => {
      let query = supabase.from('practice_ratings')
        .select('id,source,language_id,skill_id,case_id,difficulty,score,item_count,created_at,practice_mode,rating_rubric' + (withMetadata ? ',parent_round_id,set_number' : ''))
        .eq('therapist_user_id',user.id).eq('source',source).eq('rating_rubric','group-skill-v2')
        .order('created_at',{ascending:false}).order('id',{ascending:false}).limit(250);
      if (cursor) query = query.or(`created_at.lt.${cursor.created_at},and(created_at.eq.${cursor.created_at},id.lt.${cursor.id})`);
      return query.abortSignal(AbortSignal.timeout(15000));
    };
    let result = await readPage(historyColumnsAvailable);
    if (result.error?.code === '42703' && /parent_round_id|set_number/.test(result.error.message ?? '')) {
      historyColumnsAvailable = false;
      result = await readPage(false);
    }
    const {data,error} = result;
    if (error) throw new Error('Unable to load ratings');
    return data ?? [];
  });
}

export async function getPracticeGoal({userId, languageId, skillId}) {
  const supabase = await getSupabaseClient();
  const {data, error} = await supabase.from('practice_goals').select('goal_text,updated_at')
    .eq('user_id', userId).eq('language_id', languageId).eq('skill_id', skillId).maybeSingle();
  // Constraint/error details can contain a private note; never log them.
  if (error) throw new Error('Unable to load practice reminder');
  return data?.goal_text ?? '';
}

export async function savePracticeGoal({userId, languageId, skillId, text}) {
  const supabase = await getSupabaseClient();
  const query = text ? supabase.from('practice_goals').upsert({user_id:userId,language_id:languageId,skill_id:skillId,goal_text:text},
    {onConflict:'user_id,language_id,skill_id'}) : supabase.from('practice_goals').delete()
      .eq('user_id', userId).eq('language_id', languageId).eq('skill_id', skillId);
  const {error} = await query;
  if (error) throw new Error('Unable to save practice reminder');
  return text;
}

/*
 * The direct REST helpers below are intentionally separate from the lazy-loaded
 * authenticated client above. Anonymous feedback and access-code redemption
 * should not pay the Supabase Auth bundle cost.
 */
function normalizeAccessLevel(value) {
  return value === "pro" || value === "all" ? value : null;
}

export function isAccessExpired(expiresAt) {
  if (!expiresAt) return false;
  const expiresMs = Date.parse(expiresAt);
  return Number.isFinite(expiresMs) && expiresMs <= Date.now();
}

async function postJson(path, payload) {
  if (!hasSupabaseConfig()) {
    throw new Error("Missing Supabase configuration");
  }
  const response = await fetch(`${SUPABASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Prefer: "return=minimal"
    },
    body: JSON.stringify(payload)
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `Request failed with ${response.status}`);
  }
  return true;
}

async function rpcJson(functionName, payload) {
  if (!hasSupabaseConfig()) {
    throw new Error("Missing Supabase configuration");
  }
  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${functionName}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`
    },
    body: JSON.stringify(payload)
  });
  const text = await response.text();
  if (!response.ok) {
    throw new Error(text || `Request failed with ${response.status}`);
  }
  return text ? JSON.parse(text) : null;
}

function isMissingRpcError(err) {
  const message = String(err?.message ?? "");
  return message.includes("PGRST202") || message.includes("Could not find the function");
}

async function getLegacyEntitlementRows(code) {
  const encoded = encodeURIComponent(code);
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/entitlements?access_code=eq.${encoded}&select=access_level,expires_at`,
    {
      method: "GET",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`
      }
    }
  );
  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `Request failed with ${response.status}`);
  }
  return response.json();
}

/**
 * Persist user feedback about a statement/response.
 * Expects a Supabase table `feedback` with matching columns and RLS policy that allows
 * inserts using the anon key. Recommended columns now include:
 * statement_id, statement_text, suggestion_text, content_revision, track,
 * skill_id, case_id, language_id, order_index, reason, details, user_agent, created_at.
 */
export async function submitFeedback(payload) {
  return postJson("/rest/v1/feedback", payload);
}

/**
 * Redeem an access code to unlock paid content.
 * Expects a security-definer Supabase RPC `redeem_access_code(input_code text)`
 * that returns access_level and expires_at without exposing the entitlements table.
 */
export async function redeemAccessCode(code) {
  const normalizedCode = String(code ?? "").trim();
  let data;
  try {
    data = await rpcJson("redeem_access_code", { input_code: normalizedCode });
  } catch (err) {
    if (!isMissingRpcError(err)) {
      throw err;
    }
    data = await getLegacyEntitlementRows(normalizedCode);
  }
  const rows = Array.isArray(data) ? data : data ? [data] : [];
  if (rows.length === 0) {
    throw new Error("invalid_code");
  }
  const entry = rows[0];
  const accessLevel = normalizeAccessLevel(entry.access_level);
  if (!accessLevel) {
    throw new Error("invalid_code");
  }
  if (isAccessExpired(entry.expires_at)) {
    throw new Error("expired_code");
  }
  return {
    accessLevel,
    expiresAt: entry.expires_at ?? null
  };
}

export function isSupabaseReady() {
  return hasSupabaseConfig();
}

function getUserAgent() {
  if (typeof navigator === "undefined") return null;
  return navigator.userAgent ?? null;
}

function getCountryGuess() {
  if (typeof navigator === "undefined") return null;
  const locale = navigator.language || (Array.isArray(navigator.languages) ? navigator.languages[0] : "");
  if (!locale) return null;
  const parts = locale.split(/[-_]/);
  if (parts.length >= 2 && parts[1]) {
    return parts[1].toUpperCase();
  }
  return null;
}

/**
 * Log any access code attempt (success or failure) for simple counts and geo hints.
 * Expects a Supabase table `access_code_usage` with columns:
 *  access_code (text), status (text), language_id (text), country (text),
 *  user_agent (text), created_at (timestamptz default now()).
 */
export async function logAccessCodeAttempt({ code, status, languageId }) {
  if (!hasSupabaseConfig()) return;
  const payload = {
    access_code: code,
    status,
    language_id: languageId ?? null,
    country: getCountryGuess(),
    user_agent: getUserAgent(),
    created_at: new Date().toISOString()
  };
  try {
    await postJson("/rest/v1/access_code_usage", payload);
  } catch (err) {
    // Logging should never break unlocking; surface quietly.
    console.warn("Failed to log access code usage", err);
  }
}

// Shared rooms use the same authenticated client as account and progress calls.
export async function practiceRoomRpc(name, args) {
  const allowed = ['create_practice_room', 'join_practice_room', 'sync_practice_room', 'command_practice_room', 'prepare_practice_room', 'manage_practice_room'];
  if (!allowed.includes(name)) throw new Error('Unknown room operation');
  const client = await getSupabaseClient();
  const { data, error } = await client.rpc(name, args).abortSignal(AbortSignal.timeout(12000));
  if (error) {
    const failure = new Error(error.message ?? 'Room request failed');
    failure.code = error.code;
    throw failure;
  }
  return data;
}

export async function watchPracticeRoom(roomId, onChange) {
  const client = await getSupabaseClient();
  const channel = client.channel(`practice-room:${roomId}:${crypto.randomUUID()}`)
    .on('postgres_changes', {event: 'UPDATE', schema: 'public', table: 'practice_rooms', filter: `id=eq.${roomId}`}, onChange)
    .subscribe(status => { if (status === 'SUBSCRIBED') onChange(); });
  return () => { client.removeChannel(channel); };
}

// Mastery is deliberately stored/read separately from focused skill progress.
export async function getMasteryCapabilities() {
  const client = await getSupabaseClient();
  const {data,error} = await client.rpc('mastery_capabilities').abortSignal(AbortSignal.timeout(12000));
  if (error?.code === 'PGRST202') return null;
  if (error) throw normalizeSupabaseError(error);
  return data;
}
export async function submitMasteryRating(payload) {
  const client = await getSupabaseClient();
  const {data,error} = await client.rpc('record_mastery_rating', {
    input_language_id: payload.languageId, input_exercise_id: payload.exerciseId,
    input_content_revision: payload.revision, input_parent_round_id: payload.roundId,
    input_set_number: payload.setNumber, input_completed_scene_ids: payload.completedIds,
    input_score: payload.score, input_practice_mode: payload.practiceMode
  }).abortSignal(AbortSignal.timeout(12000));
  if (error) throw normalizeSupabaseError(error);
  return data;
}
export async function listMasteryRatings({source = 'self'} = {}) {
  if (!['self','observer'].includes(source)) throw new Error('Unknown rating source');
  const client = await getSupabaseClient();
  const {data:{user},error:authError} = await client.auth.getUser();
  if (authError) throw new Error('Unable to load mastery history');
  if (!user) return [];
  return collectRatingPages(async cursor => {
    let query = client.from('mastery_ratings').select('id,source,language_id,exercise_id,content_revision,case_id,difficulty,parent_round_id,set_number,completed_scene_ids,practiced_skill_ids,item_count,score,created_at,practice_mode')
      .eq('therapist_user_id',user.id).eq('source',source).order('created_at',{ascending:false}).order('id',{ascending:false}).limit(250);
    if (cursor) query = query.or(`created_at.lt.${cursor.created_at},and(created_at.eq.${cursor.created_at},id.lt.${cursor.id})`);
    const {data,error} = await query.abortSignal(AbortSignal.timeout(15000));
    if (error?.code === 'PGRST205' || error?.code === '42P01') return [];
    if (error) throw new Error('Unable to load mastery history');
    return data ?? [];
  });
}
