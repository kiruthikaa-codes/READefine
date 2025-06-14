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




// if (!document.getElementById("readefine-speaker-button")) {
//     const button = document.createElement("img");
//     button.src = chrome.runtime.getURL("speaker.png");
//     button.id = "readefine-speaker-button";

//     Object.assign(button.style, {
//         position: "fixed",
//         bottom: "20px",
//         right: "20px",
//         width: "40px",
//         height: "40px",
//         zIndex: "9999",
//         cursor: "pointer",
//         borderRadius: "50%",
//         backgroundColor: "#fff",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.3)"
//     });

//     document.body.appendChild(button);

//     button.addEventListener("click", () => {
//         const text = window.getSelection().toString().trim();
//         if (text.length === 0) {
//             alert("Please select some text to read aloud.");
//             return;
//         }

//         const utterance = new SpeechSynthesisUtterance(text);
//         speechSynthesis.speak(utterance);
//     });
// }
if (!document.getElementById("readefine-speaker-button")) {
  const button = document.createElement("button");
  button.id = "readefine-speaker-button";

  // Inline SVG for speaker icon
  button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000" viewBox="0 0 24 24">
      <path d="M3 10v4h4l5 5V5l-5 5H3zm13.5 2c0-1.77-1.02-3.29-2.5-4.03v8.06c1.48-.74 2.5-2.26 2.5-4.03zm2.5 0c0 3.04-1.64 5.64-4.05 7.07l1.43 1.43C19.34 18.45 21 15.4 21 12s-1.66-6.45-4.62-8.5l-1.43 1.43C17.36 6.36 19 8.96 19 12z"/>
    </svg>
  `;


  // Object.assign(button.style, {
  //   position: "fixed",
  //   bottom: "20px",
  //   right: "20px",
  //   width: "48px",
  //   height: "48px",
  //   backgroundColor: "#fff",
  //   borderRadius: "50%",
  //   boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   cursor: "pointer",
  //   zIndex: "9999",
  //   padding: "0",
  //   border: "none"
  // });

  // document.body.appendChild(button);

  // // Button click: speak selected text
  // button.addEventListener("click", () => {
  //   const selectedText = window.getSelection().toString().trim();
  //   if (selectedText) {
  //     const utterance = new SpeechSynthesisUtterance(selectedText);
  //     speechSynthesis.speak(utterance);
  //   } else {
  //     alert("Please select some text to read aloud.");
  //   }
  // });

// content.js
(function () {
  const existing = document.getElementById("readefine-speaker-button");
  if (existing) existing.remove(); // Remove if already exists

  const button = document.createElement("button");
  button.id = "readefine-speaker-button";

  button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000" viewBox="0 0 24 24">
      <path d="M3 10v4h4l5 5V5l-5 5H3zm13.5 2c0-1.77-1.02-3.29-2.5-4.03v8.06c1.48-.74 2.5-2.26 2.5-4.03zm2.5 0c0 3.04-1.64 5.64-4.05 7.07l1.43 1.43C19.34 18.45 21 15.4 21 12s-1.66-6.45-4.62-8.5l-1.43 1.43C17.36 6.36 19 8.96 19 12z"/>
    </svg>`;

  Object.assign(button.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "48px",
    height: "48px",
    backgroundColor: "#fff",
    borderRadius: "50%",
    boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    zIndex: "9999",
    padding: "0",
    border: "none"
  });

  button.addEventListener("click", () => {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
      const utterance = new SpeechSynthesisUtterance(selectedText);
      speechSynthesis.speak(utterance);
    } else {
      alert("Please select some text to read aloud.");
    }
  });

  document.body.appendChild(button);
})();


}


