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
    let user_choice = prompt("Choose wisely: rock, paper, or scissors?")
    return user_choice;
}

function playRound(humanChoice = humanChoice.toLowerCase(), computerChoice) {
    let result = "draw"
    if (computerChoice === "rock") {
        if (humanChoice === "rock") {
            console.log("Draw")
        }
        else if (humanChoice === "paper") {
            console.log("Human wins. Paper beats rock")
            result = "human"
        }
        else {
            console.log("Human loses. Rock beats scissors")
            result = "computer"
        }
    }
    else if (computerChoice === "paper") {
        if (humanChoice === "rock") {
            console.log("Human loses. Paper beats rock")
            result = "computer"
        }
        else if (humanChoice === "paper") {
            console.log("Draw")
        }
        else {
            console.log("Human wins. Scissors beats paper")
            result = "human"
        }
    }
    else {
        if (humanChoice === "rock") {
            console.log("Human wins. Rock beats scissors")
            result = "human"
        }
        else if (humanChoice === "paper") {
            console.log("Human loses. Scissors beat paper")
            result = "computer"
        }
        else {
            console.log("Draw")
        }
    }
    return result
}

let humanScore = 0
let computerScore = 0

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//playRound(humanSelection, computerSelection);

if (playRound(humanSelection, computerSelection) === "human") {
    humanScore++;
    //console.log(humanScore);
}
else if (playRound(humanSelection, computerSelection) === "computer") {
    computerScore++;
    //console.log(computerScore);
}
/* else {
    console.log("no points");
} */