
function getComputerChoice() {
    const options = ['rock', 'paper', 'scissor'];
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

//console.log(getComputerChoice());

