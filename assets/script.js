//These are a comprehensive list of variables used in below code
let userName = document.querySelector("#userName");
let headerText = document.querySelector("#headerText");
let greetingInput = document.querySelector("#greetingInput");
let startBtn = document.querySelector("#start");
let questionOne = document.querySelector("#questionOne");
let questionTwo = document.querySelector("#questionTwo");
let questionThree = document.querySelector("#questionThree");
let questionFour = document.querySelector("#questionFour");
let questionFive = document.querySelector("#questionFive");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var timerCount;
var correctCounter = 0;
var loseCounter = 0;
var isWin = false;
var finalScore = document.querySelector("#finalScore");
var timeOut = document.querySelector("#timeOut");
let qnChoice = "";
let score = 0;
let iterationNum = 0;
let question = document.querySelector(".Question");
var questionList = ["Commonly used data types do not include...", "The condition in an if/else statement is enclosed within", "A very useful tool used during development and debugging for printing content to the debugger is...", "Arrays in JavaScript can be used to store...", "String values must be enclosed within_when being assigned to variables."];

questionOne.style.display = "none";
startBtn.style.display = "none";
timerElement.style.display = "none";
questionTwo.style.display = "none";
questionThree.style.display = "none";
questionFour.style.display = "none";
questionFive.style.display = "none";
results.style.display = "none";
timeOut.style.display = "none";

function greeting() {
	headerText.innerHTML = "";
	headerText.innerHTML = "Hello " + userName.value + ", good luck! Let the timer begin.";
	greetingInput.style.display = "none";
	startBtn.style.display = "block";
	question.innerHTML = questionList[iterationNum];
}

function startGame() {
	startBtn.style.display = "none";
	headerText.style.display = "none";
	questionOne.style.display = "block";
	timerElement.style.display = "block";
	timerCount = 60;
	timerElement.textContent = timerCount;
	startTimer();
}

function startTimer() {
	var timer = setInterval(function () {
		timerCount--;
		timerElement.textContent = timerCount;
		if (timerCount === 0) {
			clearInterval(timer);
			loseGame();
		}
	}, 1000);
}

startBtn.addEventListener("click", startGame);

function incorrectFunction(choice) {
	if ((incorrectFunction = choice)) {
		score = score;
	}
	alert("Incorrect");
	timerCount = timerCount - 10;
	questionOne.style.display = "none";
	questionTwo.style.display = "block";
}

function correctFunction(choice) {
	if ((correctFunction = choice)) {
		score += 20;
	}
	alert("Correct");
	questionOne.style.display = "none";
	questionTwo.style.display = "block";
}

function incorrectFunction2(choice) {
	if ((incorrectFunction2 = choice)) {
		score = score;
	}
	alert("Incorrect");
	timerCount = timerCount - 10;
	questionTwo.style.display = "none";
	questionThree.style.display = "block";
}

function correctFunction2(choice) {
	if ((correctFunction2 = choice)) {
		score += 20;
	}
	alert("Correct");
	questionTwo.style.display = "none";
	questionThree.style.display = "block";
}

function incorrectFunction3(choice) {
	if ((incorrectFunction3 = choice)) {
		score = score;
	}
	alert("Incorrect");
	timerCount = timerCount - 10;
	questionThree.style.display = "none";
	questionFour.style.display = "block";
}

function correctFunction3(choice) {
	if ((correctFunction3 = choice)) {
		score += 20;
	}
	alert("Correct");
	questionThree.style.display = "none";
	questionFour.style.display = "block";
}
function incorrectFunction4(choice) {
	if ((incorrectFunction4 = choice)) {
		score = score;
	}
	alert("Incorrect");
	timerCount = timerCount - 10;
	questionFour.style.display = "none";
	questionFive.style.display = "block";
}

function correctFunction4(choice) {
	if ((correctFunction4 = choice)) {
		score += 20;
	}
	alert("Correct");
	questionFour.style.display = "none";
	questionFive.style.display = "block";
}

function incorrectFunction5(choice) {
	if ((incorrectFunction5 = choice)) {
		score = score;
	}
	alert("Incorrect");
	timerCount = timerCount - 10;
	questionFive.style.display = "none";
	results.style.display = "block";
	document.getElementById("finalScore").textContent = score;
	const scores = JSON.parse(localStorage.getItem("highScore")) || [];
	scores.push(finalScore.textContent);
	scores.sort();
	if (scores.length > 10) {
		scores.shift();
	}
	localStorage.setItem("score - " + userName.value, score);
	var keys = Object.keys(localStorage);
	keys.forEach((key) => {
		if (key.indexOf("score") != -1) {
			var value = localStorage.getItem(key);
		}
	});
}

function correctFunction5(choice) {
	if ((correctFunction5 = choice)) {
		score += 20;
	}
	alert("Correct");
	questionFive.style.display = "none";
	results.style.display = "block";
	document.getElementById("finalScore").textContent = score;
	const scores = JSON.parse(localStorage.getItem("highScore")) || [];
	scores.push(finalScore.textContent);
	scores.sort();
	if (scores.length > 10) {
		scores.shift();
	}
	localStorage.setItem("score - " + userName.value, score);
}

function loseGame() {
	questionOne.style.display = "none";
	startBtn.style.display = "none";
	timerElement.style.display = "none";
	questionTwo.style.display = "none";
	questionThree.style.display = "none";
	questionFour.style.display = "none";
	questionFive.style.display = "none";
	results.style.display = "none";
	timeOut.style.display = "block";
	document.getElementById("timeOutFinalScore").textContent = score;

	const scores = JSON.parse(localStorage.getItem("highScore")) || [];
	scores.push(arr);
	scores.sort();
	if (scores.length > 10) {
		scores.shift();
	}
	//localStorage.setItem("highScore", JSON.stringify(scores));

	localStorage.setItem("score - " + userName.value, score);
}
