// UK SEASIDE — script.js

function showSection(id) {
  // Hide home page
  var home = document.getElementById('home');
  if (home) home.style.display = 'none';

  // Hide all section pages
  var pages = document.querySelectorAll('.section-page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.remove('active');
  }

  // Update nav tabs
  var tabs = document.querySelectorAll('.nav-tab');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }

  // Show target section
  var target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
  }

  // Scroll to very top
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}

function goHome() {
  // Hide all section pages
  var pages = document.querySelectorAll('.section-page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.remove('active');
  }

  // Update nav tabs
  var tabs = document.querySelectorAll('.nav-tab');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }

  // Show home
  var home = document.getElementById('home');
  if (home) home.style.display = 'block';

  // Scroll to top
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}

// ── AUDIO ────────────────────────────────────────────────────────────────────

function playAudio(src) {
  alert('Audio coming soon! Ask your teacher.');
}

// ── LOOK CLOSELY CHIPS ────────────────────────────────────────────────────────

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('spot-chip') && !e.target.dataset.name) {
    e.target.classList.toggle('found');
    if (e.target.classList.contains('found')) {
      e.target.textContent = '✓ ' + e.target.dataset.word;
    } else {
      e.target.textContent = e.target.dataset.word;
    }
  }
});

// ── UK MAP ───────────────────────────────────────────────────────────────────

function showMapInfo(key) {
  var tooltip = document.getElementById('map-tooltip');
  var info = {
    england:  'England is the largest country in the UK. St Ives is in England, in the very south-west corner called Cornwall!',
    scotland: 'Scotland is the most northerly country in the UK, famous for its mountains, lochs and castles.',
    wales:    'Wales is west of England. It has a beautiful coastline, mountains, and a dragon on its flag!',
    nireland: 'Northern Ireland is in the north-east of Ireland, and is part of the United Kingdom.',
    stives:   'St Ives is a beautiful seaside town right at the tip of Cornwall in England — surrounded by sea on three sides!',
  };
  if (tooltip) tooltip.textContent = info[key] || '';
}

// ── ROCK POOL ─────────────────────────────────────────────────────────────────

var creatureFacts = {
  crab:    { name: 'Crab', fact: 'Crabs have 10 legs and walk sideways! They hide under rocks at low tide.' },
  anemone: { name: 'Sea Anemone', fact: 'Sea anemones look like flowers but they are animals! They catch tiny creatures with their tentacles.' },
  limpet:  { name: 'Limpet', fact: 'Limpets cling so tightly to rocks that waves cannot wash them away.' },
  mussel:  { name: 'Mussel', fact: 'Mussels have a hard blue-black shell. They filter seawater to find their food.' },
  starfish:{ name: 'Starfish', fact: 'Starfish have 5 arms and can regrow a lost one! They move very slowly.' },
  shrimp:  { name: 'Shrimp', fact: 'Shrimps are almost see-through! They dart backwards very fast to escape danger.' },
  seaweed: { name: 'Seaweed', fact: 'Seaweed is not a plant — it is an alga. Many rock pool creatures hide inside it.' },
};

function clickCreature(id) {
  var info = creatureFacts[id];
  var box = document.getElementById('creature-info');
  if (box && info) {
    box.innerHTML = '<strong>' + info.name + '</strong> — ' + info.fact;
  }
}

// ── HARBOUR OR PORT ───────────────────────────────────────────────────────────

var hopClues = [
  { text: 'A fishing boat comes here after a long trip out at sea.', answer: 'harbour' },
  { text: 'Huge cranes load containers onto a giant ship.', answer: 'port' },
  { text: 'Lorries drive in and out all day long.', answer: 'port' },
  { text: 'The boat is tied up safely and protected from storms.', answer: 'harbour' },
  { text: 'Thousands of passengers board a ferry here.', answer: 'port' },
  { text: 'Fishermen mend their nets on the harbour wall.', answer: 'harbour' },
  { text: 'A giant cargo ship unloads bananas from Spain.', answer: 'port' },
  { text: 'Small boats bob quietly in sheltered water.', answer: 'harbour' },
];

var hopIndex = 0;
var hopScore = 0;

function showHopClue() {
  var clueEl = document.getElementById('hop-clue');
  var resultEl = document.getElementById('hop-result');
  var scoreEl = document.getElementById('hop-score');
  if (!clueEl) return;
  if (hopIndex < hopClues.length) {
    clueEl.textContent = hopClues[hopIndex].text;
    if (resultEl) resultEl.textContent = '';
  } else {
    clueEl.textContent = 'All done! You scored ' + hopScore + ' out of ' + hopClues.length + '!';
  }
  if (scoreEl) scoreEl.textContent = 'Score: ' + hopScore;
}

function answerHop(choice) {
  if (hopIndex >= hopClues.length) return;
  var correct = hopClues[hopIndex].answer;
  var resultEl = document.getElementById('hop-result');
  if (choice === correct) {
    hopScore++;
    if (resultEl) resultEl.textContent = '✓ Correct!';
  } else {
    if (resultEl) resultEl.textContent = '✗ Not quite — it was a ' + correct + '.';
  }
  hopIndex++;
  setTimeout(showHopClue, 1000);
}

function resetHop() {
  hopIndex = 0; hopScore = 0;
  showHopClue();
}

// ── THEN OR NOW ───────────────────────────────────────────────────────────────

var tonItems = [
  { id: 'ton-1', emoji: '🏊', label: 'Swimming costume', answer: 'now' },
  { id: 'ton-2', emoji: '🚂', label: 'Steam train to seaside', answer: 'then' },
  { id: 'ton-3', emoji: '🏖️', label: 'Playing on the beach', answer: 'both' },
  { id: 'ton-4', emoji: '📱', label: 'Selfie at the seaside', answer: 'now' },
  { id: 'ton-5', emoji: '🍦', label: 'Ice cream cone', answer: 'both' },
  { id: 'ton-6', emoji: '👒', label: 'Long dress and hat at beach', answer: 'then' },
  { id: 'ton-7', emoji: '🪣', label: 'Bucket and spade', answer: 'both' },
  { id: 'ton-8', emoji: '🎡', label: 'Funfair on the pier', answer: 'both' },
];

var tonSelected = null;

function initTonGame() {
  var grid = document.getElementById('ton-grid');
  if (!grid) return;
  grid.innerHTML = '';
  for (var i = 0; i < tonItems.length; i++) {
    var item = tonItems[i];
    var card = document.createElement('div');
    card.className = 'ton-card';
    card.dataset.answer = item.answer;
    card.innerHTML = '<span class="ton-emoji">' + item.emoji + '</span>' + item.label;
    card.addEventListener('click', (function(c) { return function() { selectTonCard(c); }; })(card));
    grid.appendChild(card);
  }
}

function selectTonCard(card) {
  var cards = document.querySelectorAll('.ton-card');
  for (var i = 0; i < cards.length; i++) cards[i].style.outline = '';
  tonSelected = card;
  card.style.outline = '3px solid var(--navy)';
}

function placeTon(zone) {
  if (!tonSelected) return;
  var answer = tonSelected.dataset.answer;
  if (answer === zone) {
    tonSelected.classList.add('correct-' + zone);
    tonSelected.style.outline = '';
  } else {
    tonSelected.style.background = '#f5c6c6';
    var sel = tonSelected;
    setTimeout(function() { sel.style.background = ''; sel.style.outline = ''; }, 900);
  }
  tonSelected = null;
}

// ── MAP QUEST ─────────────────────────────────────────────────────────────────

var mapQuestSteps = [
  { prompt: 'Click on England', target: 'mq-england' },
  { prompt: 'Now click on Scotland', target: 'mq-scotland' },
  { prompt: 'Where is Wales? Click it!', target: 'mq-wales' },
  { prompt: 'Find Northern Ireland and click it', target: 'mq-nireland' },
  { prompt: 'Finally — where is St Ives? Click the red dot!', target: 'mq-stives' },
];
var mqStep = 0, mqScore = 0;

function showMqStep() {
  var prompt = document.getElementById('mq-prompt');
  var badge = document.getElementById('mq-score-display');
  if (!prompt) return;
  if (mqStep < mapQuestSteps.length) {
    prompt.textContent = mapQuestSteps[mqStep].prompt;
  } else {
    prompt.textContent = 'Brilliant! You scored ' + mqScore + ' out of 5!';
  }
  if (badge) badge.textContent = 'Score: ' + mqScore + ' / 5';
}

function clickMqRegion(id) {
  if (mqStep >= mapQuestSteps.length) return;
  var expected = mapQuestSteps[mqStep].target;
  var el = document.getElementById(id);
  if (id === expected) {
    if (el) el.classList.add('correct');
    mqScore++;
    mqStep++;
    setTimeout(showMqStep, 600);
  } else {
    if (el) { el.classList.add('wrong'); setTimeout(function() { el.classList.remove('wrong'); }, 700); }
  }
}

function resetMapQuest() {
  mqStep = 0; mqScore = 0;
  document.querySelectorAll('.mapquest-region').forEach(function(r) { r.classList.remove('correct','wrong'); });
  showMqStep();
}

// ── MATCH THE WORD ────────────────────────────────────────────────────────────

var matchPairs = [
  { word: 'Beach', emoji: '🏖️', key: 'beach' },
  { word: 'Rock Pool', emoji: '🦀', key: 'rockpool' },
  { word: 'Cliff', emoji: '🪨', key: 'cliff' },
  { word: 'Harbour', emoji: '⚓', key: 'harbour' },
  { word: 'Port', emoji: '🚢', key: 'port' },
  { word: 'Pier', emoji: '🪧', key: 'pier' },
  { word: 'Promenade', emoji: '🚶', key: 'promenade' },
  { word: 'Lighthouse', emoji: '🗼', key: 'lighthouse' },
];
var selectedWord = null;

function initMatchGame() {
  var wordCol = document.getElementById('match-words');
  var imgCol = document.getElementById('match-images');
  if (!wordCol || !imgCol) return;
  var shuffled = matchPairs.slice().sort(function() { return Math.random() - 0.5; });
  matchPairs.forEach(function(p) {
    var btn = document.createElement('button');
    btn.className = 'match-word';
    btn.textContent = p.word;
    btn.dataset.key = p.key;
    btn.addEventListener('click', function() { selectWord(btn, p.key); });
    wordCol.appendChild(btn);
  });
  shuffled.forEach(function(p) {
    var box = document.createElement('div');
    box.className = 'match-img-box';
    box.textContent = p.emoji;
    box.dataset.key = p.key;
    box.setAttribute('tabindex', '0');
    box.addEventListener('click', function() { checkMatch(box, p.key); });
    imgCol.appendChild(box);
  });
}

function selectWord(btn, key) {
  document.querySelectorAll('.match-word').forEach(function(b) { b.classList.remove('selected'); });
  selectedWord = key;
  btn.classList.add('selected');
}

function checkMatch(imgBox, imgKey) {
  if (!selectedWord) return;
  var wordBtn = document.querySelector('.match-word[data-key="' + selectedWord + '"]');
  if (selectedWord === imgKey) {
    if (wordBtn) wordBtn.classList.add('correct');
    imgBox.style.background = '#c8dfc4';
  } else {
    if (wordBtn) { wordBtn.classList.add('wrong'); setTimeout(function() { wordBtn.classList.remove('wrong'); }, 800); }
  }
  selectedWord = null;
  document.querySelectorAll('.match-word').forEach(function(b) { b.classList.remove('selected'); });
}

// ── DRAG SORT ─────────────────────────────────────────────────────────────────

var sortAnswers = {
  'bathing-costume':'then','swimming-costume':'now','donkey-ride':'then',
  'ice-cream':'both','steam-train':'then','car':'now',
  'bucket-spade':'both','smartphone':'now','beach-hut':'both','gramophone':'then'
};

function initDragSort() {
  document.querySelectorAll('.sort-item').forEach(function(item) {
    item.setAttribute('draggable','true');
    item.addEventListener('dragstart', function(e) { e.dataTransfer.setData('text/plain', this.dataset.id); this.classList.add('dragging'); });
    item.addEventListener('dragend', function() { this.classList.remove('dragging'); });
  });
  document.querySelectorAll('.sort-zone').forEach(function(zone) {
    zone.addEventListener('dragover', function(e) { e.preventDefault(); this.classList.add('drag-over'); });
    zone.addEventListener('dragleave', function() { this.classList.remove('drag-over'); });
    zone.addEventListener('drop', function(e) {
      e.preventDefault(); this.classList.remove('drag-over');
      var id = e.dataTransfer.getData('text/plain');
      var item = document.querySelector('.sort-item[data-id="' + id + '"]');
      if (item) this.appendChild(item);
      checkSortAnswers();
    });
  });
}

function checkSortAnswers() {
  document.querySelectorAll('.sort-item').forEach(function(item) {
    var zone = item.closest('.sort-zone');
    if (!zone) return;
    item.style.background = (sortAnswers[item.dataset.id] === zone.dataset.zone) ? '#c8dfc4' : '#f5c6c6';
  });
}

// ── SPOT IT ───────────────────────────────────────────────────────────────────

var spotFoundCount = 0;

function initSpotIt() {
  spotFoundCount = 0;
}

// ── INIT ──────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
  initMatchGame();
  initDragSort();
  initTonGame();
  showHopClue();
  showMqStep();
});
