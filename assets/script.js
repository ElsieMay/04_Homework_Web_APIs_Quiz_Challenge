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
var strA = document.querySelector("#strA");
var booA = document.querySelector("#booA");
var alrA = document.querySelector("#alrA");
var numA = document.querySelector("#numA");
let qnChoice = "";
let score = 0;

questionOne.style.display = "none";
startBtn.style.display = "none";
timerElement.style.display = "none";
questionTwo.style.display = "none";
questionThree.style.display = "none";
questionFour.style.display = "none";
questionFive.style.display = "none";

function greeting() {
	headerText.innerHTML = "";
	headerText.innerHTML = "Hello " + userName.value + ", good luck! Let the timer begin.";
	greetingInput.style.display = "none";
	startBtn.style.display = "block";
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

function winGame() {
	console.log("You won");
	correctCounter + 20;
}

function loseGame() {
	console.log("You Lost");
}

function startTimer() {
	var timer = setInterval(function () {
		timerCount--;
		timerElement.textContent = timerCount;
		if (timerCount > 0) {
			if (isWin) {
				winGame();
			}
		}
		if (timerCount === 0) {
			clearInterval(timer);
			loseGame();
		}
	}, 1000);
}

startBtn.addEventListener("click", startGame);

function sFunction() {
	qnChoice = "s";
	if ((sFunction = "s")) {
		score = score;
	}
	alert("Incorrect");
}
function bFunction() {
	qnChoice = "b";
	if ((bFunction = "b")) {
		score = score;
	}
	alert("Incorrect");
}
function aFunction() {
	qnChoice = "a";
	if ((aFunction = "s")) {
		score += 20;
	}
	alert("Correct");
}
function nFunction() {
	qnChoice = "n";
	if ((nFunction = "n")) {
		score = score;
	}
	alert("Incorrect");
}
