// rock paper scissors !

let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultsDiv = document.querySelector("#results")

const winner = document.createElement("p");
const score = document.createElement("p");


function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        choice = "rock";
    }
    else if (choice === 1) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    return choice;
}

function playRound(humanChoice) {

    const computerChoice = getComputerChoice();
    
    if (humanChoice === computerChoice){
        winner.textContent = "It's a draw!";
    }

    else if (
    ((humanChoice === "rock") && (computerChoice === "scissors")) || 
    ((humanChoice === "paper") && (computerChoice === "rock")) ||
    ((humanChoice === "scissors") && (computerChoice === "paper"))
    ) { 
        humanScore++;
        winner.textContent = "Human Wins!";
    }

    else {
        computerScore++;
        winner.textContent = "Computer Wins!";
    }
    
    if (humanScore == 5) {
        winner.textContent = "Game Over. Human Wins!";
    }
    else if (computerScore == 5) {
        winner.textContent = "Game Over. Computer Wins!";
    }

    score.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
    resultsDiv.appendChild(winner);
    resultsDiv.appendChild(score);
}

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));