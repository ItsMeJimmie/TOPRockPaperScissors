let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const random = Math.random();
    const number = Math.floor(random * 3) + 1;

    switch (number) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "try again";
    }
} 

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Tie";
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
               (humanChoice === "paper" && computerChoice === "rock") ||
               (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        return "Human Wins";
    } else {
        computerScore++;
        return "Computer Wins";
    }
}

function checkWinner() {
    if (humanScore == 5 || computerScore == 5) {
        if (humanScore > computerScore) {
            return "Player has beaten the computer";
        } else if (computerScore > humanScore) {
            return "Computer has beaten the player";
        }
        return null;
    }
}

function game(event) {
    const humanChoice = event.target.id;
    const result = playRound(humanChoice, getComputerChoice());
    const gameWinner = checkWinner();

    document.getElementById('finalScore').textContent = `Player Score: ${humanScore} and Computer Score: ${computerScore}`;
    
    if (gameWinner) {
        document.getElementById('finalScore').textContent = gameWinner;
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', game));
