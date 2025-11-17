// -------------------- CONFIG --------------------
const SHEET_URL = "https://script.google.com/macros/s/AKfycbyczSjSAxIfVS6MkcnxwakN2_687UMrZQDyVHe_9GFIFR9eOZ0uAejktT_Ez1ZXoApk/exec";

// -------------------- QUESTIONS & PROGRAMS --------------------
const questions = [
  { q: "I like helping people improve their well-being.", programs: ["Nursing","Life Sciences","Psychology"] },
  { q: "I’m interested in how the body works.", programs: ["Medical Biology"] },
  { q: "I see myself in a hospital, clinic, or lab.", programs: ["Life Sciences"] },
  { q: "I’m patient and compassionate with others.", programs: ["Nursing","Psychology"] },
  { q: "I like giving direct care to people.", programs: ["Nursing"] },
  { q: "I prefer studying mental and emotional health.", programs: ["Psychology"] },
  { q: "I’m comfortable seeing blood or procedures.", programs: ["Nursing"] },
  { q: "I want to become a doctor or medical professional.", programs: ["Medical Biology"] },
  { q: "I like learning about the brain and behavior.", programs: ["Psychology"] },
  { q: "I enjoy observing how people think and act.", programs: ["Psychology"] },
  { q: "I like giving hands-on care and support.", programs: ["Nursing"] },
  { q: "I prefer researching scientific problems over treating patients.", programs: ["Biology"] },
  { q: "I want a career mixing healthcare and research.", programs: ["Medical Biology","Life Sciences"] },
  { q: "I enjoy guiding and teaching children patiently.", programs: ["BEEd"] },
  { q: "I’m creative in making fun lessons.", programs: ["BEEd"] },
  { q: "I enjoy encouraging teens to think critically.", programs: ["BSEd"] },
  { q: "I’m fair, understanding, and disciplined with teens.", programs: ["BSEd"] },
  { q: "I adapt easily to children with special needs.", programs: ["Bachelor of Early Childhood","Special Needs Education"] },
  { q: "I create inclusive learning environments.", programs: ["Bachelor of Early Childhood","Special Needs Education"] },
  { q: "I like promoting fitness and sports.", programs: ["Bachelor of Physical Education"] },
  { q: "I promote healthy and resilient lifestyles.", programs: ["Bachelor of Physical Education"] },
  { q: "I express ideas clearly and adjust to my audience.", programs: ["BS/AB Communication"] },
  { q: "I work well in teams and adapt my communication.", programs: ["BS/AB Communication"] },
  { q: "I use communication to raise awareness.", programs: ["AB Development Communication"] },
  { q: "I’m ethical and resourceful with sensitive info.", programs: ["AB Development Communication"] },
  { q: "I’m curious about truth and current events.", programs: ["BS/AB Journalism","Media Studies"] },
  { q: "I work well under pressure and ensure accuracy.", programs: ["BS/AB Journalism","Media Studies"] },
  { q: "I aim to inspire others through education or communication.", programs: ["BEEd","BSEd","Bachelor of Early Childhood","Special Needs Education","Bachelor of Physical Education","BS/AB Communication","AB Development Communication","BS/AB Journalism","Media Studies"] },
  { q: "I enjoy analyzing data and finances.", programs: ["BS Accountancy","BS Management Accounting","BS Accounting Information Systems"] },
  { q: "I’m organized and detail-oriented with records.", programs: ["BS Accountancy","BS Management Accounting"] },
  { q: "I like planning and leading projects.", programs: ["BS Business Administration","BS Business Management","HRDM","Marketing"] },
  { q: "I think strategically to grow businesses.", programs: ["BS Management","Management Honors","BS Business Administration"] },
  { q: "I’m confident solving problems under pressure.", programs: ["BS Management Engineering","BS Management"] },
  { q: "I want to start or manage my own business.", programs: ["BS Entrepreneurship","BSBA Programs"] },
  { q: "I’m interested in money, markets, and finance.", programs: ["BS Finance","BS Economics"] },
  { q: "I study trends to understand economies.", programs: ["BS Economics","AB Economics (Honors)"] },
  { q: "I want to lead and serve in public systems.", programs: ["BS Public Management"] },
  { q: "I value ethics and law in organizations.", programs: ["BS Legal Management"] },
  { q: "I want to merge business and technology.", programs: ["BS Accounting Information Systems","Accounting Technology"] },
  { q: "I apply management to agriculture and sustainability.", programs: ["BS Agribusiness"] },
  { q: "I’m good in teamwork, marketing, and HR.", programs: ["BS Business Management","HRDM","Marketing","BSBA Programs"] },
  { q: "I value fairness and integrity in leadership.", programs: ["BS Legal Management","BS Management Honors"] },
  { q: "I like exploring creative tools and techniques.", programs: ["All Courses"] },
  { q: "I create art or designs even without requirements.", programs: ["BFA Information Design","BS New Media and Computer Animation","Architecture"] },
  { q: "I express myself through art, design, or writing.", programs: ["All Courses"] },
  { q: "I visualize designs before creating them.", programs: ["Architecture","BFA Information Design","BS New Media and Computer Animation"] },
  { q: "I find unique solutions to problems.", programs: ["BFA Art Management","BFA Information Design","Architecture"] },
  { q: "I get inspired by my surroundings.", programs: ["BFA Creative Writing","BFA Theatre Arts"] },
  { q: "I notice visual details others miss.", programs: ["Architecture","BFA Information Design"] },
  { q: "I focus well on detailed projects.", programs: ["Architecture","BFA Theatre Arts","BFA Art Management"] },
  { q: "I work independently on creative projects.", programs: ["Architecture","BFA Theatre Arts","BS New Media and Computer Animation"] },
  { q: "I take feedback to improve my work.", programs: ["BFA Theatre Arts","BFA Art Management"] },
  { q: "I express ideas through writing, design, or performance.", programs: ["BFA Creative Writing","BFA Theatre Arts"] },
  { q: "I enjoy presenting my creative works.", programs: ["BFA Theatre Arts","BFA Art Management"] },
  { q: "I’m sensitive to how visuals affect mood and meaning.", programs: ["All Courses"] },
  { q: "I enjoy exploring art spaces and galleries.", programs: ["BFA Art Management","BFA Information Design"] },
  { q: "I like exploring ideas about ethics and existence.", programs: ["AB Philosophy"] },
  { q: "I enjoy reading and analyzing literature.", programs: ["AB Literature"] },
  { q: "I want to study history and its impact.", programs: ["AB History"] },
  { q: "I’m curious about governments and politics.", programs: ["AB Political Science"] },
  { q: "I like understanding societies and people.", programs: ["AB Sociology","Sociology-Anthropology"] },
  { q: "I’m interested in community development.", programs: ["AB Development Studies"] },
  { q: "I want to study international relations.", programs: ["AB International Studies","Diplomatic Studies"] },
  { q: "I enjoy learning about cultures and languages.", programs: ["AB Chinese Studies"] },
  { q: "I like interdisciplinary learning.", programs: ["AB Interdisciplinary Studies"] },
  { q: "I want to study economics and its impact.", programs: ["AB Economics"] },
  { q: "I like studying values and religion in society.", programs: ["AB Religious & Values Education"] },
  { q: "I want to understand human behavior.", programs: ["AB Psychology"] },
  { q: "I’m curious about human origins.", programs: ["AB Anthropology"] },
  { q: "I like doing experiments and analyzing data.", programs: ["Biology"] },
  { q: "I enjoy learning science topics.", programs: ["Biology","Medical Biology","Life Sciences"] },
  { q: "I’m curious about genetics and microorganisms.", programs: ["Biology"] },
  { q: "I like learning how medicines work.", programs: ["Medical Biology","Life Sciences"] },
  { q: "I study diseases and the body’s defenses.", programs: ["Medical Biology","Life Sciences"] },
  { q: "I enjoy understanding forces and energy.", programs: ["BS Physics","Applied Physics"] },
  { q: "I use logic and math to explain phenomena.", programs: ["BS Physics","Applied Physics"] },
  { q: "I like solving deep, complex problems.", programs: ["BS Physics","Applied Physics"] },
  { q: "I enjoy puzzles and equations.", programs: ["BS Mathematics","Applied Mathematics"] },
  { q: "I connect math ideas to real life.", programs: ["BS Mathematics","Applied Mathematics"] },
  { q: "I stay focused on tough math problems.", programs: ["BS Mathematics","Applied Mathematics"] },
  { q: "I care about the environment and climate.", programs: ["BS Environmental Science","Environmental Management"] },
  { q: "I enjoy outdoor data collection.", programs: ["BS Environmental Science","Environmental Management"] },
  { q: "I promote sustainability and conservation.", programs: ["BS Environmental Science","Environmental Management"] },
  { q: "I’m fascinated by marine life and ecosystems.", programs: ["BS Marine Biology"] },
  { q: "I enjoy learning about underwater life.", programs: ["BS Marine Biology"] },
  { q: "I want to protect marine biodiversity.", programs: ["BS Marine Biology"] },
  { q: "I enjoy coding and technology.", programs: ["BS Computer Science","BS Information Technology","BS Information Systems","BS Data Science","BS New Media & Computer Animation","BS IT Entrepreneurship","BS Communications Technology Management"] },
  { q: "I easily learn new digital tools.", programs: ["BS Computer Science","BS Information Technology","BS Information Systems","BS Data Science","BS New Media & Computer Animation","BS IT Entrepreneurship","BS Communications Technology Management"] },
  { q: "I analyze data to solve problems.", programs: ["BS Computer Science","BS Information Technology","BS Information Systems","BS Data Science","BS New Media & Computer Animation","BS IT Entrepreneurship","BS Communications Technology Management"] },
  { q: "I stay focused on computer-based tasks.", programs: ["BS Computer Science","BS Information Technology","BS Information Systems","BS Data Science","BS New Media & Computer Animation","BS IT Entrepreneurship","BS Communications Technology Management"] },
  { q: "I enjoy collaborating on tech projects.", programs: ["BS Computer Science","BS Information Technology","BS Information Systems","BS Data Science","BS New Media & Computer Animation","BS IT Entrepreneurship","BS Communications Technology Management"] },
  { q: "I handle technical errors patiently.", programs: ["BS Computer Science","BS Information Technology","BS Information Systems","BS Data Science","BS New Media & Computer Animation","BS IT Entrepreneurship","BS Communications Technology Management"] },
  { q: "I’m curious about chemical reactions.", programs: ["BS Chemistry"] },
  { q: "I’m patient and precise in lab work.", programs: ["BS Chemistry"] },
  { q: "I ensure accuracy and safety in experiments.", programs: ["BS Civil","Chemical","Electrical","Electronics","Computer","Industrial","Mechanical","Aerospace","Robotics","Agricultural & Biosystems Engineering"] },
  { q: "I use math and science to design systems.", programs: ["BS Civil","Chemical","Electrical","Electronics","Computer","Industrial","Mechanical","Aerospace","Robotics","Agricultural & Biosystems Engineering"] },
  { q: "I stay determined after failures.", programs: ["BS Civil","Chemical","Electrical","Electronics","Computer","Industrial","Mechanical","Aerospace","Robotics","Agricultural & Biosystems Engineering"] },
  { q: "I check data carefully for errors.", programs: ["BS Chemistry"] },
  { q: "I work well in engineering teams.", programs: ["BS Civil","Chemical","Electrical","Electronics","Computer","Industrial","Mechanical","Aerospace","Robotics","Agricultural & Biosystems Engineering"] },
  { q: "I like solving technical problems.", programs: ["BS Civil","Chemical","Electrical","Electronics","Computer","Industrial","Mechanical","Aerospace","Robotics","Agricultural & Biosystems Engineering"] },
  { q: "I enjoy designing creative spaces.", programs: ["BS Architecture"] },
  { q: "I balance creativity with accuracy.", programs: ["BS Architecture"] },
  { q: "I manage time to meet project deadlines.", programs: ["BS Architecture"] },
  { q: "I work well in marketing or HR teams.", programs: ["BS Business Management","HRDM","Marketing","BSBA Programs"] },
  { q: "I think strategically about business growth.", programs: ["BS Management","Management Honors","BS Business Administration"] },
  { q: "I like leading and organizing people.", programs: ["BS Business Administration","BS Business Management","HRDM","Marketing"] },
  { q: "I want to use leadership for public service.", programs: ["BS Public Management"] },
  { q: "I’m curious about politics and government.", programs: ["AB Political Science"] },
  { q: "I use logic and math for physical phenomena.", programs: ["BS Physics","Applied Physics"] },
  { q: "I’m patient and detailed in lab work.", programs: ["BS Chemistry"] },
  { q: "I persist even when experiments fail.", programs: ["BS Civil","Chemical","Electrical","Electronics","Computer","Industrial","Mechanical","Aerospace","Robotics","Agricultural & Biosystems Engineering"] },
  { q: "I handle tech challenges without giving up.", programs: ["BS Computer Science","BS Information Technology","BS Information Systems","BS Data Science","BS New Media & Computer Animation","BS IT Entrepreneurship","BS Communications Technology Management"] },
  { q: "I enjoy studying forces and energy.", programs: ["BS Physics","Applied Physics"] },
  { q: "I prefer mental and emotional studies.", programs: ["Psychology"] },
  { q: "I’m dedicated to marine protection.", programs: ["BS Marine Biology"] },
  { q: "I like learning cultures and languages.", programs: ["AB Chinese Studies"] },
  { q: "I study human behavior and mind.", programs: ["AB Psychology"] },
  { q: "I’m curious about chemical reactions.", programs: ["BS Chemistry"] }
];

// -------------------- EVALUATION QUESTIONS --------------------
const evaluationQuestions = [
  { q: "How would you rate the accuracy of the quiz?", type: "scale", name: "accuracy", min:1, max:5 },
  { q: "How would you rate the accessibility of the website?", type: "scale", name: "accessibility", min:1, max:5 },
  { q: "Do you think this website has helped you in determining your career path?", type: "yesno", name: "helped" },
  { q: "Do you think this website can help other students?", type: "yesno", name: "helpful" },
  { q: "What are your recommendations/thoughts on this website?", type: "text", name: "recommendations" }
];

const defaultOptions = [
    { text: "Yes", value: 1 },
    { text: "Maybe", value: 0.5 },
    { text: "No", value: 0 }
];

let current = 0;
let answers = {};

const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const resultScreen = document.getElementById("result-screen");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");
const progressText = document.getElementById("progress-text");
const topCluster = document.getElementById("top-cluster");
const recommendedPrograms = document.getElementById("recommended-programs");
const evaluationForm = document.getElementById("evaluation-form");
const thankYou = document.getElementById("thank-you");

document.getElementById("start-btn").addEventListener("click", () => {
    startScreen.classList.remove("active");
    questionScreen.classList.add("active");
    renderQuestion();
});

function renderQuestion() {
    const q = questions[current];
    questionText.textContent = q.q;  // Note: your question text is in q.q, not q.text
    optionsContainer.innerHTML = "";
    const options = q.options || defaultOptions;

    options.forEach(option => {
        const id = `option-${option.text}`;
        const label = document.createElement("label");
        label.innerHTML = `
            <input type="radio" name="option" value="${option.value}" id="${id}">
            ${option.text}
        `;
        optionsContainer.appendChild(label);
        label.style.display = "block";
    }); // <-- closes forEach

    // Preselect previous answer
    if (answers[current] !== undefined) {
        const input = document.querySelector(`input[value="${answers[current]}"]`);
        if(input) input.checked = true;
        nextBtn.disabled = false;
    } else {
        nextBtn.disabled = true;
    }

    backBtn.disabled = current === 0;
    progressText.textContent = `Question ${current + 1} of ${questions.length}`;

    // Listen for option change
    const radios = document.querySelectorAll('input[name="option"]');
    radios.forEach(r => {
        r.addEventListener("change", () => {
            nextBtn.disabled = false;
        });
    });
}

backBtn.addEventListener("click", () => {
    saveAnswer();
    if(current > 0) current--;
    renderQuestion();
});

nextBtn.addEventListener("click", () => {
    saveAnswer();
    if(current < questions.length - 1) {
        current++;
        renderQuestion();
    } else {
        showResult();
    }
});

function saveAnswer() {
    const selected = document.querySelector('input[name="option"]:checked');
    if(selected) answers[current] = parseFloat(selected.value);
}

function showResult() {
    questionScreen.classList.remove("active");
    resultScreen.classList.add("active");

    const scores = {};

    questions.forEach((q, index) => {
        q.programs.forEach(program => {
            scores[program] = (scores[program] || 0) + (answers[index] || 0);
        });
    });

    const maxScore = Math.max(...Object.values(scores));
    const topPrograms = Object.keys(scores).filter(program => scores[program] === maxScore);

    topCluster.textContent = topPrograms.join(", ");
    recommendedPrograms.textContent = Object.keys(scores).join(", ");
}

// Evaluation form submission
evaluationForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
        name: document.getElementById("name").value,
        feedback: document.getElementById("feedback").value,
        date: new Date().toLocaleString()
    };

    try {
        await fetch(SHEET_URL, {
            method: "POST",
            body: JSON.stringify(data)
        });
        evaluationForm.style.display = "none";
        thankYou.style.display = "block";
    } catch (err) {
        alert("Failed to submit: " + err);
    }
});
