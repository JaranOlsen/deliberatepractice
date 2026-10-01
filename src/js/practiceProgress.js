// Each call summarizes one rating source. Unknown skills and invalid scores do not count.
const RATING_RECENCY_HALF_LIFE_DAYS = 90;
const RATING_MIN_RECENCY_WEIGHT = 0.25;
const MS_PER_DAY = 24 * 60 * 60 * 1000;

function getRatingItemCount(rating) {
  const itemCount = Number(rating?.item_count);
  if (Number.isFinite(itemCount) && itemCount > 0) {
    return Math.max(1, Math.round(itemCount));
  }
  return 1;
}

function getRatingRecencyWeight(rating, nowMs) {
  const createdMs = Date.parse(rating?.created_at ?? "");
  if (!Number.isFinite(createdMs)) return 1;
  const ageDays = Math.max(0, (nowMs - createdMs) / MS_PER_DAY);
  return Math.max(
    RATING_MIN_RECENCY_WEIGHT,
    Math.pow(0.5, ageDays / RATING_RECENCY_HALF_LIFE_DAYS)
  );
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

function addRatingToSummary(summary, score, itemCount, recencyWeight, rating) {
  const timestamp = Date.parse(rating.created_at);
  if (Number.isFinite(timestamp) && (!summary.latest || timestamp > Date.parse(summary.latest.created_at))) {
    summary.latest = rating;
  }
  const weightedItems = itemCount * recencyWeight;
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

export function summarizeRatings(ratings, skillOrder, nowMs = Date.now()) {
  const bySkill = new Map();
  const byDifficulty = new Map();
  const bySkillDifficulty = new Map();
  const overall = createRatingSummary();
  (ratings ?? []).forEach((rating) => {
    const score = Number(rating?.score);
    if (!Number.isFinite(score) || score < 1 || score > 5 || !skillOrder.includes(rating?.skill_id)) return;
    const itemCount = getRatingItemCount(rating);
    const recencyWeight = getRatingRecencyWeight(rating, nowMs);
    addRatingToSummary(overall, score, itemCount, recencyWeight, rating);
    const skillId = rating.skill_id ?? "";
    if (skillId) {
      const skillSummary = bySkill.get(skillId) ?? createRatingSummary({ skillId });
      addRatingToSummary(skillSummary, score, itemCount, recencyWeight, rating);
      bySkill.set(skillId, skillSummary);
    }
    const difficulty = rating.difficulty ?? "";
    if (difficulty) {
      const difficultySummary = byDifficulty.get(difficulty) ?? createRatingSummary({ difficulty });
      addRatingToSummary(difficultySummary, score, itemCount, recencyWeight, rating);
      byDifficulty.set(difficulty, difficultySummary);
    }
    if (skillId && difficulty) {
      const key = `${skillId}:${difficulty}`;
      const skillDifficultySummary = bySkillDifficulty.get(key) ?? createRatingSummary({ skillId, difficulty });
      addRatingToSummary(skillDifficultySummary, score, itemCount, recencyWeight, rating);
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
export function createProgressRadar(ratings, skillOrder, nowMs = Date.now()) {
  const summary = summarizeRatings(ratings, skillOrder, nowMs);
  const skills = summary.skills.filter(entry => entry.count > 0);
  const levels = ['easy', 'moderate', 'hard', 'unspecified'];
  const series = levels.map(difficulty => {
    const selected = (ratings ?? []).filter(rating => difficulty === 'unspecified'
      ? !levels.slice(0, 3).includes(rating?.difficulty) : rating?.difficulty === difficulty);
    const level = summarizeRatings(selected, skillOrder, nowMs);
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
