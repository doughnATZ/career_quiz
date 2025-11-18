
const SHEET_URL = "https://script.google.com/macros/s/AKfycbzgND0qz9Y3eotR57rSufl-HADKBtpYbKso-7kxOwtfuyPyBVxr4R7EEW9nnu1Bsfy1/exec";

// -------------------- DATA --------------------
const questions = [
  { q: "I like helping people improve their well-being.", cluster: "health", programs: ["Nursing", "Life Sciences", "Psychology"] },
  { q: "I’m interested in how the body works.", cluster: "health", programs: ["Medical Biology"] },
  { q: "I see myself in a hospital, clinic, or lab.", cluster: "health", programs: ["Life Sciences"] },
  { q: "I’m patient and compassionate with others.", cluster: "health", programs: ["Nursing", "Psychology"] },
  { q: "I like giving direct care to people.", cluster: "health", programs: ["Nursing"] },
  { q: "I prefer studying mental and emotional health.", cluster: "health", programs: ["Psychology"] },
  { q: "I enjoy guiding and teaching children patiently.", cluster: "human", programs: ["BEEd"] },
  { q: "I’m creative in making fun lessons.", cluster: "human", programs: ["BEEd"] },
  { q: "I enjoy encouraging teens to think critically.", cluster: "human", programs: ["BSEd"] },
  { q: "I’m fair, understanding, and disciplined with teens.", cluster: "human", programs: ["BSEd"] },
  { q: "I adapt easily to children with special needs.", cluster: "human", programs: ["Bachelor of Early Childhood Education", "Bachelor of Special Needs Education"] },
  { q: "I create inclusive learning environments.", cluster: "human", programs: ["Bachelor of Early Childhood Education", "Bachelor of Special Needs Education"] },
  { q: "I like promoting fitness and sports.", cluster: "human", programs: ["Bachelor of Physical Education"] },
  { q: "I promote healthy and resilient lifestyles.", cluster: "human", programs: ["Bachelor of Physical Education"] },
  { q: "I’m comfortable seeing blood or procedures.", cluster: "health", programs: ["Nursing"] },
  { q: "I want to become a doctor or medical professional.", cluster: "health", programs: ["Medical Biology"] },
  { q: "I like learning about the brain and behavior.", cluster: "health", programs: ["Psychology"] },
  { q: "I enjoy observing how people think and act.", cluster: "health", programs: ["Psychology"] },
  { q: "I like giving hands-on care and support.", cluster: "health", programs: ["Nursing"] },
  { q: "I prefer researching scientific problems over treating patients.", cluster: "industrial", programs: ["Biology"] },
  { q: "I want a career mixing healthcare and research.", cluster: "health", programs: ["Medical Biology", "Life Sciences"] },
  { q: "I enjoy analyzing data and finances.", cluster: "business", programs: ["BS Accountancy","BS Management Accounting","BS Accounting Information Systems"] },
  { q: "I’m organized and detail-oriented with records.", cluster: "business", programs: ["BS Accountancy","BS Management Accounting"] },
  { q: "I like planning and leading projects.", cluster: "business", programs: ["BS Business Administration","BS Business Management","HRDM","Marketing"] },
  { q: "I think strategically to grow businesses.", cluster: "business", programs: ["BS Management","Management Honors","BS Business Administration"] },
  { q: "I’m confident solving problems under pressure.", cluster: "business", programs: ["BS Management Engineering","BS Management"] },
  { q: "I want to start or manage my own business.", cluster: "business", programs: ["BS Entrepreneurship","BSBA Programs"] },
  { q: "I’m interested in money, markets, and finance.", cluster: "business", programs: ["BS Finance","BS Economics"] },
  { q: "I express ideas clearly and adjust to my audience.", cluster: "human", programs: ["BS/AB Communication"] },
  { q: "I work well in teams and adapt my communication.", cluster: "human", programs: ["BS/AB Communication"] },
  { q: "I use communication to raise awareness.", cluster: "human", programs: ["AB Development Communication"] },
  { q: "I’m ethical and resourceful with sensitive info.", cluster: "human", programs: ["AB Development Communication"] },
  { q: "I’m curious about truth and current events.", cluster: "human", programs: ["BS/AB Journalism / Media Studies"] },
  { q: "I work well under pressure and ensure accuracy.", cluster: "human", programs: ["BS/AB Journalism / Media Studies"] },
  { q: "I aim to inspire others through education or communication.", cluster: "human", programs: ["BEEd","BSEd","Bachelor of Early Childhood Education","Bachelor of Special Needs Education","Bachelor of Physical Education","BS/AB Communication","AB Development Communication","BS/AB Journalism / Media Studies"] },
  { q: "I study trends to understand economies.", cluster: "business", programs: ["BS Economics","AB Economics (Honors)"] },
  { q: "I want to lead and serve in public systems.", cluster: "business", programs: ["BS Public Management"] },
  { q: "I value ethics and law in organizations.", cluster: "business", programs: ["BS Legal Management"] },
  { q: "I want to merge business and technology.", cluster: "business", programs: ["BS Accounting Information Systems","Accounting Technology"] },
  { q: "I apply management to agriculture and sustainability.", cluster: "natural", programs: ["BS Agribusiness"] },
  { q: "I’m good in teamwork, marketing, and HR.", cluster: "business", programs: ["BS Business Management","HRDM","Marketing","BSBA Programs"] },
  { q: "I value fairness and integrity in leadership.", cluster: "business", programs: ["BS Legal Management","BS Management Honors"] },
  { q: "I like exploring creative tools and techniques.", cluster: "arts", programs: ["All Courses"] },
  { q: "I create art or designs even without requirements.", cluster: "arts", programs: ["BFA Information Design","BS New Media and Computer Animation","Architecture"] },
  { q: "I express myself through art, design, or writing.", cluster: "arts", programs: ["All courses"] },
  { q: "I visualize designs before creating them.", cluster: "arts", programs: ["Architecture","BFA Information Design","BS New Media and Computer Animation"] },
  { q: "I find unique solutions to problems.", cluster: "arts", programs: ["BFA Art Management","BFA Information Design","Architecture"] },
  { q: "I get inspired by my surroundings.", cluster: "arts", programs: ["BFA Creative Writing","BFA Theatre Arts"] },
  { q: "I like doing experiments and analyzing data.", cluster: "industrial", programs: ["Biology"] },
  { q: "I enjoy learning science topics.", cluster: "industrial", programs: ["Biology","Medical Biology","Life Sciences"] },
  { q: "I’m curious about genetics and microorganisms.", cluster: "industrial", programs: ["Biology"] },
  { q: "I like learning how medicines work.", cluster: "industrial", programs: ["Medical Biology","Life Sciences"] },
  { q: "I study diseases and the body’s defenses.", cluster: "industrial", programs: ["Medical Biology","Life Sciences"] },
  { q: "I enjoy understanding forces and energy.", cluster: "industrial", programs: ["BS Physics / Applied Physics"] },
  { q: "I use logic and math to explain phenomena.", cluster: "industrial", programs: ["BS Physics / Applied Physics"] },
  { q: "I like solving deep, complex problems.", cluster: "industrial", programs: ["BS Physics / Applied Physics"] },
  { q: "I enjoy puzzles and equations.", cluster: "industrial", programs: ["BS Mathematics / Applied Mathematics"] },
  { q: "I connect math ideas to real life.", cluster: "industrial", programs: ["BS Mathematics / Applied Mathematics"] },
  { q: "I notice visual details others miss.", cluster: "arts", programs: ["Architecture","BFA Information Design"] },
  { q: "I focus well on detailed projects.", cluster: "arts", programs: ["Architecture","BFA Theatre Arts","BFA Art Management"] },
  { q: "I stay focused on tough math problems.", cluster: "industrial", programs: ["BS Mathematics / Applied Mathematics"] },
  { q: "I care about the environment and climate.", cluster: "natural", programs: ["BS Environmental Science / Environmental Management"] },
  { q: "I enjoy outdoor data collection.", cluster: "natural", programs: ["BS Environmental Science / Environmental Management"] },
  { q: "I promote sustainability and conservation.", cluster: "natural", programs: ["BS Environmental Science / Environmental Management"] },
  { q: "I’m fascinated by marine life and ecosystems.", cluster: "natural", programs: ["BS Marine Biology"] },
  { q: "I enjoy learning about underwater life.", cluster: "natural", programs: ["BS Marine Biology"] },
  { q: "I want to protect marine biodiversity.", cluster: "natural", programs: ["BS Marine Biology"] },
  { q: "I enjoy coding and technology.", cluster: "industrial", programs: ["BS Computer Science","BS Information Technology","BS Information Systems","BS Data Science","BS New Media & Computer Animation","BS IT Entrepreneurship","BS Communications Technology Management"] },
  { q: "I easily learn new digital tools.", cluster: "industrial", programs: ["BS Computer Science","BS Information Technology","BS Information Systems","BS Data Science","BS New Media & Computer Animation","BS IT Entrepreneurship","BS Communications Technology Management"] },
  { q: "I analyze data to solve problems.", cluster: "industrial", programs: ["BS Computer Science","BS Information Technology","BS Information Systems","BS Data Science","BS New Media & Computer Animation","BS IT Entrepreneurship","BS Communications Technology Management"] },
  { q: "I stay focused on computer-based tasks.", cluster: "industrial", programs: ["BS Computer Science","BS Information Technology","BS Information Systems","BS Data Science","BS New Media & Computer Animation","BS IT Entrepreneurship","BS Communications Technology Management"] },
  { q: "I enjoy collaborating on tech projects.", cluster: "industrial", programs: ["BS Computer Science","BS Information Technology","BS Information Systems","BS Data Science","BS New Media & Computer Animation","BS IT Entrepreneurship","BS Communications Technology Management"] },
  { q: "I handle technical errors patiently.", cluster: "industrial", programs: ["BS Computer Science","BS Information Technology","BS Information Systems","BS Data Science","BS New Media & Computer Animation","BS IT Entrepreneurship","BS Communications Technology Management"] },
  { q: "I’m curious about chemical reactions.", cluster: "industrial", programs: ["BS Chemistry"] },
  { q: "I work independently on creative projects.", cluster: "arts", programs: ["Architecture","BFA Theatre Arts","BS New Media and Computer Animation"] },
  { q: "I take feedback to improve my work.", cluster: "arts", programs: ["BFA Theatre Arts","BFA Art Management"] },
  { q: "I express ideas through writing, design, or performance.", cluster: "arts", programs: ["BFA Creative Writing","BFA Theatre Arts"] },
  { q: "I enjoy presenting my creative works.", cluster: "arts", programs: ["BFA Theatre Arts","BFA Art Management"] },
  { q: "I’m sensitive to how visuals affect mood and meaning.", cluster: "arts", programs: ["All courses"] },
  { q: "I enjoy exploring art spaces and galleries.", cluster: "arts", programs: ["BFA Art Management","BFA Information Design"] },
  { q: "I’m patient and precise in lab work.", cluster: "industrial", programs: ["BS Chemistry"] },
  { q: "I ensure accuracy and safety in experiments.", cluster: "industrial", programs: ["BS Civil Engineering","BS Chemical Engineering","BS Electrical Engineering","BS Electronics Engineering","BS Computer Engineering","BS Industrial Engineering","BS Mechanical Engineering","BS Aerospace Engineering","BS Robotics Engineering","Agricultural & Biosystems Engineering"] },
  { q: "I use math and science to design systems.", cluster: "industrial", programs: ["BS Civil Engineering","BS Chemical Engineering","BS Electrical Engineering","BS Electronics Engineering","BS Computer Engineering","BS Industrial Engineering","BS Mechanical Engineering","BS Aerospace Engineering","BS Robotics Engineering","Agricultural & Biosystems Engineering"] },
  { q: "I stay determined after failures.", cluster: "industrial", programs: ["BS Civil Engineering","BS Chemical Engineering","BS Electrical Engineering","BS Electronics Engineering","BS Computer Engineering","BS Industrial Engineering","BS Mechanical Engineering","BS Aerospace Engineering","BS Robotics Engineering","Agricultural & Biosystems Engineering"] },
  { q: "I check data carefully for errors.", cluster: "industrial", programs: ["BS Chemistry"] },
  { q: "I work well in engineering teams.", cluster: "industrial", programs: ["BS Civil Engineering","BS Chemical Engineering","BS Electrical Engineering","BS Electronics Engineering","BS Computer Engineering","BS Industrial Engineering","BS Mechanical Engineering","BS Aerospace Engineering","BS Robotics Engineering","Agricultural & Biosystems Engineering"] },
  { q: "I like solving technical problems.", cluster: "industrial", programs: ["BS Civil Engineering","BS Chemical Engineering","BS Electrical Engineering","BS Electronics Engineering","BS Computer Engineering","BS Industrial Engineering","BS Mechanical Engineering","BS Aerospace Engineering","BS Robotics Engineering","Agricultural & Biosystems Engineering"] },
  { q: "I enjoy designing creative spaces.", cluster: "arts", programs: ["BS Architecture"] },
  { q: "I balance creativity with accuracy.", cluster: "arts", programs: ["BS Architecture"] },
  { q: "I manage time to meet project deadlines.", cluster: "arts", programs: ["BS Architecture"] }
];

// -------------------- STATE --------------------
let currentQuestion = 0;
let answers = []; // store user answers per question
let evaluation = {
  eval1: 0,
  eval2: 0,
  eval3: "",
  eval4: "",
  eval5: ""
};

// Example cluster mapping
const clusters = [
  {
    name: "Natural Resources & Agriculture",
    programs: ["BS Agribusiness","BS Environmental Science / Environmental Management","BS Marine Biology","Agricultural & Biosystems Engineering"]
  },
  {
    name: "Human Services",
    programs: ["BEEd","BSEd","Bachelor of Early Childhood Education","Bachelor of Special Needs Education","Bachelor of Physical Education","AB Philosophy","AB Literature","AB History","AB Political Science","AB Sociology / Sociology-Anthropology","AB Development Studies","AB International / Diplomatic Studies","AB Chinese Studies","AB Interdisciplinary Studies","AB Religious & Values Education","AB Psychology","BS Public Management","AB Development Communication"]
  },
  {
    name: "Industrial & Engineering Technology",
    programs: ["BS Civil Engineering","BS Chemical Engineering","BS Electrical Engineering","BS Electronics Engineering","BS Computer Engineering","BS Industrial Engineering","BS Mechanical Engineering","BS Aerospace Engineering","BS Robotics Engineering","Agricultural & Biosystems Engineering","BS Computer Science","BS Information Technology","BS Information Systems","BS Data Science","BS IT Entrepreneurship","BS Communications Technology Management","BS New Media & Computer Animation","BS Chemistry","BS Physics / Applied Physics","BS Mathematics / Applied Mathematics","Biology","Life Sciences / Medical Biology","BS Architecture"]
  },
  {
    name: "Health Services",
    programs: ["Nursing","Medical Biology","Life Sciences","Psychology","Biology"]
  },
  {
    name: "Arts and Communication",
    programs: ["BFA Information Design","BFA Creative Writing","BFA Theatre Arts","BFA Art Management","BS New Media & Computer Animation","Architecture","BS/AB Communication","BS/AB Journalism / Media Studies","AB Development Communication"]
  },
  {
    name: "Business, Management & Technology",
    programs: ["BS Business Administration","BS Business Management","BS Management","BS Management Honors","HRDM","Marketing","BS Entrepreneurship","BSBA Programs","BS Public Management","BS Accountancy","BS Management Accounting","BS Accounting Information Systems","Accounting Technology","BS Finance","BS Economics","AB Economics (Honors)","BS Legal Management","BS Accounting Information Systems","BS IT Entrepreneurship","BS Communications Technology Management"]
  }
];

// -------------------- EVALUATION QUESTIONS --------------------
const evaluationQuestions = [
  { question: "1. How would you rate the clarity of the questions?", type: "likert", key: "eval1" },
  { question: "2. How would you rate the ease of use of the website?", type: "likert", key: "eval2" },
  { question: "3. Did you enjoy the quiz?", type: "yn", key: "eval3" },
  { question: "4. Did the results feel accurate?", type: "yn", key: "eval4" },
  { question: "5. Any recommendations or thoughts on this website?", type: "text", key: "eval5" }
];

// -------------------- ELEMENTS --------------------
const startBtn = document.getElementById("start-btn");
const startCard = document.getElementById("start-card");
const quizCard = document.getElementById("quiz-card");
const questionText = document.getElementById("question-text");
const optionsGroup = document.getElementById("options-group");
const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");

const clusterCard = document.getElementById("cluster-card");
const clusterResult = document.getElementById("cluster-result");
const toCourseBtn = document.getElementById("to-course-btn");

const courseCard = document.getElementById("course-card");
const courseResults = document.getElementById("course-results");
const toEvalBtn = document.getElementById("to-eval-btn");

const evalCard = document.getElementById("evaluation-card");
const submitBtn = document.getElementById("submit-btn");

// -------------------- START QUIZ --------------------
startBtn.addEventListener("click", () => {
    startCard.style.display = "none";
    quizCard.style.display = "block";
    showQuestion();
});

// -------------------- NAVIGATION --------------------
backBtn.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        // Show Cluster
        quizCard.style.display = "none";
        calculateCluster();
        clusterCard.style.display = "block";
    }
});

toCourseBtn.addEventListener("click", () => {
    clusterCard.style.display = "none";
    showTopCourses();
    courseCard.style.display = "block";
});

toEvalBtn.addEventListener("click", () => {
    courseCard.style.display = "none";
    showEvaluation();
    evalCard.style.display = "block";
});

// -------------------- SHOW QUESTION --------------------
function showQuestion() {
    const q = questions[currentQuestion];
    questionText.textContent = q.q;
    optionsGroup.innerHTML = "";

    const options = [
        { label: "Yes", value: 1 },
        { label: "Maybe", value: 0.5 },
        { label: "No", value: 0 }
    ];

    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = opt.label;
        btn.dataset.value = opt.value;

        // Highlight if previously selected
        if (answers[currentQuestion] == opt.value) {
            btn.style.backgroundColor = "#4CAF50";
        }

        btn.addEventListener("click", () => {
            answers[currentQuestion] = opt.value;

            // Reset colors and highlight selected
            Array.from(optionsGroup.children).forEach(b => b.style.backgroundColor = "");
            btn.style.backgroundColor = "#4CAF50";

            nextBtn.disabled = false;
        });

        optionsGroup.appendChild(btn);
    });

    backBtn.style.display = currentQuestion === 0 ? "none" : "inline-block";
    nextBtn.disabled = answers[currentQuestion] == undefined;
}

// -------------------- CALCULATE CLUSTER --------------------
function calculateCluster() {
    // tally answers per cluster
    const clusterScores = {};
    clusters.forEach(c => clusterScores[c.name] = 0);

    questions.forEach((q, i) => {
        const ans = answers[i] || 0;
        const clusterName = clusters.find(c => c.programs.includes(q.programs[0]))?.name;
        if (clusterName) clusterScores[clusterName] += ans;
    });

    // find highest scoring cluster
    const sorted = Object.entries(clusterScores).sort((a,b) => b[1]-a[1]);
    clusterResult.textContent = sorted[0][0];
}

// -------------------- SHOW TOP COURSES --------------------
function showTopCourses() {
    // find top cluster
    const topClusterName = clusterResult.textContent;
    const topCluster = clusters.find(c => c.name === topClusterName);
    if (!topCluster) return;

    // tally programs
    const programScores = {};
    questions.forEach((q, i) => {
        if (answers[i]) {
            q.programs.forEach(p => {
                if (topCluster.programs.includes(p)) {
                    programScores[p] = (programScores[p] || 0) + answers[i];
                }
            });
        }
    });

    // sort and pick top 3
    const topPrograms = Object.entries(programScores)
        .sort((a,b) => b[1]-a[1])
        .slice(0,3)
        .map(p => p[0]);

    courseResults.innerHTML = "<ol>" + topPrograms.map(p => `<li>${p}</li>`).join("") + "</ol>";
}

// -------------------- SHOW EVALUATION --------------------
function showEvaluation() {
    evalCard.innerHTML = "";
    // Inside showEvaluation() or equivalent
evaluationQuestions.forEach(eq => {
    const div = document.getElementById(eq.key + "-group");
    div.innerHTML = "";

    if(eq.type === "likert") {
        for(let j=1;j<=5;j++){
            const btn = document.createElement("button");
            btn.textContent = j;
            btn.dataset.value = j;
            if(evaluation[eq.key] == j) btn.classList.add("selected");

            btn.addEventListener("click", ()=>{
                evaluation[eq.key] = j; // save rating
                Array.from(div.children).forEach(c => c.classList.remove("selected")); // remove from others
                btn.classList.add("selected"); // highlight selected
            });

            div.appendChild(btn);
        }
    } else if(eq.type === "yn") {
        ["Yes","No"].forEach(v=>{
            const btn = document.createElement("button");
            btn.textContent = v;
            btn.dataset.value = v;
            if(evaluation[eq.key] == v) btn.classList.add("selected");

            btn.addEventListener("click", ()=>{
                evaluation[eq.key] = v;
                Array.from(div.children).forEach(c => c.classList.remove("selected"));
                btn.classList.add("selected");
            });

            div.appendChild(btn);
        });
    } else if(eq.type === "text") {
        const textarea = document.createElement("textarea");
        textarea.id = eq.key;
        textarea.value = evaluation[eq.key] || "";
        textarea.addEventListener("input", ()=> evaluation[eq.key] = textarea.value );
        div.appendChild(textarea);
    }
    evalCard.appendChild(div);
    });

    const submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.className = "btn";
    submit.addEventListener("click", ()=>{
        evaluation.eval5 = document.getElementById("eval5")?.value || "";

         // Send data to Google Sheets
        fetch(SHEET_URL, {
            method: "POST",
            mode: "no-cors", // Google Apps Script doesn’t send CORS headers
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                answers: answers,
                evaluation: evaluation
            })
        });

    evalCard.style.display = "none";
    showCongratsScreen();
});
    evalCard.appendChild(submit);
    evalCard.style.display = "block";
}

// -------------------- CONGRATS SCREEN --------------------
function showCongratsScreen() {
    const congratsCard = document.createElement("div");
    congratsCard.className = "quiz-card";
    congratsCard.innerHTML = `
        <h2>Congratulations!</h2>
        <p>Thank you for completing the quiz. Good luck with your career journey! 🌟</p>
    `;
    document.getElementById("quiz-container").appendChild(congratsCard);
}
