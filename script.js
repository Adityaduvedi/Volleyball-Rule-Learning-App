
const quizData = [
    {
        question: "How many players are on a volleyball team on court?",
        options: ["4", "5", "6", "7"],
        answer: "6"
    },
    {
        question: "How many times can a team touch the ball before it must go over the net?",
        options: ["2", "3", "4", "5"],
        answer: "3"
    },
    {
        question: "Which direction do players rotate?",
        options: ["Counterclockwise", "Clockwise", "Random", "Only front row rotates"],
        answer: "Clockwise"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionDiv = document.getElementById("question");
    const optionsDiv = document.getElementById("options");
    const current = quizData[currentQuestion];

    questionDiv.textContent = current.question;
    optionsDiv.innerHTML = "";
    current.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selected) {
    const correct = quizData[currentQuestion].answer;
    const result = document.getElementById("result");
    if (selected === correct) {
        score++;
        result.textContent = "Correct!";
    } else {
        result.textContent = "Wrong! The correct answer is " + correct;
    }
}

function nextQuestion() {
    currentQuestion++;
    const result = document.getElementById("result");
    result.textContent = "";
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-container").innerHTML = `<h2>Quiz Completed</h2><p>Your score: ${score} / ${quizData.length}</p>`;
    }
}

window.onload = loadQuestion;
