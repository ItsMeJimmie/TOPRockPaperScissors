function getComputerChoice (min, max) {
    const random = Math.random();
    const number = Math.floor(random * 3) + 1;

    switch (number) {
        case 1 :
            return "rock";
        case 2 :
            return "paper";
        case 3 :
            return "scissors";
        default :
            return "try again";
    }
} 

function getHumanChoice() {

    let userChoice = prompt("Rock, Paper, Scissors?: ");
    userChoice.toLowerCase();

    return userChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if(humanChoice === computerChoice){
        console.log("Tie!!");
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper") ) {
        humanScore ++;
        console.log(`Human wins!! ${humanChoice} beats ${computerChoice}!!`);
    } else {
        computerScore ++;
        console.log(`Computer wins!! ${computerChoice} beats ${humanChoice}!!`);
    }
}

function playGame() {
    for(let i = 1; i <= 5; i++) {
        playRound(getHumanChoice(),getComputerChoice(1,3))
        console.log(`Player Score: ${humanScore} and computer score: ${computerScore}`);
    }
    
}

console.log(playGame());
