//dynamic year in footer 
if (document.getElementById('footerYear')) {
  document.getElementById('footerYear').textContent = new Date().getFullYear();
}


// --- NEW: QUIZZES Object holding multiple topics ---
const QUIZZES = {
  // 'default' acts as the fallback for buttons without a data-topic
  default: [
    { q: 'Which gas is the primary driver of current climate change?', options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Helium'], ans: 'Carbon Dioxide' },
    { q: 'Which of the following is a renewable energy source?', options: ['Coal', 'Wind', 'Natural Gas', 'Oil'], ans: 'Wind' },
    { q: 'Composting helps reduce which greenhouse gas from landfills?', options: ['CO2', 'Methane (CH4)', 'Nitrous Oxide', 'Ozone'], ans: 'Methane (CH4)' },
    { q: 'Which action saves water at home?', options: ['Running the tap while brushing', 'Fixing leaks', 'Washing car every day', 'Keeping sprinklers on'], ans: 'Fixing leaks' }
  ],
  // 'forests' connects to data-topic="forests"
  forests: [
    // Q1-Q2: Basic awareness
    {
      q: 'What is the main difference between afforestation and reforestation?',
      options: ['Afforestation plants trees where there were none recently, while reforestation replaces recently lost trees', 'Afforestation means cutting down trees', 'Reforestation only uses pine trees', 'They are the exact same thing'],
      ans: 'Afforestation plants trees where there were none recently, while reforestation replaces recently lost trees'
    },
    {
      q: 'Why are trees often referred to as "carbon sinks"?',
      options: ['They produce carbon dioxide at night', 'They absorb and store carbon dioxide from the atmosphere', 'They turn carbon into water', 'They reflect carbon back into space'],
      ans: 'They absorb and store carbon dioxide from the atmosphere'
    },

    // Q3-Q5: Slightly deeper
    {
      q: 'Why is planting a diverse mix of native trees usually better than planting a single species (monoculture)?',
      options: ['It grows much faster', 'It is cheaper to plant', 'It creates a more resilient ecosystem that supports local wildlife', 'Single species forests attract too much rain'],
      ans: 'It creates a more resilient ecosystem that supports local wildlife'
    },
    {
      q: 'How do newly planted forests help improve local water systems?',
      options: ['Tree roots act as natural filters for runoff water and improve groundwater recharge', 'Leaves produce purified water drops', 'Tree bark absorbs salt from the ground', 'Forests completely stop rivers from flooding'],
      ans: 'Tree roots act as natural filters for runoff water and improve groundwater recharge'
    },
    {
      q: 'What is the "albedo effect," and how can planting trees in snowy regions sometimes impact it?',
      options: ['Trees make snow melt faster by producing heat', 'Dark tree canopies absorb more solar heat than highly reflective white snow', 'Trees block the wind, making the area colder', 'Trees produce heavy clouds that trap heat'],
      ans: 'Dark tree canopies absorb more solar heat than highly reflective white snow'
    },

    // Q6-Q7: "Oh interesting" facts
    {
      q: 'Which massive afforestation project aims to plant an 8,000 km long strip of trees to stop the Sahara Desert from expanding?',
      options: ['The Sahara Shield', 'The African Canopy Project', 'The Great Green Wall', 'The Desert Stop Initiative'],
      ans: 'The Great Green Wall'
    },
    {
      q: 'Through what fascinating underground network do trees in a healthy forest communicate and share nutrients?',
      options: ['Underground water streams', 'The Mycorrhizal network (fungi)', 'Direct root-to-root fusion', 'Carbon tunnels'],
      ans: 'The Mycorrhizal network (fungi)'
    }
  ]
};

// ---------- Modal Quiz-----------
// ---- Modal Logic ----
const quizModal = document.getElementById('quizModal');
const closeModal = document.getElementById('closeModal');

// Open modal when any "Take Quiz" button is clicked
document.querySelectorAll('.quiz-card .btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    quizModal.style.display = 'block';

    // Check what topic this button wants. If none is listed, use 'default'
    const topic = e.target.getAttribute('data-topic') || 'default';
    startQuiz(topic);
  });
});

// Close modal
closeModal.addEventListener('click', () => {
  quizModal.style.display = 'none';
});

// Close if clicking outside content
window.addEventListener('click', (e) => {
  if (e.target === quizModal) {
    quizModal.style.display = 'none';
  }
});

// --------- quiz system ----------
let qIndex = 0, score = 0, totalQ = 0;
let currentQuizArray = [];
let currentTopic = '';

function startQuiz(topic) {
  currentTopic = topic;
  // Load the correct array based on the topic passed in
  currentQuizArray = QUIZZES[currentTopic];
  totalQ = currentQuizArray.length;

  qIndex = 0;
  score = 0;
  document.getElementById('result').style.display = 'none';
  document.getElementById('feedback').textContent = '';
  renderQuestion();
}

function renderQuestion() {
  document.getElementById('totalQ').textContent = totalQ;
  const q = currentQuizArray[qIndex];
  document.getElementById('qText').textContent = q.q;
  const opts = document.getElementById('options');
  opts.innerHTML = '';

  q.options.forEach(opt => {
    const div = document.createElement('div'); div.className = 'option';
    div.textContent = opt;
    div.onclick = () => {
      document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
      div.classList.add('selected');
    };
    opts.appendChild(div);
  });

  document.getElementById('submitAnswer').style.display = 'inline-block';
  document.getElementById('nextQ').style.display = 'none';
}

document.getElementById('submitAnswer').addEventListener('click', () => {
  const selected = document.querySelector('.option.selected');
  if (!selected) { alert('Please select an option.'); return; }

  const answer = selected.textContent;
  const correct = currentQuizArray[qIndex].ans;

  if (answer === correct) {
    score++;
    document.getElementById('feedback').textContent = 'Correct ✅';
  } else {
    document.getElementById('feedback').textContent = `Incorrect — correct: ${correct}`;
  }

  document.getElementById('submitAnswer').style.display = 'none';
  document.getElementById('nextQ').style.display = 'inline-block';
});

document.getElementById('nextQ').addEventListener('click', () => {
  qIndex++;
  document.getElementById('feedback').textContent = '';
  if (qIndex >= totalQ) {
    // show result
    document.getElementById('result').style.display = 'block';
    document.getElementById('scoreVal').textContent = score;

    // store best score locally using a dynamic key based on the topic
    const storageKey = `planet_best_score_${currentTopic}`;
    const best = Number(localStorage.getItem(storageKey) || 0);
    if (score > best) localStorage.setItem(storageKey, score);
  } else renderQuestion();
});

// Restart button uses the same topic we are currently on
document.getElementById('restart').addEventListener('click', () => startQuiz(currentTopic));

// misc

const showRandomFact = () => { }
const populateCards = () => { }
const populateFacts = () => { }
const renderChallenge = () => { }

document.getElementById('newFact').addEventListener('click', showRandomFact);






// init on load
window.addEventListener('DOMContentLoaded', () => {
  populateCards();
  populateFacts();
  showRandomFact();
  renderChallenge();
  // startQuiz() is removed from here so it waits for a user click instead
});