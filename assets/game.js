const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

//Array of questions//
let questions = [
	{
		question: "Commonly used data types do not include...",
		choice1: "Strings",
		choice2: "Booleans",
		choice3: "Alerts",
		choice4: "Numbers",
		answer: "Alerts",
	},
	{
		question: "The condition in an if/else statement is enclosed within...",
		choice1: "Quotes",
		choice2: "Curly Brackets",
		choice3: "Parentheses",
		choice4: "Square Brackets",
		answer: "Parentheses",
	},
	{
		question: "A very useful tool used during development and debugging for printing content to the debugger is...",
		choice1: "JavaScript",
		choice2: "Terminal/Bash",
		choice3: "For Loops",
		choice4: "Console.Log",
		answer: "Console.Log",
	},
	{
		question: "Arrays in JavaScript can be used to store...",
		choice1: "Numbers and Strings",
		choice2: "Other Arrays",
		choice3: "Booleans",
		choice4: "All of the Above",
		answer: "All of the Above",
	},
	{
		question: "String values must be enclosed within_when being assigned to variables.",
		choice1: "Commas",
		choice2: "Curly Brackets",
		choice3: "Quotes",
		choice4: "Parentheses",
		answer: "Quotes",
	},
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;

startGame = () => {
	questionCounter = 0;
	score = 0;
	availableQuestions = [...questions];
	getNewQuestion();
};
//Created function to call new question//
getNewQuestion = () => {
	if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
		localStorage.setItem("mostRecentScore", score);
		return window.location.assign("/end.html");
	}
	questionCounter++;
	progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
	//calculates current question and percentage//
	progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

	const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
	currentQuestion = availableQuestions[questionsIndex];
	question.innerText = currentQuestion.question;

	choices.forEach((choice) => {
		const number = choice.dataset["number"];
		choice.innerText = currentQuestion["choice" + number];
	});
	availableQuestions.splice(questionsIndex, 1);
	acceptingAnswers = true;
};

choices.forEach((choice) => {
	choice.addEventListener("click", (e) => {
		if (!acceptingAnswers) return;

		acceptingAnswers = false;
		const selectedChoice = e.target;
		const selectedAnswer = selectedChoice.dataset["number"];

		let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
		if (classToApply === "correct") {
			incrementScore(SCORE_POINTS);
		}
		selectedChoice.parentElement.classList.add(classToApply);
		setTimeout(() => {
			selectedChoice.parentElement.classList.remove(classToApply);
			getNewQuestion();
		}, 1000);
	});
});

incrementScore = (num) => {
	score += num;
	scoreText.innerText = score;
};

startGame();
