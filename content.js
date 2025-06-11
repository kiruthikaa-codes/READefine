chrome.runtime.onMessage.addListener((settings, sender, sendResponse) => {
  if (!settings.enabled) {
    removeCustomStyles();
    return;
  }

  const themeColors = {
    cream: { background: "#FAF3DD", text: "#2A2A2A" },
    bluegrey: { background: "#E3EAF2", text: "#2A2A2A" },
    sagegreen: { background: "#DDEAD1", text: "#2B2B2B" },
    peach: { background: "#FDF1E6", text: "#2D2D2D" },
    lavender: { background: "#EAE6F8", text: "#1C1C1C" }
  };

  const colors = themeColors[settings.theme] || themeColors.cream;

  const styleId = "dyslexiaReaderStyle";
  let styleEl = document.getElementById(styleId);
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = styleId;
    document.head.appendChild(styleEl);
  }

  styleEl.innerHTML = `
    * {
      font-family: ${settings.font} !important;
      line-height: ${settings.lineSpacing} !important;
      letter-spacing: ${settings.letterSpacing}px !important;
      word-spacing: ${settings.wordSpacing}px !important;
      background-color: ${colors.background} !important;
      color: ${colors.text} !important;
    }
  `;
});

function removeCustomStyles() {
  const styleEl = document.getElementById("dyslexiaReaderStyle");
  if (styleEl) {
    styleEl.remove();
  }
}
