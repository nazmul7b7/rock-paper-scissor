const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const divAnswers = document.querySelector(".answer");
let computerCount = 0, humanCount = 0, ties = 0;


rock.addEventListener("click", () => {
    console.log(game("rock"));
  });

paper.addEventListener("click", () => {
    console.log(game("paper"));
});

scissor.addEventListener("click", () => {
    console.log(game("scissor"));
});

// Picks the computer's choice randomly.
function getComputerChoice() {
    const options = ['rock', 'paper', 'scissor'];
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

const updateUI = (compSelection, humanSelection, result) => {
    let textContent = "";

    if (result === "Machine") computerCount++;
    else if (result === "Player") humanCount++;
    else ++ties;

    textContent = `
    <p>Computer: ${compSelection}</p>
    <p>Human: ${humanSelection}</p>
    <p>Winner: ${result}</p>
    <p>Human Player Wins: ${humanCount}</p>
    <p>Machine Wins: ${computerCount}</p>
    <p>Ties in Game: ${ties}</p>
  `;


    divAnswers.innerHTML = textContent;

    if (humanCount >= 5 || computerCount >= 5) {
        if (humanCount > computerCount) {
            alert("Won by human");
        } else {
            alert("Won by machine");
        }              
    }
};


function playRound(playerSelection, computerSelection) {
    let outcome;        
    if (playerSelection === 'rock' && computerSelection === 'scissor') {
        outcome = "Player";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        outcome = "Player";
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        outcome = "Player";
    } else if (playerSelection === computerSelection) {
        outcome = "Tie";
    } else {
        outcome = "Machine";
    }

    updateUI(computerSelection, playerSelection, outcome);

    return outcome;
}

const game = (playerChoice) => {
    const computerSelection = getComputerChoice();
    const winner = playRound(playerChoice, computerSelection);
    if (winner === "Player") return "Player won";
    else if (winner === "Machine") return "Machine won";
    else return "Tie";
};
