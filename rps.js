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

    return userChoice;
}

