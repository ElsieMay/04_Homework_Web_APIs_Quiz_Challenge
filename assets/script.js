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
var quA = document.querySelector("#quA");
var curA = document.querySelector("#curA");
var parA = document.querySelector("#parA");
var squA = document.querySelector("#squA");
var javA = document.querySelector("#quA");
var terA = document.querySelector("#curA");
var forA = document.querySelector("#parA");
var conA = document.querySelector("#conA");
var javA = document.querySelector("#numsA");
var terA = document.querySelector("#othA");
var forA = document.querySelector("#bolA");
var conA = document.querySelector("#allA");
var javA = document.querySelector("#comA");
var terA = document.querySelector("#cubA");
var forA = document.querySelector("#qutA");
var conA = document.querySelector("#paraA");
var scoreN = document.querySelector("scoreN");
var finalScore = document.querySelector("#finalScore");
var timeOut = document.querySelector("#timeOut");
let qnChoice = "";
let score = 0;

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

function sFunction() {
	qnChoice = "s";
	if ((sFunction = "s")) {
		score = score;
	}
	alert("Incorrect");
	timerCount = timerCount - 10;
	questionOne.style.display = "none";
	questionTwo.style.display = "block";
}
function bFunction() {
	qnChoice = "b";
	if ((bFunction = "b")) {
		score = score;
	}
	alert("Incorrect");
	timerCount = timerCount - 10;
	questionOne.style.display = "none";
	questionTwo.style.display = "block";
}
function aFunction() {
	qnChoice = "a";
	if ((aFunction = "s")) {
		score += 20;
	}
	alert("Correct");
	questionOne.style.display = "none";
	questionTwo.style.display = "block";
}
function nFunction() {
	qnChoice = "n";
	if ((nFunction = "n")) {
		score = score;
	}
	alert("Incorrect");
	timerCount = timerCount - 10;
	questionOne.style.display = "none";
	questionTwo.style.display = "block";
}

function qFunction() {
	qnChoice = "q";
	if ((sFunction = "q")) {
		score = score;
	}
	alert("Incorrect");
	timerCount = timerCount - 10;
	questionTwo.style.display = "none";
	questionThree.style.display = "block";
}
function cbFunction() {
	qnChoice = "c";
	if ((cbFunction = "c")) {
		score = score;
	}
	alert("Incorrect");
	timerCount = timerCount - 10;
	questionTwo.style.display = "none";
	questionThree.style.display = "block";
}
function prFunction() {
	qnChoice = "pa";
	if ((prFunction = "pa")) {
		score += 20;
	}
	alert("Correct");
	questionTwo.style.display = "none";
	questionThree.style.display = "block";
}
function sqFunction() {
	qnChoice = "sq";
	if ((sqFunction = "sq")) {
		score = score;
	}
	alert("Incorrect");
	timerCount = timerCount - 10;
	questionTwo.style.display = "none";
	questionThree.style.display = "block";
}
function jFunction() {
	qnChoice = "j";
	if ((jFunction = "j")) {
		score = score;
	}
	alert("Incorrect");
	timerCount = timerCount - 10;
	questionThree.style.display = "none";
	questionFour.style.display = "block";
}
function tFunction() {
	qnChoice = "t";
	if ((tFunction = "t")) {
		score = score;
	}
	alert("Incorrect");
	timerCount = timerCount - 10;
	questionThree.style.display = "none";
	questionFour.style.display = "block";
}
function flFunction() {
	qnChoice = "fl";
	if ((flFunction = "fl")) {
		score = score;
	}
	alert("Incorrect");
	timerCount = timerCount - 10;
	questionThree.style.display = "none";
	questionFour.style.display = "block";
}
function clFunction() {
	qnChoice = "cl";
	if ((clFunction = "cl")) {
		score += 20;
	}
	alert("Correct");
	questionThree.style.display = "none";
	questionFour.style.display = "block";
}
function nsFunction() {
	qnChoice = "ns";
	if ((nsFunction = "ns")) {
		score = score;
	}
	alert("Incorrect");
	timerCount = timerCount - 10;
	questionFour.style.display = "none";
	questionFive.style.display = "block";
}
function oaFunction() {
	qnChoice = "oa";
	if ((oaFunction = "oa")) {
		score = score;
	}
	alert("Incorrect");
	timerCount = timerCount - 10;
	questionFour.style.display = "none";
	questionFive.style.display = "block";
}
function blFunction() {
	qnChoice = "bl";
	if ((blFunction = "bl")) {
		score = score;
	}
	alert("Incorrect");
	timerCount = timerCount - 10;
	questionFour.style.display = "none";
	questionFive.style.display = "block";
}
function allFunction() {
	qnChoice = "all";
	if ((allFunction = "all")) {
		score += 20;
	}
	alert("Correct");
	questionFour.style.display = "none";
	questionFive.style.display = "block";
}
function coFunction() {
	qnChoice = "co";
	if ((coFunction = "co")) {
		score = score;
	}
	alert("Incorrect");
	timerCount = timerCount - 10;
	questionFive.style.display = "none";
	results.style.display = "block";
	document.getElementById("finalScore").textContent = score;
}
function cuFunction() {
	qnChoice = "cu";
	if ((cuFunction = "cu")) {
		score = score;
	}
	alert("Incorrect");
	timerCount = timerCount - 10;
	questionFive.style.display = "none";
	results.style.display = "block";
	document.getElementById("finalScore").textContent = score;
}
function quFunction() {
	qnChoice = "qu";
	if ((quFunction = "qu")) {
		score += 20;
	}
	alert("Correct");
	questionFive.style.display = "none";
	results.style.display = "block";
	document.getElementById("finalScore").textContent = score;
}
function paFunction() {
	qnChoice = "par";
	if ((paFunction = "par")) {
		score = score;
	}
	alert("Incorrect");
	timerCount = timerCount - 10;
	questionFive.style.display = "none";
	results.style.display = "block";
	document.getElementById("finalScore").textContent = score;
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
}
