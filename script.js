const question = document.querySelector("h2");
const a_text = document.querySelector("#a-text");
const b_text = document.querySelector("#b-text");
const c_text = document.querySelector("#c-text");
const d_text = document.querySelector("#d-text");
const next = document.querySelector("button");
const quiz = document.getElementById("quiz");
let answerEls = document.getElementsByName("answer");

let answer = undefined;
let score = 0;
const quizData = [
  {
    question: "How old is florin ? ",
    a: "10",
    b: "17",
    c: "23",
    d: "22",
    correct: "d",
  },
  {
    question: " what is most used programming language in 2023?",
    a: "Java",
    b: "Python",
    c: "Javascript",
    d: "C++",
    correct: "c",
  },

  {
    question: " who is the president of Us in 2023 ?",
    a: "Obma",
    b: "johnny depp",
    c: "willima skakespear",
    d: "trump",
    correct: "a",
  },

  {
    question: "what does HTML stand for?",
    a: "home to many learders",
    b: "Hyper text markup language",
    c: "how to make lemonJuice",
    d: "harsh techniques modified low",
    correct: "b",
  },

  {
    question: " what is the earth shape like ?",
    a: "cirlce",
    b: "round",
    c: "square",
    d: "triangle",
    correct: "b",
  },
];

let currentQuestion = 0;
loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuestion];
  question.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function checkSelected() {
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

next.addEventListener("click", () => {
  let answer = checkSelected();

  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;

    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>you answered correctly ${score}/ ${quizData.length} questions</h2> 
     <button onclick = location.reload()>Try again</button>`;
    }
  }
});
