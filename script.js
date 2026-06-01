// UK SEASIDE — script.js

// ── NAVIGATION ──────────────────────────────────────────────────────────────

function showSection(id) {
  var pages = document.querySelectorAll('.section-page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.remove('active');
  }
  var tabs = document.querySelectorAll('.nav-tab');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }
  var target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0);
  }
  var tab = document.querySelector('.nav-tab[data-target="' + id + '"]');
  if (tab) tab.classList.add('active');
}

function goHome() {
  var pages = document.querySelectorAll('.section-page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.remove('active');
  }
  var tabs = document.querySelectorAll('.nav-tab');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }
  window.scrollTo(0, 0);
}

// ── AUDIO ────────────────────────────────────────────────────────────────────

function playAudio(src) {
  alert('Audio coming soon! Ask your teacher.');
}

// ── LOOK CLOSELY CHIPS ────────────────────────────────────────────────────────

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('zoom-chip')) {
    e.target.classList.toggle('found');
    if (e.target.classList.contains('found')) {
      e.target.textContent = '✓ ' + e.target.dataset.word;
    } else {
      e.target.textContent = e.target.dataset.word;
    }
  }
});

// ── UK MAP ───────────────────────────────────────────────────────────────────

var mapInfo = {
  england:  'England 🏴󠁧󠁢󠁥󠁮󠁧󠁿 — the largest country in the UK. St Ives is in England, in the very south-west corner called Cornwall.',
  scotland: 'Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿 — the most northerly country in the UK, famous for its mountains and lochs.',
  wales:    'Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿 — west of England, known for its beautiful coastline.',
  nireland: 'Northern Ireland 🇬🇧 — in the north-east of Ireland, part of the UK.',
  stives:   '📍 St Ives — a beautiful seaside town in Cornwall, England. It sits right by the sea!',
};

function showMapInfo(key) {
  var tooltip = document.getElementById('map-tooltip');
  if (tooltip) tooltip.textContent = mapInfo[key] || '';
}

// ── ROCK POOL ─────────────────────────────────────────────────────────────────

var creatureFacts = {
  crab:    { name: 'Crab 🦀', fact: 'Crabs have 10 legs and walk sideways! They hide under rocks.' },
  anemone: { name: 'Sea Anemone 🌸', fact: 'Sea anemones look like flowers but they are animals!' },
  limpet:  { name: 'Limpet 🐚', fact: 'Limpets cling so tightly to rocks that waves cannot wash them away.' },
  mussel:  { name: 'Mussel 🦪', fact: 'Mussels have a hard blue-black shell and filter water to find food.' },
  starfish:{ name: 'Starfish ⭐', fact: 'Starfish have 5 arms and can regrow a lost arm!' },
  shrimp:  { name: 'Shrimp 🦐', fact: 'Shrimps are almost see-through! They dart backwards to escape danger.' },
  seaweed: { name: 'Seaweed 🌿', fact: 'Seaweed is not a plant — it is an alga. Many creatures hide in it.' },
};

function clickCreature(id) {
  var info = creatureFacts[id];
  var box = document.getElementById('creature-info');
  if (box && info) {
    box.innerHTML = '<strong>' + info.name + '</strong><br>' + info.fact;
  }
}

// ── HARBOUR OR PORT ───────────────────────────────────────────────────────────

var hopClues = [
  { text: 'A fishing boat comes here after a long trip.', answer: 'harbour' },
  { text: 'Huge cranes load containers onto a ship.', answer: 'port' },
  { text: 'Lorries drive in and out all day long.', answer: 'port' },
  { text: 'The boat is tied up and kept safe from storms.', answer: 'harbour' },
  { text: 'Thousands of passengers board a ferry here.', answer: 'port' },
  { text: 'Fishermen mend their nets on the wall.', answer: 'harbour' },
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
    clueEl.textContent = 'All done! You scored ' + hopScore + ' out of ' + hopClues.length + '. 🎉';
  }
  if (scoreEl) scoreEl.textContent = 'Score: ' + hopScore;
}

function answerHop(choice) {
  if (hopIndex >= hopClues.length) return;
  var correct = hopClues[hopIndex].answer;
  var resultEl = document.getElementById('hop-result');
  if (choice === correct) {
    hopScore++;
    if (resultEl) resultEl.textContent = '✅ Correct!';
  } else {
    if (resultEl) resultEl.textContent = '❌ Not quite — it was a ' + correct + '.';
  }
  hopIndex++;
  setTimeout(showHopClue, 1000);
}

function resetHop() {
  hopIndex = 0;
  hopScore = 0;
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
    card.dataset.id = item.id;
    card.dataset.answer = item.answer;
    card.innerHTML = '<span class="ton-emoji">' + item.emoji + '</span>' + item.label;
    card.addEventListener('click', (function(c) {
      return function() { selectTonCard(c); };
    })(card));
    grid.appendChild(card);
  }
}

function selectTonCard(card) {
  var cards = document.querySelectorAll('.ton-card');
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.outline = '';
  }
  tonSelected = card;
  card.style.outline = '3px solid var(--drift)';
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
    setTimeout(function() {
      sel.style.background = '';
      sel.style.outline = '';
    }, 900);
  }
  tonSelected = null;
}

// ── MAP QUEST ─────────────────────────────────────────────────────────────────

var mapQuestSteps = [
  { prompt: '🗺️ Click on England', target: 'mq-england' },
  { prompt: '🗺️ Now click on Scotland', target: 'mq-scotland' },
  { prompt: '🗺️ Where is Wales? Click it!', target: 'mq-wales' },
  { prompt: '🗺️ Find Northern Ireland and click it', target: 'mq-nireland' },
  { prompt: '📍 Finally — where is St Ives? Click the dot!', target: 'mq-stives' },
];

var mqStep = 0;
var mqScore = 0;

function showMqStep() {
  var prompt = document.getElementById('mq-prompt');
  var badge = document.getElementById('mq-score-display');
  if (!prompt) return;
  if (mqStep < mapQuestSteps.length) {
    prompt.textContent = mapQuestSteps[mqStep].prompt;
  } else {
    prompt.textContent = '🎉 Brilliant! You scored ' + mqScore + ' out of ' + mapQuestSteps.length + '!';
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
    if (el) {
      el.classList.add('wrong');
      setTimeout(function() { el.classList.remove('wrong'); }, 700);
    }
  }
}

function resetMapQuest() {
  mqStep = 0;
  mqScore = 0;
  var regions = document.querySelectorAll('.mapquest-region');
  for (var i = 0; i < regions.length; i++) {
    regions[i].classList.remove('correct', 'wrong');
  }
  showMqStep();
}

// ── MATCH THE WORD ────────────────────────────────────────────────────────────

var matchPairs = [
  { word: 'Beach',      emoji: '🏖️',  key: 'beach'      },
  { word: 'Rock Pool',  emoji: '🦀',  key: 'rockpool'   },
  { word: 'Cliff',      emoji: '🪨',  key: 'cliff'      },
  { word: 'Harbour',    emoji: '⚓',  key: 'harbour'    },
  { word: 'Port',       emoji: '🚢',  key: 'port'       },
  { word: 'Pier',       emoji: '🪧',  key: 'pier'       },
  { word: 'Promenade',  emoji: '🚶',  key: 'promenade'  },
  { word: 'Lighthouse', emoji: '🗼',  key: 'lighthouse' },
];

var selectedWord = null;

function initMatchGame() {
  var wordCol = document.getElementById('match-words');
  var imgCol  = document.getElementById('match-images');
  if (!wordCol || !imgCol) return;

  var shuffled = matchPairs.slice().sort(function() { return Math.random() - 0.5; });

  for (var i = 0; i < matchPairs.length; i++) {
    (function(p) {
      var btn = document.createElement('button');
      btn.className = 'match-word';
      btn.textContent = p.word;
      btn.dataset.key = p.key;
      btn.addEventListener('click', function() { selectWord(btn, p.key); });
      wordCol.appendChild(btn);
    })(matchPairs[i]);
  }

  for (var i = 0; i < shuffled.length; i++) {
    (function(p) {
      var box = document.createElement('div');
      box.className = 'match-img-box';
      box.textContent = p.emoji;
      box.dataset.key = p.key;
      box.setAttribute('tabindex', '0');
      box.addEventListener('click', function() { checkMatch(box, p.key); });
      imgCol.appendChild(box);
    })(shuffled[i]);
  }
}

function selectWord(btn, key) {
  var btns = document.querySelectorAll('.match-word');
  for (var i = 0; i < btns.length; i++) btns[i].classList.remove('selected');
  selectedWord = key;
  btn.classList.add('selected');
}

function checkMatch(imgBox, imgKey) {
  if (!selectedWord) return;
  var wordBtn = document.querySelector('.match-word[data-key="' + selectedWord + '"]');
  if (selectedWord === imgKey) {
    if (wordBtn) wordBtn.classList.add('correct');
    imgBox.style.background = '#c8dfc4';
    imgBox.style.borderColor = '#7a9e7e';
  } else {
    if (wordBtn) {
      wordBtn.classList.add('wrong');
      setTimeout(function() { wordBtn.classList.remove('wrong'); }, 800);
    }
  }
  selectedWord = null;
  var btns = document.querySelectorAll('.match-word');
  for (var i = 0; i < btns.length; i++) btns[i].classList.remove('selected');
}

// ── DRAG SORT ─────────────────────────────────────────────────────────────────

var sortAnswers = {
  'bathing-costume': 'then',
  'swimming-costume': 'now',
  'donkey-ride': 'then',
  'ice-cream': 'both',
  'steam-train': 'then',
  'car': 'now',
  'bucket-spade': 'both',
  'smartphone': 'now',
  'beach-hut': 'both',
  'gramophone': 'then',
};

function initDragSort() {
  var items = document.querySelectorAll('.sort-item');
  var zones = document.querySelectorAll('.sort-zone');

  for (var i = 0; i < items.length; i++) {
    items[i].setAttribute('draggable', 'true');
    items[i].addEventListener('dragstart', function(e) {
      e.dataTransfer.setData('text/plain', this.dataset.id);
      this.classList.add('dragging');
    });
    items[i].addEventListener('dragend', function() {
      this.classList.remove('dragging');
    });
  }

  for (var i = 0; i < zones.length; i++) {
    zones[i].addEventListener('dragover', function(e) {
      e.preventDefault();
      this.classList.add('drag-over');
    });
    zones[i].addEventListener('dragleave', function() {
      this.classList.remove('drag-over');
    });
    zones[i].addEventListener('drop', function(e) {
      e.preventDefault();
      this.classList.remove('drag-over');
      var id = e.dataTransfer.getData('text/plain');
      var item = document.querySelector('.sort-item[data-id="' + id + '"]');
      if (item) this.appendChild(item);
      checkSortAnswers();
    });
  }
}

function checkSortAnswers() {
  var items = document.querySelectorAll('.sort-item');
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var zone = item.closest('.sort-zone');
    if (!zone) continue;
    var correct = sortAnswers[item.dataset.id];
    var placed = zone.dataset.zone;
    item.style.background = (correct === placed) ? '#c8dfc4' : '#f5c6c6';
  }
}

// ── SPOT IT ───────────────────────────────────────────────────────────────────

function initSpotIt() {
  var found = 0;
  var total = 6;
  var objs = document.querySelectorAll('.spot-obj');
  for (var i = 0; i < objs.length; i++) {
    objs[i].addEventListener('click', function() {
      if (this.classList.contains('found')) return;
      this.classList.add('found');
      found++;
      var name = this.dataset.name;
      var chip = document.querySelector('.spot-chip[data-name="' + name + '"]');
      if (chip) chip.classList.add('found');
      if (found === total) {
        setTimeout(function() {
          var result = document.getElementById('spot-result');
          if (result) result.textContent = '🎉 Amazing! You found everything!';
        }, 300);
      }
    });
  }
}

// ── INIT ──────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
  initMatchGame();
  initDragSort();
  initSpotIt();
  initTonGame();
  showHopClue();
  showMqStep();
});
