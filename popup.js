const stepSizes = {
  fontSize: 1,
  lineSpacing: 0.1,
  wordSpacing: 0.05,
  letterSpacing: 0.05,
  overlayOpacity: 0.05
};

function getValues() {
  return {
    fontSize: parseFloat(document.getElementById('fontSizeValue').value),
    lineSpacing: parseFloat(document.getElementById('lineSpacingValue').value),
    wordSpacing: parseFloat(document.getElementById('wordSpacingValue').value),
    letterSpacing: parseFloat(document.getElementById('letterSpacingValue').value),
    overlayOpacity: parseFloat(document.getElementById('overlayOpacityValue').value),
    theme: document.getElementById('themeSelect').value
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
    theme: values.theme
  };

  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: applySettings,
      args: [settings]
    });
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

// Trigger on typing/editing inputs
document.querySelectorAll('input, select').forEach(el => {
  el.addEventListener('input', sendSettings);
});

window.onload = sendSettings;

function applySettings(settings) {
  document.body.style.fontSize = settings.fontSize;
  document.body.style.lineHeight = settings.lineSpacing;

// Apply line spacing to heading tags
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
      cream:   { bg: '#FAF3DD', text: '#2A2A2A' },
      bluegrey:{ bg: '#E3EAF2', text: '#2A2A2A' },
      sage:    { bg: '#DDEAD1', text: '#2B2B2B' },
      peach:   { bg: '#FDF1E6', text: '#2D2D2D' },
      lavender:{ bg: '#EAE6F8', text: '#1C1C1C' }
    };

    const selected = themes[settings.theme];
    overlay.style.backgroundColor = selected.bg;
    document.body.style.color = selected.text;

    document.body.appendChild(overlay);
  }
}

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

// Wait for voices to load
window.speechSynthesis.onvoiceschanged = populateVoiceList;

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

document.getElementById('speakButton').addEventListener('click', () => {
  const voiceIndex = parseInt(document.getElementById('voiceSelect').value);
  const volume = parseFloat(document.getElementById('volumeControl').value);
  const rate = parseFloat(document.getElementById('rateControl').value);

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: (voiceIndex, volume, rate) => {
        const text = window.getSelection().toString().trim();
        if (text) {
          const utterance = new SpeechSynthesisUtterance(text);
          const voices = speechSynthesis.getVoices();
          utterance.voice = voices[voiceIndex];
          utterance.volume = volume;
          utterance.rate = rate;
          speechSynthesis.speak(utterance);
        } else {
          alert("Please highlight text on the page to read aloud.");
        }
      },
      args: [voiceIndex, volume, rate]
    });
  });
});
