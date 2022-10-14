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
