"use strict";

const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c"
    },
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Preprocessor",
        b: "Hyper Text Markup Language",
        c: "Hyper Text Multiple Language",
        d: "Hyper Tool Multi Language",
        correct: "b"
    },
    {
        question: "What is the largest planet in our solar system?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "c"
    },
    {
        question: "What is the chemical symbol for water?",
        a: "WO",
        b: "H2O",
        c: "O2",
        d: "HO",
        correct: "b"
    }
];

const quiz = document.querySelector("#quiz");
const question = document.querySelector(".question");
const answerList = document.querySelector(".answer-list");
const nextBtn = document.querySelector("#next");

let currentQuiz = 0;
let score = 0;
let selectedAnswer = null;

loadQuiz();

function loadQuiz () {
    resetBackgroundColors();
    const currentQuizData = quizData[currentQuiz];

    question.textContent = currentQuizData.question;
    document.querySelector("[data-answer='a']").textContent = currentQuizData.a;
    document.querySelector("[data-answer='b']").textContent = currentQuizData.b;
    document.querySelector("[data-answer='c']").textContent = currentQuizData.c;
    document.querySelector("[data-answer='d']").textContent = currentQuizData.d;
}

function resetBackgroundColors () {
    const answers = document.querySelectorAll(".answer");

    answers.forEach(answer => {
        answer.classList.remove("correct", "incorrect");
    })
}

function showAnswerInfo (selectedAnswer) {
    const correctAnswer = quizData[currentQuiz].correct;

    document.querySelector(`[data-answer="${correctAnswer}"]`).classList.add("correct");

    if (selectedAnswer !== correctAnswer) {
        document.querySelector(`[data-answer="${selectedAnswer}"]`).classList.add("incorrect");
    } else {
        score++;
    }
}

answerList.addEventListener("click", (event) => {
    if (event.target.matches(".answer")) {
        selectedAnswer = event.target.getAttribute("data-answer");
        showAnswerInfo(selectedAnswer);
    }
})

nextBtn.addEventListener("click", () => {
    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        `;
    }
})
