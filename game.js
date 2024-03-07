// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional


const num1Elem = document.getElementById("number1");
const num2Elem = document.getElementById("number2");
const num3Elem = document.getElementById("number3");
const timerElem = document.getElementById("timer");
let number1;
let number2;
let number3;
let answer;
let operator;
let score = 0;
let intervalId;
let timeRemaining = 10;

function randomNumber() {
  return Math.floor(Math.random() * 200) + 20;
}
function displayRandomNumber() {
  number1 = randomNumber();
  number2 = randomNumber();
  num1Elem.innerText = number1;
  num2Elem.innerText = number2;
  operator = randomiseFunction();
  stopInterval();
}

function randomiseFunction() {
  const btnContainer = document.querySelectorAll("#buttons > img");
  const randomNumber = Math.floor(Math.random() * 5);
  const operation = btnContainer[randomNumber].id;
  switch (operation) {
    case "plus":
      answer = number1 + number2;
      break;
    case "minus":
      answer = number1 - number2;
      break;
    case "mul":
      answer = number1 * number2;
      break;
    case "divide":
      answer = (number1 / number2).toFixed(2);
      break;
    case "modulus":
      answer = number1 % number2;
      break;
  }
  num3Elem.innerText = answer;
  return btnContainer[randomNumber].id;
}


function checker(clickedButton) {
  if (operator === clickedButton) {
    score += 5;

    displayRandomNumber();
  } else {
    gameOver();
  }
}

function startInterval() {
  intervalId = setInterval(() => {
    timeRemaining--;
    timerElem.innerText = timeRemaining;
    if (timeRemaining == 0) gameOver();
  }, 1000);
}
function stopInterval() {
  timeRemaining = 10;
  timerElem.innerText = timeRemaining;
}

function gameOver() {
  stopInterval();
  window.location.href = "./gameover.html";
  localStorage.setItem("score", score);
}

const btnContainer = document.getElementById("buttons");
btnContainer.addEventListener("click", (e) => checker(e.target.id));
displayRandomNumber();
startInterval();