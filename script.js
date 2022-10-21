const CHOICES = ['rock', 'paper', 'scissors'];

function random(start, end) {
    return (Math.floor(Math.random() * (end - start)) + start);
}

function getComputerChoice() {
    return CHOICES[random(0, CHOICES.length)];
}

function whoWins(choice1, choice2) {
    /* This function returns 0 if it's a tie
    , 1 if player1 wins
    , -1 if player2 wins */

    // Define needed variables
    let val1 = CHOICES.indexOf(choice1);
    let val2 = CHOICES.indexOf(choice2);
    let diff = val1 - val2;

    // Reverse diff sign if the difference is 2 and normalize it
    if (Math.abs(diff) === 2) {
        diff = (-diff / Math.abs(diff));
    };

    return diff;
};

function playRound(playerSelection, computerSelection) {
    
    // Main game logic 
    let gameValue = whoWins(playerSelection, computerSelection);

    if (gameValue === 0) {
        return [`It's a tie, you both chose ${playerSelection}.`, gameValue];
    }
    else if (gameValue > 0) {
        return [`You win! ${playerSelection} beats ${computerSelection}.`, gameValue];
    }
    else {
        return [`Computer wins! ${computerSelection} beats ${playerSelection}.`, gameValue];
    };
};

function game() {
    // This function gets the player choice and starts the game

    // Variables to store scores
    let playerScore = 0;
    let computerScore = 0;
    let round;

    // Select all buttons 
    buttons = document.querySelectorAll(".buttons");

    // Add event listener to each button
    buttons.forEach(button => {button.addEventListener('click', e => {
        if (playerScore < 5 && computerScore < 5){
            playerSelection = e.target['id'];
        
            // Play round
            round = playRound(playerSelection, getComputerChoice());

            // Update scores
            if (round[1] > 0) {
                playerScore += round[1];
            }
            else if (round[1] < 0) {
                computerScore += -round[1];
            };

            // View the new scores and game value
            document.querySelector('#player').textContent = `Your score: ${playerScore}`;
            document.querySelector('#computer').textContent = `Computer score: ${computerScore}`;
            document.querySelector('.result').textContent = `${round[0]}`;

            if (computerScore === 5) {
                document.querySelector('.result').textContent = 'Computer wins the game!';
            }
            else if (playerScore === 5) {
                document.querySelector('.result').textContent = 'You win the game!';
            }
        }
        else {
            document.querySelector('.result').textContent = 'Please reload page to play again.';
        }
        });
    });
}
game();