// Keep dialogs in the visible part of the screen as browser bars and keyboards move.
// Pinch zoom keeps its normal browser behavior instead of resizing the dialog.
export function visibleScreenBounds() {
  const viewport = window.visualViewport;
  const unzoomed = !viewport || Math.abs(viewport.scale - 1) < 0.01;
  const top = unzoomed ? viewport?.offsetTop ?? 0 : 0;
  const left = unzoomed ? viewport?.offsetLeft ?? 0 : 0;
  const width = unzoomed ? viewport?.width ?? window.innerWidth : window.innerWidth;
  const height = unzoomed ? viewport?.height ?? window.innerHeight : window.innerHeight;
  return {top, left, width, height, right: left + width, bottom: top + height};
}

export function screenSafeInsets() {
  const style = getComputedStyle(document.documentElement);
  return Object.fromEntries(['top', 'right', 'bottom', 'left'].map(side =>
    [side, parseFloat(style.getPropertyValue(`--screen-safe-${side}`)) || 0]));
}

let scheduled = false;
function updateVisibleScreen() {
  scheduled = false;
  const bounds = visibleScreenBounds();
  const values = {
    '--visible-screen-height': bounds.height,
    '--visible-screen-top': bounds.top,
    '--visible-screen-bottom': Math.max(0, window.innerHeight - bounds.bottom),
    '--screen-header-height': document.querySelector('.app-header')?.getBoundingClientRect().height ?? 68,
    '--practice-actions-height': Math.max(0, ...[...document.querySelectorAll('.room-actions')].map(element =>
      getComputedStyle(element).position === 'fixed' ? element.getBoundingClientRect().height : 0))
  };
  const style = document.documentElement.style;
  for (const [name, value] of Object.entries(values)) {
    const pixels = `${value}px`;
    if (style.getPropertyValue(name) !== pixels) style.setProperty(name, pixels);
  }
}
function scheduleVisibleScreen() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(updateVisibleScreen);
}
updateVisibleScreen();
window.addEventListener('resize', scheduleVisibleScreen);
window.visualViewport?.addEventListener('resize', scheduleVisibleScreen);
window.visualViewport?.addEventListener('scroll', scheduleVisibleScreen);
if (typeof ResizeObserver !== 'undefined') {
  const observer = new ResizeObserver(scheduleVisibleScreen);
  const observed = new Set();
  function observeLayout() {
    let changed = false;
    for (const element of observed) if (!element.isConnected) {
      observer.unobserve(element); observed.delete(element); changed = true;
    }
    document.querySelectorAll('.app-header, .room-actions').forEach(element => {
      if (observed.has(element)) return;
      observed.add(element); observer.observe(element); changed = true;
    });
    if (changed) scheduleVisibleScreen();
  }
  observeLayout();
  // Room and mastery controls are mounted after the initial page has loaded.
  new MutationObserver(records => {
    if (records.some(record => [...record.addedNodes, ...record.removedNodes].some(node => node.nodeType === 1))) observeLayout();
  }).observe(document.body, {childList: true, subtree: true});
}
