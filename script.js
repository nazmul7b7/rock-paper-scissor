function getComputerChoice() {
    const options = ['rock', 'paper', 'scissor'];
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

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

function game() {
    for (i = 0; i < 5; i++) {
        const playerChoice = prompt("Pick a move: ");
        const playerSelection = playerChoice.toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));        
    }
}

let playerScore = 0;
let computerScore = 0;

function scoreCount() {    
    if (playerScore > computerScore) {
        return `Victory! Your Score: ${playerScore} Computer Score: ${computerScore}`;
    } else if (playerScore < computerScore) {
        return `Defeat! Your Score: ${playerScore} Computer Score: ${computerScore}`;
    } else {
        return `Tie! Your Score: ${playerScore} Computer Score: ${computerScore}`;
    }
}

game();
console.log(scoreCount());