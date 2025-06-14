# PROJECT READefine  
**Redefine the way you read**

---

### 👩‍💻 Authors  
- **Kiruthika Murugesan** — [kiruthikaa-codes (GitHub)](https://github.com/kiruthikaa-codes)  
- **Himaja Bardhan** — [b-himaja (GitHub)](https://github.com/b-himaja)

---

## 🎯 Purpose

Dyslexia affects the reading ability of millions around the world, making digital content extremely strenuous to access.  
**READefine** is a Chrome extension designed to improve the digital reading experience for dyslexic readers by offering customizable, clean, and accessible formatting.

---

## 👥 Target Users

While READefine is primarily designed for users with dyslexia, it also benefits:

- Students working through dense reading materials
- Professionals seeking reduced eye strain
- Parents/educators supporting dyslexic readers
- Neurodivergent individuals (e.g., ADHD, autism)
- Users with visual impairments or poor eyesight

---

## ❓ What is Dyslexia?

Dyslexia is a **language-based learning difference** that affects reading, writing, and spelling — unrelated to intelligence or vision.  
Symptoms include:

- Difficulty decoding words  
- Lack of reading fluency  
- Poor spelling and writing  
- Reduced phonological awareness  

**Note:** Dyslexia exists on a spectrum; symptoms vary in severity from person to person.

---

## 🔍 Existing Solutions and Their Gaps

### 1. **OpenDyslexic Font**
While popular, studies (e.g., Rello & Baeza-Yates, 2013) show:

- No significant improvement in reading speed or accuracy  
- Some users found the shapes distracting  
- Font preferences are personal — no one-size-fits-all

### 2. **Existing Extensions**
Current Chrome extensions often:

- Rely solely on OpenDyslexic font  
- Offer limited, cluttered features  
- Are paid or lack accessibility options

**READefine** solves this by combining diverse accessibility features into a **free**, **open-source**, and **user-friendly** interface.

---

## 🧭 Project Goals

- Make digital reading **accessible**, **personalized**, and **inclusive**
- Provide a **customizable, clutter-free** interface
- Offer **visual adjustments** beyond font (spacing, contrast, overlays)
- Support **text-to-speech**
- Stay **free and open-source**

---

## 🧩 Features

- **Font Customization** — Change font types and spacing  
- **Adjustable Spacing** — Line, word, and letter spacing  
- **Left Justification** — Improves readability  
- **Overlay Filters** — Reduce harsh backgrounds  
- **Text-to-Speech** — With voice customization  
- **Syllable Emphasis** — Alternate syllables for easier reading  
- **Hover to Highlight** — Track lines visually  
- **Theme Toggles** — Carefully curated themes  
- **Mirror Reversal Assist** — Highlights confusing letters  
- **User Profiles** — Save personal settings

---

## 🎨 Design Philosophy

- **Minimalism** — Reduce visual clutter  
- **User Empathy** — Designed with dyslexic users in mind  
- **Accessibility First** — Inclusive and readable

### 🎨 Available Themes

- Cream: `#FAF3DD`  
- Pale Blue-Grey: `#E3EAF2`  
- Muted Sage Green: `#DDEAD1`  
- Warm Pastel Peach: `#FDF1E6`

---

## 🏗 Technical Architecture

### 🔧 Tech Stack

- **HTML5** — UI structure  
- **CSS3** — Styling and themes  
- **JavaScript** — Extension logic and interactivity  
- **Chrome Extension APIs** — Storage and tab interaction  
- **Web Speech API** — TTS (Text-to-Speech)

The extension is **lightweight** and **framework-free**.

---

### 📁 Chrome Extension Structure

| File             | Purpose |
|------------------|---------|
| `manifest.json`  | Metadata & permissions |
| `popup.html`     | Extension UI layout |
| `popup.js`       | Main UI logic |
| `background.js`  | Persistent background operations |
| `content.js`     | Handles mirror assist logic |
| `popup.css`      | Popup styling |
| `styles.css`     | Overlay and theme styling |

---

## ⚠️ Limitations

- Syllable splitting uses **basic regex**, not linguistic parsing  
- Uses **native Web Speech API** — convenient but not fully reliable  
- **Limited themes** — intentional to avoid overwhelming users

---

## 🚀 Future Integrations

- PDF support  
- Mobile browser version  
- AI-powered text summarization  
- Support for other conditions (e.g., ADHD, dysgraphia)  
- NLP for smarter, context-aware processing

---

## 📚 References

- [British Dyslexia Association Style Guide](https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide)  
- [UX Movement - Dyslexia UX Tips](https://uxmovement.com/content/6-surprising-bad-practices-that-hurt-dyslexic-users/)  
- [W3C WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/)

---
