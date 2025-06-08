chrome.storage.local.get("enabled", (data) => {
    if (data.enabled ?? true) {
      document.body.classList.add("dyslexia-mode");
    }
  });
  