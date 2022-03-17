//These are a comprehensive list of variables used in below code//
const highScoresList = document.querySelector("#highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//Joins the saved score numeric value and username//
highScoresList.innerHTML = highScores
	.map((score) => {
		return `<li class="high-score">${score.name} - ${score.score}</Li>`;
	})
	.join("");
