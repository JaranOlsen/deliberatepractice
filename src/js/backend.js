"use strict";

// Lightweight helpers to talk to Supabase REST without extra deps.
const SUPABASE_URL = normalizeSupabaseUrl(import.meta.env.VITE_SUPABASE_URL ?? "");
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

function normalizeSupabaseUrl(value) {
  return String(value ?? "").trim().replace(/\/+$/, "");
}

function hasSupabaseConfig() {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
}

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
