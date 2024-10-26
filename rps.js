let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const resultDiv = document.getElementById("results");
  const scoreDiv = document.getElementById("score");

  let result;

  if (humanChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    result = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    result = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  resultDiv.textContent = result;
  scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5) {
    resultDiv.textContent = "Congratulations you win the game!";
    resetGame();
  } else if (computerScore === 5) {
    resultDiv.textContent = "Too bad you lose!";
    resetGame();
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  setTimeout(() => {
    document.getElementById("results").textContent = "Make your choice!";
    document.getElementById("score").textContent = "Human: 0 | Computer: 0";
  }, 2000);
}

document
  .getElementById("rock")
  .addEventListener("click", () => playRound("rock"));
document
  .getElementById("paper")
  .addEventListener("click", () => playRound("paper"));
document
  .getElementById("scissors")
  .addEventListener("click", () => playRound("scissors"));
