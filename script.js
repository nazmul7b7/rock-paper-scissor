
function getComputerChoice() {
    const options = ['rock', 'paper', 'scissor'];
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

//console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {        
    if (playerSelection === 'rock' && computerSelection === 'scissor') {
        playerScore++;
        return "You Win! rock beats scissor";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return "You Win! paper beats rock";
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        playerScore++;
        return "You Win! scissor beats paper";
    } else if (playerSelection === computerSelection) {
        return `It's a tie. Both picked ${computerSelection}`
    } else {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

let playerScore = 0;
let computerScore = 0;

function game() {
    for (i = 0; i < 5; i++) {
        const playerChoice = prompt("Pick a move: ");
        const playerSelection = playerChoice.toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`PlayerScore: ${playerScore} ComputerScore: ${computerScore}`);
        
    }
}

function score() {
    if (playerScore > computerScore) {
        return "Victory! You Won";
    } else if (playerScore < computerScore) {
        return "Defeat! You Lose";
    } else {
        return "Tie";
    }
}

game();

console.log(score());

