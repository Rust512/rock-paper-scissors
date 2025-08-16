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

function getHumanChoice() {
    return prompt('Break/Cut/Wrap?');
}

function isUserTheWinner(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();

    let humanWins = (
        (humanChoice === 'ROCK' && computerChoice === 'SCISSORS')
        || (humanChoice === 'PAPER' && computerChoice === 'ROCK')
        || (humanChoice === 'SCISSORS' && computerChoice === 'PAPER')
    );

    let message = humanWins ? `You Win! ${humanChoice} beats ${computerChoice}` : `You Lose! ${computerChoice} beats ${humanChoice}`;
    console.log(message);

    return humanWins;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let round = 0;
    while (round < 5) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        if (humanChoice === computerChoice) {
            console.log('It\'s a tie!');
            continue;
        }

        isUserTheWinner(humanChoice, computerChoice) ? humanScore++ : computerScore++;
        round++;
    }

    if (humanScore > computerScore) {
        console.log(`You win! Final score: ${humanScore} - ${computerScore}`);
    } else {
        console.log(`You lose! Final score: ${computerScore} - ${humanScore}`);
    }
}

playGame();
