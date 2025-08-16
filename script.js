function getComputerChoice() {
    let randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

console.log(getComputerChoice());

function getHumanChoice() {
    return prompt('Break/Cut/Wrap?');
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();

    let humanWins = (
        (humanChoice === 'ROCK' && computerChoice === 'SCISSORS')
        || (humanChoice === 'PAPER' && computerChoice === 'ROCK')
        || (humanChoice === 'SCISSORS' && computerChoice === 'PAPER')
    );

    if (humanWins) {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}
