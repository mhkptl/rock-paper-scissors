// rock paper scissors !

let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultsDiv = document.querySelector("#results")

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

/*
function getHumanChoice() {
    let user_choice = prompt("Choose wisely: rock, paper, or scissors?");
    return user_choice;
}
*/

function playRound(humanChoice) {
    //humanChoice = humanChoice.toLowerCase();
    const computerChoice = getComputerChoice();

    let result = "";
    
    if (humanChoice === computerChoice){
        console.log("Draw");
        result = "Draw";
    }

    else if (
    ((humanChoice === "rock") && (computerChoice === "Scissors")) || 
    ((humanChoice === "paper") && (computerChoice === "rock")) ||
    ((humanChoice === "scissors") && (computerChoice === "paper"))
    ) {
        console.log("Human Wins");
        humanScore++;
        result = "Human";
    }

    else {
        console.log("Computer Wins");
        computerScore++;
        result = "Computer";
    }
    
    return result;
}

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));

/*
function playGame() {

    for (let round = 1; round <= 5; round++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);  
    }

    if (humanScore > computerScore) {
        console.log("Human wins the game!");
    }
    else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    }
    else {
        console.log("The game is a tie.")
    }
}

console.log("hello");

playGame();

*/


