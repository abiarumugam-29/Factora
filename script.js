/* =========================================
   KNOWQUEST KIDS
   ========================================= */


const QUESTIONS = [

  /* INDIA */

  {
    id: "india-001",

    category: "India",

    topic: "Government",

    emoji: "🇮🇳",

    question:
      "Which document sets out the fundamental rules and principles of India's government?",

    options: [
      "The Constitution of India",
      "The National Anthem",
      "The Union Budget",
      "The Census"
    ],

    answer: 0,

    clues: [
      "It came into effect on 26 January 1950.",
      "It begins with the words 'We, the people of India'.",
      "It is the supreme law of India."
    ],

    fact:
      "The Constitution of India is the supreme law of the country and came into effect on 26 January 1950."
  },


  {
    id: "india-002",

    category: "India",

    topic: "Places",

    emoji: "🗺️",

    question:
      "Which Indian state is known as the 'Land of the Rising Sun'?",

    options: [
      "Arunachal Pradesh",
      "Kerala",
      "Gujarat",
      "Punjab"
    ],

    answer: 0,

    clues: [
      "It is India's easternmost state.",
      "Its name refers to dawn-lit mountains.",
      "It is in India's northeast."
    ],

    fact:
      "Arunachal Pradesh is India's easternmost state and is located in the northeast."
  },


  {
    id: "india-003",

    category: "India",

    topic: "Science",

    emoji: "🚀",

    question:
      "Which organisation is India's national space agency?",

    options: [
      "DRDO",
      "ISRO",
      "CSIR",
      "BARC"
    ],

    answer: 1,

    clues: [
      "Its full name contains the word 'Space'.",
      "Its headquarters are in Bengaluru.",
      "It operates India's major space missions."
    ],

    fact:
      "ISRO stands for Indian Space Research Organisation and is India's national space agency."
  },


  {
    id: "india-004",

    category: "India",

    topic: "Culture",

    emoji: "🎭",

    question:
      "Which festival is widely known as the Festival of Lights?",

    options: [
      "Holi",
      "Onam",
      "Diwali",
      "Baisakhi"
    ],

    answer: 2,

    clues: [
      "People often light diyas.",
      "Homes may be decorated with rangoli.",
      "It is usually celebrated around October or November."
    ],

    fact:
      "Diwali, also called Deepavali, is popularly known as the Festival of Lights."
  },


  /* WORLD */

  {
    id: "world-001",

    category: "World",

    topic: "Places",

    emoji: "🌎",

    question:
      "Which is the largest ocean on Earth?",

    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean"
    ],

    answer: 2,

    clues: [
      "It covers a huge part of Earth's surface.",
      "It lies between Asia and the Americas.",
      "Its name is associated with peacefulness."
    ],

    fact:
      "The Pacific Ocean is the largest and deepest ocean on Earth."
  },


  {
    id: "world-002",

    category: "World",

    topic: "Organisations",

    emoji: "🏛️",

    question:
      "Where is the headquarters of the United Nations?",

    options: [
      "Geneva",
      "New York City",
      "Paris",
      "Tokyo"
    ],

    answer: 1,

    clues: [
      "It is in the United States.",
      "The headquarters is beside the East River.",
      "The city is famous for the Statue of Liberty."
    ],

    fact:
      "The United Nations headquarters is located in New York City."
  },


  {
    id: "world-003",

    category: "World",

    topic: "Science",

    emoji: "🌙",

    question:
      "What is Earth's natural satellite?",

    options: [
      "Mars",
      "The Moon",
      "Venus",
      "The Sun"
    ],

    answer: 1,

    clues: [
      "It appears in Earth's night sky.",
      "Humans have landed on it.",
      "It orbits Earth."
    ],

    fact:
      "The Moon is Earth's natural satellite."
  },


  /* SCIENCE */

  {
    id: "science-001",

    category: "Science & Tech",

    topic: "Space",

    emoji: "🪐",

    question:
      "Which planet is known as the Red Planet?",

    options: [
      "Jupiter",
      "Mars",
      "Mercury",
      "Neptune"
    ],

    answer: 1,

    clues: [
      "It is the fourth planet from the Sun.",
      "Iron minerals give it a reddish appearance.",
      "It has two small moons."
    ],

    fact:
      "Mars is called the Red Planet because iron minerals give its surface a reddish appearance."
  },


  {
    id: "science-002",

    category: "Science & Tech",

    topic: "Biology",

    emoji: "🧬",

    question:
      "Which organ pumps blood around the human body?",

    options: [
      "Lungs",
      "Brain",
      "Heart",
      "Liver"
    ],

    answer: 2,

    clues: [
      "It is a muscular organ.",
      "It beats throughout life.",
      "It belongs to the circulatory system."
    ],

    fact:
      "The heart is a muscular organ that pumps blood through the body's circulatory system."
  },


  {
    id: "science-003",

    category: "Science & Tech",

    topic: "Technology",

    emoji: "💻",

    question:
      "What does AI commonly stand for?",

    options: [
      "Automated Internet",
      "Artificial Intelligence",
      "Advanced Input",
      "Applied Information"
    ],

    answer: 1,

    clues: [
      "It is widely used in modern technology.",
      "The first word is 'Artificial'.",
      "It involves computer systems performing intelligent tasks."
    ],

    fact:
      "AI stands for Artificial Intelligence."
  },


  /* SPORTS */

  {
    id: "sports-001",

    category: "Sports",

    topic: "Football",

    emoji: "⚽",

    question:
      "How many players from one team are on the field at the start of a football match?",

    options: [
      "9",
      "10",
      "11",
      "12"
    ],

    answer: 2,

    clues: [
      "The goalkeeper is included.",
      "It is more than ten.",
      "Both teams normally start with the same number."
    ],

    fact:
      "Each football team starts with 11 players on the field, including the goalkeeper."
  },


  {
    id: "sports-002",

    category: "Sports",

    topic: "Olympics",

    emoji: "🏅",

    question:
      "How many rings are there in the Olympic symbol?",

    options: [
      "3",
      "4",
      "5",
      "6"
    ],

    answer: 2,

    clues: [
      "They are linked together.",
      "They form the Olympic symbol.",
      "The number is also the number of vowels in 'Olympics' if counted carefully? No — think of the symbol."
    ],

    fact:
      "The Olympic symbol consists of five interlocking rings."
  },


  /* ENVIRONMENT */

  {
    id: "environment-001",

    category: "Environment",

    topic: "Nature",

    emoji: "🌱",

    question:
      "Which gas do plants mainly take in during photosynthesis?",

    options: [
      "Oxygen",
      "Nitrogen",
      "Carbon dioxide",
      "Hydrogen"
    ],

    answer: 2,

    clues: [
      "Humans breathe out some of it.",
      "Plants use it to make food.",
      "Its chemical formula is CO₂."
    ],

    fact:
      "Plants take in carbon dioxide during photosynthesis."
  },


  {
    id: "environment-002",

    category: "Environment",

    topic: "Energy",

    emoji: "🌬️",

    question:
      "Which renewable energy source uses moving air to generate electricity?",

    options: [
      "Wind energy",
      "Coal",
      "Natural gas",
      "Petrol"
    ],

    answer: 0,

    clues: [
      "Large turbines are used.",
      "It depends on moving air.",
      "You may see tall towers with large blades."
    ],

    fact:
      "Wind turbines convert the energy of moving air into electrical energy."
  },


  /* CULTURE */

  {
    id: "culture-001",

    category: "Culture & Arts",

    topic: "Music",

    emoji: "🎵",

    question:
      "Which instrument family does the violin belong to?",

    options: [
      "String",
      "Brass",
      "Woodwind",
      "Percussion"
    ],

    answer: 0,

    clues: [
      "It is usually played with a bow.",
      "It has four strings.",
      "The viola and cello belong to the same family."
    ],

    fact:
      "The violin is a bowed string instrument."
  },


  /* GENERAL KNOWLEDGE */

  {
    id: "gk-001",

    category: "General Knowledge",

    topic: "World Facts",

    emoji: "💡",

    question:
      "How many days are there in a leap year?",

    options: [
      "364",
      "365",
      "366",
      "367"
    ],

    answer: 2,

    clues: [
      "It has one extra day.",
      "The extra day is added to February.",
      "February has 29 days."
    ],

    fact:
      "A leap year has 366 days."
  }

];



/* =========================================
   GAME STATE
   ========================================= */

let xp =
  Number(localStorage.getItem("knowquest_xp")) || 0;


let seenQuestions =
  JSON.parse(
    localStorage.getItem("knowquest_seen")
  ) || [];


let cards =
  JSON.parse(
    localStorage.getItem("knowquest_cards")
  ) || [];


let selectedCategory = null;

let selectedTopic = null;

let currentQuestions = [];

let currentQuestionIndex = 0;

let questionXP = 0;

let correctAnswers = 0;

let cluesUsed = 0;

let answered = false;



/* =========================================
   SAVE DATA
   ========================================= */

function saveGame() {

  localStorage.setItem(
    "knowquest_xp",
    xp
  );

  localStorage.setItem(
    "knowquest_seen",
    JSON.stringify(seenQuestions)
  );

  localStorage.setItem(
    "knowquest_cards",
    JSON.stringify(cards)
  );

}



/* =========================================
   SCREEN SYSTEM
   ========================================= */

function showScreen(id) {

  document
    .querySelectorAll(".screen")
    .forEach(screen => {

      screen.classList.remove("active");

    });


  document
    .getElementById(id)
    .classList.add("active");


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}



/* =========================================
   HOME
   ========================================= */

function goHome() {

  showScreen("home");

  updateStats();

}



/* =========================================
   STATS
   ========================================= */

function updateStats() {

  document.getElementById("topXP")
    .textContent = xp;


  document.getElementById("topCards")
    .textContent = cards.length;


  const level =
    Math.floor(xp / 100) + 1;


  const currentLevelXP =
    xp % 100;


  document.getElementById("levelNumber")
    .textContent = level;


  document.getElementById("levelTitle")
    .textContent =
      `Level ${level} — ${getLevelName(level)}`;


  document.getElementById("levelProgress")
    .style.width =
      `${currentLevelXP}%`;


  document.getElementById("levelText")
    .textContent =
      `${currentLevelXP} / 100 XP to Level ${level + 1}`;

}



function getLevelName(level) {

  const names = [

    "Curious Explorer",

    "Clue Hunter",

    "Fact Finder",

    "Knowledge Ranger",

    "Wonder Master",

    "Quest Legend"

  ];


  return names[
    Math.min(
      level - 1,
      names.length - 1
    )
  ];

}



/* =========================================
   CATEGORIES
   ========================================= */

const CATEGORIES = [

  {
    id: "India",
    emoji: "🇮🇳",
    title: "India",
    description:
      "People, places, science & culture"
  },

  {
    id: "World",
    emoji: "🌎",
    title: "World",
    description:
      "Discover our amazing planet"
  },

  {
    id: "Science & Tech",
    emoji: "🔬",
    title: "Science & Tech",
    description:
      "Space, biology & technology"
  },

  {
    id: "Sports",
    emoji: "🏅",
    title: "Sports",
    description:
      "Games, records & champions"
  },

  {
    id: "Environment",
    emoji: "🌱",
    title: "Environment",
    description:
      "Nature, climate & energy"
  },

  {
    id: "Culture & Arts",
    emoji: "🎭",
    title: "Culture & Arts",
    description:
      "Art, music & traditions"
  },

  {
    id: "General Knowledge",
    emoji: "💡",
    title: "General Knowledge",
    description:
      "Interesting facts from everywhere"
  }

];



function showCategories() {

  const grid =
    document.getElementById(
      "categoryGrid"
    );


  grid.innerHTML =
    CATEGORIES.map(category => `

      <button
        class="category-card"
        onclick="selectCategory('${category.id}')"
      >

        <div class="emoji">
          ${category.emoji}
        </div>

        <h3>
          ${category.title}
        </h3>

        <p>
          ${category.description}
        </p>

      </button>

    `).join("");


  showScreen("categories");

}



/* =========================================
   SELECT CATEGORY
   ========================================= */

function selectCategory(category) {

  selectedCategory =
    category;


  const topics = [

    ...new Set(

      QUESTIONS

        .filter(
          question =>
            question.category === category
        )

        .map(
          question =>
            question.topic
        )

    )

  ];


  document.getElementById(
    "topicTitle"
  ).textContent =
    `${category} Quest`;


  const grid =
    document.getElementById(
      "topicGrid"
    );


  grid.innerHTML =
    topics.map(topic => {

      const question =
        QUESTIONS.find(
          q =>
            q.category === category &&
            q.topic === topic
        );


      const remaining =
        QUESTIONS.filter(q =>

          q.category === category &&

          q.topic === topic &&

          !seenQuestions.includes(q.id)

        ).length;


      return `

        <button
          class="topic-card"
          onclick="selectTopic('${topic}')"
        >

          <div class="emoji">
            ${question.emoji}
          </div>

          <div>

            <h3>
              ${topic}
            </h3>

            <p>
              ${remaining}
              fresh question(s) left
            </p>

          </div>

        </button>

      `;

    }).join("");


  showScreen("topics");

}



/* =========================================
   SELECT TOPIC
   ========================================= */

function selectTopic(topic) {

  selectedTopic =
    topic;


  let availableQuestions =
    QUESTIONS.filter(question =>

      question.category ===
        selectedCategory &&

      question.topic ===
        selectedTopic &&

      !seenQuestions.includes(
        question.id
      )

    );


  if (availableQuestions.length === 0) {

    showToast(
      "🎉 You explored every question in this topic!"
    );

    return;

  }


  /*
    Shuffle questions
  */

  availableQuestions.sort(
    () => Math.random() - 0.5
  );


  /*
    Maximum 5 questions
  */

  currentQuestions =
    availableQuestions.slice(0, 5);


  currentQuestionIndex = 0;

  questionXP = 0;

  correctAnswers = 0;

  showScreen("quiz");

  loadQuestion();

}



/* =========================================
   LOAD QUESTION
   ========================================= */

function loadQuestion() {

  const question =
    currentQuestions[
      currentQuestionIndex
    ];


  answered = false;

  cluesUsed = 0;


  document.getElementById(
    "question"
  ).textContent =
    question.question;


  document.getElementById(
    "quizCategory"
  ).textContent =
    `${question.emoji} ${question.category} • ${question.topic}`;


  document.getElementById(
    "questionNumber"
  ).textContent =
    `${currentQuestionIndex + 1} / ${currentQuestions.length}`;


  document.getElementById(
    "quizXP"
  ).textContent =
    questionXP;


  document.getElementById(
    "quizProgress"
  ).style.width =
    `${(
      currentQuestionIndex /
      currentQuestions.length
    ) * 100}%`;


  /*
    Answer buttons
  */

  const options =
    document.getElementById(
      "options"
    );


  options.innerHTML =
    question.options.map(
      (option, index) => `

        <button
          class="option"
          onclick="answerQuestion(${index})"
        >

          ${String.fromCharCode(
            65 + index
          )}.
          ${option}

        </button>

      `
    ).join("");


  /*
    Reset clues
  */

  for (let i = 0; i < 3; i++) {

    const button =
      document.getElementById(
        `clue${i}`
      );

    button.disabled = false;

    button.style.opacity = "1";

  }


  document.getElementById(
    "clueText"
  ).classList.add("hidden");


  document.getElementById(
    "feedback"
  ).classList.add("hidden");

}



/* =========================================
   CLUE
   ========================================= */

function useClue(index) {

  if (answered) return;


  const question =
    currentQuestions[
      currentQuestionIndex
    ];


  cluesUsed =
    Math.max(
      cluesUsed,
      index + 1
    );


  document.getElementById(
    `clue${index}`
  ).disabled = true;


  document.getElementById(
    `clue${index}`
  ).style.opacity = ".45";


  const clueText =
    document.getElementById(
      "clueText"
    );


  clueText.textContent =
    `💡 ${question.clues[index]}`;


  clueText.classList.remove(
    "hidden"
  );


  showToast(
    `🔍 Clue ${index + 1} revealed!`
  );

}



/* =========================================
   ANSWER
   ========================================= */

function answerQuestion(selectedIndex) {

  if (answered) return;


  answered = true;


  const question =
    currentQuestions[
      currentQuestionIndex
    ];


  const isCorrect =
    selectedIndex ===
    question.answer;


  /*
    XP based on clues
  */

  let earnedXP;


  if (!isCorrect) {

    earnedXP = 5;

  }

  else if (cluesUsed === 0) {

    earnedXP = 30;

  }

  else if (cluesUsed === 1) {

    earnedXP = 20;

  }

  else if (cluesUsed === 2) {

    earnedXP = 15;

  }

  else {

    earnedXP = 10;

  }


  if (isCorrect) {

    correctAnswers++;

  }


  questionXP += earnedXP;

  xp += earnedXP;


  /*
    Mark question as seen
  */

  if (
    !seenQuestions.includes(
      question.id
    )
  ) {

    seenQuestions.push(
      question.id
    );

  }


  /*
    Collect card
  */

  if (
    !cards.includes(
      question.id
    )
  ) {

    cards.push(
      question.id
    );

  }


  saveGame();

  updateStats();


  /*
    Highlight answers
  */

  const buttons =
    document.querySelectorAll(
      ".option"
    );


  buttons.forEach(
    (button, index) => {

      button.disabled = true;


      if (
        index === question.answer
      ) {

        button.classList.add(
          "correct"
        );

      }


      if (
        index === selectedIndex &&
        index !== question.answer
      ) {

        button.classList.add(
          "wrong"
        );

      }

    }
  );


  /*
    Feedback
  */

  document.getElementById(
    "feedbackIcon"
  ).textContent =
    isCorrect ? "🎉" : "💡";


  document.getElementById(
    "feedbackTitle"
  ).textContent =
    isCorrect
      ? `Correct! +${earnedXP} XP`
      : `Good try! +${earnedXP} XP`;


  document.getElementById(
    "feedbackText"
  ).textContent =
    question.fact;


  document.getElementById(
    "feedback"
  ).classList.remove(
    "hidden"
  );


  document.getElementById(
    "quizXP"
  ).textContent =
    questionXP;


  document.getElementById(
    "quizProgress"
  ).style.width =
    `${(
      (currentQuestionIndex + 1) /
      currentQuestions.length
    ) * 100}%`;

}



/* =========================================
   NEXT QUESTION
   ========================================= */

function nextQuestion() {

  if (
    currentQuestionIndex <
    currentQuestions.length - 1
  ) {

    currentQuestionIndex++;

    loadQuestion();

  }

  else {

    finishQuest();

  }

}



/* =========================================
   FINISH QUEST
   ========================================= */

function finishQuest() {

  document.getElementById(
    "resultXP"
  ).textContent =
    questionXP;


  document.getElementById(
    "resultCorrect"
  ).textContent =
    `${correctAnswers}/${currentQuestions.length}`;


  document.getElementById(
    "resultCards"
  ).textContent =
    currentQuestions.length;


  if (
    correctAnswers ===
    currentQuestions.length
  ) {

    document.getElementById(
      "resultMessage"
    ).textContent =
      "Perfect quest! Your Knowledge World just got bigger.";

  }

  else {

    document.getElementById(
      "resultMessage"
    ).textContent =
      "Every answer is a new discovery. Keep exploring!";

  }


  showScreen("result");

}



/* =========================================
   EXIT QUIZ
   ========================================= */

function exitQuiz() {

  const confirmed =
    confirm(
      "Leave this quest?"
    );


  if (confirmed) {

    showCategories();

  }

}



/* =========================================
   TOAST
   ========================================= */

function showToast(message) {

  const toast =
    document.getElementById(
      "toast"
    );


  toast.textContent =
    message;


  toast.classList.add(
    "show"
  );


  clearTimeout(
    window.toastTimer
  );


  window.toastTimer =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      1800
    );

}



/* =========================================
   START APP
   ========================================= */

updateStats();

showScreen("home");
