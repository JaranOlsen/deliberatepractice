import { existsSync, readFileSync } from "node:fs";

const BASE_COLUMNS = [
  "statement_id",
  "statement_text",
  "suggestion_text",
  "content_revision",
  "track",
  "skill_id",
  "case_id",
  "language_id",
  "order_index",
  "reason",
  "details",
  "created_at"
];

const REVIEW_COLUMNS = [
  ...BASE_COLUMNS,
  "status",
  "resolved_at",
  "resolution_note"
];

function parseEnvFile(path) {
  if (!existsSync(path)) return {};
  const env = {};
  const lines = readFileSync(path, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const match = trimmed.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (!match) continue;
    let value = match[2].trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    env[match[1]] = value;
  }
  return env;
}

function loadEnv() {
  return {
    ...parseEnvFile(".env"),
    ...parseEnvFile(".env.local"),
    ...process.env
  };
}

function getArgValue(name) {
  const index = process.argv.indexOf(name);
  if (index !== -1) return process.argv[index + 1] ?? "";
  const prefix = `${name}=`;
  const arg = process.argv.find((value) => value.startsWith(prefix));
  return arg ? arg.slice(prefix.length) : "";
}

function hasFlag(name) {
  return process.argv.includes(name);
}

function printHelp() {
  console.log(`
Usage:
  npm run feedback:list -- [--limit 25] [--all]
  npm run feedback:resolve -- --statement-id ID --created-at TIMESTAMP [--note TEXT] [--status fixed]
  npm run feedback:delete -- --statement-id ID --created-at TIMESTAMP

Environment:
  Requires VITE_SUPABASE_URL and SUPABASE_SECRET_KEY in .env.local.

Notes:
  feedback:resolve requires the optional review columns from supabase/feedback-review.sql.
  feedback:delete clears the exact row by statement_id and created_at when review columns are absent.
`.trim());
}

function getConfig() {
  const env = loadEnv();
  const url = String(env.VITE_SUPABASE_URL ?? "").replace(/\/+$/, "");
  const key = env.SUPABASE_SECRET_KEY || env.SUPABASE_SERVICE_ROLE_KEY || "";
  if (!url || !key) {
    throw new Error("Missing VITE_SUPABASE_URL or SUPABASE_SECRET_KEY in .env.local");
  }
  return { url, key };
}

function requestHeaders(key, extra = {}) {
  return {
    apikey: key,
    Authorization: `Bearer ${key}`,
    ...extra
  };
}

function rowFilter() {
  const statementId = getArgValue("--statement-id");
  const createdAt = getArgValue("--created-at");
  if (!statementId || !createdAt) {
    throw new Error("Both --statement-id and --created-at are required.");
  }
  return `statement_id=eq.${encodeURIComponent(statementId)}&created_at=eq.${encodeURIComponent(createdAt)}`;
}

async function supabaseRequest(path, { method = "GET", body, prefer } = {}) {
  const { url, key } = getConfig();
  const headers = requestHeaders(key, {
    ...(body ? { "Content-Type": "application/json" } : {}),
    ...(prefer ? { Prefer: prefer } : {})
  });
  const response = await fetch(`${url}${path}`, {
    method,
    headers,
    ...(body ? { body: JSON.stringify(body) } : {})
  });
  const text = await response.text();
  if (!response.ok) {
    const err = new Error(text || `Request failed with ${response.status}`);
    err.status = response.status;
    err.body = text;
    throw err;
  }
  return text ? JSON.parse(text) : null;
}

function isMissingReviewColumnError(err) {
  const message = String(err?.body ?? err?.message ?? "");
  return message.includes("42703") || message.includes("resolution_note") || message.includes("status");
}

async function listFeedback() {
  const limit = Number(getArgValue("--limit") || 25);
  const all = hasFlag("--all");
  const order = "order=created_at.desc";
  const limitParam = `limit=${Number.isFinite(limit) && limit > 0 ? Math.floor(limit) : 25}`;

  let rows;
  let hasReviewColumns = true;
  try {
    rows = await supabaseRequest(
      `/rest/v1/feedback?select=${REVIEW_COLUMNS.join(",")}&${order}&${limitParam}`
    );
  } catch (err) {
    if (!isMissingReviewColumnError(err)) throw err;
    hasReviewColumns = false;
    rows = await supabaseRequest(
      `/rest/v1/feedback?select=${BASE_COLUMNS.join(",")}&${order}&${limitParam}`
    );
  }

  const visibleRows = hasReviewColumns && !all
    ? rows.filter((row) => !["fixed", "dismissed"].includes(row.status))
    : rows;

  console.log(JSON.stringify({
    hasReviewColumns,
    count: visibleRows.length,
    rows: visibleRows
  }, null, 2));
}

async function resolveFeedback() {
  const status = getArgValue("--status") || "fixed";
  const note = getArgValue("--note") || "Fixed in content source.";
  const payload = {
    status,
    resolved_at: new Date().toISOString(),
    resolution_note: note
  };

  try {
    const rows = await supabaseRequest(`/rest/v1/feedback?${rowFilter()}`, {
      method: "PATCH",
      body: payload,
      prefer: "return=representation"
    });
    console.log(JSON.stringify({ updated: rows.length, rows }, null, 2));
  } catch (err) {
    if (!isMissingReviewColumnError(err)) throw err;
    console.error(
      "Feedback review columns are missing. Run supabase/feedback-review.sql in Supabase, or use npm run feedback:delete -- --statement-id ... --created-at ..."
    );
    process.exit(2);
  }
}

async function deleteFeedback() {
  const rows = await supabaseRequest(`/rest/v1/feedback?${rowFilter()}`, {
    method: "DELETE",
    prefer: "return=representation"
  });
  console.log(JSON.stringify({ deleted: rows.length, rows }, null, 2));
}

async function main() {
  const command = process.argv[2];
  if (!command || command === "help" || command === "--help" || command === "-h") {
    printHelp();
    return;
  }
  if (command === "list") {
    await listFeedback();
    return;
  }
  if (command === "resolve") {
    await resolveFeedback();
    return;
  }
  if (command === "delete") {
    await deleteFeedback();
    return;
  }
  throw new Error(`Unknown command: ${command}`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
