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
