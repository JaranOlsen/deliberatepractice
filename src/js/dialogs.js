// One modal at a time, with background isolation and predictable keyboard focus.
export function createDialogManager() {
  let active = null;
  let previousFocus = null;
  let previousOverflow = "";
  const inertState = new Map();
  const focusable = () => active ? [...active.overlay.querySelectorAll(
    'button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), a[href], [tabindex="0"]'
  )].filter((element) => !element.closest('[hidden], .is-hidden, [inert]') && element.getClientRects().length) : [];

  function close(overlay) {
    if (active?.overlay !== overlay) return;
    overlay.hidden = true;
    overlay.classList.add("is-hidden");
    inertState.forEach((wasInert, element) => { element.inert = wasInert; });
    inertState.clear();
    document.body.style.overflow = previousOverflow;
    active = null;
    if (previousFocus?.isConnected && !previousFocus.closest('[hidden], .is-hidden, [inert]')) {
      previousFocus.focus({ preventScroll: true });
    }
    previousFocus = null;
  }

  function open(overlay, { onDismiss, initialFocus } = {}) {
    if (active?.overlay === overlay) return;
    if (active) close(active.overlay);
    previousFocus = document.activeElement;
    previousOverflow = document.body.style.overflow;
    overlay.hidden = false;
    overlay.classList.remove("is-hidden");
    active = { overlay, onDismiss };
    [...document.body.children].forEach((element) => {
      if (element === overlay || element.tagName === "SCRIPT") return;
      inertState.set(element, element.inert);
      element.inert = true;
    });
    document.body.style.overflow = "hidden";
    const target = initialFocus ?? focusable()[0] ?? overlay.querySelector('[role="dialog"]');
    if (target) {
      if (!target.matches('button, input, select, textarea, a, [tabindex]')) target.tabIndex = -1;
      target.focus({ preventScroll: true });
    }
  }

  document.addEventListener("keydown", (event) => {
    if (!active) return;
    if (event.key === "Escape") {
      event.preventDefault();
      active.onDismiss?.();
    } else if (event.key === "Tab") {
      const items = focusable();
      const first = items[0];
      const last = items.at(-1);
      if (!first) { event.preventDefault(); return; }
      if (!items.includes(document.activeElement) || (event.shiftKey && document.activeElement === first)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  return { open, close };
}
