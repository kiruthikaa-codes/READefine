const mirrorStyles = {
  b: 'color: #007BFF; font-weight: bold; font-size: 1.3em;',     // Blue
  d: 'color: #28A745; font-weight: bold; font-size: 1.3em;',     // Green
  p: 'color: #FFC107; font-weight: bold; font-size: 1.3em;',     // Yellow
  q: 'color: #6F42C1; font-weight: bold; font-size: 1.3em;',     // Purple
  B: 'color: #0056b3; font-weight: bold; font-size: 1.3em;',
  D: 'color: #1e7e34; font-weight: bold; font-size: 1.3em;',
  P: 'color: #e0a800; font-weight: bold; font-size: 1.3em;',
  Q: 'color: #5a32a3; font-weight: bold; font-size: 1.3em;'
};

function highlightMirrorLetters() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

  while (walker.nextNode()) {
    const node = walker.currentNode;

    if (!node.nodeValue.trim()) continue;

    const replacedHTML = node.nodeValue.replace(/[bdpqBDPQ]/g, char => {
      const style = mirrorStyles[char];
      return `<span style="${style}">${char}</span>`;
    });

    if (replacedHTML !== node.nodeValue) {
      const span = document.createElement('span');
      span.innerHTML = replacedHTML;
      node.parentNode.replaceChild(span, node);
    }
  }
}

// Run only if mirror assist is enabled
chrome.storage.sync.get("mirrorAssist", (data) => {
  if (data.mirrorAssist !== false) {
    highlightMirrorLetters();
  }
});
