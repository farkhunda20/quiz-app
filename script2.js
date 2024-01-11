const quiz = document.getElementById("quiz");
const answers = document.getElementsByName("answer");
const questionTitle = document.querySelector("h2");
const submit = document.querySelector("button");
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");

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

let currentQuestionIndex = 0;
let chosenAnswer = undefined;
let score = 0;
loadQuiz();

function loadQuiz() {
  deselctAnswer();

  const currentQuestion = quizData[currentQuestionIndex];
  questionTitle.innerText = currentQuestion.question;
  a_text.innerText = currentQuestion.a;
  b_text.innerText = currentQuestion.b;
  c_text.innerText = currentQuestion.c;
  d_text.innerText = currentQuestion.d;
}

function checkSelected() {
  answers.forEach((answer) => {
    if (answer.checked) {
      chosenAnswer = answer.id;
      console.log(chosenAnswer);
    }
  });

  return chosenAnswer;
}

function deselctAnswer() {
  answers.forEach((answer) => {
    answer.checked = false;
  });
}

submit.addEventListener("click", () => {
  let chosenAnswer = checkSelected();

  if (chosenAnswer) {
    if (chosenAnswer === quizData[currentQuestionIndex].correct) {
      score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>you got ${score}/${quizData.length} answers correct</h2>
    <button onclick = location.reload()> Try Again </button>
    `;
    }
  }
});
