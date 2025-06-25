const questions = [
  {
    question: "Stolica Polski to?",
    answers: ["Warszawa", "Kraków", "Gdańsk"],
    correct: 0
  },
  {
    question: "Ile jest 2 + 2?",
    answers: ["3", "4", "5"],
    correct: 1
  },
  {
    question: "Jaki kolor ma niebo w pochmurny dzień?",
    answers: ["Niebieski", "Szary", "Zielony"],
    correct: 1
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const statusEl = document.getElementById("status");
const nextBtn = document.getElementById("next");

function showQuestion() {
  const q = questions[current];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  q.answers.forEach((a, i) => {
    const li = document.createElement("li");
    li.textContent = a;
    li.onclick = () => selectAnswer(i);
    answersEl.appendChild(li);
  });
  statusEl.textContent = "";
  nextBtn.disabled = true;
}

function selectAnswer(i) {
  const q = questions[current];
  const lis = answersEl.querySelectorAll("li");
  lis.forEach((li, index) => {
    li.onclick = null; // blokujemy dalsze kliknięcia
    if(index === q.correct) li.classList.add("correct");
    if(index === i && i !== q.correct) li.classList.add("wrong");
  });
  if(i === q.correct) {
    score++;
    statusEl.textContent = "Dobra odpowiedź!";
  } else {
    statusEl.textContent = "Źle, spróbuj następne pytanie.";
  }
  nextBtn.disabled = false;
}

nextBtn.onclick = () => {
  current++;
  if(current >= questions.length) {
    statusEl.textContent = `Koniec gry! Twój wynik: ${score} / ${questions.length}`;
    questionEl.textContent = "";
    answersEl.innerHTML = "";
    nextBtn.disabled = true;
  } else {
    showQuestion();
  }
}

showQuestion();
// Możesz tu dodać JS do menu, np. animacje lub przejścia
