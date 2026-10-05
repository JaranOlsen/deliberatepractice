const paths = {
  home: ['M3 10.5 12 3l9 7.5', 'M5 9v12h5v-7h4v7h5V9'],
  progress: ['M4 3v17h17', 'm7 14 4-5 4 3 5-7'],
  account: ['M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0', 'M4 21v-2a8 8 0 0 1 16 0v2']
};

export function setHeaderControl(button, iconName, label) {
  if (!button.querySelector('svg')) {
    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('viewBox', '0 0 24 24');
    icon.setAttribute('aria-hidden', 'true');
    icon.setAttribute('focusable', 'false');
    for (const d of paths[iconName]) {
      const path = document.createElementNS(icon.namespaceURI, 'path');
      path.setAttribute('d', d); icon.append(path);
    }
    const text = document.createElement('span'); text.className = 'sr-only';
    button.replaceChildren(icon, text);
  }
  button.querySelector('span').textContent = label;
  button.setAttribute('aria-label', label); button.title = label;
}
