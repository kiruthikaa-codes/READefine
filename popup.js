document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("toggleExtension");

  chrome.storage.local.get("enabled", (data) => {
    checkbox.checked = data.enabled ?? true;
  });

  checkbox.addEventListener("change", () => {
    chrome.storage.local.set({ enabled: checkbox.checked });
    chrome.tabs.reload(); // Reload current tab to apply/remove styles
  });
});
