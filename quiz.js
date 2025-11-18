
const SHEET_URL = "https://script.google.com/macros/s/AKfycbyczSjSAxIfVS6MkcnxwakN2_687UMrZQDyVHe_9GFIFR9eOZ0uAejktT_Ez1ZXoApk/exec";

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

// -------------------- DOM ELEMENTS --------------------
const startCard = document.getElementById("start-card");
const startBtn = document.getElementById("start-btn");
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
const submitMsg = document.getElementById("submit-msg");

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

submitBtn.addEventListener("click", () => {
    submitMsg.textContent = "Thank you! Your responses have been recorded.";
    // send data to Google Sheets here
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

        // highlight previously selected answer
        if (answers[currentQuestion] == opt.value) {
            btn.classList.add("selected");
        }

        btn.addEventListener("click", () => {
            answers[currentQuestion] = opt.value;
            // remove selected from siblings
            Array.from(optionsGroup.children).forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            nextBtn.disabled = false;
        });

        optionsGroup.appendChild(btn);
    });

    backBtn.style.display = currentQuestion === 0 ? "none" : "inline-block";
    nextBtn.disabled = answers[currentQuestion] === undefined;
}

// -------------------- CALCULATE CLUSTER --------------------
function calculateCluster() {
    const clusterScores = {
        "Natural Resources & Agriculture": 0,
        "Human Services": 0,
        "Industrial & Engineering Technology": 0,
        "Health Services": 0,
        "Arts and Communication": 0,
        "Business, Management & Technology": 0
    };

    questions.forEach((q, i) => {
        const val = answers[i] || 0;
        // Map short cluster keys to full names
        let clusterName = "";
        switch(q.cluster) {
            case "natural": clusterName = "Natural Resources & Agriculture"; break;
            case "human": clusterName = "Human Services"; break;
            case "industrial": clusterName = "Industrial & Engineering Technology"; break;
            case "health": clusterName = "Health Services"; break;
            case "arts": clusterName = "Arts and Communication"; break;
            case "business": clusterName = "Business, Management & Technology"; break;
        }
        clusterScores[clusterName] += val;
    });

    // get cluster with highest score
    const sortedClusters = Object.entries(clusterScores).sort((a,b)=>b[1]-a[1]);
    clusterResult.textContent = sortedClusters[0][0];
    // store cluster for next step
    clusterCard.dataset.topCluster = sortedClusters[0][0];
}

// -------------------- SHOW TOP COURSES --------------------
function showTopCourses() {
    const selectedCluster = clusterCard.dataset.topCluster;
    const clusterData = clusters.find(c => c.name === selectedCluster);
    const programScores = {};

    questions.forEach((q, i) => {
        const val = answers[i] || 0;
        q.programs.forEach(p => {
            if (!programScores[p]) programScores[p] = 0;
            programScores[p] += val;
        });
    });

    // sort programs by score
    const sortedPrograms = Object.entries(programScores)
        .sort((a,b) => b[1]-a[1])
        .map(entry => entry[0])
        .filter(p => clusterData.programs.includes(p));

    const top3 = sortedPrograms.slice(0,3);

    courseResults.innerHTML = "<ol>" + top3.map(c=>`<li>${c}</li>`).join("") + "</ol>";
}

// -------------------- SHOW EVALUATION --------------------
function showEvaluation() {
    evalCard.innerHTML = "";
    evaluationQuestions.forEach(eq => {
        const qDiv = document.createElement("div");
        qDiv.className = "eval-question";

        const label = document.createElement("p");
        label.textContent = eq.question;
        qDiv.appendChild(label);

        if (eq.type === "likert") {
            for (let i=1;i<=5;i++) {
                const btn = document.createElement("button");
                btn.textContent = i;
                btn.dataset.value = i;
                btn.addEventListener("click", () => evaluation[eq.key] = i);
                qDiv.appendChild(btn);
            }
        } else if (eq.type === "yn") {
            ["Yes","No"].forEach(v=>{
                const btn = document.createElement("button");
                btn.textContent = v;
                btn.dataset.value = v;
                btn.addEventListener("click", () => evaluation[eq.key] = v);
                qDiv.appendChild(btn);
            });
        } else if (eq.type === "text") {
            const ta = document.createElement("textarea");
            ta.addEventListener("input", (e)=>evaluation[eq.key]=e.target.value);
            qDiv.appendChild(ta);
        }

        evalCard.appendChild(qDiv);
    });

    const submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.className = "btn";
    submit.addEventListener("click", ()=>{
        submitMsg.textContent = "Thank you! Your responses have been recorded.";
        // optionally push to Google Sheets here
    });
    evalCard.appendChild(submit);

    evalCard.style.display = "block";
}
