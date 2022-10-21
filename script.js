const CHOICES = ['rock', 'paper', 'scissors'];

function random(start, end) {
    return (Math.floor(Math.random() * (end - start)) + start);
}

function getComputerChoice() {
    return CHOICES[random(0, CHOICES.length)]
}

function getPlayerChoice() {
    do {
        playerSelection = prompt("What is your choice?");
        if (playerSelection === null) {
            alert('please type in a choice!');
            continue;
        }
        playerSelection = playerSelection.toLowerCase();
        if (!CHOICES.includes(playerSelection)) {
            alert('invalid choice');
            continue
        }
    } while (!CHOICES.includes(playerSelection) || playerSelection === null);
    
    return playerSelection;
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
        diff = (-diff / diff);
    }

    return diff;
}

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
    }
}

function game() {
    
    // Variables to store scores
    let playerScore = 0;
    let computerScore = 0;

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        // Call function playRound and score its values
        let round = playRound(getPlayerChoice(), getComputerChoice());
        
        // Update scores
        if (round[1] > 0) {
            playerScore += round[1];
        }
        else if (round[1] < 0) {
            computerScore += -round[1];
        }
        
        // Log the round result and scores
        console.log('-----------------------------------------');
        console.log(round[0]);
        console.log(`Your current score: ${playerScore}`);
        console.log(`Computer current score: ${computerScore}`);

        // Return if one of the computer or player scored 3
        if (playerScore >= 3) {
            console.log('You win this game!');
            return;
        }
        else if (computerScore >= 3) {
            console.log('You Lose! computer scored 3.');
            return;
        }
    }

    // Log scores after 5 rounds
    if (playerScore === computerScore) {
        console.log(`The game is tied, you both scored ${computerScore}.`);
    }
    else if (playerScore > computerScore) {
        console.log(`You win! Your final score is ${playerScore}, and computer final score is ${computerScore}.`);    
    }
    else {
        console.log(`You lose! Your final score is ${playerScore}, and computer final score is ${computerScore}.`);    
    }

    // Terminate the function
    return;
}
