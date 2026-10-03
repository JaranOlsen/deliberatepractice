// Each call summarizes one rating source. Unknown skills and invalid scores do not count.
export const RECENT_RATING_DAYS = 90;
export const RECENT_RATINGS_PER_LEVEL = 8;
const MS_PER_DAY = 86400000;

function getRatingItemCount(rating) {
  const count = Number(rating?.item_count);
  return Number.isFinite(count) && count > 0 ? Math.max(1, Math.round(count)) : 1;
}

export function validRatings(ratings, skillOrder) {
  const seen = new Set();
  return (ratings ?? []).filter(rating => {
    const score = Number(rating?.score);
    if (!Number.isFinite(score) || score < 1 || score > 5 || !skillOrder.includes(rating?.skill_id)) return false;
    if (rating.id && seen.has(rating.id)) return false;
    if (rating.id) seen.add(rating.id);
    return true;
  }).sort((a,b) => (Date.parse(b.created_at) || 0) - (Date.parse(a.created_at) || 0)
    || String(b.id ?? '').localeCompare(String(a.id ?? '')));
}

export function ratingLevel(rating) {
  return ['easy','moderate','hard'].includes(rating.difficulty) ? rating.difficulty : 'unspecified';
}

// A bounded current profile prevents a large historic volume dominating new work.
// Undated or stale evidence belongs to history, never to a current-level estimate.
export function recentRatings(ratings, skillOrder, nowMs = Date.now()) {
  const counts = new Map(), cutoff = nowMs - RECENT_RATING_DAYS * MS_PER_DAY;
  return validRatings(ratings, skillOrder).filter(rating => {
    const time = Date.parse(rating.created_at);
    if (!Number.isFinite(time) || time < cutoff || time > nowMs) return false;
    const key = `${rating.skill_id}:${ratingLevel(rating)}`, n = counts.get(key) ?? 0;
    if (n >= RECENT_RATINGS_PER_LEVEL) return false;
    counts.set(key,n+1); return true;
  });
}

export function practiceSuggestion(ratings, skillOrder) {
  const summary = summarizeRatings(ratings, skillOrder);
  const rated = summary.skills.filter(entry => entry.latest);
  if (!rated.length) return {skillId:skillOrder[0], reason:'new'};
  const oldest = [...rated].sort((a,b) => Date.parse(a.latest.created_at)-Date.parse(b.latest.created_at))[0];
  return {skillId:oldest.skillId, reason:'revisit', latest:oldest.latest};
}

// Only explicitly stored round identities group checkpoints. Older rows stay individual.
export function groupRatingHistory(ratings, skillOrder) {
  const groups = new Map(), entries = [];
  for (const rating of validRatings(ratings, skillOrder)) {
    if (!rating.parent_round_id || !Number.isInteger(rating.set_number) || rating.set_number < 1 || rating.set_number > 4) {
      entries.push({ratings:[rating], latest:rating}); continue;
    }
    const key = JSON.stringify([rating.parent_round_id,rating.skill_id,rating.case_id,rating.source,rating.language_id,rating.difficulty]);
    let group = groups.get(key);
    if (!group) { group = {roundId:rating.parent_round_id,ratings:[],latest:rating}; groups.set(key,group); entries.push(group); }
    group.ratings.push(rating);
  }
  for (const entry of entries) entry.ratings.sort((a,b) => (a.set_number ?? 0)-(b.set_number ?? 0));
  return entries;
}

function createRatingSummary(extra = {}) {
  return {
    ...extra,
    total: 0,
    weight: 0,
    count: 0,
    latest: null,
    ratingCount: 0
  };
}

function addRatingToSummary(summary, score, itemCount, rating) {
  const timestamp = Date.parse(rating.created_at);
  if (Number.isFinite(timestamp) && (!summary.latest || timestamp > Date.parse(summary.latest.created_at))) {
    summary.latest = rating;
  }
  const weightedItems = itemCount;
  summary.total += score * weightedItems;
  summary.weight += weightedItems;
  summary.count += itemCount;
  summary.ratingCount += 1;
}

function finalizeRatingSummary(entry) {
  return {
    ...entry,
    average: entry.weight ? entry.total / entry.weight : null
  };
}

export function summarizeRatings(ratings, skillOrder) {
  const bySkill = new Map();
  const byDifficulty = new Map();
  const bySkillDifficulty = new Map();
  const overall = createRatingSummary();
  validRatings(ratings, skillOrder).forEach((rating) => {
    const score = Number(rating?.score);
    if (!Number.isFinite(score) || score < 1 || score > 5 || !skillOrder.includes(rating?.skill_id)) return;
    const itemCount = getRatingItemCount(rating);
    addRatingToSummary(overall, score, itemCount, rating);
    const skillId = rating.skill_id ?? "";
    if (skillId) {
      const skillSummary = bySkill.get(skillId) ?? createRatingSummary({ skillId });
      addRatingToSummary(skillSummary, score, itemCount, rating);
      bySkill.set(skillId, skillSummary);
    }
    const difficulty = rating.difficulty ?? "";
    if (difficulty) {
      const difficultySummary = byDifficulty.get(difficulty) ?? createRatingSummary({ difficulty });
      addRatingToSummary(difficultySummary, score, itemCount, rating);
      byDifficulty.set(difficulty, difficultySummary);
    }
    if (skillId && difficulty) {
      const key = `${skillId}:${difficulty}`;
      const skillDifficultySummary = bySkillDifficulty.get(key) ?? createRatingSummary({ skillId, difficulty });
      addRatingToSummary(skillDifficultySummary, score, itemCount, rating);
      bySkillDifficulty.set(key, skillDifficultySummary);
    }
  });
  const difficultyOrder = ["easy", "moderate", "hard"];
  return {
    overall: finalizeRatingSummary(overall),
    skills: skillOrder
      .map((skillId) => bySkill.get(skillId) ?? createRatingSummary({ skillId }))
      .map(finalizeRatingSummary),
    difficulties: difficultyOrder
      .map((difficulty) => byDifficulty.get(difficulty) ?? createRatingSummary({ difficulty }))
      .map(finalizeRatingSummary),
    skillDifficulties: skillOrder.map((skillId) => ({
      skillId,
      difficulties: difficultyOrder.map((difficulty) => {
        const entry = bySkillDifficulty.get(`${skillId}:${difficulty}`) ?? createRatingSummary({ skillId, difficulty });
        return finalizeRatingSummary(entry);
      })
    })).filter((row) => row.difficulties.some((entry) => entry.count > 0))
  };
}

// Comparison uses the union of rated skills. Missing values within a level
// remain gaps, so easier practice cannot stand in for hard data.
export function createProgressRadar(ratings, skillOrder) {
  const summary = summarizeRatings(ratings, skillOrder);
  const skills = summary.skills.filter(entry => entry.count > 0);
  const levels = ['easy', 'moderate', 'hard', 'unspecified'];
  const series = levels.map(difficulty => {
    const selected = (ratings ?? []).filter(rating => difficulty === 'unspecified'
      ? !levels.slice(0, 3).includes(rating?.difficulty) : rating?.difficulty === difficulty);
    const level = summarizeRatings(selected, skillOrder);
    return {difficulty, ...level.overall,
      values: skills.map(skill => level.skills.find(entry => entry.skillId === skill.skillId))};
  }).filter(entry => entry.count > 0);
  return {skills, series};
}

export function focusProgressRadar(radar, difficulty) {
  const selected = radar.series.find(series => series.difficulty === difficulty);
  if (!selected) return radar;
  const indices = selected.values.flatMap((value,index) => value.count ? [index] : []);
  return {skills: indices.map(index => radar.skills[index]),
    series: radar.series.map(series => ({...series, values:indices.map(index => series.values[index])}))};
}
