// Keyset pagination tolerates new inserts ahead of the cursor without shifting pages.
// Continue until empty, even if the server imposes a smaller row limit.
export async function collectRatingPages(fetchPage) {
  const rows = [], seen = new Set(); let cursor = null;
  while (true) {
    const page = await fetchPage(cursor);
    if (!Array.isArray(page)) throw new Error('Invalid rating history');
    if (!page.length) return rows;
    for (const row of page) {
      if (!Number.isFinite(Date.parse(row?.created_at)) || !row?.id || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(row.id) || !/^\d{4}-\d\d-\d\dT[\d:.+Z-]+$/.test(row.created_at ?? '')) throw new Error('Invalid rating cursor');
      if (!seen.has(row.id)) { seen.add(row.id); rows.push(row); }
    }
    const last = page.at(-1);
    if (cursor && (Date.parse(last.created_at) > Date.parse(cursor.created_at)
      || (last.created_at === cursor.created_at && last.id >= cursor.id))) throw new Error('Rating history did not advance');
    cursor = {id:last.id,created_at:last.created_at};
  }
}
