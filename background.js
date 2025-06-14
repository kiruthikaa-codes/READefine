chrome.runtime.onInstalled.addListener(() => {
  console.log("READefine installed.");
});
chrome.commands.onCommand.addListener((command) => {
  if (command === "read-selection") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => {
          const text = window.getSelection().toString().trim();
          if (text) {
            const utterance = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(utterance);
          } else {
            alert("Please highlight text on the page to read aloud.");
          }
        }
      });
    });
  }
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ mirrorAssist: false });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && /^https?:/.test(tab.url)) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["content.js"]
    });
  }
});

