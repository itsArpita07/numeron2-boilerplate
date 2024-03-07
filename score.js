// Iteration 8: Making scoreboard functional

const playAgainBtn = document.getElementById("play-again-button");
const scoreBoard = document.getElementById("score-board");

if (playAgainBtn)
  playAgainBtn.onclick = function () {
    window.location.href = "./index.html";
  };


if (scoreBoard) scoreBoard.innerText = localStorage.getItem("score");