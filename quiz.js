
const SHEET_URL = "https://script.google.com/macros/s/AKfycbyczSjSAxIfVS6MkcnxwakN2_687UMrZQDyVHe_9GFIFR9eOZ0uAejktT_Ez1ZXoApk/exec";

const QUESTIONS = [
  { q: "I like helping people improve their well-being.", programs:["Nursing","Life Sciences","Psychology"] },
  { q: "I’m interested in how the body works.", programs:["Medical Biology"] },
  { q: "I see myself in a hospital, clinic, or lab.", programs:["Life Sciences"] },
  { q: "I’m patient and compassionate with others.", programs:["Nursing","Psychology"] },
  { q: "I like giving direct care to people.", programs:["Nursing"] },
  { q: "I prefer studying mental and emotional health.", programs:["Psychology"] },
  { q: "I’m comfortable seeing blood or procedures.", programs:["Nursing"] },
  { q: "I want to become a doctor or medical professional.", programs:["Medical Biology"] },
  { q: "I like learning about the brain and behavior.", programs:["Psychology"] },
  { q: "I enjoy observing how people think and act.", programs:["Psychology"] },
  { q: "I like giving hands-on care and support.", programs:["Nursing"] },
  { q: "I prefer researching scientific problems over treating patients.", programs:["Biology"] },
  { q: "I want a career mixing healthcare and research.", programs:["Medical Biology","Life Sciences"] },
  { q: "I enjoy guiding and teaching children patiently.", programs:["BEEd"] },
  { q: "I’m creative in making fun lessons.", programs:["BEEd"] },
  { q: "I enjoy encouraging teens to think critically.", programs:["BSEd"] },
  { q: "I’m fair, understanding, and disciplined with teens.", programs:["BSEd"] },
  { q: "I adapt easily to children with special needs.", programs:["Bachelor of Early Childhood","Special Needs Education"] },
  { q: "I create inclusive learning environments.", programs:["Bachelor of Early Childhood","Special Needs Education"] },
  { q: "I like promoting fitness and sports.", programs:["Bachelor of Physical Education"] },
  { q: "I promote healthy and resilient lifestyles.", programs:["Bachelor of Physical Education"] },
  { q: "I express ideas clearly and adjust to my audience.", programs:["BS/AB Communication"] },
  { q: "I work well in teams and adapt my communication.", programs:["BS/AB Communication"] },
  { q: "I use communication to raise awareness.", programs:["AB Development Communication"] },
  { q: "I’m ethical and resourceful with sensitive info.", programs:["AB Development Communication"] },
  { q: "I’m curious about truth and current events.", programs:["BS/AB Journalism","Media Studies"] },
  { q: "I work well under pressure and ensure accuracy.", programs:["BS/AB Journalism","Media Studies"] },
  { q: "I aim to inspire others through education or communication.", programs:["BEEd","BSEd","Bachelor of Early Childhood","Special Needs Education","Bachelor of Physical Education","BS/AB Communication","AB Development Communication","BS/AB Journalism","Media Studies"] },
  { q: "I enjoy analyzing data and finances.", programs:["BS Accountancy","BS Management Accounting","BS Accounting Information Systems"] },
  { q: "I’m organized and detail-oriented with records.", programs:["BS Accountancy","BS Management Accounting"] },
  { q: "I like planning and leading projects.", programs:["BS Business Administration","BS Business Management","HRDM","Marketing"] },
  { q: "I think strategically to grow businesses.", programs:["BS Management","Management Honors","BS Business Administration"] },
  { q: "I’m confident solving problems under pressure.", programs:["BS Management Engineering","BS Management"] },
  { q: "I want to start or manage my own business.", programs:["BS Entrepreneurship","BSBA Programs"] },
  { q: "I’m interested in money, markets, and finance.", programs:["BS Finance","BS Economics"] },
  { q: "I study trends to understand economies.", programs:["BS Economics","AB Economics (Honors)"] },
  { q: "I want to lead and serve in public systems.", programs:["BS Public Management"] },
  { q: "I value ethics and law in organizations.", programs:["BS Legal Management"] },
  { q: "I want to merge business and technology.", programs:["BS Accounting Information Systems","Accounting Technology"] },
  { q: "I apply management to agriculture and sustainability.", programs:["BS Agribusiness"] },
  { q: "I’m good in teamwork, marketing, and HR.", programs:["BS Business Management","HRDM","Marketing","BSBA Programs"] },
  { q: "I value fairness and integrity in leadership.", programs:["BS Legal Management","BS Management Honors"] },
  { q: "I like exploring creative tools and techniques.", programs:["All Courses"] },
  { q: "I create art or designs even without requirements.", programs:["BFA Information Design","BS New Media and Computer Animation","Architecture"] },
  { q: "I express myself through art, design, or writing.", programs:["All courses"] },
  { q: "I visualize designs before creating them.", programs:["Architecture","BFA Information Design","BS New Media and Computer Animation"] },
  { q: "I find unique solutions to problems.", programs:["BFA Art Management","BFA Information Design","Architecture"] },
  { q: "I get inspired by my surroundings.", programs:["BFA Creative Writing","BFA Theatre Arts"] },
  { q: "I notice visual details others miss.", programs:["Architecture","BFA Information Design"] },
  { q: "I focus well on detailed projects.", programs:["Architecture","BFA Theatre Arts","BFA Art Management"] },
  { q: "I work independently on creative projects.", programs:["Architecture","BFA Theatre Arts","BS New Media and Computer Animation"] },
  { q: "I take feedback to improve my work.", programs:["BFA Theatre Arts","BFA Art Management"] },
  { q: "I express ideas through writing, design, or performance.", programs:["BFA Creative Writing","BFA Theatre Arts"] },
  { q: "I enjoy presenting my creative works.", programs:["BFA Theatre Arts","BFA Art Management"] },
  { q: "I’m sensitive to how visuals affect mood and meaning.", programs:["All courses"] },
  { q: "I enjoy exploring art spaces and galleries.", programs:["BFA Art Management","BFA Information Design"] },
  { q: "I like exploring ideas about ethics and existence.", programs:["AB Philosophy"] },
  { q: "I enjoy reading and analyzing literature.", programs:["AB Literature"] },
  { q: "I want to study history and its impact.", programs:["AB History"] },
  { q: "I’m curious about governments and politics.", programs:["AB Political Science"] },
  { q: "I like understanding societies and people.", programs:["AB Sociology","Sociology-Anthropology"] },
  { q: "I’m interested in community development.", programs:["AB Development Studies"] },
  { q: "I want to study international relations.", programs:["AB International Studies","Diplomatic Studies"] },
  { q: "I enjoy learning about cultures and languages.", programs:["AB Chinese Studies"] },
  { q: "I like interdisciplinary learning.", programs:["AB Interdisciplinary Studies"] },
  { q: "I want to study economics and its impact.", programs:["AB Economics"] },
  { q: "I like studying values and religion in society.", programs:["AB Religious & Values Education"] },
  { q: "I want to understand human behavior.", programs:["AB Psychology"] },
  { q: "I’m curious about human origins.", programs:["AB Anthropology"] },
  { q: "I express my thoughts clearly in writing and speech.", programs:["All programs"] },
  { q: "I like doing experiments and analyzing data.", programs:["Biology"] },
  { q: "I enjoy learning science topics.", programs:["Biology","Medical Biology","Life sciences"] },
  { q: "I’m curious about genetics and microorganisms.", programs:["Biology"] },
  { q: "I like learning how medicines work.", programs:["Medical Biology","Life Sciences"] },
  { q: "I study diseases and the body’s defenses.", programs:["Medical Biology","Life sciences"] },
  { q: "I enjoy understanding forces and energy.", programs:["BS Physics","Applied Physics"] },
  { q: "I use logic and math to explain phenomena.", programs:["BS Physics","Applied Physics"] },
  { q: "I like solving deep, complex problems.", programs:["BS Physics","Applied Physics"] },
  { q: "I enjoy puzzles and equations.", programs:["BS Mathematics","Applied Mathematics"] },
  { q: "I connect math ideas to real life.", programs:["BS Mathematics","Applied Mathematics"] },
  { q: "I stay focused on tough math problems.", programs:["BS Mathematics","Applied Mathematics"] },
  { q: "I care about the environment and climate.", programs:["BS Environmental Science","Environmental Management"] },
  { q: "I enjoy outdoor data collection.", programs:["BS Environmental Science","Environmental Management"] },
  { q: "I promote sustainability and conservation.", programs:["BS Environmental Science","Environmental Management"] },
  { q: "I’m fascinated by marine life and ecosystems.", programs:["BS Marine Biology"] },
  { q: "I enjoy learning about underwater life.", programs:["BS Marine Biology"] },
  { q: "I want to protect marine biodiversity.", programs:["BS Marine Biology"] },
  { q: "I enjoy coding and technology.", programs:["BS Computer Science","BS Information Technology","BS Information Systems","BS Data Science","BS New Media & Computer Animation","BS IT Entrepreneurship","BS Communications Technology Management"] },
  { q: "I easily learn new digital tools.", programs:["BS Computer Science","BS Information Technology","BS Information Systems","BS Data Science","BS New Media & Computer Animation","BS IT Entrepreneurship","BS Communications Technology Management"] },
  { q: "I analyze data to solve problems.", programs:["BS Computer Science","BS Information Technology","BS Information Systems","BS Data Science"] },
  { q: "I stay focused on computer-based tasks.", programs:["BS Computer Science","BS Information Technology","BS Information Systems","BS Data Science"] },
  { q: "I enjoy collaborating on tech projects.", programs:["BS Computer Science","BS Information Technology","BS Information Systems","BS Data Science"] },
  { q: "I handle technical errors patiently.", programs:["BS Computer Science","BS Information Technology","BS Information Systems","BS Data Science"] },
  { q: "I’m curious about chemical reactions.", programs:["BS Chemistry"] },
  { q: "I’m patient and precise in lab work.", programs:["BS Chemistry"] },
  { q: "I ensure accuracy and safety in experiments.", programs:["BS Civil","Chemical","Electrical","Electronics","Computer","Industrial","Mechanical","Aerospace","Robotics","Agricultural & Biosystems Engineering"] },
  { q: "I use math and science to design systems.", programs:["BS Civil","Chemical","Electrical","Electronics","Computer","Industrial","Mechanical","Aerospace","Robotics","Agricultural & Biosystems Engineering"] },
  { q: "I stay determined after failures.", programs:["BS Civil","Chemical","Electrical","Electronics","Computer","Industrial","Mechanical","Aerospace","Robotics","Agricultural & Biosystems Engineering"] },
  { q: "I check data carefully for errors.", programs:["BS Chemistry"] },
  { q: "I work well in engineering teams.", programs:["BS Civil","Chemical","Electrical","Electronics","Computer","Industrial","Mechanical","Aerospace","Robotics","Agricultural & Biosystems Engineering"] },
  { q: "I like solving technical problems.", programs:["BS Civil","Chemical","Electrical","Electronics","Computer","Industrial","Mechanical","Aerospace","Robotics","Agricultural & Biosystems Engineering"] },
  { q: "I enjoy designing creative spaces.", programs:["BS Architecture"] },
  { q: "I balance creativity with accuracy.", programs:["BS Architecture"] },
  { q: "I manage time to meet project deadlines.", programs:["BS Architecture"] },
  { q: "I work well in marketing or HR teams.", programs:["BS Business Management","HRDM","Marketing","BSBA Programs"] },
  { q: "I think strategically about business growth.", programs:["BS Management","Management Honors","BS Business Administration"] },
  { q: "I like leading and organizing people.", programs:["BS Business Administration","BS Business Management","HRDM","Marketing"] },
  { q: "I want to use leadership for public service.", programs:["BS Public Management"] },
  { q: "I’m curious about politics and government.", programs:["AB Political Science"] },
  { q: "I use logic and math for physical phenomena.", programs:["BS Physics","Applied Physics"] },
  { q: "I’m patient and detailed in lab work.", programs:["BS Chemistry"] },
  { q: "I persist even when experiments fail.", programs:["BS Civil","Chemical","Electrical","Electronics","Computer","Industrial","Mechanical","Aerospace","Robotics","Agricultural & Biosystems Engineering"] },
  { q: "I handle tech challenges without giving up.", programs:["BS Computer Science","BS Information Technology","BS Information Systems","BS Data Science","BS New Media & Computer Animation","BS IT Entrepreneurship","BS Communications Technology Management"] },
  { q: "I enjoy studying forces and energy.", programs:["BS Physics","Applied Physics"] },
  { q: "I prefer mental and emotional studies.", programs:["Psychology"] },
  { q: "I’m dedicated to marine protection.", programs:["BS Marine Biology"] },
  { q: "I like learning cultures and languages.", programs:["AB Chinese Studies"] },
  { q: "I study human behavior and mind.", programs:["AB Psychology"] },
  { q: "I’m curious about chemical reactions.", programs:["BS Chemistry"] }
];

let currentIndex = 0;
const answers = new Array(QUESTIONS.length).fill(null); // will hold 1 / 0.5 / 0
let programScores = {}; // program -> numeric score

const startBtn = document.getElementById('start-btn');
const quizScreen = document.getElementById('quiz-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');

const clusterScreen = document.getElementById('cluster-screen');
const clusterResult = document.getElementById('cluster-result');
const toCourseBtn = document.getElementById('to-course-btn');

const courseScreen = document.getElementById('course-screen');
const courseResults = document.getElementById('course-results');

const submitBtn = document.getElementById('submit-btn');

function renderQuestion(index){
  const q = QUESTIONS[index];
  questionText.textContent = `(${index+1}/${QUESTIONS.length}) ${q.q}`;

  const optionButtons = optionsContainer.querySelectorAll('.option-btn');
  optionButtons.forEach(btn => {
    btn.classList.remove('selected');
    if (answers[index] !== null && String(answers[index]) === btn.getAttribute('data-value')) {
      btn.classList.add('selected');
    }
  });

  // Show/hide next button label
  if (index === QUESTIONS.length - 1) {
    nextBtn.textContent = "See Cluster";
  } else {
    nextBtn.textContent = "Next";
  }
}

// color the selected option button (visual)
function selectOptionForCurrent(value){
  answers[currentIndex] = Number(value);
  const optionButtons = optionsContainer.querySelectorAll('.option-btn');
  optionButtons.forEach(btn => {
    if (btn.getAttribute('data-value') === String(value)) btn.classList.add('selected');
    else btn.classList.remove('selected');
  });
}

// compute program scores from answers
function computeProgramScores(){
  programScores = {};
  for (let i = 0; i < QUESTIONS.length; i++){
    const ans = answers[i] === null ? 0 : Number(answers[i]);
    const programs = QUESTIONS[i].programs;
    programs.forEach(p => {
      // normalize program string (trim)
      const name = p.trim();
      programScores[name] = (programScores[name] || 0) + ans;
    });
  }
}

// map program -> cluster using your mapping
function programToCluster(programName){
  const p = programName.toLowerCase();

  // NATURAL RESOURCES & AGRICULTURE
  const ag = ["agribusiness","environmental","marine","agricultur","biosystems","marine biology"];
  if (ag.some(k => p.includes(k))) return "Natural Resources & Agriculture";

  // HEALTH SERVICES
  const health = ["nurs","medical","life sciences","medical biology","biology","health"];
  if (health.some(k => p.includes(k))) return "Health Services";

  // INDUSTRIAL & ENGINEERING TECHNOLOGY
  const eng = ["engineering","civil","chemical","electrical","electronics","computer engineering","industrial","mechanical","aerospace","robot","architecture","architecture"];
  const tech = ["computer science","information technology","information systems","data science","it entrepreneurship","communications technology","new media","applied physics","physics","chemistry","mathematics"];
  if (eng.some(k => p.includes(k)) || tech.some(k => p.includes(k))) return "Industrial & Engineering Technology";

  // ARTS & COMMUNICATION
  const arts = ["bfa","creative","theatre","art","design","media","communication","journalism","information design","new media","theatre arts","creative writing","architecture"];
  if (arts.some(k => p.includes(k))) return "Arts and Communication";

  // BUSINESS, MANAGEMENT & TECHNOLOGY
  const bus = ["account","business","management","entrepreneur","marketing","finance","econom","legal management","hrdm","public management","accounting information","accounting technology","accounting"];
  if (bus.some(k => p.includes(k))) return "Business, Management & Technology";

  // HUMAN SERVICES (education, psychology, social sciences)
  const human = ["beed","bsed","early childhood","special needs","physical education","philosophy","literature","history","political","sociology","development studies","international","psychology","religious"];
  if (human.some(k => p.includes(k))) return "Human Services";

  // default fallback
  return "Business, Management & Technology";
}

// choose top cluster by summing scores of programs that map to each cluster
function determineTopCluster(){
  computeProgramScores();
  const clusterSums = {};
  Object.entries(programScores).forEach(([prog, score]) => {
    const cl = programToCluster(prog);
    clusterSums[cl] = (clusterSums[cl] || 0) + score;
  });
  // pick highest
  const sorted = Object.entries(clusterSums).sort((a,b) => b[1] - a[1]);
  return sorted.length ? sorted[0][0] : "No clear cluster";
}

// pick top 3 programs overall (highest scores), return array of {program,score}
function top3Programs(){
  computeProgramScores();
  const arr = Object.entries(programScores).map(([p,s]) => ({ program: p, score: s }));
  arr.sort((a,b) => b.score - a.score);
  // filter only positive scores
  const nonZero = arr.filter(x => x.score > 0);
  const top = nonZero.slice(0,3);
  // fill placeholders if needed
  while (top.length < 3) top.push({ program: "No strong match", score: 0 });
  return top;
}

// -----------------------------
// START / NAVIGATION
// -----------------------------
startBtn && startBtn.addEventListener('click', () => {
  // hide start screen and show quiz screen
  const startScreen = document.getElementById('start-screen');
  if (startScreen) startScreen.classList.add('hidden');
  quizScreen && quizScreen.classList.remove('hidden');
  currentIndex = 0;
  renderQuestion(currentIndex);
});

// wire option buttons (the HTML should include three .option-btn elements inside options-container)
const optionButtons = optionsContainer ? optionsContainer.querySelectorAll('.option-btn') : [];
optionButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    selectOptionForCurrent(btn.getAttribute('data-value'));
  });
});

// next button:
nextBtn && nextBtn.addEventListener('click', () => {
  // require selection for this question
  if (answers[currentIndex] === null) {
    alert("Please choose Yes, Maybe, or No before proceeding (or choose Maybe if unsure).");
    return;
  }
  if (currentIndex < QUESTIONS.length - 1) {
    currentIndex++;
    renderQuestion(currentIndex);
  } else {
    // finished all questions -> show cluster screen
    const cluster = determineTopCluster();
    // update cluster screen
    clusterResult && (clusterResult.textContent = cluster);
    // hide quiz, show cluster
    quizScreen && quizScreen.classList.add('hidden');
    const clusterScreenEl = document.getElementById('cluster-screen');
    clusterScreenEl && clusterScreenEl.classList.remove('hidden');
  }
});

// "See courses" button from cluster screen
toCourseBtn && toCourseBtn.addEventListener('click', () => {
  // hide cluster screen
  const clusterScreenEl = document.getElementById('cluster-screen');
  clusterScreenEl && clusterScreenEl.classList.add('hidden');
  // show course screen and render top 3
  courseScreen && courseScreen.classList.remove('hidden');
  renderTop3();
});

// render top 3 into courseResults (expecting an element)
function renderTop3(){
  const top = top3Programs();
  if (!courseResults) return;
  courseResults.innerHTML = ''; // clear
  top.forEach((item, idx) => {
    const li = document.createElement('div');
    li.className = 'rank-item';
    li.style.margin = '10px 0';
    li.innerHTML = `<strong>${idx+1}. ${item.program}</strong> <span style="color:#666; margin-left:8px;">(score: ${item.score.toFixed(1)})</span>`;
    courseResults.appendChild(li);
  });
}

// -----------------------------
// EVALUATION & SUBMIT
// -----------------------------
// We'll gather eval answers by querying buttons with data attributes in the course-screen HTML.
// Expected: likert buttons with data-eval1, data-eval2; yes/no buttons with data-eval3/data-eval4 and a textarea with id eval5.

submitBtn && submitBtn.addEventListener('click', async () => {
  // collect evaluation answers
  // Q1: find element with attribute data-eval1 selected (buttons should be toggled with .selected class)
  const eval1Btn = document.querySelector('[data-eval1].selected');
  const eval2Btn = document.querySelector('[data-eval2].selected');
  const eval3Btn = document.querySelector('[data-eval3].selected');
  const eval4Btn = document.querySelector('[data-eval4].selected');
  const eval5Textarea = document.getElementById('eval5');
  const eval1 = eval1Btn ? eval1Btn.getAttribute('data-eval1') : '';
  const eval2 = eval2Btn ? eval2Btn.getAttribute('data-eval2') : '';
  const eval3 = eval3Btn ? eval3Btn.getAttribute('data-eval3') : '';
  const eval4 = eval4Btn ? eval4Btn.getAttribute('data-eval4') : '';
  const eval5 = eval5Textarea ? eval5Textarea.value : '';

  // Prepare payload
  computeProgramScores();
  const top3 = top3Programs();
  const payload = {
    timestamp: new Date().toISOString(),
    top_cluster: determineTopCluster(),
    top3: top3,
    program_scores: programScores,
    answers: answers,
    eval_accuracy: eval1,
    eval_accessibility: eval2,
    eval_helped: eval3,
    eval_helpful: eval4,
    eval_comments: eval5
  };

  // send to Google Apps Script
  try {
    const res = await fetch(SHEET_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    // update UI
    const submitMsg = document.getElementById('submit-msg');
    if (submitMsg) {
      submitMsg.style.color = 'green';
      submitMsg.textContent = 'Thanks — your responses were submitted!';
    }
    // Optionally hide submit button
    submitBtn.disabled = true;
  } catch (err) {
    console.error('Error submitting to sheet:', err);
    const submitMsg = document.getElementById('submit-msg');
    if (submitMsg) {
      submitMsg.style.color = 'red';
      submitMsg.textContent = 'Submission failed. Check your Apps Script URL and deployment settings.';
    }
  }
});

// -----------------------------
// Utility: allow click toggles for evaluation buttons
// This code expects your evaluation HTML buttons to have data-eval1/data-eval2/... attributes.
// When user clicks a button, it gets .selected class and previous removed.
document.addEventListener('click', (e) => {
  const el = e.target;
  if (!el) return;
  // option buttons (Yes/Maybe/No)
  if (el.classList && el.classList.contains('option-btn')) {
    // handled above by specific listeners, but ensure fallback:
    selectOptionForCurrent(el.getAttribute('data-value'));
  }

  // likert/eval buttons:
  if (el.hasAttribute('data-eval1')) {
    // remove other selections with data-eval1
    document.querySelectorAll('[data-eval1]').forEach(b => b.classList.remove('selected'));
    el.classList.add('selected');
  }
  if (el.hasAttribute('data-eval2')) {
    document.querySelectorAll('[data-eval2]').forEach(b => b.classList.remove('selected'));
    el.classList.add('selected');
  }
  if (el.hasAttribute('data-eval3')) {
    document.querySelectorAll('[data-eval3]').forEach(b => b.classList.remove('selected'));
    el.classList.add('selected');
  }
  if (el.hasAttribute('data-eval4')) {
    document.querySelectorAll('[data-eval4]').forEach(b => b.classList.remove('selected'));
    el.classList.add('selected');
  }
});

// -----------------------------
// INITIALIZATION
// -----------------------------
(function init(){
  // hide all non-start screens
  const clusterScreenEl = document.getElementById('cluster-screen');
  const courseScreenEl = document.getElementById('course-screen');
  const quizScreenEl = document.getElementById('quiz-screen');
  if (clusterScreenEl) clusterScreenEl.classList.add('hidden');
  if (courseScreenEl) courseScreenEl.classList.add('hidden');
  if (quizScreenEl) quizScreenEl.classList.add('hidden');

  // Make sure option buttons reflect data-values and are ready
  // If options not present, create them here (but the HTML provided earlier already includes them).
  // render first question when user clicks start.
})();
