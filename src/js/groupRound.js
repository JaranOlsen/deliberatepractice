// A complete group round keeps its roles for four sets of three unique items.
export const GROUP_ROUND_SIZE = 12;
export const GROUP_SET_SIZE = 3;

export function groupSetProgress(ids, index, completed = [], skipped = []) {
  const itemIndex = Math.max(0, Math.min(index, Math.max(ids.length - 1, 0)));
  const start = Math.floor(itemIndex / GROUP_SET_SIZE) * GROUP_SET_SIZE;
  const setIds = ids.slice(start, start + GROUP_SET_SIZE);
  const done = new Set(completed), passed = new Set(skipped);
  return {
    number: Math.floor(start / GROUP_SET_SIZE) + 1,
    total: Math.ceil(ids.length / GROUP_SET_SIZE),
    ids: setIds,
    completed: setIds.filter(id => done.has(id)),
    skipped: setIds.filter(id => passed.has(id)),
    resolved: setIds.length > 0 && setIds.every(id => done.has(id) || passed.has(id)),
    last: start + GROUP_SET_SIZE >= ids.length
  };
}
