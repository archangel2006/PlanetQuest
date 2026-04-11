
// Data sets (cards, facts, quiz)

const ENV_CARDS = [
  {title:'Marine Life', text:'Ocean health, coral reefs, and plastic pollution. Learn how simple actions protect marine animals.', link: 'EnvironmentPages/ClimateChange.html' },
  {title:'Forests & Trees', text:'Forests are the lungs of the Earth. Reforestation, biodiversity and community forests matter.', link: 'EnvironmentPages/ClimateChange.html' },
  {title:'Climate Change', text:'Causes, effects, and what students can do: reduce waste, save energy, learn more.', link: 'EnvironmentPages/ClimateChange.html' },
  {title:'Air & Atmosphere', text:'Air quality, emissions, and ways to reduce local pollution.',link: 'EnvironmentPages/ClimateChange.html' ,},
  {title:'Soil & Land', text:'Soil health, sustainable farming, and preventing erosion.',link: 'EnvironmentPages/ClimateChange.html' },
  {title:'Energy & Renewables', text:'How renewable energy sources reduce emissions and help communities.', link: 'EnvironmentPages/ClimateChange.html' }
];

const FACTS = [
  
  'Around 8 million tonnes of plastic enter the oceans each year.',
  'A single mature tree can absorb up to 48 pounds of CO₂ per year.',
  'Small daily actions (like turning off lights) can reduce household emissions.',
  'Composting food scraps reduces methane from landfills.',
  'Switching a bulb to LED can save significant energy over its lifetime.',
  'Coral reefs support about 25% of all marine life.'
];

const CHALLENGES = [
  'Turn off lights in unused rooms for the whole day.',
  'Refuse single-use plastic for one day — carry a reusable bottle.',
  'Pick up 3 pieces of litter in your neighborhood.',
  'Avoid using the elevator — take stairs for short trips.',
  'Unplug chargers and devices when not in use.'
];

<<<<<<< HEAD
const QUIZ = [
  {q:'Which gas is the primary driver of current climate change?', options:['Oxygen','Carbon Dioxide','Nitrogen','Helium'], ans:'Carbon Dioxide'},
  {q:'Which of the following is a renewable energy source?', options:['Coal','Wind','Natural Gas','Oil'], ans:'Wind'},
  {q:'Composting helps reduce which greenhouse gas from landfills?', options:['CO2','Methane (CH4)','Nitrous Oxide','Ozone'], ans:'Methane (CH4)'},
  {q:'Which action saves water at home?', options:['Running the tap while brushing','Fixing leaks','Washing car every day','Keeping sprinklers on'], ans:'Fixing leaks'},
  
  // Basic awareness level
  {q:'What is the primary cause of particulate matter (PM2.5) in urban areas?', options:['Volcanic eruptions','Vehicle emissions','Tree pollen','Sea spray'], ans:'Vehicle emissions'},
  {q:'Which of these is a major source of microplastics in the ocean?', options:['Organic fruit peels','Biodegradable soap','Synthetic clothing fibers','Natural sand'], ans:'Synthetic clothing fibers'},
  
  // Deeper insight level
  {q:'How does excessive chemical fertilizer use affect soil health?', options:['Increases biodiversity','Restores natural minerals','Leads to soil acidification','Makes soil permanent'], ans:'Leads to soil acidification'},
  {q:'Which of these is a primary source of noise pollution that affects marine mammals like whales?', options:['Underwater volcanic vents','Ship engines and sonar','Ocean currents','Surface wind'], ans:'Ship engines and sonar'},
  {q:'Which hazardous heavy metal is commonly found in older electronic screens and monitors?', options:['Lead','Gold','Aluminum','Iron'], ans:'Lead'},
  
  // Fact-based level
  {q:'What type of "orbital pollution" consists of over 34,000 debris objects larger than 10cm?', options:['Space junk','Atmospheric gas','Cosmic dust','Satellite signals'], ans:'Space junk'},
  {q:'Due to industrial water pollution and usage, one cotton t-shirt requires how many liters of water to produce?', options:['50 liters','500 liters','2,700 liters','10,000 liters'], ans:'2,700 liters'}
];
=======
// ---------- QUIZ DATA ----------

let currentQuiz = [];

const QUIZ_DATA = {
  marine: [
    {q:'What is the biggest threat to marine life?', options:['Plastic pollution','Sand','Rocks','Clouds'], ans:'Plastic pollution'},
    {q:'Coral reefs support about what % of marine life?', options:['10%','25%','50%','75%'], ans:'25%'}
  ],

  forest: [
    {q:'Why are forests important?', options:['Provide oxygen','Make noise','Block roads','None'], ans:'Provide oxygen'},
    {q:'What is deforestation?', options:['Planting trees','Cutting trees','Watering plants','None'], ans:'Cutting trees'}
  ],

  pollution: [
    {q:'Which is a major air pollutant?', options:['CO2','Oxygen','Hydrogen','Helium'], ans:'CO2'},
    {q:'What reduces pollution?', options:['Burning waste','Recycling','Littering','Smoking'], ans:'Recycling'}
  ],

  energy: [
    {q:'Which is renewable?', options:['Coal','Solar','Oil','Gas'], ans:'Solar'},
    {q:'Solar energy comes from?', options:['Moon','Sun','Earth','Water'], ans:'Sun'}
  ],

  wildlife: [
    {q:'Why protect wildlife?', options:['Balance ecosystem','For fun','No reason','Destroy nature'], ans:'Balance ecosystem'}
  ],

  climate: [
    {q:'Main cause of climate change?', options:['CO2','Oxygen','Nitrogen','Helium'], ans:'CO2'}
  ]
};
>>>>>>> main

// ---------- UI population ----------

function populateCards(){
  const container = document.getElementById('cards');
  container.innerHTML = '';
  ENV_CARDS.forEach(c=>{
    const el = document.createElement('div'); el.className = 'card';
    el.innerHTML = `<div><h4>${c.title}</h4><p>${c.text}</p></div>
      <div style="margin-top:12px"><a class="btn ghost" href="${c.link}">Read more</a></div>`;
    container.appendChild(el);
  });
}

function populateFacts(){
  const fgrid = document.getElementById('factsGrid');
  fgrid.innerHTML='';
  FACTS.slice(0,6).forEach((t,i)=>{
    const el = document.createElement('div'); el.className='card';
    el.innerHTML = `<h4>Fact ${i+1}</h4><p class="muted">${t}</p>`;
    fgrid.appendChild(el);
  });
}

// random fact section
function showRandomFact(){
  const idx = Math.floor(Math.random()*FACTS.length);
  document.getElementById('randomFact').textContent = FACTS[idx];
}

document.getElementById('newFact').addEventListener('click', showRandomFact);

// daily challenge logic
const CH_KEY = 'planet_challenge_today';
function getChallenge(){
  // store a challenge index keyed by date
  const today = new Date().toISOString().slice(0,10);
  const stored = JSON.parse(localStorage.getItem(CH_KEY) || '{}');
  if(stored.date === today && typeof stored.idx === 'number') return stored.idx;
  // otherwise set new one
  const idx = Math.floor(Math.random()*CHALLENGES.length);
  localStorage.setItem(CH_KEY, JSON.stringify({date:today, idx, done:false}));
  return idx;
}
function renderChallenge(){
  const ci = getChallenge();
  document.getElementById('todayChallenge').textContent = CHALLENGES[ci];
  const stored = JSON.parse(localStorage.getItem(CH_KEY) || '{}');
  document.getElementById('challengeStatus').textContent = stored.done ? 'Completed ✔️' : 'Not done yet';
}
document.getElementById('markDone').addEventListener('click', ()=>{
  const stored = JSON.parse(localStorage.getItem(CH_KEY) || '{}');
  stored.done = true;
  localStorage.setItem(CH_KEY, JSON.stringify(stored));
  renderChallenge();
});
document.getElementById('nextChallenge').addEventListener('click', ()=>{
  // force new random
  const today = new Date().toISOString().slice(0,10);
  const idx = Math.floor(Math.random()*CHALLENGES.length);
  localStorage.setItem(CH_KEY, JSON.stringify({date:today, idx, done:false}));
  renderChallenge();
});

// ---------- MODAL QUIZ -----------

// ---- Modal Logic ----
const quizModal = document.getElementById('quizModal');
const closeModal = document.getElementById('closeModal');

// Open modal when any "Take Quiz" button is clicked
document.querySelectorAll('.quiz-card .btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const topic = btn.dataset.topic;
    currentQuiz = QUIZ_DATA[topic] || [];

    quizModal.style.display = 'block';
    startQuiz();
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
let qIndex = 0, score = 0;
let totalQ = 0;
function startQuiz(){
  qIndex=0; score=0; totalQ = currentQuiz.length;
  document.getElementById('result').style.display='none';
  document.getElementById('feedback').textContent='';
  renderQuestion();
}
function renderQuestion(){
  document.getElementById('totalQ').textContent = totalQ;
  const q = currentQuiz[qIndex];
  document.getElementById('qText').textContent = q.q;
  const opts = document.getElementById('options'); opts.innerHTML='';
  q.options.forEach(opt=>{
    const div = document.createElement('div'); div.className='option';
    div.textContent = opt;
    div.onclick = ()=>{ document.querySelectorAll('.option').forEach(o=>o.classList.remove('selected')); div.classList.add('selected'); };
    opts.appendChild(div);
  });
  document.getElementById('submitAnswer').style.display='inline-block';
  document.getElementById('nextQ').style.display='none';
}
document.getElementById('submitAnswer').addEventListener('click', ()=>{
  const selected = document.querySelector('.option.selected');
  if(!selected){ alert('Please select an option.'); return; }
  const answer = selected.textContent;
  const correct = currentQuiz[qIndex].ans;
  if(answer === correct){
    score++;
    document.getElementById('feedback').textContent = 'Correct ✅';
  } else {
    document.getElementById('feedback').textContent = `Incorrect — correct: ${correct}`;
  }
  document.getElementById('submitAnswer').style.display='none';
  document.getElementById('nextQ').style.display='inline-block';
  // if last question show results on next
});
document.getElementById('nextQ').addEventListener('click', ()=>{
  qIndex++;
  document.getElementById('feedback').textContent='';
  if(qIndex >= totalQ){
    // show result
    document.getElementById('result').style.display='block';
    document.getElementById('scoreVal').textContent = score;
    // store best score locally
    const best = Number(localStorage.getItem('planet_best_score')||0);
    if(score > best) localStorage.setItem('planet_best_score', score);
  } else renderQuestion();
});
// restart quiz
document.getElementById('restart').addEventListener('click', () => {
  if (currentQuiz.length) startQuiz();
});

// init on load
window.addEventListener('DOMContentLoaded', ()=>{
  populateCards();
  populateFacts();
  showRandomFact();
  renderChallenge();
});
