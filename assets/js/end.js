//These are a comprehensive list of variables used in below code//
const username = document.querySelector("#username");
const saveScoreBtn = document.querySelector("#saveScoreBtn");
const finalScore = document.querySelector("#finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;
//This is the event listener for saving score//
username.addEventListener("keyup", () => {
	saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
	//Allows us to click button without prefault refresh//
	e.preventDefault();
	const score = {
		score: mostRecentScore,
		name: username.value,
	};
	//Pushes and sorts numeric high score values//
	highScores.push(score);
	highScores.sort((a, b) => {
		return b.score - a.score;
	});
	highScores.splice(5);
	//The below saves the score result to local storage//
	localStorage.setItem("highScores", JSON.stringify(highScores));
	//Assigns high score page location when score is saved//
	window.location.assign("../pages/highScores.html");
};
