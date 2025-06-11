document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggleExtension");
  const fontSelect = document.getElementById("fontSelect");
  const lineSpacing = document.getElementById("lineSpacing");
  const letterSpacing = document.getElementById("letterSpacing");
  const wordSpacing = document.getElementById("wordSpacing");
  const themeSelect = document.getElementById("themeSelect");

  function updateSettings() {
    const settings = {
      enabled: toggle.checked,
      font: fontSelect.value,
      lineSpacing: lineSpacing.value,
      letterSpacing: letterSpacing.value,
      wordSpacing: wordSpacing.value,
      theme: themeSelect.value,
    };

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, settings);
    });
  }

  toggle.addEventListener("change", updateSettings);
  fontSelect.addEventListener("change", updateSettings);
  lineSpacing.addEventListener("input", updateSettings);
  letterSpacing.addEventListener("input", updateSettings);
  wordSpacing.addEventListener("input", updateSettings);
  themeSelect.addEventListener("change", updateSettings);
});
