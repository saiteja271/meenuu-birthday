/* ============================================================================
   Ammu's Birthday Universe — script.js
   Pure vanilla JavaScript. No frameworks, no build step, no packages.

   EDIT ME: all photos, captions and stories live in PHOTOS_DATA below.
   EDIT ME: the timeline lives in MOMENTS_DATA, the roses in LOVE_NOTES, and
   the sky wishes in LANTERN_WISHES. The letter is in LETTER_PARAGRAPHS.
   Drop your own song in as "music.mp3"; if it is missing, the built-in
   Web Audio music-box melody plays instead.
   ========================================================================== */

const PHOTOS_DATA = [
  {
    id: "meena",
    src: "photos/meena.jpeg",
    alt: "Ammu smiling in a black and white dupatta with the green Kondaveedu hills behind her",
    chip: "Birthday Queen",
    short: "my whole world, in one frame 👑",
    title: "The Queen of My Little World",
    date: "A Kondaveedu kind of day",
    place: "Kondaveedu Fort Hills",
    emoji: "👑",
    story: [
      "Kondaveedu hills green ga, clouds konchem low ga, and nuvvu black and white dupatta lo, forehead meeda tilak tho, aa smile... Ammu, aa frame lo nuvvu entha beautiful ga unnavo naaku words lo cheppadam raadu.",
      "Naa phone lo photos chaala unnai, but ee photo naaku special. Because idi nee happy face ni, nee peace ni, and naa favourite person ni okate frame lo daachindi. Every time naa day baagakapoyina, nenu ee photo chusi navvuthanu.",
      "You are my whole world, Buuchiii. Not because the world is small, but because you make my world feel complete. 👑❤️",
    ],
  },
  {
    id: "hands",
    src: "photos/hands.jpeg",
    alt: "Sai Teja and Ammu holding hands on the day they committed, August 12 2026",
    chip: "Our Promise",
    short: "August 12th — manam commit ayinam 💍",
    title: "Manam Commit Ayina Roju",
    date: "August 12, 2026",
    place: "The day we chose forever",
    emoji: "💍",
    story: [
      "August 12, 2026. Naa life lo aa roju ni nenu eppudu marchipoledu, Ammu. Nee chethulu naa chethulalo pattukuni, 'manam' ani cheppinappudu, naa heart lo oka chinna prayer complete aindi.",
      "We promised each other small things — no silent fights, always share the last piece of food, and never let a day end without saying 'Naa Pranam'. Aa promises naa heart lo deep ga register ayyayi.",
      "Commitment ante nenu oka big word ani anukunevadini. Kani aa roju, nee hand hold chesi, adi just a word kaadu — a promise to keep choosing you every single day ani artham aipoyindi. 💍✨",
    ],
  },
  {
    id: "kanchi",
    src: "photos/kanchi.jpeg",
    alt: "Ammu and Sai Teja standing by the temple tank in Kanchipuram with golden and white gopurams",
    chip: "Sacred Journey",
    short: "bangaru gopuram mundu manam 🛕",
    title: "Kanchi Divya Kshethram Lo Mana Blessings",
    date: "Our Kanchipuram day",
    place: "Kanchi Kamakshi Temple & Kalyani",
    emoji: "🛕",
    story: [
      "Kanchipuram lo aa golden and white gopurams, temple tank Kalyani water, and nee pink saree... Ammu, aa day ni nenu photo lo kaadu, naa heart lo save chesanu.",
      "Sacred steps meeda kalisi naduthu, nee silent prayer chusanu. Akkada nenu adigina korika okate — 'Ee ammayi navvu eppudu taggakudadu, and nenu eppudu nee pakkane undali.'",
      "Temple la aa peace, prasadam, and nee hand naa hand lo... Devudu unna place lo, naa devudu naa pakkane nadichindi anipinchindi. 🛕✨",
    ],
  },
  {
    id: "iskcon",
    src: "photos/iskcon gosala.jpeg",
    alt: "Ammu and Sai Teja in front of the Radha Krishna swing at ISKCON Gosala",
    chip: "Divine Blessings",
    short: "Radha-Krishna swing mundu mana smile 🦚",
    title: "ISKCON Gosala — Radha Krishna Swing Mundu",
    date: "Our ISKCON Gosala day",
    place: "Sri Radha-Krishna Swing, ISKCON Gosala",
    emoji: "🦚",
    story: [
      "ISKCON Gosala lo Radha-Krishna floral swing mundu, parrots and blossoms madhya, nuvvu naa pakkana navvuthunte... aa frame devuni blessings la anipinchindi.",
      "Nuvvu cheppinavi: 'Radha-Krishna la manam kuda eppudu kalisi undali.' Nenu navvinanu, but inside I made the same wish. Ee photo chusthe, aa wish inka fresh ga untundi.",
      "Gosala lo cows, mud, green fields, and aa peaceful afternoon — everything felt slow and sacred. Naa favourite part? Nee shoulder meeda naa hand, and nee genuine smile. 🦚💛",
    ],
  },
  {
    id: "kotappakonda2",
    src: "photos/kotappakonda 2.jpeg",
    alt: "Ammu in a purple dress and Sai Teja in a mint shirt sharing a close hug on the Kotappakonda ghat road",
    chip: "Hill Road",
    short: "ghat road lo close hug 🛵⛰️",
    title: "Kotappakonda Ghat Road — Mana Close Hug",
    date: "Our Kotappakonda ride",
    place: "Kotappakonda Ghat Road",
    emoji: "🛵",
    story: [
      "Kotappakonda ghat road, winding turns, and nuvvu purple dress lo naa pakkana. Naa mint shirt and nee smile — aa combination naaku inka gurthu undi, Ammu.",
      "Road antha beautiful ga unna, naa eyes mathram ninnu chusthune unnai. Nuvvu close ga hug chesinappudu, aa hill road kuda konchem slow aipoyindi anipinchindi.",
      "Manam ila vellam, ikkada digam, photos teesukunnam, malli vellam. But aa hug ni mathram nenu ekkada vadaledu, Buuchiii. 🛵⛰️",
    ],
  },
  {
    id: "kotappakonda",
    src: "photos/kotappakonda.jpeg",
    alt: "Ammu and Sai Teja taking a hilltop selfie with matching spectacles and sacred tilaks",
    chip: "Hilltop",
    short: "hilltop selfie, matching specs 👓😄",
    title: "Kotappakonda Hilltop — Specs & Tilaks",
    date: "Kotappakonda Hilltop",
    place: "Kotappakonda",
    emoji: "👓",
    story: [
      "Hilltop selfie, matching stylish specs, forehead meeda sacred tilaks, and two people who can't stop smiling. Ee photo lo nuvvu entha happy ga unnavo chudu, Meena.",
      "Kotappakonda climb taruvatha vachina gaali, temple view, and naa favourite person — perfect combo. Nee specs lo nuvvu naaku scientist laaga kaadu, cutest person laaga kanipinchav.",
      "We took this photo for fun, but every time I see it, I remember how easily we laugh together. Adi naaku chaaladu, Ammu. Actually, adi naaku everything. 👓😄",
    ],
  },
  {
    id: "kondaveedu",
    src: "photos/kondaveedu.jpeg",
    alt: "Ammu and Sai Teja at the Kondaveedu fort peak with green hills and clouds behind them",
    chip: "Mountain Memory",
    short: "clouds below, you beside me ☁️",
    title: "Kondaveedu Fort — Clouds Below, You Beside Me",
    date: "Our Kondaveedu trek",
    place: "Kondaveedu Fort Peak",
    emoji: "⛰️",
    story: [
      "Kondaveedu fort peak, green valley, clouds... and you. Naa favourite view ekkado dooram lo kaadu, naa pakkane undi.",
      "Trek lo nee tiredness, water bottle share chesukovadam, and finally top lo aa view chusinappudu nee face — aa happiness naaku inka gurthu undi. Nuvvu 'wow' ani cheppinappudu, nenu ninnu chusthunnanu, Ammu.",
      "Some places are beautiful because of the view. Kondaveedu is beautiful because you were standing in that view with me. ⛰️☁️",
    ],
  },
  {
    id: "bus",
    src: "photos/bus.jpeg",
    alt: "Ammu and Sai Teja sitting close together on a bus journey, looking at each other",
    chip: "Bus Diaries",
    short: "bus journey lo ninnu choosthu nenu 🚌💕",
    title: "Bus Journey Lo Ninnu Choosthu Nenu...",
    date: "Our favourite bus ride",
    place: "Somewhere between home and happiness",
    emoji: "🚌",
    story: [
      "Bus window, moving trees, and nuvvu naa pakkana. Nenu ninnu chusthunnanu, nuvvu nanu chusthunnav — and both of us started laughing.",
      "Ee photo lo aa moment undi, Ammu. Crowded bus, ordinary seats, but naa whole world aa window pakkana kurchundi.",
      "Journey destination kanna memory ekkuva important anipinchindi. Nuvvu naa shoulder meeda head pettukuni nidra poyina aa 20 minutes naaku inka best sleep laaga gurthu unnayi. 🚌💕",
    ],
  },
  {
    id: "beach",
    src: "photos/beach.jpeg",
    alt: "Ammu and Sai Teja wearing sunglasses and smiling at the beach",
    chip: "Beach Day",
    short: "sunglasses, waves, endless navvulu 🌊",
    title: "Beach Daggara Mana Sunglasses & Endless Navvulu",
    date: "Our beach evening",
    place: "Beach shore",
    emoji: "🌊",
    story: [
      "Beach shore, waves, sunglasses, and two people who forgot the camera was even there. Nee smile aa photo lo clear ga kanipistundi, Ammu.",
      "Waves mana kaallu touch chesinappudu nuvvu navvina navvu, aa sound naa ears lo inka loop lo untundi. We talked about a small home, balcony, filter coffee, and a puppy (or a panda, you said).",
      "Sunset aipoyaka kuda 'inko 10 minutes' ani cheppinappudu, nenu 'inka enni minutes aina' ani anukunnanu. Time ni aapalem, but aa moment ni naa heart lo forever save chesanu. 🌊🏖️",
    ],
  },
  {
    id: "guntur",
    src: "photos/guntur.jpeg",
    alt: "Ammu and Sai Teja laughing together in the green fields and palm trees of Guntur countryside",
    chip: "Countryside",
    short: "pachani polalu & mana navvulu 🌾",
    title: "Guntur Countryside — Pachani Polalu, Challani Gaali",
    date: "A countryside day",
    place: "Guntur fields",
    emoji: "🌾",
    story: [
      "Guntur countryside, green fields, palm trees, and aa challani gaali. Nuvvu purple dress lo, nenu white shirt lo — and both of us laughing at something silly.",
      "Manam ila vellam, ikkada digam, idi tinnam — ee line mana life ki perfect fit, Ammu. No big plan, just fields, food, and you.",
      "City noise antha dooram, naa mind antha calm. Nee hand naa hand lo, pachani polalu chusthu nadichina aa evening ni nenu eppudu marchipoledu. 🌾💛",
    ],
  },
];

const MOMENTS_DATA = [
  {
    icon: "🌱",
    date: "August 8, 2026",
    title: "The Day My Ordinary Life Changed",
    teaser: "The first spark. My days were just days, until you walked in, Ammu.",
    photo: "meena",
    story: [
      "August 8, 2026. Naa life lo aa roju ki mundhu days just days. Then you walked in, and suddenly ordinary things became beautiful — a chai break became a date, a long walk became a memory, a random message became the best part of my day.",
      "Nee navvu vintene naa day set aipothundi, Ammu. Nuvvu em cheppina, nenu vinadaniki ready. Aa first conversation lo ne telisi poyindi — idi verey.",
      "Ee photo lo nuvvu Kondaveedu hills mundu navvuthunnav. Maybe aa roju kadhu, but ee smile ne naa life loki first vachindi anukuntanu. Adi chaalu. 🌱",
    ],
  },
  {
    icon: "💍",
    date: "August 12, 2026",
    title: "Manam Commit Ayina Roju",
    teaser: "Four days later, we stopped saying maybe and started saying we.",
    photo: "hands",
  },
  {
    icon: "🛕",
    date: "Kanchi • Tamil Nadu",
    title: "Bangaru Gopuram Blessings",
    teaser: "Sacred steps, a silent prayer, and your hand holding mine a little tighter.",
    photo: "kanchi",
  },
  {
    icon: "🦚",
    date: "ISKCON Gosala",
    title: "Radha-Krishna Swing Mundu",
    teaser: "Parrots, blossoms, and a wish that sounded exactly like yours.",
    photo: "iskcon",
  },
  {
    icon: "⛰️",
    date: "Kotappakonda",
    title: "Ghat Road Hugs & Hilltop Selfies",
    teaser: "Winding roads, matching specs, sacred tilaks, and endless laughter.",
    photo: "kotappakonda2",
    story: [
      "Kotappakonda ghat road, winding turns, mint shirt, purple dress, and a hug that made the whole hill road feel slow. Naa eyes road meeda kaadu, nuvvu meeda unnayi, Ammu.",
      "Hilltop selfie lo matching specs, forehead meeda tilaks, and two people who can't stop smiling. Nuvvu naaku scientist laaga kaadu, cutest person laaga kanipinchav.",
      "One place, two photos, endless memories. Naa favourite part? Nuvvu naa pakkana happy ga undadam. ⛰️😄",
    ],
  },
  {
    icon: "☁️",
    date: "Kondaveedu Fort",
    title: "Clouds Below, You Beside Me",
    teaser: "A green valley, a tough little trek, and my favourite view standing next to me.",
    photo: "kondaveedu",
  },
  {
    icon: "🚌",
    date: "Our Bus Diaries",
    title: "Ninnu Choosthu Nenu...",
    teaser: "Moving trees, a crowded bus, and the whole world sitting beside me.",
    photo: "bus",
  },
  {
    icon: "🌊",
    date: "Our Beach Evening",
    title: "Waves, Sunglasses & Navvulu",
    teaser: "Barefoot walks, golden sky, and ten more minutes that I never wanted to end.",
    photo: "beach",
  },
  {
    icon: "🌾",
    date: "Guntur Countryside",
    title: "Pachani Polalu & Mana Laughter",
    teaser: "No big plan, just fields, food, and you. Manam ila vellam, ikkada digam, idi tinnam.",
    photo: "guntur",
  },
];

const LOVE_NOTES = [
  "Nee navvu naa favourite sound, Ammu. 🎶",
  "Nuvvu naa pakkana unte, ordinary days kuda festival laa anipisthai. ✨",
  "Naa favourite place? Nee shoulder meeda naa head. 🐼",
  "Naa phone lo 90% photos neeve... migatha 10% manam. 📸",
  "Fights aina, food sharing lo nenu eppudu odipothanu. 🍰",
  "Naa Pranam Ammu — forever ante ade. ❤️",
];

const LANTERN_WISHES = [
  "Naa korika: Nee navvu eppudu taggakudadu, Ammu — even on the hardest days.",
  "We keep travelling, keep laughing, keep stealing each other's food, and keep choosing each other.",
  "Naa life lo nee place eppudu ilaage special ga undali, Buuchiii.",
];

const LETTER_PARAGRAPHS = [
  { text: "Naa Pranam Ammu,", className: "letter-hello" },
  {
    text:
      "Nuvvu ee letter chaduvutunnappudu, nenu edho corner nunchi ninnu chusthu navvutunnanu anukuntunna — because that's what I always do when you're happy.",
  },
  {
    text:
      "Before August 8, 2026, my days were just days. Then you walked in, and suddenly ordinary things became beautiful. A chai break became a date. A long walk became a memory. A random message became the best part of my day. Nee navvu vintene naa day set aipothundi, Ammu — that's the simplest truth of my life.",
  },
  {
    text:
      "On August 12, 2026, we stopped saying 'maybe' and started saying 'we'. Meena, aa roju nuvvu naa chethulu pattukuni commit ayyinappudu, nenu silently devudiki thanks cheppukunna. Not because I found someone perfect in the world's eyes, but because I found someone perfect for my heart.",
  },
  {
    text:
      "Kanchi gopuram mundu, ISKCON swing mundu, Kotappakonda ghat road lo, Kondaveedu clouds lo, bus window lo, beach waves lo, Guntur fields lo — ekkadaina, naa favourite view nuvve, Meena.",
  },
  {
    text:
      "I know nenu perfect kaadu. Sometimes nenu ekkuva alochisthanu, sometimes silent ga untanu. But one thing I promise — I will always come back to you, always choose you, and always keep you laughing. Nuvvu naaku home, Ammu. Not a place, a person.",
  },
  {
    text:
      "Today is November 8th, your day. Naa pranam, I wish you a life filled with everything you quietly pray for. I wish for your health, your dreams, your happiness — and I secretly wish to be standing next to you in every single one of those moments.",
  },
  {
    text:
      "Happy Birthday, my Meena, my Buuchiii, my Ammu. Nuvvu entha happy unte, nenu anthe happy ga untanu. Forever and always.",
  },
  { text: "Forever & Always Yours,\nSai Teja ❤️", className: "letter-sign" },
];

const RELATIONSHIP_START = new Date("2026-08-08T00:00:00");
const COMMITMENT_DATE = new Date("2026-08-12T00:00:00");
const BIRTHDAY_MONTH = 10; // zero-based: November
const BIRTHDAY_DAY = 8;
const LOCK_CODES = ["1208", "0808"];
const SCREEN_ORDER = ["lock", "hero", "balloons", "cake", "roses", "scratch", "gallery", "moments", "lanterns", "letter", "gift", "finale"];

/* ========================================================================== */
/* Helpers                                                                    */
/* ========================================================================== */

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return map[char];
  });

const pad = (value, length = 2) => String(Math.max(0, value)).padStart(length, "0");

const prefersReducedMotion = () =>
  window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const $id = (id) => document.getElementById(id);

const els = {
  app: $id("app"),
  starfield: $id("starfield"),
  fx: $id("fx"),
  muteBtn: $id("muteBtn"),
  lockLocked: $id("lockLocked"),
  lockUnlocked: $id("lockUnlocked"),
  lockMessage: $id("lockMessage"),
  pinDots: $id("pinDots"),
  keypad: $id("keypad"),
  peekInside: $id("peekInside"),
  cdDays: $id("cdDays"),
  cdHours: $id("cdHours"),
  cdMins: $id("cdMins"),
  cdSecs: $id("cdSecs"),
  countdownSub: $id("countdownSub"),
  heroYes: $id("heroYes"),
  dodgeNo: $id("dodgeNo"),
  dodgeZone: $id("dodgeZone"),
  dodgeTease: $id("dodgeTease"),
  balloonSlots: $$(".balloon-slot"),
  popProgress: $id("popProgress"),
  loveBanner: $id("loveBanner"),
  toCake: $id("toCake"),
  cake: $id("cake"),
  candles: $id("candles"),
  blowBtn: $id("blowBtn"),
  cutBtn: $id("cutBtn"),
  micStatus: $id("micStatus"),
  feedingNote: $id("feedingNote"),
  toRoses: $id("toRoses"),
  bouquet: $id("bouquet"),
  bouquetHint: $id("bouquetHint"),
  loveNotes: $id("loveNotes"),
  toScratch: $id("toScratch"),
  scratchCard: $id("scratchCard"),
  scratchCanvas: $id("scratchCanvas"),
  scratchHint: $id("scratchHint"),
  scratchSkip: $id("scratchSkip"),
  toGallery: $id("toGallery"),
  gallery: $id("gallery"),
  toMoments: $id("toMoments"),
  moments: $id("moments"),
  toLanterns: $id("toLanterns"),
  lanternLayer: $id("lanternLayer"),
  wishCard: $id("wishCard"),
  wishText: $id("wishText"),
  releaseWish: $id("releaseWish"),
  toLetter: $id("toLetter"),
  letterStage: $id("letterStage"),
  envelope: $id("envelope"),
  letterKey: $id("letterKey"),
  letterHint: $id("letterHint"),
  letterPaper: $id("letterPaper"),
  letterText: $id("letterText"),
  skipTyping: $id("skipTyping"),
  toGift: $id("toGift"),
  giftBox: $id("giftBox"),
  giftCount: $id("giftCount"),
  giftReveal: $id("giftReveal"),
  toFinale: $id("toFinale"),
  tDays: $id("tDays"),
  tHours: $id("tHours"),
  tMins: $id("tMins"),
  tSecs: $id("tSecs"),
  blastBtn: $id("blastBtn"),
  modal: $id("modal"),
  modalSheet: $id("modalSheet"),
  modalMedia: $id("modalMedia"),
  modalChip: $id("modalChip"),
  modalTitle: $id("modalTitle"),
  modalMeta: $id("modalMeta"),
  modalStory: $id("modalStory"),
  modalClose: $id("modalClose"),
  bgMusic: $id("bgMusic"),
  srStatus: $id("srStatus"),
};

const state = {
  currentScreen: "lock",
  transitioning: false,
  code: "",
  unlocked: false,
  balloonsPopped: 0,
  candlesOut: false,
  cakeCut: false,
  bouquetBloomed: false,
  scratchRevealed: false,
  lanternsReleased: 0,
  letterOpened: false,
  letterTyping: false,
  letterSkipped: false,
  letterParts: [],
  letterTimer: 0,
  giftTaps: 0,
  giftOpen: false,
  finaleStarted: false,
  dodges: 0,
  lastDodge: 0,
  mic: {
    stream: null,
    source: null,
    analyser: null,
    raf: 0,
    listening: false,
  },
  lastFocus: null,
};

let announceTimer = 0;
function announce(message) {
  if (!els.srStatus) return;
  window.clearTimeout(announceTimer);
  els.srStatus.textContent = "";
  announceTimer = window.setTimeout(() => {
    els.srStatus.textContent = message;
  }, 30);
}

function reveal(element, className = "pop-in") {
  if (!element) return;
  element.hidden = false;
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
}

function getNextBirthday(now = new Date()) {
  const thisYear = new Date(now.getFullYear(), BIRTHDAY_MONTH, BIRTHDAY_DAY, 0, 0, 0, 0);
  const endOfBirthday = new Date(now.getFullYear(), BIRTHDAY_MONTH, BIRTHDAY_DAY, 23, 59, 59, 999);
  if (now.getTime() > endOfBirthday.getTime()) {
    return new Date(now.getFullYear() + 1, BIRTHDAY_MONTH, BIRTHDAY_DAY, 0, 0, 0, 0);
  }
  return thisYear;
}

/* ========================================================================== */
/* Data-driven rendering                                                      */
/* ========================================================================== */

function renderGallery() {
  if (!els.gallery) return;
  els.gallery.innerHTML = PHOTOS_DATA.map((photo, index) => {
    const tilt = index % 2 === 0 ? -1.5 : 1.8;
    const loading = index < 2 ? "eager" : "lazy";
    return `
      <button class="polaroid" type="button" data-photo="${escapeHtml(photo.id)}" style="--tilt:${tilt}deg" aria-label="Open our memory: ${escapeHtml(photo.title)}">
        <span class="polaroid__tape" aria-hidden="true"></span>
        <span class="polaroid__media">
          <img src="${encodeURI(photo.src)}" alt="${escapeHtml(photo.alt)}" loading="${loading}" decoding="async" draggable="false" />
          <span class="polaroid__tag">${escapeHtml(photo.chip)}</span>
        </span>
        <span class="polaroid__cap">${escapeHtml(photo.short)}<small>${escapeHtml(photo.place)}</small></span>
      </button>`;
  }).join("");
}

function renderMoments() {
  if (!els.moments) return;
  els.moments.innerHTML = MOMENTS_DATA.map((moment, index) => {
    return `
      <button class="moment" type="button" data-moment="${index}" aria-label="Read our memory: ${escapeHtml(moment.title)}">
        <span class="moment__node" aria-hidden="true">${escapeHtml(moment.icon)}</span>
        <span class="moment__card">
          <span class="moment__date">${escapeHtml(moment.date)}</span>
          <span class="moment__title">${escapeHtml(moment.title)}</span>
          <span class="moment__teaser">${escapeHtml(moment.teaser)}</span>
          <span class="moment__more">Read this memory →</span>
        </span>
      </button>`;
  }).join("");
}

function renderLoveNotes() {
  if (!els.loveNotes) return;
  els.loveNotes.innerHTML = LOVE_NOTES.map((note, index) => {
    const tilt = index % 2 === 0 ? "-1.1deg" : "1.2deg";
    return `
      <article class="note-card" style="--delay:${(index * 0.09).toFixed(2)}s; --tilt:${tilt};">
        <span class="note-card__heart" aria-hidden="true">♥</span>
        ${escapeHtml(note)}
      </article>`;
  }).join("");
}

/* ========================================================================== */
/* Starfield                                                                  */
/* ========================================================================== */

const Starfield = (() => {
  const canvas = els.starfield;
  const ctx = canvas && canvas.getContext ? canvas.getContext("2d") : null;
  let stars = [];
  let width = 0;
  let height = 0;
  let dpr = 1;
  let raf = 0;
  let shootingStar = null;
  let nextShooting = 0;
  let started = false;

  function resize() {
    if (!canvas || !ctx) return;
    const rect = canvas.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(135, Math.max(65, (width * height) / 5200)));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.3 + 0.35,
      alpha: Math.random() * 0.6 + 0.25,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.6 + 0.25,
    }));
    nextShooting = performance.now() + 7000 + Math.random() * 7000;
    if (prefersReducedMotion()) drawStatic();
  }

  function drawStatic() {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);
    stars.forEach((star) => {
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 244, 220, ${star.alpha})`;
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function draw(time) {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);
    for (const star of stars) {
      const twinkle = 0.58 + Math.sin(time * 0.00065 * star.speed + star.phase) * 0.4;
      const alpha = Math.max(0.08, star.alpha * twinkle);
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 246, 224, ${alpha})`;
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fill();
    }

    if (time > nextShooting) {
      shootingStar = {
        x: Math.random() * width * 0.55 + width * 0.25,
        y: Math.random() * height * 0.22,
        vx: -2.4 - Math.random() * 1.7,
        vy: 1.1 + Math.random() * 0.7,
        life: 1,
      };
      nextShooting = time + 9000 + Math.random() * 10000;
    }

    if (shootingStar) {
      shootingStar.x += shootingStar.vx;
      shootingStar.y += shootingStar.vy;
      shootingStar.life -= 0.012;
      if (shootingStar.life <= 0) {
        shootingStar = null;
      } else {
        const gradient = ctx.createLinearGradient(
          shootingStar.x,
          shootingStar.y,
          shootingStar.x - shootingStar.vx * 21,
          shootingStar.y - shootingStar.vy * 21
        );
        gradient.addColorStop(0, `rgba(255, 249, 225, ${shootingStar.life})`);
        gradient.addColorStop(1, "rgba(255, 249, 225, 0)");
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(shootingStar.x - shootingStar.vx * 21, shootingStar.y - shootingStar.vy * 21);
        ctx.stroke();
      }
    }

    raf = window.requestAnimationFrame(draw);
  }

  function start() {
    if (started) return;
    started = true;
    resize();
    if (prefersReducedMotion()) {
      drawStatic();
      return;
    }
    raf = window.requestAnimationFrame(draw);
  }

  window.addEventListener("resize", () => {
    window.cancelAnimationFrame(raf);
    resize();
    if (!prefersReducedMotion()) raf = window.requestAnimationFrame(draw);
  });

  return { start, resize };
})();

/* ========================================================================== */
/* Audio engine — music.mp3 with a Web Audio music-box fallback               */
/* ========================================================================== */

let audioCtx = null;
let masterGain = null;
let musicBus = null;
let synthOn = false;
let musicStarted = false;
let muted = false;
let musicStep = 0;
let nextNoteTime = 0;
let musicLoopTimer = 0;

function ensureAudioContext() {
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return null;

  if (!audioCtx) {
    audioCtx = new AudioCtor();
    const compressor = audioCtx.createDynamicsCompressor();
    compressor.threshold.value = -18;
    compressor.knee.value = 18;
    compressor.ratio.value = 5;
    compressor.attack.value = 0.006;
    compressor.release.value = 0.24;

    masterGain = audioCtx.createGain();
    masterGain.gain.value = muted ? 0.0001 : 0.82;
    masterGain.connect(compressor);
    compressor.connect(audioCtx.destination);

    musicBus = audioCtx.createGain();
    musicBus.gain.value = 0.48;

    const delay = audioCtx.createDelay(1);
    delay.delayTime.value = 0.31;
    const feedback = audioCtx.createGain();
    feedback.gain.value = 0.24;
    const wet = audioCtx.createGain();
    wet.gain.value = 0.24;
    const highpass = audioCtx.createBiquadFilter();
    highpass.type = "highpass";
    highpass.frequency.value = 140;

    musicBus.connect(masterGain);
    musicBus.connect(highpass);
    highpass.connect(delay);
    delay.connect(feedback);
    feedback.connect(delay);
    delay.connect(wet);
    wet.connect(masterGain);
  }

  if (audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

const midiToFreq = (midi) => 440 * Math.pow(2, (midi - 69) / 12);

// Cmaj7 · Am7 · Fmaj7 · G7 · Am7 · Fmaj7 · Cmaj7 · G — a soft romantic loop.
const CHORDS = [
  { bass: 48, notes: [60, 64, 67, 71] },
  { bass: 45, notes: [57, 60, 64, 67] },
  { bass: 41, notes: [53, 57, 60, 64] },
  { bass: 43, notes: [55, 59, 62, 65] },
  { bass: 45, notes: [57, 60, 64, 67] },
  { bass: 41, notes: [53, 57, 60, 64] },
  { bass: 48, notes: [60, 64, 67, 71] },
  { bass: 43, notes: [55, 59, 62, 67] },
];
const MUSIC_STEP = 60 / 72 / 2;
const MUSIC_PATTERN = [0, 2, 1, 3, 2, 3, 1, 2];

function playTone(midi, when, duration, level, type = "sine") {
  if (!audioCtx || !musicBus) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(midiToFreq(midi), when);
  gain.gain.setValueAtTime(0.0001, when);
  gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, level), when + 0.014);
  gain.gain.exponentialRampToValueAtTime(0.0001, when + duration);
  osc.connect(gain);
  gain.connect(musicBus);
  osc.start(when);
  osc.stop(when + duration + 0.06);
}

function playBell(midi, when, duration = 1.5, level = 0.05) {
  playTone(midi, when, duration, level, "sine");
  playTone(midi + 12, when, duration * 0.5, level * 0.15, "sine");
}

function scheduleMusicStep(step, when) {
  const bar = Math.floor(step / 8) % CHORDS.length;
  const position = step % 8;
  const chord = CHORDS[bar];
  const note = chord.notes[MUSIC_PATTERN[position]];

  playBell(note + 12, when, 1.45, 0.05);

  if (position === 0) {
    playTone(chord.bass, when, 2.6, 0.046, "triangle");
    chord.notes.forEach((chordNote, index) => {
      playTone(chordNote, when + index * 0.045, 2.9, 0.014, "sine");
    });
  }

  if (position === 5 && Math.random() < 0.55) {
    playBell(note + 24, when, 0.85, 0.015);
  }
}

function startSynthMusic() {
  if (synthOn || !ensureAudioContext()) return;
  synthOn = true;
  musicStep = 0;
  nextNoteTime = audioCtx.currentTime + 0.12;

  const tick = () => {
    if (!synthOn || !audioCtx) return;
    while (nextNoteTime < audioCtx.currentTime + 0.7) {
      scheduleMusicStep(musicStep, nextNoteTime);
      musicStep += 1;
      nextNoteTime += MUSIC_STEP;
    }
    musicLoopTimer = window.setTimeout(tick, 200);
  };

  tick();
}

function startBackgroundMusic() {
  if (musicStarted) return;
  musicStarted = true;

  // Must be created inside the first gesture for mobile autoplay rules.
  ensureAudioContext();

  const audio = els.bgMusic;
  if (!audio) {
    startSynthMusic();
    return;
  }

  audio.volume = 0.4;
  let filePlaying = false;
  let fallbackTimer = 0;

  const useFallback = () => {
    if (filePlaying || synthOn) return;
    audio.pause();
    startSynthMusic();
  };

  audio.addEventListener("playing", () => {
    if (synthOn) {
      // The synth is already carrying the melody; don't double up.
      audio.pause();
      return;
    }
    filePlaying = true;
    window.clearTimeout(fallbackTimer);
  });

  audio.addEventListener("error", useFallback, { once: true });

  const attempt = audio.play();
  if (attempt && typeof attempt.then === "function") {
    attempt.catch(useFallback);
  }

  fallbackTimer = window.setTimeout(useFallback, 1600);
  updateMuteUI();
}

function setMuted(value) {
  muted = value;
  if (audioCtx && masterGain) {
    masterGain.gain.setTargetAtTime(muted ? 0.0001 : 0.82, audioCtx.currentTime, 0.05);
  }
  if (els.bgMusic) els.bgMusic.muted = muted;
  updateMuteUI();
}

function updateMuteUI() {
  if (!els.muteBtn) return;
  const icon = els.muteBtn.querySelector("span");
  els.muteBtn.classList.toggle("is-muted", muted);
  els.muteBtn.setAttribute("aria-pressed", String(muted));
  els.muteBtn.setAttribute(
    "aria-label",
    muted ? "Unmute background music" : musicStarted ? "Mute background music" : "Start music"
  );
  els.muteBtn.setAttribute("title", muted ? "Music is off" : musicStarted ? "Music is on" : "Tap to start music");
  if (icon) icon.textContent = muted ? "🔇" : "🎵";
}

function unlockAudioOnce() {
  ensureAudioContext();
  startBackgroundMusic();
}

if (els.muteBtn) {
  els.muteBtn.addEventListener("click", () => {
    ensureAudioContext();
    if (!musicStarted) startBackgroundMusic();
    setMuted(!muted);
  });
}

/* ----------------------------------- SFX ---------------------------------- */

function noiseBurst(duration = 0.18, level = 0.09, frequency = 1100, quality = 0.8) {
  const ctx = ensureAudioContext();
  if (!ctx || !masterGain) return;
  const length = Math.max(1, Math.floor(ctx.sampleRate * duration));
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i += 1) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / length);
  }
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = frequency;
  filter.Q.value = quality;
  const gain = ctx.createGain();
  gain.gain.value = level;
  source.connect(filter);
  filter.connect(gain);
  gain.connect(masterGain);
  source.start();
}

function sfxTick() {
  const ctx = ensureAudioContext();
  if (!ctx || !masterGain) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(880, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.035, now + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
  osc.connect(gain);
  gain.connect(masterGain);
  osc.start(now);
  osc.stop(now + 0.09);
}

function sfxPop() {
  const ctx = ensureAudioContext();
  if (!ctx || !masterGain) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(340, now);
  osc.frequency.exponentialRampToValueAtTime(90, now + 0.12);
  gain.gain.setValueAtTime(0.18, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
  osc.connect(gain);
  gain.connect(masterGain);
  osc.start(now);
  osc.stop(now + 0.18);
  noiseBurst(0.14, 0.075, 900, 0.7);
}

function sfxChime(frequencies = [1046.5, 1318.5, 1568], spacing = 0.08) {
  const ctx = ensureAudioContext();
  if (!ctx || !masterGain) return;
  const now = ctx.currentTime;
  frequencies.forEach((frequency, index) => {
    const start = now + index * spacing;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.075, start + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.75);
    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(start);
    osc.stop(start + 0.8);
  });
}

function sfxWhoosh() {
  noiseBurst(0.45, 0.06, 620, 0.6);
  sfxChime([880, 1174.7, 1567.9], 0.07);
}

/* ========================================================================== */
/* Confetti & fireworks                                                       */
/* ========================================================================== */

const FX = (() => {
  const canvas = els.fx;
  const ctx = canvas && canvas.getContext ? canvas.getContext("2d") : null;
  const particles = [];
  let width = 0;
  let height = 0;
  let dpr = 1;
  let raf = 0;
  let running = false;
  let lastFrame = 0;
  let finaleTimer = 0;
  const reduce = prefersReducedMotion();

  const palette = ["#ffd58e", "#ff92ac", "#f7e8c8", "#cbb0ff", "#92e2c9", "#f0a95d", "#ff7a96", "#fff7e3"];
  const fireworkColors = [
    ["#ffd58e", "#ffeecb", "#f0a95d"],
    ["#ff92ac", "#ffc1ce", "#ff6d92"],
    ["#cbb0ff", "#eee4ff", "#9d7bff"],
    ["#92e2c9", "#d7fff2", "#55c8a4"],
  ];

  function resize() {
    if (!canvas || !ctx) return;
    const rect = canvas.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function startLoop() {
    if (running) return;
    running = true;
    lastFrame = performance.now();
    raf = window.requestAnimationFrame(frame);
  }

  function spawnConfetti(x, y, count = 42, angle = -Math.PI / 2, spread = Math.PI * 2, speed = 260) {
    if (!ctx) return;
    const total = Math.round(count * (reduce ? 0.5 : 1));
    for (let i = 0; i < total; i += 1) {
      const theta = angle + (Math.random() - 0.5) * spread;
      const velocity = speed * (0.42 + Math.random() * 0.85);
      particles.push({
        type: "confetti",
        x,
        y,
        vx: Math.cos(theta) * velocity,
        vy: Math.sin(theta) * velocity,
        gravity: 380 + Math.random() * 180,
        drag: 0.985,
        w: 4 + Math.random() * 6,
        h: 7 + Math.random() * 9,
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 11,
        color: palette[Math.floor(Math.random() * palette.length)],
        life: 2.1 + Math.random() * 2.2,
        age: 0,
        shape: Math.random() < 0.22 ? "circle" : "rect",
      });
    }
    startLoop();
  }

  function popAt(x, y) {
    spawnConfetti(x, y, 34, -Math.PI / 2, Math.PI * 2, 240);
  }

  function poppers() {
    if (!ctx) return;
    const y = height * 0.98;
    for (let i = 0; i < 2; i += 1) {
      const x = i === 0 ? -8 : width + 8;
      const angle = i === 0 ? -Math.PI / 3.2 : -Math.PI + Math.PI / 3.2;
      spawnConfetti(x, y, 55, angle, 0.7, 340);
    }
    startLoop();
  }

  function fireworkExplosion(x, y, colors) {
    const total = Math.round((58 + Math.random() * 26) * (reduce ? 0.5 : 1));
    for (let i = 0; i < total; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 55 + Math.random() * 235;
      particles.push({
        type: "spark",
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        gravity: 54,
        drag: 0.982,
        size: 1 + Math.random() * 2.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1.3 + Math.random() * 1.4,
        age: 0,
      });
    }
    particles.push({
      type: "flash",
      x,
      y,
      size: 25,
      life: 0.35,
      age: 0,
      color: colors[0],
    });
    startLoop();
  }

  function launchFirework(targetX, targetY) {
    if (!ctx) return;
    const x = targetX ?? width * (0.18 + Math.random() * 0.64);
    const y = targetY ?? height * (0.13 + Math.random() * 0.34);
    const duration = 0.92 + Math.random() * 0.24;
    const colors = fireworkColors[Math.floor(Math.random() * fireworkColors.length)];
    particles.push({
      type: "rocket",
      x,
      y: height + 10,
      startY: height + 10,
      vx: (Math.random() - 0.5) * 30,
      vy: -((height + 10 - y) / duration) - 64,
      gravity: 120,
      life: duration,
      age: 0,
      color: colors[0],
      colors,
    });
    startLoop();
  }

  function celebrate() {
    poppers();
    launchFirework();
    window.setTimeout(() => launchFirework(), 260);
    window.setTimeout(() => launchFirework(), 620);
  }

  function startFinaleLoop() {
    stopFinaleLoop();
    finaleTimer = window.setInterval(() => {
      if (state.currentScreen !== "finale") return;
      launchFirework();
      if (Math.random() < 0.38) poppers();
    }, 4200);
  }

  function stopFinaleLoop() {
    if (finaleTimer) {
      window.clearInterval(finaleTimer);
      finaleTimer = 0;
    }
  }

  function frame(now) {
    if (!running || !ctx) return;
    const dt = Math.min(0.034, Math.max(0.001, (now - lastFrame) / 1000));
    lastFrame = now;
    ctx.clearRect(0, 0, width, height);

    for (let i = particles.length - 1; i >= 0; i -= 1) {
      const p = particles[i];
      p.age += dt;

      if (p.type === "rocket") {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vy += p.gravity * dt;
        const alpha = Math.max(0, 1 - p.age / p.life);
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.vx * 0.035, p.y - p.vy * 0.035);
        ctx.stroke();
        ctx.restore();
        if (p.age >= p.life) {
          fireworkExplosion(p.x, p.y, p.colors);
          particles.splice(i, 1);
        }
        continue;
      }

      if (p.type === "flash") {
        if (p.age >= p.life) {
          particles.splice(i, 1);
          continue;
        }
        const alpha = Math.max(0, 1 - p.age / p.life);
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * (1 + p.age * 5));
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, "rgba(255, 210, 150, 0)");
        ctx.save();
        ctx.globalAlpha = alpha * 0.7;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 + p.age * 5), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        continue;
      }

      p.vy += p.gravity * dt;
      p.vx *= p.drag;
      p.vy *= p.drag;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.age += 0;

      if (p.age >= p.life || p.y > height + 80) {
        particles.splice(i, 1);
        continue;
      }

      const alpha = Math.min(1, Math.max(0, (1 - p.age / p.life) * 1.35));

      if (p.type === "spark") {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 7;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      } else {
        p.rot += p.vr * dt;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        if (p.shape === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, p.w * 0.5, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        }
        ctx.restore();
      }
    }

    if (particles.length === 0) {
      running = false;
      ctx.clearRect(0, 0, width, height);
      return;
    }

    raf = window.requestAnimationFrame(frame);
  }

  window.addEventListener("resize", () => {
    window.cancelAnimationFrame(raf);
    resize();
    if (particles.length) {
      running = false;
      startLoop();
    }
  });

  return {
    resize,
    start: resize,
    popAt,
    confetti: spawnConfetti,
    poppers,
    launchFirework,
    celebrate,
    startFinaleLoop,
    stopFinaleLoop,
  };
})();

/* ========================================================================== */
/* Screen navigation — forward only                                           */
/* ========================================================================== */

function goTo(name) {
  const nextIndex = SCREEN_ORDER.indexOf(name);
  const currentIndex = SCREEN_ORDER.indexOf(state.currentScreen);
  if (nextIndex === -1 || nextIndex <= currentIndex || state.transitioning) return;

  const current = $id(`screen-${state.currentScreen}`);
  const next = $id(`screen-${name}`);
  if (!next) return;

  state.transitioning = true;
  next.scrollTop = 0;
  next.classList.add("is-active");
  next.setAttribute("tabindex", "-1");
  next.focus({ preventScroll: true });
  if (current) current.classList.add("is-leaving");

  state.currentScreen = name;
  document.body.dataset.screen = name;
  announce(name === "finale" ? "Your grand finale, Ammu." : "Next surprise opened.");

  window.setTimeout(() => {
    if (current) {
      current.classList.remove("is-active", "is-leaving");
    }
    state.transitioning = false;
  }, 720);

  if (name === "scratch") {
    window.setTimeout(initScratchCard, 380);
  }

  if (name === "finale") {
    window.setTimeout(startFinale, 420);
  }

  if (!musicStarted) startBackgroundMusic();
}

function appPoint(element) {
  const appRect = els.app.getBoundingClientRect();
  const rect = element.getBoundingClientRect();
  return {
    x: rect.left - appRect.left + rect.width / 2,
    y: rect.top - appRect.top + rect.height / 2,
  };
}

/* ========================================================================== */
/* 0 · Lock screen                                                            */
/* ========================================================================== */

function updatePinDisplay() {
  if (!els.pinDots) return;
  const dots = $$("span", els.pinDots);
  dots.forEach((dot, index) => dot.classList.toggle("is-filled", index < state.code.length));
}

function setLockMessage(text, tone = "") {
  if (!els.lockMessage) return;
  els.lockMessage.classList.remove("is-error", "is-success");
  if (tone) els.lockMessage.classList.add(tone);
  els.lockMessage.innerHTML = text;
}

function resetCode() {
  state.code = "";
  updatePinDisplay();
}

function checkLockCode() {
  if (state.unlocked) return;
  if (state.code.length < 4) {
    setLockMessage("Four little numbers, Ammu — you're almost there 💛", "is-error");
    return;
  }
  if (LOCK_CODES.includes(state.code)) {
    unlockSurprise();
    return;
  }
  els.pinDots.classList.remove("is-wrong");
  void els.pinDots.offsetWidth;
  els.pinDots.classList.add("is-wrong");
  setLockMessage("Hmm, that's not one of our dates. Try 1208 or 0808, Buuchiii 🙈", "is-error");
  announce("That code is not one of our dates. Try again.");
  window.setTimeout(() => {
    resetCode();
    els.pinDots.classList.remove("is-wrong");
    setLockMessage("Hint: Enter one of your special dates as the 4-digit code");
  }, 760);
}

function unlockSurprise() {
  if (state.unlocked) return;
  state.unlocked = true;
  setLockMessage("Unlocked... just like my heart, every single time. 💛", "is-success");
  updatePinDisplay();
  sfxChime([1046.5, 1318.5, 1568, 2093], 0.085);
  const point = appPoint($(".padlock", els.lockLocked) || els.lockLocked);
  FX.confetti(point.x, point.y, 60, -Math.PI / 2, Math.PI * 2, 270);
  announce("Unlocked. Your countdown to November 8 is ready.");

  window.setTimeout(() => {
    els.lockLocked.style.transition = "opacity .42s ease, transform .5s ease";
    els.lockLocked.style.opacity = "0";
    els.lockLocked.style.transform = "translateY(-12px) scale(.97)";
    window.setTimeout(() => {
      els.lockLocked.hidden = true;
      els.lockUnlocked.hidden = false;
      updateCountdown();
      els.peekInside.focus({ preventScroll: true });
    }, 440);
  }, 420);
}

if (els.keypad) {
  els.keypad.addEventListener("click", (event) => {
    const button = event.target.closest("[data-key]");
    if (!button || state.unlocked) return;
    const key = button.dataset.key;
    if (key === "clear") {
      state.code = state.code.slice(0, -1);
      updatePinDisplay();
      sfxTick();
      return;
    }
    if (key === "enter") {
      checkLockCode();
      return;
    }
    if (!/^\d$/.test(key) || state.code.length >= 4) return;
    state.code += key;
    updatePinDisplay();
    sfxTick();
    if (state.code.length === 4) {
      window.setTimeout(checkLockCode, 240);
    }
  });
}

// Unlock surprise on bypass link click
const bypassLink = document.querySelector('.bypass-link');
if (bypassLink) {
  bypassLink.addEventListener("click", (event) => {
    event.preventDefault();
    unlockSurprise();
  });
}

document.addEventListener("keydown", (event) => {
  if (state.currentScreen !== "lock" || state.unlocked) return;
  if (/^\d$/.test(event.key) && state.code.length < 4) {
    state.code += event.key;
    updatePinDisplay();
    sfxTick();
    if (state.code.length === 4) window.setTimeout(checkLockCode, 240);
  } else if (event.key === "Backspace") {
    event.preventDefault();
    state.code = state.code.slice(0, -1);
    updatePinDisplay();
  } else if (event.key === "Enter") {
    checkLockCode();
  }
});

function updateCountdown() {
  if (!els.cdDays) return;
  const now = new Date();
  const isBirthday = now.getMonth() === BIRTHDAY_MONTH && now.getDate() === BIRTHDAY_DAY;
  let diff = 0;

  if (!isBirthday) {
    const target = getNextBirthday(now);
    diff = Math.max(0, target.getTime() - now.getTime());
  }

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);

  els.cdDays.textContent = pad(days);
  els.cdHours.textContent = pad(hours);
  els.cdMins.textContent = pad(mins);
  els.cdSecs.textContent = pad(secs);

  if (els.countdownSub) {
    els.countdownSub.textContent = isBirthday
      ? "It's your day, Ammu! Happiest birthday, my love. 🎂"
      : "Every second brings me closer to celebrating you.";
  }
}

if (els.peekInside) {
  els.peekInside.addEventListener("click", () => {
    startBackgroundMusic();
    goTo("hero");
  });
}

/* ========================================================================== */
/* 1 · Hero + dodging No button                                               */
/* ========================================================================== */

function dodgeNo(event) {
  if (event) event.preventDefault();
  const now = performance.now();
  if (now - state.lastDodge < 260) return;
  state.lastDodge = now;
  state.dodges += 1;

  const button = els.dodgeNo;
  const zone = els.dodgeZone;
  if (!button || !zone) return;

  // Reset to its natural flex position to measure the available playground.
  button.style.transform = "none";
  const base = button.getBoundingClientRect();
  const bounds = zone.getBoundingClientRect();
  const roomRight = Math.max(0, bounds.right - base.right - 2);
  const roomLeft = Math.max(0, base.left - bounds.left - 2);
  const goRight = Math.random() < 0.77;
  const distance = 12 + Math.random() * (goRight ? Math.min(64, roomRight) : Math.min(38, roomLeft));
  const dx = goRight ? distance : -distance;
  const dy = (Math.random() * 2 - 1) * 22;
  const rotation = (Math.random() * 2 - 1) * 13;

  button.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px) rotate(${rotation.toFixed(1)}deg)`;
  sfxTick();

  if (state.dodges === 1) {
    els.dodgeTease.textContent = "Nice try, Buuchiii 😌";
  } else if (state.dodges === 2) {
    els.dodgeTease.textContent = "The No button is shy today 🙈";
  } else {
    els.dodgeTease.textContent = "Only Yes works here, Ammu 💛";
    button.textContent = "Still no 🙈";
  }
}

if (els.dodgeNo) {
  ["pointerenter", "pointerdown", "click", "focus"].forEach((type) => {
    els.dodgeNo.addEventListener(type, dodgeNo);
  });
}

if (els.heroYes) {
  els.heroYes.addEventListener("click", () => {
    startBackgroundMusic();
    sfxChime([1046.5, 1318.5, 1568], 0.08);
    goTo("balloons");
  });
}

/* ========================================================================== */
/* 2 · Balloons                                                               */
/* ========================================================================== */

if (els.balloonSlots.length) {
  els.balloonSlots.forEach((slot) => {
    slot.addEventListener("click", () => {
      if (slot.classList.contains("popped")) return;
      slot.classList.add("popped");
      slot.setAttribute("aria-disabled", "true");
      state.balloonsPopped += 1;
      sfxPop();

      const point = appPoint(slot);
      FX.popAt(point.x, point.y);

      const remaining = els.balloonSlots.length - state.balloonsPopped;
      if (els.popProgress) {
        els.popProgress.textContent =
          remaining === 0 ? "All four words are out — You are my love, Ammu! 💛" : `${remaining} little balloon${remaining === 1 ? "" : "s"} waiting for you 🎈`;
      }

      if (state.balloonsPopped === els.balloonSlots.length) {
        window.setTimeout(() => {
          reveal(els.loveBanner);
          reveal(els.toCake);
          FX.celebrate();
          sfxChime([1046.5, 1318.5, 1568, 2093], 0.095);
          announce("You are my love, Buuchiii.");
        }, 350);
      }
    });
  });
}

if (els.toCake) {
  els.toCake.addEventListener("click", () => {
    sfxWhoosh();
    goTo("cake");
  });
}

/* ========================================================================== */
/* 3 · Cake + microphone                                                      */
/* ========================================================================== */

function stopMic() {
  const mic = state.mic;
  if (mic.raf) window.cancelAnimationFrame(mic.raf);
  mic.raf = 0;
  mic.listening = false;
  if (mic.source) {
    try {
      mic.source.disconnect();
    } catch (error) {
      // Already disconnected.
    }
  }
  if (mic.stream) {
    mic.stream.getTracks().forEach((track) => track.stop());
  }
  mic.stream = null;
  mic.source = null;
  mic.analyser = null;
}

function blowOutCandles(source = "tap") {
  if (state.candlesOut) return;
  state.candlesOut = true;
  stopMic();
  els.candles.classList.add("is-out");
  els.candles.disabled = true;
  els.blowBtn.disabled = true;
  els.blowBtn.hidden = true;
  els.micStatus.classList.remove("is-listening");
  els.micStatus.textContent =
    source === "mic"
      ? "Three flames out, one beautiful wish in. I heard it, Ammu. 💛"
      : "Candles out, wish made. Ee smile eppudu ilaage undali. 💛";
  sfxWhoosh();
  const point = appPoint(els.cake);
  FX.confetti(point.x, point.y - 40, 52, -Math.PI / 2, Math.PI * 2, 250);
  reveal(els.cutBtn);
  announce("Candles out. Your wish is safe with me. Now cut the cake.");
}

async function startMic() {
  if (state.candlesOut || state.mic.listening) return;

  if (!window.isSecureContext) {
    els.micStatus.textContent = "Mic needs HTTPS or localhost, Ammu. Tap the candles instead — wish still works 💛";
    return;
  }

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    els.micStatus.textContent = "This browser is shy about microphones. Tap the candles, Ammu 💛";
    return;
  }

  els.micStatus.textContent = "Asking for mic permission... say yes, Ammu 🎤";
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: true },
    });

    const ctx = ensureAudioContext();
    if (!ctx) {
      stream.getTracks().forEach((track) => track.stop());
      return;
    }

    const source = ctx.createMediaStreamSource(stream);
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 512;
    analyser.smoothingTimeConstant = 0.6;
    source.connect(analyser);

    state.mic.stream = stream;
    state.mic.source = source;
    state.mic.analyser = analyser;
    state.mic.listening = true;

    els.blowBtn.textContent = "🎤 Listening... blow gently, Ammu";
    els.micStatus.classList.add("is-listening");
    els.micStatus.textContent = "I'm listening 🎤 — blow softly into your phone, or tap the candles.";
    announce("Microphone listening. Blow gently to put out the candles.");

    const data = new Uint8Array(analyser.frequencyBinCount);
    let loudFrames = 0;

    const listen = () => {
      if (!state.mic.listening || !state.mic.analyser) return;
      analyser.getByteTimeDomainData(data);
      let sum = 0;
      for (let i = 0; i < data.length; i += 1) {
        const value = (data[i] - 128) / 128;
        sum += value * value;
      }
      const rms = Math.sqrt(sum / data.length);
      if (rms > 0.075) {
        loudFrames += 1;
        if (loudFrames >= 7) {
          blowOutCandles("mic");
          return;
        }
      } else {
        loudFrames = 0;
      }
      state.mic.raf = window.requestAnimationFrame(listen);
    };

    listen();
  } catch (error) {
    stopMic();
    els.micStatus.classList.remove("is-listening");
    els.micStatus.textContent = "Mic permission is off. Tap the candles instead, Ammu — your wish still works 💛";
    els.blowBtn.textContent = "🌬️ Tap Candles to Blow Out";
    announce("Microphone not available. Tap the candles to blow them out.");
  }
}

if (els.blowBtn) {
  els.blowBtn.addEventListener("click", () => {
    if (state.candlesOut) return;
    startMic();
  });
}

if (els.candles) {
  els.candles.addEventListener("click", () => blowOutCandles("tap"));
}

if (els.cutBtn) {
  els.cutBtn.addEventListener("click", () => {
    if (state.cakeCut) return;
    state.cakeCut = true;
    els.cake.classList.add("is-cut");
    els.cutBtn.disabled = true;
    els.cutBtn.textContent = "Serving your slice... 🍰";
    sfxWhoosh();
    const point = appPoint(els.cake);
    FX.confetti(point.x, point.y - 20, 40, -Math.PI / 2, Math.PI * 2, 230);
    announce("Cutting the first slice for Ammu.");

    window.setTimeout(() => {
      els.cutBtn.hidden = true;
      reveal(els.feedingNote);
    }, 850);

    window.setTimeout(() => {
      reveal(els.toRoses);
      announce("The first slice is for you. Now, roses.");
    }, 1950);
  });
}

if (els.toRoses) {
  els.toRoses.addEventListener("click", () => {
    goTo("roses");
  });
}

/* ========================================================================== */
/* 4 · Roses                                                                  */
/* ========================================================================== */

function bloomBouquet() {
  if (!els.bouquet) return;
  if (state.bouquetBloomed) {
    sfxChime([1046.5, 1318.5, 1568], 0.06);
    return;
  }
  state.bouquetBloomed = true;
  els.bouquet.classList.add("is-bloomed");
  els.bouquetHint.textContent = "Six little notes, blooming just for you 💌";
  renderLoveNotes();
  sfxChime([880, 1046.5, 1318.5, 1568, 2093], 0.075);
  const point = appPoint(els.bouquet);
  FX.confetti(point.x, point.y - 30, 56, -Math.PI / 2, Math.PI * 2, 260);
  announce("Six love notes have bloomed for you, Ammu.");

  window.setTimeout(() => {
    reveal(els.toScratch);
  }, 900);
}

if (els.bouquet) {
  els.bouquet.addEventListener("click", bloomBouquet);
}

if (els.toScratch) {
  els.toScratch.addEventListener("click", () => {
    sfxWhoosh();
    goTo("scratch");
  });
}

/* ========================================================================== */
/* 5 · Scratch card                                                           */
/* ========================================================================== */

const scratch = {
  ctx: null,
  canvas: null,
  width: 0,
  height: 0,
  dpr: 1,
  drawing: false,
  last: null,
  cols: 0,
  rows: 0,
  cell: 10,
  grid: null,
  scratched: 0,
  moves: 0,
  brush: 24,
  bound: false,
  initialized: false,
};

function drawGoldFoil(ctx, width, height) {
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#6e4516");
  gradient.addColorStop(0.14, "#bd8738");
  gradient.addColorStop(0.31, "#fce6aa");
  gradient.addColorStop(0.47, "#d9a24c");
  gradient.addColorStop(0.63, "#fff2c6");
  gradient.addColorStop(0.79, "#b7792b");
  gradient.addColorStop(1, "#efc877");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  for (let i = 0; i < 260; i += 1) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const radius = Math.random() * 3.2 + 0.4;
    ctx.globalAlpha = Math.random() * 0.22 + 0.03;
    ctx.fillStyle = Math.random() < 0.5 ? "#fff8d9" : "#6d4212";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.35;
  ctx.strokeStyle = "#fff6d5";
  ctx.lineWidth = 1;
  for (let i = 0; i < 24; i += 1) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const length = 5 + Math.random() * 18;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + length, y - length * 0.6);
    ctx.stroke();
  }
  ctx.restore();

  ctx.save();
  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(78, 42, 8, 0.78)";
  ctx.font = '600 38px "Cormorant Garamond", Georgia, serif';
  ctx.fillText("S ♥ A", width / 2, height * 0.38);
  ctx.font = '800 10px "Manrope", sans-serif';
  ctx.letterSpacing = "3px";
  ctx.fillText("SCRATCH THE GOLD", width / 2, height * 0.47);
  ctx.letterSpacing = "0px";
  ctx.font = '500 22px "Caveat", cursive';
  ctx.fillStyle = "rgba(87, 47, 12, 0.7)";
  ctx.fillText("for Ammu", width / 2, height * 0.54);
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.2;
  ctx.strokeStyle = "#6b3d0f";
  ctx.setLineDash([4, 7]);
  ctx.strokeRect(10, 10, width - 20, height - 20);
  ctx.restore();
}

function markScratchGrid(x, y) {
  const cell = scratch.cell;
  const radius = scratch.brush;
  const minCol = Math.max(0, Math.floor((x - radius) / cell));
  const maxCol = Math.min(scratch.cols - 1, Math.floor((x + radius) / cell));
  const minRow = Math.max(0, Math.floor((y - radius) / cell));
  const maxRow = Math.min(scratch.rows - 1, Math.floor((y + radius) / cell));

  for (let row = minRow; row <= maxRow; row += 1) {
    for (let col = minCol; col <= maxCol; col += 1) {
      const index = row * scratch.cols + col;
      if (scratch.grid[index]) continue;
      const centerX = col * cell + cell / 2;
      const centerY = row * cell + cell / 2;
      if (Math.hypot(centerX - x, centerY - y) <= radius) {
        scratch.grid[index] = 1;
        scratch.scratched += 1;
      }
    }
  }
}

function checkScratchProgress() {
  if (state.scratchRevealed) return;
  const total = scratch.cols * scratch.rows;
  if (!total) return;
  if (scratch.scratched / total >= 0.42) {
    revealScratchCard("scratch");
  }
}

function scratchAt(clientX, clientY) {
  if (!scratch.ctx || state.scratchRevealed) return;
  const rect = scratch.canvas.getBoundingClientRect();
  const x = clientX - rect.left;
  const y = clientY - rect.top;
  if (x < 0 || y < 0 || x > scratch.width || y > scratch.height) return;

  const ctx = scratch.ctx;
  ctx.save();
  ctx.globalCompositeOperation = "destination-out";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = scratch.brush * 2;
  if (scratch.last) {
    ctx.beginPath();
    ctx.moveTo(scratch.last.x, scratch.last.y);
    ctx.lineTo(x, y);
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.arc(x, y, scratch.brush, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  scratch.last = { x, y };
  scratch.moves += 1;
  markScratchGrid(x, y);
  if (scratch.moves % 5 === 0) checkScratchProgress();
}

function bindScratchPointer() {
  if (scratch.bound || !scratch.canvas) return;
  scratch.bound = true;
  const canvas = scratch.canvas;

  canvas.addEventListener("pointerdown", (event) => {
    if (state.scratchRevealed) return;
    event.preventDefault();
    scratch.drawing = true;
    scratch.last = null;
    if (canvas.setPointerCapture) {
      try {
        canvas.setPointerCapture(event.pointerId);
      } catch (error) {
        // Pointer capture may not be available.
      }
    }
    scratchAt(event.clientX, event.clientY);
  });

  canvas.addEventListener("pointermove", (event) => {
    if (!scratch.drawing || state.scratchRevealed) return;
    event.preventDefault();
    scratchAt(event.clientX, event.clientY);
  });

  const stopDrawing = (event) => {
    if (!scratch.drawing) return;
    scratch.drawing = false;
    scratch.last = null;
    checkScratchProgress();
    if (event && event.pointerId != null && canvas.releasePointerCapture) {
      try {
        canvas.releasePointerCapture(event.pointerId);
      } catch (error) {
        // Already released.
      }
    }
  };

  canvas.addEventListener("pointerup", stopDrawing);
  canvas.addEventListener("pointercancel", stopDrawing);
  canvas.addEventListener("pointerleave", () => {
    scratch.last = null;
  });
}

function initScratchCard() {
  if (state.scratchRevealed || !els.scratchCard || !els.scratchCanvas) return;
  const rect = els.scratchCard.getBoundingClientRect();
  if (rect.width < 10 || rect.height < 10) {
    window.setTimeout(initScratchCard, 160);
    return;
  }

  const canvas = els.scratchCanvas;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  scratch.width = rect.width;
  scratch.height = rect.height;
  scratch.dpr = dpr;
  scratch.canvas = canvas;
  canvas.width = Math.round(rect.width * dpr);
  canvas.height = Math.round(rect.height * dpr);

  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  drawGoldFoil(ctx, rect.width, rect.height);

  scratch.ctx = ctx;
  scratch.cols = Math.ceil(rect.width / scratch.cell);
  scratch.rows = Math.ceil(rect.height / scratch.cell);
  scratch.grid = new Uint8Array(scratch.cols * scratch.rows);
  scratch.scratched = 0;
  scratch.moves = 0;
  scratch.drawing = false;
  scratch.last = null;
  scratch.initialized = true;
  bindScratchPointer();
}

function revealScratchCard(source = "scratch") {
  if (state.scratchRevealed) return;
  state.scratchRevealed = true;
  els.scratchCard.classList.add("is-revealed");
  els.scratchHint.textContent = "You are my whole world, Buuchiii. I mean it. ❤️";
  els.scratchHint.classList.add("is-done");
  els.scratchSkip.hidden = true;
  reveal(els.toGallery);
  sfxChime([1046.5, 1318.5, 1568, 2093], 0.09);
  const point = appPoint(els.scratchCard);
  FX.confetti(point.x, point.y, 62, -Math.PI / 2, Math.PI * 2, 280);
  announce("The secret is out. You are my whole world, Buuchiii.");
  if (source === "skip") announce("Secret revealed. You are my whole world.");
}

if (els.scratchSkip) {
  els.scratchSkip.addEventListener("click", () => revealScratchCard("skip"));
}

if (els.toGallery) {
  els.toGallery.addEventListener("click", () => {
    sfxWhoosh();
    goTo("gallery");
  });
}

window.addEventListener("resize", () => {
  if (state.currentScreen !== "scratch" || state.scratchRevealed) return;
  scratch.bound = false;
  scratch.initialized = false;
  window.clearTimeout(window._scratchResizeTimer);
  window._scratchResizeTimer = window.setTimeout(() => {
    const oldCanvas = els.scratchCanvas;
    if (oldCanvas) {
      const fresh = oldCanvas.cloneNode(false);
      oldCanvas.parentNode.replaceChild(fresh, oldCanvas);
      els.scratchCanvas = fresh;
    }
    initScratchCard();
  }, 320);
});

/* ========================================================================== */
/* 6 · Gallery + memory modal                                                 */
/* ========================================================================== */

function openMemory(data) {
  if (!els.modal) return;
  state.lastFocus = document.activeElement;
  if (!els.modal.hidden && els.modal.classList.contains("is-open")) {
    // Already open — just swap the content.
  } else {
    els.modal.hidden = false;
    els.app.classList.add("is-modal-open");
    window.requestAnimationFrame(() => els.modal.classList.add("is-open"));
  }

  els.modalMedia.innerHTML = `<img src="${encodeURI(data.src)}" alt="${escapeHtml(data.alt)}" draggable="false" />`;
  els.modalChip.textContent = data.chip;
  els.modalTitle.textContent = data.title;
  els.modalMeta.textContent = `${data.date} • ${data.place}`;
  els.modalStory.innerHTML = data.story.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
  els.modalSheet.scrollTop = 0;

  window.setTimeout(() => {
    els.modalClose.focus({ preventScroll: true });
  }, 140);
}

function closeMemory() {
  if (!els.modal || els.modal.hidden) return;
  els.modal.classList.remove("is-open");
  els.app.classList.remove("is-modal-open");
  window.setTimeout(() => {
    els.modal.hidden = true;
    if (state.lastFocus && typeof state.lastFocus.focus === "function") {
      state.lastFocus.focus({ preventScroll: true });
    }
  }, 340);
}

if (els.gallery) {
  els.gallery.addEventListener("click", (event) => {
    const button = event.target.closest("[data-photo]");
    if (!button) return;
    const photo = PHOTOS_DATA.find((item) => item.id === button.dataset.photo);
    if (photo) {
      sfxChime([1174.7, 1568], 0.05);
      openMemory(photo);
    }
  });
}

if (els.moments) {
  els.moments.addEventListener("click", (event) => {
    const button = event.target.closest("[data-moment]");
    if (!button) return;
    const moment = MOMENTS_DATA[Number(button.dataset.moment)];
    if (!moment) return;
    const photo = PHOTOS_DATA.find((item) => item.id === moment.photo);
    if (!photo) return;
    sfxChime([1174.7, 1568], 0.05);
    openMemory({
      ...photo,
      chip: moment.icon + " " + moment.date,
      title: moment.title,
      date: moment.date,
      place: photo.place,
      story: moment.story || photo.story,
    });
  });
}

if (els.toMoments) {
  els.toMoments.addEventListener("click", () => {
    goTo("moments");
  });
}

if (els.modal) {
  els.modal.addEventListener("click", (event) => {
    if (event.target.closest("[data-close]")) closeMemory();
  });
}

document.addEventListener("keydown", (event) => {
  if (!els.modal || els.modal.hidden) return;
  if (event.key === "Escape") {
    event.preventDefault();
    closeMemory();
    return;
  }
  if (event.key === "Tab") {
    const focusable = $$('button, [href], [tabindex]:not([tabindex="-1"])', els.modalSheet).filter(
      (node) => !node.hasAttribute("disabled") && node.offsetParent !== null
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

/* ========================================================================== */
/* 7 · Timeline                                                               */
/* ========================================================================== */

if (els.toLanterns) {
  els.toLanterns.addEventListener("click", () => {
    goTo("lanterns");
  });
}

/* ========================================================================== */
/* 8 · Lanterns                                                               */
/* ========================================================================== */

function spawnLantern(index) {
  if (!els.lanternLayer) return;
  const lantern = document.createElement("div");
  lantern.className = "fly-lantern";
  const left = 32 + Math.random() * 36 + (index % 2 === 0 ? -6 : 6);
  lantern.style.setProperty("--left", `${left}%`);
  lantern.style.setProperty("--drift", `${Math.round((Math.random() * 2 - 1) * 42)}px`);
  lantern.style.setProperty("--dur", `${(8 + Math.random() * 2.4).toFixed(2)}s`);
  lantern.style.setProperty("--delay", `${(index * 0.18).toFixed(2)}s`);
  lantern.innerHTML = '<span class="fly-lantern__glow"></span><span class="fly-lantern__body"></span>';
  els.lanternLayer.appendChild(lantern);
  window.setTimeout(() => lantern.remove(), 12000);
}

function releaseWish() {
  if (state.lanternsReleased >= LANTERN_WISHES.length) return;
  const index = state.lanternsReleased;
  const wish = LANTERN_WISHES[index];
  state.lanternsReleased += 1;
  spawnLantern(index);
  spawnLantern(index + 1);

  if (els.wishText) els.wishText.textContent = wish;
  if (els.wishCard) {
    els.wishCard.classList.add("is-lit");
    els.wishCard.classList.remove("is-changing");
    void els.wishCard.offsetWidth;
    els.wishCard.classList.add("is-changing");
  }

  sfxChime([880, 1046.5, 1318.5, 1568], 0.09);
  FX.launchFirework(undefined, undefined);
  reveal(els.toLetter);
  announce("Your wish is in the sky, Ammu.");

  if (state.lanternsReleased === 1) {
    els.releaseWish.textContent = "🕯️ Release Another Wish";
  }

  if (state.lanternsReleased >= LANTERN_WISHES.length) {
    els.releaseWish.disabled = true;
    els.releaseWish.textContent = "Three wishes, sealed in the stars ✨";
  }
}

if (els.releaseWish) {
  els.releaseWish.addEventListener("click", releaseWish);
}

if (els.toLetter) {
  els.toLetter.addEventListener("click", () => {
    goTo("letter");
  });
}

/* ========================================================================== */
/* 9 · Letter                                                                 */
/* ========================================================================== */

function finishLetter() {
  if (!state.letterParts.length) return;
  window.clearTimeout(state.letterTimer);
  state.letterTyping = false;
  state.letterSkipped = true;
  state.letterParts.forEach((part) => {
    part.element.textContent = part.text;
    part.element.classList.remove("is-typing");
  });
  els.skipTyping.hidden = true;
  reveal(els.toGift);
  announce("The letter is yours, Ammu. One last surprise is waiting.");
}

function typeLetter() {
  if (state.letterTyping || state.letterParts.length) return;
  state.letterTyping = true;
  state.letterSkipped = false;
  els.letterText.innerHTML = "";
  state.letterParts = LETTER_PARAGRAPHS.map((paragraph) => {
    const element = document.createElement("p");
    if (paragraph.className) element.className = paragraph.className;
    element.textContent = "";
    els.letterText.appendChild(element);
    return { ...paragraph, element };
  });

  let paragraphIndex = 0;
  let charIndex = 0;
  let current = state.letterParts[0];
  current.element.classList.add("is-typing");

  const tick = () => {
    if (!state.letterTyping) return;
    if (!current) {
      finishLetter();
      return;
    }
    if (charIndex < current.text.length) {
      current.element.textContent += current.text[charIndex];
      charIndex += 1;
      const speed = current.className === "letter-hello" ? 24 : current.className === "letter-sign" ? 20 : 9;
      state.letterTimer = window.setTimeout(tick, speed);
      return;
    }

    current.element.classList.remove("is-typing");
    paragraphIndex += 1;
    charIndex = 0;
    if (paragraphIndex >= state.letterParts.length) {
      finishLetter();
      return;
    }
    current = state.letterParts[paragraphIndex];
    current.element.classList.add("is-typing");
    state.letterTimer = window.setTimeout(tick, 170);
  };

  tick();
}

function openLetter() {
  if (state.letterOpened) return;
  state.letterOpened = true;
  els.envelope.classList.add("is-open");
  els.letterKey.classList.add("is-used");
  els.letterHint.textContent = "Sealed with a heart, opened with love";
  sfxChime([880, 1046.5, 1318.5, 1568], 0.09);
  announce("Your letter is opening, Ammu.");

  window.setTimeout(() => {
    els.letterStage.hidden = true;
    els.letterPaper.hidden = false;
    els.skipTyping.hidden = false;
    typeLetter();
    els.letterPaper.scrollIntoView({ block: "start", behavior: prefersReducedMotion() ? "auto" : "smooth" });
  }, 1020);
}

if (els.letterKey) {
  els.letterKey.addEventListener("click", openLetter);
}

if (els.skipTyping) {
  els.skipTyping.addEventListener("click", finishLetter);
}

if (els.toGift) {
  els.toGift.addEventListener("click", () => {
    sfxWhoosh();
    goTo("gift");
  });
}

/* ========================================================================== */
/* 10 · Gift                                                                  */
/* ========================================================================== */

function openGift() {
  if (state.giftOpen) return;
  state.giftOpen = true;
  els.giftBox.classList.add("is-open");
  els.giftBox.setAttribute("aria-label", "Gift opened. Inside is a promise.");
  els.giftCount.textContent = "3! Open sesame, Buuchiii ✨";
  els.giftCount.classList.add("is-celebrating");
  window.setTimeout(() => els.giftCount.classList.remove("is-celebrating"), 450);
  sfxChime([1046.5, 1318.5, 1568, 2093], 0.1);
  const point = appPoint(els.giftBox);
  FX.celebrate();
  FX.confetti(point.x, point.y, 65, -Math.PI / 2, Math.PI * 2, 300);
  reveal(els.giftReveal);
  announce("Inside is a promise. Naa forever, with you, Ammu.");
  window.setTimeout(() => reveal(els.toFinale), 900);
}

function tapGift() {
  if (state.giftOpen) return;
  state.giftTaps += 1;

  if (state.giftTaps < 3) {
    els.giftBox.classList.remove("tap-1", "tap-2");
    void els.giftBox.offsetWidth;
    els.giftBox.classList.add(`tap-${state.giftTaps}`);
    els.giftCount.textContent =
      state.giftTaps === 1 ? "1... keep going, Ammu 💛" : "2... one more tap, Buuchiii!";
    els.giftCount.classList.add("is-celebrating");
    window.setTimeout(() => els.giftCount.classList.remove("is-celebrating"), 420);
    sfxPop();
    const point = appPoint(els.giftBox);
    FX.popAt(point.x, point.y - 30);
  } else {
    openGift();
  }
}

if (els.giftBox) {
  els.giftBox.addEventListener("click", tapGift);
  els.giftBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      tapGift();
    }
  });
}

if (els.toFinale) {
  els.toFinale.addEventListener("click", () => {
    sfxWhoosh();
    goTo("finale");
  });
}

/* ========================================================================== */
/* 11 · Finale                                                                */
/* ========================================================================== */

function updateLoveTimer() {
  if (!els.tDays) return;
  const diff = Math.max(0, Date.now() - RELATIONSHIP_START.getTime());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  els.tDays.textContent = pad(days, 3);
  els.tHours.textContent = pad(hours);
  els.tMins.textContent = pad(mins);
  els.tSecs.textContent = pad(secs);
}

function startFinale() {
  updateLoveTimer();
  if (state.finaleStarted) {
    FX.celebrate();
    return;
  }
  state.finaleStarted = true;
  sfxChime([1046.5, 1318.5, 1568, 2093], 0.1);
  FX.celebrate();
  FX.startFinaleLoop();
  announce("The grand finale. Happy Birthday, Ammu!");
  window.setTimeout(() => {
    if (state.currentScreen === "finale") FX.launchFirework();
  }, 1400);
}

if (els.blastBtn) {
  els.blastBtn.addEventListener("click", () => {
    FX.celebrate();
    sfxChime([880, 1046.5, 1318.5, 1568, 2093], 0.075);
    announce("More poppers and fireworks for you, Ammu!");
  });
}

/* ========================================================================== */
/* Boot                                                                       */
/* ========================================================================== */

renderGallery();
renderMoments();
updatePinDisplay();
updateCountdown();
updateLoveTimer();
updateMuteUI();
Starfield.start();
FX.start();
document.body.dataset.screen = "lock";

window.setInterval(updateCountdown, 1000);
window.setInterval(updateLoveTimer, 1000);

window.addEventListener("pointerdown", unlockAudioOnce, { once: true, capture: true });
window.addEventListener("keydown", unlockAudioOnce, { once: true, capture: true });

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopMic();
  } else if (musicStarted) {
    ensureAudioContext();
  }
});

window.addEventListener("pagehide", () => {
  stopMic();
  FX.stopFinaleLoop();
  if (synthOn) {
    synthOn = false;
    window.clearTimeout(musicLoopTimer);
  }
});

// Warm up the audio element so a missing music.mp3 falls back quietly.
if (els.bgMusic) {
  els.bgMusic.addEventListener("error", () => {
    if (!synthOn && !musicStarted) updateMuteUI();
  });
}

