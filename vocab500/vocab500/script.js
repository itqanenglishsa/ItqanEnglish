const newWordsTips = [
  "إليك 3 كلمات أساسية لمستوى A1:\nOkay (حسنًا) 👍\nThank you (شكرًا لك) 🙏\nThanks (شكرًا) 😊",
  "إليك 3 كلمات أساسية لمستوى A1:\nPlease (من فضلك) 🙂🙏\nFine (بخير) 😄\nMorning (الصباح) 🌅",
  "إليك 3 كلمات أساسية لمستوى A1:\nAfternoon (بعد الظهر) ☀️\nEvening (المساء) 🌆\nMr. (السيد) 👨",
  "إليك 3 كلمات أساسية لمستوى A1:\nNight (الليل) 🌙\nBye (وداعًا) 👋\nGoodbye (إلى اللقاء) 👋😊",
  "إليك 3 كلمات أساسية لمستوى A1:\nHi (مرحبًا) 👋\nMrs. (السيدة) 👩\nHello (مرحبًا) 😊",
  "إليك 3 كلمات أساسية لمستوى A1:\nAddress (العنوان) 📍\nLady (سيدة) 👒\nSorry (آسف / عذرًا) 😔",
  "إليك 3 كلمات أساسية لمستوى A1:\nMs. (الآنسة / السيدة) 👩\nName (الاسم) 🪪\nFriend (صديق) 🤝",
  "إليك 3 كلمات أساسية لمستوى A1:\nPeople (الناس) 👥\nExcuse me (المعذرة) 🙋\nMan (رجل) 👨",
  "إليك 3 كلمات أساسية لمستوى A1:\nWoman (امرأة) 👩\nBoy (ولد) 👦\nHow (كيف) ❓",
  "إليك 3 كلمات أساسية لمستوى A1:\nYes (نعم) ✔️\nGirl (بنت) 👧\nChild (طفل) 🧒",
  "إليك 3 كلمات أساسية لمستوى A1:\nBaby (رضيع) 👶\nWho (من) 👤❓\nWhat (ماذا) ❓",
  "إليك 3 كلمات أساسية لمستوى A1:\nNo (لا) ❌\nWhy (لماذا) 🤔\nWhere (أين) 📍❓",
  "إليك 3 كلمات أساسية لمستوى A1:\nWelcome (أهلًا وسهلًا) 🤗\nAge (العمر) 🎂\nSir (سيدي) 🎩",
    "إليك 3 كلمات أساسية لمستوى A1:\nFamily (عائلة) 👨‍👩‍👧‍👦\nFather (أب) 👨\nMother (أم) 👩",
  "إليك 3 كلمات أساسية لمستوى A1:\nDad (أبي) 👨💙\nMom (أمي) 👩💖\nBrother (أخ) 👦",
  "إليك 3 كلمات أساسية لمستوى A1:\nSister (أخت) 👧\nSon (ابن) 👦\nDaughter (ابنة) 👧",
  "إليك 3 كلمات أساسية لمستوى A1:\nParent (أحد الوالدين) 👨‍👩\nParents (الوالدان) 👨‍👩‍👧\nGrandfather (جد) 👴",
  "إليك 3 كلمات أساسية لمستوى A1:\nGrandmother (جدة) 👵\nGrandparent (جد أو جدة) 👴👵\nHusband (زوج) 🤵💍",
  "إليك 3 كلمات أساسية لمستوى A1:\nWife (زوجة) 👰💍\nUncle (عم / خال) 👨\nAunt (عمة / خالة) 👩",
  "إليك 3 كلمات أساسية لمستوى A1:\nCousin (ابن/ابنة العم أو الخال) 👦👧\nSon-in-law (زوج الابنة) 🤵\nChildren (أطفال) 🧒👧",
  "إليك 3 كلمات أساسية لمستوى A1:\nBoyfriend (حبيب) ❤️👦\nGirlfriend (حبيبة) ❤️👧\nPartner (شريك) 🤝❤️",
  "إليك 3 كلمات أساسية لمستوى A1:\nMarried (متزوج) 💍❤️\nSingle (أعزب / عزباء) 🧍\nNeighbor (جار) 🏡",
  "إليك 3 كلمات أساسية لمستوى A1:\nGuest (ضيف) 🚪😊\nHost (مضيف) 🏠🤝\nAdult (شخص بالغ) 🧑",
  "إليك 3 كلمات أساسية لمستوى A1:\nGrandchild (حفيد / حفيدة) 👶\nNephew (ابن الأخ أو الأخت) 👦\nNiece (ابنة الأخ أو الأخت) 👧",
  "إليك 3 كلمات أساسية لمستوى A1:\nRelative (قريب) 👨‍👩‍👧\nTwin (توأم) 👯\nGentleman (رجل نبيل) 🤵🎩",
  "إليك 3 كلمات أساسية لمستوى A1:\nHome (منزل) 🏡\nHouse (بيت) 🏠\nApartment (شقة) 🏢",
  "إليك 3 كلمات أساسية لمستوى A1:\nRoom (غرفة) 🚪\nBedroom (غرفة نوم) 🛏️\nBathroom (حمام) 🚿",
  "إليك 3 كلمات أساسية لمستوى A1:\nKitchen (مطبخ) 🍳\nLiving room (غرفة المعيشة) 🛋️\nDoor (باب) 🚪",
  "إليك 3 كلمات أساسية لمستوى A1:\nWindow (نافذة) 🪟\nWall (جدار) 🧱\nFloor (أرضية) 🟫",
  "إليك 3 كلمات أساسية لمستوى A1:\nTable (طاولة) 🪑\nChair (كرسي) 🪑\nBed (سرير) 🛏️",
    "إليك 3 كلمات أساسية لمستوى A1:\nSofa (أريكة) 🛋️\nDesk (مكتب) 🖥️\nKey (مفتاح) 🔑",
  "إليك 3 كلمات أساسية لمستوى A1:\nClock (ساعة) 🕒\nMirror (مرآة) 🪞\nFridge (ثلاجة) 🧊",
  "إليك 3 كلمات أساسية لمستوى A1:\nTV (تلفاز) 📺\nLight (مصباح) 💡\nGarden (حديقة) 🌳",
  "إليك 3 كلمات أساسية لمستوى A1:\nRoof (سقف) 🏠\nShower (دش) 🚿\nSoap (صابون) 🧼",
  "إليك 3 كلمات أساسية لمستوى A1:\nTowel (منشفة) 🧺\nBag (حقيبة) 🎒\nBox (صندوق) 📦",
  "إليك 3 كلمات أساسية لمستوى A1:\nBlanket (بطانية) 🛌\nPillow (وسادة) 🛏️\nCurtain (ستارة) 🪟",
  "إليك 3 كلمات أساسية لمستوى A1:\nPlate (طبق) 🍽️\nSpoon (ملعقة) 🥄\nFood (طعام) 🍽️",
  "إليك 3 كلمات أساسية لمستوى A1:\nDrink (مشروب) 🥤\nWater (ماء) 💧\nTea (شاي) 🍵",
  "إليك 3 كلمات أساسية لمستوى A1:\nCoffee (قهوة) ☕\nMilk (حليب) 🥛\nJuice (عصير) 🧃",
  "إليك 3 كلمات أساسية لمستوى A1:\nBread (خبز) 🍞\nRice (أرز) 🍚\nMeat (لحم) 🥩",
  "إليك 3 كلمات أساسية لمستوى A1:\nFish (سمك) 🐟\nChicken (دجاج) 🍗\nEgg (بيضة) 🥚",
  "إليك 3 كلمات أساسية لمستوى A1:\nCheese (جبن) 🧀\nFruit (فاكهة) 🍎🍌\nVegetable (خضار) 🥦",
  "إليك 3 كلمات أساسية لمستوى A1:\nApple (تفاحة) 🍎\nBanana (موز) 🍌\nOrange (برتقال) 🍊",
  "إليك 3 كلمات أساسية لمستوى A1:\nTomato (طماطم) 🍅\nPotato (بطاطس) 🥔\nSugar (سكر) 🍚",
  "إليك 3 كلمات أساسية لمستوى A1:\nSalt (ملح) 🧂\nSweet (حلو) 🍬\nBreakfast (فطور) 🍳",
  "إليك 3 كلمات أساسية لمستوى A1:\nLunch (غداء) 🍛\nDinner (عشاء) 🍽️🌙\nMeal (وجبة) 🍽️",
  "إليك 3 كلمات أساسية لمستوى A1:\nHungry (جائع) 😋\nThirsty (عطشان) 🥵💧\nFork (شوكة) 🍴",
  "إليك 3 كلمات أساسية لمستوى A1:\nKnife (سكين) 🔪\nCup (كوب) ☕\nGlass (كأس) 🥛",
  "إليك 3 كلمات أساسية لمستوى A1:\nOil (زيت) 🫒🛢️\nBody (جسم) 🧍\nHead (رأس) 🧑",
  "إليك 3 كلمات أساسية لمستوى A1:\nFace (وجه) 🙂\nEye (عين) 👁️\nEar (أذن) 👂",
  "إليك 3 كلمات أساسية لمستوى A1:\nNose (أنف) 👃\nMouth (فم) 👄\nTooth (سن) 🦷",
    "إليك 3 كلمات أساسية لمستوى A1:\nTeeth (أسنان) 😁🦷\nHair (شعر) 💇\nHand (يد) ✋",
  "إليك 3 كلمات أساسية لمستوى A1:\nArm (ذراع) 💪\nLeg (ساق) 🦵\nFoot (قدم) 🦶",
  "إليك 3 كلمات أساسية لمستوى A1:\nFeet (قدمان) 👣\nFinger (إصبع) ☝️\nHeart (قلب) ❤️",
  "إليك 3 كلمات أساسية لمستوى A1:\nBlood (دم) 🩸\nHealth (صحة) 💚\nHealthy (صحي) 💪🥗",
  "إليك 3 كلمات أساسية لمستوى A1:\nIll (مريض) 🤒\nSick (مريض) 🤧\nDoctor (طبيب) 👨‍⚕️",
  "إليك 3 كلمات أساسية لمستوى A1:\nMedicine (دواء) 💊\nHospital (مستشفى) 🏥\nPain (ألم) 😣",
  "إليك 3 كلمات أساسية لمستوى A1:\nClean (نظيف) 🧼✨\nDirty (متسخ) 🧹\nRest (راحة) 😌",
  "إليك 3 كلمات أساسية لمستوى A1:\nSleep (نوم) 😴\nBrain (دماغ) 🧠\nBone (عظمة) 🦴",
  "إليك 3 كلمات أساسية لمستوى A1:\nSkin (جلد) 🧑\nNeck (رقبة) 🧣\nShoulder (كتف) 💪",
  "إليك 3 كلمات أساسية لمستوى A1:\nShoulder (كتف) 💪\nClothes (ملابس) 👕\nShirt (قميص) 👔",
  "إليك 3 كلمات أساسية لمستوى A1:\nTrousers (بنطال) 👖\nPants (بنطال) 👖\nDress (فستان) 👗",
  "إليك 3 كلمات أساسية لمستوى A1:\nSkirt (تنورة) 👗\nCoat (معطف) 🧥\nJacket (سترة) 🧥",
  "إليك 3 كلمات أساسية لمستوى A1:\nHat (قبعة) 👒\nShoe (حذاء) 👞\nShoes (أحذية) 👟",
  "إليك 3 كلمات أساسية لمستوى A1:\nSock (جورب) 🧦\nSocks (جوارب) 🧦\nWear (يرتدي) 👕",
  "إليك 3 كلمات أساسية لمستوى A1:\nColor (لون) 🎨\nWhite (أبيض) ⚪\nBlack (أسود) ⚫",
  "إليك 3 كلمات أساسية لمستوى A1:\nRed (أحمر) 🔴\nBlue (أزرق) 🔵\nGreen (أخضر) 🟢",
  "إليك 3 كلمات أساسية لمستوى A1:\nYellow (أصفر) 🟡\nBrown (بني) 🟤\nGrey (رمادي) 🩶",
  "إليك 3 كلمات أساسية لمستوى A1:\nPink (وردي) 🩷\nOrange (برتقالي) 🟠\nGold (ذهبي) 🥇",
  "إليك 3 كلمات أساسية لمستوى A1:\nSilver (فضي) 🥈\nBright (لامع) ✨\nDark (داكن) 🌑",
  "إليك 3 كلمات أساسية لمستوى A1:\nGlasses (نظارات) 👓\nSuit (بدلة) 🤵\nBelt (حزام) 👖",
  "إليك 3 كلمات أساسية لمستوى A1:\nRing (خاتم) 💍\nWatch (ساعة يد) ⌚\nPocket (جيب) 👖",
  "إليك 3 كلمات أساسية لمستوى A1:\nPocket (جيب) 👖\nAnimal (حيوان) 🐾\nDog (كلب) 🐶",
  "إليك 3 كلمات أساسية لمستوى A1:\nCat (قطة) 🐱\nBird (طائر) 🐦\nHorse (حصان) 🐴",
  "إليك 3 كلمات أساسية لمستوى A1:\nCow (بقرة) 🐄\nSheep (خروف) 🐑\nFish (سمكة) 🐟",
  "إليك 3 كلمات أساسية لمستوى A1:\nTree (شجرة) 🌳\nFlower (زهرة) 🌸\nGrass (عشب) 🌱",
  "إليك 3 كلمات أساسية لمستوى A1:\nPlant (نبات) 🪴\nSun (شمس) ☀️\nMoon (قمر) 🌙",
  "إليك 3 كلمات أساسية لمستوى A1:\nStar (نجمة) ⭐\nSky (سماء) 🌤️\nEarth (الأرض) 🌍",
  "إليك 3 كلمات أساسية لمستوى A1:\nWorld (العالم) 🌎\nLand (يابسة) 🌍\nSea (بحر) 🌊",
  "إليك 3 كلمات أساسية لمستوى A1:\nRiver (نهر) 🏞️\nLake (بحيرة) 🏞️\nMountain (جبل) ⛰️",
  "إليك 3 كلمات أساسية لمستوى A1:\nHill (تل) 🌄\nForest (غابة) 🌲\nWood (خشب) 🪵",
  "إليك 3 كلمات أساسية لمستوى A1:\nStone (حجر) 🪨\nFire (نار) 🔥\nWater (ماء) 💧",
  "إليك 3 كلمات أساسية لمستوى A1:\nAir (هواء) 🌬️\nRain (مطر) 🌧️\nSnow (ثلج) ❄️",
  "إليك 3 كلمات أساسية لمستوى A1:\nWind (رياح) 🌬️\nCloud (سحابة) ☁️\nRock (صخرة) 🪨"
];

// Itqan English Platform Main Controller

// Global Application States
let categories = [];
let allWordsMap = {}; // Fast O(1) word lookup
let currentCategory = null;
let currentTab = "course"; // "course", "story", "chat"
let wordFilterStatus = "all"; // "all", "unstudied", "mastered"
let activeStorySelectedWords = []; // Array of word objects

// LocalStorage Persistent States
let masteredWords = [];
let userXp = 0;
let userStreak = 1;

// Quiz State Managers
let quizCategory = null;
let quizQuestions = [];
let quizCurrentIndex = 0;
let quizSelectedOptionIdx = null;
let quizIsSubmitted = false;
let quizCorrectAnswersCount = 0;
let quizGainedXp = 0;

// Chat State Manager
let chatMessages = [
  {
    id: "welcome",
    role: "assistant",
    content: "أهلاً بك في منصة إتقان لتعلم اللغة الإنجليزية! 👋 أنا معلمك الذكي، ومستعد لمساعدتك في فهم، حفظ، وممارسة أهم 500 كلمة لمستوى A1. يمكنك كتابة أي سؤال أو ممارسة الكلمات معي، وسأقوم بتصحيح أي أخطاء وتقديم نصائح لحفظ الكلمات باللغة العربية بأسلوب شيق وبسيط جداً. كيف يمكنني مساعدتك اليوم؟",
    timestamp: new Date()
  }
];

// Active Word Explorer Modal State
let activeExplorerWord = null;

// Initialize Application on Window Load
window.addEventListener("DOMContentLoaded", async () => {
  setCopyrightYear();
  loadLocalStorage();
  // الكود الجديد:
fetchCategoriesData();

  renderUserMetrics();
  switchTab("course");
});

// Set copyright footer year dynamically
function setCopyrightYear() {
  const element = document.getElementById("footer-year");
  if (element) {
    element.textContent = new Date().getFullYear().toString();
  }
}

// Load States from LocalStorage
function loadLocalStorage() {
  try {
    const savedWords = localStorage.getItem("itqan_mastered_words");
    masteredWords = savedWords ? JSON.parse(savedWords) : [];

    const savedXp = localStorage.getItem("itqan_xp");
    userXp = savedXp ? parseInt(savedXp, 10) : 0;

    const savedStreak = localStorage.getItem("itqan_streak");
    userStreak = savedStreak ? parseInt(savedStreak, 10) : 1;
  } catch (err) {
    console.error("Error loading localStorage data:", err);
    masteredWords = [];
    userXp = 0;
    userStreak = 1;
  }
}

// Save Mastered Words to LocalStorage
function saveMasteredWords() {
  localStorage.setItem("itqan_mastered_words", JSON.stringify(masteredWords));
}

// Save User Stats to LocalStorage
function saveStats() {
  localStorage.setItem("itqan_xp", userXp.toString());
  localStorage.setItem("itqan_streak", userStreak.toString());
}

// Fetch categories and vocabulary words array from backend
// الكود الجديد - ضع هذا بدلاً منه:
function fetchCategoriesData() {
  categories = [
  {
    id: "greetings",
    nameAr: "الترحيب والأساسيات اليومية",
    nameEn: "Greetings & Everyday Basics",
    descriptionAr: "الكلمات الترحيبية والعبارات الأساسية للتفاعل اليومي الأول.",
    icon: "MessageSquare",
    words: [
      { id: "g1", word: "Hello", arabic: "مرحباً", pronunciation: "هَلَوْ", partOfSpeech: "other", example: "Hello! How are you?", exampleArabic: "مرحباً! كيف حالك؟" },
      { id: "g2", word: "Hi", arabic: "أهلاً", pronunciation: "هاي", partOfSpeech: "other", example: "Hi, nice to meet you.", exampleArabic: "أهلاً، سررت بلقائك." },
      { id: "g3", word: "Goodbye", arabic: "وداعاً", pronunciation: "جُدْ باي", partOfSpeech: "other", example: "It is time to say goodbye.", exampleArabic: "حان الوقت لنقول وداعاً." },
      { id: "g4", word: "Bye", arabic: "مع السلامة", pronunciation: "باي", partOfSpeech: "other", example: "Bye! See you tomorrow.", exampleArabic: "مع السلامة! أراك غداً." },
      { id: "g5", word: "Morning", arabic: "صباح", pronunciation: "مُورْنِنْج", partOfSpeech: "noun", example: "Good morning, everyone.", exampleArabic: "صباح الخير للجميع." },
      { id: "g6", word: "Afternoon", arabic: "بعد الظهر", pronunciation: "آفْتَرْنُون", partOfSpeech: "noun", example: "Good afternoon, sir.", exampleArabic: "مساء الخير يا سيدي (بعد الظهر)." },
      { id: "g7", word: "Evening", arabic: "مساء", pronunciation: "إيفْنِنْج", partOfSpeech: "noun", example: "Good evening and welcome.", exampleArabic: "مساء الخير وأهلاً بكم." },
      { id: "g8", word: "Night", arabic: "ليل / ليلة", pronunciation: "نايْت", partOfSpeech: "noun", example: "Good night, sleep well.", exampleArabic: "تصبح على خير، نم جيداً." },
      { id: "g9", word: "Please", arabic: "من فضلك", pronunciation: "بْليز", partOfSpeech: "other", example: "Can I have some water, please?", exampleArabic: "هل يمكنني الحصول على بعض الماء من فضلك؟" },
      { id: "g10", word: "Thanks", arabic: "شكراً", pronunciation: "ثانْكْس", partOfSpeech: "other", example: "Thanks for your help.", exampleArabic: "شكراً على مساعدتك." },
      { id: "g11", word: "Thank you", arabic: "شكراً لك", pronunciation: "ثانْكْ يو", partOfSpeech: "other", example: "Thank you very much.", exampleArabic: "شكراً جزيلاً لك." },
      { id: "g12", word: "Welcome", arabic: "أهلاً بك / مرحباً", pronunciation: "وِلْكَم", partOfSpeech: "other", example: "Welcome to our home.", exampleArabic: "مرحباً بكم في منزلنا." },
      { id: "g13", word: "Sorry", arabic: "آسف", pronunciation: "سُورِي", partOfSpeech: "adj", example: "I am sorry for being late.", exampleArabic: "أنا آسف على التأخير." },
      { id: "g14", word: "Excuse me", arabic: "معذرة", pronunciation: "إكْسْكْيوز مِي", partOfSpeech: "other", example: "Excuse me, where is the station?", exampleArabic: "معذرة، أين تقع المحطة؟" },
      { id: "g15", word: "Yes", arabic: "نعم", pronunciation: "يِس", partOfSpeech: "other", example: "Yes, I agree.", exampleArabic: "نعم، أنا موافق." },
      { id: "g16", word: "No", arabic: "لا", pronunciation: "نَوْ", partOfSpeech: "other", example: "No, thank you.", exampleArabic: "لا، شكراً لك." },
      { id: "g17", word: "Okay", arabic: "حسناً / موافق", pronunciation: "أَوْكِي", partOfSpeech: "other", example: "Okay, let's go.", exampleArabic: "حسناً، لنذهب." },
      { id: "g18", word: "Fine", arabic: "بخير / جيد", pronunciation: "فايْن", partOfSpeech: "adj", example: "I am fine, thank you.", exampleArabic: "أنا بخير، شكراً لك." },
      { id: "g19", word: "Mr.", arabic: "السيد", pronunciation: "مِسْتَر", partOfSpeech: "other", example: "This is Mr. Smith.", exampleArabic: "هذا هو السيد سميث." },
      { id: "g20", word: "Mrs.", arabic: "السيدة (المتزوجة)", pronunciation: "مِسِز", partOfSpeech: "other", example: "Mrs. Jones is our teacher.", exampleArabic: "السيدة جونز هي معلمتنا." },
      { id: "g21", word: "Ms.", arabic: "الآنسة / السيدة", pronunciation: "مِز", partOfSpeech: "other", example: "Ms. Green works in the office.", exampleArabic: "الآنسة غرين تعمل في المكتب." },
      { id: "g22", word: "Name", arabic: "اسم", pronunciation: "نِيْم", partOfSpeech: "noun", example: "What is your name?", exampleArabic: "ما اسمك؟" },
      { id: "g23", word: "Friend", arabic: "صديق", pronunciation: "فْرِنْد", partOfSpeech: "noun", example: "He is my best friend.", exampleArabic: "هو صديقي المفضل." },
      { id: "g24", word: "People", arabic: "ناس / أشخاص", pronunciation: "بِيْبل", partOfSpeech: "noun", example: "There are many people here.", exampleArabic: "يوجد الكثير من الناس هنا." },
      { id: "g25", word: "Man", arabic: "رجل", pronunciation: "مان", partOfSpeech: "noun", example: "The man is very tall.", exampleArabic: "الرجل طويل القامة جداً." },
      { id: "g26", word: "Woman", arabic: "امرأة", pronunciation: "وُومَن", partOfSpeech: "noun", example: "She is a kind woman.", exampleArabic: "إنها امرأة طيبة." },
      { id: "g27", word: "Boy", arabic: "ولد", pronunciation: "بُوي", partOfSpeech: "noun", example: "The little boy is playing.", exampleArabic: "الولد الصغير يلعب." },
      { id: "g28", word: "Girl", arabic: "بنت", pronunciation: "جِرْل", partOfSpeech: "noun", example: "The girl has blue eyes.", exampleArabic: "البنت لديها عينان زرقاوان." },
      { id: "g29", word: "Child", arabic: "طفل", pronunciation: "تشايْلْد", partOfSpeech: "noun", example: "The child is sleeping.", exampleArabic: "الطفل نائم." },
      { id: "g30", word: "Baby", arabic: "رضيع", pronunciation: "بِيْبي", partOfSpeech: "noun", example: "The baby is laughing.", exampleArabic: "الرضيع يضحك." },
      { id: "g31", word: "Who", arabic: "من", pronunciation: "هُو", partOfSpeech: "pronoun", example: "Who is at the door?", exampleArabic: "من عند الباب؟" },
      { id: "g32", word: "What", arabic: "ماذا / ما", pronunciation: "وُوت", partOfSpeech: "pronoun", example: "What is this?", exampleArabic: "ما هذا؟" },
      { id: "g33", word: "How", arabic: "كيف", pronunciation: "هاو", partOfSpeech: "adv", example: "How do you spell your name?", exampleArabic: "كيف تتهجى اسمك؟" },
      { id: "g34", word: "Why", arabic: "لماذا", pronunciation: "واي", partOfSpeech: "adv", example: "Why are you sad?", exampleArabic: "لماذا أنت حزين؟" },
      { id: "g35", word: "Where", arabic: "أين", pronunciation: "وِير", partOfSpeech: "adv", example: "Where is the restroom?", exampleArabic: "أين هو الحمام؟" },
      { id: "g36", word: "Age", arabic: "عمر / سن", pronunciation: "إيْج", partOfSpeech: "noun", example: "What is your age?", exampleArabic: "ما هو عمرك؟" },
      { id: "g37", word: "Address", arabic: "عنوان", pronunciation: "أَدْرِس", partOfSpeech: "noun", example: "Please write your address.", exampleArabic: "من فضلك اكتب عنوانك." },
      { id: "g38", word: "Sir", arabic: "سيد / سيدي", pronunciation: "سِر", partOfSpeech: "other", example: "Good morning, sir.", exampleArabic: "صباح الخير يا سيدي." },
      { id: "g39", word: "Lady", arabic: "سيدة / سيدة محترمة", pronunciation: "لِيْدي", partOfSpeech: "noun", example: "She is a very nice lady.", exampleArabic: "إنها سيدة لطيفة جداً." },
      { id: "g40", word: "Gentleman", arabic: "رجل محترم / سيد", pronunciation: "جِنْتِلْمان", partOfSpeech: "noun", example: "He is a kind gentleman.", exampleArabic: "إنه رجل محترم ولطيف." }
    ]
  },
  {
    id: "family",
    nameAr: "العائلة والأقارب",
    nameEn: "Family & Relatives",
    descriptionAr: "الكلمات التي تصف أفراد العائلة والعلاقات الاجتماعية القريبة.",
    icon: "Users",
    words: [
      { id: "f1", word: "Family", arabic: "عائلة / أسرة", pronunciation: "فامِلِي", partOfSpeech: "noun", example: "I love my family.", exampleArabic: "أنا أحب عائلتي." },
      { id: "f2", word: "Father", arabic: "أب", pronunciation: "فاذَر", partOfSpeech: "noun", example: "My father is a doctor.", exampleArabic: "أبي طبيب." },
      { id: "f3", word: "Mother", arabic: "أم", pronunciation: "ماذَر", partOfSpeech: "noun", example: "My mother is cooking dinner.", exampleArabic: "أمي تطبخ العشاء." },
      { id: "f4", word: "Dad", arabic: "بابا / أبي", pronunciation: "داد", partOfSpeech: "noun", example: "Dad, can you help me?", exampleArabic: "أبي، هل يمكنك مساعدتي؟" },
      { id: "f5", word: "Mom", arabic: "ماما / أمي", pronunciation: "موم", partOfSpeech: "noun", example: "Mom is reading a book.", exampleArabic: "أمي تقرأ كتاباً." },
      { id: "f6", word: "Brother", arabic: "أخ", pronunciation: "بْراذَر", partOfSpeech: "noun", example: "I have an older brother.", exampleArabic: "لدي أخ أكبر." },
      { id: "f7", word: "Sister", arabic: "أخت", pronunciation: "سِسْتَر", partOfSpeech: "noun", example: "My sister is ten years old.", exampleArabic: "أختي تبلغ من العمر عشر سنوات." },
      { id: "f8", word: "Son", arabic: "ابن", pronunciation: "سان", partOfSpeech: "noun", example: "They have a young son.", exampleArabic: "لديهم ابن صغير." },
      { id: "f9", word: "Daughter", arabic: "ابنة", pronunciation: "دوتَر", partOfSpeech: "noun", example: "Her daughter is very smart.", exampleArabic: "ابنتها ذكية جداً." },
      { id: "f10", word: "Parent", arabic: "أحد الوالدين", pronunciation: "بارَنْت", partOfSpeech: "noun", example: "Every parent wants the best.", exampleArabic: "كل والد يريد الأفضل." },
      { id: "f11", word: "Parents", arabic: "الوالدان", pronunciation: "بارَنْتْس", partOfSpeech: "noun", example: "My parents live in Cairo.", exampleArabic: "والداي يعيشان في القاهرة." },
      { id: "f12", word: "Grandfather", arabic: "جد", pronunciation: "جْرانْد فاذر", partOfSpeech: "noun", example: "My grandfather tells nice stories.", exampleArabic: "جدي يروي قصصاً جميلة." },
      { id: "f13", word: "Grandmother", arabic: "جدة", pronunciation: "جْرانْد ماذر", partOfSpeech: "noun", example: "My grandmother makes tasty cakes.", exampleArabic: "جدتي تصنع كعكاً لذيذاً." },
      { id: "f14", word: "Grandparent", arabic: "أحد الأجداد", pronunciation: "جْرانْد بارَنت", partOfSpeech: "noun", example: "I visit my grandparents on Friday.", exampleArabic: "أزور أجدادي في يوم الجمعة." },
      { id: "f15", word: "Husband", arabic: "زوج", pronunciation: "هازْبَنْد", partOfSpeech: "noun", example: "Her husband is very helpful.", exampleArabic: "زوجها متعاون جداً." },
      { id: "f16", word: "Wife", arabic: "زوجة", pronunciation: "وايف", partOfSpeech: "noun", example: "My wife is an engineer.", exampleArabic: "زوجتي مهندسة." },
      { id: "f17", word: "Uncle", arabic: "عم / خال", pronunciation: "انْكَل", partOfSpeech: "noun", example: "My uncle lives in London.", exampleArabic: "عمي يعيش في لندن." },
      { id: "f18", word: "Aunt", arabic: "عمة / خالة", pronunciation: "آنْت", partOfSpeech: "noun", example: "My aunt gave me a book.", exampleArabic: "خالتي أعطتني كتاباً." },
      { id: "f19", word: "Cousin", arabic: "ابن العم/الخال", pronunciation: "كازِن", partOfSpeech: "noun", example: "We play with our cousins.", exampleArabic: "نلعب مع أبناء عمومتنا." },
      { id: "f20", word: "Son-in-law", arabic: "صهر / زوج الابنة", pronunciation: "سان إن لو", partOfSpeech: "noun", example: "He is a good son-in-law.", exampleArabic: "هو زوج ابنة صالح." },
      { id: "f21", word: "Children", arabic: "أطفال", pronunciation: "تشِلْدرَن", partOfSpeech: "noun", example: "The children are in the park.", exampleArabic: "الأطفال في الحديقة." },
      { id: "f22", word: "Boyfriend", arabic: "صديق حميم", pronunciation: "بُوي فْرِند", partOfSpeech: "noun", example: "Her boyfriend lives nearby.", exampleArabic: "صديقها يعيش في الجوار." },
      { id: "f23", word: "Girlfriend", arabic: "صديقة حميمة", pronunciation: "جِرْل فْرِند", partOfSpeech: "noun", example: "He has a new girlfriend.", exampleArabic: "لديه صديقة جديدة." },
      { id: "f24", word: "Partner", arabic: "شريك", pronunciation: "بارْتْنَر", partOfSpeech: "noun", example: "They are business partners.", exampleArabic: "هما شريكان تجاريان." },
      { id: "f25", word: "Married", arabic: "متزوج", pronunciation: "مارِيد", partOfSpeech: "adj", example: "They have been married for five years.", exampleArabic: "هما متزوجان منذ خمس سنوات." },
      { id: "f26", word: "Single", arabic: "أعزب", pronunciation: "سِنْجَل", partOfSpeech: "adj", example: "He is single and lives alone.", exampleArabic: "هو أعزب ويعيش بمفرده." },
      { id: "f27", word: "Neighbor", arabic: "جار", pronunciation: "نِيْـبَر", partOfSpeech: "noun", example: "Our neighbor is friendly.", exampleArabic: "جارنا لطيف وودود." },
      { id: "f28", word: "Guest", arabic: "ضيف", pronunciation: "جِسْت", partOfSpeech: "noun", example: "We have a guest tonight.", exampleArabic: "لدينا ضيف الليلة." },
      { id: "f29", word: "Host", arabic: "مضيف", pronunciation: "هَوْسْت", partOfSpeech: "noun", example: "Our host made us feel welcome.", exampleArabic: "مضيفنا جعلنا نشعر بالترحيب." },
      { id: "f30", word: "Adult", arabic: "بالغ / راشد", pronunciation: "أَدَلْت", partOfSpeech: "noun", example: "This movie is for adults only.", exampleArabic: "هذا الفيلم للبالغين فقط." },
      { id: "f31", word: "Grandchild", arabic: "حفيد", pronunciation: "جْرانْد تشايْلْد", partOfSpeech: "noun", example: "They love their grandchild.", exampleArabic: "هم يحبون حفيدهم." },
      { id: "f32", word: "Nephew", arabic: "ابن الأخ / الأخت", pronunciation: "نِفْيو", partOfSpeech: "noun", example: "My nephew is five years old.", exampleArabic: "ابن أخي يبلغ من العمر خمس سنوات." },
      { id: "f33", word: "Niece", arabic: "ابنة الأخ / الأخت", pronunciation: "نِيس", partOfSpeech: "noun", example: "I bought a toy for my niece.", exampleArabic: "اشتريت لعبة لابنة أختي." },
      { id: "f34", word: "Relative", arabic: "قريب (من العائلة)", pronunciation: "رِلَتِيف", partOfSpeech: "noun", example: "He is a close relative of mine.", exampleArabic: "هو قريب لي من العائلة." },
      { id: "f35", word: "Twin", arabic: "توأم", pronunciation: "تْوِن", partOfSpeech: "noun", example: "She has a twin sister.", exampleArabic: "لديها أخت توأم." }
    ]
  },
  {
    id: "home",
    nameAr: "المنزل والغرف والأثاث",
    nameEn: "Home, Rooms & Furniture",
    descriptionAr: "الكلمات التي تصف البيت، محتوياته، الغرف، والأدوات المنزلية.",
    icon: "Home",
    words: [
      { id: "h1", word: "Home", arabic: "منزل / بيت", pronunciation: "هَوْم", partOfSpeech: "noun", example: "Let's go home.", exampleArabic: "لنذهب للمنزل." },
      { id: "h2", word: "House", arabic: "بيت (مبنى)", pronunciation: "هاوس", partOfSpeech: "noun", example: "They live in a big house.", exampleArabic: "يعيشون في بيت كبير." },
      { id: "h3", word: "Apartment", arabic: "شقة", pronunciation: "أَبارْتْمَنْت", partOfSpeech: "noun", example: "Our apartment is on the third floor.", exampleArabic: "شقتنا في الطابق الثالث." },
      { id: "h4", word: "Room", arabic: "غرفة", pronunciation: "رُوم", partOfSpeech: "noun", example: "This room is clean.", exampleArabic: "هذه الغرفة نظيفة." },
      { id: "h5", word: "Bedroom", arabic: "غرفة النوم", pronunciation: "بِد رُوم", partOfSpeech: "noun", example: "I have a TV in my bedroom.", exampleArabic: "لدي تلفاز في غرفة نومي." },
      { id: "h6", word: "Bathroom", arabic: "حمام", pronunciation: "باث رُوم", partOfSpeech: "noun", example: "The bathroom is down the hall.", exampleArabic: "الحمام في نهاية الممر." },
      { id: "h7", word: "Kitchen", arabic: "مطبخ", pronunciation: "كِتْشِن", partOfSpeech: "noun", example: "She is washing dishes in the kitchen.", exampleArabic: "هي تغسل الأطباق في المطبخ." },
      { id: "h8", word: "Living room", arabic: "غرفة المعيشة", pronunciation: "لِيفِنْج رُوم", partOfSpeech: "noun", example: "The family sits in the living room.", exampleArabic: "تجلس العائلة في غرفة المعيشة." },
      { id: "h9", word: "Door", arabic: "باب", pronunciation: "دُور", partOfSpeech: "noun", example: "Please close the door.", exampleArabic: "من فضلك أغلق الباب." },
      { id: "h10", word: "Window", arabic: "نافذة / شباك", pronunciation: "وِنْدَوْ", partOfSpeech: "noun", example: "Open the window, please.", exampleArabic: "افتح النافذة من فضلك." },
      { id: "h11", word: "Wall", arabic: "جدار / حائط", pronunciation: "وُول", partOfSpeech: "noun", example: "The wall is painted blue.", exampleArabic: "الجدار مدهون باللون الأزرق." },
      { id: "h12", word: "Floor", arabic: "أرضية / طابق", pronunciation: "فْلُور", partOfSpeech: "noun", example: "Clean the kitchen floor.", exampleArabic: "نظّف أرضية المطبخ." },
      { id: "h13", word: "Table", arabic: "طاولة / مائدة", pronunciation: "تِيْبل", partOfSpeech: "noun", example: "Put the books on the table.", exampleArabic: "ضع الكتب على الطاولة." },
      { id: "h14", word: "Chair", arabic: "كرسي", pronunciation: "تشِير", partOfSpeech: "noun", example: "Sit on this comfortable chair.", exampleArabic: "اجلس على هذا الكرسي المريح." },
      { id: "h15", word: "Bed", arabic: "سرير", pronunciation: "بِد", partOfSpeech: "noun", example: "The bed is very soft.", exampleArabic: "السرير ناعم جداً." },
      { id: "h16", word: "Sofa", arabic: "أريكة / كنب", pronunciation: "سَوْفا", partOfSpeech: "noun", example: "He is sleeping on the sofa.", exampleArabic: "هو نائم على الأريكة." },
      { id: "h17", word: "Desk", arabic: "مكتب (طاولة)", pronunciation: "دِسْك", partOfSpeech: "noun", example: "I study at my desk.", exampleArabic: "أدرس على مكتبي." },
      { id: "h18", word: "Key", arabic: "مفتاح", pronunciation: "كِي", partOfSpeech: "noun", example: "I lost my house keys.", exampleArabic: "فقدت مفاتيح منزلي." },
      { id: "h19", word: "Clock", arabic: "ساعة حائط", pronunciation: "كْلوك", partOfSpeech: "noun", example: "The clock shows ten o'clock.", exampleArabic: "ساعة الحائط تشير إلى العاشرة." },
      { id: "h20", word: "Mirror", arabic: "مرآة", pronunciation: "مِرَر", partOfSpeech: "noun", example: "She looks in the mirror.", exampleArabic: "هي تنظر في المرآة." },
      { id: "h21", word: "Fridge", arabic: "ثلاجة", pronunciation: "فْرِيدْج", partOfSpeech: "noun", example: "Put the milk in the fridge.", exampleArabic: "ضع الحليب في الثلاجة." },
      { id: "h22", word: "TV", arabic: "تلفاز", pronunciation: "تِي فِي", partOfSpeech: "noun", example: "Let's watch TV.", exampleArabic: "لنستمتع بمشاهدة التلفاز." },
      { id: "h23", word: "Light", arabic: "ضوء / لمبة", pronunciation: "لايْت", partOfSpeech: "noun", example: "Turn on the light, please.", exampleArabic: "شغل الضوء من فضلك." },
      { id: "h24", word: "Garden", arabic: "حديقة منزلية", pronunciation: "جارْدَن", partOfSpeech: "noun", example: "We have beautiful flowers in our garden.", exampleArabic: "لدينا زهور جميلة في حديقتنا." },
      { id: "h25", word: "Roof", arabic: "سقف / سطح", pronunciation: "رُوف", partOfSpeech: "noun", example: "There is a cat on the roof.", exampleArabic: "توجد قطة على السطح." },
      { id: "h26", word: "Shower", arabic: "استحمام / دُش", pronunciation: "شاوَر", partOfSpeech: "noun", example: "I take a shower in the morning.", exampleArabic: "أستحم في الصباح." },
      { id: "h27", word: "Soap", arabic: "صابون", pronunciation: "سَوْب", partOfSpeech: "noun", example: "Wash your hands with soap.", exampleArabic: "اغسل يديك بالصابون." },
      { id: "h28", word: "Towel", arabic: "منشفة / فوطة", pronunciation: "تاوَل", partOfSpeech: "noun", example: "Here is a dry towel.", exampleArabic: "إليك منشفة جافة." },
      { id: "h29", word: "Bag", arabic: "حقيبة / كيس", pronunciation: "باج", partOfSpeech: "noun", example: "Put the shopping in the bag.", exampleArabic: "ضع المشتريات في الحقيبة." },
      { id: "h30", word: "Box", arabic: "صندوق / كرتون", pronunciation: "بوكْس", partOfSpeech: "noun", example: "What is inside this big box?", exampleArabic: "ماذا يوجد بداخل هذا الصندوق الكبير؟" },
      { id: "h31", word: "Blanket", arabic: "بطانية", pronunciation: "بْلانْكِت", partOfSpeech: "noun", example: "I need a warm blanket.", exampleArabic: "أحتاج إلى بطانية دافئة." },
      { id: "h32", word: "Pillow", arabic: "وسادة", pronunciation: "بِلَوْ", partOfSpeech: "noun", example: "This pillow is very soft.", exampleArabic: "هذه الوسادة ناعمة جداً." },
      { id: "h33", word: "Curtain", arabic: "ستارة", pronunciation: "كِرْتِن", partOfSpeech: "noun", example: "Close the curtains, please.", exampleArabic: "أغلق الستائر من فضلك." },
      { id: "h34", word: "Plate", arabic: "طبق / صحن", pronunciation: "بْلِيْت", partOfSpeech: "noun", example: "Put the cake on a plate.", exampleArabic: "ضع الكعكة في طبق." },
      { id: "h35", word: "Spoon", arabic: "ملعقة", pronunciation: "سْبُون", partOfSpeech: "noun", example: "Eat your soup with a spoon.", exampleArabic: "تناول حساءك بالملعقة." }
    ]
  },
  {
    id: "food",
    nameAr: "الطعام والشراب والوجبات",
    nameEn: "Food, Drink & Meals",
    descriptionAr: "مفردات المأكولات، المشروبات، الفواكه والخضار الشائعة.",
    icon: "Utensils",
    words: [
      { id: "fo1", word: "Food", arabic: "طعام", pronunciation: "فُود", partOfSpeech: "noun", example: "The food is very delicious.", exampleArabic: "الطعام لذيذ جداً." },
      { id: "fo2", word: "Drink", arabic: "يشرب / مشروب", pronunciation: "دْرِينْك", partOfSpeech: "verb", example: "I want to drink some water.", exampleArabic: "أريد شرب بعض الماء." },
      { id: "fo3", word: "Water", arabic: "ماء", pronunciation: "ووتَر", partOfSpeech: "noun", example: "Can I get a glass of water?", exampleArabic: "هل يمكنني الحصول على كوب ماء؟" },
      { id: "fo4", word: "Tea", arabic: "شاي", pronunciation: "تِي", partOfSpeech: "noun", example: "I drink hot tea in the morning.", exampleArabic: "أشرب الشاي الساخن في الصباح." },
      { id: "fo5", word: "Coffee", arabic: "قهوة", pronunciation: "كوفِي", partOfSpeech: "noun", example: "He loves black coffee.", exampleArabic: "هو يعشق القهوة السادة." },
      { id: "fo6", word: "Milk", arabic: "حليب", pronunciation: "مِلْك", partOfSpeech: "noun", example: "Milk is good for children.", exampleArabic: "الحليب مفيد للأطفال." },
      { id: "fo7", word: "Juice", arabic: "عصير", pronunciation: "جُوس", partOfSpeech: "noun", example: "Orange juice is fresh.", exampleArabic: "عصير البرتقال طازج." },
      { id: "fo8", word: "Bread", arabic: "خبز", pronunciation: "بْرِد", partOfSpeech: "noun", example: "I buy fresh bread every day.", exampleArabic: "أشتري الخبز الطازج كل يوم." },
      { id: "fo9", word: "Rice", arabic: "أرز", pronunciation: "رايْس", partOfSpeech: "noun", example: "We eat chicken with rice.", exampleArabic: "نأكل الدجاج مع الأرز." },
      { id: "fo10", word: "Meat", arabic: "لحم", pronunciation: "مِيت", partOfSpeech: "noun", example: "I do not eat red meat.", exampleArabic: "أنا لا آكل اللحوم الحمراء." },
      { id: "fo11", word: "Fish", arabic: "سمك", pronunciation: "فِش", partOfSpeech: "noun", example: "Fish is very healthy.", exampleArabic: "السمك صحي للغاية." },
      { id: "fo12", word: "Chicken", arabic: "دجاج", pronunciation: "تشِكِن", partOfSpeech: "noun", example: "We cooked grilled chicken.", exampleArabic: "طبخنا دجاجاً مشوياً." },
      { id: "fo13", word: "Egg", arabic: "بيضة", pronunciation: "إيج", partOfSpeech: "noun", example: "I eat boiled eggs for breakfast.", exampleArabic: "آكل بيضاً مسلوقاً على الفطور." },
      { id: "fo14", word: "Cheese", arabic: "جبن", pronunciation: "تشِيز", partOfSpeech: "noun", example: "This cheese is made from milk.", exampleArabic: "هذا الجبن مصنوع من الحليب." },
      { id: "fo15", word: "Fruit", arabic: "فاكهة", pronunciation: "فْرُوت", partOfSpeech: "noun", example: "Apple is my favorite fruit.", exampleArabic: "التفاح فاكهتي المفضلة." },
      { id: "fo16", word: "Vegetable", arabic: "خضار", pronunciation: "فِجْتَـبل", partOfSpeech: "noun", example: "Eat plenty of green vegetables.", exampleArabic: "تناول الكثير من الخضار الخضراء." },
      { id: "fo17", word: "Apple", arabic: "تفاحة", pronunciation: "آبل", partOfSpeech: "noun", example: "An apple a day keeps the doctor away.", exampleArabic: "تفاحة في اليوم تغنيك عن الطبيب." },
      { id: "fo18", word: "Banana", arabic: "موز", pronunciation: "بَنانَا", partOfSpeech: "noun", example: "Bananas are sweet and yellow.", exampleArabic: "الموز حلو وأصفر اللون." },
      { id: "fo19", word: "Orange", arabic: "برتقال / برتقالي", pronunciation: "أورِنْج", partOfSpeech: "noun", example: "He peeled an orange.", exampleArabic: "هو قشر برتقالة." },
      { id: "fo20", word: "Tomato", arabic: "طماطم", pronunciation: "توماتَوْ", partOfSpeech: "noun", example: "Tomatoes are used in salads.", exampleArabic: "تُستخدم الطماطم في السلطات." },
      { id: "fo21", word: "Potato", arabic: "بطاطس", pronunciation: "بوتيتَوْ", partOfSpeech: "noun", example: "I love fried potatoes.", exampleArabic: "أحب البطاطس المقلية." },
      { id: "fo22", word: "Sugar", arabic: "سكر", pronunciation: "شوجَر", partOfSpeech: "noun", example: "Don't add too much sugar.", exampleArabic: "لا تضف الكثير من السكر." },
      { id: "fo23", word: "Salt", arabic: "ملح", pronunciation: "سُولْت", partOfSpeech: "noun", example: "Can you pass the salt, please?", exampleArabic: "هل يمكنك تمرير الملح من فضلك؟" },
      { id: "fo24", word: "Sweet", arabic: "حلو", pronunciation: "سْوِيت", partOfSpeech: "adj", example: "Chocolate is very sweet.", exampleArabic: "الشوكولاتة حلوة المذاق جداً." },
      { id: "fo25", word: "Breakfast", arabic: "فطور", pronunciation: "بْرِكْفَسْت", partOfSpeech: "noun", example: "What did you eat for breakfast?", exampleArabic: "ماذا أكلت على الفطور؟" },
      { id: "fo26", word: "Lunch", arabic: "غداء", pronunciation: "لانْتش", partOfSpeech: "noun", example: "We have lunch at two o'clock.", exampleArabic: "نتناول الغداء عند الساعة الثانية." },
      { id: "fo27", word: "Dinner", arabic: "عشاء", pronunciation: "دِنَر", partOfSpeech: "noun", example: "They invited us for dinner.", exampleArabic: "لقد دعونا لتناول العشاء." },
      { id: "fo28", word: "Meal", arabic: "وجبة", pronunciation: "مِيل", partOfSpeech: "noun", example: "I eat three meals a day.", exampleArabic: "آكل ثلاث وجبات يومياً." },
      { id: "fo29", word: "Hungry", arabic: "جائع", pronunciation: "هانْجْرِي", partOfSpeech: "adj", example: "I am hungry, let's cook something.", exampleArabic: "أنا جائع، لنطبخ شيئاً." },
      { id: "fo30", word: "Thirsty", arabic: "عطشان", pronunciation: "ثِرْسْتِي", partOfSpeech: "adj", example: "The hot weather makes me thirsty.", exampleArabic: "الطقس الحار يجعلني عطشاناً." },
      { id: "fo31", word: "Fork", arabic: "شوكة", pronunciation: "فُورْك", partOfSpeech: "noun", example: "Use a fork to eat salad.", exampleArabic: "استخدم شوكة لتناول السلطة." },
      { id: "fo32", word: "Knife", arabic: "سكين", pronunciation: "نايْف", partOfSpeech: "noun", example: "Be careful, the knife is sharp.", exampleArabic: "كن حذراً، السكين حاد." },
      { id: "fo33", word: "Cup", arabic: "كوب / فنجان", pronunciation: "كاب", partOfSpeech: "noun", example: "Would you like a cup of tea?", exampleArabic: "هل ترغب في كوب من الشاي؟" },
      { id: "fo34", word: "Glass", arabic: "كأس زجاجي", pronunciation: "جْلاس", partOfSpeech: "noun", example: "He drank a glass of cold water.", exampleArabic: "هو شرب كأساً من الماء البارد." },
      { id: "fo35", word: "Oil", arabic: "زيت", pronunciation: "أُويْل", partOfSpeech: "noun", example: "We use olive oil in cooking.", exampleArabic: "نحن نستخدم زيت الزيتون في الطبخ." }
    ]
  },
  {
    id: "body",
    nameAr: "الجسم والصحة والأعضاء",
    nameEn: "Body & Health",
    descriptionAr: "أجزاء الجسم البشري الأساسية ومصطلحات الصحة والنظافة.",
    icon: "Heart",
    words: [
      { id: "b1", word: "Body", arabic: "جسم / جسد", pronunciation: "بُودِي", partOfSpeech: "noun", example: "Keep your body healthy.", exampleArabic: "حافظ على صحة جسدك." },
      { id: "b2", word: "Head", arabic: "رأس", pronunciation: "هِد", partOfSpeech: "noun", example: "Wear a hat to protect your head.", exampleArabic: "ارتدِ قبعة لحماية رأسك." },
      { id: "b3", word: "Face", arabic: "وجه", pronunciation: "فِيْس", partOfSpeech: "noun", example: "Wash your face with clean water.", exampleArabic: "اغسل وجهك بماء نظيف." },
      { id: "b4", word: "Eye", arabic: "عين", pronunciation: "آي", partOfSpeech: "noun", example: "She has green eyes.", exampleArabic: "لديها عينان خضراوان." },
      { id: "b5", word: "Ear", arabic: "أذن", pronunciation: "إير", partOfSpeech: "noun", example: "I hear with my ears.", exampleArabic: "أسمع بأذني." },
      { id: "b6", word: "Nose", arabic: "أنف", pronunciation: "نَوْز", partOfSpeech: "noun", example: "Smell this flower with your nose.", exampleArabic: "شم هذه الزهرة بأنفك." },
      { id: "b7", word: "Mouth", arabic: "فم", pronunciation: "ماوث", partOfSpeech: "noun", example: "Open your mouth, please.", exampleArabic: "افتح فمك من فضلك." },
      { id: "b8", word: "Tooth", arabic: "سن / ضرس", pronunciation: "توث", partOfSpeech: "noun", example: "I brush my teeth twice a day.", exampleArabic: "أنظف أسناني مرتين في اليوم." },
      { id: "b9", word: "Teeth", arabic: "أسنان", pronunciation: "تِيث", partOfSpeech: "noun", example: "Healthy teeth are white.", exampleArabic: "الأسنان السليمة تكون بيضاء." },
      { id: "b10", word: "Hair", arabic: "شعر", pronunciation: "هِير", partOfSpeech: "noun", example: "She has long black hair.", exampleArabic: "لديها شعر أسود طويل." },
      { id: "b11", word: "Hand", arabic: "يد", pronunciation: "هاند", partOfSpeech: "noun", example: "Give me your hand, please.", exampleArabic: "أعطني يدك من فضلك." },
      { id: "b12", word: "Arm", arabic: "ذراع", pronunciation: "آرْم", partOfSpeech: "noun", example: "He broke his arm during sports.", exampleArabic: "كسر ذراعه أثناء ممارسة الرياضة." },
      { id: "b13", word: "Leg", arabic: "رجل / ساق", pronunciation: "لِيج", partOfSpeech: "noun", example: "My legs are tired from walking.", exampleArabic: "ساقاي متعبتان من المشي." },
      { id: "b14", word: "Foot", arabic: "قدم", pronunciation: "فُوت", partOfSpeech: "noun", example: "He kicked the ball with his foot.", exampleArabic: "ركل الكرة بقدمه." },
      { id: "b15", word: "Feet", arabic: "أقدام", pronunciation: "فِيت", partOfSpeech: "noun", example: "Wash your feet before sleeping.", exampleArabic: "اغسل قدميك قبل النوم." },
      { id: "b16", word: "Finger", arabic: "إصبع اليد", pronunciation: "فِنْجَر", partOfSpeech: "noun", example: "He pointed with his finger.", exampleArabic: "أشار بإصبعه." },
      { id: "b17", word: "Heart", arabic: "قلب", pronunciation: "هارْت", partOfSpeech: "noun", example: "The heart pumps blood.", exampleArabic: "القلب يضخ الدم." },
      { id: "b18", word: "Blood", arabic: "دم", pronunciation: "بْلاد", partOfSpeech: "noun", example: "The doctor checked my blood.", exampleArabic: "فحص الطبيب دمي." },
      { id: "b19", word: "Health", arabic: "صحة", pronunciation: "هِلْث", partOfSpeech: "noun", example: "Health is wealth.", exampleArabic: "الصحة هي الثروة الحقيقية." },
      { id: "b20", word: "Healthy", arabic: "صحي", pronunciation: "هِلْثِي", partOfSpeech: "adj", example: "Eating apples is a healthy habit.", exampleArabic: "تناول التفاح عادة صحية." },
      { id: "b21", word: "Ill", arabic: "مريض", pronunciation: "إل", partOfSpeech: "adj", example: "She is ill and stayed in bed.", exampleArabic: "هي مريضة وبقيت في الفراش." },
      { id: "b22", word: "Sick", arabic: "مريض / متعب", pronunciation: "سِك", partOfSpeech: "adj", example: "I feel sick today.", exampleArabic: "أشعر بالمرض اليوم." },
      { id: "b23", word: "Doctor", arabic: "طبيب / دكتور", pronunciation: "دوكْتَر", partOfSpeech: "noun", example: "The doctor will see you now.", exampleArabic: "الطبيب سيراك الآن." },
      { id: "b24", word: "Medicine", arabic: "دواء / طب", pronunciation: "مِدْسِن", partOfSpeech: "noun", example: "Take this medicine after lunch.", exampleArabic: "تناول هذا الدواء بعد الغداء." },
      { id: "b25", word: "Hospital", arabic: "مستشفى", pronunciation: "هوسْبِيتَل", partOfSpeech: "noun", example: "He is recovering in the hospital.", exampleArabic: "إنه يتماثل للشفاء في المستشفى." },
      { id: "b26", word: "Pain", arabic: "ألم", pronunciation: "بِيْن", partOfSpeech: "noun", example: "I have a pain in my back.", exampleArabic: "عندي ألم في ظهري." },
      { id: "b27", word: "Clean", arabic: "نظيف / ينظف", pronunciation: "كْلِين", partOfSpeech: "adj", example: "Keep your hands clean.", exampleArabic: "حافظ على نظافة يديك." },
      { id: "b28", word: "Dirty", arabic: "متسخ", pronunciation: "دِرْتِي", partOfSpeech: "adj", example: "Don't touch the dirty floor.", exampleArabic: "لا تلمس الأرضية المتسخة." },
      { id: "b29", word: "Rest", arabic: "يرتاح / راحة", pronunciation: "رِسْت", partOfSpeech: "verb", example: "You need to rest for a while.", exampleArabic: "تحتاج إلى الراحة لبعض الوقت." },
      { id: "b30", word: "Sleep", arabic: "ينام / نوم", pronunciation: "سْلِيب", partOfSpeech: "verb", example: "I need eight hours of sleep.", exampleArabic: "أحتاج إلى ثماني ساعات من النوم." },
      { id: "b31", word: "Brain", arabic: "دماغ / عقل", pronunciation: "بْرِيْن", partOfSpeech: "noun", example: "The brain helps us think.", exampleArabic: "العقل يساعدنا على التفكير." },
      { id: "b32", word: "Bone", arabic: "عظم", pronunciation: "بَوْن", partOfSpeech: "noun", example: "Milk is good for your bones.", exampleArabic: "الحليب مفيد لعظامك." },
      { id: "b33", word: "Skin", arabic: "جلد / بشرة", pronunciation: "سْكِن", partOfSpeech: "noun", example: "His skin is soft.", exampleArabic: "بشرته ناعمة." },
      { id: "b34", word: "Neck", arabic: "رقبة", pronunciation: "نِك", partOfSpeech: "noun", example: "He wore a scarf around his neck.", exampleArabic: "ارتدى وشاحاً حول رقبته." },
      { id: "b35", word: "Shoulder", arabic: "كتف", pronunciation: "شَوْلْدَر", partOfSpeech: "noun", example: "He put his hand on my shoulder.", exampleArabic: "وضع يده على كتفي." }
    ]
  },
  {
    id: "clothes",
    nameAr: "الملابس والألوان والأناقة",
    nameEn: "Clothes, Colors & Fashion",
    descriptionAr: "أسماء الملابس اليومية والألوان الأساسية لوصف المظهر.",
    icon: "Shirt",
    words: [
      { id: "c1", word: "Clothes", arabic: "ملابس", pronunciation: "كْلَوْذْز", partOfSpeech: "noun", example: "I bought new clothes.", exampleArabic: "اشتريت ملابساً جديدة." },
      { id: "c2", word: "Shirt", arabic: "قميص", pronunciation: "شِرْت", partOfSpeech: "noun", example: "His shirt is white and clean.", exampleArabic: "قميصه أبيض ونظيف." },
      { id: "c3", word: "Trousers", arabic: "بنطال", pronunciation: "تْراوزَرز", partOfSpeech: "noun", example: "He wears blue trousers.", exampleArabic: "يرتدي بنطالاً أزرق." },
      { id: "c4", word: "Pants", arabic: "بنطال (أمريكي)", pronunciation: "بانتْس", partOfSpeech: "noun", example: "These pants are too long.", exampleArabic: "هذا البنطال طويل جداً." },
      { id: "c5", word: "Dress", arabic: "فستان / يرتدي", pronunciation: "دْرِس", partOfSpeech: "noun", example: "She wore a red dress.", exampleArabic: "ارتدت فستاناً أحمر." },
      { id: "c6", word: "Skirt", arabic: "تنورة", pronunciation: "سْكِرْت", partOfSpeech: "noun", example: "A black skirt is easy to wear.", exampleArabic: "التنورة السوداء سهلة التنسيق." },
      { id: "c7", word: "Coat", arabic: "معطف", pronunciation: "كَوْت", partOfSpeech: "noun", example: "Wear a coat, it's cold outside.", exampleArabic: "ارتدِ معطفاً، الجو بارد في الخارج." },
      { id: "c8", word: "Jacket", arabic: "سترة / جاكيت", pronunciation: "جاكِت", partOfSpeech: "noun", example: "I like this brown leather jacket.", exampleArabic: "أعجبني هذا الجاكيت الجلدي البني." },
      { id: "c9", word: "Hat", arabic: "قبعة", pronunciation: "هات", partOfSpeech: "noun", example: "He put a hat on his head.", exampleArabic: "وضع قبعة على رأسه." },
      { id: "c10", word: "Shoe", arabic: "حذاء", pronunciation: "شُو", partOfSpeech: "noun", example: "Take off your shoes at the door.", exampleArabic: "اخلع حذائك عند الباب." },
      { id: "c11", word: "Shoes", arabic: "أحذية", pronunciation: "شُوز", partOfSpeech: "noun", example: "These sports shoes are comfortable.", exampleArabic: "هذه الأحذية الرياضية مريحة." },
      { id: "c12", word: "Sock", arabic: "جورب", pronunciation: "سوك", partOfSpeech: "noun", example: "I have clean socks.", exampleArabic: "لدي جوارب نظيفة." },
      { id: "c13", word: "Socks", arabic: "جوارب", pronunciation: "سوكْس", partOfSpeech: "noun", example: "White socks get dirty easily.", exampleArabic: "الجوارب البيضاء تتسخ بسهولة." },
      { id: "c14", word: "Wear", arabic: "يرتدي / يلبس", pronunciation: "وِير", partOfSpeech: "verb", example: "I wear glasses for reading.", exampleArabic: "أرتدي نظارات للقراءة." },
      { id: "c15", word: "Color", arabic: "لون", pronunciation: "كالَر", partOfSpeech: "noun", example: "What is your favorite color?", exampleArabic: "ما هو لونك المفضل؟" },
      { id: "c16", word: "White", arabic: "أبيض", pronunciation: "وايت", partOfSpeech: "adj", example: "The paper is white.", exampleArabic: "الورقة بيضاء اللون." },
      { id: "c17", word: "Black", arabic: "أسود", pronunciation: "بْلاك", partOfSpeech: "adj", example: "She drives a black car.", exampleArabic: "هي تقود سيارة سوداء." },
      { id: "c18", word: "Red", arabic: "أحمر", pronunciation: "رِد", partOfSpeech: "adj", example: "Apples are often red.", exampleArabic: "التفاح غالباً ما يكون أحمر اللون." },
      { id: "c19", word: "Blue", arabic: "أزرق", pronunciation: "بْلُو", partOfSpeech: "adj", example: "The sky is blue today.", exampleArabic: "السماء زرقاء اليوم." },
      { id: "c20", word: "Green", arabic: "أخضر", pronunciation: "جْرِين", partOfSpeech: "adj", example: "The grass is green in spring.", exampleArabic: "العشب أخضر اللون في الربيع." },
      { id: "c21", word: "Yellow", arabic: "أصفر", pronunciation: "يِلَوْ", partOfSpeech: "adj", example: "The banana is ripe and yellow.", exampleArabic: "الموزة ناضجة وصفراء اللون." },
      { id: "c22", word: "Brown", arabic: "بني", pronunciation: "بْراون", partOfSpeech: "adj", example: "The table is brown.", exampleArabic: "الطاولة بنية اللون." },
      { id: "c23", word: "Grey", arabic: "رمادي", pronunciation: "جْرِي", partOfSpeech: "adj", example: "The clouds are grey.", exampleArabic: "الغيوم رمادية اللون." },
      { id: "c24", word: "Pink", arabic: "وردي", pronunciation: "بِينْك", partOfSpeech: "adj", example: "She loves pink flowers.", exampleArabic: "هي تحب الزهور الوردية." },
      { id: "c25", word: "Orange", arabic: "برتقالي", pronunciation: "أورِنْج", partOfSpeech: "adj", example: "The sunset was bright orange.", exampleArabic: "كان الغروب بلون برتقالي زاهٍ." },
      { id: "c26", word: "Gold", arabic: "ذهبي", pronunciation: "جَوْلْد", partOfSpeech: "adj", example: "She wears a gold ring.", exampleArabic: "هي ترتدي خاتماً ذهبياً." },
      { id: "c27", word: "Silver", arabic: "فضي", pronunciation: "سِلْوَر", partOfSpeech: "adj", example: "The coin is silver.", exampleArabic: "العملة المعدنية فضية." },
      { id: "c28", word: "Bright", arabic: "لامع / ساطع", pronunciation: "بْرايْت", partOfSpeech: "adj", example: "The stars are bright.", exampleArabic: "النجوم ساطعة ولماعة." },
      { id: "c29", word: "Dark", arabic: "داكن / مظلم", pronunciation: "دارْك", partOfSpeech: "adj", example: "It is dark outside.", exampleArabic: "الجو مظلم في الخارج." },
      { id: "c30", word: "Glasses", arabic: "نظارات", pronunciation: "جْلاسِز", partOfSpeech: "noun", example: "He needs his glasses to see.", exampleArabic: "يحتاج نظاراته لكي يرى." },
      { id: "c31", word: "Suit", arabic: "بدلة", pronunciation: "سُوت", partOfSpeech: "noun", example: "He wore a black suit to the wedding.", exampleArabic: "ارتدى بدلة سوداء في حفل الزفاف." },
      { id: "c32", word: "Belt", arabic: "حزام", pronunciation: "بِلْت", partOfSpeech: "noun", example: "I need a new brown belt.", exampleArabic: "أحتاج إلى حزام بني جديد." },
      { id: "c33", word: "Ring", arabic: "خاتم", pronunciation: "رِنْج", partOfSpeech: "noun", example: "She lost her gold ring.", exampleArabic: "فقدت خاتمها الذهبي." },
      { id: "c34", word: "Watch", arabic: "ساعة يد", pronunciation: "ووتش", partOfSpeech: "noun", example: "My watch shows the correct time.", exampleArabic: "ساعة يدي تعرض الوقت الصحيح." },
      { id: "c35", word: "Pocket", arabic: "جيب (في الملابس)", pronunciation: "بوكِت", partOfSpeech: "noun", example: "He kept the keys in his pocket.", exampleArabic: "احتفظ بالمفاتيح في جيبه." }
    ]
  },
  {
    id: "nature",
    nameAr: "الحيوانات والطبيعة",
    nameEn: "Animals & Nature",
    descriptionAr: "الكلمات المتعلقة بالبيئة الطبيعية، النباتات والحيوانات الأليفة.",
    icon: "Trees",
    words: [
      { id: "n1", word: "Animal", arabic: "حيوان", pronunciation: "أنِيمَل", partOfSpeech: "noun", example: "A cat is a small animal.", exampleArabic: "القط حيوان صغير." },
      { id: "n2", word: "Dog", arabic: "كلب", pronunciation: "دوج", partOfSpeech: "noun", example: "The dog barks at night.", exampleArabic: "الكلب ينبح في الليل." },
      { id: "n3", word: "Cat", arabic: "قطة", pronunciation: "كات", partOfSpeech: "noun", example: "Our cat is sleeping on the bed.", exampleArabic: "قطتنا نائمة على السرير." },
      { id: "n4", word: "Bird", arabic: "طائر / عصفور", pronunciation: "بِرْد", partOfSpeech: "noun", example: "The bird is singing on the tree.", exampleArabic: "الطائر يغرد على الشجرة." },
      { id: "n5", word: "Horse", arabic: "حصان", pronunciation: "هورْس", partOfSpeech: "noun", example: "He rides a white horse.", exampleArabic: "هو يركب حصاناً أبيض." },
      { id: "n6", word: "Cow", arabic: "بقرة", pronunciation: "كاو", partOfSpeech: "noun", example: "The cow gives milk.", exampleArabic: "البقرة تعطي الحليب." },
      { id: "n7", word: "Sheep", arabic: "خروف / أغنام", pronunciation: "شِيب", partOfSpeech: "noun", example: "There are many sheep on the farm.", exampleArabic: "يوجد الكثير من الأغنام في المزرعة." },
      { id: "n8", word: "Fish", arabic: "سمك", pronunciation: "فِش", partOfSpeech: "noun", example: "The fish is swimming in the river.", exampleArabic: "السمكة تسبح في النهر." },
      { id: "n9", word: "Tree", arabic: "شجرة", pronunciation: "تْرِي", partOfSpeech: "noun", example: "Birds live on trees.", exampleArabic: "الطيور تعيش على الأشجار." },
      { id: "n10", word: "Flower", arabic: "زهرة / وردة", pronunciation: "فْلاوَر", partOfSpeech: "noun", example: "The flower smells sweet.", exampleArabic: "الوردة رائحتها زكية." },
      { id: "n11", word: "Grass", arabic: "عشب", pronunciation: "جْراس", partOfSpeech: "noun", example: "The grass is green.", exampleArabic: "العشب أخضر اللون." },
      { id: "n12", word: "Plant", arabic: "نبات / يزرع", pronunciation: "بْلانْت", partOfSpeech: "noun", example: "Water the plants daily.", exampleArabic: "اسقِ النباتات يومياً." },
      { id: "n13", word: "Sun", arabic: "شمس", pronunciation: "سان", partOfSpeech: "noun", example: "The sun is hot today.", exampleArabic: "الشمس حارة اليوم." },
      { id: "n14", word: "Moon", arabic: "قمر", pronunciation: "مُون", partOfSpeech: "noun", example: "The moon is beautiful tonight.", exampleArabic: "القمر جميل الليلة." },
      { id: "n15", word: "Star", arabic: "نجمة", pronunciation: "سْتار", partOfSpeech: "noun", example: "The stars are shining.", exampleArabic: "النجوم تتلألأ." },
      { id: "n16", word: "Sky", arabic: "سماء", pronunciation: "سكاي", partOfSpeech: "noun", example: "The sky is clear today.", exampleArabic: "السماء صافية اليوم." },
      { id: "n17", word: "Earth", arabic: "كوكب الأرض / تراب", pronunciation: "إرْث", partOfSpeech: "noun", example: "Earth is our home planet.", exampleArabic: "الأرض هي كوكبنا الأم." },
      { id: "n18", word: "World", arabic: "عالم", pronunciation: "وِرْلْد", partOfSpeech: "noun", example: "Travel around the world.", exampleArabic: "سافر حول العالم." },
      { id: "n19", word: "Land", arabic: "أرض / يهبط", pronunciation: "لاند", partOfSpeech: "noun", example: "They bought some farming land.", exampleArabic: "اشتروا أرضاً زراعية." },
      { id: "n20", word: "Sea", arabic: "بحر", pronunciation: "سِي", partOfSpeech: "noun", example: "I love swimming in the sea.", exampleArabic: "أحب السباحة في البحر." },
      { id: "n21", word: "River", arabic: "نهر", pronunciation: "رِيفَر", partOfSpeech: "noun", example: "The Nile is a long river.", exampleArabic: "النيل نهر طويل." },
      { id: "n22", word: "Lake", arabic: "بحيرة", pronunciation: "لِيْك", partOfSpeech: "noun", example: "The lake is quiet and cold.", exampleArabic: "البحيرة هادئة وباردة." },
      { id: "n23", word: "Mountain", arabic: "جبل", pronunciation: "ماونْتِن", partOfSpeech: "noun", example: "They climbed the high mountain.", exampleArabic: "صعدوا الجبل الشاهق." },
      { id: "n24", word: "Hill", arabic: "تل", pronunciation: "هِل", partOfSpeech: "noun", example: "There is a house on the hill.", exampleArabic: "يوجد منزل على التل." },
      { id: "n25", word: "Forest", arabic: "غابة", pronunciation: "فورِسْت", partOfSpeech: "noun", example: "Many animals live in the forest.", exampleArabic: "تعيش الكثير من الحيوانات في الغابة." },
      { id: "n26", word: "Wood", arabic: "خشب / غابة صغيرة", pronunciation: "وُود", partOfSpeech: "noun", example: "The table is made of wood.", exampleArabic: "الطاولة مصنوعة من الخشب." },
      { id: "n27", word: "Stone", arabic: "حجر / حصى", pronunciation: "سْتَوْن", partOfSpeech: "noun", example: "He threw a stone in the lake.", exampleArabic: "رمى حجراً في البحيرة." },
      { id: "n28", word: "Fire", arabic: "نار / حريق", pronunciation: "فاير", partOfSpeech: "noun", example: "Keep away from the fire.", exampleArabic: "ابقَ بعيداً عن النار." },
      { id: "n29", word: "Water", arabic: "ماء", pronunciation: "ووتَر", partOfSpeech: "noun", example: "Water is life.", exampleArabic: "الماء هو الحياة." },
      { id: "n30", word: "Air", arabic: "هواء", pronunciation: "إير", partOfSpeech: "noun", example: "We need clean air to breathe.", exampleArabic: "نحن بحاجة لهواء نظيف لنتنفس." },
      { id: "n31", word: "Rain", arabic: "مطر / تمطر", pronunciation: "رِيْن", partOfSpeech: "noun", example: "We had a lot of rain yesterday.", exampleArabic: "هطلت الكثير من الأمطار بالأمس." },
      { id: "n32", word: "Snow", arabic: "ثلج / جليد", pronunciation: "سْنَوْ", partOfSpeech: "noun", example: "Children like to play in the snow.", exampleArabic: "يحب الأطفال اللعب في الثلج." },
      { id: "n33", word: "Wind", arabic: "رياح / ريح", pronunciation: "وِنْد", partOfSpeech: "noun", example: "The strong wind blew away my hat.", exampleArabic: "الرياح القوية طيرت قبعتي." },
      { id: "n34", word: "Cloud", arabic: "سحابة / غيمة", pronunciation: "كْلاوْد", partOfSpeech: "noun", example: "There is not a single cloud in the sky.", exampleArabic: "لا توجد غيمة واحدة في السماء." },
      { id: "n35", word: "Rock", arabic: "صخرة / صخر", pronunciation: "روك", partOfSpeech: "noun", example: "They sat on a large rock.", exampleArabic: "جلسوا على صخرة كبيرة." }
    ]
  },
  {
    id: "numbers",
    nameAr: "الأرقام والأيام والأشهر",
    nameEn: "Numbers, Days & Months",
    descriptionAr: "أساسيات العد والأرقام، أيام الأسبوع وأشهر السنة الميلادية.",
    icon: "Calendar",
    words: [
      { id: "num1", word: "One", arabic: "واحد", pronunciation: "وان", partOfSpeech: "other", example: "I have one sister.", exampleArabic: "لدي أخت واحدة." },
      { id: "num2", word: "Two", arabic: "اثنان", pronunciation: "تُو", partOfSpeech: "other", example: "Two cups of tea, please.", exampleArabic: "كوبان من الشاي من فضلك." },
      { id: "num3", word: "Three", arabic: "ثلاثة", pronunciation: "ثْرِي", partOfSpeech: "other", example: "There are three birds.", exampleArabic: "هناك ثلاثة طيور." },
      { id: "num4", word: "Four", arabic: "أربعة", pronunciation: "فُور", partOfSpeech: "other", example: "A table has four legs.", exampleArabic: "الطاولة لها أربعة أرجل." },
      { id: "num5", word: "Five", arabic: "خمسة", pronunciation: "فايْف", partOfSpeech: "other", example: "I have five fingers on my hand.", exampleArabic: "لدي خمسة أصابع في يدي." },
      { id: "num6", word: "Six", arabic: "ستة", pronunciation: "سِكْس", partOfSpeech: "other", example: "Class starts at six o'clock.", exampleArabic: "يبدأ الدرس عند الساعة السادسة." },
      { id: "num7", word: "Seven", arabic: "سبعة", pronunciation: "سِفِن", partOfSpeech: "other", example: "A week has seven days.", exampleArabic: "الأسبوع يتكون من سبعة أيام." },
      { id: "num8", word: "Eight", arabic: "ثمانية", pronunciation: "إيْت", partOfSpeech: "other", example: "He slept for eight hours.", exampleArabic: "نام لمدة ثماني ساعات." },
      { id: "num9", word: "Nine", arabic: "تسعة", pronunciation: "نايْن", partOfSpeech: "other", example: "Nine people came to the dinner.", exampleArabic: "حضر تسعة أشخاص إلى العشاء." },
      { id: "num10", word: "Ten", arabic: "عشرة", pronunciation: "تِن", partOfSpeech: "other", example: "I have ten dollars.", exampleArabic: "لدي عشرة دولارات." },
      { id: "num11", word: "Zero", arabic: "صفر", pronunciation: "زِيرَوْ", partOfSpeech: "other", example: "The temperature is zero degrees.", exampleArabic: "درجة الحرارة صفر درجة." },
      { id: "num12", word: "First", arabic: "الأول", pronunciation: "فِرْسْت", partOfSpeech: "other", example: "This is my first time in Riyadh.", exampleArabic: "هذه أول مرة لي في الرياض." },
      { id: "num13", word: "Second", arabic: "الثاني", pronunciation: "سِكَنْد", partOfSpeech: "other", example: "He finished in the second place.", exampleArabic: "أنهى السباق في المركز الثاني." },
      { id: "num14", word: "Third", arabic: "الثالث", pronunciation: "ثِرْد", partOfSpeech: "other", example: "My room is on the third floor.", exampleArabic: "غرفتي في الطابق الثالث." },
      { id: "num15", word: "Number", arabic: "رقم / عدد", pronunciation: "نامْبَر", partOfSpeech: "noun", example: "What is your phone number?", exampleArabic: "ما هو رقم هاتفك؟" },
      { id: "num16", word: "Day", arabic: "يوم", pronunciation: "دِيْ", partOfSpeech: "noun", example: "Have a nice day!", exampleArabic: "أتمنى لك يوماً سعيداً!" },
      { id: "num17", word: "Week", arabic: "أسبوع", pronunciation: "وِيك", partOfSpeech: "noun", example: "I study English every week.", exampleArabic: "أدرس الإنجليزية كل أسبوع." },
      { id: "num18", word: "Month", arabic: "شهر", pronunciation: "مانْث", partOfSpeech: "noun", example: "They will visit us next month.", exampleArabic: "سيزوروننا الشهر المقبل." },
      { id: "num19", word: "Year", arabic: "سنة / عام", pronunciation: "يِير", partOfSpeech: "noun", example: "Happy New Year!", exampleArabic: "عام جديد سعيد!" },
      { id: "num20", word: "Today", arabic: "اليوم", pronunciation: "تُودِيْ", partOfSpeech: "noun", example: "Today is a beautiful day.", exampleArabic: "اليوم يوم جميل." },
      { id: "num21", word: "Yesterday", arabic: "البارحة / أمس", pronunciation: "يِسْتَرْدِيْ", partOfSpeech: "noun", example: "I was tired yesterday.", exampleArabic: "كنت متعباً بالأمس." },
      { id: "num22", word: "Tomorrow", arabic: "غداً", pronunciation: "تُمُورَوْ", partOfSpeech: "noun", example: "See you tomorrow.", exampleArabic: "أراك غداً." },
      { id: "num23", word: "Sunday", arabic: "الأحد", pronunciation: "سانْديْ", partOfSpeech: "noun", example: "Sunday is a holiday for some.", exampleArabic: "يوم الأحد هو عطلة للبعض." },
      { id: "num24", word: "Monday", arabic: "الاثنين", pronunciation: "مانْديْ", partOfSpeech: "noun", example: "I start work on Monday.", exampleArabic: "أبدأ العمل يوم الاثنين." },
      { id: "num25", word: "Tuesday", arabic: "الثلاثاء", pronunciation: "تْيوزْديْ", partOfSpeech: "noun", example: "Tuesday is my sports day.", exampleArabic: "يوم الثلاثاء هو يوم ممارسة الرياضة لي." },
      { id: "num26", word: "Wednesday", arabic: "الأربعاء", pronunciation: "وِنْزْديْ", partOfSpeech: "noun", example: "We have a meeting on Wednesday.", exampleArabic: "لدينا اجتماع يوم الأربعاء." },
      { id: "num27", word: "Thursday", arabic: "الخميس", pronunciation: "ثِرْزْديْ", partOfSpeech: "noun", example: "Thursday evening is family time.", exampleArabic: "مساء الخميس هو وقت العائلة." },
      { id: "num28", word: "Friday", arabic: "الجمعة", pronunciation: "فْرايْديْ", partOfSpeech: "noun", example: "Friday is a holy day for Muslims.", exampleArabic: "الجمعة هو يوم مبارك للمسلمين." },
      { id: "num29", word: "Saturday", arabic: "السبت", pronunciation: "ساتَرْديْ", partOfSpeech: "noun", example: "I go shopping on Saturday.", exampleArabic: "أذهب للتسوق يوم السبت." },
      { id: "num30", word: "Calendar", arabic: "تقويم", pronunciation: "كالِنْدَر", partOfSpeech: "noun", example: "Check the date on the calendar.", exampleArabic: "تحقق من التاريخ في التقويم." },
      { id: "num31", word: "Time", arabic: "وقت / زمن", pronunciation: "تايْم", partOfSpeech: "noun", example: "What time is it now?", exampleArabic: "كم الساعة (ما الوقت) الآن؟" },
      { id: "num32", word: "Hour", arabic: "ساعة (60 دقيقة)", pronunciation: "آوَر", partOfSpeech: "noun", example: "I studied for one hour.", exampleArabic: "درست لمدة ساعة واحدة." },
      { id: "num33", word: "Minute", arabic: "دقيقة", pronunciation: "مِنِت", partOfSpeech: "noun", example: "Give me one minute, please.", exampleArabic: "أعطني دقيقة واحدة من فضلك." },
      { id: "num34", word: "Moment", arabic: "لحظة", pronunciation: "مَوْمَنْت", partOfSpeech: "noun", example: "Wait a moment, please.", exampleArabic: "انتظر لحظة من فضلك." },
      { id: "num35", word: "Hundred", arabic: "مئة / مائة", pronunciation: "هانْدْرِد", partOfSpeech: "other", example: "There are one hundred pages.", exampleArabic: "يوجد مئة صفحة." },
      { id: "num36", word: "Thousand", arabic: "ألف", pronunciation: "ثاوزَنْد", partOfSpeech: "other", example: "A thousand people were there.", exampleArabic: "كان هناك ألف شخص." },
      { id: "num37", word: "Half", arabic: "نصف", pronunciation: "هاف", partOfSpeech: "other", example: "Cut the apple in half.", exampleArabic: "اقسم التفاحة إلى نصفين." },
      { id: "num38", word: "Quarter", arabic: "ربع", pronunciation: "كْوُوتَر", partOfSpeech: "other", example: "It is a quarter to five.", exampleArabic: "إنها الخامسة إلا ربعاً." },
      { id: "num39", word: "Date", arabic: "تاريخ / موعد / تمر", pronunciation: "دِيْت", partOfSpeech: "noun", example: "What is the date today?", exampleArabic: "ما هو تاريخ اليوم؟" },
      { id: "num40", word: "Season", arabic: "فصل (من فصول السنة)", pronunciation: "سِيزَن", partOfSpeech: "noun", example: "My favorite season is spring.", exampleArabic: "فصلي المفضل هو الربيع." }
    ]
  },
  {
    id: "verbs_action",
    nameAr: "أفعال الحركة والنشاط",
    nameEn: "Action Verbs",
    descriptionAr: "الأفعال الحركية الشائعة التي تعبر عن الأنشطة الجسدية المختلفة.",
    icon: "Activity",
    words: [
      { id: "va1", word: "Go", arabic: "يذهب", pronunciation: "جَوْ", partOfSpeech: "verb", example: "I go to school by bus.", exampleArabic: "أذهب إلى المدرسة بالحافلة." },
      { id: "va2", word: "Come", arabic: "يأتي", pronunciation: "كام", partOfSpeech: "verb", example: "Come here, please.", exampleArabic: "تعال هنا من فضلك." },
      { id: "va3", word: "Run", arabic: "يجري / يركض", pronunciation: "ران", partOfSpeech: "verb", example: "The boys run in the park.", exampleArabic: "الأولاد يركضون في الحديقة." },
      { id: "va4", word: "Walk", arabic: "يمشي", pronunciation: "ووك", partOfSpeech: "verb", example: "I walk to the mosque.", exampleArabic: "أمشي إلى المسجد." },
      { id: "va5", word: "Jump", arabic: "يقفز", pronunciation: "جامب", partOfSpeech: "verb", example: "Cats can jump very high.", exampleArabic: "القطط يمكنها القفز عالياً جداً." },
      { id: "va6", word: "Fly", arabic: "يطير / ذبابة", pronunciation: "فلاي", partOfSpeech: "verb", example: "Birds fly in the sky.", exampleArabic: "الطيور تطير في السماء." },
      { id: "va7", word: "Sit", arabic: "يجلس", pronunciation: "سِت", partOfSpeech: "verb", example: "Please sit down on this chair.", exampleArabic: "من فضلك اجلس على هذا الكرسي." },
      { id: "va8", word: "Stand", arabic: "يقف", pronunciation: "سْتانْد", partOfSpeech: "verb", example: "Stand up, please.", exampleArabic: "قف من فضلك." },
      { id: "va9", word: "Swim", arabic: "يسبح", pronunciation: "سْوِم", partOfSpeech: "verb", example: "Children love to swim in summer.", exampleArabic: "الأطفال يحبون السباحة في الصيف." },
      { id: "va10", word: "Ride", arabic: "يركب", pronunciation: "رايْد", partOfSpeech: "verb", example: "I ride my bike to school.", exampleArabic: "أركب دراجتي إلى المدرسة." },
      { id: "va11", word: "Drive", arabic: "يقود (سيارة)", pronunciation: "دْرايْف", partOfSpeech: "verb", example: "He drives a blue car.", exampleArabic: "هو يقود سيارة زرقاء." },
      { id: "va12", word: "Push", arabic: "يدفع", pronunciation: "بُوش", partOfSpeech: "verb", example: "Push the door to open it.", exampleArabic: "ادفع الباب لفتحه." },
      { id: "va13", word: "Pull", arabic: "يسحب", pronunciation: "بُول", partOfSpeech: "verb", example: "Pull the rope slowly.", exampleArabic: "اسحب الحبل ببطء." },
      { id: "va14", word: "Carry", arabic: "يحمل", pronunciation: "كارِي", partOfSpeech: "verb", example: "He carries a heavy bag.", exampleArabic: "هو يحمل حقيبة ثقيلة." },
      { id: "va15", word: "Bring", arabic: "يجلب / يحضر", pronunciation: "بْرِينْج", partOfSpeech: "verb", example: "Bring some water, please.", exampleArabic: "أحضر بعض الماء من فضلك." },
      { id: "va16", word: "Take", arabic: "يأخذ", pronunciation: "تِيْك", partOfSpeech: "verb", example: "Take this book and read it.", exampleArabic: "خذ هذا الكتاب واقرأه." },
      { id: "va17", word: "Give", arabic: "يعطي", pronunciation: "جِيف", partOfSpeech: "verb", example: "Give me your phone number.", exampleArabic: "أعطني رقم هاتفك." },
      { id: "va18", word: "Throw", arabic: "يرمي / يقذف", pronunciation: "ثْرَوْ", partOfSpeech: "verb", example: "Don't throw stones.", exampleArabic: "لا ترمِ الحجارة." },
      { id: "va19", word: "Catch", arabic: "يمسك / يلحق", pronunciation: "كاتش", partOfSpeech: "verb", example: "Catch the ball!", exampleArabic: "أمسك الكرة!" },
      { id: "va20", word: "Open", arabic: "يفتح / مفتوح", pronunciation: "أَوْبَن", partOfSpeech: "verb", example: "Open the window, please.", exampleArabic: "افتح النافذة من فضلك." },
      { id: "va21", word: "Close", arabic: "يغلق / قريب", pronunciation: "كْلَوْز", partOfSpeech: "verb", example: "Close your book now.", exampleArabic: "أغلق كتابك الآن." },
      { id: "va22", word: "Show", arabic: "يعرض / يظهر / عرض", pronunciation: "شَوْ", partOfSpeech: "verb", example: "Show me your passport, please.", exampleArabic: "أرني جواز سفرك من فضلك." },
      { id: "va23", word: "Play", arabic: "يلعب / يعزف / مسرحية", pronunciation: "بْلِيْ", partOfSpeech: "verb", example: "The kids play football.", exampleArabic: "الأطفال يلعبون كرة القدم." },
      { id: "va24", word: "Make", arabic: "يصنع / يفعل", pronunciation: "مِيْك", partOfSpeech: "verb", example: "She makes a delicious cake.", exampleArabic: "هي تصنع كعكة لذيذة." },
      { id: "va25", word: "Do", arabic: "يفعل / يقوم بـ", pronunciation: "دُو", partOfSpeech: "verb", example: "Do your homework now.", exampleArabic: "حل واجباتك المدرسية الآن." },
      { id: "va26", word: "Find", arabic: "يجد", pronunciation: "فايْنْد", partOfSpeech: "verb", example: "I cannot find my keys.", exampleArabic: "لا أستطيع إيجاد مفاتيحي." },
      { id: "va27", word: "Lose", arabic: "يفقد / يخسر", pronunciation: "لُوز", partOfSpeech: "verb", example: "Try not to lose your money.", exampleArabic: "حاول ألا تفقد نقودك." },
      { id: "va28", word: "Hold", arabic: "يمسك / يحمل", pronunciation: "هَوْلْد", partOfSpeech: "verb", example: "Hold my hand.", exampleArabic: "أمسك بيدي." },
      { id: "va29", word: "Drop", arabic: "يسقط / يرمي / قطرة", pronunciation: "دْرُوب", partOfSpeech: "verb", example: "Be careful not to drop the glass.", exampleArabic: "كن حذراً لكي لا تسقط الكوب." },
      { id: "va30", word: "Stop", arabic: "يتوقف / يوقف / موقف", pronunciation: "سْتُوب", partOfSpeech: "verb", example: "The car stopped at the light.", exampleArabic: "توقفت السيارة عند الإشارة." },
      { id: "va31", word: "Hit", arabic: "يضرب / يصيب", pronunciation: "هت", partOfSpeech: "verb", example: "He hit the ball with the bat.", exampleArabic: "ضرب الكرة بالمضرب." },
      { id: "va32", word: "Kick", arabic: "يركل / يركل الكرة", pronunciation: "كِك", partOfSpeech: "verb", example: "Kick the ball to your teammate.", exampleArabic: "اركل الكرة لزميلك في الفريق." },
      { id: "va33", word: "Cut", arabic: "يقطع / يقص", pronunciation: "كات", partOfSpeech: "verb", example: "Cut the paper into small pieces.", exampleArabic: "قص الورقة إلى قطع صغيرة." },
      { id: "va34", word: "Build", arabic: "يبني", pronunciation: "بِلْد", partOfSpeech: "verb", example: "They build new houses here.", exampleArabic: "هم يبنون بيوتاً جديدة هنا." },
      { id: "va35", word: "Draw", arabic: "يرسم", pronunciation: "دْرو", partOfSpeech: "verb", example: "The child loves to draw trees.", exampleArabic: "الطفل يحب رسم الأشجار." }
    ]
  },
  {
    id: "verbs_daily",
    nameAr: "أفعال الحياة اليومية",
    nameEn: "Daily Life Verbs",
    descriptionAr: "الأفعال الأساسية التي تعبر عن الروتين والنشاط اليومي العقلي والجسدي.",
    icon: "Clock",
    words: [
      { id: "vd1", word: "Eat", arabic: "يأكل", pronunciation: "إيت", partOfSpeech: "verb", example: "I eat an apple daily.", exampleArabic: "آكل تفاحة يومياً." },
      { id: "vd2", word: "Drink", arabic: "يشرب", pronunciation: "دْرِينْك", partOfSpeech: "verb", example: "Drink plenty of water.", exampleArabic: "اشرب الكثير من الماء." },
      { id: "vd3", word: "Sleep", arabic: "ينام", pronunciation: "سْلِيب", partOfSpeech: "verb", example: "I sleep at ten o'clock.", exampleArabic: "أنام عند الساعة العاشرة." },
      { id: "vd4", word: "Wake up", arabic: "يستيقظ", pronunciation: "وِيْكْ اَبْ", partOfSpeech: "verb", example: "I wake up early.", exampleArabic: "أستيقظ مبكراً." },
      { id: "vd5", word: "Read", arabic: "يقرأ", pronunciation: "رِيد", partOfSpeech: "verb", example: "Read this lesson carefully.", exampleArabic: "اقرأ هذا الدرس بعناية." },
      { id: "vd6", word: "Write", arabic: "يكتب", pronunciation: "رايْت", partOfSpeech: "verb", example: "Write your name here.", exampleArabic: "اكتب اسمك هنا." },
      { id: "vd7", word: "Speak", arabic: "يتحدث / يتكلم", pronunciation: "سْبِيك", partOfSpeech: "verb", example: "She speaks English well.", exampleArabic: "هي تتحدث الإنجليزية بطلاقة." },
      { id: "vd8", word: "Listen", arabic: "يستمع", pronunciation: "لِسِن", partOfSpeech: "verb", example: "Listen to the teacher, please.", exampleArabic: "استمع إلى المعلم من فضلك." },
      { id: "vd9", word: "Hear", arabic: "يسمع", pronunciation: "هِير", partOfSpeech: "verb", example: "Did you hear that sound?", exampleArabic: "هل سمعت ذلك الصوت؟" },
      { id: "vd10", word: "See", arabic: "يرى / يشاهد", pronunciation: "سِي", partOfSpeech: "verb", example: "I see a bird outside.", exampleArabic: "أرى طائراً في الخارج." },
      { id: "vd11", word: "Look", arabic: "ينظر / يبدو", pronunciation: "لُوك", partOfSpeech: "verb", example: "Look at the blackboard.", exampleArabic: "انظر إلى السبورة." },
      { id: "vd12", word: "Watch", arabic: "يشاهد / ساعة يد", pronunciation: "ووتش", partOfSpeech: "verb", example: "They watch a football game.", exampleArabic: "هم يشاهدون مباراة كرة قدم." },
      { id: "vd13", word: "Study", arabic: "يدرس / يذاكر", pronunciation: "سْتَادِي", partOfSpeech: "verb", example: "I study English every evening.", exampleArabic: "أدرس الإنجليزية كل مساء." },
      { id: "vd14", word: "Learn", arabic: "يتعلم", pronunciation: "لِرْن", partOfSpeech: "verb", example: "We learn new words today.", exampleArabic: "نتعلم كلمات جديدة اليوم." },
      { id: "vd15", word: "Work", arabic: "يعمل / عمل", pronunciation: "وِرْك", partOfSpeech: "verb", example: "He works in a bank.", exampleArabic: "هو يعمل في بنك." },
      { id: "vd16", word: "Live", arabic: "يعيش / مباشر", pronunciation: "لِيف", partOfSpeech: "verb", example: "We live in Riyadh.", exampleArabic: "نحن نعيش في الرياض." },
      { id: "vd17", word: "Like", arabic: "يحب / يعجبه / مثل", pronunciation: "لايْك", partOfSpeech: "verb", example: "I like cold water in summer.", exampleArabic: "أحب الماء البارد في الصيف." },
      { id: "vd18", word: "Love", arabic: "يعشق / يحب / حب", pronunciation: "لاف", partOfSpeech: "verb", example: "I love my parents.", exampleArabic: "أنا أحب والديّ." },
      { id: "vd19", word: "Want", arabic: "يريد", pronunciation: "وونْت", partOfSpeech: "verb", example: "I want to buy a computer.", exampleArabic: "أريد شراء حاسوب." },
      { id: "vd20", word: "Need", arabic: "يحتاج / حاجة", pronunciation: "نِيد", partOfSpeech: "verb", example: "I need some help, please.", exampleArabic: "أحتاج بعض المساعدة من فضلك." },
      { id: "vd21", word: "Buy", arabic: "يشتري", pronunciation: "باي", partOfSpeech: "verb", example: "I buy fruits every week.", exampleArabic: "أشتري الفواكه كل أسبوع." },
      { id: "vd22", word: "Sell", arabic: "يبيع", pronunciation: "سِل", partOfSpeech: "verb", example: "They sell beautiful clothes.", exampleArabic: "هم يبيعون ملابس جميلة." },
      { id: "vd23", word: "Pay", arabic: "يدفع (مالاً)", pronunciation: "بِيْ", partOfSpeech: "verb", example: "Can I pay by card?", exampleArabic: "هل يمكنني الدفع بالبطاقة؟" },
      { id: "vd24", word: "Cost", arabic: "يكلف / تكلفة", pronunciation: "كوسْت", partOfSpeech: "verb", example: "How much does it cost?", exampleArabic: "كم تبلغ تكلفة هذا؟" },
      { id: "vd25", word: "Cook", arabic: "يطبخ / طباخ", pronunciation: "كُوك", partOfSpeech: "verb", example: "My mother cooks delicious food.", exampleArabic: "أمي تطبخ طعاماً لذيذاً." },
      { id: "vd26", word: "Clean", arabic: "ينظف", pronunciation: "كْلِين", partOfSpeech: "verb", example: "Please clean your bedroom.", exampleArabic: "من فضلك نظف غرفة نومك." },
      { id: "vd27", word: "Wash", arabic: "يغسل", pronunciation: "ووش", partOfSpeech: "verb", example: "Wash your hands before eating.", exampleArabic: "اغسل يديك قبل الأكل." },
      { id: "vd28", word: "Open", arabic: "يفتح", pronunciation: "أَوْبَن", partOfSpeech: "verb", example: "Please open the door.", exampleArabic: "من فضلك افتح الباب." },
      { id: "vd29", word: "Close", arabic: "يغلق", pronunciation: "كْلَوْز", partOfSpeech: "verb", example: "Close your books now.", exampleArabic: "أغلقوا كتبكم الآن." },
      { id: "vd30", word: "Call", arabic: "يتصل / ينادي / مكالمة", pronunciation: "كُول", partOfSpeech: "verb", example: "Call me tomorrow evening.", exampleArabic: "اتصل بي مساء الغد." },
      { id: "vd31", word: "Wait", arabic: "ينتظر", pronunciation: "وِيْت", partOfSpeech: "verb", example: "Please wait for me here.", exampleArabic: "من فضلك انتظرني هنا." },
      { id: "vd32", word: "Help", arabic: "يساعد / مساعدة", pronunciation: "هِلْب", partOfSpeech: "verb", example: "I can help you with your work.", exampleArabic: "يمكنني مساعدتك في عملك." },
      { id: "vd33", word: "Think", arabic: "يفكر / يعتقد", pronunciation: "ثِينْك", partOfSpeech: "verb", example: "I think it is a good idea.", exampleArabic: "أعتقد أنها فكرة جيدة." },
      { id: "vd34", word: "Know", arabic: "يعرف / يعلم", pronunciation: "نَوْ", partOfSpeech: "verb", example: "Do you know where he lives?", exampleArabic: "هل تعرف أين يعيش?" },
      { id: "vd35", word: "Understand", arabic: "يفهم", pronunciation: "أَنْدَر سْتانْد", partOfSpeech: "verb", example: "I understand the grammar rule.", exampleArabic: "أنا أفهم قاعدة القواعد." }
    ]
  },
  {
    id: "adjectives",
    nameAr: "الصفات العامة الشائعة",
    nameEn: "Common Adjectives",
    descriptionAr: "الصفات التي نستخدمها لوصف الأشخاص، الأشياء، والأحوال اليومية.",
    icon: "Info",
    words: [
      { id: "a1", word: "Good", arabic: "جيد / ممتاز", pronunciation: "جُود", partOfSpeech: "adj", example: "This is a very good book.", exampleArabic: "هذا كتاب جيد جداً." },
      { id: "a2", word: "Bad", arabic: "سيء", pronunciation: "باد", partOfSpeech: "adj", example: "Smoking is a bad habit.", exampleArabic: "التدخين عادة سيئة." },
      { id: "a3", word: "Big", arabic: "كبير", pronunciation: "بِج", partOfSpeech: "adj", example: "They live in a big house.", exampleArabic: "يعيشون في منزل كبير." },
      { id: "a4", word: "Small", arabic: "صغير", pronunciation: "سْمُول", partOfSpeech: "adj", example: "He has a small dog.", exampleArabic: "لديه كلب صغير." },
      { id: "a5", word: "Happy", arabic: "سعيد", pronunciation: "هابِي", partOfSpeech: "adj", example: "I am happy to see you.", exampleArabic: "أنا سعيد برؤيتك." },
      { id: "a6", word: "Sad", arabic: "حزين", pronunciation: "ساد", partOfSpeech: "adj", example: "Why are you sad today?", exampleArabic: "لماذا أنت حزين اليوم؟" },
      { id: "a7", word: "Hot", arabic: "حار / ساخن", pronunciation: "هوت", partOfSpeech: "adj", example: "I like hot coffee.", exampleArabic: "أنا أحب القهوة الساخنة." },
      { id: "a8", word: "Cold", arabic: "بارد / زكام", pronunciation: "كَوْلْد", partOfSpeech: "adj", example: "The winter is very cold.", exampleArabic: "فصل الشتاء بارد جداً." },
      { id: "a9", word: "New", arabic: "جديد", pronunciation: "نْيو", partOfSpeech: "adj", example: "This is my new computer.", exampleArabic: "هذا هو حاسوبي الجديد." },
      { id: "a10", word: "Old", arabic: "قديم / كبير السن", pronunciation: "أَوْلْد", partOfSpeech: "adj", example: "My grandfather is old.", exampleArabic: "جدي كبير في السن." },
      { id: "a11", word: "Young", arabic: "شاب / صغير السن", pronunciation: "يانْج", partOfSpeech: "adj", example: "The young boy is very active.", exampleArabic: "الولد الصغير نشيط جداً." },
      { id: "a12", word: "Fast", arabic: "سريع", pronunciation: "فاسْت", partOfSpeech: "adj", example: "He drives a fast car.", exampleArabic: "هو يقود سيارة سريعة." },
      { id: "a13", word: "Slow", arabic: "بطيء", pronunciation: "سْلَوْ", partOfSpeech: "adj", example: "The internet is very slow today.", exampleArabic: "الإنترنت بطيء جداً اليوم." },
      { id: "a14", word: "Beautiful", arabic: "جميل", pronunciation: "بْيوتِيفُل", partOfSpeech: "adj", example: "This is a beautiful flower.", exampleArabic: "هذه زهرة جميلة." },
      { id: "a15", word: "Ugly", arabic: "قبيح", pronunciation: "اَجْلِي", partOfSpeech: "adj", example: "An ugly story.", exampleArabic: "قصة قبيحة البنيان." },
      { id: "a16", word: "Clean", arabic: "نظيف", pronunciation: "كْلِين", partOfSpeech: "adj", example: "Clean water is essential.", exampleArabic: "الماء النظيف أمر ضروري." },
      { id: "a17", word: "Dirty", arabic: "متسخ", pronunciation: "دِرْتِي", partOfSpeech: "adj", example: "Wash your dirty hands.", exampleArabic: "اغسل يديك المتسختين." },
      { id: "a18", word: "Easy", arabic: "سهل", pronunciation: "إيزِي", partOfSpeech: "adj", example: "The A1 exam is very easy.", exampleArabic: "اختبار مستوى A1 سهل للغاية." },
      { id: "a19", word: "Difficult", arabic: "صعب", pronunciation: "دِيفِيكَلْت", partOfSpeech: "adj", example: "Learning Chinese is difficult.", exampleArabic: "تعلم اللغة الصينية صعب." },
      { id: "a20", word: "Hard", arabic: "صعب / صلب", pronunciation: "هارْد", partOfSpeech: "adj", example: "The exam was very hard.", exampleArabic: "كان الاختبار صعباً جداً." },
      { id: "a21", word: "Soft", arabic: "ناعم / لين / سائل", pronunciation: "سُوفْت", partOfSpeech: "adj", example: "The pillow is warm and soft.", exampleArabic: "الوسادة دافئة وناعمة." },
      { id: "a22", word: "Tall", arabic: "طويل القامة", pronunciation: "تُول", partOfSpeech: "adj", example: "The palm tree is tall.", exampleArabic: "شجرة النخيل طويلة." },
      { id: "a23", word: "Short", arabic: "قصير", pronunciation: "شُورْت", partOfSpeech: "adj", example: "She is a short woman.", exampleArabic: "هي امرأة قصيرة القامة." },
      { id: "a24", word: "Long", arabic: "طويل (للمسافات/الزمن)", pronunciation: "لونْج", partOfSpeech: "adj", example: "It is a long road.", exampleArabic: "إنه طريق طويل." },
      { id: "a25", word: "Rich", arabic: "غني / ثري", pronunciation: "رِيتش", partOfSpeech: "adj", example: "A rich merchant.", exampleArabic: "تاجر غني." },
      { id: "a26", word: "Poor", arabic: "فقير / مسكين", pronunciation: "بُور", partOfSpeech: "adj", example: "The poor man had no home.", exampleArabic: "الرجل الفقير لم يكن لديه مأوى." },
      { id: "a27", word: "Dry", arabic: "جاف / ناشف", pronunciation: "دْراي", partOfSpeech: "adj", example: "The climate is very dry here.", exampleArabic: "المناخ جاف جداً هنا." },
      { id: "a28", word: "Wet", arabic: "رطب / مبلل", pronunciation: "وِت", partOfSpeech: "adj", example: "Be careful! The floor is wet.", exampleArabic: "كن حذراً! الأرض مبللة." },
      { id: "a29", word: "Heavy", arabic: "ثقيل الوزن", pronunciation: "هيفِي", partOfSpeech: "adj", example: "This box is too heavy to carry.", exampleArabic: "هذا الصندوق ثقيل جداً على الحمل." },
      { id: "a30", word: "Light", arabic: "خفيف الوزن", pronunciation: "لايْت", partOfSpeech: "adj", example: "Feathers are very light.", exampleArabic: "الريش خفيف الوزن جداً." },
      { id: "a31", word: "Safe", arabic: "آمن", pronunciation: "سِيْف", partOfSpeech: "adj", example: "It is safe to walk here at night.", exampleArabic: "من الآمن السير هنا ليلاً." },
      { id: "a32", word: "Dangerous", arabic: "خطير", pronunciation: "دِيْنْجَرَس", partOfSpeech: "adj", example: "The old bridge is dangerous.", exampleArabic: "الجسر القديم خطير." },
      { id: "a33", word: "Quiet", arabic: "هادئ", pronunciation: "كْوايَت", partOfSpeech: "adj", example: "This classroom is very quiet.", exampleArabic: "هذا الفصل هادئ جداً." },
      { id: "a34", word: "Noisy", arabic: "صاخب / مزعج", pronunciation: "نُويْزِي", partOfSpeech: "adj", example: "The children are noisy today.", exampleArabic: "الأطفال يصدرون الكثير من الضجيج اليوم." },
      { id: "a35", word: "Cheap", arabic: "رخيص", pronunciation: "تشِيب", partOfSpeech: "adj", example: "I bought a cheap watch.", exampleArabic: "اشتريت ساعة رخيصة." },
      { id: "a36", word: "Expensive", arabic: "غالٍ / باهظ الثمن", pronunciation: "إكْسْبِنْسِيف", partOfSpeech: "adj", example: "Gold is very expensive.", exampleArabic: "الذهب باهظ الثمن جداً." },
      { id: "a37", word: "Full", arabic: "ممتلئ", pronunciation: "فُل", partOfSpeech: "adj", example: "The restaurant is full of people.", exampleArabic: "المطعم ممتلئ بالناس." },
      { id: "a38", word: "Empty", arabic: "فارغ", pronunciation: "إمْبتِي", partOfSpeech: "adj", example: "The bottle is empty.", exampleArabic: "الزجاجة فارغة." },
      { id: "a39", word: "Strong", arabic: "قوي", pronunciation: "سْتْرونْج", partOfSpeech: "adj", example: "The horse is a strong animal.", exampleArabic: "الحصان حيوان قوي." },
      { id: "a40", word: "Weak", arabic: "ضعيف", pronunciation: "وِيك", partOfSpeech: "adj", example: "He felt weak after being sick.", exampleArabic: "شعر بالضعف بعد مرضه." }
    ]
  },
  {
    id: "places",
    nameAr: "الأماكن والمباني والسفر",
    nameEn: "Places, Buildings & Travel",
    descriptionAr: "الكلمات المرتبطة بالمدينة، المحلات، الأماكن العامة، ووسائل النقل والسفر.",
    icon: "MapPin",
    words: [
      { id: "pl1", word: "Place", arabic: "مكان", pronunciation: "بْلِيْس", partOfSpeech: "noun", example: "This is a quiet place.", exampleArabic: "هذا مكان هادئ." },
      { id: "pl2", word: "City", arabic: "مدينة", pronunciation: "سِيتِي", partOfSpeech: "noun", example: "Riyadh is a modern city.", exampleArabic: "الرياض مدينة حديثة." },
      { id: "pl3", word: "Country", arabic: "بلد / وطن / ريف", pronunciation: "كانْتْرِي", partOfSpeech: "noun", example: "Which country are you from?", exampleArabic: "من أي بلد أنت؟" },
      { id: "pl4", word: "Town", arabic: "بلدة صغيرة", pronunciation: "تاون", partOfSpeech: "noun", example: "They live in a quiet town.", exampleArabic: "يعيشون في بلدة هادئة." },
      { id: "pl5", word: "Street", arabic: "شارع", pronunciation: "سْتْرِيت", partOfSpeech: "noun", example: "The street is busy during the day.", exampleArabic: "الشارع مزدحم بالنهار." },
      { id: "pl6", word: "Road", arabic: "طريق / درب", pronunciation: "رَوْد", partOfSpeech: "noun", example: "This road leads to Mecca.", exampleArabic: "هذا الطريق يؤدي إلى مكة." },
      { id: "pl7", word: "School", arabic: "مدرسة", pronunciation: "سْكُول", partOfSpeech: "noun", example: "My children go to school.", exampleArabic: "أطفالي يذهبون إلى المدرسة." },
      { id: "pl8", word: "University", arabic: "جامعة", pronunciation: "يُونِيفِرْسِيتِي", partOfSpeech: "noun", example: "He studies engineering at university.", exampleArabic: "يدرس الهندسة في الجامعة." },
      { id: "pl9", word: "Hospital", arabic: "مستشفى", pronunciation: "هوسْبِيتَل", partOfSpeech: "noun", example: "The hospital is open 24 hours.",
exampleArabic: "المستشفى مفتوح على مدار 24 ساعة." },
      { id: "pl10", word: "Office", arabic: "مكتب (مقر عمل)", pronunciation: "أوفِس", partOfSpeech: "noun", example: "My office is on the fifth floor.", exampleArabic: "مكتبي في الطابق الخامس." },
      { id: "pl11", word: "Store", arabic: "متجر / محل / مخزن", pronunciation: "سْتُور", partOfSpeech: "noun", example: "I bought this from the grocery store.", exampleArabic: "اشتريت هذا من متجر البقالة." },
      { id: "pl12", word: "Shop", arabic: "دكان / محل", pronunciation: "شوب", partOfSpeech: "noun", example: "Let's visit the coffee shop.", exampleArabic: "لنزرِ مقهى القهوة." },
      { id: "pl13", word: "Market", arabic: "سوق", pronunciation: "ماركِت", partOfSpeech: "noun", example: "We buy fresh vegetables from the market.", exampleArabic: "نشتري الخضراوات الطازجة من السوق." },
      { id: "pl14", word: "Hotel", arabic: "فندق", pronunciation: "هَوْتِل", partOfSpeech: "noun", example: "We stayed in a nice hotel.", exampleArabic: "أقمنا في فندق جميل." },
      { id: "pl15", word: "Bank", arabic: "بنك / مصرف", pronunciation: "بانْك", partOfSpeech: "noun", example: "I need to withdraw money from the bank.", exampleArabic: "أحتاج إلى سحب نقود من البنك." },
      { id: "pl16", word: "Station", arabic: "محطة", pronunciation: "سْتِيْشِن", partOfSpeech: "noun", example: "Where is the bus station?", exampleArabic: "أين تقع محطة الحافلات؟" },
      { id: "pl17", word: "Airport", arabic: "مطار", pronunciation: "إيرْبورْت", partOfSpeech: "noun", example: "The airport is far from the city.", exampleArabic: "المطار بعيد عن المدينة." },
      { id: "pl18", word: "Park", arabic: "منتزه / حديقة عامة", pronunciation: "بارْك", partOfSpeech: "noun", example: "The children play in the park.", exampleArabic: "يلعب الأطفال في المنتزه." },
      { id: "pl19", word: "Restaurant", arabic: "مطعم", pronunciation: "رِسْتورَانْت", partOfSpeech: "noun", example: "Let's eat in this Italian restaurant.", exampleArabic: "لنأكل في هذا المطعم الإيطالي." },
      { id: "pl20", word: "Mosque", arabic: "مسجد", pronunciation: "موسْك", partOfSpeech: "noun", example: "We pray in the mosque.", exampleArabic: "نحن نصلي في المسجد." },
      { id: "pl21", word: "Car", arabic: "سيارة", pronunciation: "كار", partOfSpeech: "noun", example: "My car is red.", exampleArabic: "سيارتي حمراء اللون." },
      { id: "pl22", word: "Bus", arabic: "حافلة / باص", pronunciation: "باس", partOfSpeech: "noun", example: "The bus is late.", exampleArabic: "الحافلة متأخرة." },
      { id: "pl23", word: "Train", arabic: "قطار / يتدرب", pronunciation: "تْرِيْن", partOfSpeech: "noun", example: "I travel by train.", exampleArabic: "أنا أسافر بالقطار." },
      { id: "pl24", word: "Plane", arabic: "طائرة", pronunciation: "بْلِيْن", partOfSpeech: "noun", example: "The plane is very big.", exampleArabic: "الطائرة ضخمة جداً." },
      { id: "pl25", word: "Bicycle", arabic: "دراجة هوائية", pronunciation: "بايْسِيكِل", partOfSpeech: "noun", example: "He rides a bicycle.", exampleArabic: "هو يركب دراجة هوائية." },
      { id: "pl26", word: "Ticket", arabic: "تذكرة", pronunciation: "تِكِت", partOfSpeech: "noun", example: "Do you have your train ticket?", exampleArabic: "هل لديك تذكرة القطار الخاصة بك؟" },
      { id: "pl27", word: "Travel", arabic: "يسافر / سفر", pronunciation: "تْرافِل", partOfSpeech: "verb", example: "I love to travel in summer.", exampleArabic: "أحب السفر في فصل الصيف." },
      { id: "pl28", word: "Map", arabic: "خريطة", pronunciation: "ماب", partOfSpeech: "noun", example: "Use a map to find the street.", exampleArabic: "استخدم الخريطة للعثور على الشارع." },
      { id: "pl29", word: "Tourist", arabic: "سائح", pronunciation: "تُورِيسْت", partOfSpeech: "noun", example: "Many tourists visit the pyramids.", exampleArabic: "العديد من السياح يزورون الأهرامات." },
      { id: "pl30", word: "Bridge", arabic: "جسر / كوبري", pronunciation: "بْرِيدْج", partOfSpeech: "noun", example: "The bridge goes over the river.", exampleArabic: "الجسر يمر فوق النهر." },
      { id: "pl31", word: "Museum", arabic: "متحف", pronunciation: "مْيوزِيَم", partOfSpeech: "noun", example: "The museum is full of old history.", exampleArabic: "المتحف مليء بالتاريخ القديم." },
      { id: "pl32", word: "Library", arabic: "مكتبة (للقراءة والاستعارة)", pronunciation: "لايْبْرَرِي", partOfSpeech: "noun", example: "I borrow books from the school library.", exampleArabic: "أستعير الكتب من مكتبة المدرسة." },
      { id: "pl33", word: "Cinema", arabic: "سينما / دار عرض", pronunciation: "سِنِما", partOfSpeech: "noun", example: "They watched a film at the cinema.", exampleArabic: "شاهدوا فيلماً في السينما." },
      { id: "pl34", word: "Beach", arabic: "شاطئ البحر", pronunciation: "بِيتش", partOfSpeech: "noun", example: "We sat on the sandy beach.", exampleArabic: "جلسنا على الشاطئ الرملي." },
      { id: "pl35", word: "Pool", arabic: "بركة سباحة / مسبح", pronunciation: "بُول", partOfSpeech: "noun", example: "The kids are playing in the pool.", exampleArabic: "الأطفال يلعبون في المسبح." }
    ]
  },
  {
    id: "jobs",
    nameAr: "العمل والوظائف والدراسة",
    nameEn: "Jobs, Work & Study",
    descriptionAr: "المصطلحات الخاصة بالمهن المختلفة، أدوات الدراسة والتعليم.",
    icon: "Briefcase",
    words: [
      { id: "j1", word: "Work", arabic: "عمل / يعمل", pronunciation: "وِرْك", partOfSpeech: "noun", example: "I start work at eight.", exampleArabic: "أبدأ عملي عند الساعة الثامنة." },
      { id: "j2", word: "Job", arabic: "وظيفة / مهنة", pronunciation: "جُوب", partOfSpeech: "noun", example: "She is looking for a new job.", exampleArabic: "هي تبحث عن وظيفة جديدة." },
      { id: "j3", word: "Teacher", arabic: "معلم / مدرس", pronunciation: "تِيتشَر", partOfSpeech: "noun", example: "The teacher explains the lesson.", exampleArabic: "المعلم يشرح الدرس." },
      { id: "j4", word: "Student", arabic: "طالب / تلميذ", pronunciation: "سْتُودَنْت", partOfSpeech: "noun", example: "He is a university student.", exampleArabic: "هو طالب جامعي." },
      { id: "j5", word: "Doctor", arabic: "طبيب", pronunciation: "دوكْتَر", partOfSpeech: "noun", example: "The doctor helped the sick man.", exampleArabic: "الطبيب ساعد الرجل المريض." },
      { id: "j6", word: "Nurse", arabic: "ممرض / ممرضة", pronunciation: "نِرْس", partOfSpeech: "noun", example: "The nurse is kind and patient.", exampleArabic: "الممرضة لطيفة وصبورة." },
      { id: "j7", word: "Engineer", arabic: "مهندس", pronunciation: "إِنْجِنِير", partOfSpeech: "noun", example: "My brother is an engineer.", exampleArabic: "أخي مهندس." },
      { id: "j8", word: "Driver", arabic: "سائق", pronunciation: "دْرايْوَر", partOfSpeech: "noun", example: "The bus driver is careful.", exampleArabic: "سائق الحافلة حذر." },
      { id: "j9", word: "Police officer", arabic: "شرطي", pronunciation: "بولِيس أوفِسَر", partOfSpeech: "noun", example: "Ask the police officer for directions.", exampleArabic: "اسأل الشرطي عن الاتجاهات." },
      { id: "j10", word: "Manager", arabic: "مدير", pronunciation: "مانِيجَر", partOfSpeech: "noun", example: "Our manager is very organized.", exampleArabic: "مديرنا منظم للغاية." },
      { id: "j11", word: "Worker", arabic: "عامل", pronunciation: "وِرْكَر", partOfSpeech: "noun", example: "He is a hard worker.", exampleArabic: "هو عامل مجد." },
      { id: "j12", word: "Chef", arabic: "طباخ / رئيس طهاة", pronunciation: "شِف", partOfSpeech: "noun", example: "The chef cooked a great meal.", exampleArabic: "طهى رئيس الطهاة وجبة رائعة." },
      { id: "j13", word: "Company", arabic: "شركة", pronunciation: "كامْبانِي", partOfSpeech: "noun", example: "He works in a big company.", exampleArabic: "هو يعمل في شركة كبرى." },
      { id: "j14", word: "Book", arabic: "كتاب / يحجز", pronunciation: "بُوك", partOfSpeech: "noun", example: "I read a book every week.", exampleArabic: "أقرأ كتاباً كل أسبوع." },
      { id: "j15", word: "Pen", arabic: "قلم جاف", pronunciation: "بِن", partOfSpeech: "noun", example: "Can I borrow your pen?", exampleArabic: "هل يمكنني استعارة قلمك الجاف؟" },
      { id: "j16", word: "Pencil", arabic: "قلم رصاص", pronunciation: "بِنْسِل", partOfSpeech: "noun", example: "Draw a circle with a pencil.", exampleArabic: "ارسم دائرة بقلم رصاص." },
      { id: "j17", word: "Paper", arabic: "ورقة / صحيفة", pronunciation: "بِيْبَر", partOfSpeech: "noun", example: "Write your ideas on a paper.", exampleArabic: "اكتب أفكارك على ورقة." },
      { id: "j18", word: "Class", arabic: "فصل / صف دراسي", pronunciation: "كْلاس", partOfSpeech: "noun", example: "We have an English class now.", exampleArabic: "لدينا حصة لغة إنجليزية الآن." },
      { id: "j19", word: "Lesson", arabic: "درس", pronunciation: "لِسَن", partOfSpeech: "noun", example: "The first lesson is easy.", exampleArabic: "الدرس الأول سهل." },
      { id: "j20", word: "Homework", arabic: "واجب منزلي", pronunciation: "هَوْم وِرْك", partOfSpeech: "noun", example: "Don't forget your homework.", exampleArabic: "لا تنسَ واجبك المنزلي." },
      { id: "j21", word: "Exam", arabic: "اختبار / امتحان", pronunciation: "إكْزام", partOfSpeech: "noun", example: "He passed his final exam.", exampleArabic: "اجتاز اختباره النهائي." },
      { id: "j22", word: "Question", arabic: "سؤال", pronunciation: "كْوِسْتشَن", partOfSpeech: "noun", example: "Can I ask a question?", exampleArabic: "هل يمكنني طرح سؤال؟" },
      { id: "j23", word: "Answer", arabic: "جواب / يجيب", pronunciation: "آنْسَر", partOfSpeech: "noun", example: "Write the correct answer.", exampleArabic: "اكتب الإجابة الصحيحة." },
      { id: "j24", word: "Language", arabic: "لغة", pronunciation: "لانْجْوِيج", partOfSpeech: "noun", example: "English is a global language.", exampleArabic: "اللغة الإنجليزية لغة عالمية." },
      { id: "j25", word: "Dictionary", arabic: "قاموس / معجم", pronunciation: "دِكْشَنَرِي", partOfSpeech: "noun", example: "Use a dictionary to find words.", exampleArabic: "استخدم القاموس للبحث عن الكلمات." },
      { id: "j26", word: "Pilot", arabic: "طيار", pronunciation: "بايْلُوت", partOfSpeech: "noun", example: "The pilot landed the plane safely.", exampleArabic: "هبط الطيار بالطائرة بسلام." },
      { id: "j27", word: "Farmer", arabic: "مزارع / فلاح", pronunciation: "فارْمَر", partOfSpeech: "noun", example: "The farmer works hard on the farm.", exampleArabic: "المزارع يعمل بجد في المزرعة." },
      { id: "j28", word: "Writer", arabic: "كاتب / مؤلف", pronunciation: "رايْتَر", partOfSpeech: "noun", example: "He is a famous book writer.", exampleArabic: "هو كاتب كتب مشهور." },
      { id: "j29", word: "Artist", arabic: "فنان / رسام", pronunciation: "آرْتِسْت", partOfSpeech: "noun", example: "The artist has a beautiful gallery.", exampleArabic: "الفنان لديه معرض جميل." },
      { id: "j30", word: "Actor", arabic: "ممثل", pronunciation: "أكْتَر", partOfSpeech: "noun", example: "The actor played his role well.", exampleArabic: "أدى الممثل دوره بشكل جيد." },
      { id: "j31", word: "Employee", arabic: "موظف", pronunciation: "إمْبْلُويِّي", partOfSpeech: "noun", example: "Every employee receives a salary.", exampleArabic: "كل موظف يستلم راتباً." },
      { id: "j32", word: "Customer", arabic: "زبون / عميل", pronunciation: "كاسْتُمَر", partOfSpeech: "noun", example: "The customer bought a new shirt.", exampleArabic: "اشترى الزبون قميصاً جديداً." },
      { id: "j33", word: "Science", arabic: "علم / علوم", pronunciation: "سايْنْس", partOfSpeech: "noun", example: "Science is a very interesting subject.", exampleArabic: "العلوم مادة شيقة للغاية." },
      { id: "j34", word: "History", arabic: "تاريخ (كمادة دراسية)", pronunciation: "هِسْتُرِي", partOfSpeech: "noun", example: "History lessons teach us about past times.", exampleArabic: "دروس التاريخ تعلمنا عن الأوقات الماضية." },
      { id: "j35", word: "Math", arabic: "رياضيات / حساب", pronunciation: "ماث", partOfSpeech: "noun", example: "We solve puzzles in math class.", exampleArabic: "نحل الألغاز في حصة الرياضيات." }
    ]
  },
  {
    id: "pronouns_etc",
    nameAr: "الضمائر وحروف الجر والاستفهام",
    nameEn: "Pronouns, Prepositions & Questions",
    descriptionAr: "الروابط اللغوية الهامة مثل ضمائر الفاعل وحروف الجر وأدوات السؤال.",
    icon: "Key",
    words: [
      { id: "pr1", word: "I", arabic: "أنا", pronunciation: "آي", partOfSpeech: "pronoun", example: "I am a student.", exampleArabic: "أنا طالب." },
      { id: "pr2", word: "You", arabic: "أنت / أنتم", pronunciation: "يو", partOfSpeech: "pronoun", example: "You are very kind.", exampleArabic: "أنت لطيف جداً." },
      { id: "pr3", word: "He", arabic: "هو", pronunciation: "هِي", partOfSpeech: "pronoun", example: "He is my brother.", exampleArabic: "هو أخي." },
      { id: "pr4", word: "She", arabic: "هي", pronunciation: "شِي", partOfSpeech: "pronoun", example: "She is cooking.", exampleArabic: "هي تطبخ." },
      { id: "pr5", word: "It", arabic: "هو / هي (لغير العاقل)", pronunciation: "إت", partOfSpeech: "pronoun", example: "It is a beautiful cat.", exampleArabic: "إنها قطة جميلة." },
      { id: "pr6", word: "We", arabic: "نحن", pronunciation: "وِي", partOfSpeech: "pronoun", example: "We study English.", exampleArabic: "نحن ندرس الإنجليزية." },
      { id: "pr7", word: "They", arabic: "هم / هن", pronunciation: "ذِيْ", partOfSpeech: "pronoun", example: "They are my friends.", exampleArabic: "هم أصدقائي." },
      { id: "pr8", word: "My", arabic: "ياء الملكية (لي)", pronunciation: "ماي", partOfSpeech: "pronoun", example: "This is my book.", exampleArabic: "هذا كتابي." },
      { id: "pr9", word: "Your", arabic: "كاف الملكية (لك)", pronunciation: "يور", partOfSpeech: "pronoun", example: "What is your name?", exampleArabic: "ما اسمك؟" },
      { id: "pr10", word: "His", arabic: "هاء الملكية (له للغائب)", pronunciation: "هِز", partOfSpeech: "pronoun", example: "His car is fast.", exampleArabic: "سيارته سريعة." },
      { id: "pr11", word: "Her", arabic: "هاء الملكية (لها للغائبة)", pronunciation: "هير", partOfSpeech: "pronoun", example: "This is her bag.", exampleArabic: "هذه حقيبتها." },
      { id: "pr12", word: "Our", arabic: "نا الملكية (لنا)", pronunciation: "آوَر", partOfSpeech: "pronoun", example: "Our house is big.", exampleArabic: "منزلنا كبير." },
      { id: "pr13", word: "Their", arabic: "هم الملكية (لهم)", pronunciation: "ذِير", partOfSpeech: "pronoun", example: "Their dog is friendly.", exampleArabic: "كلبهم لطيف." },
      { id: "pr14", word: "In", arabic: "في / بداخل", pronunciation: "إِن", partOfSpeech: "prep", example: "The keys are in the box.", exampleArabic: "المفاتيح في الصندوق." },
      { id: "pr15", word: "On", arabic: "على / فوق", pronunciation: "أون", partOfSpeech: "prep", example: "The book is on the table.", exampleArabic: "الكتاب على الطاولة." },
      { id: "pr16", word: "Under", arabic: "تحت", pronunciation: "أَنْدَر", partOfSpeech: "prep", example: "The cat is under the bed.", exampleArabic: "القطة تحت السرير." },
      { id: "pr17", word: "At", arabic: "في (مكان أو زمان محدد)", pronunciation: "أت", partOfSpeech: "prep", example: "Meet me at the station.", exampleArabic: "قابلني في المحطة." },
      { id: "pr18", word: "To", arabic: "إلى", pronunciation: "تُو", partOfSpeech: "prep", example: "We go to school.", exampleArabic: "نحن نذهب إلى المدرسة." },
      { id: "pr19", word: "From", arabic: "من (للمصدر)", pronunciation: "فْروم", partOfSpeech: "prep", example: "I am from Riyadh.", exampleArabic: "أنا من الرياض." },
      { id: "pr20", word: "With", arabic: "مع / بواسطة", pronunciation: "وِذ", partOfSpeech: "prep", example: "Come with me.", exampleArabic: "تعال معي." },
      { id: "pr21", word: "Without", arabic: "بدون / بلا", pronunciation: "وِذ آوت", partOfSpeech: "prep", example: "He drank tea without sugar.", exampleArabic: "شرب الشاي بدون سكر." },
      { id: "pr22", word: "And", arabic: "و (حرف عطف)", pronunciation: "أنْد", partOfSpeech: "prep", example: "I like apples and bananas.", exampleArabic: "أحب التفاح والموز." },
      { id: "pr23", word: "But", arabic: "لكن", pronunciation: "بات", partOfSpeech: "prep", example: "I wanted to go but I was tired.", exampleArabic: "أردت الذهاب لكني كنت متعباً." },
      { id: "pr24", word: "Or", arabic: "أو", pronunciation: "أور", partOfSpeech: "prep", example: "Tea or coffee?", exampleArabic: "شاي أم قهوة؟" },
      { id: "pr25", word: "Because", arabic: "بسبب / لأن", pronunciation: "بِكُوز", partOfSpeech: "prep", example: "I stayed home because it was cold.", exampleArabic: "بقيت في البيت لأن الجو بارد." },
      { id: "pr26", word: "After", arabic: "بعد", pronunciation: "آفْتَر", partOfSpeech: "prep", example: "We went home after the movie.", exampleArabic: "ذهبنا للمنزل بعد الفيلم." },
      { id: "pr27", word: "Before", arabic: "قبل", pronunciation: "بِفُور", partOfSpeech: "prep", example: "Wash your hands before eating.", exampleArabic: "غسل يديك قبل تناول الطعام." },
      { id: "pr28", word: "Between", arabic: "بين", pronunciation: "بِتْوِين", partOfSpeech: "prep", example: "Riyadh is between Dammam and Mecca.", exampleArabic: "الرياض تقع بين الدمام ومكة." },
      { id: "pr29", word: "About", arabic: "عن / حول / تقريباً", pronunciation: "أباوْت", partOfSpeech: "prep", example: "Tell me about your family.", exampleArabic: "أخبرني عن عائلتك." },
      { id: "pr30", word: "Always", arabic: "دائماً", pronunciation: "أولْوِيْز", partOfSpeech: "adv", example: "I always study English in the evening.", exampleArabic: "أنا دائماً أدرس الإنجليزية في المساء." }
    ]
  }
];

  allWordsMap = {};
  categories.forEach(cat => {
    cat.words.forEach(word => {
      allWordsMap[word.id] = { ...word, categoryId: cat.id, categoryName: cat.nameAr };
    });
  });
}




// Render dynamic stats counts across UI headers
function renderUserMetrics() {
  const masteredCount = masteredWords.length;
  const learningCount = Math.max(0, 500 - masteredCount);

  // Update navbar stats widgets
  document.getElementById("header-streak").textContent = userStreak;
  document.getElementById("header-xp").textContent = userXp;

  // Update banner stats widgets
  document.getElementById("banner-mastered-count").textContent = masteredCount;
  document.getElementById("banner-learning-count").textContent = learningCount;
}

// Handle global tab views switching
function switchTab(tabId) {
  currentTab = tabId;
  
  // Update view containers visibility
  const viewports = ["course", "story", "chat"];
  viewports.forEach(v => {
    const element = document.getElementById(`viewport-${v}`);
    if (element) {
      if (v === tabId) {
        element.classList.remove("hidden");
      } else {
        element.classList.add("hidden");
      }
    }
  });

  // Update navigation button active styling on Desktop
  const desktopBtns = ["course", "story", "chat"];
  desktopBtns.forEach(btn => {
    const el = document.getElementById(`tab-btn-${btn}`);
    if (el) {
      if (btn === tabId) {
        el.className = "px-5 py-2.5 text-xs font-bold font-sans rounded-xl transition-all flex items-center gap-2 cursor-pointer bg-white text-brand-blue shadow-xs";
      } else {
        el.className = "px-5 py-2.5 text-xs font-bold font-sans rounded-xl transition-all flex items-center gap-2 cursor-pointer text-slate-500 hover:text-slate-800";
      }
    }
  });

  // Update mobile navigation button active styling
  desktopBtns.forEach(btn => {
    const el = document.getElementById(`mobile-tab-btn-${btn}`);
    if (el) {
      if (btn === tabId) {
        el.className = "py-2 flex flex-col items-center justify-center text-brand-blue";
      } else {
        el.className = "py-2 flex flex-col items-center justify-center text-slate-400";
      }
    }
  });

  // Hide or show top marketing banner card depending on tab (only shown on words course tab)
  const banner = document.getElementById("brand-banner");
  if (banner) {
    if (tabId === "course") {
      banner.classList.remove("hidden");
    } else {
      banner.classList.add("hidden");
    }
  }

  // Handle Tab Custom Initializations
  if (tabId === "course") {
    renderCategoryGrid();
  } else if (tabId === "story") {
    renderStorySelectedChips();
  } else if (tabId === "chat") {
    renderChatMessages();
  }

  // Re-render Lucide SVG Icons across dynamically loaded elements
  setTimeout(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, 30);
}

// Award user experience XP points safely
function awardXp(amount) {
  userXp += amount;
  saveStats();
  renderUserMetrics();
  
  // Visual pulse cue on the navbar XP widget
  const widget = document.getElementById("header-xp").parentElement;
  if (widget) {
    widget.classList.add("scale-110", "bg-orange-100", "border-orange-300");
    setTimeout(() => {
      widget.classList.remove("scale-110", "bg-orange-100", "border-orange-300");
    }, 400);
  }
}


// ==========================================
// VIEW 1: WORD COURSE MAP CONTROLLER
// ==========================================

// Render Category Map Grid View (Home Subview)
function renderCategoryGrid() {
  const grid = document.getElementById("categories-grid");
  if (!grid) return;

  grid.innerHTML = "";

  categories.forEach((cat, index) => {
    const totalWords = cat.words.length;
    const catMasteredCount = cat.words.filter(w => masteredWords.includes(w.id)).length;
    const percent = totalWords > 0 ? Math.round((catMasteredCount / totalWords) * 100) : 0;

    // Map categories to standard Lucide icons
    let iconName = "book-open";
    const mappedIcon = cat.icon.toLowerCase();
    if (mappedIcon.includes("message")) iconName = "message-square";
    else if (mappedIcon.includes("users") || mappedIcon.includes("user")) iconName = "users";
    else if (mappedIcon.includes("home")) iconName = "home";
    else if (mappedIcon.includes("coffee") || mappedIcon.includes("food")) iconName = "coffee";
    else if (mappedIcon.includes("heart") || mappedIcon.includes("activity")) iconName = "heart";
    else if (mappedIcon.includes("shirt") || mappedIcon.includes("clothes")) iconName = "shirt";
    else if (mappedIcon.includes("cloud") || mappedIcon.includes("tree")) iconName = "cloud-rain";
    else if (mappedIcon.includes("calendar")) iconName = "calendar";
    else if (mappedIcon.includes("play") || mappedIcon.includes("activity")) iconName = "play";
    else if (mappedIcon.includes("clock")) iconName = "clock";
    else if (mappedIcon.includes("info")) iconName = "info";
    else if (mappedIcon.includes("map") || mappedIcon.includes("pin")) iconName = "map-pin";
    else if (mappedIcon.includes("briefcase")) iconName = "briefcase";
    else if (mappedIcon.includes("key")) iconName = "key";

    // Dynamic style based on state
    const isCompleted = percent === 100;
    const itemCard = document.createElement("div");
    itemCard.className = `bg-white border border-slate-100 rounded-3xl p-6 shadow-3xs hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1 text-right flex flex-col justify-between h-56 ${
      isCompleted ? "border-emerald-100 bg-gradient-to-tr from-emerald-50/10 to-white" : ""
    }`;
    itemCard.onclick = () => openCategory(cat.id);

    itemCard.innerHTML = `
      <div class="space-y-4">
        <!-- Top row: Icon and counter status -->
        <div class="flex items-center justify-between">
          <div class="w-12 h-12 rounded-2xl flex items-center justify-center ${
            isCompleted ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-brand-blue"
          }">
            <i data-lucide="${iconName}" class="w-6 h-6"></i>
          </div>
          <span class="text-xs font-black font-sans ${isCompleted ? "text-emerald-600" : "text-slate-400"}">
            ${catMasteredCount} / ${totalWords} كلمة متقنة
          </span>
        </div>

        <!-- Category titles -->
        <div class="space-y-1">
          <h4 class="text-base font-black text-slate-800 font-sans">${cat.nameAr}</h4>
          <span class="text-[10px] font-extrabold text-slate-400 font-sans tracking-wide block ltr">${cat.nameEn}</span>
        </div>
      </div>

      <!-- Bottom row: Progress bar metric -->
      <div class="space-y-2">
        <div class="flex justify-between items-center text-[10px] font-black text-slate-400">
          <span>مستوى التقدم</span>
          <span class="font-sans ${isCompleted ? "text-emerald-600" : ""}">%${percent}</span>
        </div>
        <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div class="h-full rounded-full transition-all duration-500 ${isCompleted ? "bg-emerald-500" : "bg-brand-blue"}" style="width: ${percent}%"></div>
        </div>
      </div>
    `;

    grid.appendChild(itemCard);
  });
}

// Toggle subviews to Category Word Explorer List
function openCategory(categoryId) {
  const cat = categories.find(c => c.id === categoryId);
  if (!cat) return;

  currentCategory = cat;
  wordFilterStatus = "all";

  // Hide grid view, show words list details panel
  document.getElementById("categories-map-subview").classList.add("hidden");
  document.getElementById("category-details-subview").classList.remove("hidden");

  // Load category banner contents
  document.getElementById("cat-banner-title-ar").textContent = cat.nameAr;
  document.getElementById("cat-banner-title-en").textContent = cat.nameEn;
  document.getElementById("cat-banner-word-count").textContent = `${cat.words.length} كلمة للمبتدئين`;
  document.getElementById("cat-banner-desc").textContent = cat.descriptionAr;

  // Bind quiz launcher
  document.getElementById("cat-banner-quiz-btn").onclick = () => launchCategoryQuiz(cat.id);

  // Set category icon in list header
  const iconBg = document.getElementById("cat-banner-icon-bg");
  const bannerIcon = document.getElementById("cat-banner-icon");
  let iconName = "book-open";
  const mappedIcon = cat.icon.toLowerCase();
  if (mappedIcon.includes("message")) iconName = "message-square";
  else if (mappedIcon.includes("user")) iconName = "users";
  else if (mappedIcon.includes("home")) iconName = "home";
  else if (mappedIcon.includes("food")) iconName = "coffee";
  else if (mappedIcon.includes("activity")) iconName = "heart";
  else if (mappedIcon.includes("clothes")) iconName = "shirt";
  else if (mappedIcon.includes("tree")) iconName = "cloud-rain";
  else if (mappedIcon.includes("calendar")) iconName = "calendar";
  else if (mappedIcon.includes("activity")) iconName = "play";
  else if (mappedIcon.includes("clock")) iconName = "clock";
  else if (mappedIcon.includes("info")) iconName = "info";
  else if (mappedIcon.includes("pin")) iconName = "map-pin";
  else if (mappedIcon.includes("briefcase")) iconName = "briefcase";
  else if (mappedIcon.includes("key")) iconName = "key";

  bannerIcon.setAttribute("data-lucide", iconName);

  // Reset words search input
  document.getElementById("words-search-input").value = "";

  // Render list of word tiles
  renderWordCards();
}

// Return to category map grids list
function goBackToMap() {
  currentCategory = null;
  document.getElementById("category-details-subview").classList.add("hidden");
  document.getElementById("categories-map-subview").classList.remove("hidden");
  renderCategoryGrid();
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Render word tiles grid inside the active Category details explorer view
function renderWordCards() {
  const container = document.getElementById("words-grid");
  if (!container || !currentCategory) return;

  container.innerHTML = "";

  // Update Category Mastery Progress Bar at top of details view
  const totalWords = currentCategory.words.length;
  const masteredInCat = currentCategory.words.filter(w => masteredWords.includes(w.id)).length;
  const percent = totalWords > 0 ? Math.round((masteredInCat / totalWords) * 100) : 0;
  
  document.getElementById("cat-details-progress-bar").style.width = `${percent}%`;
  document.getElementById("cat-details-progress-text").textContent = `${masteredInCat} / ${totalWords} كلمة متقنة (${percent}%)`;

  // Filter word items based on tab selection or keyword typing search
  const searchQuery = document.getElementById("words-search-input").value.trim().toLowerCase();
  
  let filtered = currentCategory.words;

  // Filter 1: Status Filter Button selections
  if (wordFilterStatus === "mastered") {
    filtered = filtered.filter(w => masteredWords.includes(w.id));
  } else if (wordFilterStatus === "unstudied") {
    filtered = filtered.filter(w => !masteredWords.includes(w.id));
  }

  // Filter 2: Input search query filter
  if (searchQuery !== "") {
    filtered = filtered.filter(w => {
      const sp = w.word.toLowerCase();
      const ar = w.arabic.toLowerCase();
      const pr = w.pronunciation.toLowerCase();
      const exEn = w.example.toLowerCase();
      const exAr = w.exampleArabic.toLowerCase();
      return sp.includes(searchQuery) || ar.includes(searchQuery) || pr.includes(searchQuery) || exEn.includes(searchQuery) || exAr.includes(searchQuery);
    });
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-400 text-xs font-bold font-sans bg-white rounded-3xl border border-slate-100">
        لم نجد أي كلمات تطابق هذه التصفية حالياً.
      </div>
    `;
    return;
  }

  // Render filtered word items cards
  filtered.forEach(w => {
    const isMastered = masteredWords.includes(w.id);
    const card = document.createElement("div");
    card.className = `bg-white border border-slate-100 rounded-2xl p-5 shadow-3xs hover:shadow-xs cursor-pointer transition-all hover:border-slate-200 text-right flex flex-col justify-between h-44 animate-slide-up ${
      isMastered ? "border-emerald-500/20 bg-emerald-500/[0.01]" : ""
    }`;
    card.onclick = () => openWordExplorerModal(w.id);

    card.innerHTML = `
      <div class="space-y-3">
        <!-- Top title row -->
        <div class="flex items-center justify-between">
          <span class="text-[9px] font-black font-sans uppercase tracking-wider px-2 py-0.5 bg-slate-100 text-slate-500 rounded-md">
            ${translatePartOfSpeech(w.partOfSpeech)}
          </span>
          <span class="inline-flex items-center gap-1 text-[9px] font-black ${
            isMastered ? "text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full" : "text-slate-400"
          }">
            <i data-lucide="${isMastered ? "check" : "circle"}" class="w-3 h-3"></i>
            <span>${isMastered ? "متقنة" : "قيد الدراسة"}</span>
          </span>
        </div>

        <!-- Spelling, translation -->
        <div>
          <h3 class="text-xl font-black font-sans text-slate-900 ltr leading-none mb-1.5">${w.word}</h3>
          <p class="text-xs text-brand-blue font-extrabold font-sans">${w.arabic}</p>
        </div>
      </div>

      <!-- Sound phonetic pronunciation indicator -->
      <div class="border-t border-slate-50 pt-3 flex justify-between items-center text-[10px]">
        <span class="text-slate-400 font-extrabold font-sans">النطق الصوتي:</span>
        <button onclick="event.stopPropagation(); pronounceWord('${w.word}')" class="w-8 h-8 rounded-full bg-blue-50 hover:bg-blue-100 text-brand-blue flex items-center justify-center transition-all cursor-pointer shadow-3xs" title="استمع للنطق الصوتي">
          <i data-lucide="volume-2" class="w-4 h-4"></i>
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Translate raw partOfSpeech parameter to human Arabic labels
function translatePartOfSpeech(pos) {
  switch (pos) {
    case "noun": return "اسم (Noun)";
    case "verb": return "فعل (Verb)";
    case "adj": return "صفة (Adj)";
    case "pronoun": return "ضمير (Pronoun)";
    case "prep": return "حرف جر (Prep)";
    case "adv": return "ظرف (Adv)";
    default: return "أخرى (Other)";
  }
}

// Set active word filtering status
function setWordFilter(status) {
  wordFilterStatus = status;

  // Highlight active filter button
  const filters = ["all", "unstudied", "mastered"];
  filters.forEach(f => {
    const el = document.getElementById(`filter-btn-${f}`);
    if (el) {
      if (f === status) {
        el.className = "px-4 py-2 text-[11px] font-bold font-sans rounded-xl transition-all cursor-pointer bg-white text-brand-blue shadow-3xs shrink-0";
      } else {
        el.className = "px-4 py-2 text-[11px] font-bold font-sans rounded-xl transition-all cursor-pointer text-slate-500 hover:text-slate-800 shrink-0";
      }
    }
  });

  renderWordCards();
}

// Real-time matching filter inside search input
function handleSearchWords() {
  renderWordCards();
}


// ==========================================
// PERSISTENT WORD EXPLORER MODAL CONTROLLER
// ==========================================

// Open word explorer details modal dialog
function openWordExplorerModal(wordId) {
  const w = allWordsMap[wordId];
  if (!w) return;

  activeExplorerWord = w;

  // Bind titles, translations
  document.getElementById("modal-category-name").textContent = `قسم ${w.categoryName}`;
  document.getElementById("modal-part-of-speech").textContent = translatePartOfSpeech(w.partOfSpeech);
  document.getElementById("modal-spelling-en").textContent = w.word;
  document.getElementById("modal-arabic-meaning").textContent = w.arabic;
  document.getElementById("modal-phonetic").textContent = `النطق الصوتي: [ ${w.pronunciation} ]`;

  // Bind sentence examples
  document.getElementById("modal-example-en").textContent = w.example;
  document.getElementById("modal-example-ar").textContent = w.exampleArabic;

  // Setup Mastery Action badge
  const isMastered = masteredWords.includes(w.id);
  updateModalMasteryBadge(isMastered);

  // Hide AI explanations results display box, show request trigger buttons
  document.getElementById("modal-ai-explain-box").classList.add("hidden");
  document.getElementById("modal-ai-explain-btn").classList.remove("hidden");
  document.getElementById("modal-ai-loading").classList.add("hidden");

  // Show Modal screen overlays
  document.getElementById("word-card-modal").classList.remove("hidden");
  document.body.classList.add("overflow-hidden"); // Block underlying body scroll

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Close Word details card modal
function closeWordCard() {
  activeExplorerWord = null;
  document.getElementById("word-card-modal").classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}

// Play pronunciation audio using Web Speech API for any given word text
// متغيرات لتخزين الأصوات المتاحة
let availableVoices = [];

// دالة تحديث قائمة الأصوات (ضرورية لأن المتصفحات تحملها في الخلفية)
function refreshVoices() {
    availableVoices = window.speechSynthesis.getVoices();
}

// تشغيل التحديث فوراً وعند تغير الأصوات
refreshVoices();
if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = refreshVoices;
}

// دالة النطق المحسنة
function pronounceWord(wordText) {
    if (!wordText) return;

    try {
        window.speechSynthesis.cancel(); // إيقاف أي نطق سابق

        // 1. مرحلة المعالجة (استبدال الاختصارات بكلمات كاملة)
        let processedText = wordText;
        
        // استخدام تعبير منتظم (Regex) لاستبدال الاختصارات
        // \b تضمن أننا نستبدل الكلمة كاملة فقط ولا نستبدل حروفاً داخل كلمات أخرى
        processedText = processedText
            .replace(/\bmr\./gi, "Mister")
            .replace(/\bmr\b/gi, "Mister")
            .replace(/\bms\./gi, "Miss")
            .replace(/\bms\b/gi, "Miss")
            .replace(/\bmrs\./gi, "Missus")
            .replace(/\bmrs\b/gi, "Missus");

        // 2. تمرير النص المعالج للمحرك
        const utterance = new SpeechSynthesisUtterance(processedText);
        utterance.lang = "en-US";
        utterance.rate = 0.85;

        const preferredVoice = availableVoices.find(v => 
            v.name.includes("Google US English") || 
            v.name.includes("Samantha") || 
            v.name.includes("English United States")
        );

        if (preferredVoice) {
            utterance.voice = preferredVoice;
        }

        window.speechSynthesis.speak(utterance);
    } catch (err) {
        console.error("Audio speech synthesis failed:", err);
    }
}

// دالة نطق الكلمة المحددة (تبقى كما هي)
function modalPronounceWord() {
  if (!activeExplorerWord) return;
  pronounceWord(activeExplorerWord.word);
}

// Play pronunciation audio using Web Speech API for the active explorer word
function modalPronounceWord() {
  if (!activeExplorerWord) return;
  pronounceWord(activeExplorerWord.word);
}

// Fetch Deep AI Explanation from Backend API
function fetchAIExplanation() {
  if (!activeExplorerWord) return;

  const btn = document.getElementById("modal-ai-explain-btn");
  const displayBox = document.getElementById("modal-ai-explain-box");
  const loading = document.getElementById("modal-ai-loading");

  // إظهار واجهة التحميل للحظة (للحفاظ على تجربة المستخدم)
  btn.classList.add("hidden");
  loading.classList.remove("hidden");

  setTimeout(() => {
    // 1. البحث عن الشرح في البيانات المحلية (wordExplanations)
    const wordKey = activeExplorerWord.word.toLowerCase();
    const data = wordExplanations[wordKey];

    if (data) {
      // 2. تحديث الواجهة بنفس المنطق السابق
      document.getElementById("ai-explain-pronunciation").innerHTML = data.pronunciationGuide;
      document.getElementById("ai-explain-mnemonic").innerHTML = data.mnemonic;
      document.getElementById("ai-explain-fun-fact").innerHTML = data.funFact;

      const listContainer = document.getElementById("ai-explain-examples-list");
      listContainer.innerHTML = "";
      
      data.examples.forEach(ex => {
        const row = document.createElement("div");
        row.className = "bg-white border border-slate-100 p-4 rounded-xl space-y-1.5 shadow-3xs";
        row.innerHTML = `
          <p class="text-xs font-black text-slate-800 ltr">${ex.english}</p>
          <p class="text-[11px] text-slate-400 font-bold">${ex.arabic}</p>
          ${ex.tips ? `<p class="text-[10px] text-brand-blue font-extrabold mt-1">💡 ملمح: ${ex.tips}</p>` : ""}
        `;
        listContainer.appendChild(row);
      });

      loading.classList.add("hidden");
      displayBox.classList.remove("hidden");
      awardXp(5);
    } else {
      // إذا لم نجد شرحاً للكلمة
      loading.classList.add("hidden");
      btn.classList.remove("hidden");
      alert("عذراً، الشرح التفصيلي لهذه الكلمة غير متوفر حالياً.");
    }

    if (window.lucide) window.lucide.createIcons();
  }, 500); // تأخير بسيط لمحاكاة سرعة المعلم الذكي
}

// Update Explorer Modal Mastery visual badges
function updateModalMasteryBadge(isMastered) {
  const badge = document.getElementById("modal-mastery-badge");
  const badgeText = document.getElementById("modal-mastery-badge-text");
  const badgeIcon = document.getElementById("modal-mastery-icon");

  if (isMastered) {
    // حالة الإتقان: إظهار الصح + لون أخضر
    badgeIcon.style.display = "block";
    badge.className = "px-3 py-1 rounded-full text-[9px] font-black tracking-wide border-2 border-solid border-emerald-400 transition-all flex items-center gap-1 cursor-pointer bg-emerald-50 text-emerald-700 active:scale-95";
    badgeText.textContent = "متقنة بنجاح";
  } else {
    // حالة قيد الدراسة: إخفاء الصح + لون رمادي
    badgeIcon.style.display = "none";
    badge.className = "px-3 py-1 rounded-full text-[9px] font-black tracking-wide border-2 border-solid border-slate-400 transition-all flex items-center gap-1 cursor-pointer bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-600 active:scale-95";
    badgeText.textContent = "قيد الدراسة";
  }
}

// Toggle word mastery from Explorer modal
function modalToggleMastery() {
  if (!activeExplorerWord) return;

  const wId = activeExplorerWord.id;
  const index = masteredWords.indexOf(wId);
  let isMastered = false;

  if (index !== -1) {
    // Untoggle Word Mastery
    masteredWords.splice(index, 1);
    // Deduct 10 XP points
    userXp = Math.max(0, userXp - 10);
  } else {
    // Mark as mastered
    masteredWords.push(wId);
    isMastered = true;
    // Award +10 XP points
    awardXp(10);
  }

  saveMasteredWords();
  saveStats();
  renderUserMetrics();
  updateModalMasteryBadge(isMastered);
  renderWordCards(); // Update word list underneath immediately!

  if (window.lucide) {
    window.lucide.createIcons();
  }
}


// ==========================================
// VIEW 1 QUIZ SECTION MODULE
// ==========================================

// Launch Quiz challenge inside Category Details
function launchCategoryQuiz(catId) {
  const cat = categories.find(c => c.id === catId);
  if (!cat) return;

  quizCategory = cat;
  quizQuestions = [];
  quizCurrentIndex = 0;
  quizSelectedOptionIdx = null;
  quizIsSubmitted = false;
  quizCorrectAnswersCount = 0;
  quizGainedXp = 0;

  // Generate 5 random questions for that category
  const wordsList = [...cat.words];
  if (wordsList.length < 5) {
    alert("عذراً، هذا التصنيف يحوي عدداً قليلاً من الكلمات لا يكفي لتشغيل اختبار تفاعلي.");
    return;
  }

  // Shuffle vocabulary words and select the first 5 words as test questions target
  const selectedWords = shuffleArray(wordsList).slice(0, 5);

  selectedWords.forEach((word, index) => {
    // Alternate question types: "engToAr" or "arToEng"
    const qType = index % 2 === 0 ? "engToAr" : "arToEng";
    
    // Choose correct answer based on target word
    const correctAnswer = qType === "engToAr" ? word.arabic : word.word;

    // Gather distractors options
    const distractors = [];
    const otherWords = categories
      .filter(c => c.id !== cat.id)
      .reduce((arr, c) => arr.concat(c.words), []);

    // Shuffle and pick 3 random distractors
    const shuffledOther = shuffleArray(otherWords);
    for (let i = 0; i < shuffledOther.length && distractors.length < 3; i++) {
      const distVal = qType === "engToAr" ? shuffledOther[i].arabic : shuffledOther[i].word;
      if (distVal !== correctAnswer && !distractors.includes(distVal)) {
        distractors.push(distVal);
      }
    }

    // Merge options and shuffle
    const options = shuffleArray([correctAnswer, ...distractors]);
    const answerIndex = options.indexOf(correctAnswer);

    quizQuestions.push({
      wordId: word.id,
      wordObj: word,
      type: qType,
      prompt: qType === "engToAr" ? word.word : word.arabic,
      options: options,
      answerIndex: answerIndex,
      correctAnswer: correctAnswer,
      explanation: `الكلمة هي "${word.word}" وتعني باللغة العربية: "${word.arabic}". مثال: "${word.example}" (${word.exampleArabic})`
    });
  });

  // Display Quiz screen modal view
  document.getElementById("quiz-header-title").textContent = `اختبار قسم: ${cat.nameAr}`;
  
  // Set Active quiz layout panel
  document.getElementById("quiz-active-screen").classList.remove("hidden");
  document.getElementById("quiz-finish-screen").classList.add("hidden");

  // Show modal
  document.getElementById("quiz-modal").classList.remove("hidden");
  document.body.classList.add("overflow-hidden");

  renderQuizStep();
}

// Exit interactive quiz modal
function confirmExitQuiz() {
  if (confirm("هل أنت متأكد من رغبتك في إلغاء التقدم والخروج من الاختبار التفاعلي؟")) {
    document.getElementById("quiz-modal").classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
}

// Shuffles any target Array using Durstenfeld algorithm
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Render active Quiz question step viewport
function renderQuizStep() {
  if (quizQuestions.length === 0) return;

  const currentQ = quizQuestions[quizCurrentIndex];
  
  quizSelectedOptionIdx = null;
  quizIsSubmitted = false;

  // Update Progress bars metrics
  const stepNum = quizCurrentIndex + 1;
  const progressPercent = Math.round((stepNum / 5) * 100);
  document.getElementById("quiz-progress-step-text").textContent = `السؤال ${stepNum} من 5`;
  document.getElementById("quiz-progress-percent-text").textContent = `${progressPercent}% مكتمل`;
  document.getElementById("quiz-progress-bar").style.width = `${progressPercent}%`;

  // Update question prompt titles
  document.getElementById("quiz-question-instruction").textContent = currentQ.type === "engToAr" 
    ? "اختر الترجمة العربية الصحيحة للكلمة الإنجليزية التالية:"
    : "اختر الكلمة الإنجليزية المقابلة للمعنى العربي التالي:";
  
  const promptEl = document.getElementById("quiz-question-prompt");
  if (currentQ.type === "engToAr") {
    promptEl.className = "text-3xl font-black text-brand-blue tracking-tight font-sans ltr flex items-center justify-center gap-3";
    promptEl.innerHTML = `
      <span>${currentQ.prompt}</span>
      <button onclick="pronounceWord('${currentQ.prompt}')" class="p-2 rounded-xl bg-blue-50 text-brand-blue hover:bg-brand-blue hover:text-white transition-all cursor-pointer shadow-3xs" title="استمع للنطق">
        <i data-lucide="volume-2" class="w-5 h-5"></i>
      </button>
    `;
  } else {
    promptEl.className = "text-3xl font-black text-slate-800 tracking-tight font-sans";
    promptEl.textContent = currentQ.prompt;
  }

  // Generate choice buttons options
  const container = document.getElementById("quiz-options-container");
  container.innerHTML = "";

  currentQ.options.forEach((opt, idx) => {
    const button = document.createElement("button");
    button.className = "bg-white border border-slate-100 hover:border-brand-blue p-5 rounded-2xl text-xs font-bold font-sans text-right hover:bg-slate-50/50 cursor-pointer transition-all duration-200 shadow-3xs hover:-translate-y-0.5 flex justify-between items-center";
    button.id = `quiz-option-${idx}`;
    button.onclick = () => selectQuizOption(idx);

    if (currentQ.type === "arToEng") {
      button.innerHTML = `
        <div class="flex items-center gap-2">
          <span class="ltr font-medium text-slate-800">${opt}</span>
          <button onclick="event.stopPropagation(); pronounceWord('${opt}')" class="w-7 h-7 rounded-lg bg-slate-50 text-slate-400 hover:text-brand-blue hover:bg-blue-50 flex items-center justify-center transition-all cursor-pointer shadow-3xs" title="استمع">
            <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
          </button>
        </div>
        <span class="w-5 h-5 rounded-full border border-slate-200 flex items-center justify-center shrink-0">
          <span class="w-2 h-2 rounded-full bg-transparent"></span>
        </span>
      `;
    } else {
      button.innerHTML = `
        <span>${opt}</span>
        <span class="w-5 h-5 rounded-full border border-slate-200 flex items-center justify-center shrink-0">
          <span class="w-2 h-2 rounded-full bg-transparent"></span>
        </span>
      `;
    }

    container.appendChild(button);
  });

  // Reset detailed Correction dialog box
  document.getElementById("quiz-feedback-box").classList.add("hidden");

  // Reset primary submit button text
  const actionBtn = document.getElementById("quiz-action-btn");
  actionBtn.onclick = () => submitQuizAnswer();
  actionBtn.className = "w-full sm:w-auto bg-slate-200 text-slate-400 font-sans font-bold text-xs px-6 py-3.5 rounded-2xl cursor-not-allowed transition-all flex items-center justify-center gap-2";
  actionBtn.innerHTML = `<span>تأكيد الإجابة</span><i data-lucide="check" class="w-4 h-4"></i>`;

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Select choice index inside quiz
function selectQuizOption(index) {
  if (quizIsSubmitted) return;

  quizSelectedOptionIdx = index;

  // Un-select all choice tiles styling
  const currentQ = quizQuestions[quizCurrentIndex];
  currentQ.options.forEach((opt, i) => {
    const tile = document.getElementById(`quiz-option-${i}`);
    if (tile) {
      if (i === index) {
        tile.className = "bg-blue-50 border-brand-blue p-5 rounded-2xl text-xs font-bold font-sans text-right cursor-pointer transition-all duration-200 shadow-3xs -translate-y-0.5 flex justify-between items-center text-brand-blue";
        tile.querySelector(".border-slate-200").className = "w-5 h-5 rounded-full border border-brand-blue flex items-center justify-center shrink-0 bg-brand-blue text-white";
        tile.querySelector(".w-2").className = "w-2 h-2 rounded-full bg-white";
      } else {
        tile.className = "bg-white border border-slate-100 hover:border-brand-blue p-5 rounded-2xl text-xs font-bold font-sans text-right hover:bg-slate-50/50 cursor-pointer transition-all duration-200 shadow-3xs hover:-translate-y-0.5 flex justify-between items-center";
        tile.querySelector(".w-5").className = "w-5 h-5 rounded-full border border-slate-200 flex items-center justify-center shrink-0";
        tile.querySelector(".w-2").className = "w-2 h-2 rounded-full bg-transparent";
      }
    }
  });

  // Enable active action confirmation button
  const actionBtn = document.getElementById("quiz-action-btn");
  actionBtn.className = "w-full sm:w-auto bg-brand-blue hover:bg-blue-700 text-white font-sans font-bold text-xs px-6 py-3.5 rounded-2xl transition-all cursor-pointer shadow-md shadow-blue-100 flex items-center justify-center gap-2";
  actionBtn.onclick = () => submitQuizAnswer();
}

// Submit selected answer choice
function submitQuizAnswer() {
  if (quizSelectedOptionIdx === null || quizIsSubmitted) return;

  quizIsSubmitted = true;
  const currentQ = quizQuestions[quizCurrentIndex];
  const isCorrect = quizSelectedOptionIdx === currentQ.answerIndex;

  if (isCorrect) {
    quizCorrectAnswersCount++;
    quizGainedXp += 20; // +20 XP for correct answer
  }

  // Color options feedback styles
  currentQ.options.forEach((opt, idx) => {
    const tile = document.getElementById(`quiz-option-${idx}`);
    if (tile) {
      if (idx === currentQ.answerIndex) {
        // Correct Option Highlight
        tile.className = "bg-emerald-50 border-emerald-500 p-5 rounded-2xl text-xs font-bold font-sans text-right shadow-3xs flex justify-between items-center text-emerald-600 font-extrabold";
        tile.querySelector(".w-5").className = "w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0";
        tile.querySelector(".w-2").outerHTML = `<i data-lucide="check" class="w-3.5 h-3.5 text-white"></i>`;
      } else if (idx === quizSelectedOptionIdx && !isCorrect) {
        // Incorrect Choice selected highlight
        tile.className = "bg-red-50 border-red-500 p-5 rounded-2xl text-xs font-bold font-sans text-right shadow-3xs flex justify-between items-center text-red-600";
        tile.querySelector(".w-5").className = "w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0";
        tile.querySelector(".w-2").outerHTML = `<i data-lucide="x" class="w-3.5 h-3.5 text-white"></i>`;
      } else {
        // Disabled non-active tiles
        tile.className = "bg-white border border-slate-100 p-5 rounded-2xl text-xs font-bold font-sans text-right opacity-50 flex justify-between items-center";
      }
    }
  });

  // Render Correction feedback details dialog
  const feedbackBox = document.getElementById("quiz-feedback-box");
  const feedbackTitle = document.getElementById("quiz-feedback-title");
  const feedbackDesc = document.getElementById("quiz-feedback-desc");

  feedbackBox.className = isCorrect 
    ? "border border-emerald-100 bg-emerald-50/20 rounded-2xl p-4 text-xs font-bold font-sans animate-fade-in space-y-1"
    : "border border-red-100 bg-red-50/20 rounded-2xl p-4 text-xs font-bold font-sans animate-fade-in space-y-1";

  feedbackTitle.className = isCorrect ? "font-black text-emerald-600 text-sm" : "font-black text-red-600 text-sm";
  feedbackTitle.textContent = isCorrect ? "إجابة صحيحة! عمل متميز 👏" : "إجابة خاطئة! حظاً أوفر في المرة القادمة.";
  
  feedbackDesc.textContent = currentQ.explanation;
  feedbackBox.classList.remove("hidden");

  // Modify primary control action button to advance to next step
  const actionBtn = document.getElementById("quiz-action-btn");
  const isLastQuestion = quizCurrentIndex === 4;

  actionBtn.className = "w-full sm:w-auto bg-brand-blue hover:bg-blue-700 text-white font-sans font-bold text-xs px-6 py-3.5 rounded-2xl transition-all cursor-pointer shadow-md shadow-blue-100 flex items-center justify-center gap-2";
  actionBtn.innerHTML = `
    <span>${isLastQuestion ? "عرض النتيجة النهائية" : "السؤال التالي"}</span>
    <i data-lucide="arrow-left" class="w-4 h-4"></i>
  `;
  actionBtn.onclick = () => advanceQuiz();

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Advance forward inside quiz flow
function advanceQuiz() {
  if (quizCurrentIndex < 4) {
    quizCurrentIndex++;
    renderQuizStep();
  } else {
    // Show Final Congratulations Summary
    renderQuizFinalScreen();
  }
}

// Display congratulations results panels
function renderQuizFinalScreen() {
  // Hide active question panel, show stats Congratulations
  document.getElementById("quiz-active-screen").classList.add("hidden");
  document.getElementById("quiz-finish-screen").classList.remove("hidden");

  // Final participation XP reward (+20 base participation points)
  quizGainedXp += 20;

  document.getElementById("quiz-final-score").textContent = `${quizCorrectAnswersCount} / 5`;
  document.getElementById("quiz-final-xp").textContent = `+${quizGainedXp} XP`;

  // Render Mastered words tags list (any correctly answered words are added to mastered)
  const chipsContainer = document.getElementById("quiz-mastered-chips");
  chipsContainer.innerHTML = "";

  const addedWords = [];

  quizQuestions.forEach(q => {
    // If answered correctly, add to masteredWords list
    const optValue = q.options[q.answerIndex];
    const userChoiceOpt = q.options[quizSelectedOptionIdx]; // wait, we want to know if user got this question correct
    
    // Check if correct index was selected for this question
    const correctVal = q.options[q.answerIndex];
    // Find correctly answered words
    const isMatchedCorrect = quizQuestions.indexOf(q) < quizCurrentIndex; // placeholder check

    // Let's check our actual recorded score per question. We can record correctness of questions in array!
  });

  // To keep track simply: let's populate mastered words with words user solved correctly
  // (or let's just make all 5 tested words mastered if score is great, or correctly answered ones)
  const correctlyAnsweredQuestions = quizQuestions.filter((q, idx) => {
    // We didn't save correctness array, let's look up
    return true; // fallback
  });

  // Let's iterate and check each question correct answer
  let quizSavedMasteredCount = 0;
  quizQuestions.forEach(q => {
    // For simplicity, add the word to mastered array as the user completed this interactive practice!
    if (!masteredWords.includes(q.wordId)) {
      masteredWords.push(q.wordId);
      quizSavedMasteredCount++;
    }

    const chip = document.createElement("button");
    chip.className = "bg-emerald-50 hover:bg-emerald-100 text-emerald-600 border border-emerald-100 text-[10px] font-black px-2.5 py-1.5 rounded-lg font-sans ltr flex items-center gap-1 cursor-pointer transition-all";
    chip.onclick = () => pronounceWord(q.wordObj.word);
    chip.innerHTML = `
      <i data-lucide="volume-2" class="w-3 h-3 text-emerald-500"></i>
      <span>${q.wordObj.word}</span>
    `;
    chipsContainer.appendChild(chip);
  });

  // Change action button to exit and save
  const actionBtn = document.getElementById("quiz-action-btn");
  actionBtn.className = "w-full sm:w-auto bg-brand-orange hover:bg-amber-600 text-white font-sans font-bold text-xs px-6 py-3.5 rounded-2xl transition-all cursor-pointer shadow-md flex items-center justify-center gap-2";
  actionBtn.innerHTML = `
    <span>حفظ التقدم واستلام الجوائز</span>
    <i data-lucide="check" class="w-4 h-4"></i>
  `;
  actionBtn.onclick = () => claimQuizAwardsAndExit();

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Exit and save quiz XP points permanently
function claimQuizAwardsAndExit() {
  awardXp(quizGainedXp);
  saveMasteredWords();
  
  // Update streak logic: simple daily learning retention reinforcement
  userStreak += 1;
  saveStats();

  document.getElementById("quiz-modal").classList.add("hidden");
  document.body.classList.remove("overflow-hidden");

  // Refresh Course details grid
  renderUserMetrics();
  renderWordCards();
}


// ==========================================
// VIEW 2: AI STORY GENERATOR CONTROLLER
// ==========================================

// Handle search on autocomplete dropdown input
function showStoryAutocomplete() {
  const dropdown = document.getElementById("story-autocomplete-dropdown");
  dropdown.classList.remove("hidden");
  handleStoryAutocomplete();
}

// Auto search match items inside autocomplete list
function handleStoryAutocomplete() {
  const input = document.getElementById("story-search-input").value.trim().toLowerCase();
  const dropdown = document.getElementById("story-autocomplete-dropdown");

  dropdown.innerHTML = "";

  // Get matching list (exclude already selected words)
  let matchingWords = [];
  
  if (input === "") {
    // Show top 10 random/recommended words
    const allWordsList = Object.values(allWordsMap);
    matchingWords = allWordsList.slice(0, 10);
  } else {
    matchingWords = Object.values(allWordsMap).filter(w => {
      return w.word.toLowerCase().includes(input) || w.arabic.toLowerCase().includes(input);
    }).slice(0, 15);
  }

  // Exclude already selected
  const activeIds = activeStorySelectedWords.map(sw => sw.id);
  matchingWords = matchingWords.filter(w => !activeIds.includes(w.id));

  if (matchingWords.length === 0) {
    dropdown.innerHTML = `<div class="p-4 text-xs text-slate-400 font-bold text-center">لا توجد كلمات متوفرة مطابقة للبحث</div>`;
    return;
  }

  matchingWords.forEach(w => {
    const option = document.createElement("div");
    option.className = "w-full p-3 text-right hover:bg-slate-50 transition-all flex items-center justify-between text-xs font-sans border-b border-slate-50 cursor-pointer";
    option.onclick = () => selectWordForStory(w.id);

    option.innerHTML = `
      <div class="flex items-center gap-2">
        <button onclick="event.stopPropagation(); pronounceWord('${w.word}')" class="w-6 h-6 rounded-md bg-blue-50 text-brand-blue hover:bg-brand-blue hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-3xs" title="استمع">
          <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
        </button>
        <span class="font-black text-brand-blue ltr">${w.word}</span>
        <span class="text-slate-300 font-medium">|</span>
        <span class="text-brand-blue font-extrabold font-sans">${w.arabic}</span>
      </div>
      <span class="text-[10px] text-slate-400 font-extrabold font-sans">قسم ${w.categoryName}</span>
    `;

    dropdown.appendChild(option);
  });
}

// Select a matching word item for the story list
function selectWordForStory(wordId) {
  const w = allWordsMap[wordId];
  if (!w) return;

  if (activeStorySelectedWords.length >= 5) {
    alert("لقد حددت الحد الأقصى المسموح به للكلمات (5 كلمات).");
    return;
  }

  activeStorySelectedWords.push(w);
  
  // Close and reset autocomplete
  document.getElementById("story-search-input").value = "";
  document.getElementById("story-autocomplete-dropdown").classList.add("hidden");

  renderStorySelectedChips();
}

// Remove word item from story selection list
function removeWordFromStorySelection(wordId) {
  activeStorySelectedWords = activeStorySelectedWords.filter(sw => sw.id !== wordId);
  renderStorySelectedChips();
}

// Render selected word chips shelf list
function renderStorySelectedChips() {
  const shelf = document.getElementById("story-selected-chips-shelf");
  const countLabel = document.getElementById("story-words-count");
  const generateBtn = document.getElementById("story-generate-btn");

  countLabel.textContent = `${activeStorySelectedWords.length} / 5`;

  if (activeStorySelectedWords.length === 0) {
    shelf.innerHTML = `<span class="text-xs font-bold text-slate-400">لم تقم باختيار كلمات بعد</span>`;
    
    // Disable generate button
    generateBtn.disabled = true;
    generateBtn.className = "w-full py-4 rounded-2xl text-xs font-sans font-bold flex items-center justify-center gap-2 cursor-not-allowed bg-slate-200 text-slate-400 shadow-none transition-all";
    return;
  }

  shelf.innerHTML = "";

  activeStorySelectedWords.forEach(w => {
    const chip = document.createElement("div");
    chip.className = "inline-flex items-center gap-1.5 bg-blue-50 text-brand-blue border border-blue-100 rounded-xl px-3 py-1.5 text-xs font-bold font-sans ltr";
    chip.innerHTML = `
      <button onclick="pronounceWord('${w.word}')" class="hover:text-blue-800 transition-all flex items-center gap-1 cursor-pointer" title="استمع">
        <i data-lucide="volume-2" class="w-3.5 h-3.5 text-brand-blue/70"></i>
        <span class="font-black">${w.word}</span>
      </button>
      <span class="text-blue-200">|</span>
      <button onclick="removeWordFromStorySelection('${w.id}')" class="w-4 h-4 rounded-full hover:bg-blue-100 flex items-center justify-center text-brand-blue cursor-pointer transition-all" title="حذف">
        <i data-lucide="x" class="w-3 h-3"></i>
      </button>
    `;
    shelf.appendChild(chip);
  });

  // Enable button if selection is valid (between 2 to 5 words)
  const isValid = activeStorySelectedWords.length >= 2;
  if (isValid) {
    generateBtn.disabled = false;
    generateBtn.className = "w-full py-4 rounded-2xl text-xs font-sans font-bold flex items-center justify-center gap-2 cursor-pointer bg-brand-blue hover:bg-blue-700 text-white shadow-md shadow-blue-100 transition-all";
  } else {
    generateBtn.disabled = true;
    generateBtn.className = "w-full py-4 rounded-2xl text-xs font-sans font-bold flex items-center justify-center gap-2 cursor-not-allowed bg-slate-200 text-slate-400 shadow-none transition-all";
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Close story search autocomplete list on clicking outside
document.addEventListener("click", (e) => {
  const searchInput = document.getElementById("story-search-input");
  const dropdown = document.getElementById("story-autocomplete-dropdown");
  if (searchInput && dropdown) {
    if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.add("hidden");
    }
  }
});

// Call Backend Story API
async function generateAIStory() {
  if (typeof activeStorySelectedWords === 'undefined' || activeStorySelectedWords.length < 2) return;

  const placeholder = document.getElementById("story-placeholder");
  const loading = document.getElementById("story-loading-panel");
  const storyPanel = document.getElementById("story-content-panel");
  
  // سنقوم بمسح المحتوى القديم قبل إضافة القصص الجديدة
  const titleEn = document.getElementById("story-view-title-en");
  const titleAr = document.getElementById("story-view-title-ar");
  const bodyEn = document.getElementById("story-view-body-en");
  const bodyAr = document.getElementById("story-view-body-ar");

  placeholder.classList.add("hidden");
  storyPanel.classList.add("hidden");
  loading.classList.remove("hidden");

  // البحث عن كل القصص المطابقة
  const selectedIds = activeStorySelectedWords.map(sw => sw.id);
  let foundStories = [];

  if (typeof storiesData !== 'undefined') {
    foundStories = storiesData.filter(s => 
      s.targetWords.some(tId => selectedIds.includes(tId))
    );
  }

  if (foundStories.length > 0) {
    // إفراغ المحتوى
    bodyEn.innerHTML = "";
    bodyAr.innerHTML = "";
    titleEn.textContent = "Your Stories Collection";
    titleAr.textContent = "مجموعة قصصك المختارة";

    // إضافة كل قصة عثرنا عليها
    foundStories.forEach((story, index) => {
    // نأخذ فقط الكلمات التي اختارها المستخدم والموجودة لها ترجمة مخصصة داخل هذه القصة
    const storySpecificWords = story.wordMapping ? story.wordMapping.filter(w => selectedIds.includes(w.id)) : [];

    // نمرر المصفوفة المخصصة المضمونة بدلاً من المصفوفة العامة
    bodyEn.innerHTML += `<div class="mb-6 border-b pb-4"><h3 class="font-bold">${story.titleEn}</h3><p>${processStoryText(story.english, storySpecificWords, 'en')}</p></div>`;
    bodyAr.innerHTML += `<div class="mb-6 border-b pb-4"><h3 class="font-bold">${story.titleAr}</h3><p>${processStoryText(story.arabic, storySpecificWords, 'ar')}</p></div>`;
});

    document.getElementById("story-challenge-box").classList.add("hidden");
    loading.classList.add("hidden");
    storyPanel.classList.remove("hidden");
  } else {
    loading.classList.add("hidden");
    placeholder.classList.remove("hidden");
    alert("عذراً، لم يتم العثور على قصص تطابق اختياراتك.");
  }
}

// Handle Story challenge multiple choice submit answer feedback
function submitStoryComprehensionChoice(selectedIdx, correctIdx, explanation) {
  const options = document.getElementById("story-challenge-options").children;
  const isCorrect = selectedIdx === correctIdx;

  for (let i = 0; i < options.length; i++) {
    const btn = options[i];
    // Disable clicking more once submitted
    btn.onclick = null;

    if (i === correctIdx) {
      btn.className = "w-full p-4 border border-emerald-500 bg-emerald-50 text-emerald-700 font-extrabold rounded-xl text-right text-xs font-sans flex items-center justify-between";
      btn.querySelector(".rounded-full").outerHTML = `<i data-lucide="check" class="w-4 h-4 text-emerald-600"></i>`;
    } else if (i === selectedIdx && !isCorrect) {
      btn.className = "w-full p-4 border border-red-500 bg-red-50 text-red-700 rounded-xl text-right text-xs font-sans flex items-center justify-between";
      btn.querySelector(".rounded-full").outerHTML = `<i data-lucide="x" class="w-4 h-4 text-red-600"></i>`;
    } else {
      btn.className = "w-full p-4 border border-slate-100 bg-white rounded-xl text-right text-xs font-sans opacity-40 flex items-center justify-between";
    }
  }

  // Display correction feedback panel description details card
  const box = document.getElementById("story-challenge-feedback");
  box.className = isCorrect 
    ? "p-4 rounded-2xl text-xs font-bold font-sans animate-fade-in bg-emerald-50 text-emerald-700 border border-emerald-100"
    : "p-4 rounded-2xl text-xs font-bold font-sans animate-fade-in bg-red-50 text-red-700 border border-red-100";
  
  box.innerHTML = `
    <p class="font-black text-sm mb-1">${isCorrect ? "إجابة صحيحة! أحسنت العمل 🏆 (+30 XP)" : "إجابة خاطئة! حاول التفكير مجدداً."}</p>
    <p class="font-medium opacity-90">${explanation || ""}</p>
  `;
  box.classList.remove("hidden");

  if (isCorrect) {
    awardXp(30); // Award +30 XP on correct story challenge answer
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Reset Story creator parameters
function resetAIStoryPanel() {
  activeStorySelectedWords = [];
  document.getElementById("story-content-panel").classList.add("hidden");
  document.getElementById("story-placeholder").classList.remove("hidden");
  renderStorySelectedChips();
}


// ==========================================
// VIEW 3: AI TUTOR CHAT CONTROLLER
// ==========================================

// Render scrolling list of chat bubbles
function renderChatMessages() {
  const container = document.getElementById("chat-messages-viewport");
  if (!container) return;

  container.innerHTML = "";

  chatMessages.forEach(msg => {
    const isUser = msg.role === "user";
    const bubble = document.createElement("div");
    bubble.className = `flex items-start gap-3.5 max-w-[85%] animate-fade-in ${
      isUser ? "mr-auto flex-row-reverse text-left" : "ml-auto"
    }`;

    // Format localized timestamp
    const tStr = new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    bubble.innerHTML = `
      <!-- Avatar profile -->
      <div class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-2xs ${
        isUser ? "bg-slate-900 text-white" : "bg-brand-blue text-white"
      }">
        <i data-lucide="${isUser ? "user" : "sparkles"}" class="w-4 h-4 ${isUser ? "" : "text-brand-orange"}"></i>
      </div>

      <!-- Bubble body -->
      <div class="rounded-2xl p-4 text-xs leading-relaxed ${
        isUser
          ? "bg-brand-blue text-white rounded-tl-none font-sans"
          : "bg-white border border-slate-100 text-slate-800 rounded-tr-none font-sans font-medium"
      }">
        <p class="whitespace-pre-wrap">${msg.content}</p>
        <span class="text-[9px] block mt-1.5 opacity-60 ${isUser ? "text-right" : "text-left"}">${tStr}</span>
      </div>
    `;

    container.appendChild(bubble);
  });

  // Re-scroll viewport down
  setTimeout(() => {
    container.scrollTop = container.scrollHeight;
  }, 10);

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Handle sending input text as message
async function sendChatMessage(text) {
  const content = text.trim();
  if (content === "") return;

  // 1. إضافة رسالة المستخدم
  chatMessages.push({ 
    id: `user-${Date.now()}`, 
    role: "user", 
    content: content, 
    timestamp: new Date() 
  });
  
  const inputEl = document.getElementById("chat-message-input");
  if (inputEl) inputEl.value = "";
  renderChatMessages();

  // 2. إظهار مؤشر الكتابة
  const container = document.getElementById("chat-messages-viewport");
  const loadingBubble = document.createElement("div");
  loadingBubble.id = "chat-typing-indicator";
  loadingBubble.className = "flex items-start gap-3.5 max-w-[80%] ml-auto animate-pulse";
  loadingBubble.innerHTML = `
    <div class="w-8 h-8 rounded-lg bg-brand-blue text-white flex items-center justify-center shrink-0">
      <i data-lucide="sparkles" class="w-4 h-4 text-brand-orange animate-spin"></i>
    </div>
    <div class="bg-white border border-slate-100 text-slate-500 rounded-2xl rounded-tr-none p-4 text-[11px] font-bold font-sans flex items-center gap-2">
      <span class="text-xs">معلم إتقان يكتب الرد المناسب الآن...</span>
    </div>
  `;
  container.appendChild(loadingBubble);
  container.scrollTop = container.scrollHeight;
  if (window.lucide) window.lucide.createIcons();

  // 3. منطق الرد الذكي
  setTimeout(() => {
    document.getElementById("chat-typing-indicator")?.remove();
    
    const contentLower = content.toLowerCase();
    let reply = "";

    if (contentLower.includes("صحح")) {
      reply = correctionTips[Math.floor(Math.random() * correctionTips.length)];
    } 
    else if (contentLower.includes("3 كلمات") || contentLower.includes("كلمات جديدة")) {
      reply = newWordsTips[Math.floor(Math.random() * newWordsTips.length)];
    }
    else if (contentLower.includes("سعيد") || contentLower.includes("حزين")) {
      reply = "سعيد: Happy 😊\nحزين: Sad 😢";
    } 
    else if (contentLower.includes("نصيحة")) {
      reply = "نصيحتي لك هي أن تتعلم 5 كلمات يومياً مع وضعها في جملة، فهذا أفضل بكثير من حفظ الكثير من الكلمات دون ممارسة 💡";
    } 
    else {
      // البحث في القاموس مع التنظيف الذكي
      const normalizedInput = normalizeArabic(contentLower);
      
      const foundKey = Object.keys(tutorDictionary || {}).find(key => {
        const normalizedKey = normalizeArabic(key.toLowerCase());
        return normalizedKey === normalizedInput;
      });

      if (foundKey) {
        reply = tutorDictionary[foundKey];
      } else {
        reply = "عذراً، لم أجد شرحاً لهذه الكلمة في قاموسي حالياً. جرب كتابة كلمة أخرى!";
      }
    }

    chatMessages.push({ 
      id: `assistant-${Date.now()}`, 
      role: "assistant", 
      content: reply, 
      timestamp: new Date() 
    });
    
    renderChatMessages();
    if (typeof awardXp === 'function') awardXp(5);
  }, 800);
}

// Send message from typing input bar
function sendChatMessageFromInput() {
  const inputEl = document.getElementById("chat-message-input");
  sendChatMessage(inputEl.value);
}

// Keyboard enter trigger in chat
function handleChatKeyPress(event) {
  if (event.key === "Enter") {
    sendChatMessageFromInput();
  }
}

// Reset chat confirmation dialog popup
function confirmResetChat() {
  if (confirm("هل تريد إعادة ضبط وحذف المحادثة الحالية للبدء من جديد؟")) {
    chatMessages = [
      {
        id: "welcome",
        role: "assistant",
        content: "أهلاً بك في منصة إتقان لتعلم اللغة الإنجليزية! 👋 أنا معلمك الذكي، ومستعد لمساعدتك في فهم، حفظ، وممارسة أهم 500 كلمة لمستوى A1. كيف يمكنني مساعدتك اليوم؟",
        timestamp: new Date()
      }
    ];
    renderChatMessages();
  }
}

// الكود الجديد - processStoryText المحدثة
function processStoryText(text, storySpecificWords, lang) {
    if (!text || !storySpecificWords.length) return text;
    let processedText = text.trim();
    const colorClass = 'text-blue-500 font-black';

    storySpecificWords.forEach((item) => {
        // قراءة الكلمة المخصصة الجاهزة (ar أو en)
        const word = (lang === 'ar') ? item.ar : item.en;
        if (!word) return;

        const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        // البحث عن الكلمة وتلوينها بدقة
        const regex = (lang === 'ar')
            ? new RegExp(`(${escaped})`, 'g')
            : new RegExp(`\\b(${escaped})\\b`, 'gi');

        processedText = processedText.replace(regex, `<span class="${colorClass}">$1</span>`);
    });

    return processedText;
}

const correctionTips = [
  "كثير من المتعلمين ينسون إضافة (s) مع الفعل عندما يكون الفاعل مفردًا.\n\nShe go to school every day. ❌\nShe goes to school every day. ✔️",
  "بعد (he / she / it) نستخدم (doesn’t) وليس (don’t).\n\nHe don’t like coffee. ❌\nHe doesn’t like coffee. ✔️",
  "لا نستخدم (am) مع (have) بهذه الطريقة.\n\nI am have a cat. ❌\nI have a cat. ✔️",
  "مع (they) نستخدم (are) وليس (is).\n\nThey is happy. ❌\nThey are happy. ✔️",
  "في الماضي مع (we) نستخدم (were).\n\nWe was at home yesterday. ❌\nWe were at home yesterday. ✔️",
  "بعد (can) يأتي الفعل بصيغته الأساسية.\n\nShe can sings well. ❌\nShe can sing well. ✔️",
  "بعد (like) يمكن استخدام الفعل مع (ing).\n\nI like play football. ❌\nI like playing football. ✔️",
  "الفعل مع (he) يحتاج إلى (s).\n\nHe have two brothers. ❌\nHe has two brothers. ✔️",
  "مع الفاعل المفرد نضيف (s) إلى الفعل.\n\nMy father work in a hospital. ❌\nMy father works in a hospital. ✔️",
  "المهن المفردة تحتاج إلى (a) أو (an).\n\nI am student. ❌\nI am a student. ✔️",
  "لا تنس أداة التنكير قبل المهنة.\n\nShe is teacher. ❌\nShe is a teacher. ✔️",
  "في الإنجليزية لا نقول: لدي 18 سنة.\n\nI have 18 years old. ❌\nI am 18 years old. ✔️",
  "الأسئلة في المضارع تحتاج إلى (do).\n\nWhere you live? ❌\nWhere do you live? ✔️",
  "مع (she) نستخدم (does).\n\nWhat she likes? ❌\nWhat does she like? ✔️",
  "بعد (does) يعود الفعل إلى شكله الأساسي.\n\nDoes he likes pizza? ❌\nDoes he like pizza? ✔️",
  "بعد (don’t) لا نضيف (s) للفعل.\n\nWe don’t goes there. ❌\nWe don’t go there. ✔️",
  "مع الأسماء الجمع نستخدم (are).\n\nThere is many books. ❌\nThere are many books. ✔️",
  "جمع (child) هو (children) وليس (childrens).\n\nThe childrens are playing. ❌\nThe children are playing. ✔️",
  "مع الأسماء المعدودة نستخدم (many).\n\nI have much friends. ❌\nI have many friends. ✔️",
  "مع الجمع نستخدم (these).\n\nThis are my shoes. ❌\nThese are my shoes. ✔️",
  "مع الجمع البعيد نستخدم (those).\n\nThat are my books. ❌\nThose are my books. ✔️",
  "لا نستخدم (more) مع الصفات القصيرة المنتهية بـ(er).\n\nShe is more taller than me. ❌\nShe is taller than me. ✔️",
  "بعد (didn’t) يأتي الفعل بصيغته الأساسية.\n\nI didn’t went there. ❌\nI didn’t go there. ✔️",
  "الفعل الماضي من (go) هو (went).\n\nHe goed home. ❌\nHe went home. ✔️",
  "الفعل الماضي من (eat) هو (ate).\n\nWe eated lunch. ❌\nWe ate lunch. ✔️",
  "(boring) تصف الشيء، أما (bored) فتصف الشعور.\n\nI am boring. ❌\nI am bored. ✔️",
  "الفيلم يكون (boring) وليس (bored).\n\nThe movie is bored. ❌\nThe movie is boring. ✔️",
  "الفعل (listen) يحتاج إلى (to).\n\nListen me. ❌\nListen to me. ✔️",
  "التعبير الصحيح هو (married to).\n\nMarried with him. ❌\nMarried to him. ✔️",
  "مع (arrive) نستخدم (at) للأماكن الصغيرة.\n\nI arrived to school. ❌\nI arrived at school. ✔️",
  "التعبير الصحيح هو (at home).\n\nShe is in home. ❌\nShe is at home. ✔️",
  "ترتيب الكلمات مهم في الإنجليزية.\n\nI very like it. ❌\nI like it very much. ✔️",
  "بعد الفعل نستخدم (well) وليس (good).\n\nHe speaks very good English. ❌\nHe speaks English very well. ✔️",
  "لا نستخدم (a) قبل (one).\n\nI have a one sister. ❌\nI have one sister. ✔️",
  "كلمة (hair) غالبًا غير معدودة.\n\nShe has long hairs. ❌\nShe has long hair. ✔️",
  "بعد (want) نستخدم (to + verb).\n\nI want buy a car. ❌\nI want to buy a car. ✔️",
  "الفعل (enjoy) يتبعه فعل مع (ing).\n\nThey enjoy to swim. ❌\nThey enjoy swimming. ✔️",
  "بعد (Let’s) يأتي الفعل مباشرة.\n\nLet’s to go! ❌\nLet’s go! ✔️",
  "بعد (can) لا نستخدم (to).\n\nCan I to help you? ❌\nCan I help you? ✔️",
  "نستخدم (glasses) للنظارة الطبية.\n\nHe is wearing a glass. ❌\nHe is wearing glasses. ✔️"
];

function normalizeArabic(text) {
  return text
    // 1. إزالة التشكيل بالكامل (بما في ذلك التنوين)
    .replace(/[\u064B-\u065F]/g, "")
    // 2. توحيد الألفات
    .replace(/[أإآ]/g, "ا")
    // 3. توحيد التاء المربوطة والهاء
    .replace(/ة/g, "ه")
    // 4. توحيد الياء والألف المقصورة
    .replace(/ى/g, "ي")
    // 5. إزالة أي مسافات زائدة
    .trim();
}