const CHOICES = ['rock', 'paper', 'scissors'];

function random(start, end) {
    return (Math.floor(Math.random() * (end - start)) + start);
}

function getComputerChoice() {
    return CHOICES[random(0, CHOICES.length)]
}

function getUserChoice() {
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
    , a positive value if player1 wins
    , and a negative value if player2 wins */

    // Define needed variables
    let val1 = CHOICES.indexOf(choice1);
    let val2 = CHOICES.indexOf(choice2);
    let diff = val1 - val2;

    // Reverse diff sign if the difference is 2
    if (Math.abs(diff) === 2) {
        diff = -diff;
    }

    return diff;
}


