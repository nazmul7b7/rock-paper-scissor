
function getComputerChoice() {
    const options = ['rock', 'paper', 'scissor'];
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

//console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    //const playerChoice = playerSelection.toLowerCase();    
    if (playerSelection === 'rock' && computerSelection === 'scissor') {
        return "You Win! rock beats paper";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You Win! paper beats rock";
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        return "You Win! scissor beats paper";
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

const playerChoice = "rock";
const playerSelection = playerChoice.toLowerCase();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
