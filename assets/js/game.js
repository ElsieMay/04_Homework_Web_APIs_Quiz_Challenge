const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
var timerElement = document.querySelector('.timer-count');
var timerElement = document.querySelector('.timeProperties');
var timerCount;

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;

//Array of questions and answers//
let questions = [
	{
		question: 'Commonly used data types do not include...',
		choice1: 'Strings',
		choice2: 'Booleans',
		choice3: 'Alerts',
		choice4: 'Numbers',
		answer: 3,
	},
	{
		question: 'The condition in an if/else statement is enclosed within...',
		choice1: 'Quotes',
		choice2: 'Curly Brackets',
		choice3: 'Parentheses',
		choice4: 'Square Brackets',
		answer: 3,
	},
	{
		question: 'A very useful tool used during development and debugging for printing content to the debugger is...',
		choice1: 'JavaScript',
		choice2: 'Terminal/Bash',
		choice3: 'For Loops',
		choice4: 'Console.Log',
		answer: 4,
	},
	{
		question: 'Arrays in JavaScript can be used to store...',
		choice1: 'Numbers and Strings',
		choice2: 'Other Arrays',
		choice3: 'Booleans',
		choice4: 'All of the Above',
		answer: 4,
	},
	{
		question: 'String values must be enclosed within_when being assigned to variables.',
		choice1: 'Commas',
		choice2: 'Curly Brackets',
		choice3: 'Quotes',
		choice4: 'Parentheses',
		answer: 3,
	},
];

startGame = () => {
	questionCounter = 0;
	score = 0;
	availableQuestions = [...questions];
	getNewQuestion();
	timerCount = 60;
	timerElement.textContent = timerCount;
	startTimer();
};

function startTimer() {
	var timer = setInterval(function () {
		timerCount--;
		timerElement.textContent = timerCount;
		if (timerCount === 0) {
			clearInterval(timer);
			//Takes user to End Page//
			return window.location.assign('/assets/pages/end.html');
		}
	}, 1000);
}
//Created function to call new question//
getNewQuestion = () => {
	if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
		localStorage.setItem('mostRecentScore', score);
		//Takes user to End Page//
		window.location.assign('/assets/pages/end.html');
		return;
	} else {
		questionCounter++;
		progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
		//calculates current question and percentage//
		progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
		//Randomises questions received by user//
		const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
		currentQuestion = availableQuestions[questionsIndex];
		question.innerText = currentQuestion.question;
		//Loops through question selections//
		choices.forEach((choice) => {
			const number = choice.dataset['number'];
			choice.innerText = currentQuestion['choice' + number];
		});
		availableQuestions.splice(questionsIndex, 1);
		acceptingAnswers = true;
	}
};

choices.forEach((choice) => {
	//Event listener for answer selection//
	choice.addEventListener('click', (e) => {
		if (!acceptingAnswers) return;

		acceptingAnswers = false;
		const selectedChoice = e.target;
		const selectedAnswer = selectedChoice.dataset['number'];

		let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
		if (classToApply === 'correct') {
			alert('Correct');
			score = score + SCORE_POINTS;
			scoreText.innerText = score;
			getNewQuestion();
		} else {
			alert('Incorrect');
			timerCount = timerCount - 10;
			selectedChoice.parentElement.classList.add(classToApply);
			setTimeout(() => {
				selectedChoice.parentElement.classList.remove(classToApply);
				getNewQuestion();
			}, 1000);
		}
	});
});
startGame();
