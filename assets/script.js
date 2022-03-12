//These are a comprehensive list of variables used in below code
let userName = document.querySelector("#userName");
let headerText = document.querySelector("#headerText");
let greetingInput = document.querySelector("#greetingInput");
let startBtn = document.querySelector("#start");
let questionOne = document.querySelector("#questionOne");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var timerCount;
var winCounter;
var loseCounter;
var isWin;

questionOne.style.display = "none";
startBtn.style.display = "none";
timerElement.style.display = "none";

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
