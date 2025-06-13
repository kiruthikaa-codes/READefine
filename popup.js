// const stepSizes = {
//   fontSize: 1,
//   lineSpacing: 0.1,
//   wordSpacing: 0.05,
//   letterSpacing: 0.05,
//   overlayOpacity: 0.05,
//   hoverOpacity: 0.05
// };

// function getValues() {
//   return {
//     fontSize: parseFloat(document.getElementById('fontSizeValue').value),
//     lineSpacing: parseFloat(document.getElementById('lineSpacingValue').value),
//     wordSpacing: parseFloat(document.getElementById('wordSpacingValue').value),
//     letterSpacing: parseFloat(document.getElementById('letterSpacingValue').value),
//     overlayOpacity: parseFloat(document.getElementById('overlayOpacityValue').value),
//     theme: document.getElementById('themeSelect').value,
//     hoverEnabled: document.getElementById('hoverToggle').checked,
//     hoverLineColor: document.getElementById('hoverLineColor').value,
//     hoverOpacity: parseFloat(document.getElementById('hoverOpacityValue').value),
//     fontSelect: document.getElementById('fontSelect').value,
//     textAlign: document.getElementById('leftAlignToggle').checked ? 'left' : 'justify',
//     enabled: document.getElementById('readefineMasterToggle').checked,
//     mirrorEnabled: document.getElementById('mirrorToggle').checked,
//     syllableEnabled: document.getElementById('syllableToggle').checked
    
//   };
// }

// function sendSettings() {
//   const values = getValues();
//   const settings = {
//     fontSize: values.fontSize + 'px',
//     lineSpacing: values.lineSpacing,
//     wordSpacing: values.wordSpacing + 'em',
//     letterSpacing: values.letterSpacing + 'em',
//     overlayOpacity: values.overlayOpacity,
//     theme: values.theme,
//     hoverEnabled: values.hoverEnabled,
//     hoverLineColor: values.hoverLineColor,
//     hoverOpacity: values.hoverOpacity,
//     fontSelect: values.fontSelect,
//     textAlign: values.textAlign,
//     enabled: values.enabled,
//     mirrorEnabled:values.mirrorEnabled,
//     syllableEnabled:values.syllableEnabled
//   };

// chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
//   chrome.scripting.executeScript({
//     target: { tabId: tabs[0].id },
//     func: values.enabled ? applySettings : resetStyles,
//     args: [values.enabled ? settings : null]
//   });
// });

// chrome.storage.sync.set({ 
//   readefineEnabled: values.enabled,
//   readefineLastSettings: settings
// });



// }

// document.querySelectorAll('.increase, .decrease').forEach(button => {
//   button.addEventListener('click', () => {
//     const target = button.getAttribute('data-target');
//     const input = document.getElementById(target + 'Value');
//     let value = parseFloat(input.value) || 0;

//     value += (button.classList.contains('increase') ? 1 : -1) * stepSizes[target];
//     if (target === 'fontSize' && value < 12) value = 12;
//     if (target === 'overlayOpacity') value = Math.min(Math.max(value, 0), 1);

//     input.value = value.toFixed(2);
//     sendSettings();
//   });
// });
// ///
// document.querySelectorAll('input, select').forEach(el => {
//   el.addEventListener('input', sendSettings);
// });
// ////

// document.getElementById('fontSelect').addEventListener('change', sendSettings);
// document.getElementById('leftAlignToggle').addEventListener('change', sendSettings);
// document.getElementById('readefineMasterToggle').addEventListener('change', sendSettings);

// ////////////
// document.addEventListener('DOMContentLoaded', () => {
//   chrome.storage.sync.get([
//     "readefineEnabled",
//     "readefineLastSettings",
//     "mirrorAssist",
//     "syllableEmphasis"
//   ], data => {
//     const masterToggle = document.getElementById("readefineMasterToggle");
//     masterToggle.checked = data.readefineEnabled !== false;

//     const mirrorToggle = document.getElementById("mirrorToggle");
//     mirrorToggle.checked = data.mirrorAssist !== false;

//     const syllableToggle = document.getElementById("syllableToggle");
//     syllableToggle.checked = data.syllableEmphasis === true;

//     if (data.readefineLastSettings) {
//       const s = data.readefineLastSettings;

//       document.getElementById('fontSizeValue').value = parseFloat(s.fontSize);
//       document.getElementById('lineSpacingValue').value = s.lineSpacing;
//       document.getElementById('wordSpacingValue').value = parseFloat(s.wordSpacing);
//       document.getElementById('letterSpacingValue').value = parseFloat(s.letterSpacing);
//       document.getElementById('overlayOpacityValue').value = s.overlayOpacity;
//       document.getElementById('themeSelect').value = s.theme;
//       document.getElementById('hoverToggle').checked = s.hoverEnabled;
//       document.getElementById('hoverLineColor').value = s.hoverLineColor;
//       document.getElementById('hoverOpacityValue').value = s.hoverOpacity;
//       document.getElementById('fontSelect').value = s.fontSelect;
//       document.getElementById('leftAlignToggle').checked = s.textAlign === 'left';
//     }

//     sendSettings(); // Apply restored settings
//     refreshProfileList();
//     populateVoiceList();
//   });
// });

// ////////


// // window.onload = () => {
// //   // Restore saved toggle state and settings
// //   chrome.storage.sync.get(["readefineEnabled", "readefineLastSettings", "mirrorAssist", "syllableEmphasis"], data => {
// //     const masterToggle = document.getElementById("readefineMasterToggle");
// //     masterToggle.checked = data.readefineEnabled !== false; // default is true

// //     const mirrorToggle = document.getElementById("mirrorToggle");
// //     mirrorToggle.checked = data.mirrorAssist !== false;

// //     const syllableToggle = document.getElementById("syllableToggle");
// //     syllableToggle.checked = data.syllableEmphasis === true;

// //     // Apply last used settings if available
// //     if (data.readefineEnabled && data.readefineLastSettings) {
// //       const s = data.readefineLastSettings;

// //       document.getElementById('fontSizeValue').value = parseFloat(s.fontSize);
// //       document.getElementById('lineSpacingValue').value = s.lineSpacing;
// //       document.getElementById('wordSpacingValue').value = parseFloat(s.wordSpacing);
// //       document.getElementById('letterSpacingValue').value = parseFloat(s.letterSpacing);
// //       document.getElementById('overlayOpacityValue').value = s.overlayOpacity;
// //       document.getElementById('themeSelect').value = s.theme;
// //       document.getElementById('hoverToggle').checked = s.hoverEnabled;
// //       document.getElementById('hoverLineColor').value = s.hoverLineColor;
// //       document.getElementById('hoverOpacityValue').value = s.hoverOpacity;
// //       document.getElementById('fontSelect').value = s.fontSelect;
// //       document.getElementById('leftAlignToggle').checked = s.textAlign === 'left';

// //       sendSettings(); // Apply loaded settings
// //     } else {
// //       sendSettings(); // Use defaults if nothing is saved
// //     }
// //   });

// //   refreshProfileList(); // Populate profile dropdown
// //   populateVoiceList();  // Populate TTS voice list
// // };




// function applySettings(settings) {
//   document.body.style.fontSize = settings.fontSize;
//   document.body.style.lineHeight = settings.lineSpacing;

//   const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
//   headings.forEach(h => {
//     h.style.lineHeight = settings.lineSpacing;
//   });

//   document.body.style.wordSpacing = settings.wordSpacing;
//   document.body.style.letterSpacing = settings.letterSpacing;

//   const existingOverlay = document.getElementById('readefine-overlay');
//   if (existingOverlay) existingOverlay.remove();
//   document.body.style.color = '';

//   if (settings.theme) {
//     const overlay = document.createElement('div');
//     overlay.id = 'readefine-overlay';
//     overlay.style.position = 'fixed';
//     overlay.style.top = 0;
//     overlay.style.left = 0;
//     overlay.style.width = '100vw';
//     overlay.style.height = '100vh';
//     overlay.style.zIndex = -1;
//     overlay.style.pointerEvents = 'none';
//     overlay.style.opacity = settings.overlayOpacity;

//     const themes = {
//       cream: { bg: '#FAF3DD', text: '#2A2A2A' },
//       bluegrey: { bg: '#E3EAF2', text: '#2A2A2A' },
//       sage: { bg: '#DDEAD1', text: '#2B2B2B' },
//       peach: { bg: '#FDF1E6', text: '#2D2D2D' },
//       lavender: { bg: '#EAE6F8', text: '#1C1C1C' }
//     };

//     const selected = themes[settings.theme];
//     overlay.style.backgroundColor = selected.bg;
//     document.body.style.color = selected.text;

//     document.body.appendChild(overlay);
//   }

//   const existingHoverLine = document.getElementById('readefine-hover-line');
//   if (existingHoverLine) existingHoverLine.remove();
//   document.removeEventListener('mousemove', window.readefineTrack);

//   if (settings.hoverEnabled) {
//     const line = document.createElement('div');
//     line.id = 'readefine-hover-line';
//     line.style.position = 'fixed';
//     line.style.left = 0;
//     line.style.width = '100vw';
//     line.style.height = '1.5em';
//     line.style.pointerEvents = 'none';
//     line.style.backgroundColor = settings.hoverLineColor;
//     line.style.opacity = settings.hoverOpacity;
//     line.style.zIndex = 9999;
//     document.body.appendChild(line);

//     window.readefineTrack = function (e) {
//       const line = document.getElementById('readefine-hover-line');
//       if (line) line.style.top = `${e.clientY - (line.offsetHeight / 2)}px`;
//     };

//     document.addEventListener('mousemove', window.readefineTrack);
//   }

//   const oldFontStyle = document.getElementById('readefine-font-style');
//   if (oldFontStyle) oldFontStyle.remove();

// if (settings.fontSelect && settings.fontSelect !== '') {
//     if (!document.getElementById('readefine-google-fonts')) {
//       const fontLink = document.createElement('link');
//       fontLink.rel = 'stylesheet';
//       fontLink.href = 'https://fonts.googleapis.com/css2?family=Roboto&family=Comic+Neue&family=Nunito&family=Quicksand&family=Source+Sans+Pro&display=swap';
//       fontLink.id = 'readefine-google-fonts';
//       document.head.appendChild(fontLink);
//     }

//     const fontStyle = document.createElement('style');
//     fontStyle.id = 'readefine-font-style';
//     fontStyle.textContent = `
//       html, body, body * {
//         font-family: '${settings.fontSelect}', sans-serif !important;
//       }
//     `;
//     document.head.appendChild(fontStyle);

//     console.log('[Readefine] Font applied:', settings.fontSelect);
//   }

//   document.body.style.textAlign = settings.textAlign;

// }

// function resetStyles() {
//   document.body.style.fontSize = '';
//   document.body.style.lineHeight = '';
//   document.body.style.wordSpacing = '';
//   document.body.style.letterSpacing = '';
//   document.body.style.color = '';
//   document.body.style.textAlign = '';

//   // Remove overlay
//   const overlay = document.getElementById('readefine-overlay');
//   if (overlay) overlay.remove();

//   // Remove hover line
//   const line = document.getElementById('readefine-hover-line');
//   if (line) line.remove();
//   document.removeEventListener('mousemove', window.readefineTrack);

//   // Remove font styles
//   const style = document.getElementById('readefine-font-style');
//   if (style) style.remove();
// }


// function refreshProfileList() {
//   chrome.storage.sync.get(null, (items) => {
//     const profileSelect = document.getElementById('profileSelect');
//     profileSelect.innerHTML = '';

//     Object.keys(items)
//       .filter(key => key.startsWith('readefine_profile_'))
//       .forEach(key => {
//         const option = document.createElement('option');
//         option.value = key;
//         option.textContent = key.replace('readefine_profile_', '');
//         profileSelect.appendChild(option);
//       });
//   });
// }
// document.getElementById('saveProfile').addEventListener('click', () => {
//   const name = document.getElementById('profileName').value.trim();
//   if (!name) return alert("Please enter a profile name.");

//   const key = 'readefine_profile_' + name;
//   const settings = getValues();

//   chrome.storage.sync.set({ [key]: settings }, () => {
//     alert("Profile saved!");
//     refreshProfileList();
//     document.getElementById('profileName').value = ''; // 👈 Clear input field
//   });
// });

// document.getElementById('loadProfile').addEventListener('click', () => {
//   const key = document.getElementById('profileSelect').value;
//   if (!key) return;

//   chrome.storage.sync.get(key, (data) => {
//     const settings = data[key];
//     if (!settings) return alert("Profile not found.");

//     // Populate UI inputs
//     document.getElementById('fontSizeValue').value = settings.fontSize;
//     document.getElementById('lineSpacingValue').value = settings.lineSpacing;
//     document.getElementById('wordSpacingValue').value = settings.wordSpacing;
//     document.getElementById('letterSpacingValue').value = settings.letterSpacing;
//     document.getElementById('overlayOpacityValue').value = settings.overlayOpacity;
//     document.getElementById('themeSelect').value = settings.theme;
//     document.getElementById('hoverToggle').checked = settings.hoverEnabled;
//     document.getElementById('hoverLineColor').value = settings.hoverLineColor;
//     document.getElementById('hoverOpacityValue').value = settings.hoverOpacity;
//     document.getElementById('fontSelect').value = settings.fontSelect;
//     document.getElementById('mirrorToggle').checked = settings.mirrorEnabled;
//     document.getElementById('syllableToggle').checked = settings.syllableEnabled;

//     sendSettings();
//   });
// });
// document.getElementById('deleteProfile').addEventListener('click', () => {
//   const key = document.getElementById('profileSelect').value;
//   if (!key) return;

//   chrome.storage.sync.remove(key, () => {
//     alert("Profile deleted.");
//     refreshProfileList();
//   });
// });
// window.onload = () => {
//   sendSettings();  // Apply default or current settings
//   refreshProfileList();// Populate profile dropdown
//   chrome.storage.sync.get("readefineEnabled", data => {
//   const masterToggle = document.getElementById("readefineMasterToggle");
//   masterToggle.checked = data.readefineEnabled !== false; // default is true
// });

// };

// // Mirror toggle
// const toggle = document.getElementById("mirrorToggle");

// // Initialize toggle from storage
// chrome.storage.sync.get("mirrorAssist", (data) => {
//   toggle.checked = data.mirrorAssist !== false;
// });

// // When user toggles mirror assist
// toggle.addEventListener("change", () => {
//   const isEnabled = toggle.checked;
//   chrome.storage.sync.set({ mirrorAssist: isEnabled }, () => {
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//       chrome.scripting.executeScript({
//         target: { tabId: tabs[0].id },
//         func: (enabled) => {
//           // Remove existing highlights
//           document.querySelectorAll('[data-mirror-highlight]').forEach(el => {
//             el.replaceWith(document.createTextNode(el.innerText));
//           });

//           if (!enabled) return;

//           const mirrorStyles = {
//             b: 'color: #007BFF; font-weight: bold; font-size: 17px;',
//             d: 'color: #28A745; font-weight: bold; font-size: 17px;',
//             p: 'color:rgb(187, 34, 77); font-weight: bold; font-size: 17px;',
//             q: 'color: #6F42C1; font-weight: bold; font-size: 17px;',
//             B: 'color: #0056b3; font-weight: bold; font-size: 17px;',
//             D: 'color: #1e7e34; font-weight: bold; font-size: 17px;',
//             P: 'color:rgb(187, 34, 77); font-weight: bold; font-size: 17px;',
//             Q: 'color: #5a32a3; font-weight: bold; font-size: 17px;'
//           };

//           const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
//           const textNodes = [];

//           while (walker.nextNode()) {
//             const node = walker.currentNode;
//             if (/[bdpqBDPQ]/.test(node.nodeValue)) {
//               textNodes.push(node);
//             }
//           }

//           textNodes.forEach((textNode) => {
//             const span = document.createElement('span');
//             span.innerHTML = textNode.nodeValue.replace(/[bdpqBDPQ]/g, (char) => {
//               return `<span data-mirror-highlight style="${mirrorStyles[char]}">${char}</span>`;
//             });
//             textNode.parentNode.replaceChild(span, textNode);
//           });
//         },
//         args: [isEnabled]
//       });
//     });
//   });
// });

// document.getElementById("syllableToggle").addEventListener("change", function () {
//   const enabled = this.checked;

//   chrome.storage.sync.set({ syllableEmphasis: enabled });

//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     chrome.scripting.executeScript({
//       target: { tabId: tabs[0].id },
//       func: toggleSyllableEmphasis,
//       args: [enabled]
//     });
//   });
// });

// // Function injected into the page
// function toggleSyllableEmphasis(enabled) {
//   const splitSyllables = (word) => {
//     // VERY BASIC SYLLABLE SPLITTER — replace with real logic later
//     return word
//       .replace(/([aeiouy]{1,2})([^aeiouy\s])/gi, "$1|$2")
//       .split("|");
//   };

//   const walk = (node) => {
//     if (node.nodeType === Node.TEXT_NODE) {
//       const text = node.textContent.trim();
//       if (!text || node.parentNode.classList?.contains("syllable-wrapper")) return;

// const words = text.split(/(\s+)/); // split and retain spaces
// const wrapper = document.createElement("span");
// wrapper.className = "syllable-wrapper";

// words.forEach(word => {
//   if (/^\s+$/.test(word)) {
//     wrapper.appendChild(document.createTextNode(word)); // preserve spaces
//   } else if (/\w/.test(word)) {
//     const syllables = splitSyllables(word);
//     syllables.forEach((syl, idx) => {
//       const span = document.createElement("span");
//       span.textContent = syl;
//       span.style.fontSize = "14px";
//       span.style.backgroundColor = idx % 2 === 0 ? "rgba(212, 160, 229, 0.3)" : "rgba(254, 207, 127, 0.3)";
//       span.style.borderRadius = "2px";
//       span.style.padding = "0 2px";
//       wrapper.appendChild(span);
//     });
//   } else {
//     wrapper.appendChild(document.createTextNode(word));
//   }
// });


//       node.parentNode.replaceChild(wrapper, node);
//     } else if (node.nodeType === Node.ELEMENT_NODE) {
//       Array.from(node.childNodes).forEach(walk);
//     }
//   };

//   const restore = () => {
//     document.querySelectorAll(".syllable-wrapper").forEach(el => {
//       const fragment = document.createDocumentFragment();
//       el.childNodes.forEach(child => {
//         fragment.appendChild(document.createTextNode(child.textContent));
//       });
//       el.replaceWith(fragment);
//     });
//   };

//   if (enabled) {
//     walk(document.body);
//   } else {
//     restore();
//   }
// }

// let voices = [];

// function populateVoiceList() {
//   voices = speechSynthesis.getVoices();
//   const voiceSelect = document.getElementById('voiceSelect');
//   voiceSelect.innerHTML = '';
//   voices.forEach((voice, index) => {
//     const option = document.createElement('option');
//     option.value = index;
//     option.textContent = `${voice.name} (${voice.lang})`;
//     voiceSelect.appendChild(option);
//   });
// }

// // Populate voices when ready
// window.speechSynthesis.onvoiceschanged = populateVoiceList;
// populateVoiceList();

// document.getElementById('speakButton').addEventListener('click', () => {
//   const voiceIndex = parseInt(document.getElementById('voiceSelect').value);

//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     chrome.scripting.executeScript({
//       target: { tabId: tabs[0].id },
//       func: (voiceIndex) => {
//         const text = window.getSelection().toString().trim();
//         if (text) {
//           const utterance = new SpeechSynthesisUtterance(text);
//           const voices = speechSynthesis.getVoices();
//           utterance.voice = voices[voiceIndex];
//           utterance.volume = 1; // Fixed default
//           utterance.rate = 1;   // Fixed default
//           speechSynthesis.speak(utterance);
//         } else {
//           alert("Please highlight text on the page to read aloud.");
//         }
//       },
//       args: [voiceIndex]
//     });
//   });
// });


// document.querySelectorAll('.tab').forEach(tab => {
//   tab.addEventListener('click', () => {
//     document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
//     document.querySelectorAll('.tab-content').forEach(sec => sec.classList.remove('active'));
    
//     tab.classList.add('active');
//     document.getElementById(tab.dataset.tab).classList.add('active');
//   });
// });


const stepSizes = {
  fontSize: 1,
  lineSpacing: 0.1,
  wordSpacing: 0.05,
  letterSpacing: 0.05,
  overlayOpacity: 0.05,
  hoverOpacity: 0.05
};

function getValues() {
  return {
    fontSize: parseFloat(document.getElementById('fontSizeValue').value),
    lineSpacing: parseFloat(document.getElementById('lineSpacingValue').value),
    wordSpacing: parseFloat(document.getElementById('wordSpacingValue').value),
    letterSpacing: parseFloat(document.getElementById('letterSpacingValue').value),
    overlayOpacity: parseFloat(document.getElementById('overlayOpacityValue').value),
    theme: document.getElementById('themeSelect').value,
    hoverEnabled: document.getElementById('hoverToggle').checked,
    hoverLineColor: document.getElementById('hoverLineColor').value,
    hoverOpacity: parseFloat(document.getElementById('hoverOpacityValue').value),
    fontSelect: document.getElementById('fontSelect').value,
    textAlign: document.getElementById('leftAlignToggle').checked ? 'left' : 'justify',
    enabled: document.getElementById('readefineMasterToggle').checked,
    mirrorEnabled: document.getElementById('mirrorToggle').checked,
    syllableEnabled: document.getElementById('syllableToggle').checked
  };
}

function sendSettings() {
  const values = getValues();
  const settings = {
    fontSize: values.fontSize + 'px',
    lineSpacing: values.lineSpacing,
    wordSpacing: values.wordSpacing + 'em',
    letterSpacing: values.letterSpacing + 'em',
    overlayOpacity: values.overlayOpacity,
    theme: values.theme,
    hoverEnabled: values.hoverEnabled,
    hoverLineColor: values.hoverLineColor,
    hoverOpacity: values.hoverOpacity,
    fontSelect: values.fontSelect,
    textAlign: values.textAlign,
    enabled: values.enabled,
    mirrorEnabled: values.mirrorEnabled,
    syllableEnabled: values.syllableEnabled
  };

  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: values.enabled ? applySettings : resetStyles,
      args: [values.enabled ? settings : null]
    });
  });

  chrome.storage.sync.set({ 
    readefineEnabled: values.enabled,
    readefineLastSettings: settings
  });
}

document.querySelectorAll('.increase, .decrease').forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    const input = document.getElementById(target + 'Value');
    let value = parseFloat(input.value) || 0;

    value += (button.classList.contains('increase') ? 1 : -1) * stepSizes[target];
    if (target === 'fontSize' && value < 12) value = 12;
    if (target === 'overlayOpacity') value = Math.min(Math.max(value, 0), 1);

    input.value = value.toFixed(2);
    sendSettings();
  });
});

document.querySelectorAll('input, select').forEach(el => {
  el.addEventListener('input', sendSettings);
});

document.getElementById('fontSelect').addEventListener('change', sendSettings);
document.getElementById('leftAlignToggle').addEventListener('change', sendSettings);
document.getElementById('readefineMasterToggle').addEventListener('change', sendSettings);

document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get([
    "readefineEnabled",
    "readefineLastSettings"
  ], data => {
    const masterToggle = document.getElementById("readefineMasterToggle");
    masterToggle.checked = data.readefineEnabled !== false;

    if (data.readefineLastSettings) {
      const s = data.readefineLastSettings;

      document.getElementById('fontSizeValue').value = parseFloat(s.fontSize);
      document.getElementById('lineSpacingValue').value = s.lineSpacing;
      document.getElementById('wordSpacingValue').value = parseFloat(s.wordSpacing);
      document.getElementById('letterSpacingValue').value = parseFloat(s.letterSpacing);
      document.getElementById('overlayOpacityValue').value = s.overlayOpacity;
      document.getElementById('themeSelect').value = s.theme;
      document.getElementById('hoverToggle').checked = s.hoverEnabled;
      document.getElementById('hoverLineColor').value = s.hoverLineColor;
      document.getElementById('hoverOpacityValue').value = s.hoverOpacity;
      document.getElementById('fontSelect').value = s.fontSelect;
      document.getElementById('leftAlignToggle').checked = s.textAlign === 'left';
      document.getElementById('mirrorToggle').checked = s.mirrorEnabled || false;
      document.getElementById('syllableToggle').checked = s.syllableEnabled || false;
    }

    sendSettings();
    refreshProfileList();
    populateVoiceList();
  });
});

function applySettings(settings) {
  document.body.style.fontSize = settings.fontSize;
  document.body.style.lineHeight = settings.lineSpacing;

  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  headings.forEach(h => {
    h.style.lineHeight = settings.lineSpacing;
  });

  document.body.style.wordSpacing = settings.wordSpacing;
  document.body.style.letterSpacing = settings.letterSpacing;

  const existingOverlay = document.getElementById('readefine-overlay');
  if (existingOverlay) existingOverlay.remove();
  document.body.style.color = '';

  if (settings.theme) {
    const overlay = document.createElement('div');
    overlay.id = 'readefine-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.zIndex = -1;
    overlay.style.pointerEvents = 'none';
    overlay.style.opacity = settings.overlayOpacity;

    const themes = {
      cream: { bg: '#FAF3DD', text: '#2A2A2A' },
      bluegrey: { bg: '#E3EAF2', text: '#2A2A2A' },
      sage: { bg: '#DDEAD1', text: '#2B2B2B' },
      peach: { bg: '#FDF1E6', text: '#2D2D2D' },
      lavender: { bg: '#EAE6F8', text: '#1C1C1C' }
    };

    const selected = themes[settings.theme];
    overlay.style.backgroundColor = selected.bg;
    document.body.style.color = selected.text;

    document.body.appendChild(overlay);
  }

  const existingHoverLine = document.getElementById('readefine-hover-line');
  if (existingHoverLine) existingHoverLine.remove();
  document.removeEventListener('mousemove', window.readefineTrack);

  if (settings.hoverEnabled) {
    const line = document.createElement('div');
    line.id = 'readefine-hover-line';
    line.style.position = 'fixed';
    line.style.left = 0;
    line.style.width = '100vw';
    line.style.height = '1.5em';
    line.style.pointerEvents = 'none';
    line.style.backgroundColor = settings.hoverLineColor;
    line.style.opacity = settings.hoverOpacity;
    line.style.zIndex = 9999;
    document.body.appendChild(line);

    window.readefineTrack = function (e) {
      const line = document.getElementById('readefine-hover-line');
      if (line) line.style.top = `${e.clientY - (line.offsetHeight / 2)}px`;
    };

    document.addEventListener('mousemove', window.readefineTrack);
  }

  const oldFontStyle = document.getElementById('readefine-font-style');
  if (oldFontStyle) oldFontStyle.remove();

  if (settings.fontSelect && settings.fontSelect !== '') {
    if (!document.getElementById('readefine-google-fonts')) {
      const fontLink = document.createElement('link');
      fontLink.rel = 'stylesheet';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Roboto&family=Comic+Neue&family=Nunito&family=Quicksand&family=Source+Sans+Pro&display=swap';
      fontLink.id = 'readefine-google-fonts';
      document.head.appendChild(fontLink);
    }

    const fontStyle = document.createElement('style');
    fontStyle.id = 'readefine-font-style';
    fontStyle.textContent = `
      html, body, body * {
        font-family: '${settings.fontSelect}', sans-serif !important;
      }
    `;
    document.head.appendChild(fontStyle);
  }

  document.body.style.textAlign = settings.textAlign;

  // Handle mirror toggle
  if (settings.mirrorEnabled) {
    const mirrorStyles = {
      b: 'color: #007BFF; font-weight: bold; font-size: 17px;',
      d: 'color: #28A745; font-weight: bold; font-size: 17px;',
      p: 'color:rgb(187, 34, 77); font-weight: bold; font-size: 17px;',
      q: 'color: #6F42C1; font-weight: bold; font-size: 17px;',
      B: 'color: #0056b3; font-weight: bold; font-size: 17px;',
      D: 'color: #1e7e34; font-weight: bold; font-size: 17px;',
      P: 'color:rgb(187, 34, 77); font-weight: bold; font-size: 17px;',
      Q: 'color: #5a32a3; font-weight: bold; font-size: 17px;'
    };

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const textNodes = [];

    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (/[bdpqBDPQ]/.test(node.nodeValue)) {
        textNodes.push(node);
      }
    }

    textNodes.forEach((textNode) => {
      const span = document.createElement('span');
      span.innerHTML = textNode.nodeValue.replace(/[bdpqBDPQ]/g, (char) => {
        return `<span data-mirror-highlight style="${mirrorStyles[char]}">${char}</span>`;
      });
      textNode.parentNode.replaceChild(span, textNode);
    });
  } else {
    document.querySelectorAll('[data-mirror-highlight]').forEach(el => {
      el.replaceWith(document.createTextNode(el.innerText));
    });
  }

  // Handle syllable toggle
  if (settings.syllableEnabled) {
    const splitSyllables = (word) => {
      return word
        .replace(/([aeiouy]{1,2})([^aeiouy\s])/gi, "$1|$2")
        .split("|");
    };

    const walk = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent.trim();
        if (!text || node.parentNode.classList?.contains("syllable-wrapper")) return;

        const words = text.split(/(\s+)/);
        const wrapper = document.createElement("span");
        wrapper.className = "syllable-wrapper";

        words.forEach(word => {
          if (/^\s+$/.test(word)) {
            wrapper.appendChild(document.createTextNode(word));
          } else if (/\w/.test(word)) {
            const syllables = splitSyllables(word);
            syllables.forEach((syl, idx) => {
              const span = document.createElement("span");
              span.textContent = syl;
              span.style.fontSize = "14px";
              span.style.backgroundColor = idx % 2 === 0 ? "rgba(212, 160, 229, 0.3)" : "rgba(254, 207, 127, 0.3)";
              span.style.borderRadius = "2px";
              span.style.padding = "0 2px";
              wrapper.appendChild(span);
            });
          } else {
            wrapper.appendChild(document.createTextNode(word));
          }
        });

        node.parentNode.replaceChild(wrapper, node);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        Array.from(node.childNodes).forEach(walk);
      }
    };

    walk(document.body);
  } else {
    document.querySelectorAll(".syllable-wrapper").forEach(el => {
      const fragment = document.createDocumentFragment();
      el.childNodes.forEach(child => {
        fragment.appendChild(document.createTextNode(child.textContent));
      });
      el.replaceWith(fragment);
    });
  }
}

function resetStyles() {
  document.body.style.fontSize = '';
  document.body.style.lineHeight = '';
  document.body.style.wordSpacing = '';
  document.body.style.letterSpacing = '';
  document.body.style.color = '';
  document.body.style.textAlign = '';

  const overlay = document.getElementById('readefine-overlay');
  if (overlay) overlay.remove();

  const line = document.getElementById('readefine-hover-line');
  if (line) line.remove();
  document.removeEventListener('mousemove', window.readefineTrack);

  const style = document.getElementById('readefine-font-style');
  if (style) style.remove();

  document.querySelectorAll('[data-mirror-highlight]').forEach(el => {
    el.replaceWith(document.createTextNode(el.innerText));
  });

  document.querySelectorAll(".syllable-wrapper").forEach(el => {
    const fragment = document.createDocumentFragment();
    el.childNodes.forEach(child => {
      fragment.appendChild(document.createTextNode(child.textContent));
    });
    el.replaceWith(fragment);
  });
}

function refreshProfileList() {
  chrome.storage.sync.get(null, (items) => {
    const profileSelect = document.getElementById('profileSelect');
    profileSelect.innerHTML = '';

    Object.keys(items)
      .filter(key => key.startsWith('readefine_profile_'))
      .forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = key.replace('readefine_profile_', '');
        profileSelect.appendChild(option);
      });
  });
}

document.getElementById('saveProfile').addEventListener('click', () => {
  const name = document.getElementById('profileName').value.trim();
  if (!name) return alert("Please enter a profile name.");

  const key = 'readefine_profile_' + name;
  const settings = getValues();

  chrome.storage.sync.set({ [key]: settings }, () => {
    alert("Profile saved!");
    refreshProfileList();
    document.getElementById('profileName').value = '';
  });
});

document.getElementById('loadProfile').addEventListener('click', () => {
  const key = document.getElementById('profileSelect').value;
  if (!key) return;

  chrome.storage.sync.get(key, (data) => {
    const settings = data[key];
    if (!settings) return alert("Profile not found.");

    document.getElementById('fontSizeValue').value = parseFloat(settings.fontSize);
    document.getElementById('lineSpacingValue').value = settings.lineSpacing;
    document.getElementById('wordSpacingValue').value = parseFloat(settings.wordSpacing);
    document.getElementById('letterSpacingValue').value = parseFloat(settings.letterSpacing);
    document.getElementById('overlayOpacityValue').value = settings.overlayOpacity;
    document.getElementById('themeSelect').value = settings.theme;
    document.getElementById('hoverToggle').checked = settings.hoverEnabled;
    document.getElementById('hoverLineColor').value = settings.hoverLineColor;
    document.getElementById('hoverOpacityValue').value = settings.hoverOpacity;
    document.getElementById('fontSelect').value = settings.fontSelect;
    document.getElementById('leftAlignToggle').checked = settings.textAlign === 'left';
    document.getElementById('mirrorToggle').checked = settings.mirrorEnabled || false;
    document.getElementById('syllableToggle').checked = settings.syllableEnabled || false;

    sendSettings();
  });
});

document.getElementById('deleteProfile').addEventListener('click', () => {
  const key = document.getElementById('profileSelect').value;
  if (!key) return;

  chrome.storage.sync.remove(key, () => {
    alert("Profile deleted.");
    refreshProfileList();
  });
});

// Mirror toggle event listener (now profile-specific)
document.getElementById('mirrorToggle').addEventListener('change', sendSettings);

// Syllable toggle event listener (now profile-specific)
document.getElementById('syllableToggle').addEventListener('change', sendSettings);

let voices = [];

function populateVoiceList() {
  voices = speechSynthesis.getVoices();
  const voiceSelect = document.getElementById('voiceSelect');
  voiceSelect.innerHTML = '';
  voices.forEach((voice, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
}

window.speechSynthesis.onvoiceschanged = populateVoiceList;
populateVoiceList();

document.getElementById('speakButton').addEventListener('click', () => {
  const voiceIndex = parseInt(document.getElementById('voiceSelect').value);

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: (voiceIndex) => {
        const text = window.getSelection().toString().trim();
        if (text) {
          const utterance = new SpeechSynthesisUtterance(text);
          const voices = speechSynthesis.getVoices();
          utterance.voice = voices[voiceIndex];
          utterance.volume = 1;
          utterance.rate = 1;
          speechSynthesis.speak(utterance);
        } else {
          alert("Please highlight text on the page to read aloud.");
        }
      },
      args: [voiceIndex]
    });
  });
});

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(sec => sec.classList.remove('active'));
    
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

window.onload = () => {
  sendSettings();
  refreshProfileList();
  chrome.storage.sync.get("readefineEnabled", data => {
    const masterToggle = document.getElementById("readefineMasterToggle");
    masterToggle.checked = data.readefineEnabled !== false;
  });
};