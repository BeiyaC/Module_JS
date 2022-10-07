// you can write js here
console.log('exo-3');

let playerInput = prompt('Your choice ( rock, paper, scissors) ?');

function getPlayerChoice(playerInput) {
    playerInput = playerInput.toLowerCase();

    if (playerInput === 'rock' || playerInput === 'paper' || playerInput === 'scissors') {
        return playerInput;
    }
    return console.log('error');
};

function getComputerChoice() {

    let rand = Math.floor(Math.random() * 3);

    if (rand === 0) {
        return rand = 'rock';
    } else if (rand === 1) {
        return rand = 'paper';
    } else if (rand === 2) {
        return rand = 'scissors';
    }
}

function findWinner(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        return 'Tied';
    } else if (playerChoice === 'rock' && computerChoice === 'scissors' || playerChoice === 'scissors' && computerChoice === 'paper' || playerChoice === 'paper' && computerChoice === 'rock') {
        return 'Won';
    } else {
        return 'Lost';
    }

}

function playGame(){

    playerInput = playerInput.toLowerCase();

    if(playerInput === 'bomb'){
        return console.log('Won');
    } else {
        const uChoice = getPlayerChoice(playerInput);
        const computerChoice = getComputerChoice();

        console.log(uChoice, computerChoice);
        console.log(findWinner(uChoice,computerChoice));
    }

}

 playGame();
