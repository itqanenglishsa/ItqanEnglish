// Itqan English - Educational Slide Database

const unitsList = [
  {
    id: 1,
    title: "English Alphabets & Sounds",
    arabicTitle: "الوحدة الأولى: الأحرف الإنجليزية والأصوات",
    description: "التعرف على الحروف الأبجدية، نطقها الصحيح، الحروف المركبة والصامتة",
    color: "from-blue-600 to-indigo-700"
  },
  {
    id: 2,
    title: "Verb to be",
    arabicTitle: "الوحدة الثانية: فعل الكينونة",
    description: "استخدام am, is, are في الجمل المثبتة، المنفية، والأسئلة",
    color: "from-orange-500 to-amber-600"
  },
  {
    id: 3,
    title: "Parts of Speech",
    arabicTitle: "الوحدة الثالثة: أجزاء الكلام الأساسية",
    description: "الأسماء، الأفعال، الضمائر، حروف الجر، الصفات، الأحوال وأدوات العطف",
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: 4,
    title: "Simple Sentence Structure",
    arabicTitle: "الوحدة الرابعة: بناء الجملة البسيطة والأدوات",
    description: "ترتيب الجملة (SVO)، أدوات النكرة والمعرفة، وأسماء الإشارة للمفرد",
    color: "from-purple-500 to-indigo-600"
  },
  {
    id: 5,
    title: "Simple Present Tense",
    arabicTitle: "الوحدة الخامسة: الزمن المضارع البسيط",
    description: "العادات، الحقائق العامة، وتصريف الأفعال مع s واستخدام do/does",
    color: "from-rose-500 to-pink-600"
  },
  {
    id: 6,
    title: "Practical Vocabulary",
    arabicTitle: "الوحدة السادسة: المفردات العملية والمحادثات",
    description: "التحيات، التعريف بالنفس، الأرقام حتى 100، الألوان، وأفراد العائلة",
    color: "from-cyan-500 to-blue-600"
  }
];

const numbersList = [
  { num: 0, text: "Zero", spelling: "زي-رو", arabic: "صفر" },
  { num: 1, text: "One", spelling: "وان", arabic: "واحد" },
  { num: 2, text: "Two", spelling: "تو", arabic: "اثنان" },
  { num: 3, text: "Three", spelling: "ثري", arabic: "ثلاثة" },
  { num: 4, text: "Four", spelling: "فور", arabic: "أربعة" },
  { num: 5, text: "Five", spelling: "فايف", arabic: "خمسة" },
  { num: 6, text: "Six", spelling: "سكس", arabic: "ستة" },
  { num: 7, text: "Seven", spelling: "سـفن", arabic: "سبعة" },
  { num: 8, text: "Eight", spelling: "أيت", arabic: "ثمانية" },
  { num: 9, text: "Nine", spelling: "ناين", arabic: "تسعة" },
  { num: 10, text: "Ten", spelling: "تن", arabic: "عشرة" },
  { num: 11, text: "Eleven", spelling: "إلـفن", arabic: "أحد عشر" },
  { num: 12, text: "Twelve", spelling: "توولـف", arabic: "اثنا عشر" },
  { num: 13, text: "Thirteen", spelling: "ثير-تين", arabic: "ثلاثة عشر" },
  { num: 14, text: "Fourteen", spelling: "فور-تين", arabic: "أربعة عشر" },
  { num: 15, text: "Fifteen", spelling: "فف-تين", arabic: "خمسة عشر" },
  { num: 16, text: "Sixteen", spelling: "سكس-تين", arabic: "ستة عشر" },
  { num: 17, text: "Seventeen", spelling: "سفن-تين", arabic: "سبعة عشر" },
  { num: 18, text: "Eighteen", spelling: "أيت-تين", arabic: "ثمانية عشر" },
  { num: 19, text: "Nineteen", spelling: "ناين-تين", arabic: "تسعة عشر" },
  { num: 20, text: "Twenty", spelling: "توين-تي", arabic: "عشرون" },
  { num: 30, text: "Thirty", spelling: "ثير-تي", arabic: "ثلاثون" },
  { num: 40, text: "Forty", spelling: "فور-تي", arabic: "أربعون" },
  { num: 50, text: "Fifty", spelling: "فف-تي", arabic: "خمسون" },
  { num: 60, text: "Sixty", spelling: "سكس-تي", arabic: "ستون" },
  { num: 70, text: "Seventy", spelling: "سفن-تي", arabic: "سبعون" },
  { num: 80, text: "Eighty", spelling: "أيت-تي", arabic: "ثمانون" },
  { num: 90, text: "Ninety", spelling: "ناين-تي", arabic: "تسعون" },
  { num: 100, text: "One Hundred", spelling: "وان هان-درد", arabic: "مئة" }
];

const slidesData = [
  // COVER SLIDE
  {
    id: "cover",
    type: "cover",
    unit: 1,
    title: "إتقان English",
    subtitle: "Level A1",
    arabicTitle: "المستوى الأول: التأسيس والبناء",
    description: "منهج تعليمي تفاعلي متكامل للمبتدئين للتأسيس وبناء لغة إنجليزية صحيحة وقوية"
  },

  

   // UNIT 1 VIDEO
  {
    id: "u1-video",
    type: "video",
    unit: 1,
    title: "مقدمة مرئية عن الوحدة",
    videoUrl: "https://youtube.com/"
  },

  // UNIT 1 INTRO
  {
    id: "u1-intro",

    type: "intro",
    unit: 1,

    title: "Unit 1: The Alphabets",
    subtitle: "الوحدة الأولى: الاحرف الانجليزية",
    description: "التعرف على الحروف الأبجدية الإنجليزية، نطقها الصحيح، وكتابتها",
    bullets: [
      "الاحرف الإنجليزية الكبيرة والصغيرة (Capital & Small Letters)",
      "التمييز بين صوت كل حرف وطريقة نطقه",
      "قواعد نطق الأحرف الإنجليزية بشكل صحيح",
      "تعلم اكثر من 126 كلمة مع نطق كل كلمة بشكل صحيح"
    ]
  },

  // UNIT 1 ALPHABET GRID
  {
    id: "u1-grid",
    type: "grid",
    unit: 1,
    title: "الأحرف الإنجليزية (Alphabet)",
    description: "في اللغة الإنجليزية 26 حرف؛ لكل حرف شكلين بالكتابة: كبير (Capital) وصغير (Small). اضغط على أي حرف للاستماع لنطقه!",
    note: "ملاحظة: يوجد 44 صوتاً في اللغة الإنجليزية لدى بعض الحروف أكثر من صوت."
  },

  // INDIVIDUAL LETTERS SAMPLES (A to Z)
  {
    id: "u1-letter-a",
    type: "letter-detail",
    unit: 1,
    title: "The Letter A, a",
    letter: "A, a",
    description: "استمع لنطق الكلمات التي تبدأ بحرف الـ A",
    examples: [
      { word: "Apple", arabic: "تفاحة", emoji: "🍎" },
      { word: "Angry", arabic: "غاضب", emoji: "😠" },
      { word: "Ant", arabic: "نملة", emoji: "🐜" },
      { word: "Arm", arabic: "ذراع", emoji: "💪" },
      { word: "Axe", arabic: "فأس", emoji: "🪓" }
    ]
  },
  {
    id: "u1-letter-b",
    type: "letter-detail",
    unit: 1,
    title: "The Letter B, b",
    letter: "B, b",
    description: "استمع لنطق الكلمات التي تبدأ بحرف الـ B",
    examples: [
      { word: "Ball", arabic: "كرة", emoji: "⚽" },
      { word: "Bag", arabic: "حقيبة", emoji: "🎒" },
      { word: "Bed", arabic: "سرير", emoji: "🛏️" },
      { word: "Book", arabic: "كتاب", emoji: "📖" },
      { word: "Bat", arabic: "خفاش", emoji: "🦇" }
    ]
  },
  {
    id: "u1-letter-c",
    type: "letter-detail",
    unit: 1,
    title: "The Letter C, c",
    letter: "C, c",
    description: "استمع لنطق الكلمات التي تبدأ بحرف الـ C",
    note: "قاعدة ذهبية: يُنطق هذا الحرف بصوت (كـ / K) في معظم الكلمات، ولكنه يُنطق بصوت (سـ / S) إذا جاء بعده أحد الحروف التالية: (e, i, y)!",
    examples: [
      { word: "Cat", arabic: "قطة", emoji: "🐱" },
      { word: "Car", arabic: "سيارة", emoji: "🚗" },
      { word: "City", arabic: "مدينة (نطق S)", emoji: "🏙️" },
      { word: "Cake", arabic: "كعكة", emoji: "🍰" },
      { word: "Circle", arabic: "دائرة", emoji: "⭕" }
    ]
  },
  {
    id: "u1-letter-d",
    type: "letter-detail",
    unit: 1,
    title: "The Letter D, d",
    letter: "D, d",
    description: "استمع لنطق الكلمات التي تبدأ بحرف الـ D",
    examples: [
      { word: "Dog", arabic: "كلب", emoji: "🐶" },
      { word: "Door", arabic: "باب", emoji: "🚪" },
      { word: "Desk", arabic: "مكتب", emoji: "✍️" },
      { word: "Dress", arabic: "فستان", emoji: "👗" },
      { word: "Doctor", arabic: "طبيب", emoji: "🧑‍⚕️" }
    ]
  },
  {
    id: "u1-letter-e",
    type: "letter-detail",
    unit: 1,
    title: "The Letter E, e",
    letter: "E, e",
    description: "استمع لنطق الكلمات التي تبدأ بحرف الـ E",
    examples: [
      { word: "Egg", arabic: "بيضة", emoji: "🍳" },
      { word: "Eye", arabic: "عين", emoji: "👁️" },
      { word: "Ear", arabic: "أذن", emoji: "👂" },
      { word: "Elephant", arabic: "فيل", emoji: "🐘" },
      { word: "Engineer", arabic: "مهندس", emoji: "👷‍♀️" }
    ]
  },
  {
    id: "u1-letter-f",
    type: "letter-detail",
    unit: 1,
    title: "The Letter F, f",
    letter: "F, f",
    description: "استمع لنطق الكلمات التي تبدأ بحرف الـ F",
    examples: [
      { word: "Flag", arabic: "علم", emoji: "🇸🇦" },
      { word: "Fox", arabic: "ثعلب", emoji: "🦊" },
      { word: "Fire", arabic: "نار", emoji: "🔥" },
      { word: "Fan", arabic: "مروحة", emoji: "🌀" },
      { word: "Foot", arabic: "قدم", emoji: "🦶" }
    ]
  },
  {
    id: "u1-letter-g",
    type: "letter-detail",
    unit: 1,
    title: "The Letter G, g",
    letter: "G, g",
    description: "استمع لنطق الكلمات التي تبدأ بحرف الـ G",
    note: "قاعدة: ينطق هذا الحرف بطريقتين: صوت جـ شديد (Hard G) أو صوت جـ ناعم (Soft G) مثل Giraffe/Germ.",
    examples: [
      { word: "Gun", arabic: "مسدس", emoji: "🔫" },
      { word: "Gift", arabic: "هدية", emoji: "🎁" },
      { word: "Grapes", arabic: "عنب", emoji: "🍇" },
      { word: "Giraffe", arabic: "زرافة (جـ خفيفة)", emoji: "🦒" },
      { word: "Germ", arabic: "جرثومة", emoji: "🦠" }
    ]
  },
  {
    id: "u1-letter-h",
    type: "letter-detail",
    unit: 1,
    title: "The Letter H, h",
    letter: "H, h",
    description: "استمع لنطق الكلمات التي تبدأ بحرف الـ H (ينطق مثل الهاء)",
    examples: [
      { word: "Heart", arabic: "قلب", emoji: "❤️" },
      { word: "Hand", arabic: "يد", emoji: "✋" },
      { word: "Hair", arabic: "شعر", emoji: "💇‍♀️" },
      { word: "Hat", arabic: "قبعة", emoji: "🎩" },
      { word: "Horse", arabic: "حصان", emoji: "🐎" }
    ]
  },
  {
    id: "u1-letter-i",
    type: "letter-detail",
    unit: 1,
    title: "The Letter I, i",
    letter: "I, i",
    description: "استمع لنطق الكلمات التي تبدأ بحرف الـ I",
    examples: [
      { word: "Ice", arabic: "ثلج", emoji: "🧊" },
      { word: "Island", arabic: "جزيرة", emoji: "🏝️" },
      { word: "Iron", arabic: "مكواة / حديد", emoji: "🔌" },
      { word: "ill", arabic: "مريض", emoji: "🤒" },
      { word: "Injection", arabic: "إبرة طبية", emoji: "💉" }
    ]
  },
  {
    id: "u1-letter-j",
    type: "letter-detail",
    unit: 1,
    title: "The Letter J, j",
    letter: "J, j",
    description: "استمع لنطق الكلمات التي تبدأ بحرف الـ J (ينطق جـ معطشة)",
    examples: [
      { word: "Jacket", arabic: "سترة", emoji: "🧥" },
      { word: "jar", arabic: "مرطبان / وعاء", emoji: "🫙" },
      { word: "Juice", arabic: "عصير", emoji: "🍹" },
      { word: "Jordan", arabic: "الأردن", emoji: "🇯🇴" },
      { word: "Jet", arabic: "طائرة نفاثة", emoji: "🛩" }
    ]
  },
  {
    id: "u1-letter-k",
    type: "letter-detail",
    unit: 1,
    title: "The Letter K, k",
    letter: "K, k",
    description: "استمع لنطق الكلمات التي تبدأ بحرف الـ K",
    examples: [
      { word: "Key", arabic: "مفتاح", emoji: "🔑" },
      { word: "Kiwi", arabic: "كيوي", emoji: "🥝" },
      { word: "Kettle", arabic: "غلاية", emoji: "🫖" },
      { word: "Kangaroo", arabic: "كنغر", emoji: "🦘" },
      { word: "Karate", arabic: "كاراتيه", emoji: "🥋" }
    ]
  },
  {
    id: "u1-letter-l",
    type: "letter-detail",
    unit: 1,
    title: "The Letter L, l",
    letter: "L, l",
    description: "استمع لنطق الكلمات التي تبدأ بحرف الـ L",
    examples: [
      { word: "Lemon", arabic: "ليمون", emoji: "🍋" },
      { word: "Lamp", arabic: "مصباح", emoji: "💡" },
      { word: "Light", arabic: "ضوء", emoji: "🔦" },
      { word: "Ladder", arabic: "سلم", emoji: "🪜" },
      { word: "Lion", arabic: "أسد", emoji: "🦁" }
    ]
  },
  {
    id: "u1-letter-m",
    type: "letter-detail",
    unit: 1,
    title: "The Letter M, m",
    letter: "M, m",
    description: "استمع لنطق الكلمات التي تبدأ بحرف الـ M",
    examples: [
      { word: "Moon", arabic: "قمر", emoji: "🌕" },
      { word: "Monkey", arabic: "قرد", emoji: "🐒" },
      { word: "Money", arabic: "نقود", emoji: "💵" },
      { word: "Mouse", arabic: "فأر", emoji: "🐭" },
      { word: "Mango", arabic: "مانجو", emoji: "🥭" }
    ]
  },
  {
    id: "u1-letter-n",
    type: "letter-detail",
    unit: 1,
    title: "The Letter N, n",
    letter: "N, n",
    description: "استمع لنطق الكلمات التي تبدأ بحرف الـ N",
    examples: [
      { word: "Nose", arabic: "أنف", emoji: "👃" },
      { word: "Necklace", arabic: "قلادة", emoji: "📿" },
      { word: "Needle", arabic: "إبرة للخياطة", emoji: "🪡" },
      { word: "nail", arabic: "ظفر", emoji: "💅" },
      { word: "Nut", arabic: "مكسرات", emoji: "🥜" }
    ]
  },
  {
    id: "u1-letter-o",
    type: "letter-detail",
    unit: 1,
    title: "The Letter O, o",
    letter: "O, o",
    description: "استمع لنطق الكلمات التي تبدأ بحرف الـ O",
    examples: [
      { word: "Orange", arabic: "برتقال", emoji: "🍊" },
      { word: "Onion", arabic: "بصل", emoji: "🧅" },
      { word: "Owl", arabic: "بومة", emoji: "🦉" },
      { word: "Oven", arabic: "فرن", emoji: "🍞" },
      { word: "Octopus", arabic: "أخطبوط", emoji: "🐙" }
    ]
  },
  {
    id: "u1-letter-p",
    type: "letter-detail",
    unit: 1,
    title: "The Letter P, p",
    letter: "P, p",
    description: "استمع لنطق الكلمات التي تبدأ بحرف الـ P (يخرج مع نطقها هواء)",
    examples: [
      { word: "Potato", arabic: "بطاطس", emoji: "🥔" },
      { word: "Pineapple", arabic: "أناناس", emoji: "🍍" },
      { word: "pants", arabic: "بنطال", emoji: "👖" },
      { word: "Penguin", arabic: "بطريق", emoji: "🐧" },
      { word: "Passport", arabic: "جواز سفر", emoji: "🛂" }
    ]
  },
  {
    id: "u1-letter-q",
    type: "letter-detail",
    unit: 1,
    title: "The Letter Q, q",
    letter: "Q, q",
    description: "استمع لنطق الكلمات التي تبدأ بحرف الـ Q",
    examples: [
      { word: "Qatar", arabic: "قطر", emoji: "🇶🇦" },
      { word: "Quarter", arabic: "ربع", emoji: "🪙" },
      { word: "Quad", arabic: "دراجة رباعية", emoji: "🏍️" },
      { word: "Question mark", arabic: "علامة استفهام", emoji: "❓" },
      { word: "Queue", arabic: "طابور", emoji: "🚶‍♂️🚶‍♀️" }
    ]
  },
  {
    id: "u1-letter-r",
    type: "letter-detail",
    unit: 1,
    title: "The Letter R, r",
    letter: "R, r",
    description: "استمع لنطق الكلمات التي تبدأ بحرف الـ R",
    examples: [
      { word: "Rabbit", arabic: "أرنب", emoji: "🐰" },
      { word: "Rocket", arabic: "صاروخ", emoji: "🚀" },
      { word: "Ring", arabic: "خاتم", emoji: "💍" },
      { word: "Rose", arabic: "وردة", emoji: "🌹" },
      { word: "Ruler", arabic: "مسطرة", emoji: "📏" }
    ]
  },
  {
    id: "u1-letter-s",
    type: "letter-detail",
    unit: 1,
    title: "The Letter S, s",
    letter: "S, s",
    description: "استمع لنطق الكلمات التي تبدأ بحرف الـ S",
    examples: [
      { word: "Sun", arabic: "شمس", emoji: "☀️" },
      { word: "Star", arabic: "نجمة", emoji: "⭐️" },
      { word: "Spoon", arabic: "ملعقة", emoji: "🥄" },
      { word: "Ship", arabic: "سفينة", emoji: "🚢" },
      { word: "Soup", arabic: "حساء", emoji: "🍜" }
    ]
  },
  {
    id: "u1-letter-t",
    type: "letter-detail",
    unit: 1,
    title: "The Letter T, t",
    letter: "T, t",
    description: "استمع لنطق الكلمات التي تبدأ بحرف الـ T",
    examples: [
      { word: "Tomato", arabic: "طماطم", emoji: "🍅" },
      { word: "Tiger", arabic: "نمر", emoji: "🐅" },
      { word: "Tree", arabic: "شجرة", emoji: "🌳" },
      { word: "Table", arabic: "طاولة", emoji: "🪵" },
      { word: "Thunder", arabic: "رعد", emoji: "⚡" }
    ]
  },
  {
    id: "u1-letter-u",
    type: "letter-detail",
    unit: 1,
    title: "The Letter U, u",
    letter: "U, u",
    description: "استمع لنطق الكلمات التي تبدأ بحرف الـ U",
    examples: [
      { word: "Umbrella", arabic: "مظلة", emoji: "🌂" },
      { word: "University", arabic: "جامعة", emoji: "🏫" },
      { word: "Uniform", arabic: "زي رسمي", emoji: "👔" },
      { word: "Underwear", arabic: "ملابس داخلية", emoji: "🩲" },
      { word: "Up", arabic: "أعلى", emoji: "⬆️" }
    ]
  },
  {
    id: "u1-letter-v",
    type: "letter-detail",
    unit: 1,
    title: "The Letter V, v",
    letter: "V, v",
    description: "استمع لنطق الكلمات التي تبدأ بحرف الـ V",
    examples: [
      { word: "Vegetables", arabic: "خضار", emoji: "🥗" },
      { word: "Vase", arabic: "مزهرية", emoji: "🏺" },
      { word: "Vacuum", arabic: "مكنسة كهربائية", emoji: "🧹" },
      { word: "Van", arabic: "شاحنة صغيرة", emoji: "🚐" },
      { word: "Volcano", arabic: "بركان", emoji: "🌋" }
    ]
  },
  {
    id: "u1-letter-w",
    type: "letter-detail",
    unit: 1,
    title: "The Letter W, w",
    letter: "W, w",
    description: "استمع لنطق الكلمات التي تبدأ بحرف الـ W (ينطق مثل الواو)",
    examples: [
      { word: "Wolf", arabic: "ذئب", emoji: "🐺" },
      { word: "Whale", arabic: "حوت", emoji: "🐋" },
      { word: "Window", arabic: "نافذة", emoji: "🪟" },
      { word: "Watch", arabic: "ساعة يد", emoji: "⌚" },
      { word: "Water", arabic: "ماء", emoji: "💧" }
    ]
  },
  {
    id: "u1-letter-x",
    type: "letter-detail",
    unit: 1,
    title: "The Letter X, x",
    letter: "X, x",
    description: "استمع لنطق الكلمات التي تحتوي على حرف الـ X",
    examples: [
      { word: "X-ray", arabic: "الأشعة السينية", emoji: "🩻" },
      { word: "Box", arabic: "صندوق", emoji: "📦" },
      { word: "Fox", arabic: "ثعلب", emoji: "🦊" }
    ]
  },
  {
    id: "u1-letter-y",
    type: "letter-detail",
    unit: 1,
    title: "The Letter Y, y",
    letter: "Y, y",
    description: "استمع لنطق الكلمات التي تبدأ بحرف الـ Y (ينطق مثل الياء)",
    examples: [
      { word: "Yacht", arabic: "يخت", emoji: "🛥️" },
      { word: "Yoga", arabic: "يوغا", emoji: "🧘‍♀️" },
      { word: "Yogurt", arabic: "زبادي", emoji: "🥛" },
      { word: "Yarn", arabic: "خيوط", emoji: "🧶" },
      { word: "Yemen", arabic: "اليمن", emoji: "🇾🇪" }
    ]
  },
  {
    id: "u1-letter-z",
    type: "letter-detail",
    unit: 1,
    title: "The Letter Z, z",
    letter: "Z, z",
    description: "استمع لنطق الكلمات التي تبدأ بحرف الـ Z",
    examples: [
      { word: "Zebra", arabic: "حمار وحشي", emoji: "🦓" },
      { word: "Zoo", arabic: "حديقة حيوان", emoji: "🦁" },
      { word: "Zipper", arabic: "سحاب الملابس", emoji: "🤐" },
      { word: "Zero", arabic: "صفر", emoji: "0️⃣" },
      { word: "Zucchini", arabic: "كوسة", emoji: "🥒" }
    ]
  },

  // SOUNDS INTRO
  {
    id: "u1-sounds-intro",
    type: "sounds-intro",
    unit: 1,
    title: "درس الأصوات في اللغة الإنجليزية",
    subtitle: "(English Sounds)",
    bullets: [
      "لدينا 26 حرفاً، ولكن يوجد حوالي 44 صوتاً مختلفاً في اللغة الإنجليزية!",
      "هذا يعني أن بعض الأحرف يمكن أن تصدر أكثر من صوت واحد (مثل حرف C).",
      "وبعض الأصوات قد تُكتب بأكثر من حرف (مثل الحروف المركبة sh, ch).",
      "تنقسم الأصوات في اللغة الإنجليزية إلى قسمين هامين:",
      "1. الأصوات المركبة (Digraphs) - حرفان يندمجان ليُنطقا كصوتٍ واحد.",
      "2. الحروف الصامتة (Silent Letters) - حروفٌ تُكتب ولا تُلفظ في مواضع معينة."
    ]
  },

  // COMPOUND SOUNDS (CH, SH, PH, TH)
  {
    id: "u1-compound-sounds",
    type: "sounds-compound",
    unit: 1,
    title: "أصوات الحروف المركبة (Compound Sounds)",
    description: "حرفان يندمجان معاً ليصدرا صوتاً واحداً جديداً بالكامل. انقر لسماع النطق والتدرب!",
    sounds: [
      {
        sound: "Ch",
        arabicPron: "تنطق (تـش)",
        examples: [
          { english: "chair", arabic: "كرسي" },
          { english: "Match", arabic: "مباراة" }
        ]
      },
      {
        sound: "sh",
        arabicPron: "تنطق (شـ)",
        examples: [
          { english: "fish", arabic: "سمكة" },
          { english: "She", arabic: "هي" }
        ]
      },
      {
        sound: "ph",
        arabicPron: "تنطق (فـ)",
        examples: [
          { english: "phone", arabic: "جوال / هاتف" },
          { english: "photo", arabic: "صورة" }
        ]
      },
      {
        sound: "Th (voicing 1)",
        arabicPron: "تنطق (ذ)",
        examples: [
          { english: "this, that, those, these", arabic: "أسماء الإشارة" },
          { english: "the", arabic: "أداة التعريف" }
        ]
      },
      {
        sound: "th (voicing 2)",
        arabicPron: "تنطق (ثـ)",
        examples: [
          { english: "Think", arabic: "يفكر" },
          { english: "Three", arabic: "ثلاثة" }
        ]
      }
    ]
  },

  // SILENT LETTERS
  {
    id: "u1-silent-letters",
    type: "silent-letters",
    unit: 1,
    title: "الحروف الصامتة (Silent Letters)",
    description: "حروف نكتبها داخل الكلمة ولكن لا ننطقها أبداً في هذه الحالات!",
    sounds: [
      {
        sound: "E (في آخر الكلمة)",
        arabicPron: "غالباً لا ينطق، ولكنه يجعل الحرف المتحرك قبله طويلاً",
        examples: [
          { english: "Make", arabic: "يصنع (تنطق ميك دون تلفظ الـ E)" },
          { english: "Bike", arabic: "دراجة" }
        ]
      },
      {
        sound: "Gh",
        arabicPron: "صامتة غالباً إذا جاءت بعد i وقبل t. وقد تنطق (ف) في كلمات أخرى",
        examples: [
          { english: "Light", arabic: "ضوء / خفيف (صامتة)" },
          { english: "night", arabic: "ليل" },
          { english: "although", arabic: "بالرغم من" },
          { english: "Cough", arabic: "يكح (تنطق فـ)" },
          { english: "Laugh", arabic: "يضحك (تنطق فـ)" }
        ]
      },
      {
        sound: "K (قبل حرف N)",
        arabicPron: "تكون صامتة تماماً إذا جاءت في بداية الكلمة وقبل حرف N",
        examples: [
          { english: "Know", arabic: "يعلم (تنطق نو)" },
          { english: "Knife", arabic: "سكين (تنطق نايف)" }
        ]
      },
      {
        sound: "W (قبل حرف R)",
        arabicPron: "لا تنطق مطلقاً إذا جاء بعدها حرف r في بداية الكلمة",
        examples: [
          { english: "Write", arabic: "يكتب (تنطق رايت)" },
          { english: "Wrong", arabic: "خاطئ / خطأ (تنطق رونغ)" }
        ]
      }
    ]
  },

  // UNIT 1 QUIZ - Q1
  {
    id: "u1-quiz",
    type: "quiz",
    unit: 1,
    title: "اختبار الوحدة الأولى - السؤال 1: استماع وتمييز",
    quizData: {
      question: "Listen to the sound. Which letter is this?",
      arabicQuestion: "استمع إلى الصوت المسموع. أي حرف هو هذا؟",
      audioText: "A",
      options: [
        "A, a",
        "E, e",
        "I, i",
        "O, o"
      ],
      correctAnswer: "A, a",
      hint: "هذا هو صوت الحرف المتحرك الأول في الأبجدية الإنجليزية: A."
    }
  },
  // UNIT 1 QUIZ - Q2
  {
    id: "u1-quiz-2",
    type: "quiz",
    unit: 1,
    title: "اختبار الوحدة الأولى - السؤال 2: استماع وتمييز",
    quizData: {
      question: "Listen to the sound. Which letter is this?",
      arabicQuestion: "استمع إلى الصوت المسموع. أي حرف هو هذا؟",
      audioText: "K",
      options: [
        "K, k",
        "C, c",
        "Q, q",
        "G, g"
      ],
      correctAnswer: "K, k",
      hint: "هذا هو صوت حرف K المستخدم في كلمة Key."
    }
  },
  // UNIT 1 QUIZ - Q3
  {
    id: "u1-quiz-3",
    type: "quiz",
    unit: 1,
    title: "اختبار الوحدة الأولى - السؤال 3: استماع للأصوات المركبة",
    quizData: {
      question: "Listen to the compound sound. Which letters make this sound?",
      arabicQuestion: "استمع إلى الصوت المركب المسموع. أي من الحروف المركبة التالية يصدر هذا الصوت؟",
      audioText: "sh",
      options: [
        "ch",
        "sh",
        "ph",
        "th"
      ],
      correctAnswer: "sh",
      hint: "تذكر أن صوت الشين (شـ) كما في كلمة She ينتج عن دمج حرفي s و h معاً."
    }
  },
  // UNIT 1 QUIZ - Q4
  {
    id: "u1-quiz-4",
    type: "quiz",
    unit: 1,
    title: "اختبار الوحدة الأولى - السؤال 4: استماع للأصوات المركبة",
    quizData: {
      question: "Listen to the compound sound. Which letters make this sound?",
      arabicQuestion: "استمع إلى الصوت المركب المسموع. أي من الحروف المركبة التالية يصدر هذا الصوت؟",
      audioText: "chair",
      options: [
        "sh",
        "ch",
        "ph",
        "th"
      ],
      correctAnswer: "ch",
      hint: "صوت الـ (تْشـ) كما في كلمة chair ينتج عن دمج حرفي c و h معاً."
    }
  },
  // UNIT 1 QUIZ - Q5
  {
    id: "u1-quiz-5",
    type: "quiz",
    unit: 1,
    title: "اختبار الوحدة الأولى - السؤال 5: استماع للأصوات المركبة",
    quizData: {
      question: "Listen to the compound sound. Which letters make this sound?",
      arabicQuestion: "استمع إلى الصوت المركب المسموع (فـ). أي من الحروف المركبة التالية يصدر هذا الصوت؟",
      audioText: "phone",
      options: [
        "ph",
        "ch",
        "sh",
        "th"
      ],
      correctAnswer: "ph",
      hint: "صوت حرف الفاء (فـ) يمكن تمثيله بالحرفين المركبين ph كما في كلمة phone."
    }
  },



    // UNIT 2 VIDEO
  {
    id: "u2-video",
    type: "video",
    unit: 2,
    title: "مقدمة مرئية عن الوحدة",
    videoUrl: "https://youtube.com/"
  },

  // UNIT 2 INTRO
  {
    id: "u2-intro",

    type: "intro",
    unit: 2,

    title: "Unit 2: Verb to Be",
    subtitle: "الوحدة الثانية: فعل الكينونة",
    description: "فعل to be هو أهم فعل في اللغة الإنجليزية وبمثابة العمود الفقري لبناء الجمل والتعبير عن النفس والآخرين",
    bullets: [
      "التعرف على أشكال فعل الكينونة في المضارع (am, is, are)",
      "كيف تقول: أنا أكون، هو يكون، نحن نكون بشكل صحيح",
      "استخدام to be لوصف الأشخاص والوظائف والمشاعر",
      "كيف تنفي الجملة بإضافة not فقط",
      "كيف تصنع سؤالاً بوضع الفعل في البداية"
    ]
  },

  // UNIT 2 SHAPES OF VERB TO BE
  {
    id: "u2-shapes",
    type: "grammar-explanation",
    unit: 2,
    title: "أشكال فعل الكينونة (Shapes of to be)",
    description: "يتغير شكل الفعل في زمن المضارع ليناسب الضمير أو الاسم الذي يتحدث عنه:",
    bullets: [
      "الضمير ( I ) يناسبه الفعل ➔ am [أنا أكون]",
      "الضمائر المفردة (he, she, it) أو أي اسم مفرد يناسبه الفعل ➔ is [يكون / تكون]",
      "الضمائر الجمع (you, they, we) أو أي اسم جمع يناسبه الفعل ➔ are [تكون / يكونون / نكون]"
    ],
    note: "تذكر: في اللغة الإنجليزية، يجب أن تحتوي كل جملة على فعل، ولا يمكن الاستغناء عن am / is / are!"
  },

  // UNIT 2 TABLES - POSITIVE
  {
    id: "u2-table-positive",
    type: "grammar-table",
    unit: 2,
    title: "1. استخدام فعل to be في الجمل المثبتة (Positive)",
    description: "تكوين الجملة: Subject (الفاعل) + to be (am / is / are) + Complement (مكمل الجملة)",
    grammarRows: [
      { subject: "I", verb: "am", object: "a student", arabic: "أنا طالب" },
      { subject: "he", verb: "is", object: "happy", arabic: "هو سعيد" },
      { subject: "Khalid", verb: "is", object: "a teacher", arabic: "خالد معلم" },
      { subject: "Fatima", verb: "is", object: "a doctor", arabic: "فاطمة طبيبة" },
      { subject: "It", verb: "is", object: "small", arabic: "إنه صغير" },
      { subject: "you", verb: "are", object: "crazy", arabic: "أنت مجنون" },
      { subject: "they", verb: "are", object: "a family", arabic: "هم عائلة" },
      { subject: "we", verb: "are", object: "friends", arabic: "نحن أصدقاء" }
    ]
  },

  // UNIT 2 TABLES - NEGATIVE
  {
    id: "u2-table-negative",
    type: "grammar-table",
    unit: 2,
    title: "2. نفي جمل فعل الكينونة (Negative)",
    description: "للنفي ببساطة، ضع كلمة (not) مباشرة بعد فعل الكينونة to be (am / is / are)!",
    grammarRows: [
      { subject: "I", verb: "am not", object: "a student", arabic: "أنا لست طالباً" },
      { subject: "he", verb: "is not", object: "happy", arabic: "هو ليس سعيداً" },
      { subject: "Khalid", verb: "is not", object: "a teacher", arabic: "خالد ليس معلماً" },
      { subject: "Fatima", verb: "is not", object: "a doctor", arabic: "فاطمة ليست طبيبة" },
      { subject: "It", verb: "is not", object: "small", arabic: "إنه ليس صغيراً" },
      { subject: "you", verb: "are not", object: "crazy", arabic: "أنت لست مجنوناً" },
      { subject: "they", verb: "are not", object: "a family", arabic: "هم ليسوا عائلة" },
      { subject: "we", verb: "are not", object: "friends", arabic: "نحن لسنا أصدقاء" }
    ]
  },

  // UNIT 2 TABLES - QUESTION
  {
    id: "u2-table-question",
    type: "grammar-table",
    unit: 2,
    title: "3. استخدام فعل to be في الأسئلة (Questions)",
    description: "للسؤال: اسحب الفعل (Am / Is / Are) وضعه في بداية الجملة تماماً قبل الفاعل، ثم أضف علامة الاستفهام ؟",
    grammarRows: [
      { subject: "Am", verb: "I", object: "a student ?", arabic: "هل أنا طالب؟" },
      { subject: "Is", verb: "he", object: "happy ?", arabic: "هل هو سعيد؟" },
      { subject: "Is", verb: "Khalid", object: "a teacher ?", arabic: "هل خالد معلم؟" },
      { subject: "Is", verb: "Fatima", object: "a doctor ?", arabic: "هل فاطمة طبيبة؟" },
      { subject: "Is", verb: "It", object: "small ?", arabic: "هل هو صغير؟" },
      { subject: "Are", verb: "you", object: "crazy ?", arabic: "هل أنت مجنون؟" },
      { subject: "Are", verb: "they", object: "a family ?", arabic: "هل هم عائلة؟" },
      { subject: "Are", verb: "we", object: "friends ?", arabic: "هل نحن أصدقاء؟" }
    ]
  },

  // UNIT 2 QUIZ - Q1
  {
    id: "u2-quiz",
    type: "quiz",
    unit: 2,
    title: "اختبار الوحدة الثانية - السؤال 1: فعل الكينونة",
    quizData: {
      question: "Fill in the blank: 'Fatima and Sarah ________ friends.'",
      arabicQuestion: "اختر الكلمة المناسبة للفراغ: 'Fatima and Sarah ________ friends.'",
      options: [
        "am",
        "is",
        "are",
        "be"
      ],
      correctAnswer: "are",
      hint: "الفاعل هنا مثنى (جمع غائب يعوض عنه بالضمير they)، لذلك نستخدم الفعل are الذي يناسب الجمع."
    }
  },
  // UNIT 2 QUIZ - Q2
  {
    id: "u2-quiz-2",
    type: "quiz",
    unit: 2,
    title: "اختبار الوحدة الثانية - السؤال 2: نفي فعل الكينونة",
    quizData: {
      question: "What is the correct negative form of 'He is happy'?",
      arabicQuestion: "ما هي صيغة النفي الصحيحة لجملة 'He is happy'؟",
      options: [
        "He are not happy",
        "He not is happy",
        "He is not happy",
        "He am not happy"
      ],
      correctAnswer: "He is not happy",
      hint: "للنفي، نضع not مباشرة بعد فعل الكينونة is."
    }
  },
  // UNIT 2 QUIZ - Q3
  {
    id: "u2-quiz-3",
    type: "quiz",
    unit: 2,
    title: "اختبار الوحدة الثانية - السؤال 3: الأسئلة بفعل الكينونة",
    quizData: {
      question: "Choose the correct question: '________ you ready?'",
      arabicQuestion: "اختر السؤال الصحيح لتكملة: '________ you ready؟'",
      options: [
        "Am",
        "Is",
        "Are",
        "Be"
      ],
      correctAnswer: "Are",
      hint: "مع الضمير you نستخدم فعل الكينونة are في الأسئلة ونضعه بالبداية."
    }
  },

 

   // UNIT 3 VIDEO
  {
    id: "u3-video",
    type: "video",
    unit: 3,
    title: "مقدمة مرئية عن الوحدة",
    videoUrl: "https://youtube.com/"
  },

  // UNIT 3 INTRO
  {
    id: "u3-intro",

    type: "intro",
    unit: 3,

    title: "Unit 3: Parts of Speech",
    subtitle: "الوحدة الثالثة: أجزاء الكلام الأساسية",
    description: "أجزاء الكلام هي تصنيفات للكلمات حسب موقعها ودورها الذي تؤديه في الجملة الإنجليزية",
    bullets: [
      "التعرف على المكونات الأساسية للكلام (الاسم، الفعل، الضمير... إلخ)",
      "فهم وتحديد الأسماء (Nouns) للأشخاص والأماكن والأفكار",
      "التمييز بين أفعال الحركة (Action Verbs) وأفعال الحالة (State Verbs)",
      "تعلم الضمائر (Pronouns) لعدم تكرار الأسماء بشكل ركيك",
      "استيعاب حروف الجر (Prepositions) لتحديد العلاقات والموقع، والفرق بين الصفة والحال"
    ]
  },

  // UNIT 3 DETAILS: PART OF SPEECH TYPES
  {
    id: "u3-types",
    type: "grammar-explanation",
    unit: 3,
    title: "المكونات الأساسية للكلام (Parts of Speech)",
    description: "تنقسم الكلمات في الجملة الإنجليزية إلى عدة أنواع رئيسية لها وظيفة محددة:",
    bullets: [
      "الأسماء (Nouns): لتسمية الأشخاص أو الأماكن أو الأشياء أو الأفكار.",
      "الضمائر (Pronouns): للتعويض عن اسم وتأخذ مكانه لمنع التكرار (مثل He, She).",
      "الأفعال (Verbs): الكلمة التي تعبر عن الحدث أو الحركة أو الحالة.",
      "الصفات (Adjectives): تصف الاسم وتوضحه (مثل Tall, Happy).",
      "الأحوال (Adverbs): تصف الفعل بكيفية أو درجة حدوثه (مثل Slowly, Quickly).",
      "حروف الجر (Prepositions): تربط الكلمات وتوضح العلاقة بينها (مثل In, On, Under).",
      "أدوات العطف (Conjunctions): تربط الكلمات أو الجمل ببعضها (مثل and, But)."
    ]
  },

  // NOUNS SPECIFIC
  {
    id: "u3-nouns",
    type: "letter-detail",
    unit: 3,
    title: "1. الأسماء (Nouns)",
    description: "الاسم هو أي كلمة تستخدم لتسمية شخص، كائن، مكان، جماد أو فكرة ومشاعر",
    examples: [
      { word: "Ahmad", arabic: "أحمد (أشخاص - Name)", emoji: "🧔" },
      { word: "Teacher", arabic: "معلم (أشخاص - Job)", emoji: "🧑‍🏫" },
      { word: "school", arabic: "مدرسة / مكان", emoji: "🏫" },
      { word: "Makkah", arabic: "مكة المكرمة / مدينة", emoji: "🕌" },
      { word: "book", arabic: "كتاب / جماد", emoji: "📖" },
      { word: "love", arabic: "الحب / مشاعر وفكرة", emoji: "❤️" },
      { word: "honesty", arabic: "الصدق والأمانة", emoji: "🤝" }
    ]
  },

  // VERBS SPECIFIC
  {
    id: "u3-verbs",
    type: "letter-detail",
    unit: 3,
    title: "2. الأفعال (Verbs)",
    description: "الفعل هو الكلمة التي تدل على حدث أو نشاط أو حالة، وينقسم إلى أفعال حركة وأفعال حالة:",
    note: "أفعال الحركة (Action Verbs) تدل على حركة جسدية واضحة. أفعال الحالة (State Verbs) تعبر عن شعور أو رأي.",
    examples: [
      { word: "Run", arabic: "يركض (حركة)", emoji: "🏃" },
      { word: "Eat", arabic: "يأكل (حركة)", emoji: "🍔" },
      { word: "Sing", arabic: "يغني (حركة)", emoji: "🎤" },
      { word: "Write", arabic: "يكتب (حركة)", emoji: "✏️" },
      { word: "Love", arabic: "يحب (حالة/شعور)", emoji: "💖" },
      { word: "Think", arabic: "يفكر (حالة/عقل)", emoji: "💭" },
      { word: "Feel", arabic: "يشعر (حالة)", emoji: "☺️" }
    ]
  },

  // PRONOUNS SPECIFIC
  {
    id: "u3-pronouns",
    type: "letter-detail",
    unit: 3,
    title: "3. الضمائر (Pronouns)",
    description: "تأخذ مكان الاسم وتمنع التكرار الركيك. مثال: بدلاً من قول 'Ahmad is teacher. Ahmad is smart' نقول: 'Ahmad is a teacher, he is smart.'",
    letter: "Pronouns",
    examples: [
  { word: "I", arabic: "أنا", emoji: "🧑" },
  { word: "You", arabic: "أنت / أنتم / أنتن", emoji: "👈" },
  { word: "He", arabic: "هو", emoji: "🧔" },
  { word: "She", arabic: "هي", emoji: "👩" },
  { word: "It", arabic: "هو / هي / شيء", emoji: "🐾" },
  { word: "We", arabic: "نحن", emoji: "👨‍👩‍👧" },
  { word: "They", arabic: "هم", emoji: "👥" }
]
  },

  // PREPOSITIONS SPECIFIC
  {
    id: "u3-prepositions",
    type: "letter-detail",
    unit: 3,
    title: "4. حروف الجر (Prepositions)",
    description: "تربط الكلمات ببعضها في الجملة وتوضح العلاقة المكانية أو الزمانية والاتجاهات بين الأشياء. انقر للفظ حروف الجر!",
    note: "مثال ربط: 'The book is on the table' ➔ تم ربط الكتاب بالطاولة بحرف الجر 'on' (على).",
    examples: [
      { word: "On", arabic: "على / فوق ملامس للسطح", emoji: "📦" },
      { word: "In", arabic: "في / بداخل", emoji: "📥" },
      { word: "Near", arabic: "بالقرب من", emoji: "🚶‍♂️..🚗" },
      { word: "Between", arabic: "بين شيئين", emoji: "📦⚽📦" },
      { word: "Above", arabic: "فوق / أعلى بدون تلامس", emoji: "☁️" },
      { word: "In front of", arabic: "أمام", emoji: "🧍‍♂️⏹️" },
      { word: "Behind", arabic: "خلف", emoji: "⏹️🧍‍♂️" },
      { word: "Next to", arabic: "بجانب تماماً", emoji: "👫" },
      { word: "Under", arabic: "تحت / أسفل", emoji: "👇" }
    ]
  },

  // ADJECTIVES
  {
    id: "u3-adjectives",
    type: "letter-detail",
    unit: 3,
    title: "5. الصفات (Adjectives)",
    description: "الصفة (Adjective) تصف الاسم دائماً وتوضحه (مثل الشكل، اللون، الحجم، أو المشاعر). وتأتي عامةً قبل الاسم أو بعد فعل الكينونة.",
    letter: "Adjectives",
    examples: [
      { word: "Tall", arabic: "طويل", emoji: "🧍" },
      { word: "Red", arabic: "أحمر", emoji: "🔴" },
      { word: "Beautiful", arabic: "جميل", emoji: "✨" },
      { word: "Happy", arabic: "سعيد", emoji: "😊" }
    ]
  },

  // ADVERBS
  {
    id: "u3-adverbs",
    type: "letter-detail",
    unit: 3,
    title: "6. الأحوال / الظروف (Adverbs)",
    description: "الحال (Adverb) يصف الفعل بكيفية ودرجة حدوثه، أو يصف طريقة حدوث الحدث. وغالباً ما ينتهي باللاحقة (-ly).",
    letter: "Adverbs",
    examples: [
      { word: "Slowly", arabic: "ببطء", emoji: "🐢" },
      { word: "Quickly", arabic: "بسرعة", emoji: "⚡" },
      { word: "Happily", arabic: "بسعادة", emoji: "😊" },
      { word: "Carefully", arabic: "بعناية", emoji: "🧠" }
    ]
  },

  // CONJUNCTION SPECIFIC
  {
    id: "u3-conjunction",
    type: "letter-detail",
    unit: 3,
    title: "7. أدوات العطف (Conjunctions)",
    description: "كلمات تربط بين الكلمات أو الجمل أو الأفكار في نفس السياق لمنع التكرار وصياغة جمل بليغة.",
    letter: "Conjunctions",
    examples: [
      { word: "and", arabic: "و", emoji: "🔗" },
      { word: "or", arabic: "أو", emoji: "🔀" },
      { word: "but", arabic: "لكن", emoji: "⚖️" }
    ]
  },

  // UNIT 3 QUIZ - Q1
  {
    id: "u3-quiz",
    type: "quiz",
    unit: 3,
    title: "اختبار الوحدة الثالثة - السؤال 1: أجزاء الكلام",
    quizData: {
      question: "In the sentence 'She speaks English beautifully', what part of speech is 'beautifully'?",
      arabicQuestion: "في جملة 'She speaks English beautifully'، ما هو جزء الكلام للكلمة 'beautifully'؟",
      options: [
        "Noun (اسم)",
        "Verb (فعل)",
        "Adjective (صفة)",
        "Adverb (حال)"
      ],
      correctAnswer: "Adverb (حال)",
      hint: "كلمة beautifully وصفت طريقة تكلمها (وصفت الفعل speaks) وتنتهي باللاحقة ly."
    }
  },
  // UNIT 3 QUIZ - Q2
  {
    id: "u3-quiz-2",
    type: "quiz",
    unit: 3,
    title: "اختبار الوحدة الثالثة - السؤال 2: حروف الجر",
    quizData: {
      question: "In the sentence 'The book is under the table', what is the preposition?",
      arabicQuestion: "في جملة 'The book is under the table'، ما هو حرف الجر؟",
      options: [
        "The",
        "book",
        "is",
        "under"
      ],
      correctAnswer: "under",
      hint: "حرف الجر 'under' يعني تحت ويعبر عن العلاقة المكانية بين الكتاب والطاولة."
    }
  },
  // UNIT 3 QUIZ - Q3
  {
    id: "u3-quiz-3",
    type: "quiz",
    unit: 3,
    title: "اختبار الوحدة الثالثة - السؤال 3: أدوات العطف",
    quizData: {
      question: "We use '________' to connect two opposite ideas, like: 'I am tired, ________ I am happy.'",
      arabicQuestion: "نستخدم أداة العطف المناسبة لربط فكرتين متناقضتين: 'I am tired, ________ I am happy.'",
      options: [
        "and",
        "but",
        "because",
        "or"
      ],
      correctAnswer: "but",
      hint: "أداة العطف 'but' تعني 'لكن' وتستخدم للاستدراك والتعارض."
    }
  },

 

   // UNIT 4 VIDEO
  {
    id: "u4-video",
    type: "video",
    unit: 4,
    title: "مقدمة مرئية عن الوحدة",
    videoUrl: "https://youtube.com/"
  },

  // UNIT 4 INTRO
  {
    id: "u4-intro",

    type: "intro",
    unit: 4,

    title: "Unit 4: Simple Sentence Structure",
    subtitle: "الوحدة الرابعة: بناء الجملة البسيطة والأدوات",
    description: "تصف هذه الوحدة كيفية صياغة جملة مفيدة ومرتبة باللغة الإنجليزية واستخدام أدوات التعريف والتنكير بشكل مثالي",
    bullets: [
      "معرفة الترتيب الصحيح لبناء الجملة الإنجليزية فاعل ثم فعل (Subject - Verb - Object)",
      "كيف نفرق بين المفعول به (Object) وبين المكمل (Complement)",
      "تعلم استخدام أدوات التنكير (a, an) عند التحدث عن مفرد غير حدد",
      "تعلم متى نستخدم أداة التعريف (the) للشيء المحدد والفريد",
      "استخدام أسماء الإشارة للمفرد القريب والبعيد (This & That)"
    ]
  },

  // SENTENCE ORDER
  {
    id: "u4-sentence-order",
    type: "grammar-explanation",
    unit: 4,
    title: "ترتيب الكلمات في الجملة الإنجليزية (Sentence Order)",
    description: "القاعدة الذهبية: تبدأ الجملة دائماً بالفاعل (Subject) ثم يتبعه الفعل (Verb) خلافاً للغة العربية التي قد تبدأ بفعل.",
    bullets: [
      "الفاعل (Subject): يمثل من يقوم بالحدث، وقد يكون اسماً صريحاً أو ضميراً ينوب عنه (مثل: Faris, we, a cat).",
      "الفعل (Verb): يصف الحدث الذي يقوم به الفاعل أو يعبر عن حالته (مثل: plays, walks, eats, is).",
      "المفعول به (Object): هو المستقبل المباشر لتأثير الفعل (مثل تفاحة في جملة: 'I ate an apple').",
      "المكمّل (Complement): يصف الفاعل ويحدده، ويأتي غالباً بعد أفعال الكينونة (مثل معلم في جملة: 'He is a teacher')."
    ]
  },

  // GRAMMAR WORK TABLE FOR S-V-O
  {
    id: "u4-svo-table",
    type: "grammar-table",
    unit: 4,
    title: "أمثلة على بناء الجمل الإنجليزية (S + V + O/C)",
    description: "تأمل الترتيب من اليسار إلى اليمين: الفاعل أولاً ثم الفعل ثم التكملة أو المفعول به",
    grammarRows: [
      { subject: "I (فاعل)", verb: "play (فعل)", object: "football (مفعول به)", arabic: "ألعب كرة القدم" },
      { subject: "He (فاعل)", verb: "is (فعل كينونة)", object: "smart (صفة تكملة)", arabic: "هو ذكي" },
      { subject: "She (فاعل)", verb: "loves (فعل)", object: "her mom (مفعول به)", arabic: "هي تحب أمها" },
      { subject: "They (فاعل)", verb: "are (فعل)", object: "a big family (تكملة اسمية)", arabic: "هم عائلة كبيرة" }
    ]
  },

  // ARTICLES DEFINITE & INDEFINITE
  {
    id: "u4-articles",
    type: "grammar-explanation",
    unit: 4,
    title: "أدوات التعريف والتنكير (Articles)",
    description: "نستخدم الأدوات لنبين ما إذا كان الاسم الذي بعدها محدداً ومعروفاً لدى المستمع أو غير محدد وعام:",
    bullets: [
      "أدوات التنكير (a, an): تُستعمل للمفرد النكرة غير المحدد (مثال: I read a book yesterday - لم أحدد أي كتاب).",
      "أداة التعريف (the): للمفرد أو الجمع المحدد، أو للأشياء الفريدة، أو ما تم ذكره سابقاً (مثال: The sun rises - الشمس فريدة ومعروفة).",
      "أمثلة توضيحية: The book is on the table (الكتاب معرف ومحدد ومكانه معلوم للمستمع)."
    ]
  },

  // DIFFERENCE BETWEEN A & AN
  {
    id: "u4-a-vs-an",
    type: "sounds-compound",
    unit: 4,
    title: "متى نستخدم A ومتى نستخدم AN؟",
    description: "تعتمد القاعدة كلياً على الصوت الأول من الكلمة بعد الأداة، وليس على الحرف المكتوب نفسه! صممت هذه القاعدة لتسهيل النطق ومنع تداخل الحروف الصوتية.",
    sounds: [
      {
        sound: "نستخدم a",
        arabicPron: "إذا كانت الكلمة تبدأ بصوت لفظي ساكن (Consonant Sound) بغض النظر عن الحرف المكتوب (مثل صوت الـ 'يـ' في كلمة University).",
        examples: [
          { english: "a car", arabic: "سيارة (تبدأ بصوت ساكن)" },
          { english: "a book", arabic: "كتاب (تبدأ بصوت ساكن)" },
          { english: "a university", arabic: "جامعة (تبدأ بحرف علّة U ولكنه يُلفظ بصوت ساكن يشبه حرف Y)" }
        ]
      },
      {
        sound: "نستخدم an",
        arabicPron: "إذا كانت الكلمة تبدأ بصوت لفظي علّة (Vowel Sound) كصوت الألف المفتوحة أو المكسورة (أ / Uh / Ah / Eh) بغض النظر عن الحرف المكتوب.",
        examples: [
          { english: "an apple", arabic: "تفاحة (تبدأ بصوت علّة)" },
          { english: "an hour", arabic: "ساعة (تبدأ بحرف ساكن H صامت، والصوت اللفظي الأول يبدأ بحرف علّة O)" },
          { english: "an umbrella", arabic: "مظلة (تُلفظ بصوت علّة 'اَمبريلا')" }
        ]
      }
    ],
    note: "تذكر دائماً العبرة بالنطق (الصوت المسموع) وليست بالكتابة! كلمة hour تبدأ بحرف H ساكن ولكنه صامت، لذا نستخدم an لأننا نلفظ أولاً صوت علّة. بينما كلمة university تبدأ بحرف U علّة ولكنه يُلفظ 'يو' (صوت ساكن)، لذا نستخدم a."
  },

  // MULTIPLE SENTENCES WITH ARTICLES
  {
    id: "u4-sentences-with-articles",
    type: "grammar-table",
    unit: 4,
    title: "صنع جمل بسيطة ومناسبة مع الأدوات",
    description: "تطبيق عملي لقوالب الجمل مع استخدام الأدوات المناسبة:",
    grammarRows: [
      { subject: "This", verb: "is", object: "a beautiful car", arabic: "هذه سيارة جميلة" },
      { subject: "The boy", verb: "is", object: "a smart student", arabic: "الولد طالب ذكي" },
      { subject: "I", verb: "kicked", object: "the ball", arabic: "ركلت الكرة (كرة محددة)" },
      { subject: "She", verb: "ate", object: "an orange", arabic: "أكلت برتقالة" }
    ]
  },

  // DEMONSTRATIVE PRONOUNS
  {
    id: "u4-demonstrative",
    type: "sounds-compound",
    unit: 4,
    title: "أسماء الإشارة (Demonstratives)",
    description: "أسماء نستخدمها للإشارة للأشخاص أو الأشياء (مفرد وجمع / قريب وبعيد):",
    sounds: [
      {
        sound: "This (للمفرد القريب)",
        arabicPron: "تستخدم للمفرد المتواجد على مسافة قريبة منك",
        examples: [
          { english: "This is a book", arabic: "هذا كتاب (قريب مني)" }
        ]
      },
      {
        sound: "These (للجمع القريب)",
        arabicPron: "تستخدم للجمع المتواجد على مسافة قريبة منك (جمع This)",
        examples: [
          { english: "These are books", arabic: "هذه كتب (قريبة مني)" }
        ]
      },
      {
        sound: "That (للمفرد البعيد)",
        arabicPron: "تستخدم للمفرد المتواجد على مسافة بعيدة منك",
        examples: [
          { english: "That is a book", arabic: "ذلك كتاب (بعيد عني)" }
        ]
      },
      {
        sound: "Those (للجمع البعيد)",
        arabicPron: "تستخدم للجمع المتواجد على مسافة بعيدة منك (جمع That)",
        examples: [
          { english: "Those are books", arabic: "تلك كتب (بعيدة عني)" }
        ]
      }
    ],
    note: "قاعدة ذهبية: لاحظ دائماً أن للمفرد نستخدم الفعل المساعد (is) فنقول This is / That is، بينما للجمع نستخدم (are) فنقول These are / Those are."
  },

  // UNIT 4 QUIZ - Q1
  {
    id: "u4-quiz",
    type: "quiz",
    unit: 4,
    title: "اختبار الوحدة الرابعة - السؤال 1: أدوات التنكير والتعريف",
    quizData: {
      question: "Which of the following is correct?",
      arabicQuestion: "أي من الجمل التالية صحيحة نحوياً؟",
      options: [
        "I saw a elephant yesterday.",
        "I saw an elephant yesterday.",
        "I saw the elephant yesterday (without context).",
        "Saw I an elephant yesterday."
      ],
      correctAnswer: "I saw an elephant yesterday.",
      hint: "كلمة elephant تبدأ بصوت علة متحرك E لذلك نستخدم النكرة an قبلها لتسهيل النطق."
    }
  },
  // UNIT 4 QUIZ - Q2
  {
    id: "u4-quiz-2",
    type: "quiz",
    unit: 4,
    title: "اختبار الوحدة الرابعة - السؤال 2: ترتيب الجملة",
    quizData: {
      question: "What is the correct English word order for: 'أكل فهد تفاحة'?",
      arabicQuestion: "ما هو الترتيب الصحيح للكلمات بالإنجليزية لترجمة: 'أكل فهد تفاحة'؟",
      options: [
        "Ate Fahad an apple.",
        "An apple ate Fahad.",
        "Fahad ate an apple.",
        "Fahad an apple ate."
      ],
      correctAnswer: "Fahad ate an apple.",
      hint: "قاعدة ذهبية: تبدأ الجملة دائماً بالفاعل (Subject) أولاً وهو Fahad، ثم الفعل (Verb) وهو ate، ثم المفعول به (Object) وهو an apple."
    }
  },
  // UNIT 4 QUIZ - Q3
  {
    id: "u4-quiz-3",
    type: "quiz",
    unit: 4,
    title: "اختبار الوحدة الرابعة - السؤال 3: أسماء الإشارة",
    quizData: {
      question: "To refer to a single book that is far away from you, you should say: '________ is my book.'",
      arabicQuestion: "للإشارة إلى كتاب مفرد يتواجد على مسافة بعيدة منك، يجب أن تقول: '________ is my book.'",
      options: [
        "This",
        "These",
        "That",
        "Those"
      ],
      correctAnswer: "That",
      hint: "نستخدم اسم الإشارة 'That' للمفرد البعيد."
    }
  },

 

    // UNIT 5 VIDEO
  {
    id: "u5-video",
    type: "video",
    unit: 5,
    title: "مقدمة مرئية عن الوحدة",
    videoUrl: "https://youtube.com/"
  },

  // UNIT 5 INTRO
  {
    id: "u5-intro",

    type: "intro",
    unit: 5,

    title: "Unit 5: Simple Present Tense",
    subtitle: "الوحدة الخامسة: الزمن المضارع البسيط",
    description: "المضارع البسيط هو الزمن الأكثر استخداما في الحياة اليومية للتحدث عن الروتين والعادات والحقائق المستمرة والثابتة",
    bullets: [
      "فهم متى نستخدم المضارع البسيط للتعبير عن العادات والحقائق والجداول",
      "القاعدة الذهبية لتغيير شكل الفعل بإضافة s للمفرد وبقائه مجرداً للجمع",
      "كيفية إيجاد ونطق الفعل في حالته الأساسية",
      "استخدام الأفعال المساعدة Do & Does للنفي",
      "استخدام Do & Does لصياغة الأسئلة"
    ]
  },

  // PRESENT SIMPLE CASES
  {
    id: "u5-cases",
    type: "sounds-compound",
    unit: 5,
    title: "متى نستخدم الزمن المضارع البسيط؟",
    description: "نستخدم هذا الزمن الشائع في ثلاث حالات رئيسية هامة:",
    sounds: [
      {
        sound: "1. العادات والروتين اليومي",
        arabicPron: "Habits & Daily Routine: أمر نكرره بانتظام",
        examples: [
          { english: "I play football", arabic: "ألعب كرة القدم (بانتظام كل أسبوع أو يوم)" },
          { english: "Fatima goes to school every day", arabic: "تذهب فاطمة للمدرسة يومياً كروتين متكرر" }
        ]
      },
      {
        sound: "2. الحقائق العامة والعلمية",
        arabicPron: "General Facts: أمور علمية أو حقائق ثابتة لا تتغير",
        examples: [
          { english: "The sun rises from the east", arabic: "تشرق الشمس من الشرق (حقيقة علمية مثبتة)" },
          { english: "I live in Riyadh", arabic: "أعيش في الرياض (حقيقة حالية ثابتة عني)" }
        ]
      },
      {
        sound: "3. الجداول والخطط الزمنية",
        arabicPron: "Schedules & Timetables: مواعيد عامة ورسمية وثابتة",
        examples: [
          { english: "The train comes at 6 PM tomorrow", arabic: "يأتي القطار في السادسة مساءً غداً" },
          { english: "The bank opens at 9 AM", arabic: "يفتح البنك الساعة 9 صباحاً" },
          { english: "The movie starts at 7 PM", arabic: "يبدأ الفيلم في السابعة مساءً" }
        ]
      }
    ]
  },

  // THE GOLDEN RULE - THE S RULE
  {
    id: "u5-golden-rule",
    type: "grammar-explanation",
    unit: 5,
    title: "القاعدة الذهبية لتصريف الفعل (The Golden Rule)",
    description: "يتوقف شكل الفعل في المضارع البسيط كلياً على نوع الفاعل (Subject):",
    bullets: [
      "1. مع المفرد (he, she, it) أو أي اسم مفرد ➔ نضيف حرف (s) لنهاية الفعل!",
      "أمثلة المفرد: He lives in Jeddah / She plays tennis / It rains in winter.",
      "2. مع الجمع (I, we, they, you) أو أي اسم جمع ➔ يبقى الفعل في المصدر (بدون إضافة s)!",
      "أمثلة الجمع: I live in Jeddah / We play tennis / They like apples."
    ]
  },

  // UNIT 5 QUIZ - Q1
  {
    id: "u5-quiz",
    type: "quiz",
    unit: 5,
    title: "اختبار الوحدة الخامسة - السؤال 1: نفي المضارع البسيط",
    quizData: {
      question: "Choose the correct sentence:",
      arabicQuestion: "اختر الجملة الصحيحة لغوياً ونحوياً:",
      options: [
        "She doesn't likes apples.",
        "She doesn't like apples.",
        "She don't like apples.",
        "She don't likes apples."
      ],
      correctAnswer: "She doesn't like apples.",
      hint: "مع الضمير she نستخدم doesn't للنفي، ولا تنسَ حذف حرف الـ s من الفعل بعدها ليعود لأصله like."
    }
  },
  // UNIT 5 QUIZ - Q2
  {
    id: "u5-quiz-2",
    type: "quiz",
    unit: 5,
    title: "اختبار الوحدة الخامسة - السؤال 2: تصريف الفعل المضارع",
    quizData: {
      question: "Complete the sentence: 'My brother ________ in Riyadh.'",
      arabicQuestion: "أكمل الجملة المناسبة للفراغ: 'My brother ________ in Riyadh.'",
      options: [
        "live",
        "lives",
        "living",
        "is live"
      ],
      correctAnswer: "lives",
      hint: "الفاعل My brother مفرد غائب (He)، لذلك نضيف حرف s للفعل في المضارع البسيط."
    }
  },
  // UNIT 5 QUIZ - Q3
  {
    id: "u5-quiz-3",
    type: "quiz",
    unit: 5,
    title: "اختبار الوحدة الخامسة - السؤال 3: الأسئلة في المضارع البسيط",
    quizData: {
      question: "Choose the correct question: '________ they play football?'",
      arabicQuestion: "اختر السؤال الصحيح والمناسب لغوياً: '________ they play football؟'",
      options: [
        "Does",
        "Do",
        "Are",
        "Is"
      ],
      correctAnswer: "Do",
      hint: "مع الضمائر الجمع (they, we, you, I) نستخدم الفعل المساعد Do لتكوين السؤال في زمن المضارع البسيط."
    }
  },



   // UNIT 6 VIDEO
  {
    id: "u6-video",
    type: "video",
    unit: 6,
    title: "مقدمة مرئية عن الوحدة",
    videoUrl: "https://youtube.com/"
  },

  // UNIT 6 INTRO
  {
    id: "u6-intro",

    type: "intro",
    unit: 6,

    title: "Unit 6: Practical Vocabulary & Conversation",
    subtitle: "الوحدة السادسة: المفردات العملية والمحادثات",
    description: "تمكين المتعلم من استخدام ما تعلمه في المواقف اليومية البسيطة والبدء بالتعارف والمحادثات والتعبيرات الأساسية الهامة",
    bullets: [
      "العبارات اليومية الهامة للتحيات والوداع والتمنى بالخير تلقائيا",
      "كيفية التعريف بالنفس والحديث عن اسمك وموطنك بطلاقة",
      "بناء حوار ومحادثة تعارف بسيطة مع شخص آخر وسماعه بدقة",
      "الأرقام الإنجليزية الأساسية حتى 100 بالأشكال والكتابة",
      "الألوان الشهيرة، وأسماء أفراد العائلة بالتفصيل"
    ]
  },

  // GREETINGS & FAREWELLS
  {
    id: "u6-greetings",
    type: "vocab-table",
    unit: 6,
    title: "التحيات والوداع في الحياة اليومية (Greetings)",
    description: "انقر على السماعة للاستماع لنطق التحية والتدرب الدائم لممارستها بشكل طبيعي وصحيح!",
    bullets: [
      "ستساعدك هذه العبارات للبدء والإنهاء لحديثك مع أي ناطق للغة بشكل لبق ومحترم."
    ],
    grammarRows: [
      { subject: "Good morning", verb: "صباح الخير", object: "تقال من الصباح الباكر حتى الظهر" },
      { subject: "Good afternoon", verb: "مساء الخير (مابعد الظهر)", object: "تقال من بعد الظهر حتى وقت الغروب" },
      { subject: "Good evening", verb: "مساء الخير (مساءً)", object: "تقال من بعد الغروب وطوال الليل" },
      { subject: "Good night", verb: "تصبح على خير", object: "تقال عند التوجه للنوم أو الوداع والرحيل ليلاً" },
      { subject: "Hello / hi", verb: "مرحبا / أهلاً", object: "تحية استفتاحية عامة تقال في أي وقت ولأي شخص" },
      { subject: "How are you?", verb: "كيف حالك؟", object: "للسؤال عن الحال وبدء الدردشة بشكل رائع" },
      { subject: "I am fine, thank you", verb: "أنا بخير، شكراً لك", object: "الإجابة القياسية اللبقة والمفعمة بالود" }
    ]
  },

  // SELF INTRODUCTION
  {
    id: "u6-intro-self",
    type: "sounds-compound",
    unit: 6,
    title: "التعريف بالنفس والآخرين (Self-Introduction)",
    description: "استعن بالقوالب التالية لتعريف نفسك لشخص تلتقي به لأول مرة:",
    sounds: [
      {
        sound: "1. التعريف بـ اسمك",
        arabicPron: "بأكثر من طريقة بسيطة ومباشرة",
        examples: [
          { english: "My name is [Nawaf]", arabic: "اسمي [نواف]" },
          { english: "I am [Nawaf]", arabic: "أنا [نواف]" }
        ]
      },
      {
        sound: "2. التعريف بـ موطنك ومدينتك",
        arabicPron: "توضيح المكان الذي تنتمي إليه وتعيش فيه",
        examples: [
          { english: "I am from Saudi Arabia", arabic: "أنا من المملكة العربية السعودية" },
          { english: "I am from Makkah", arabic: "أنا من مكة المكرمة" }
        ]
      },
      {
        sound: "3. العبارة النهائية الترحيبية للتشرف بالمعرفة",
        arabicPron: "تقال دائما بكل ترحيب وفرح بلقائه",
        examples: [
          { english: "Nice to meet you !", arabic: "تشرفت بلقائك / فرصة سعيدة لسرورى بمعرفتك!" }
        ]
      }
    ]
  },

  // CONVERSATION PRESENTATION
  {
    id: "u6-conversation",
    type: "conversation",
    unit: 6,
    title: "محادثة تعارف تفاعلية (Dialogue)",
    description: "اضغط على زر التشغيل الخاص بالمتحدث A ثم المتحدث B للتدرب على الاستماع والتحدث سوياً بطلاقة!",
    conversation: [
      { speaker: "A", english: "Hey, good morning. My name is Nawaf. I’m from Saudi Arabia. How are you?", arabic: "مهلاً، صباح الخير. اسمي نواف، أنا من المملكة العربية السعودية. كيف حالك؟" },
      { speaker: "B", english: "Hello, Nawaf. I’m fine, thank you. Nice to meet you.", arabic: "مرحباً يا نواف. أنا بخير، شكراً لك. تشرفت بلقائك كثيراً." }
    ]
  },

  // NUMBERS GRID
  {
    id: "u6-numbers",
    type: "grid",
    unit: 6,
    title: "الأرقام باللغة الإنجليزية (Numbers)",
    description: "الأرقام من 0 إلى 19، ثم العقود حتى 100. اضغط على أي رقم للاستماع لطريقة نطق وكتابة العدد!",
    note: "تكرار النطق والربط البصري يسهل تذكر الأعداد."
  },

  // COLORS LIST
  {
    id: "u6-colors",
    type: "letter-detail",
    unit: 6,
    title: "الألوان باللغة الإنجليزية (Colors)",
    description: "الألوان وتمايزها اللوني. اضغط على اللون ومستمع الصوت لتعلم النطق التأسيسي الصحيح!",
    examples: [
      { word: "Green", arabic: "أخضر", emoji: "🟢" },
      { word: "Yellow", arabic: "أصفر", emoji: "🟡" },
      { word: "Orange", arabic: "برتقالي", emoji: "🟠" },
      { word: "Red", arabic: "أحمر", emoji: "🔴" },
      { word: "Blue", arabic: "أزرق", emoji: "🔵" },
      { word: "Purple", arabic: "بنفسجي", emoji: "🟣" },
      { word: "Black", arabic: "أسود", emoji: "⚫" },
      { word: "White", arabic: "أبيض", emoji: "⚪" },
      { word: "Brown", arabic: "بني", emoji: "🟤" }
    ]
  },

  // FAMILY STRUCTURE
  {
    id: "u6-family",
    type: "letter-detail",
    unit: 6,
    title: "أفراد العائلة (Family Members)",
    description: "العلاقات والقرابة داخل العائلة الصغرى والكبرى باللغة الإنجليزية:",
    examples: [
      { word: "Father", arabic: "أب", emoji: "👨" },
      { word: "Mother", arabic: "أم", emoji: "👩" },
      { word: "Brother", arabic: "أخ", emoji: "👦" },
      { word: "Sister", arabic: "أخت", emoji: "👧" },
      { word: "Grandfather", arabic: "جد", emoji: "👴" },
      { word: "Grandmother", arabic: "جدة", emoji: "👵" },
      { word: "son", arabic: "ابن / ولد", emoji: "👶" },
      { word: "Daughter", arabic: "ابنة / طفلة", emoji: "👧" },
      { word: "parents", arabic: "الوالدين (الأب والأم)", emoji: "🧑‍🤝‍🧑" }
    ]
  },

  // UNIT 6 QUIZ - Q1
  {
    id: "u6-quiz",
    type: "quiz",
    unit: 6,
    title: "اختبار الوحدة السادسة - السؤال 1: ردود المحادثة",
    quizData: {
      question: "If someone tells you 'Nice to meet you', what is the best/polite reply?",
      arabicQuestion: "إذا قال لك شخص ما 'Nice to meet you' (ممتن بمعرفتك)، ما هو أفضل رد أو رد لبق عليه؟",
      options: [
        "Good morning.",
        "Nice to meet you too !",
        "I am fine, thank you.",
        "Nice to meet me."
      ],
      correctAnswer: "Nice to meet you too !",
      hint: "الرد الأمثل هو إضافة كلمة too (أيضاً) بنهاية العبارة: Nice to meet you too (تشرفت بلقائك أيضاً!)."
    }
  },
  // UNIT 6 QUIZ - Q2
  {
    id: "u6-quiz-2",
    type: "quiz",
    unit: 6,
    title: "اختبار الوحدة السادسة - السؤال 2: أفراد العائلة",
    quizData: {
      question: "What is the English word for 'الوالدين (الأب والأم)'?",
      arabicQuestion: "ما هي الكلمة الإنجليزية لـ 'الوالدين (الأب والأم)'؟",
      options: [
        "Parents",
        "Sons",
        "Uncle",
        "Family"
      ],
      correctAnswer: "Parents",
      hint: "كلمة Parents تعني الوالدين (الأب والأم) معاً."
    }
  },
  // UNIT 6 QUIZ - Q3
  {
    id: "u6-quiz-3",
    type: "quiz",
    unit: 6,
    title: "اختبار الوحدة السادسة - السؤال 3: الأرقام بالإنجليزية",
    quizData: {
      question: "How do you write the number '75' in English words?",
      arabicQuestion: "كيف تكتب الرقم '75' بالكلمات الإنجليزية؟",
      options: [
        "Fifty-seven",
        "Seventy-five",
        "Seven-five",
        "Seventy-fifteen"
      ],
      correctAnswer: "Seventy-five",
      hint: "الرقم 70 هو Seventy والرقم 5 هو five، لذا نربطهما بواصلة: Seventy-five."
    }
  },

  // FINAL COMPREHENSIVE EXAM SLIDE
  {
    id: "final-exam",
    type: "exam",
    unit: 6,
    title: "الاختبار النهائي الشامل (Final Exam)",
    subtitle: "شريحة التقييم النهائي",
    arabicTitle: "الاختبار الشامل لقياس مدى تمكنك من مهارات الدورة التأسيسية 📝",
    description: "يتكون هذا الاختبار من 10 أسئلة تفاعلية متنوعة تغطي جميع الوحدات الدراسية (الحروف، الأصوات المركبة، الكلمات الصامتة، تركيب الجملة، أدوات التعريف، وأسماء الإشارة). اجتياز هذا الاختبار هو خطوتك الأخيرة للحصول على الشهادة المعتمدة من أكاديميتنا!",
        examQuestions: [
      {
        id: "fe-q1",
        question: "B__ll",
        arabicQuestion: "",
        options: ["e", "a", "o"],
        correctAnswer: "a",
        hint: "Ball - الكرة",
        unit: 1
      },
      {
        id: "fe-q2",
        question: "Sara ____ smart",
        arabicQuestion: "سارة _____ ذكية",
        options: ["am", "is", "are"],
        correctAnswer: "is",
        hint: "Sara = she → is",
        unit: 2
      },
      {
        id: "fe-q3",
        question: "We ___ friends",
        arabicQuestion: "نحن _____ أصدقاء",
        options: ["am", "is", "are"],
        correctAnswer: "are",
        hint: "We → are",
        unit: 2
      },
      {
        id: "fe-q4",
        question: "What part of speech is (teacher)?",
        arabicQuestion: "ما نوع الكلمة (teacher)؟",
        options: ["pronoun", "noun", "adjective"],
        correctAnswer: "noun",
        hint: "Teacher = اسم لشخص → noun",
        unit: 3
      },
      {
        id: "fe-q5",
        question: "What part of speech is (under)?",
        arabicQuestion: "ما نوع الكلمة (under)؟",
        options: ["conjunction", "preposition", "adverb"],
        correctAnswer: "preposition",
        hint: "Under = تحت → حرف جر → preposition",
        unit: 3
      },
      {
        id: "fe-q6",
        question: "What is the subject in the sentence: I play football?",
        arabicQuestion: "ما هو الفاعل في الجملة: I play football؟",
        options: ["football", "play", "I"],
        correctAnswer: "I",
        hint: "الفاعل هو من يقوم بالفعل → I",
        unit: 4
      },
      {
        id: "fe-q7",
        question: "The word 'play' in the sentence (I play football) is:",
        arabicQuestion: "كلمة play في الجملة (I play football) هي:",
        options: ["subject", "verb", "object"],
        correctAnswer: "verb",
        hint: "play = الفعل الذي يقوم به الفاعل → verb",
        unit: 4
      },
      {
        id: "fe-q8",
        question: "Choose the correct sentence:",
        arabicQuestion: "اختر الجملة الصحيحة:",
        options: ["They TV watch", "TV they watch", "They watch TV"],
        correctAnswer: "They watch TV",
        hint: "الترتيب الصحيح: Subject + Verb + Object",
        unit: 4
      },
      {
        id: "fe-q9",
        question: "Choose the correct form: He ___ English.",
        arabicQuestion: "اختر التصريف الصحيح: He ___ English.",
        options: ["studies", "study", "studying"],
        correctAnswer: "studies",
        hint: "He/She/It → نضيف es أو s للفعل في المضارع البسيط",
        unit: 5
      },
      {
        id: "fe-q10",
        question: "How are you?",
        arabicQuestion: "كيف حالك؟",
        options: ["I'm Nawaf", "I'm from Saudi Arabia", "I'm fine."],
        correctAnswer: "I'm fine.",
        hint: "How are you = كيف حالك → الجواب الصحيح: I'm fine",
        unit: 6
      }
    ]

  },

  // COURSE COMPLETION SLIDE
  {
    id: "course-completion",
    type: "completion",
    unit: 6,
    title: "مبارك الإنجاز!",
    subtitle: "إتمام الدورة التأسيسية",
    arabicTitle: "تهانينا! لقد أتممت المستوى التأسيسي بنجاح ✨",
    description: "بخطوات ثابتة وعزيمة قوية، نجحت في اجتياز كافة دروس الدورة التأسيسية وفهمت المهارات والمفردات الست الكبرى لإتقان ركائز الإنجليزية الأولى."
  }
];

// Export to Global namespace
window.unitsList = unitsList;
window.numbersList = numbersList;
window.slidesData = slidesData;
