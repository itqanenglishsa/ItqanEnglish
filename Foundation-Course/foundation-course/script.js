
// ==========================================
// 1. طبقة حماية المحتوى ومنع التفتيش (Anti-Piracy)
// ==========================================
const initCourseProtection = () => {
  document.addEventListener('contextmenu', (e) => e.preventDefault());

  window.addEventListener('keydown', (e) => {
    if (e.key === 'F12') { e.preventDefault(); return false; }
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'i' || e.key === 'j')) { e.preventDefault(); return false; }
    if (e.ctrlKey && (e.key === 'S' || e.key === 's' || e.key === 'C' || e.key === 'c' || e.key === 'U' || e.key === 'u')) { e.preventDefault(); return false; }
  });

  setInterval(() => {
    const startTime = performance.now();
    debugger; 
    const endTime = performance.now();
    if (endTime - startTime > 50) {
      localStorage.clear();
      window.location.reload();
    }
  }, 500);
};

// تشغيل الحماية فوراً عند تحميل الملف
initCourseProtection();

// Itqan English - Core Interactive Logic & Rendering Engine
document.addEventListener("DOMContentLoaded", () => {
  // 1. Core State Management Variables
  
  let activeSlideId = localStorage.getItem("itqan_active_slide") || "cover";
  let currentUnitFilter = 1;
  let isPresenterMode = false;
  let speakingId = "";
  let muteSound = localStorage.getItem("itqan_mute_sound") === "true";
  let ttsRate = parseFloat(localStorage.getItem("itqan_tts_rate") || "0.8");
  let voiceGender = localStorage.getItem("itqan_voice_gender") || "female"; // 'female' | 'male'
  let searchQuery = "";
  let expandedUnits = new Set();
  
  let bookmarks = [];
  try {
    bookmarks = JSON.parse(localStorage.getItem("itqan_bookmarks") || "[]");
  } catch {
    bookmarks = [];
  }

  let quizAnswers = {};
  try {
    quizAnswers = JSON.parse(localStorage.getItem("itqan_quiz_answers") || "{}");
  } catch {
    quizAnswers = {};
  }

  let quizResults = {};
  try {
    quizResults = JSON.parse(localStorage.getItem("itqan_quiz_results") || "{}");
  } catch {
    quizResults = {};
  }

  let studentName = localStorage.getItem("itqan_student_name") || "";
  
  let examAnswers = {};
  try {
    examAnswers = JSON.parse(localStorage.getItem("itqan_exam_answers") || "{}");
  } catch {
    examAnswers = {};
  }

  let examSubmitted = localStorage.getItem("itqan_exam_submitted") === "true";
  let currentExamQuestionIndex = 0;

  // Track if a multi-line conversation playback is running
  let conversationTimeoutId = null;
  let activeConversationIndex = -1;

  // 2. Fetch DOM Nodes
  const rootContainer = document.querySelector(".app-container");
  const slideListContainer = document.getElementById("slide-list-container");
  const searchInput = document.getElementById("search-input");
  const searchClear = document.getElementById("search-clear");
  const sidebarToggle = document.getElementById("sidebar-toggle");
  const sidebarNode = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebar-overlay");
  
  const muteBtn = document.getElementById("mute-btn");
  const presenterBtn = document.getElementById("presenter-btn");
  const voiceRateSlider = document.getElementById("voice-rate-slider");
  const toggleMale = document.getElementById("toggle-male");
  const toggleFemale = document.getElementById("toggle-female");
  
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const dotIndicators = document.getElementById("dot-indicators");
  const timelineSegment = document.getElementById("timeline-segment");
  const timelineDot = document.getElementById("timeline-dot");
  const bookmarkBtn = document.getElementById("bookmark-btn");
  const slideActionDeck = document.getElementById("slide-action-deck");
  
  const presenterExitBanner = document.getElementById("presenter-exit-banner");

  // Synchronize unit filter on initialization
  const initialSlide = window.slidesData.find(s => s.id === activeSlideId) || window.slidesData[0];
  currentUnitFilter = initialSlide.unit;
  expandedUnits.add(currentUnitFilter);

// ===========================
// Load available voices once
// ===========================

let availableVoices = [];

function loadVoices() {
  availableVoices = window.speechSynthesis.getVoices();

  console.table(
    availableVoices.map(v => ({
      name: v.name,
      lang: v.lang,
      default: v.default,
      local: v.localService
    }))
  );
}

if ("speechSynthesis" in window) {
  loadVoices();

  window.speechSynthesis.onvoiceschanged = () => {
    loadVoices();
  };
}

  // 3. Audio Pronunciation / TTS Engine
  const speakText = (text, voiceLang = "en-US") => {
    if (muteSound) return;
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel(); // Terminate preceding speaking queues
      
      // Clear emojis and parenthesized terms for cleaner vocal synthesis
      const cleanText = text
        .replace(/[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD00-\uDFFF]/g, "")
        .replace(/\(.*?\)/g, "")
        .trim();

      let textToSpeak = cleanText;

      if (cleanText.toLowerCase() === "sh") {
        textToSpeak = "shee";
      } else if (/^[A-Z]$/.test(cleanText)) {
        textToSpeak = cleanText.toLowerCase();
      }

      const utterance = new SpeechSynthesisUtterance(textToSpeak);

      utterance.lang = voiceLang;
      utterance.rate = ttsRate;

      // ===========================
// Smart cross-platform voice selection
// ===========================

const voices = availableVoices;

if (voices.length > 0) {

  const voicePriority = {

    female: [
      // Windows
      "zira",
      "jenny",
      "aria",
      "michelle",
      "hazel",
      "susan",

      // Apple
      "samantha",
      "ava",
      "allison",
      "karen",
      "moira",
      "victoria",
      "fiona",
      "tessa",
      "veena",
      "martha",

      // Google
      "google uk english female",
      "google us english"
    ],

    male: [
      // Windows
      "david",
      "mark",
      "guy",
      "christopher",
      "george",

      // Apple
      "alex",
      "daniel",
      "aaron",
      "arthur",
      "fred",
      "bruce",
      "ralph",
      "junior",
      "rishi",

      // Google
      "google uk english male",
      "google us english male"
    ]

  };

  let preferredVoice = null;

  const langPrefix = voiceLang.startsWith("ar") ? "ar" : "en";

  const candidates = voices.filter(v =>
    v.lang.toLowerCase().startsWith(langPrefix)
  );

  if (voiceLang.startsWith("en")) {

    const preferredNames =
      voicePriority[voiceGender] || voicePriority.female;

    outerLoop:
    for (const keyword of preferredNames) {
      for (const voice of candidates) {
        if (voice.name.toLowerCase().includes(keyword)) {
          preferredVoice = voice;
          break outerLoop;
        }
      }
    }

    // Fallback لأي صوت إنجليزي
    if (!preferredVoice) {
      preferredVoice =
        candidates.find(v => v.default) ||
        candidates[0];
    }

  } else {

    preferredVoice =
      candidates.find(v => v.default) ||
      candidates[0];

  }

  // آخر حل احتياطي
  if (!preferredVoice) {
    preferredVoice = voices.find(v => v.default) || voices[0];
  }

  if (preferredVoice) {
    utterance.voice = preferredVoice;

    console.log(
      "Selected voice:",
      preferredVoice.name,
      "|",
      preferredVoice.lang
    );
  }

}

      // Track active speaking ID to trigger CSS animations
      speakingId = text;
      updateVisualWavesState(true);

      utterance.onend = () => {
        speakingId = "";
        updateVisualWavesState(false);
      };
      utterance.onerror = () => {
        speakingId = "";
        updateVisualWavesState(false);
      };


      window.speechSynthesis.speak(utterance);
    }
  };

  // 4. Render Active Slide Content
  const renderActiveSlide = () => {
    // Terminate any ongoing conversation timelines
    if (conversationTimeoutId) {
      clearTimeout(conversationTimeoutId);
      conversationTimeoutId = null;
    }
    activeConversationIndex = -1;

    const currentSlideIndex = window.slidesData.findIndex(s => s.id === activeSlideId);
    const slide = window.slidesData[currentSlideIndex] || window.slidesData[0];
    
    // Auto sync unit filter with active slide
    currentUnitFilter = slide.unit;

    // Check if bookmarked
    const isBookmarked = bookmarks.includes(slide.id);
    if (bookmarkBtn) {
      if (isBookmarked) {
        bookmarkBtn.classList.add("bookmarked");
        bookmarkBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>`;
      } else {
        bookmarkBtn.classList.remove("bookmarked");
        bookmarkBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>`;
      }
    }

    // Capture standard slide card container
    const cardBody = document.getElementById("slide-card-body");
    if (!cardBody) return;

    cardBody.className = `slide-card slide-entering type-${slide.type}`;
    
    // Clear out custom templates and render corresponding HTML blocks based on type
    let htmlContent = "";

    switch (slide.type) {
      case "cover":
        htmlContent = `
          <div class="cover-slide-content">
            <div class="cover-decor-ring">

             <div class="cover-decor-inner">
  <img src="logo.png" class="cover-logo" alt="Logo">

</div>

            </div>
            
            <div class="cover-subtitle">${slide.subtitle || ""}</div>
            <p class="cover-desc">${slide.description || ""}</p>
            <button class="start-btn" id="cover-start-btn">
              ابدأ الرحلة التعليمية
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        `;
        break;
      
        


      case "intro":
        htmlContent = `
          <div class="intro-slide-header">
            <span class="intro-tag">${slide.subtitle || "الوحدة"}</span>

            <h2 class="intro-title">${slide.title}</h2>
            <p class="intro-desc">${slide.description || ""}</p>
          </div>
          <div class="bullets-container">
            ${(slide.bullets || []).map(bullet => `
              <div class="bullet-row">
                <span class="bullet-check-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <p class="bullet-text">${bullet}</p>
              </div>
            `).join("")}
          </div>
        `;
        break;

      case "grid":
        if (slide.id === "u1-grid") {
          // Alphabet Grid cell builders
          const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
          htmlContent = `
            <div class="intro-slide-header">
              <h2 class="intro-title">${slide.title}</h2>
              <p class="intro-desc">${slide.description || ""}</p>
            </div>
            <div class="alphabet-grid">
              ${alphabets.map(char => `
                <div class="alphabet-cell" data-char="${char}">
                  <span class="cell-letter">${char}</span>
                  <span class="cell-letter-sub">${char.toLowerCase()}</span>
                  <svg class="grid-speaker" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                </div>
              `).join("")}
            </div>
            ${slide.note ? `<div class="note-box">${slide.note}</div>` : ""}
          `;
        } else if (slide.id === "u6-numbers") {
          // Numbers Grid cell builders
          htmlContent = `
            <div class="intro-slide-header">
              <h2 class="intro-title">${slide.title}</h2>
              <p class="intro-desc">${slide.description || ""}</p>
            </div>
            <div class="grid-container" style="grid-template-cols: repeat(auto-fill, minmax(110px, 1fr));">
              ${window.numbersList.map(item => `
                <div class="alphabet-cell" data-number-text="${item.text}" style="aspect-ratio: auto; padding: 12px 6px;">
                  <span class="cell-letter" style="font-size: 1.6rem; font-family: var(--font-mono); color: var(--brand-blue);">${item.num}</span>
                  <span class="cell-letter-sub" style="font-size: 0.8rem; font-weight: 800; color: var(--text-dark); margin-top: 2px;">${item.text}</span>
                  <span style="font-size: 0.65rem; font-weight: 800; color: var(--brand-terracotta);">${item.spelling}</span>
                  <span style="font-size: 0.72rem; font-weight: 800; color: var(--text-light); margin-top: 4px;">${item.arabic}</span>
                </div>
              `).join("")}
            </div>
            ${slide.note ? `<div class="note-box">${slide.note}</div>` : ""}
          `;
        }
        break;

      case "letter-detail": {
        let rawSpeakWord = "";
        if (slide.letter) {
          rawSpeakWord = slide.letter;
        } else {
          // Extract text inside parentheses first, e.g. "1. الأسماء (Nouns)" -> "Nouns"
          const parenMatch = slide.title.match(/\(([^)]+)\)/);
          if (parenMatch) {
            rawSpeakWord = parenMatch[1].trim();
          } else {
            // Fallback: search for first English characters
            const engMatch = slide.title.match(/[a-zA-Z\s]+/);
            if (engMatch) {
              rawSpeakWord = engMatch[0].trim();
            } else {
              rawSpeakWord = slide.title;
            }
          }
        }
      
        // Clean up "A, a" to just "A" for single pronunciation
        let cleanSpeakWord = rawSpeakWord;
        if (cleanSpeakWord.includes(",")) {
          cleanSpeakWord = cleanSpeakWord.split(",")[0].trim();
        }

        const singularMap = {
          "Nouns": "Nouns",
          "Verbs": "Verbs",
          "Prepositions": "Prepositions",
          "Adjectives": "Adjectives",
          "Adverbs": "Adverbs",
          "Conjunctions": "Conjunctions",
          "Pronouns": "Pronouns"
        };
        const displayWord = singularMap[cleanSpeakWord] || cleanSpeakWord;

        htmlContent = `
          <div class="letter-detail-merged-header" data-speak-title="${displayWord}">
            <div class="header-main-row">
              <div class="header-title-section">
                <div class="title-and-audio-row">
                  <h2 class="intro-title">${slide.title}</h2>
                  <button class="speaker-badge-btn" title="استمع لنطق الكلمة الإنجليزية" data-speak-btn="${displayWord}">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    </svg>
                  </button>
                </div>
                <p class="intro-desc">${slide.description || ""}</p>
              </div>
            </div>
          </div>

          <div class="letter-detail-layout" style="display: block; margin-top: 24px;">
            <div class="letter-examples-deck" style="display: grid; grid-template-cols: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px;">
              ${(slide.examples || []).map(ex => `
                <div class="example-card" data-speak="${ex.word}" style="margin: 0; height: 100%;">
                  <div class="example-left">
                    <span class="example-emoji">${ex.emoji}</span>
                    <div class="example-text">
                      <span class="example-word-en">${ex.word}</span>
                      <span class="example-word-ar">${ex.arabic}</span>
                    </div>
                  </div>
                  <button class="speaker-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                  </button>
                </div>
              `).join("")}
            </div>
          </div>
          ${slide.note ? `<div class="note-box">${slide.note}</div>` : ""}
        `;
        break;
      }

      case "sounds-intro":
        htmlContent = `
          <div class="intro-slide-header">
            <h2 class="intro-title">${slide.title}</h2>
            <p class="intro-desc">${slide.subtitle || ""}</p>
          </div>
          <div class="bullets-container">
            ${(slide.bullets || []).map(b => `
              <div class="bullet-row">
                <span class="bullet-check-icon" style="background-color: rgba(33, 78, 207, 0.08); color: var(--brand-blue);">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </span>
                <p class="bullet-text" style="font-size: 0.95rem;">${b}</p>
              </div>
            `).join("")}
          </div>
        `;
        break;

      case "sounds-compound":
      case "silent-letters":
        htmlContent = `
          <div class="intro-slide-header">
            <h2 class="intro-title">${slide.title}</h2>
            <p class="intro-desc">${slide.description || ""}</p>
          </div>
          <div class="sounds-list">
            ${(slide.sounds || []).map(snd => `
              <div class="sound-row-card">
                <div class="sound-row-header">
                  <span class="sound-tag">${snd.sound}</span>
                  <span class="sound-pron">${snd.arabicPron}</span>
                </div>
                <div class="sound-examples-pillbox">
                  ${(snd.examples || []).map(ex => `
                    <div class="sound-example-pill" data-speak-en="${ex.english}">
                      <svg class="sound-speak-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" xmlns="http://www.w3.org/2000/svg"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon></svg>
                      <div class="sound-ex-texts">
                        <span class="sound-ex-en">${ex.english}</span>
                        <span class="sound-ex-ar">${ex.arabic}</span>
                      </div>
                    </div>
                  `).join("")}
                </div>
              </div>
            `).join("")}
          </div>
          ${slide.note ? `<div class="note-box">${slide.note}</div>` : ""}
        `;
        break;

      case "grammar-explanation":
        htmlContent = `
          <div class="intro-slide-header">
            <h2 class="intro-title">${slide.title}</h2>
            <p class="intro-desc">${slide.description || ""}</p>
          </div>
          <div class="explanation-card">
            <div class="bullets-container" style="margin-top: 0;">
              ${(slide.bullets || []).map(b => `
                <div class="bullet-row" style="background-color: #fff;">
                  <span class="bullet-check-icon" style="background-color: rgba(33, 78, 207, 0.08); color: var(--brand-blue);">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
                  </span>
                  <p class="bullet-text" style="font-size: 0.92rem;">${b}</p>
                </div>
              `).join("")}
            </div>
            ${slide.note ? `<div class="note-box">${slide.note}</div>` : ""}
          </div>
        `;
        break;

      case "grammar-table":
      case "vocab-table":
        if (slide.id === "u3-pronouns") {
          htmlContent = `
            <div class="intro-slide-header">
              <h2 class="intro-title">${slide.title}</h2>
              <p class="intro-desc">${slide.description || ""}</p>
            </div>
            <div class="table-scroll">
              <table class="itqan-table pronouns-table">
                <thead>
                  <tr>
                    <th style="border-radius: 16px 0 0 0; text-align: left; width: 30%;">الضمير (Pronoun)</th>
                    <th style="text-align: center; width: 30%;">الترجمة بالعربية</th>
                    <th style="border-radius: 0 16px 0 0; text-align: right; width: 40%;">الاستخدام</th>
                  </tr>
                </thead>
                <tbody>
                  ${(slide.grammarRows || []).map(row => `
                    <tr>
                      <td class="speak-cell" data-speak-val="${row.subject}" title="استمع للضمير: ${row.subject}" style="font-family: var(--font-mono); font-weight: 800; color: var(--brand-blue); font-size: 1.15rem; text-align: left;">
                        <div class="cell-speak-wrapper">
                          <span class="speaker-icon-small">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon></svg>
                          </span>
                          <span>${row.subject}</span>
                        </div>
                      </td>
                      <td class="speak-cell" data-speak-val="${row.subject}" title="استمع للضمير: ${row.subject}" style="font-weight: 800; color: var(--brand-blue); background-color: rgba(33, 78, 207, 0.03); font-size: 1.1rem; text-align: center; direction: rtl;">${row.verb}</td>
                      <td style="color: var(--text-dark); font-weight: 500; font-size: 0.95rem; line-height: 1.5; text-align: right; direction: rtl;">${row.object}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
            ${slide.note ? `<div class="note-box">${slide.note}</div>` : ""}
          `;
        } else if (slide.type === "vocab-table") {
          htmlContent = `
            <div class="intro-slide-header">
              <h2 class="intro-title">${slide.title}</h2>
              <p class="intro-desc">${slide.description || ""}</p>
            </div>
            <div class="table-scroll">
              <table class="itqan-table">
                <thead>
                  <tr>
                    <th style="border-radius: 16px 0 0 0; text-align: left; width: 35%;">العبارة (Phrase)</th>
                    <th style="text-align: center; width: 30%;">الترجمة بالعربية</th>
                    <th style="border-radius: 0 16px 0 0; text-align: right; width: 35%;">الملاحظات</th>
                  </tr>
                </thead>
                <tbody>
                  ${(slide.grammarRows || []).map(row => `
                    <tr>
                      <td class="speak-cell" data-speak-val="${row.subject}" title="استمع للعبارة: ${row.subject}" style="font-weight: 800; color: var(--brand-blue); font-size: 1.1rem; text-align: left;">
                        <div class="cell-speak-wrapper">
                          <span class="speaker-icon-small">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon></svg>
                          </span>
                          <span>${row.subject}</span>
                        </div>
                      </td>
                      <td class="speak-cell" data-speak-val="${row.subject}" title="استمع للعبارة: ${row.subject}" style="font-weight: 700; text-align: center; direction: rtl;">${row.verb}</td>
                      <td style="color: var(--text-muted); font-size: 0.82rem; text-align: right; direction: rtl;">${row.object}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
            ${slide.note ? `<div class="note-box">${slide.note}</div>` : ""}
          `;
        } else {
          htmlContent = `
            <div class="intro-slide-header">
              <h2 class="intro-title">${slide.title}</h2>
              <p class="intro-desc">${slide.description || ""}</p>
            </div>
            <div class="table-scroll">
              <table class="itqan-table">
                <thead>
                  <tr>
                    <th style="border-radius: 16px 0 0 0; text-align: left;">${slide.id === "u2-table-question" ? "Verb" : "Subject"}</th>
                    <th style="text-align: left;">${slide.id === "u2-table-question" ? "Subject" : "Verb"}</th>
                    <th style="text-align: left;">Object / Complement</th>
                    <th style="border-radius: 0 16px 0 0; text-align: center;">الترجمة</th>
                  </tr>
                </thead>
                <tbody>
                  ${(slide.grammarRows || []).map(row => `
                    <tr>
                      <td class="speak-cell" data-speak-val="${row.subject}" title="${slide.id === "u2-table-question" ? "استمع للفعل" : "استمع للفاعل"}: ${row.subject}" style="font-family: var(--font-mono); font-weight: 800; color: var(--brand-blue);">
                        <div class="cell-speak-wrapper">
                          <span class="speaker-icon-small">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon></svg>
                          </span>
                          <span>${row.subject}</span>
                        </div>
                      </td>
                      <td class="speak-cell" data-speak-val="${row.verb}" title="${slide.id === "u2-table-question" ? "استمع للفاعل" : "استمع للفعل"}: ${row.verb}" style="font-weight: 700;">
                        <div class="cell-speak-wrapper">
                          <span class="speaker-icon-small">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon></svg>
                          </span>
                          <span>${row.verb}</span>
                        </div>
                      </td>
                      <td class="speak-cell" data-speak-val="${row.object}" title="استمع للمكمل: ${row.object}" style="color: var(--text-muted);">
                        <div class="cell-speak-wrapper">
                          <span class="speaker-icon-small">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon></svg>
                          </span>
                          <span>${row.object}</span>
                        </div>
                      </td>
                      <td class="speak-cell" data-speak-val="${row.subject} ${row.verb} ${row.object}" title="استمع للجملة كاملة: ${row.subject} ${row.verb} ${row.object}" style="text-align: center; color: var(--text-dark); font-weight: 800; direction: rtl;">
                        <div class="cell-speak-wrapper" style="justify-content: center;">
                          <span class="speaker-icon-small">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon></svg>
                          </span>
                          <span>${row.arabic || ""}</span>
                        </div>
                      </td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
            ${slide.note ? `<div class="note-box">${slide.note}</div>` : ""}
          `;
        }
        break;

      case "conversation":
        htmlContent = `
          <div class="intro-slide-header">
            <h2 class="intro-title">${slide.title}</h2>
            <p class="intro-desc">${slide.description || ""}</p>
          </div>
          <div style="display: flex; justify-content: flex-start; margin-bottom: 12px;">
            <button class="play-all-dialogue-btn" id="play-dialogue-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              تشغيل المحادثة تتابعياً
            </button>
          </div>
          <div class="conversation-deck">
            ${(slide.conversation || []).map((line, idx) => `
              <div class="chat-bubble speaker-${line.speaker.toLowerCase()}" data-index="${idx}" data-speak-chat="${line.english}">
                <span class="speaker-tag">المتحدث ${line.speaker}</span>
                <span class="chat-en">${line.english}</span>
                <span class="chat-ar">${line.arabic}</span>
                <span class="bubble-play-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon></svg>
                </span>
              </div>
            `).join("")}
          </div>
        `;
        break;

      case "quiz":
        const answeredVal = quizAnswers[slide.id] || "";
        const resultStatus = quizResults[slide.id] || null;
        htmlContent = `
          <div class="quiz-box">
            <div class="quiz-question-box">
              <h3 class="quiz-q-en">${slide.quizData.question}</h3>
              <p class="quiz-q-ar">${slide.quizData.arabicQuestion || ""}</p>
              ${slide.quizData.audioText ? `
                <div style="display: flex; justify-content: flex-end; margin-top: 12px;">
                  <button class="quiz-play-audio-btn shadow-sm" data-audio-text="${slide.quizData.audioText}" style="
                    background-color: #214ecf;
                    color: white;
                    border: none;
                    border-radius: 12px;
                    padding: 8px 16px;
                    font-size: 13px;
                    font-weight: 800;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-family: 'Almarai', sans-serif;
                  ">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: #ff9800;">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    </svg>
                    تشغيل الصوت المسموع
                  </button>
                </div>
              ` : ""}
            </div>
            <div class="quiz-options-grid">
              ${slide.quizData.options.map((opt, oIdx) => {
                const charCode = String.fromCharCode(65 + oIdx); // A, B, C, D
                let optClass = "";
                if (answeredVal === opt) {
                  if (resultStatus === "correct") optClass = "correct-flash";
                  else if (resultStatus === "incorrect") optClass = "incorrect-flash";
                  else optClass = "selected";
                }
                return `
                  <div class="quiz-option-card ${optClass}" data-option="${opt}">
                    <span class="option-index">${charCode}</span>
                    <span class="option-label">${opt}</span>
                  </div>
                `;
              }).join("")}
            </div>
            
            ${resultStatus ? `
              <div class="quiz-feedback-box ${resultStatus}">
                <span class="hint-text">
                  <strong>${resultStatus === "correct" ? "إجابة ممتازة وصحيحة! ✓" : "ليست الإجابة المطلوبة تماماً. تلميح المساعدة:"}</strong>
                  <br>${slide.quizData.hint || ""}
                </span>
                ${resultStatus === "incorrect" ? `<button class="quiz-btn-retry" id="quiz-retry-btn">حاول مجدداً</button>` : ""}
              </div>
            ` : ""}
          </div>
        `;
        break;

      case "exam":
        if (examSubmitted) {
          // Render scorecard and answers review
          const finalScore = calculateExamScore();
          const hasPassed = finalScore >= 70;
          htmlContent = `
            <div class="intro-slide-header">
              <h2 class="intro-title">${slide.title}</h2>
              <p class="intro-desc">مراجعة نتائج الاختبار النهائي الشامل</p>
            </div>
            
            <h4 class="exam-review-title">مراجعة إجاباتك بالتفصيل:</h4>
            <div class="exam-review-list">
              ${slide.examQuestions.map((eq, qIdx) => {
                const sAnswer = examAnswers[eq.id] || "لم يتم الإجابة";
                const isCorrect = sAnswer === eq.correctAnswer;
                return `
                  <div class="review-item-card ${isCorrect ? "correct" : "incorrect"}">
                    <div class="review-header">
                      <span>السؤال ${qIdx + 1}</span>
                      <span class="review-status-label">${isCorrect ? "إجابة صحيحة ✓" : "إجابة خاطئة ✗"}</span>
                    </div>
                    <p class="review-q-en">${eq.question}</p>
                    <p class="review-q-ar">${eq.arabicQuestion || ""}</p>
                    <div class="review-ans-deck">
                      <strong>إجابتك:</strong> ${sAnswer}
                      ${!isCorrect ? `<br><strong>الإجابة الصحيحة:</strong> ${eq.correctAnswer}` : ""}
                      <br><em style="color: var(--text-muted); font-size: 0.72rem;">تلميح: ${eq.hint || ""}</em>
                    </div>
                  </div>
                `;
              }).join("")}
            </div>

            <div class="results-card ${hasPassed ? "passed" : "failed"}" style="margin-top: 30px;">
              <div class="trophy-container" style="background: ${hasPassed ? "linear-gradient(135deg, #10b981, #059669)" : "linear-gradient(135deg, #ef4444, #dc2626)"}">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="floating-trophy"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"></path><path d="M12 2a6 6 0 0 1 6 6v1a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z"></path></svg>
              </div>
              <h3 style="font-size: 1.4rem; font-weight: 850; color: var(--text-dark); margin-top: 12px;">
                ${hasPassed ? "تهانينا! لقد اجتزت الاختبار بنجاح" : "لم تجتز الاختبار هذه المرة"}
              </h3>
              <div class="results-score-display">${finalScore}<span>%</span></div>
              <p style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); max-width: 440px; margin: 0 auto 16px auto;">
                ${hasPassed ? "لقد حصلت على درجة تؤهلك للحصول على الشهادة الرسمية الفاخرة المعتمدة. أدخل اسمك الكامل بالأسفل في الشريحة التالية لطباعتها." : "تحتاج إلى تحقيق 70% أو أكثر للاجتياز. راجع الأسئلة الخاطئة بالأسفل ثم أعد المحاولة!"}
              </p>
              <div class="cert-actions">
                ${hasPassed ? `<button class="steer-btn btn-primary" id="exam-go-completion">احصل على شهادتك الآن</button>` : ""}
                <button class="cert-action-btn" id="exam-retry-all-btn">إعادة تقديم الاختبار كاملاً</button>
              </div>
            </div>
          `;
        } else {
          // Render interactive exam questions wizard
          const examQ = slide.examQuestions[currentExamQuestionIndex];
          const chosenAns = examAnswers[examQ.id] || "";
          htmlContent = `
            <div class="intro-slide-header">
              <h2 class="intro-title">${slide.title}</h2>
              <p class="intro-desc">${slide.description || ""}</p>
            </div>
            
            <div class="quiz-box">
              <div class="quiz-question-box">
                <h3 class="quiz-q-en">${examQ.question}</h3>
                <p class="quiz-q-ar">${examQ.arabicQuestion || ""}</p>
              </div>
              <div class="quiz-options-grid">
                ${examQ.options.map((opt, oIdx) => {
                  const charCode = String.fromCharCode(65 + oIdx);
                  const isSel = chosenAns === opt;
                  return `
                    <div class="quiz-option-card ${isSel ? "selected" : ""}" data-exam-option="${opt}">
                      <span class="option-index">${charCode}</span>
                      <span class="option-label">${opt}</span>
                    </div>
                  `;
                }).join("")}
              </div>
            </div>

            <div class="exam-action-block">
              ${Object.keys(examAnswers).length < 10 ? `
                <p class="exam-action-msg">يجب إجابة كافة الأسئلة الـ 10 لتتمكن من تسليم ورقة الاختبار</p>
              ` : `
                <p class="exam-action-msg" style="color: var(--success-color);">جاهز للتسليم والتقييم!</p>
              `}
              <button class="exam-submit-btn" id="exam-final-submit" ${Object.keys(examAnswers).length < 10 ? "disabled" : ""}>إنهاء وتسليم ورقة الاختبار</button>
            </div>

            <div class="exam-navbar">
              <div class="exam-nav-dots">
                ${slide.examQuestions.map((eq, qIdx) => {
                  const isAns = !!examAnswers[eq.id];
                  const actClass = qIdx === currentExamQuestionIndex ? "active" : (isAns ? "answered" : "");
                  return `<button class="exam-nav-dot ${actClass}" data-exam-nav-idx="${qIdx}">${qIdx + 1}</button>`;
                }).join("")}
              </div>
              <span class="exam-status-tag">السؤال ${currentExamQuestionIndex + 1} من 10</span>
            </div>
          `;
        }
        break;

      case "completion":
        const hasPassedExam = calculateExamScore() >= 70;
        htmlContent = `
          <div class="cover-slide-content" style="padding: 16px 0;">
            <div class="trophy-container">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" class="floating-trophy"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"></path><path d="M12 2a6 6 0 0 1 6 6v1a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z"></path></svg>
            </div>
            <span class="completion-tag">تم إتمام المنهج بنجاح</span>
            <h2 class="cover-title" style="font-size: 1.8rem; margin-bottom: 6px;">${slide.title}</h2>
            <p class="intro-desc" style="margin-bottom: 16px;">${slide.arabicTitle}</p>
            <p class="cover-desc" style="margin-bottom: 20px; font-size: 0.82rem;">${slide.description || ""}</p>

            <div class="mastered-skills-header">
              <span style="font-size: 0.85rem; font-weight: 850; color: var(--text-dark);">المهارات والركائز التي أتقنتها:</span>
              <span style="font-size: 0.72rem; font-weight: 800; color: var(--success-color);">6 وحدات كاملة ✓</span>
            </div>
            
            <div class="skills-grid">
              <div class="skill-card">
                <span class="skill-check-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                <div class="skill-info">
                  <h4 class="skill-title">الأبجدية و 126 كلمة تأسيسية</h4>
                  <p class="skill-desc">كتابة ونطق الحروف والكلمات</p>
                </div>
              </div>
              <div class="skill-card">
                <span class="skill-check-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                <div class="skill-info">
                  <h4 class="skill-title">فعل الكينونة Verb to Be</h4>
                  <p class="skill-desc">الإثبات، النفي، والسؤال</p>
                </div>
              </div>
              <div class="skill-card">
                <span class="skill-check-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                <div class="skill-info">
                  <h4 class="skill-title">أجزاء الكلام الأساسية</h4>
                  <p class="skill-desc">الاسم، الفعل، والضمائر وغيرها</p>
                </div>
              </div>
              <div class="skill-card">
                <span class="skill-check-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                <div class="skill-info">
                  <h4 class="skill-title">بناء الجملة البسيطة SVO</h4>
                  <p class="skill-desc">الترتيب والنكرة وأسماء الإشارة</p>
                </div>
              </div>
            </div>

            <!-- Certified input and template blocks -->
            <div class="certificate-generator-block" style="width: 100%;">
              <h3 style="font-size: 0.9rem; font-weight: 850; text-align: right; color: #fff; margin-bottom: 6px;">طلب إصدار شهادة إتمام الدورة التأسيسية الرسمية:</h3>
              ${hasPassedExam ? `
                <p style="font-size: 0.72rem; text-align: right; color: var(--text-light); margin-bottom: 12px;">أدخل اسمك بالكامل ليتم كتابته بخط الرقعة الفاخر والذهبي على شهادتك المعتمدة:</p>
                <div class="certificate-input-row">
                  <input type="text" id="cert-name-input" class="certificate-input" placeholder="اكتب اسمك الثلاثي هنا..." value="${studentName}">
                  <button class="certificate-submit-btn" id="cert-issue-btn">إصدار الشهادة</button>
                </div>
              ` : `
                <p style="font-size: 0.72rem; text-align: right; color: var(--brand-terracotta); margin-bottom: 12px; font-weight:800;">تنبيه: يجب اجتياز الاختبار النهائي الشامل (بدرجة 70% على الأقل) لتتمكن من إصدار الشهادة المعتمدة.</p>
                <button class="steer-btn btn-primary" id="go-back-exam-btn" style="width: 100%; justify-content: center; font-size: 0.8rem;">الانتقال لتقديم الاختبار الشامل</button>
              `}
            </div>

            <!-- Dynamic printable gold Cairo certificate -->
            <div id="certificate-print-area" class="certificate-frame" style="display: none; width: 100%;">
              <div class="cert-corner-tl"></div>
              <div class="cert-corner-tr"></div>
              <div class="cert-corner-bl"></div>
              <div class="cert-corner-br"></div>
              
              <div class="cert-header">
                <span class="cert-title-en">Itqan Academy For Languages</span>
                <div class="cert-logo">
                 <img src="logo.png" class="cert-logo-img" alt="">
                </div>
              </div>
              
              <div class="cert-main-badge">شهادة إتمام واجتياز</div>
              <div class="cert-student-pre">تشهد الأكاديمية بأن الطالب المتميز / الطالبة المتميزة:</div>
              <div class="cert-student-name" id="cert-rendered-name">نواف العفيفي</div>
              
              <p class="cert-body-text">
                قد أكمل بنجاح واقتدار متطلبات <strong>الدورة التأسيسية الشاملة في مهارات اللغة الإنجليزية (المستوى الأول A1)</strong>، واجتاز الاختبار النهائي بنجاح، مما يؤهله لثقة التواصل والتأسيس الأكاديمي السليم.
              </p>
              
              <div class="cert-footer">
                <div class="cert-signature">
                  <span class="cert-sig-title">مدير الأكاديمية</span>
                  <br><span class="cert-sig-name">أ/ نواف</span>
                </div>
                <div class="cert-stamp-box">
    <img src="smallLogoIcon.png" class="cert-stamp-img" alt="Stamp"> </div>
                <div class="cert-date">
                  <span class="cert-date-title">تاريخ الإصدار</span>
                  <br><span class="cert-date-value" id="cert-current-date">24-06-2026</span>
                </div>
              </div>
              
              <div class="cert-actions">
                <button class="cert-action-btn" id="cert-print-btn" style="background-color: var(--brand-blue); color:#fff; border-color:var(--brand-blue)">طباعة الشهادة وحفظها PDF</button>
              </div>
            </div>
          </div>
        `;
        break;
    }

    cardBody.innerHTML = htmlContent;
    
    // Bind click events on generated dynamic items
    bindDynamicEvents();
    initTableHint();
    
    // Track indicators and stepper states
    updateGlobalProgress();
  };

  // Calculate Comprehensive Exam score
  const calculateExamScore = () => {
    const slide = window.slidesData.find(s => s.id === "final-exam");
    if (!slide || !slide.examQuestions) return 0;
    let corrects = 0;
    slide.examQuestions.forEach(eq => {
      if (examAnswers[eq.id] === eq.correctAnswer) {
        corrects++;
      }
    });
    return Math.round((corrects / slide.examQuestions.length) * 100);
  };

  // Bind interactions for elements that are re-created dynamically
  const bindDynamicEvents = () => {
    const currentSlideIndex = window.slidesData.findIndex(s => s.id === activeSlideId);
    const slide = window.slidesData[currentSlideIndex] || window.slidesData[0];

    // Alphabet/Numbers grid cells trigger click speak
    document.querySelectorAll(".alphabet-cell").forEach(cell => {
      cell.addEventListener("click", () => {
        // Remove active class from previous cells
        document.querySelectorAll(".alphabet-cell").forEach(c => c.classList.remove("active"));
        cell.classList.add("active");

        if (cell.dataset.char) {
          const char = cell.dataset.char;
          speakText(char, "en-US");
        } else if (cell.dataset.numberText) {
          const textVal = cell.dataset.numberText;
          speakText(textVal, "en-US");
        }
      });
    });

    // Letter detail examples trigger click speak
    document.querySelectorAll(".example-card").forEach(card => {
      card.addEventListener("click", () => {
        const word = card.dataset.speak;
        speakText(word, "en-US");
      });
    });

    // Merged header pronunciation speak
    document.querySelectorAll(".letter-detail-merged-header").forEach(header => {
      header.addEventListener("click", () => {
        const word = header.dataset.speakTitle;
        speakText(word, "en-US");
      });
    });

    // Handle individual button click as well
    document.querySelectorAll(".speaker-badge-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const word = btn.dataset.speakBtn;
        if (word) {
          speakText(word, "en-US");
        }
      });
    });

    // Compound sounds pills trigger click speak
    document.querySelectorAll(".sound-example-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        const textVal = pill.dataset.speakEn;
        speakText(textVal, "en-US");
      });
    });

    // Individual word/cell speaker click in tables
    document.querySelectorAll(".speak-cell").forEach(cell => {
      cell.addEventListener("click", (e) => {
        e.stopPropagation();
        const textVal = cell.dataset.speakVal;
        if (textVal) {
          speakText(textVal, "en-US");
        }
      });
    });

    // Full row sentence speaker click in tables
    document.querySelectorAll(".row-play-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const textVal = btn.dataset.speakRow;
        if (textVal) {
          speakText(textVal, "en-US");
        }
      });
    });

    // Conversation bubble clicking
    document.querySelectorAll(".chat-bubble").forEach(bubble => {
      bubble.addEventListener("click", () => {
        const textVal = bubble.dataset.speakChat;
        // Visual active cue
        document.querySelectorAll(".chat-bubble").forEach(b => b.classList.remove("active-speech"));
        bubble.classList.add("active-speech");
        speakText(textVal, "en-US");
      });
    });

    // Conversation PLAY ALL sequential trigger
    const playDialogueBtn = document.getElementById("play-dialogue-btn");
    if (playDialogueBtn) {
      playDialogueBtn.addEventListener("click", () => {
        if (!slide.conversation) return;
        if (conversationTimeoutId) {
          clearTimeout(conversationTimeoutId);
          conversationTimeoutId = null;
        }
        activeConversationIndex = 0;
        playConversationLine(slide.conversation);
      });
    }

    // Quiz options click triggers
  // ====== استبدل قسم الـ Quiz والـ Auto-speak داخل bindDynamicEvents بهذا الكود الآمن ======

// Quiz options click triggers
document.querySelectorAll(".quiz-option-card[data-option]").forEach(card => {
  card.addEventListener("click", () => {
    // Prevent clicking multiple times if already graded
    if (quizResults[slide.id]) return;
    
    // إلغاء مؤقت النطق التلقائي الخاص بالسؤال فوراً لمنع التداخل
    if (window.quizAudioTimers && window.quizAudioTimers[slide.id]) {
      clearTimeout(window.quizAudioTimers[slide.id]);
    }
    
    // إيقاف أي نطق جاري حالياً قبل بدء نطق التقييم
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();

    const optionChosen = card.dataset.option;
    
    // Save answers state
    quizAnswers[slide.id] = optionChosen;
    const isCorrect = optionChosen === slide.quizData.correctAnswer;
    quizResults[slide.id] = isCorrect ? "correct" : "incorrect";

    localStorage.setItem("quiz_answers_saved", "true");
    localStorage.setItem("itqan_quiz_answers", JSON.stringify(quizAnswers));
    localStorage.setItem("itqan_quiz_results", JSON.stringify(quizResults));

    // تحديث الواجهة فوراً لتجنب تجميد الأزرار
    renderActiveSlide();

    // نطق عبارة التقييم فوراً بعد الـ Render مباشرة وبشكل كامل
    if (isCorrect) {
      speakText("Excellent! Correct answer.", "en-US");
    } else {
      speakText("Not quite! Try again.", "en-US");
    }
  });
});

// Quiz retry button clicking
const quizRetryBtn = document.getElementById("quiz-retry-btn");
if (quizRetryBtn) {
  quizRetryBtn.addEventListener("click", () => {
    if (window.quizAudioTimers && window.quizAudioTimers[slide.id]) {
      clearTimeout(window.quizAudioTimers[slide.id]);
    }
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();

    delete quizAnswers[slide.id];
    delete quizResults[slide.id];
    localStorage.setItem("itqan_quiz_answers", JSON.stringify(quizAnswers));
    localStorage.setItem("itqan_quiz_results", JSON.stringify(quizResults));
    renderActiveSlide();
  });
}

// Quiz audio play buttons
document.querySelectorAll(".quiz-play-audio-btn[data-audio-text]").forEach(btn => {
  btn.addEventListener("click", () => {
    const textVal = btn.dataset.audioText;
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    speakText(textVal, "en-US");
  });
});

// Auto-speak quiz audio when a quiz slide with audio loads
if (slide && slide.type === "quiz" && slide.quizData && slide.quizData.audioText && !quizResults[slide.id]) {
  if (!window.quizAudioTimers) window.quizAudioTimers = {};
  if (window.quizAudioTimers[slide.id]) {
    clearTimeout(window.quizAudioTimers[slide.id]);
  }
  window.quizAudioTimers[slide.id] = setTimeout(() => {
    // التأكد التام من أن المستخدم لم يجب على السؤال خلال فترة الانتظار
    if (!quizResults[slide.id]) {
      speakText(slide.quizData.audioText, "en-US");
    }
  }, 600); 
}

    // Exam question option select trigger
    document.querySelectorAll(".quiz-option-card[data-exam-option]").forEach(card => {
      card.addEventListener("click", () => {
        const examQ = slide.examQuestions[currentExamQuestionIndex];
        const optionChosen = card.dataset.examOption;
        
        examAnswers[examQ.id] = optionChosen;
        localStorage.setItem("itqan_exam_answers", JSON.stringify(examAnswers));
        
        // Re-render quickly to show active cell borders
        renderActiveSlide();
      });
    });

    // Exam nav dots clicking
    document.querySelectorAll(".exam-nav-dot").forEach(dot => {
      dot.addEventListener("click", () => {
        const indexClicked = parseInt(dot.dataset.examNavIdx);
        currentExamQuestionIndex = indexClicked;
        renderActiveSlide();
      });
    });

    // Exam final submit trigger
    const examFinalSubmit = document.getElementById("exam-final-submit");
    if (examFinalSubmit) {
      examFinalSubmit.addEventListener("click", () => {
        examSubmitted = true;
        localStorage.setItem("itqan_exam_submitted", "true");
        renderActiveSlide();
      });
    }

    // Exam retry completely clicking
    const examRetryAllBtn = document.getElementById("exam-retry-all-btn");
    if (examRetryAllBtn) {
      examRetryAllBtn.addEventListener("click", () => {
        examAnswers = {};
        examSubmitted = false;
        currentExamQuestionIndex = 0;
        localStorage.removeItem("itqan_exam_answers");
        localStorage.removeItem("itqan_exam_submitted");
        renderActiveSlide();
      });
    }

    // Exam score review - Go to certificate slide
    const examGoCompletion = document.getElementById("exam-go-completion");
    if (examGoCompletion) {
      examGoCompletion.addEventListener("click", () => {
        saveSlideState("course-completion", 6);
      });
    }

    // Cover start presentation trigger
    const coverStartBtn = document.getElementById("cover-start-btn");
    if (coverStartBtn) {
      coverStartBtn.addEventListener("click", () => {
        goToNextSlide();
      });
    }

    // Completion issue certificate click trigger
    const certIssueBtn = document.getElementById("cert-issue-btn");
    if (certIssueBtn) {
      certIssueBtn.addEventListener("click", () => {
        const nameInput = document.getElementById("cert-name-input");
        if (!nameInput) return;
        const rawName = nameInput.value.trim();
        if (rawName.length < 3) {
          alert("الرجاء كتابة اسمك الثلاثي الكامل وبشكل صحيح.");
          return;
        }

        studentName = rawName;
        localStorage.setItem("itqan_student_name", studentName);
        
        // Display printable certificate area
        const certFrame = document.getElementById("certificate-print-area");
        const certRenderedName = document.getElementById("cert-rendered-name");
        const certCurrentDate = document.getElementById("cert-current-date");
        
        if (certFrame && certRenderedName && certCurrentDate) {
          certRenderedName.textContent = studentName;
          
          const today = new Date();
          const dd = String(today.getDate()).padStart(2, "0");
          const mm = String(today.getMonth() + 1).padStart(2, "0");
          const yyyy = today.getFullYear();
          certCurrentDate.textContent = `${dd}-${mm}-${yyyy}`;
          
          certFrame.style.display = "block";
          certFrame.scrollIntoView({ behavior: "smooth" });
        }
      });
    }

    // Completion print certificate trigger
    const certPrintBtn = document.getElementById("cert-print-btn");
    if (certPrintBtn) {
      certPrintBtn.addEventListener("click", () => {
        window.print();
      });
    }

    // Completion - Go back to exam to qualify
    const goBackExamBtn = document.getElementById("go-back-exam-btn");
    if (goBackExamBtn) {
      goBackExamBtn.addEventListener("click", () => {
        saveSlideState("final-exam", 6);
      });
    }
  };

  // Dialogue sequential timer line-by-line animator
  const playConversationLine = (lines) => {
    if (activeConversationIndex >= lines.length) {
      activeConversationIndex = -1;
      // Clear highlight borders
      document.querySelectorAll(".chat-bubble").forEach(b => b.classList.remove("active-speech"));
      return;
    }

    const currentLine = lines[activeConversationIndex];
    const matchingBubble = document.querySelector(`.chat-bubble[data-index="${activeConversationIndex}"]`);
    
    document.querySelectorAll(".chat-bubble").forEach(b => b.classList.remove("active-speech"));
    if (matchingBubble) {
      matchingBubble.classList.add("active-speech");
      matchingBubble.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    speakText(currentLine.english, "en-US");

    // Recurse with delay based on line word count
    const wordCount = currentLine.english.split(" ").length;
    const voiceDelay = Math.max(2500, wordCount * 360); // Dynamic reading pacing

    activeConversationIndex++;
    conversationTimeoutId = setTimeout(() => {
      playConversationLine(lines);
    }, voiceDelay);
  };

  // Helper method to toggle wave animators
  const updateVisualWavesState = (isSpeaking) => {
    document.querySelectorAll(".wave-bar").forEach(bar => {
      if (isSpeaking) {
        bar.classList.add("speaking");
      } else {
        bar.classList.remove("speaking");
      }
    });
  };

  // 5. Sidebar Directory Rendering
  const renderSidebar = () => {
    if (!slideListContainer) return;
    
    slideListContainer.innerHTML = "";
    
    const normalizedQuery = searchQuery.trim().toLowerCase();
    
    // If we have a search query, filter slides
    let matchingSlides = window.slidesData;
    if (normalizedQuery) {
      matchingSlides = window.slidesData.filter(slide => {
        const tMatch = slide.title.toLowerCase().includes(normalizedQuery);
        const subMatch = slide.subtitle && slide.subtitle.toLowerCase().includes(normalizedQuery);
        const descMatch = slide.description && slide.description.toLowerCase().includes(normalizedQuery);
        const letterMatch = slide.letter && slide.letter.toLowerCase().includes(normalizedQuery);
        return tMatch || subMatch || descMatch || letterMatch;
      });
    }

    // Always group by unit using window.unitsList
    const units = window.unitsList || [];
    
    units.forEach(unit => {
      // Find slides for this unit
      const unitSlides = window.slidesData.filter(s => s.unit === unit.id);
      
      // If we are searching, filter these unit slides
      const filteredSlides = normalizedQuery 
        ? unitSlides.filter(s => matchingSlides.some(ms => ms.id === s.id))
        : unitSlides;
        
      // If searching and this unit has no matching slides, do not render this unit at all
      if (normalizedQuery && filteredSlides.length === 0) {
        return;
      }
      
      // Determine if expanded:
      // If searching, we expand matching units by default
      // Otherwise, check if it's in our expandedUnits set
      const isExpanded = normalizedQuery ? true : expandedUnits.has(unit.id);
      const isUnitActive = (currentUnitFilter === unit.id);
      
      // Create Unit Section Container
      const unitSection = document.createElement("div");
      unitSection.className = `sidebar-unit-section ${isExpanded ? "expanded" : ""}`;
      unitSection.dataset.unitId = unit.id;
      
      // Extract a clean name (e.g. remove "الوحدة الأولى: " prefix for cleaner nested titles)
      let cleanUnitTitle = unit.arabicTitle;
      const colonIdx = cleanUnitTitle.indexOf(":");
      if (colonIdx > -1) {
        cleanUnitTitle = cleanUnitTitle.substring(colonIdx + 1).trim();
      }
      
      // Create Unit Header
      const unitHeader = document.createElement("div");
      unitHeader.className = `sidebar-unit-header ${isUnitActive ? "active" : ""}`;
      unitHeader.innerHTML = `
        <div class="unit-header-title-box">
          <span class="unit-header-badge">U${unit.id}</span>
          <span class="unit-header-text">${cleanUnitTitle}</span>
        </div>
        <span class="unit-chevron">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </span>
      `;
      
      // Header click handler toggles collapse/expand (only if not searching)
      unitHeader.addEventListener("click", () => {
        if (normalizedQuery) return; // Ignore toggling while searching
        
        if (expandedUnits.has(unit.id)) {
          expandedUnits.delete(unit.id);
        } else {
          expandedUnits.add(unit.id);
        }
        renderSidebar();
      });
      
      unitSection.appendChild(unitHeader);
      
      // Create Lessons container for this unit
      const lessonsContainer = document.createElement("div");
      lessonsContainer.className = "sidebar-unit-lessons";
      lessonsContainer.style.display = isExpanded ? "block" : "none";
      
      filteredSlides.forEach(slide => {
        const isAct = slide.id === activeSlideId;
        const isBookmarked = bookmarks.includes(slide.id);
        
        let iconMarkup = "";
        let colorClass = "background-color: rgba(33, 78, 207, 0.08); color: var(--brand-blue);";
        
        switch (slide.type) {
          case "cover":
            iconMarkup = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>`;
            break;
          case "intro":
            iconMarkup = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
            break;
          case "grid":
            iconMarkup = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`;
            break;
          case "quiz":
            iconMarkup = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
            colorClass = "background-color: rgba(234, 152, 53, 0.08); color: var(--brand-yellow);";
            break;
          case "exam":
            iconMarkup = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`;
            colorClass = "background-color: rgba(224, 96, 69, 0.08); color: var(--brand-terracotta);";
            break;
          default:
            iconMarkup = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`;
            break;
        }

        const itemNode = document.createElement("div");
        itemNode.className = `slide-item ${isAct ? "active" : ""}`;
        itemNode.innerHTML = `
          <div class="slide-item-right">
            <span class="slide-item-icon" style="${colorClass}">
              ${iconMarkup}
            </span>
            <div class="slide-item-info">
              <h4 class="slide-item-title">${slide.title}</h4>
              <span class="slide-item-subtitle">${slide.subtitle || slide.arabicTitle || "درس تفاعلي"}</span>
            </div>
          </div>
          ${isBookmarked ? `<span style="color: var(--brand-yellow); margin-right: 8px;"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg></span>` : ""}
        `;

        itemNode.addEventListener("click", (e) => {
          e.stopPropagation();
          saveSlideState(slide.id, slide.unit);
          // On mobile screen bounds, close drawer
          if (window.innerWidth < 768) {
            sidebarNode.classList.remove("open");
            sidebarOverlay.classList.remove("active");
          }
        });

        lessonsContainer.appendChild(itemNode);
      });
      
      unitSection.appendChild(lessonsContainer);
      slideListContainer.appendChild(unitSection);
    });

    if (normalizedQuery && slideListContainer.children.length === 0) {
      slideListContainer.innerHTML = `
        <div style="text-align: center; padding: 32px 16px; color: var(--text-light);">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-bottom: 8px; opacity: 0.5;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <p style="font-size: 0.8rem; font-weight: 800;">عذراً، لم نعثر على أي نتائج مطابقة لبحثك.</p>
        </div>
      `;
    }
  };

const initTableHint = () => {

    if (window.innerWidth > 640) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const table = entry.target;

            if (table.dataset.hinted) return;

            table.dataset.hinted = "1";

            table.classList.add("table-hint");

            setTimeout(() => {
                table.classList.remove("table-hint");
            },1100);

        });

    },{
        threshold:0.5
    });

    document.querySelectorAll(".table-scroll").forEach(table=>{
        observer.observe(table);
    });

};

  // 6. Navigation Controls & Timeline Progress Updates
  const updateGlobalProgress = () => {
    const currentSlideIndex = window.slidesData.findIndex(s => s.id === activeSlideId);
    const slide = window.slidesData[currentSlideIndex] || window.slidesData[0];
    
    // Hide navigation footer and timeline container on the cover page
    const slideFooter = document.querySelector(".slide-footer");
    const timelineContainer = document.querySelector(".timeline-bar-container");
    if (slide && slide.type === "cover") {
      if (slideFooter) slideFooter.style.display = "none";
      if (timelineContainer) timelineContainer.style.display = "none";
    } else {
      if (slideFooter) slideFooter.style.display = "";
      if (timelineContainer) timelineContainer.style.display = "";
    }
    
    // Enable/Disable Steer buttons
    const isFinalExamSlide = slide && slide.id === "final-exam";
    if (prevBtn) {
      prevBtn.disabled = currentSlideIndex === 0;
      prevBtn.innerHTML = isFinalExamSlide
        ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg> السؤال السابق`
        : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg> السابق`;
      // Dim prev button when on first exam question or first slide
      const isPrevDim = isFinalExamSlide ? currentExamQuestionIndex === 0 : currentSlideIndex === 0;
      prevBtn.style.opacity = isPrevDim ? "0.55" : "";
    }
      if (nextBtn) {
      if (currentSlideIndex === window.slidesData.length - 1) {
        nextBtn.innerHTML = `إعادة تشغيل الدورة <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>`;
      } else if (isFinalExamSlide) {
        nextBtn.innerHTML = `السؤال التالي <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
      } else {
        nextBtn.innerHTML = `التالي <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
      }
      const totalQuestions = isFinalExamSlide ? (slide.examQuestions?.length || 0) : 0;
      const isOnLastQuestion = isFinalExamSlide && currentExamQuestionIndex === totalQuestions - 1;
      const notAllAnswered = Object.keys(examAnswers).length < totalQuestions;
      nextBtn.style.opacity = (isOnLastQuestion && notAllAnswered) ? "0.55" : "";
    }



    // Render indicators (dots) representing lessons in the current unit
    if (dotIndicators) {
      dotIndicators.innerHTML = "";
      const currentUnitSlides = window.slidesData.filter(s => s.unit === currentUnitFilter);
      
      currentUnitSlides.forEach(slide => {
        const isAct = slide.id === activeSlideId;
        const dot = document.createElement("button");
        dot.className = "indicator-dot";
        dot.style.width = isAct ? "24px" : "8px";
        dot.style.backgroundColor = isAct ? "var(--brand-blue)" : "rgba(148, 163, 184, 0.4)";
        dot.title = slide.title;
        
        dot.addEventListener("click", () => {
          saveSlideState(slide.id, slide.unit);
        });
        dotIndicators.appendChild(dot);
      });
    }

    // Timeline Progress percentage bar calculations
    const totalCount = window.slidesData.length;
    const progressPercentage = (currentSlideIndex / (totalCount - 1)) * 100;
    
    if (timelineSegment) {
      timelineSegment.style.width = `${progressPercentage}%`;
    }
    if (timelineDot) {
      // Offset timeline bullet nicely
      timelineDot.style.left = `calc(${progressPercentage}% - 7px)`;
    }
  };


const resetCourse = () => {
  quizAnswers = {};
  quizResults = {};
  examAnswers = {};
  examSubmitted = false;
  currentExamQuestionIndex = 0;
  studentName = "";

  localStorage.removeItem("itqan_quiz_answers");
  localStorage.removeItem("itqan_quiz_results");
  localStorage.removeItem("itqan_exam_answers");
  localStorage.removeItem("itqan_exam_submitted");
  localStorage.removeItem("itqan_student_name");

  saveSlideState("cover", 1);
};

  // Steer Navigation Handlers
  const goToNextSlide = () => {
    const currentSlideIndex = window.slidesData.findIndex(s => s.id === activeSlideId);
    const currentSlide = window.slidesData[currentSlideIndex] || window.slidesData[0];

    if (currentSlide && currentSlide.id === "final-exam") {
      const totalQuestions = currentSlide.examQuestions?.length || 0;

      if (currentExamQuestionIndex < totalQuestions - 1) {
        currentExamQuestionIndex += 1;
        renderActiveSlide();
      } else if (Object.keys(examAnswers).length >= totalQuestions) {
        if (currentSlideIndex < window.slidesData.length - 1) {
          const nextSlideObj = window.slidesData[currentSlideIndex + 1];
          saveSlideState(nextSlideObj.id, nextSlideObj.unit);
        } else {
          resetCourse();
        }
      } else {
        renderActiveSlide();
      }

      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
      return;
    }

    if (currentSlideIndex < window.slidesData.length - 1) {
      const nextSlideObj = window.slidesData[currentSlideIndex + 1];
      saveSlideState(nextSlideObj.id, nextSlideObj.unit);
    } else {
      // Reset presentation back to cover page
      resetCourse();
    }
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  };

  const goToPrevSlide = () => {
    const currentSlideIndex = window.slidesData.findIndex(s => s.id === activeSlideId);
    const currentSlide = window.slidesData[currentSlideIndex] || window.slidesData[0];

    if (currentSlide && currentSlide.id === "final-exam") {
      if (currentExamQuestionIndex > 0) {
        currentExamQuestionIndex -= 1;
        renderActiveSlide();
      } else {
        renderActiveSlide();
      }
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
      return;
    }

    if (currentSlideIndex > 0) {
      const prevSlideObj = window.slidesData[currentSlideIndex - 1];
      saveSlideState(prevSlideObj.id, prevSlideObj.unit);
    }
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  };

  const saveSlideState = (id, unit) => {
    activeSlideId = id;
    currentUnitFilter = unit;
    expandedUnits.add(unit);
    
    // Save state in persistent localStorage
    localStorage.setItem("itqan_active_slide", id);
    
    // Auto sync Active state class on unit filters buttons
    updateFilterButtonsState();

    // Re-render
    renderActiveSlide();
    renderSidebar();
  };

  const updateFilterButtonsState = () => {
    document.querySelectorAll(".unit-btn").forEach(btn => {
      const uId = parseInt(btn.dataset.unitId);
      if (uId === currentUnitFilter) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  };

  // 7. Event Listeners for Header Controls Deck
  
  // Slide Directory Unit Filtering
  document.querySelectorAll(".unit-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      // Clear active directory search query first
      searchQuery = "";
      if (searchInput) searchInput.value = "";
      if (searchClear) searchClear.style.display = "none";

      const uId = parseInt(btn.dataset.unitId);
      currentUnitFilter = uId;
      
      // Select the first slide of the clicked Unit
      const firstSlideOfUnit = window.slidesData.find(s => s.unit === uId);
      if (firstSlideOfUnit) {
        saveSlideState(firstSlideOfUnit.id, uId);
      } else {
        updateFilterButtonsState();
        renderSidebar();
      }
    });
  });

  // Search input change listeners
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (searchClear) {
        searchClear.style.display = searchQuery.length > 0 ? "block" : "none";
      }
      renderSidebar();
    });
  }

  if (searchClear) {
    searchClear.addEventListener("click", () => {
      searchQuery = "";
      searchInput.value = "";
      searchClear.style.display = "none";
      renderSidebar();
    });
  }

  // Voice Settings controls
  if (voiceRateSlider) {
    voiceRateSlider.value = ttsRate;
    voiceRateSlider.addEventListener("input", (e) => {
      ttsRate = parseFloat(e.target.value);
      localStorage.setItem("itqan_tts_rate", ttsRate);
    });
  }

  // Voice Gender buttons binds
  if (toggleFemale && toggleMale) {
    if (voiceGender === "female") {
      toggleFemale.classList.add("active");
      toggleMale.classList.remove("active");
    } else {
      toggleFemale.classList.remove("active");
      toggleMale.classList.add("active");
    }

    toggleFemale.addEventListener("click", () => {
      voiceGender = "female";
      localStorage.setItem("itqan_voice_gender", "female");
      toggleFemale.classList.add("active");
      toggleMale.classList.remove("active");
      speakText("Sara's voice activated", "en-US");
    });

    toggleMale.addEventListener("click", () => {
      voiceGender = "male";
      localStorage.setItem("itqan_voice_gender", "male");
      toggleFemale.classList.remove("active");
      toggleMale.classList.add("active");
      speakText("Faris's voice activated", "en-US");
    });
  }

  // Audio Mute triggers
  if (muteBtn) {
    const updateMuteButtonUI = () => {
      if (muteSound) {
        muteBtn.classList.add("active");
        muteBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="22" y1="9" x2="16" y2="15"></line><line x1="16" y1="9" x2="22" y2="15"></line></svg>`;
      } else {
        muteBtn.classList.remove("active");
        muteBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>`;
      }
    };
    updateMuteButtonUI();

    muteBtn.addEventListener("click", () => {
      muteSound = !muteSound;
      localStorage.setItem("itqan_mute_sound", muteSound);
      updateMuteButtonUI();
      if (muteSound) {
        if ("speechSynthesis" in window) window.speechSynthesis.cancel();
      } else {
        speakText("Sound unmuted", "en-US");
      }
    });
  }

  // Presenter Mode triggers
  const setPresenterModeState = (isActive) => {
    isPresenterMode = isActive;
    if (isPresenterMode) {
      document.body.classList.add("presenter-mode");
      if (presenterBtn) presenterBtn.classList.add("active");
    } else {
      document.body.classList.remove("presenter-mode");
      if (presenterBtn) presenterBtn.classList.remove("active");
    }
  };

  if (presenterBtn) {
    presenterBtn.addEventListener("click", () => {
      setPresenterModeState(!isPresenterMode);
    });
  }

  if (presenterExitBanner) {
    presenterExitBanner.addEventListener("click", () => {
      setPresenterModeState(false);
    });
  }

  // Key Bindings (Keyboard shortcuts) for presenter mode
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      goToNextSlide();
    } else if (e.key === "ArrowLeft") {
      goToPrevSlide();
    } else if (e.key === "Escape") {
      setPresenterModeState(false);
    }
  });

  // Bookmark slide trigger
  if (bookmarkBtn) {
    bookmarkBtn.addEventListener("click", () => {
      const idx = bookmarks.indexOf(activeSlideId);
      if (idx > -1) {
        bookmarks.splice(idx, 1);
      } else {
        bookmarks.push(activeSlideId);
      }
      localStorage.setItem("itqan_bookmarks", JSON.stringify(bookmarks));
      
      // Update sidebar badge/star displays
      renderActiveSlide();
      renderSidebar();
    });
  }

  // Mobile navigation drawer overlays
  if (sidebarToggle && sidebarNode && sidebarOverlay) {
    sidebarToggle.addEventListener("click", () => {
      sidebarNode.classList.add("open");
      sidebarOverlay.classList.add("active");
    });

    sidebarOverlay.addEventListener("click", () => {
      sidebarNode.classList.remove("open");
      sidebarOverlay.classList.remove("active");
    });
  }

  // Steer Navigation buttons listeners
  if (prevBtn) prevBtn.addEventListener("click", goToPrevSlide);
  if (nextBtn) nextBtn.addEventListener("click", goToNextSlide);

  // 8. Bootstrap Initial Paint
  updateFilterButtonsState();
  renderActiveSlide();
  renderSidebar();



  
}


);

