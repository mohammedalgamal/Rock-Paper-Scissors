const choices = ['rock', 'paper', 'scissors'];

function random(start, end) {
    return (Math.floor(Math.random() * (end - start)) + start);
}

function getComputerChoice() {
    return choices[random(0, choices.length)]
}