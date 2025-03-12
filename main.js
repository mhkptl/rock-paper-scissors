// rock paper scissors !

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

function getHumanChoice() {
    let user_choice = prompt("Choose wisely: rock, paper, or scissors?");
    return user_choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let result = "draw";
    if (computerChoice === "rock") {
        if (humanChoice === "rock") {
            console.log("Draw");
        }
        else if (humanChoice === "paper") {
            console.log("Human wins. Paper beats rock");
            result = "human";
            humanScore++;
        }
        else {
            console.log("Human loses. Rock beats scissors");
            result = "computer";
            computerScore++;
        }
    }
    else if (computerChoice === "paper") {
        if (humanChoice === "rock") {
            console.log("Human loses. Paper beats rock");
            result = "computer";
            computerScore++;
        }
        else if (humanChoice === "paper") {
            console.log("Draw");
        }
        else {
            console.log("Human wins. Scissors beats paper");
            result = "human";
            humanScore++;
        }
    }
    else {
        if (humanChoice === "rock") {
            console.log("Human wins. Rock beats scissors");
            result = "human";
            humanScore++;
        }
        else if (humanChoice === "paper") {
            console.log("Human loses. Scissors beat paper");
            result = "computer";
            computerScore++;
        }
        else {
            console.log("Draw");
        }
    }
    return result;
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    

    for (let round = 1; round <= 5; round++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

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
}


playGame();
